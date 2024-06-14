const Newslettersubs = require('../models/newslettersubsModel')
const mongoose = require('mongoose')

const newslettersubsForm = async (req, res) =>{
    const {email} = req.body
    
    try{
        const newslettersubs = await Newslettersubs.create({email})
        res.status(200).json(newslettersubs)
    } catch (error) {
        res.status(400).json({error : error.message})

    }
}

module.exports = newslettersubsForm