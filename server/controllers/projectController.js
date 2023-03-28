
const MiniProject = require('../model/MiniProjectModle')

const newMiniProject = async (req, res , next ) => {
    const data = req.body;

    const minProject = new MiniProject(data)
    try {
        const result = await minProject.save();
    } catch (error) {
        res.status(500).json(error)
    }
    
    res.json(result)
}


const hideProject = async (req, res)=>{
    const filter = { id: req.body.id };
    const update = false;
    try {
        const result = await Project.findOneAndUpdate(filter, update, {
            new: true,
            upsert: true,
            rawResult: true // Return the raw result from the MongoDB driver
          })
    } catch (error) {
        console.log('Failed to update');
    }
}

const showProject = async (req, res)=>{
    const filter = { id: req.body.id };
    const update = true;
    try {
        const result = await Project.findOneAndUpdate(filter, update, {
            new: true,
            upsert: true,
            rawResult: true // Return the raw result from the MongoDB driver
          })
    } catch (error) {
        console.log('Failed to update');
    }
}


module.exports = {
    hideProject,
    showProject,
    newMiniProject
}