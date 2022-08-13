import mongoose from 'mongoose'
const {model, Schema} = mongoose

const characterSchema = new Schema({
    name: String
})

const characterModel = model('Character', characterSchema)

export default characterModel

