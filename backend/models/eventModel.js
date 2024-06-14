const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
    title:{
        required : true,
        type : String
    },

    date:{
        required : true,
        type : String
    },

    time:{
        type : String,
        required : true
    },

    location:{
        type : String,
        required : true
    },

    img:{
        type: String,
        required: true
    },

    text:{
        type : String,
        required : true
    },

    price:{
        type:Number,
        required:true

    }

}, {timestamps : true})

module.exports = mongoose.model('Event', eventSchema)