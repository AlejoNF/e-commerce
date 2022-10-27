import React from 'react'
import './styles/inputSearch.css'

const InputSearch = ({setInputText, inputText}) => {

    const handleChange = e => {
        setInputText(e.target.value);
    }

  return (
    <div className='input__container'>
       <input className='input' value={inputText} onChange={handleChange}
        type="text" placeholder='Search a product' />
    </div>
   
    
  )
}

export default InputSearch