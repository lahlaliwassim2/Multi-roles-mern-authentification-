const UserModel = require('../models/user.model')
const ValidatorRegister = require('../validation/Register')
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
                        const hash = bcrybt.hashSync(req.body.password,10)
                        req.body.password=hash
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




module.exports = {
    Register
}