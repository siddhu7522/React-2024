import React from 'react'
import Pizza from './Pizza'
import { pizzaData } from '../data'

function Menu() {
    
    return (
        <main className='menu'>
            <h2>Our Menu</h2>
                {pizzaData.length > 0 ? (
                    <ul className='pizzas'>
                        {pizzaData.map((pizza)=><Pizza pizza={pizza}/>)}
                    </ul>
                ):(
                    <p>We are working on our Menu. Please come back later</p>
                )}
        </main>
    )
}

export default Menu