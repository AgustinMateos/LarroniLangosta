import React from "react";
import { useCart } from "./context/CartContext";
import './Cart.css'
import Order from "./Order";


const Cart = () => {

    const { products, clearCart } = useCart()
        
    return (
        <div className="CartContainer">

            <div className="carritoTacho">
                <div className="CartTitle">Carrito Larroni</div>
                <button onClick={clearCart}>
                    <img alt="tacho" width="25px" src="../imagenes/basura.png"></img>Vaciar Carrito</button></div>

            <div>
                <div >
                    <div>{products.map((p, i) => <div key={i}>
                        <div className="cardContainerDataFlex">
                            <div className="cardContainerData" >
                                <img className="cardContainerImg" alt={p.name} src={p.img} width='200' />

                                <h2>{p.name}</h2>
                                <p className="cardContainerDescription">{p.description}</p>
                                <div>$ {p.price}</div>
                            </div></div>
                    </div>)}</div>
                </div>
            </div>
            <Order />
        </div>
    )
}

export default Cart;



