import { addDoc, collection, getFirestore, } from 'firebase/firestore';
import React, { useState } from 'react'
import { useCart } from "./context/CartContext";
import './Order.css'


export const UserForm = ({ setUser }) => {

  const updateUser = (event) => {
  setUser(user=>({...user,[event.target.name]:event.target.value}))
  
  }

  return (
    <div className='shadow-lg p-3 mb-5 bg-white rounded orderContainterDetalleCliente'>
      <div className='orderTitleContainter col-md-12'><h4>Detalle del Cliente: </h4></div>
      <div className='m-3'>Name:<input onChange={updateUser} name='name' type='text'></input></div>
      <div className='m-3'>Phone:  <input name='phone' onChange={updateUser} type='text'></input></div>
      <div className='m-3'>Email:  <input name='email' onChange={updateUser} type='text'></input></div>
    </div>
  )
}





const Order = () => {
  const { products, clearCart } = useCart()
  const { user, setUser } = useState({})


  const putOrder = () => {



    const order = {
      buyer: user,
      total: 0,
      items: products

    }
    clearCart()

    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    addDoc(ordersCollection, order).then(res => (console.log(res)))


  }



  return (


    <div className='orderContainer'>
      <div><UserForm setUser={setUser} /></div>
      <div><button onClick={putOrder}>Finalizar Compra</button></div>
    </div>
  )
}

export default Order