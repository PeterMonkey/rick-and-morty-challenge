import characterModel from "../schema/character-schema.js"
import locationModel from '../schema/location-schema.js'
import episodeModel from "../schema/episode-schema.js"

const count = async (character, resource) => {
    const result = { character, count: null, resource }
    let names
    if(character == 'l'){

        names = await locationModel.find({}).select('name -_id')
    
    }
    else if(character == 'e'){
        
        names = await episodeModel.find({}).select('name -_id')
        
    }else if(character == 'c'){

        names = await characterModel.find({}).select('name -_id')
    
    }
    const resNames = names.map(item => item.name)
    result.count = resNames.join('').match(new RegExp(character, 'gi')).length
    //console.log(result)

    return result
}

export default count