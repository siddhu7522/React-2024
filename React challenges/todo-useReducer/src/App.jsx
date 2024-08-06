import React, { useReducer, useState } from 'react'


const initialState = {
  details: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return { ...state, details: [...state.details, action.payload] }
    case "Delete":
      return {...state, details:state.details.filter((x)=>x.id!==action.payload)}
    default:
      break;
  }
}

function App() {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const[checked, setChecked] =useState(false)
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleSubmit= (e) =>{
    e.preventDefault()
    dispatch({ type: "Add", payload: { id: Math.random(), name, address } })
    setName("")
    setAddress("")
  }
  const handleDelete= (id) =>{
    dispatch({type:"Delete", payload:id})
  }
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Name" />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Address</label>
          <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Address" />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    {state.details.map((detail)=>{
      return(
        <div key={detail.id}>
          <h3 className={checked ? "strike" : ""}>{detail.name}</h3>
          <p>{detail.address}</p>
          <input value={checked} onChange={(e)=>setChecked(e.target.checked)}  type="checkbox" />
          <button onClick={()=>handleDelete(detail.id)}>Delete</button>
        </div>
      )
    })}
    </div>
  )
}

export default App