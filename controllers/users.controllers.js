const UserModel =require('../models/user.model')
const Register = async (req,res)=>{
    try {
        await  UserModel.create(req.body)
        res.status(200).json({message:'ok'})
    } catch (error) {
        res.status(400).json({merrsage : error})
    }
}




module.exports = {
    Register
}