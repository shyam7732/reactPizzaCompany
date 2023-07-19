import React from 'react'
import pizzaData from '../data'
import "./menu.css"

function Menu() {
  return (
    <>
      <div className='wrapper'>

        {pizzaData.map((pizza, index) => {
          return (
            <div key={index} className={(pizza.soldOut !== false) ? ("gray box") : "box"}>

              <div className='img'>
                <img src={pizza.photoName} alt={pizza.name} />
              </div>
              <div className='detail'>
                <h2>{pizza.name}</h2>
                <p>{pizza.ingredients}</p>
                <p>{(pizza.soldOut === true) ? "SoldOut" : ("Price $" + pizza.price)}</p>
              </div>

            </div>
          )
        })}

      </div>
    </>
    // {(e.soldOut === false)?("Price $."+e.price):"SoldOut"}
  )
}

export default Menu