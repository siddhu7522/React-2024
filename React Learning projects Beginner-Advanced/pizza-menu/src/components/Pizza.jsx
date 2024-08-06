import React from 'react'

function Pizza({ pizza }) {

    return (
        // Default class will be pizza . But we will be appending slod out based on condition
        <div className={`pizza ${pizza.soldOut ? "sold-out":""}`}>
            <img src={pizza.photoName} />
            <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
                <span>{pizza.soldOut ? "Sold out": pizza.price}</span>
            </div>
        </div>
    )
}

export default Pizza