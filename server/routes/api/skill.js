const express = require('express');
const router = express.Router();
const skillController = require('../../controllers/skillController');

router.get('/api/skills', skillController.listSkill)

router.post('/api/skill/new' , skillController.newSkill)

router.delete('/api/skill/:id', skillController.removeSkill)

router.post('/api/skill/hide', skillController.hideSkill)

router.post('/api/skill/show', skillController.showSkill )

module.exports = router;