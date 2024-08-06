import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router'

function ProtectedRoute({children}) {
    const {isAuthenticated} =useContext(AuthContext)
    const navigate= useNavigate()

    useEffect(()=>{
        if(!isAuthenticated) navigate("/")
    },[isAuthenticated, navigate])

  return isAuthenticated ? children : null
}

export default ProtectedRoute