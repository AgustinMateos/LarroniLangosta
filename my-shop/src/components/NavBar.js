import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

const NavBar = ()=>{

    const {count}=useCart()

    return(<div className="shadow-lg p-3 mb-5 bg-white rounded NavBarContainer">
       <Link to='/'>Home</Link>
       <Link to='/cart'><button><img style={{whidth:"3rem", height:"2rem"}} src="../imagenes/cart.png"></img>{count}</button></Link>
        </div>)
}

export default NavBar