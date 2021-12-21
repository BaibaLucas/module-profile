// Package imports
import React, { useEffect, useState } from 'react';
import { Navigate, NavLink } from 'react-router-dom';

// Local imports
import defaultPic from '../../assets/images/defaultPic.jpeg';
import { MdAddPhotoAlternate } from 'react-icons/md';


// Components

const Account = ({ username, email, imgprofil, isLogged, changeSuccess, password }) => {

useEffect(() => {
  // changeLoader();
  changeSuccess();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

const [openUsername, setOpenUsername] = useState(false);
const [openEmail, setOpenEmail] = useState(false);
const [openPassword, setOpenPassword] = useState(false);


const usernameClick = () => {
  setOpenUsername(!openUsername);
  setOpenEmail(false);
  setOpenPassword(false);
};

const emailClick = () => {
  setOpenEmail(!openEmail);
  setOpenUsername(false);
  setOpenPassword(false);
};

const passwordClick = () => {
  setOpenPassword(!openPassword);
  setOpenUsername(false);
  setOpenEmail(false);
};

const userImg = () => {
  if (imgprofil === null) {
    return defaultPic
  } else {
    return imgprofil
  }
};

  return (
    <div className='account'>
      {/* redirect if user is logged */}
      {!isLogged && (
        <Navigate to='/login' />
      )}
      <div className='account_container'>
        <div className='account_container_title'>
          MY account
        </div>
        <div className='account_container_card'>
        {/* PICTURE + NAME  */}
        <div className='account_container_card_header'>
        <NavLink to ='/account/update' > 
          <div className='account_container_card_header_image'>
            <div className='account_container_card_header_image_icon'>
            <MdAddPhotoAlternate size={40} color={'#EA92DD'}/>
            </div>
            <img src={userImg()} alt='avatar' />
          </div>
        </NavLink>
          <div className='account_container_card_header_name'>
            {username}
          </div>
        </div>
        {/* DETAILS */}
        <div className='account_container_card_content'>
        {/* username */}
          <div className='account_container_card_content_username'>
            <div className='account_container_card_content_username_box'>
              <div className='account_container_card_content_username_box_left'>
              <div className='account_container_card_content_username_box_left_desc'>
                Display name
              </div>
              <div className='account_container_card_content_username_box_left_name'>
                {username}
              </div>
              </div>
              <div className='account_container_card_content_username_box_right'>
              {!openUsername && (
                <button className='account_container_card_content_username_box_right_button' onClick={usernameClick}>
                Edit
              </button>
              )}
              </div>
            </div>
          {/* username edit */}
          {openUsername && (
            <>
            <form className='account_container_card_content_username_form'>
              <label className='account_container_card_content_username_form_label' htmlFor="username">Change Username</label>
              <input 
                value={username}
                className='account_container_card_content_username_form_input'
                type='text'
                name='username'
                id='username'
                placeholder='username'
              />
              <button className='account_container_card_content_username_button' onClick={usernameClick}>
                Save
              </button>
              <button className='account_container_card_content_username_button' onClick={usernameClick}>
                Cancel
              </button>
            </form>
            </>
          )}
          </div>
          {/* email */}
          <div className='account_container_card_content_email'>
            <div className='account_container_card_content_email_box'>
              <div className='account_container_card_content_email_box_left'>
              <div className='account_container_card_content_email_box_left_desc'>
                Email
              </div>
              <div className='account_container_card_content_email_box_left_name'>
                {email}
              </div>
              </div>
              <div className='account_container_card_content_email_box_right'>
              {!openEmail && (
                <button className='account_container_card_content_email_box_right_button' onClick={emailClick}>
                Edit
              </button>
              )}
              </div>
            </div>
          {/* email edit */}
          {openEmail && (
            <>
            <form className='account_container_card_content_email_form'>
              <label className='account_container_card_content_email_form_label' htmlFor="email">Change Email</label>
              <input 
                value={email}
                // onChange={onChange}
                className='account_container_card_content_email_form_input'
                type='email'
                name='email'
                id='email'
                placeholder='email'
              />
              <button className='account_container_card_content_email_button' onClick={emailClick}>
                Save
              </button>
              <button className='account_container_card_content_email_button' onClick={emailClick}>
                Cancel
              </button>
            </form>
            </>
          )}
          </div>
          {/* password */}
          <div className='account_container_card_content_password'>
            <div className='account_container_card_content_password_box'>
              <div className='account_container_card_content_password_box_left'>
              <div className='account_container_card_content_password_box_left_desc'>
                Password
              </div>
              <div className='account_container_card_content_password_box_left_name'>
                **********
              </div>
              </div>
              <div className='account_container_card_content_password_box_right'>
              {!openPassword && (
                <button className='account_container_card_content_password_box_right_button' onClick={passwordClick}>
                Edit
              </button>
              )}
              </div>
            </div>
          {/* password edit */}
          {openPassword && (
            <>
            <form className='account_container_card_content_password_form'>
              <label className='account_container_card_content_password_form_label' htmlFor="password">Change Password</label>
              <input 
                value={password}
                // onChange={onChange}
                className='account_container_card_content_password_form_input'
                type='password'
                name='password'
                id='password'
                placeholder='password'
              />
              <button className='account_container_card_content_password_button' onClick={passwordClick}>
                Save
              </button>
              <button className='account_container_card_content_password_button' onClick={passwordClick}>
                Cancel
              </button>
            </form>
            </>
          )}
          </div>
        </div>
        </div> 
      </div>
    </div>
  )
};

export default Account;