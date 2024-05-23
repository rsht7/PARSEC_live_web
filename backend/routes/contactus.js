const express = require('express')
const contactedForm = require('../controllers/contactusController')

const router = express.Router()

router.post('/', contactedForm)

module.exports = router;