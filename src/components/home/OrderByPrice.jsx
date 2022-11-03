import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingProducts, descendingProducts } from '../../store/slices/products.slice'
import './styles/orderByPrice.css'

const OrderByPrice = () => {
    const dispatch = useDispatch()

    const handleAscending = () => {
        dispatch(ascendingProducts())
    }

    const handleDescencindg = () => {
        dispatch(descendingProducts())
    }

  return (
    <div className='order-price__container'>
        <h3 className='order-price__title'>Order</h3>
       
        <button className='order-price__btn' onClick={handleAscending} >Ascending ⬆</button>
        <button className='order-price__btn' onClick={handleDescencindg} >Descending ⬇</button>
        
        
    </div>
  )
}

export default OrderByPrice