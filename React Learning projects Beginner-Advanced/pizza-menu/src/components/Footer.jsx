import React from 'react'

function Footer() {
  const hours = new Date().getHours()
  const openHours = 8
  const closedHours = 22
  const isOpen = hours > 8 && hours < 22
  return (
    <footer className='footer'>
      {isOpen && (
        <div className='order'>
          <p>We are open until {closedHours}:00 hours. Please come visit soon</p>
          <button className='btn'>Order</button>
        </div>
      )}

    </footer>
  )
}

export default Footer