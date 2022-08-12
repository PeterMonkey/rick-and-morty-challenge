import express from 'express'
import mongoose from 'mongoose'

const app = express()

//Data Base conncet
mongoose.connect('mongodb://localhost:27018/rmDB', (err, res) => {
    if (err) throw err
    console.log('DB en linea')
})

app.listen(3000, () => console.log('Server on port 3000'))