import React, { useReducer } from 'react'
import { details } from './data'

const initialState = {
  products: details,
  cart: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case "AddToCart":
      const itemToCart = state.products.find((x) => x.id === action.payload)
      if (itemToCart) {
        console.log(itemToCart)
      }
      return { ...state, cart: [...state.cart, itemToCart] }
    case "RemoveFromCart":
      return {...state, cart:state.cart.filter((x)=>x.id!==action.payload)}
    default:
      break;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleCart = (id) => {
    dispatch({ type: "AddToCart", payload: id })
  }
  const handleRemoveFromCart = (id) =>{
    dispatch({type:"RemoveFromCart" , payload:id})
  }
  
  return (
    <div>
      {state.products.map((detail) => {
        const alreadyInCart= state.cart.find((x)=>x.id===detail.id)
        return (
          <div key={detail.id} className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={detail.image} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{detail.name}</h5>
              <p className="card-text">{detail.description}</p>
              <p className='card-text'><strong>Price :</strong>{detail.price}</p>
              <p className='card-text'><strong>Quantity in stock :</strong>{detail.quantity}</p>
             {alreadyInCart ? (
              <button className="btn btn-primary">Already in cart</button>
             ):(
              <button onClick={() => handleCart(detail.id)} className="btn btn-primary">Add to cart</button>
             )}
            </div>
          </div>
        )
      })}

      <div>
        <h2>Cart Section</h2>
        {state.cart.map((item) => {
          return (
            <div key={item.id} className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={item.image} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className='card-text'><strong>Price :</strong>{item.price}</p>
                <p className='card-text'><strong>Quantity in stock :</strong>{item.quantity}</p>
                <button onClick={()=>handleRemoveFromCart(item.id)}  className="btn btn-primary">Remove from cart</button>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default App