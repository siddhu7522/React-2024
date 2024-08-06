import React, { useState } from 'react'

function SingleAcordion({title, text}) {
    const[showText, setShowText] =useState(false)
  return (
    <div>
        <h1>{title}</h1>
        <p onClick={()=>setShowText(!showText)}>{showText ? "➖" : "➕"}</p>
        {showText ? <p>{text}</p>: null}
    </div>
  )
}

export default SingleAcordion