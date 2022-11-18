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
       
        <div className="cardContainerData" >
        <img className="cardContainerImg" src={product.img} width='200'/>
        <div>{product.name}</div>
        <p className="cardContainerDescription">{product.description}</p>
        <div>$ {product.price}</div>
        <button onClick={addHandler}>+</button>
        <button>-</button>
        </div>

    )
    }


export default ItemDetail;
