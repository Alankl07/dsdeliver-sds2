import './styles.css';
import { ReactComponent as Logo } from '../assets/logo.svg';
import StepHeader from './StepsHeader';
import ProductList from './ProductsList';
import { useEffect, useState } from 'react';
import { OrderLocationData, Product } from './types';
import { fetchProducts } from '../service/api';
import OrderLocation from './OrderLocation';
const Order = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

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
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
        </div>
    )
}

export default Order;