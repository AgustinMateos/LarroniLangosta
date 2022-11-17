import React from "react";
import { useCart } from "./context/CartContext";

const Cart =()=>{
  
    const {products,clearCart,}=useCart()

   

    return(
        <div>
        <div>Cart</div>
        {products.map((p,i)=><li key={i}>Product: {p.name}  Price:${p.price}  
        <img src={p.img}  width='200'/>
        </li>)}
        <button onClick={clearCart}>limpiar carrito</button>
        </div>
    )
}

export default Cart;


   
  