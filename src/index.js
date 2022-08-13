import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { setCharacters } from './services/character-services.js'

dotenv.config()

const app = express()

//Data Base conncet

async function main(){
   await mongoose.connect(process.env.DB_MONGO)
   //await setCharacters()
   app.listen(3000, () => console.log('Server on port 3000'))
}


main().catch(err => console.log(err))

