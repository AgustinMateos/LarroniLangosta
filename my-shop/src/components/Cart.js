import React from "react";
import { useCart } from "./context/CartContext";
import './Cart.css'
const Cart =()=>{
  
    const {products,clearCart,}=useCart()

   

    return(
        <div className="CartContainer">
        <div className="CartTitle">Carrito Larroni</div>
        <div><button onClick={clearCart}><img width="25px" src="../imagenes/basura.png"></img>Vaciar Carrito</button></div>
        <div> {products.map((p,i)=><li key={i}>Product: {p.name}  Price:${p.price}  
        <img src={p.img}  width='200'/></li>)}</div>
        </div>
    )
}

export default Cart;


   
  