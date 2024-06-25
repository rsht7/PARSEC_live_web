const Videourl = require('../models/videourlModel')
const mongoose = require('mongoose')


const videourlForm = async (req,res) =>{
        const url = await Videourl.find({}).sort({createdAt: -1})
    
        res.status(200).json(url)
    }

module.exports = videourlForm