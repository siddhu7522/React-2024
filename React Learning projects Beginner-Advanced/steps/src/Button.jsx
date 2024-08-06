import React from 'react'

function Button({onClick, bgColor, color, children}) {
  return (
     <button onClick={onClick} style={{backgroundColor:bgColor, color:color}} >
        {children}
     </button>
  )
}

export default Button