import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingProducts, descendingProducts } from '../../store/slices/products.slice'

const OrderByPrice = () => {
    const dispatch = useDispatch()

    const handleAscending = () => {
        dispatch(ascendingProducts())
    }

    const handleDescencindg = () => {
        dispatch(descendingProducts())
    }

  return (
    <div>
        <h3>Order</h3>
        <button onClick={handleAscending} className='order__btn'>Ascending ⬆</button>
        <button onClick={handleDescencindg} className='order__btn'>Descending ⬇</button>
    </div>
  )
}

export default OrderByPrice