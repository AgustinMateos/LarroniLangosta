import React, { useEffect, useState } from "react";
import { collection, getFirestore, getDocs } from 'firebase/firestore'
import { Link } from "react-router-dom";
import './ListContainer.css'



export const Card = ({ id, img, name, price }) => {
    return (
        <Link to={`/detail/${id}`}>
            <div>{name}</div>
            <span>$: {price}</span>
            <img src={img} width='200' />
        </Link>
    )
}

const ListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        const db = getFirestore()
        const producstCollection = collection(db, 'products')
        getDocs(producstCollection).then(respuesta => {
            const productsData = respuesta.docs.map(d => ({ id: d.id, ...d.data() }))
            console.log(productsData);
            setProducts(productsData)
            setLoading(false)
        })
    }

    return (
        <div className="bg-light ListContainer" > <h1>Productos Larroni</h1>
            <div className="ItemslistContainer">
            {loading ? <h1>Loading...</h1>
                :
                products.map(p => <Card  key={p.id}  {...p} />)
            }
        </div>
        </div>
    )
}

export default ListContainer; 