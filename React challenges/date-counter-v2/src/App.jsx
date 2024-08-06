import React, { useState } from 'react'

function App() {
  const [range, setRange] =useState(0)
  const today = new Date()
  const noOfDaysToAdd = range;
  today.setDate(today.getDate() + noOfDaysToAdd);
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  const futureDateFormatted = today.toLocaleDateString('en-US', options);

  return (
    <div>
      <input value={range} onChange={(e)=>setRange(e.target.value)} type='range' min="0" max="10"/>
      <p>{range}</p>
      <button onClick={()=>setRange(range>1 && range-1)}>-</button>
      <input type="text" value={range}></input>
      <button onClick={()=>setRange(range+1)}>+</button>
      
      {range<1 ? (
        <p>Today is {futureDateFormatted}</p>
      ):(
        <p>{range} day from today is {futureDateFormatted}</p>
      )}
      {range >=1 &&  <button onClick={()=>setRange(0)}>Reset</button>}
    
    </div>
  )
}

export default App