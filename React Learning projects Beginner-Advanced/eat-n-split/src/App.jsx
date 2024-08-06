import React, { useState } from 'react'
import FriendsList from './FriendsList';
import FormAddFriend from './FormAddFriend';
import Button from './Button';
import FormSplitBill from './FormSplitBill';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


function App() {
  const[showAddFriend, setShowAddFriend] =useState(false)
  const[friends, setFriends] =useState(initialFriends)
  const[selectedFriend, setSelectedFriend] =useState(null)
  const handleShowAddFriend = ()=>{
    setShowAddFriend(!showAddFriend)
  }
  const handleAddFriend = (friend)=>{
    setFriends((prevFriends)=>[...prevFriends, friend])
    setShowAddFriend(false)
  }
  const handleSelection= (friend)=>{
    setSelectedFriend((currentFriend)=>currentFriend?.id ===friend.id ? null: friend)
    setShowAddFriend(false)
  }
  const handleSplitBill = (value)=>{
    console.log(value)
    setFriends((friends)=>friends.map((friend)=>friend.id===selectedFriend.id ? {...friend, balance:friend.balance+value}: friend))
    setSelectedFriend(null)
  }
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList selectedFriend={selectedFriend} friends={friends} onSelection ={handleSelection}/>

        {showAddFriend &&  <FormAddFriend onAddFriend={handleAddFriend}/>}
       
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend &&  <FormSplitBill onSplitBill={handleSplitBill} selectedFriend={selectedFriend}/>}
     
    </div>
  )
}

export default App
