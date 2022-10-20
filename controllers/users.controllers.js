const UserModel = require('../models/user.model')
const ValidatorRegister = require('../validation/Register')
const ValidatorLogin = require('../validation/login')
const bcrypt = require('bcryptjs');



const Register = async (req, res) => {
    const bcrybt = require('bcryptjs')
    const {
        errors,
        isValid
    } = ValidatorRegister(req.body)

    try {
        if (!isValid) {
            res.status(404).json(errors)
        } else {
            UserModel.findOne({
                email: req.body.email
            })
                .then(async (exist) => {
                    if (exist) {
                        errors.email = "user exist"
                        res.status(404).json(errors)
                    } else {
                        const hash = bcrybt.hashSync(req.body.password, 10)
                        req.body.password = hash
                        req.body.role = "USER"
                        await UserModel.create(req.body)
                        res.status(200).json({
                            message: 'ok'
                        })
                    }
                })
        }
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}
const Login = async (req, res) => {
    const {
        errors,
        isValid
    } = ValidatorLogin(req.body)
    try {
        if (!isValid) {
            res.status(404).json(errors)
        } else {
            UserModel.findOne({email: req.body.email})
            .then(user=>{
                if(!user){
                    errors.email="user not found"
                    res.status(404).json(errors)
                }else{
                    bcrypt.compare(req.body.password, user.password)
                    .then(ismach => {
                        if (!ismach) {
                            errors.password = "incorect password"
                            res.status(404).json(errors)
                        } else {
                            res.send('oke')
                        }
                    })

                }
            })
           
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}




module.exports = {
    Register,
    Login
}