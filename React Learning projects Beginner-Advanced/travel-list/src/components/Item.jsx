// import React, { useState } from 'react'

function Item({item, handleDelete, handleToggleItem}) {
  return (
    <li>
        <input value={item.packed} onChange={()=>handleToggleItem(item.id)}  type="checkbox"/>
        <span style={item.packed ? {textDecoration:"line-through"}:{}}>{item.quantity} {item.description}</span>
        <button onClick={()=>handleDelete(item.id)} >❌</button>
    </li>
  )
}

export default Item

