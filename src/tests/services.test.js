import mongoose from 'mongoose';
import setCharacters from "../services/character-services.js";
import characterModel from "../schema/character-schema.js";
import dotenv from 'dotenv'

dotenv.config()

describe('tensting to services', () => {
    beforeEach(() =>{
        mongoose.connect(process.env.DB_MONGO)
    })
    afterEach(() => {
        characterModel.deleteMany({})
        mongoose.connection.close()
    })

    test('setCharacaters', async () => {
        const response = await setCharacters()

        expect(response).toEqual("Rick Sanchez")
    })
})