import React from 'react'
import { useCart } from "./context/CartContext";
import './Order.css'

const Order = () => {
    const {products,clearCart}=useCart()

  const putOrder=()=>{

    const user ={name:"agustin",phone: '1164324654',email: 'agustin@gmail.com'}
    

    const order={
      buyer:user,
      total:0,
      items:products
    
    }
    console.log(order)

    clearCart()

  }



  return (


    <div className='orderContainer'>
        <button onClick={putOrder}>Finalizar Compra</button>
    </div>
  )
}

export default Order