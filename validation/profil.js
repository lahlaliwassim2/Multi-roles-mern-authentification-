const isEmpty = require('./isEmpty')
const validator = require('validator')



module.exports = function ValidatorProfil(data){

    let errors = {};

    data.tel = !isEmpty(data.tel) ? data.tel : ""
    data.city = !isEmpty(data.city) ? data.city : ""
    data.country = !isEmpty(data.country) ? data.country : ""
    data.adresse = !isEmpty(data.adresse) ? data.adresse : ""

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
