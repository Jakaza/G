
const MiniProject = require('../model/MiniProjectModle')

const newMiniProject = (req, res , next ) => {
    
    const data = req.body;

    res.json(data)

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