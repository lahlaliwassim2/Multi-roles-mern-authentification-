const UserModel =require('../models/user.model')
const ValidatorRegister = require('../validation/Register')
const Register = async (req,res)=>{
    try {
        const {isvalid ,errors} = ValidatorRegister(req.body)
        if(!isvalid){
            res.status(404).json(errors)
        }else{
            req.body.role="USER"
            await  UserModel.create(req.body)
            res.status(200).json({message:'ok'})
        }      
    } catch (error) {
        res.status(400).json({message : error})
    }
}




module.exports = {
    Register
}