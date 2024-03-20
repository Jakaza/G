const ProfileSchema = require('../model/profile')
const profileData = require('../../profile_data')

const Profile = {
    home : async (req, res) =>{
        let data = {}
        try {
      
          data = {
            title: 'Themba G Chauke | Undergraduate Computer Science Student.',
            skills: doc_skills,
            minProjects: doc_minProjects,
            projects: doc_rojects
          };
      
        } catch (error) {
          data = {
            title: 'Themba G Chauke | Undergraduate Computer Science Student.',
            skills: [],
            minProjects: [],
            projects: []
          };
        }
        res.render('index', data)
    },
    profile : async (req, res) =>{
      const existingProfile = await ProfileSchema.findOne({ username: profileData.username });

      console.log(existingProfile);



        res.render('admin_profile', {
          user: existingProfile
        })
    }
}

module.exports = Profile