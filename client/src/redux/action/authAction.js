import axios from 'axios'
import { ERRORS } from '../type'



export const Registration = (form)=>dispatch=>{
    axios.post('/api/register', form)
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
            dispatch({
                type: ERRORS,
                payload:err.response.data
            })
    })
}