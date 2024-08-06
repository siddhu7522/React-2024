import React from 'react'
import {FaEdit, FaTrash} from "react-icons/fa"

function List({items, removeItem, editItem}) {
  return (
    <div className='grocery-list'>
        {items.map((item)=>{
            return(
                <article key={item.id} className='grocery-item'>
                    <p className='title'>{item.name}</p>
                    <div className='btn-container'>
                        <button onClick={()=>editItem(item.id)} type= "button" className='edit-btn'>
                            <FaEdit/>
                        </button>
                        <button onClick={()=>removeItem(item.id)} type= "button" className='edit-btn'>
                            <FaTrash/>
                        </button>
                    </div>
                </article>
            )
        })}
    </div>
  )
}

export default List