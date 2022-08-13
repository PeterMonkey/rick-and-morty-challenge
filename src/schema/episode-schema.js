import mongoose from 'mongoose'
const {model, Schema} = mongoose

const episodeSchema = new Schema({
    name: String,
    episode: String,
    character: [String]
})

const episodeModel = model('Episode', episodeSchema)

export default episodeModel