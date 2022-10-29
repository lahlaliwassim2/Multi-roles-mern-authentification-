import React from 'react'
import { Navigate } from 'react-router-dom'

const ForceRedirect = ({user,children})=> {
  if(user.isConnected){
      return     <Navigate to= "/" replace={true}/>
  }
     return children
       }



export default ForceRedirect