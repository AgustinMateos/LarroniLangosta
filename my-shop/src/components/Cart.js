import React from "react";
import { useCart } from "./context/CartContext";
import './Cart.css'
import Order from "./Order";


const Cart = () => {

    const { products, clearCart } = useCart()



    return (
        <div className="CartContainer">

            <div className="carritoTacho"><div className="CartTitle">Carrito Larroni</div><button onClick={clearCart}><img width="25px" src="../imagenes/basura.png"></img>Vaciar Carrito</button></div>

            <div>
                <div className="tablaflex">
                <div>{products.map((p, i) => <div key={i}>
                <div>Product: {p.name} <div>Price:${p.price}</div>  </div>
                <div><img src={p.img} width='200' /> </div>
                </div>)}</div>
            </div>
            </div>
            
            <Order />
        </div>
    )
}

export default Cart;



