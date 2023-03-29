const express = require('express');
const router = express.Router();
const skillController = require('../../controllers/skillController');

router.get('/api/skills', skillController.listSkill)

router.post('/api/skill/new', skillController.newSkill)

router.post('/api/skill/hide', skillController.hideSkill)

router.post('/api/skill/show', skillController.showSkill)

router.delete('/api/skill', skillController.removeSkill)

module.exports = router;