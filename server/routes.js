const express = require('express')
const router = express.Router()
const Page = require('./controllers/page');
const Profile = require('./controllers/profile');

// Auth Admin


// Render Pages
router.get("/", Page.home)
router.get("/dashboard/profile", Profile.profile)


// API
// router.post("/api/profile/create", Profile.create)
// router.put("/api/profile/update", Profile.update)


module.exports = router