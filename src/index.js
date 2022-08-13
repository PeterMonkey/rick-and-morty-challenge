import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import setCharacters from './services/character-services.js'
import setLocation from './services/location-services.js'
import setEpisode from './services/episode-services.js'

dotenv.config()

const app = express()

//Data Base conncet

async function main(){
   mongoose.connect(process.env.DB_MONGO)
   await setEpisode()
   //await setLocation()
   //await setCharacters()
   app.listen(3000, () => console.log('Server on port 3000'))
}


main().catch(err => console.log(err))

