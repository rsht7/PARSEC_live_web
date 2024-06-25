const express = require('express')
const videourlForm = require('../controllers/videourlController')

const router = express.Router()

router.get('/', videourlForm)

module.exports = router;