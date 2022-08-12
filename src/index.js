import express from 'express'
import mongoose from 'mongoose'

const app = express()

//Data Base conncet

async function main(){
   await mongoose.connect('mongodb://localhost:27017/test')
   
   app.listen(3000, () => console.log('Server on port 3000'))
}

main().catch(err => console.log(err))

