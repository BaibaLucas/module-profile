// Package imports
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

// Local imports

// Components

const Header = ({ isLogged, handleLogout }) => {

  const onClick = (event) => { 
    handleLogout();
  };


  return (
    <div className='header'>
      <div className='header_container'>
      <div className='header_container_nav'>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to ='/'>
        Accueil
        </NavLink>
        {!isLogged && (
          <>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to ='/login'>
            Login
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to ='/signup'>
          Signup
          </NavLink>
          </>
        )}
        {isLogged && (
          <>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to ='/account'>
            Profil
          </NavLink>
          <Link to ='/' onClick={onClick}>
            Logout
          </Link>
          </>
        )}
      </div>
      </div>
    </div>
  )
};

export default Header;