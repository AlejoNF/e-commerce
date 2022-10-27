import React from 'react'
import  './styles/cardPurchase.css'

const CardPurchase = ({purchase}) => {
    console.log(purchase)
    Object.hasOwnProperty()
  return (
    <article className='purchase__container'>
        <header className='purchase__date'>{purchase.updatedAt}</header>

        <div className='purchase__info'>
            {
                purchase.cart.products.map(product =>(
                    <section className='purchase__card' key = {product.id}>
                        <h3 className='purchase__name'>{product.title}</h3>
                        <div className='purchase__quantity'>Quantity: {product.productsInCart.quantity}</div>
                        <div className='purchase__price'> $ {product.price}</div>
                    </section>
                ))
            }
        </div>
    </article>
  )
}

export default CardPurchase