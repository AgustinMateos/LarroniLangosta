import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {collection,getDoc, doc, getFirestore} from 'firebase/firestore'

const ItemDetail =()=>{
    
    const {id} =useParams()
    const [product, setProduct] = useState({})
    
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


    return(
       
        <div>
        <div>{product.name}</div>
        <div>$ {product.price}</div>  
        <p>{product.description}</p>
        <img src={product.img} width='200'/>
        </div>
        
        
        
    )
    }


export default ItemDetail;