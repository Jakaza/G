
const Skill = require('../model/SkillModel')

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


module.exports = {
    newSkill,
    hideSkill,
    showSkill
  }