const Project = require('../model/ProjectModel');


const createProject = async (req, res) => {
  const data = req.body;
  const newProject = new Project(data)
  try {
    const result = await newProject.save();
    res.json(result)
  } catch (error) {
    res.status(404).json({
      message: "Failed To Save Data"
    })
  }
}

const deleteProject = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Project.findOne({ _id: id });
    await doc.deleteOne();
    res.json({ message: "-Project deleted." })
  } catch (error) {
    res.status(404).json({
      message: "Failed To Delete -Project"
    })
  }
}

const editProject = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Project.findOne({ _id: id });
    Object.assign(doc, req.body)
    doc.save();
    res.json(doc)
  } catch (error) {
    res.status(404).json({
      message: "Failed To Delete -Project"
    })
  }
}

const getProject = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Project.findOne({ _id: id })
    res.json(doc)
  } catch (error) {
    res.status(404).json({
      error: "-Project is not found"
    })
  }
}


module.exports = {
  createProject,
  deleteProject,
  editProject,
  getProject
}