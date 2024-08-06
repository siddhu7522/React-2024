
import React, { useState } from 'react'

function Accordion({ data }) {
    const[selectedId, setSelectedId] =useState(null)
    const handleToggle =(id)=>{
        setSelectedId(id!=selectedId?id:null)
    }
    
    return (
        <div className='accordion'>
            {data.map((item) => {
                return (
                    <>
                 <h1>{item.title}</h1>
                 <button onClick={()=>handleToggle(item.id)}>
                 {selectedId===item.id ? "➖" : "➕"}
                 </button>
                 {selectedId ===item.id ? <p>{item.text}</p> : null}
                    </>
                )
            })}
        </div>
    )
}

export default Accordion