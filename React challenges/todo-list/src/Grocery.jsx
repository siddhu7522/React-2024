import React, { useState } from 'react'

function Grocery({groceries, handleDelete}) {
    const[checked, setChecked] =useState(false)
   
  return (
    <div>
        <input type ="checkbox" value={checked} onChange={(e)=>setChecked(e.target.checked)}/>
        <h3 style={checked  ? {textDecoration:"line-through"}:{}}>{groceries.item}</h3>
        <button onClick={()=>handleDelete(groceries.id)}>Delete</button>
    </div>
  )
}

export default Grocery