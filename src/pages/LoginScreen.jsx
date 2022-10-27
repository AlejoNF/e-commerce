import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/loginScreen.css'
const LoginScreen = () => {

    const {handleSubmit,register,reset} = useForm()
    const [isLogged, setIsLogged] = useState(false)

    const submit = data => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/users/login`
        axios.post(URL,data)
        .then(res =>{
                console.log(res.data)
                localStorage.setItem('token', res.data.data.token)
                setIsLogged(true)
        })
        .catch(err => console.log(err))

    }

    useEffect(() => {
        if(localStorage.getItem('token')){
            setIsLogged(true)
        }else{
            setIsLogged(false)
        }
    },[])

    const handleLogOut = () => {
        localStorage.removeItem('token')
        setIsLogged(false)
    }

    if(isLogged){
        return (
            <div className='isLogged'>
               <h2>User logged ✔</h2> 
               <button onClick={handleLogOut}>
                LogOut
               </button>
            </div>
            
        ) 
    }
  return (
    <div className='login__container'>
        <form className='login__form' onSubmit={handleSubmit(submit)}>
            <h1 className='login__title'>Welcome! Enter your email and password to continue</h1>
            <div className='login__camp'>
                <label className='login__label' htmlFor="email">Email</label><br />
                <input className='login__input' type="email" id='email' {...register('email')} />
            </div>

            <div className='login__camp'>
                <label className='login__label' htmlFor="password">Password</label> <br />
                <input className='login__input' type="password" id='password' {...register('password')} />
            </div>

            <button className='login__btn'>Login</button>
        </form>
    </div>
  )
}

export default LoginScreen