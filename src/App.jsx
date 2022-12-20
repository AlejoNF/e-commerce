import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'
import ProductId from './pages/ProductId'
import { useEffect } from 'react'
import axios from 'axios'
import LoginScreen from './pages/LoginScreen'
import getConfig from './utils/getConfig'
import Header from './components/shared/Header'
import { useState } from 'react'

function App() {
  // useEffect(() => {
  //   const URL  = `https://ecommerce-api-react.herokuapp.com/api/v1/users`

  //   const data = {
  //     firstName: 'Alejo',
  //     lastName:  'Narvaez',
  //     email:     'alejonar00@academlo.com',
  //     password:  'pass1234',
  //     phone:     '1234567891',
  //     role: 'admin'
  //   }

  //   axios.post(URL,data)
  //   .then(res => console.log(res.data))
  //   .catch(err => console.log(err))
  // },[])

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart`
    axios.get(URL,getConfig())
    .then(res=>console.log(res.data))
    .catch(err => console.log(err))
  },[])

  const [isOpen, setIsOpen] = useState(false)

  const [isDark, setIsDark] = useState(false)

  return (
    <div className="App">
      <Header isDark = {isDark} setIsDark = {setIsDark}
              isOpen = {isOpen} setIsOpen= {setIsOpen}
              />
      <Routes>
        <Route path='/' element={<Home isOpen = {isOpen} isDark = {isDark}/>}/>
        <Route path='/product/:id' element={<ProductId isOpen = {isOpen}/>}/>
        <Route path='/login' element={<LoginScreen/>}/>

        <Route element={<ProtectedRoutes/>}>
           {/* <Route path='/cart' element={<Cart/>} />  */}
          <Route path='/purchases' element={<Purchases isOpen={isOpen} isDark = {isDark}/>} />
        </Route>

      </Routes>
      
    </div>
  )
}

export default App
