import React, { useState } from 'react'
import CalculatePercentage from './CalculatePercentage'
import Reset from './Reset'
import Bill from './Bill'

function App() {
  const[bill, setBill] =useState(null)
  const[myService, setMyService] = useState("dissatisfied")
  const[friendService, setFriendService] =useState("dissatisfied")
  const handleBill = (e)=>{
    setBill(Number(e.target.value))
  }
  console.log(bill)

  const handleMyService = (e)=>{
    setMyService(e.target.value)
  }
  const handleFriendService = (e)=>{
    setFriendService(e.target.value)
  }
  console.log(myService)

  let myTip;
  if(myService == "dissatisfied"){
    myTip= 0
  }
  if(myService =="okay"){
    myTip = 5
  }
  if(myService =="good"){
    myTip =10
  }
  if(myService == "amazing"){
    myTip=20
  }

  let friendTip;
  if(friendService == "dissatisfied"){
    friendTip= 0
  }
  if(friendService =="okay"){
    friendTip = 5
  }
  if(friendService =="good"){
    friendTip =10
  }
  if(friendService == "amazing"){
    friendTip=20
  }
  let finalTip = (myTip +friendTip)/2
  console.log(finalTip)
  
  let finalBill = bill +finalTip;

  const handleReset =  () =>{
    setBill("")
    setMyService("dissatisfied")
    setFriendService("dissatisfied")
  }
  
  return (
    <div>
      <Bill bill ={bill} handleBill={handleBill}>
        <label>How much was the bill</label>
      </Bill>
      <br/><br/>
      <CalculatePercentage myService={myService} friendService={friendService} handleMyService={handleMyService} handleFriendService={handleFriendService}/>
      {bill ? <h1> You pay ${finalBill} (${bill} + ${finalTip} tip)</h1> : null}
      <Reset bill={bill} handleReset={handleReset}/>
    
    </div>
  )
}

export default App