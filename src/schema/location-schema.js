import {model, nodel, Schema} from 'mongoose'

const locationSchema = new Schema({
    name: String
})

const locationModel = model('Location', locationSchema)

export default locationModel