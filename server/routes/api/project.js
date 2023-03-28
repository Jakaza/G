const express = require('express');
const router = express.Router();
const mailController = require('../../controllers/mailController')
const validateInput = require('../../middleware/validateInput')

router.post('/api/project/new')
// router.delete()
// router.put()


router.post('/api/miniproject/new')


module.exports = router;