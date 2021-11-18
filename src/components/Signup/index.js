// Package imports
import React from 'react';


const Signup = ({ isLogged, username, email, password, imgprof, handleChange, handleSubmit }) => {

  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
  }

  return (
    <div className='signup'>
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
          <label className='signup_container_form_label'>Upload Profile Photo</label>
          <input
          value={imgprof}
          onChange={onChange}
          className='signup_container_form_input'
          type='file'
          name='imgprof'
          accept="image/*"
          />
          <button className='signup_container_form_button' type='submit'>Valider ! </button>
        </form>
      </div>

    </div>
  )
};

export default Signup;