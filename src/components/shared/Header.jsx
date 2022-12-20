import React from "react";
import { Link, NavLink } from "react-router-dom";
import './styles/header.css'

const Header = ({isOpen,setIsOpen, isDark, setIsDark}) => {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link className="header__title-name" to='/'>e-commerce</Link>
      </h1>
      <nav className="header__nav">
      <button onClick={() => setIsDark(!isDark)} className="header__dark">DarkMode</button>
        <ul className="header__list">
          <li className="header__item">
            <NavLink className="header__link" to='/login'>
            <i className="fa-regular fa-user"></i>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className="header__link" to='/purchases'>
            <i className="fa-solid fa-box"></i>
            </NavLink>
          </li>
          <li className="header__item">
             {/* <NavLink className="header__link" to='/cart'>  */}
            <i onClick={() => setIsOpen(!isOpen)} className="fa-solid fa-cart-shopping header__link"></i>
             {/* </NavLink>  */}
          </li>

          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
