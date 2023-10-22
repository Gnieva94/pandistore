import React, {useContext, useState, useEffect} from 'react'
import Contexto from '../context/Contexto'
import '../assets/css/Home.css'
import Item from '../components/Item'

export default function Home() {
  const {getProducts, products} = useContext(Contexto)
  useEffect(()=> {
    getProducts()
  },[]) 
  return (
    <main>
      <h3>Listado de productos</h3>
      <ul className='toffle'>
        {products.map((product, index) => (
          <Item key={index} {...product} />
        ))}
      </ul>
    </main>

  )
}
