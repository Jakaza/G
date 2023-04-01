const express = require('express')
const router = express.Router();
const pageController = require('../controllers/pageController')
const validateadmin = require('../middleware/validateadmin')

// home - index.html
router.get('^/$|/index(.html)?', pageController.homePage)

// list projects - prjects.html
router.get('/work', pageController.workPage)

// contact me
router.get('/contact', pageController.contactPage)

router.get('/user/admin', pageController.adminPage, validateadmin.verifyuser);

module.exports = router;