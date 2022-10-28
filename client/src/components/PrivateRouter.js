import  React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouter=({user , children}) =>{
        if(!user.isConnected){
       return     <Navigate to= "/login" replace={true}/>
        }
  return children
}      

export default PrivateRouter