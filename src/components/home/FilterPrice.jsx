import React from 'react'
import './styles/filterPrice.css'

const FilterPrice = ({setFilterByPrice}) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const from = +event.target.from.value
        const to = +event.target.to.value
        const obj = {
            from: from,
            to: to !== 0 ? to : Infinity
        }
        setFilterByPrice(obj)
    }

  return (
    <form className='filter-price__form' onSubmit={handleSubmit}>
      <h3 className='filter-price__title'>Price</h3>
      <div className='filter-price-contains'>
        <label className='filter-price__label' htmlFor="from">From</label>
        <input className='filter-price__input' type="number" id='from' />
      </div>
      <div className='filter-price-contains' >
        <label className='filter-price__label' htmlFor="to">To</label>
        <input className='filter-price__input' type="number" id='to' />
      </div>
      <button className='filter-price__btn'>Filter</button>
    </form>

  )
}

export default FilterPrice