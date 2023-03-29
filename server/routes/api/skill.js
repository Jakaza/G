const express = require('express');
const router = express.Router();


router.get('/api/skill')

router.post('/api/skill/new')

router.delete('/api/skill/:id')

router.post('/api/skill/hide')

router.post('/api/skill/show')

module.exports = router;