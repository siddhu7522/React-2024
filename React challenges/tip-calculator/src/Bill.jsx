import React from 'react'

function Bill({bill, handleBill , children}) {
    return (
        <div>
            <label>{children}</label>
            <input value={bill} onChange={handleBill} type="number" />
        </div>
    )
}

export default Bill