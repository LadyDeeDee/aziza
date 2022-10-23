import React, {useState, useEffect} from 'react';
import "./CatalogPage.css"
import Header from "../../components/Header/Header"


export default function CatalogPage () {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:3001/api/product/all')
            if(response.ok){
                const data = await response.json()
                setProducts(data)
            }
        }

        fetchProducts()
    }, [])

    return (
        <div className='container'>
            < Header />
            
            <h3 className="catalog-title">Fetured Items</h3>
            <p className='paragraph'>
                Shop for items based on what we featured in this week
            </p>
            <section className="catalog">
                {products.map(product => 
                    <div className="product" key={product.id}><img src={product.img} alt=""/>
                        <h5>{product.name}</h5>
                        <p>{product.description}</p>
                        <p className='price'>{product.price}</p>
                    </div>
                )}
            </section>
            <div className="button-wrapper">
                <button className="browse_all">Browse all</button>
            </div>
        </div>
    )
}