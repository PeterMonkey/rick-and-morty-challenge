import episodeModel from "../schema/episode-schema.js";
import fetch from "node-fetch";

const url = 'https://rickandmortyapi.com/api/episode/'

const setEpisode = async () => {

    await episodeModel.deleteMany({})

    let count;
    try{
      const req = await fetch(url);
      const res = await req.json()
      count = res.info.count
      console.log(count)
    }catch(error) {
      console.log(error)
    }
  
    for(let i=1;i<=count;i++){
      try{
        const req = await fetch(url+i)
        const res = await req.json()
        const charsId = res.characters.map(character => character.split('/').pop()).join(',')
        
        const newEpisode = new episodeModel({name:res.name, episode:res.episode, character:charsId})
        newEpisode.save()
        //console.log(res)
      }catch(error){
        console.log(error)
      }
    }
}

export default setEpisode