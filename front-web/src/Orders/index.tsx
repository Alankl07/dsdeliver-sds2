import './styles.css';
import { ReactComponent as Logo } from '../assets/logo.svg';
import StepHeader from './StepsHeader';
import ProductList from './ProductsList';
import { useEffect, useState } from 'react';
import { Product } from './types';
import { fetchProducts } from '../service/api';
const Order = () => {

    const [products, setProducts] = useState<Product[]>([]);

    console.log(products)
    useEffect(() => {
        fetchProducts().then(response => {
            setProducts(response.data)
        }).catch(err => {
            console.log(err)
        })
    },[])

    return(
        <div className="orders-container">
            <StepHeader/>
            <ProductList products={products} />
        </div>
    )
}

export default Order;