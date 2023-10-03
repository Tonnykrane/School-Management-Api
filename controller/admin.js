const authModel = require('../models/auth')
const adminModel = require('../models/admin')

async function registerAdmin(req, res) {
    
    try {
    const result = await authModel.register(req.body)
    res.status(200).json({message: `Register Successful`, data: result})
    } 
    catch (error) {
        res.status(400).json({message: error.message})
    }
}

async function loginAdmin(req,res){
    try {
        const result =await authModel1.login(req.body)
        if (result) {
            res.status(200).json({message: "Login successful", data : result})
        } else {
            res.status(400).json({message:"Invalid Username or password", data : result})
        }
        
    } catch (error) {
        res.status(500).json('Error from server')
        
    }
}

async function resetPassword(req, res){
    try {
        const result = await authModel.resetPassword(req.body)
        
    } catch (error) {
        
    }
} 




















module.exports = {
    registerAdmin,
    loginAdmin,

}
