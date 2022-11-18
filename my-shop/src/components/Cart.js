import React from "react";
import { useCart } from "./context/CartContext";
import './Cart.css'
const Cart =()=>{
  
    const {products,clearCart,}=useCart()

   

    return(
        <div className="CartContainer">
        <div className="CartTitle">Carrito Larroni</div>
        {products.map((p,i)=><li key={i}>Product: {p.name}  Price:${p.price}  
        <img src={p.img}  width='200'/>
        </li>)}
        <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart;


   
  