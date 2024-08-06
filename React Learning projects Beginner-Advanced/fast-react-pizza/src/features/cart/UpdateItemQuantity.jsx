import React from 'react'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice'

function UpdateItemQuantity({pizzaId, currentQuantity}) {
    const dispatch =useDispatch()
  return (
    <div className='flex-gap-1 items-center'>
        <Button onClick={()=>dispatch(decreaseItemQuantity(pizzaId))} type="round">-</Button>
        <span>{currentQuantity.quantity}</span>
        <Button onClick={()=>dispatch(increaseItemQuantity(pizzaId))} type="round">+</Button>
    </div>
  )
}

export default UpdateItemQuantity