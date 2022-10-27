import React from "react";
import { Link, NavLink } from "react-router-dom";
import './styles/header.css'

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link className="header__title-name" to='/'>e-commerce</Link>
      </h1>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink className="header__link" to='/login'>
            <i class="fa-regular fa-user"></i>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className="header__link" to='/purchases'>
            <i class="fa-solid fa-box"></i>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className="header__link" to='/cart'>
            <i class="fa-solid fa-cart-shopping"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
