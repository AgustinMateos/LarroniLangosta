import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {collection,getDoc, doc, getFirestore} from 'firebase/firestore'
import { useCart } from "./context/CartContext";
import './ItemDetail.css'


const ItemDetail =()=>{
    
    const {id} =useParams()
    const [product, setProduct] = useState({})
    
    const {addToCart} =useCart()

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = () => {
        const db = getFirestore()
        const productstCollection = collection(db, 'products')
        const docRef= doc(productstCollection,id)
        getDoc (docRef).then(respuesta=> {
        console.log(respuesta.data());
        setProduct(respuesta.data())})
        }

     const addHandler=()=>{
        addToCart(product)

     
     }


    return(
        <div className="cardContainerDataFlex">
            <h1 className="cardContainerDataTitle">Producto Seleccionado</h1>
        <div className="cardContainerData" >
        <img className="cardContainerImg" alt={product} src={product.img} width='200'/>
        <h4>{product.name}</h4>
        <p className="cardContainerDescription">{product.description}</p>
        <div>$ {product.price}</div>
        <button onClick={addHandler} className="m-1">+</button>
        <button className="m-1">-</button>
        </div></div>

    )
    }


export default ItemDetail;
