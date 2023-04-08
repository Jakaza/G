const express = require('express');
const router = express.Router();
const projectController = require('../../controllers/projectController')
const miniProjectController = require('../../controllers/minProjectController')
const validateInput = require('../../middleware/validateInput')

// Main Project API
router.post('/api/project/new', projectController.createProject)
router.delete('/api/project/:id', projectController.deleteProject)
router.put('/api/project/:id', projectController.editProject)
router.get('/api/project/:id', projectController.getProject)

// Mini Project API
router.get('/api/miniproject/:id', miniProjectController.getMiniProject)
router.post('/api/miniproject/new', miniProjectController.createMiniProject)
router.delete('/api/miniproject/:id', miniProjectController.deleteMiniProject)
router.put('/api/miniproject/:id', miniProjectController.editMiniProject)

module.exports = router;