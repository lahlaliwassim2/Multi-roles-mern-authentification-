const mongoose= require('mongoose')
const Schema = mongoose.Schema

const UserProfil = new Schema(
    {
        user:{
            type:Schema.Types.ObjectId,
            ref:"users"
        },
        tel: "string",
        city:{ 
            type: "string",
            },
        country: "string",
        adresse:"string",
    },
    {
timestamps:true
    }
)

module.exports = mongoose.model('profiles',UserProfil   )