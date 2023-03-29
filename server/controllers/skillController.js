
const Skill = require('../model/SkillModel')


const listSkill = async (req, res, next) => {
    try {
      const doc = await Skill.find({ })
      res.json(doc)
    } catch (error) {
      res.status(500).json({
        error
      })
    }
}


const newSkill = async (req, res, next) => {
    const data = req.body;
    const newSkill = new Skill(data)
    try {
      const result = await newSkill.save();
      res.json(result)
    } catch (error) {
      res.status(500).json({
        error
      })
    }
}


const hideSkill = async (req, res) => {
    const id = req.body.id;
      try{
          const doc = await Skill.findOne({ _id: id })
          doc.hidden = false;
          const result = await doc.save();
          res.json(result)
  
      }catch(error){
        console.log('Failed to update');
      }
  }



const showSkill = async (req, res) => {
    const id = req.body.id;
      try{
          const doc = await Skill.findOne({ _id: id })
          doc.hidden = true;
          const result = await doc.save();
          res.json(result)
  
      }catch(error){
        console.log('Failed to update');
      }
}


const removeSkill = async (req , res) =>{
  const id = req.query.id;
  if(id){
    try{
          const doc = await Skill.findByIdAndRemove(id)
          res.json(doc)
  
      }catch(error){
        console.log('Failed to update');
      }
    
  }else{
    res.status(204).json({
      message: "empty content"
    })
  }
}


module.exports = {
    listSkill,
    newSkill,
    hideSkill,
    showSkill,
    removeSkill
  }