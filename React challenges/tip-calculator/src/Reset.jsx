import React from 'react'

function Reset({ bill, handleReset }) {
    return (
        <>
            {bill ? <button onClick={handleReset}>Reset</button> : null}
        </>


    )
}

export default Reset