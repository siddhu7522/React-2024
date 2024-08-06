import React from 'react'
import Button from "./Button"
import { useNavigate } from "react-router";

function BackButton() {
    const navigate =useNavigate()
  return (
    <Button type="back" onClick={(e)=>{
        e.preventDefault()
        //navigating 1 step backward
        navigate(-1)
      }}>&larr;Back</Button>
  )
}

export default BackButton