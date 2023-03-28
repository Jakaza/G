const express = require('express');
const router = express.Router();
const mailController = require('../../controllers/mailController')
const projectController = require('../../controllers/projectController')
const validateInput = require('../../middleware/validateInput')

router.post('/api/project/new')

router.post('/api/project/hide/:id', projectController.hideProject)

router.post('/api/project/show/:id' , projectController.showProject )
// router.delete()
// router.put()



// mini project

router.post('/api/miniproject/new')

router.post('/api/miniproject/hide/:id')

router.post('/api/miniproject/show/:id')

module.exports = router;