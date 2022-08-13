import locationModel from '../schema/location-schema.js'
import fetch from 'node-fetch'

const url = 'https://rickandmortyapi.com/api/location/'

const setLocation = async () => {

    await locationModel.deleteMany({})

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
        const newLocation = new locationModel({name:res.name})
        newLocation.save()
        console.log(res)
      }catch(error){
        console.log(error)
      }
    }
}

export default setLocation