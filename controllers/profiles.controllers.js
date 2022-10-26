const profilModel = require('../models/profil.model')
const ValidatorProfil = require('../validation/profil')

/**
 * If the user doesn't have a profile, create one, otherwise update the existing one.
 * @param req - The request object.
 * @param res - The response object.
 */
const AddProfile =async(req,res)=>{
    const {errors,isValid}  = ValidatorProfil(req.body)
    if(!isValid){
        res.status(400).json(errors)
    }else{
   try {

     profilModel.findOne({user: req.user.id})
     .then(async(profil)=>{
        if(!profil){
            req.body.user=req.user.id
            await profilModel.create(req.body)
            res.status(200).json({message:"addmzn"})
        }else{
        await  profilModel.findOneAndUpdate(
                {id: profil.id},
                req.body,
                {new:true}
            ).then(result=>{
                res.status(200).json(result)
            })
        }
     })
   } catch (error) {
    res.status(404).json(error.message)
   }
}

}
const FindAllProfiles = async (req,res)=>{
   try {
    await profilModel.find().populate('user',["role","email"])
    .then((result)=>{
        res.status(200).json(result)
    })
   } catch (error) {
    res.status(404).json(error.message)
   }
   
}


const FindSingleProfil = async(req,res)=>{
    try {
        await profilModel.findOne({user: req.user.id}).populate("user",["role"])
        .then((result)=>{
            res.status(200).json(result)
        })
       } catch (error) {
        res.status(404).json(error.message)
       }
}

 
const DeleteProfil =async(req,res)=>{
    try {
        await profilModel.findOneAndRemove({id: req.params.id})
        .then((result)=>{
            res.status(200).json({message:"mchate"})
        })
       } catch (error) {
        res.status(404).json(error.message)
       }
}

module.exports={
    AddProfile,
    FindAllProfiles,
    FindSingleProfil,
    DeleteProfil
}