import characterModel from '../schema/character-schema.js'
import episodeModel from '../schema/episode-schema.js'

const episodeLocation = async () => {
    const response = { exercise_name: '', time: null, in_time: null, results: null };
    const result = [];
    const time = new Date()



    try{
         const episodes = await episodeModel.find({}).select('-_id')
         const characters = episodes.map(async episode => console.log(episode))
        console.log(characters)
        
        // const response = await Promise.all(episodes.map(async (episode) => {
        //     const charsId = episode.character
        //     const origin = Promise.all(charsId.map(async (id) =>{
        //         await characterModel.find({id}).select("-_id")
        //     }))
        //     const noRepeatOrig = [...new Set(origin)]
        //     return { name: episodes.name, episode: episodes.episode, locations: noRepeatOrigins }
        // }))
        // result.push(response)
    }catch(error){
        console.log(error)
    }
    
}

export default episodeLocation