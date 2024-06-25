const mongoose = require('mongoose')

const Schema = mongoose.Schema

const videoSchema = new Schema({
   
    url:{
        type : String,
        required : true
    }
    

}, {timestamps : true})

module.exports = mongoose.model('Videourl', videoSchema)