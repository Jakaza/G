const Page = {
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
    dashboard : async (req, res) =>{
        res.render('admin_profile')
    }
}

module.exports = Page