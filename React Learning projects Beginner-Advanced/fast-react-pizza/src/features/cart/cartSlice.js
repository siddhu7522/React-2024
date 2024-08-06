import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"

const initialState = {
    cart: []
    // cart: [
    //     {
    //         pizzaId: 12,
    //         name: "Mediterranean",
    //         quantity: 2,
    //         unitPrice: 16,
    //         totalPrice: 12
    //     }
    // ]
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            //payload= newItem 
            state.cart.push(action.payload)
        },
        deleteItem(state, action) {
            //payload=pizzaId
            state.cart = state.cart.filter((item) => item.pizzaId !== action.payload)
        },
        increaseItemQuantity(state, action) {
            //payload=pizzaId
            const item = state.cart.find((x) => x.pizzaId === action.payload)
            if (item) {
                item.quantity = item.quantity + 1
                item.totalPrice = item.quantity * item.unitPrice
            }
        },
        decreaseItemQuantity(state, action) {
            //payload=pizzaId
            const item = state.cart.find((x) => x.pizzaId === action.payload)
            if (item) {
                item.quantity = item.quantity - 1
                item.totalPrice = item.quantity * item.unitPrice
                //to re-use the logic we can use caseReducers
                if(item.quantity === 0) cartSlice.caseReducers.deleteItem(state,action)
            }
        },
        clearCart(state, action) {
            state.cart = []
        },
    }
})


export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart} = cartSlice.actions 


export default cartSlice.reducer

export const getCart = (state) => state.cart.cart


export const getTotalCartQuantity = (state)=>state.cart.cart.reduce((sum,item)=>sum+item.quantity,0)

export const getTotalCartPrice = (state)=>state.cart.cart.reduce((sum,item)=>sum+item.totalPrice,0)

export const getCurrentQuantityById = id => state => state.cart.cart.find((x)=>x.pizzaId ===id ? x.quantity:0)