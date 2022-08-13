import mongoose from 'mongoose'
const {model, Schema} = mongoose

const locationSchema = new Schema({
    name: String
})

const locationModel = model('Location', locationSchema)

export default locationModel