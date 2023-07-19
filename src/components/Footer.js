import React from 'react'
import "./footer.css"

function Footer() {

  const openTime = 12
  const closeTime = 22

  const hour = new Date().getHours()


  return (
    <>
      <footer>

        <p>We're Happy to Welcome you between {openTime}:00 and {closeTime}:00</p>

        {(openTime <= hour && closeTime >= hour) ? <button>Order Now</button> : null}

      </footer>
    </>
  )
}

export default Footer