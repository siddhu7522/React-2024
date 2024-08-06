import React from 'react'
import Friend from './Friend'

function FriendsList({friends, onSelection, selectedFriend}) {
  return (
    
    <ul>
        {friends.map((friend)=>{
            return(
                <Friend selectedFriend={selectedFriend} onSelection={onSelection} key={friend.id} friend={friend}/>
            )
        })}
    </ul>
  )
}

export default FriendsList