import axios from 'axios'
// import { Navigate } from 'react-router-dom'
import { ERRORS } from '../type'



export const Registration = (form,navigate)=>dispatch=>{
    axios.post('/api/register', form)
    .then(res=>{
        navigate('/login')
        dispatch({
            type: ERRORS,
            payload:{}
        })
    })
    .catch(err=>{
            dispatch({
                type: ERRORS,
                payload:err.response.data
            })
    })

    
}



export const LoginAction = (form,Navigate)=>dispatch=>{
    axios.post('/api/login', form)
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