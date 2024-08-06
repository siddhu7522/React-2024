import React, { useState } from 'react'
import Item from './Item';



function PackingList({items, setItems, handleToggleItem}) {
    const[sortBy, setSortBy]=useState("input")
    const handleDelete =(id)=>{
        const finalItems = items.filter((item)=>item.id!==id)
        setItems(finalItems)
    }
    const handleCheckBox =(id)=>{
        //if the id matches then spreading the item into new array and modifying the packed value to opposite
        const updatePacked=((items)=>items.map((item)=>item.id===id ? {...item, packed:!item.packed} : item))
        setItems(updatePacked(items))
    }
    console.log(items)

    const clearItems = ()=>{
        const confirmed= window.confirm("Are u sure u want to delete all the items?")
        if(confirmed){
            setItems([])
        }
    }


    let sortedItems;
    if(sortBy === "input"){
        sortedItems =items;
    } 
    if(sortBy === "description"){
        //if we directly use sort without slice original array will get mutated
        //As we dont want it we will use slice
        sortedItems= items.slice().sort((a,b)=>a.description.localeCompare(b.description))
    }
    if(sortBy === "packed"){
        //As packed was boolean we will be converting to Number
        sortedItems = items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed))
    }

    return (
        <div className='list'>
            <ul>
                {sortedItems.map((item) => {
                    return (
                        <Item key={item.id}  item={item} handleToggleItem={handleCheckBox} handleDelete={handleDelete}  />
                    )
                })}
            </ul>
            <div className='actions'>
                <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed</option>
                </select>
                <button onClick={clearItems}>Clear list</button>
            </div>
        </div>
    )
}

export default PackingList


