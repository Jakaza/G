
const Skill = require('../model/SkillModel')

const listSkill = async (req, res, next) => {
  try {
    const doc = await Skill.find({})
    next(doc);
  } catch (error) {
    res.status(500).json({
      error
    })
  }
}

const getSkill = async (req, res) => {
  const id = req.query.id;
  try {
    const doc = await Skill.findOne({ _id: id })
    res.json(doc)
  } catch (error) {
    res.status(404).json({
      error: "skill is not found"
    })
  }
}


const editSkill = async (req, res) => {
  const id = req.params.id;
  // const { name, level, } = req.body;
  try {
    const doc = await Skill.findOne({ _id: id })
    Object.assign(doc, req.body);
    doc.save();
    res.json(doc);
  } catch (error) {
    res.status(404).json({
      error: "skill is not found"
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
    res.json({
      message: "Failed To Save Data"
    })
  }
}


const hideSkill = async (req, res) => {
  const id = req.body.id;
  try {
    const doc = await Skill.findOne({ _id: id })
    doc.hidden = false;
    const result = await doc.save();
    res.json(result)

  } catch (error) {
    console.log('Failed to update');
  }
}



const showSkill = async (req, res) => {
  const id = req.body.id;
  try {
    const doc = await Skill.findOne({ _id: id })
    doc.hidden = true;
    const result = await doc.save();
    res.json(result)

  } catch (error) {
    console.log('Failed to update');
  }
}


const removeSkill = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Skill.findOne({ _id: id });
    await doc.deleteOne();
    res.json({ message: "skill deleted." })
  } catch (error) {
    res.status(404).json({
      error: "skill is not found"
    })
  }
}

module.exports = {
  listSkill,
  newSkill,
  hideSkill,
  showSkill,
  removeSkill,
  getSkill,
  editSkill
}