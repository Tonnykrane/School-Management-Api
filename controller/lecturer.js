const lecturerModel = require("../model/lecturerModel")

async function registerLecturer(req,res) {
    try {
        const result=await lecturerModel.registerLecturer
        res.status(200).json(result);
    } catch (error) {
        res.status(500).error({error : error.message})
    }
}

module.exports = lecturerController;
