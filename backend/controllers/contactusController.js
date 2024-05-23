const Contact = require('../models/contactusModel')
const mongoose = require('mongoose')

const contactedForm = async (req, res) =>{
    const {name, email, query} = req.body
    
    try{
        const contact = await Contact.create({name, email, query})
        res.status(200).json(contact)
    } catch (error) {
        res.status(400).json({error : error.message})

    }
}

module.exports = contactedForm