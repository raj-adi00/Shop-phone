import React from 'react'
import Header from './Header'
import Card from './Card'
import List from './List'
import { useEffect } from 'react'

function Product() {
  // console.log(1)
  useEffect(() => {
    document.querySelector(".productpage").style.maxWidth = `${window.innerWidth}px`
    document.querySelector(".productpage").style.overflow = `hidden`
  }, [])
  return (
    <div className='productpage'>
      <Header />
      <List />
    </div>
  )
}

export default Product