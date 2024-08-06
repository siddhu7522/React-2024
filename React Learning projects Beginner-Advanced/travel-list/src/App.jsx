import React, {useState} from 'react'
import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from './components/PackingList'
import Stats from './components/Stats'

function App() {
  const[items, setItems] =useState([])

  //This is other way instead of passing setItems as prop we can create a function and update items state and pass it to form 
  // const handleAddItems =(item)=>{
  //   setItems((exisitingItems)=>[...exisitingItems, item])
  // }
    function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className='app'>
      <Logo/>
      <Form setItems={setItems}/>
      <PackingList handleToggleItem={handleToggleItem} setItems={setItems} items={items}/>
      <Stats items={items}/>
    </div>
  )
}

export default App
