const isEmpty = require('./isEmpty')
const validator = require('validator')



module.exports = function ValidatorProfil(data){

    let errors = {};

    data.tel = !isEmpty(data.tel) ? data.tel : ""
    data.city = !isEmpty(data.city) ? data.city : ""
    data.country = !isEmpty(data.password) ? data.password : ""
    data.adresse = !isEmpty(data.confirm) ? data.confirm : ""

    if(validator.isEmpty(data.tel)){
        errors.tel="Required tel";
    }
   
    if(validator.isEmpty(data.city)){
        errors.city="Required city";
    }
   
    if(validator.isEmpty(data.adresse)){
        errors.adresse="Required adresse";
    }
    if(validator.isEmpty(data.country)){
        errors.country="Required country";
    }
    
    
    
        return {
            errors,
            isValid: isEmpty(errors)
        }

}   
