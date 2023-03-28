
const MiniProject = require('../model/MiniProjectModle')

const newMiniProject = async (req, res, next) => {
  const data = req.body;
  const minProject = new MiniProject(data)
  try {
    const result = await minProject.save();
    res.json(result)
  } catch (error) {
    res.status(500).json({
      error
    })
  }
}


const hideProject = async (req, res) => {
  const id = req.body.id;
    try{
        const doc = await MiniProject.findOne({ _id: id })
        doc.hidden = false;
        const result = await doc.save();
        res.json(result)

    }catch(error){
      console.log('Failed to update');
    }
}

const showProject = async (req, res) => {
  const id = req.body.id;
    try{
        const doc = await MiniProject.findOne({ _id: id })
        doc.hidden = true;
        const result = await doc.save();
        res.json(result)

    }catch(error){
      console.log('Failed to update');
    }
}


module.exports = {
  hideProject,
  showProject,
  newMiniProject
}