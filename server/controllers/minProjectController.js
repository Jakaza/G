const MiniProject = require('../model/MiniProjectModle');


const createMiniProject = async (req, res) => {
    const data = req.body;
    const newProject = new MiniProject(data)
    try {
        const result = await newProject.save();
        res.json(result)
    } catch (error) {
        res.status(404).json({
            message: "Failed To Save Data"
        })
    }
}

const deleteMiniProject = async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await MiniProject.findOne({ _id: id });
        await doc.deleteOne();
        res.json({ message: "Mini-Project deleted." })
    } catch (error) {
        res.status(404).json({
            message: "Failed To Delete Mini-Project"
        })
    }
}

const editMiniProject = async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await MiniProject.findOne({ _id: id });
        Object.assign(doc, req.body)
        doc.save();
        res.json(doc)
    } catch (error) {
        res.status(404).json({
            message: "Failed To Delete Mini-Project"
        })
    }
}

const getMiniProject = async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await MiniProject.findOne({ _id: id })
        res.json(doc)
    } catch (error) {
        res.status(404).json({
            error: "Mini-Project is not found"
        })
    }
}




module.exports = {
    createMiniProject,
    deleteMiniProject,
    editMiniProject,
    getMiniProject

}