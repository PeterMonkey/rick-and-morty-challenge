import mongoose from 'mongoose'
const {model, Schema} = mongoose

const characterSchema = new Schema({
    id: String,
    name: String,
    origin: String
})

const characterModel = model('Character', characterSchema)

export default characterModel

