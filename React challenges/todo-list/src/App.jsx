import React, { useState } from 'react'
import Grocery from './Grocery'

function App() {
  const[item, setItem] =useState("")
  const[itemList, setItemList] =useState([])
  const handleAdd = ()=>{
    const newItem ={
      id:Date.now(),
      item:item
    }
    setItemList((prevItem)=>[...prevItem, newItem])
    setItem("")
  }
  const handleDelete= (id)=>{
        const newItems = itemList.filter((x)=>x.id!==id)
        setItemList(newItems)
  }
  return (
    <div>
      <label>Enter  your grocery to buy</label>
      <input value={item} onChange={(e)=>setItem(e.target.value)} type="text"/>
      <button onClick={handleAdd}>Add</button>
      {itemList.map((item)=>{
        return(
          <Grocery key={item.id} groceries={item} handleDelete={handleDelete}/>
        )
      })}
    </div>
  )
}

export default App