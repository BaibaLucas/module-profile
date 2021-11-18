// Package imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// Local imports

// Components

const Header = ({}) => {
  return (
    <div className='header'>
      <div className='header_container'>
      <div className='header_container_nav'>
        <NavLink className='activenav' exact to ='/'>
        Accueil
        </NavLink>
        <NavLink className='activenav' exact to ='/login'>
        Login
        </NavLink>
        <NavLink className='activenav' exact to ='/signup'>
        Signup
        </NavLink>
      </div>
      </div>
    </div>
  )
};

export default Header;