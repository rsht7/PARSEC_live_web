const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title:{
        required : true,
        type : String
    },
    reps:{
        required : true,
        type : Number
    },
    load:{
        type : Number,
        required : true
    },
    img:{
        type: String,
        required: true
    }

}, {timestamps : true})

module.exports = mongoose.model('Workout', workoutSchema)