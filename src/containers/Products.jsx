import React from 'react'
import '../assets/css/Products.css'
import img from '../assets/statics/cart.svg'
import {useLocation} from 'react-router-dom'

export default function Products() {
  const location = useLocation()
  console.log(location)
  return (
    <main>
      <img src={img} alt="" />
      <h2>Cebrero loco</h2>
      <p>medidas:</p>
      <div>
        <p>AR$ 150</p>
        <button type='button'>+</button>
      </div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore maxime amet molestias vitae atque distinctio nostrum ex et, ipsam ad. Ipsam sapiente ratione consequuntur eius ad ex labore unde eveniet!</p>
    </main>
  )
}
