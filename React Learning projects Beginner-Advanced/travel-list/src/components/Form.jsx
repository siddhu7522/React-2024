import React, { useState } from 'react'

function Form({setItems}) {
    const[description, setDescription] =useState("")
    const[quantity, setQuantity] =useState(1)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!description){
            return;
        }
        const newItem ={
            description, quantity,packed:false, id:Date.now()
        }
        setItems((existingItems)=>[...existingItems, newItem])
       // onAddItem(newItem)
        setDescription("")
        setQuantity(1)
    }

    return (
        <form onSubmit={handleSubmit} className='add-form'>
            <h3>What do u need for ur trip 😍</h3>
            {/* By default e.target.value will be string. So as quantity should be number we should convert it */}
            <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
            <input value={description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder='Item...' />
            <button>Add</button>
        </form>
    )
}

export default Form

