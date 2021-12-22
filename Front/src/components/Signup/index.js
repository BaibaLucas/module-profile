// Package imports
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

// Local imports

// Components
const Signup = ({ isLogged, username, email, password, imgprof, handleChange, handleSubmit }) => {

  const [ redirect, setRedirect] = useState(false);

  // Handle Value
  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  };

 // Handle Submit + Redirect state
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
    setRedirect(true);
  }

  return (
    <div className='signup'>
      {/* redirect when signed up */}
      {redirect && (
        <Navigate to='/login' />
      )}
      {/* redirect if user is logged */}
      {isLogged && (
        <Navigate to='/profil' />
      )}
      <div className='signup_container'>
        <h1 className='signup_container_title'>
          Inscription
        </h1>
        <form className='signup_container_form' onSubmit={onSubmit}>
          <label className='signup_container_form_label' htmlFor='username'>Username</label>
          <input
            value={username}
            onChange={onChange}
            className='signup_container_form_input'
            type='text'
            name='username'
            id='username'
            placeholder='Username'
          />
          <label className='signup_container_form_label' htmlFor='email'>Email</label>
          <input
            value={email}
            onChange={onChange}
            className='signup_container_form_input'
            type='email'
            name='email'
            id='email'
            placeholder='Email'
          />
          <label className='signup_container_form_label' htmlFor='password'>password</label>
          <input 
            value={password}
            onChange={onChange}
            className='signup_container_form_input'
            type='password'
            name='password'
            id='password'
            placeholder='min 8 char(a, A, 2, *)'
          />
          <button className='signup_container_form_button' type='submit'>Valider ! </button>
        </form>
      </div>
    </div>
  )
};

export default Signup;