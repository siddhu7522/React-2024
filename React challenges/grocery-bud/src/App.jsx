import React, { useState } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState("")
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      // display alert
      showAlert(true, "pls enter a value", "danger")
    }
    else if (name && isEditing) {
      //deal with edit
      setList(list.map((item)=>item.id ===editId ? {...item, name}: item))
      setName("")
      setEditId(null)
      setIsEditing(false)
      setAlert(true, "value changed", "success")
    }
    else {
      //show alert
      showAlert(true, "Item added successfully" ,"success")
      const newItem = {
        id: Date.now(),
        name
      }
      setList((prevItems) => [...prevItems, newItem])
      setName("")
      
    }
  }
  const clearList = ()=>{
    showAlert(true, "empty list" , "danger")
    setList([])
  }

  const showAlert=(show=false, msg="", type="" ) =>{
    setAlert({show, msg, type})
  }

  const removeItem = (id)=>{
    showAlert(true, "Item removed successfully" , "danger")
    setList(list.filter((x)=>x.id!==id))
  }
  const editItem = (id)=>{
    const specificItem = list.find((item)=>item.id===id)
    console.log(specificItem)
    setIsEditing(true)
    setEditId(id)
    setName(specificItem.name)
  }
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert list={list} {...alert} removeAlert={showAlert}/>}
        <h3>Grocery bud</h3>
        <div className='form-control'>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" className='grocery' placeholder='e.g. eggs' />
          <button type="submit" className='submit-btn'>
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem ={removeItem} editItem={editItem} />
          <button onClick={clearList} className='clear-btn'>Clear items</button>
        </div>
      )}

    </section>

  )
}

export default App