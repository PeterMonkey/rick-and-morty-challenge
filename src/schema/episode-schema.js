import {model, Schema} from 'mongoose'

const episodeSchema = new Schema({
    name: String,
    episode: String,
    location: [String]
})

const episodeModel = model('Episode', episodeSchema)

export default episodeModel