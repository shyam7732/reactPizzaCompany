import React from 'react'
import "./footer.css"

function Footer() {

  const openTime = 12.00
  const closeTime = 22.00

  const hour = new Date().getHours()
  const minute = new Date().getMinutes()

  const fullTime = hour + "." + minute


  return (
    <>
      <footer>

        <p>We're Happy to Welcome you between {openTime}:00 and {closeTime}:00</p>

        {(openTime <= fullTime && closeTime >= fullTime) ? <button>Order Now</button> : null}

      </footer>
    </>
  )
}

export default Footer