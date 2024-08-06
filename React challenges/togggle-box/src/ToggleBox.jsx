import React, { useState } from 'react'

function ToggleBox({ content, buttonText, defaultOpen=false }) {
    const [open, setOpen] = useState(defaultOpen)
    return (
        <div className='box'>
            {open ? (
                <>
                    <h2>{content}</h2>
                    <button onClick={()=>setOpen(!open)}>{buttonText}</button>
                </>

            ) : (
                <>
                    <h2>Click the button to see the content</h2>
                    <button onClick={()=>setOpen(!open)}>{buttonText}</button>
                </>

            )}

        </div>
    )
}

export default ToggleBox