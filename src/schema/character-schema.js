import {model, Schema} from 'mongoose'

const characterSchema = new Schema({
    name: String
})

const characterModel = model('Character', characterSchema)

export default characterModel

