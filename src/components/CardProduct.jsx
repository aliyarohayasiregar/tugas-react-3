// import React from 'react'
import "./CardProduct.css"

const CardProduct = (p) => {
  return (
    <div className='product' onClick={() => {
      return alert("Barang " + p.c + " Harga " + p.d + " Merupakan kulitas terbaik")}}>
    <img src={p.a} alt="" className='image'/>
    <h2>{p.b}</h2>
    <p>{p.c}</p>
    <p>{p.d}</p>
    </div>
  )
}

export default CardProduct