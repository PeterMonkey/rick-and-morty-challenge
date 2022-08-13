import characterModel from "../schema/character-schema.js";
import fetch from "node-fetch";

const url = 'https://rickandmortyapi.com/api/character/'

const setCharacters = async () => {

  //delete collection
  await characterModel.deleteMany({})

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
      const newCharacter = new characterModel({name:res.name})
      newCharacter.save()
      console.log(res)
    }catch(error){
      console.log(error)
    }
  }
}

export default setCharacters