import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {collection,getDoc, doc, getFirestore} from 'firebase/firestore'
import { useCart } from "./context/CartContext";



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
       
        <div >
        <div>{product.name}</div>
        <div>$ {product.price}</div>  
        <p>{product.description}</p>
        <img src={product.img} width='200'/>
        <button onClick={addHandler}>+</button>
        </div>

    )
    }


export default ItemDetail;