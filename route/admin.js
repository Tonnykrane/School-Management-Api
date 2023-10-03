const express = require('express')
const router = express.Router()
const adminController = require('../controller/admin')

router.post('/register', adminController.registerAdmin)


module.exports = router;