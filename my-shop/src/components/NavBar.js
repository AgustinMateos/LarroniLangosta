import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import CartWidget from "./CartWidget";



const NavBar = ()=>{
   

    

    return(<div className="shadow-lg p-3 mb-5 bg-white rounded NavBarContainer">
       <Link to='/'>Home</Link>
       <Link to='/' className="navbarContainerImg"><img alt="logo" src="../imagenes/logo.png" width='150px'/></Link>
       <CartWidget/>
        </div>)
}

export default NavBar

