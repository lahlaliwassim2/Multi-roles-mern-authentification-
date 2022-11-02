import axios from 'axios'
// import { decode } from 'jsonwebtoken'
import jwt_decode from "jwt-decode";
// import { Navigate } from 'react-router-dom'
import { ERRORS, SET_USER } from '../type'



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
       const {token}=res.data
       localStorage.setItem('jwt',token)
       const decode = jwt_decode(token)
         // /* Dispatching the action `setUser` with the payload `decode` */
            dispatch(setUser(decode))
    })
    .catch(err=>{
            dispatch({
                type: ERRORS,
                payload:err.response.data
            })
    })
}
export const setUser = (decode)=>({
    type:SET_USER,
    payload:decode
})