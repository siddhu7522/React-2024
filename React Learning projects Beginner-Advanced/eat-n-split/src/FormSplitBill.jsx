import React, {useState} from 'react'
import Button from './Button'

function FormSplitBill({ selectedFriend, onSplitBill }) {
    const [bill, setBill] = useState("")
    const [paidByUser, setPaidByUser] = useState("")
    const paidByFriend = bill ? bill-paidByUser: ""
    const [whoIsPaying, setWhoIsPaying] = useState("user")
    const handleSubmit =(e)=>{
        e.preventDefault()
        if(!bill || !paidByUser){
            return
        }
        onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser)
    }
    return (
        <form onSubmit={handleSubmit} className='form-split-bill'>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>Bill value</label>
            <input value={bill} onChange={(e)=>setBill(Number(e.target.value))} type="text" />

            <label>Your expense</label>
            <input value={paidByUser} onChange={(e)=>setPaidByUser(Number(e.target.value) > bill ? paidByUser: Number(e.target.value))} type="text" />

            <label>{selectedFriend.name}'s expense</label>
            <input value={paidByFriend} type="text" disabled />

            <label>Who is paying the bill</label>
            <select value={whoIsPaying} onChange={(e)=>setWhoIsPaying(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>
            <Button>Split Bill</Button>
        </form>
    )
}

export default FormSplitBill