const MiniProject = require('../model/MiniProjectModle');
const Project = require('../model/ProjectModel');
const SkillsProject = require('../model/SkillModel');


const homePage = async (req, res) => {
  //This data must come from database or cache
  const doc_skills = await SkillsProject.find({})
  const doc_minProjects = await MiniProject.find({})
  const doc_rojects = await Project.find({})

  const data = {
    title: 'Themba G Chauke | Undergraduate Computer Science Student.',
    skills: doc_skills,
    minProjects: doc_minProjects,
    projects: doc_rojects
  };

  res.render('index', data)
}

const workPage = (req, res) => {
  //This data must come from database or cache
  const data = {
    sen: 'This data must come from database or cache',
    title: 'Themba G Chauke | List of all projects i worked on.'
  };
  res.render('projects', data)
}

const adminPage = (req, res) => {
  res.status(200).render('admin_dashboard')
}

const adminProfile = (req, res) => {
  res.status(200).render('admin_profile')
}

const adminSkills = (req, res) => {
  res.status(200).render('admin_skills')
}

const contactPage = (req, res) => {

  res.json("Contact Page Controller")

}

module.exports = {
  homePage,
  contactPage,
  workPage,
  adminPage,
  adminProfile,
  adminSkills
}








