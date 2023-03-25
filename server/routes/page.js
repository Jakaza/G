const express = require('express')
const router = express.Router();
const pageController = require('../controllers/pageController')

// home - index.html
router.get('^/$|/index(.html)?', pageController.homePage)

// list projects - prjects.html
router.get('/work', pageController.workPage)

// contact me
router.get('/contact', pageController.contactPage)

// one project - detail.html
router.get('/work/:slag')

module.exports = router;