import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Layout(props) {
  const {children} = props
  return (
    <>
    <Header></Header>
    {children}
    <Footer></Footer>
    </>
  )
}
