const express = require('express');
const router = express.Router();
const mailController = require('../../controllers/mailController')
const validateInput = require('../../middleware/validateInput')

router.post('/api/sendemail',
    validateInput.validateField,
    validateInput.validateEmail,
    mailController.sendEmail)

module.exports = router;