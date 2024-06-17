const express = require('express')
const newslettersubsForm = require('../controllers/newslettersubsController')

const router = express.Router()

router.post('/', newslettersubsForm)

module.exports = router;