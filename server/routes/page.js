const express = require('express')
const router = express.Router();
const pageController = require('../controllers/pageController')
const validateadmin = require('../middleware/validateadmin')
const skillController = require('../controllers/skillController');

// home - index.html
router.get('^/$|/index(.html)?',
    pageController.homePage)

// list projects - prjects.html
router.get('/work', pageController.workPage)

// contact me
router.get('/contact', pageController.contactPage)

// Admin section
router.get('/user/admin/jakaza@p1017.', pageController.adminPage);
router.get('/user/admin/jakaza@p1017./profile', pageController.adminProfile);
router.get('/user/admin/jakaza@p1017./skills', pageController.adminSkills);

module.exports = router;