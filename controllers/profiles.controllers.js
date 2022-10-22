const profilModel = require('../models/profil.model')

const AddProfile =async(req,res)=>{
   try {
     profilModel.findOne({user: req.user.id})
     .then(async(profil)=>{
        if(!profil){
            await profilModel.create(req.body)
            res.status(200).json({message:"addmzn"})
        }else{
        await  profilModel.findOneAndUpdate(
                {id: user.req.id},
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
const FindAllProfiles =(req,res)=>{
    res.send('ok')
}
const FindSingleProfil =(req,res)=>{
    res.send('ok')
}
const DeleteProfil =(req,res)=>{
    res.send('ok')
}

module.exports={
    AddProfile,
    FindAllProfiles,
    FindSingleProfil,
    DeleteProfil
}