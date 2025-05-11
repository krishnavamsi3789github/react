import React from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';

const Menu = () => {
    let Navigate = useNavigate();
  return (
    <div className='container navbar'>
      <ul className='nav-inline-flex menu-list-items'>
        <NavLink to='/LBI'> <li>ListItems</li> </NavLink>
        <NavLink to='/OB'> <li>Order</li> </NavLink>
        <NavLink to='/CB'> <li>Cart</li> </NavLink>
      </ul>
    </div>
  )
}

export default Menu
