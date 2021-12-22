// Package imports
import React from 'react';
import { Navigate } from 'react-router-dom';
// Local imports
import Loader from '../Loader';

const Login = ({ emailValue, passwordValue, handleChange, handleLogin, isLogged, loginError, isLoaded }) => {

  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  }

  return (
    <div className='login'>


      {!isLoaded && (
          <Loader />
        )}

      {/* redirect if user is logged */}
      {isLogged && (
        <Navigate to='/' />
      )}
      
      <div className='login_container'>
      <h1 className='login_container_title'>Connexion</h1>
      <form className='login_container_form' onSubmit={handleSubmit}>
        <label className='login_container_form_label' htmlFor='email'>Email</label>
        <input
          className='login_container_form_input'
          type='email'
          name='email'
          id='email'
          placeholder='Saisissez votre e-mail'
          value={emailValue}
          onChange={onChange}
        />
        <label className='login_container_form_label' htmlFor='password'>Mot de passe</label>
        <input
          className='login_container_form_input'
          type='password'
          name='password'
          id='password'
          placeholder='Saisissez votre mot de passe'
          value={passwordValue}
          onChange={onChange}
        />
        <button className='login_container_form_button' type='submit'>Valider</button>
        {/* Show if user do some error at Login */}
        {loginError && (
          <div className='login_container_form_error'> ERROR TRY AGAIN </div>
        )}
      </form>
      </div>
    </div>
  )

};

export default Login;