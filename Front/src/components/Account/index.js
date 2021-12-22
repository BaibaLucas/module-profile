// Package imports
import React, { useEffect, useState } from 'react';
import { Link, Navigate, NavLink } from 'react-router-dom';

// Local imports
import defaultPic from '../../assets/images/defaultPic.jpeg';
import { MdAddPhotoAlternate } from 'react-icons/md';

// Components
const Account = ({ username, email, imgprofil, isLogged, changeSuccess, handleChange, editusername, editemail, editpassword, handleSubmitUsername, handleSubmitEmail, handleSubmitPassword, success }) => {

useEffect(() => {
  changeSuccess();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

/** States for opening form edit */
const [openUsername, setOpenUsername] = useState(false);
const [openEmail, setOpenEmail] = useState(false);
const [openPassword, setOpenPassword] = useState(false);

/** () => for opening form edit {refactoring}*/
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

/** Handle input value */
const onChange = (event) => {
  handleChange(event.target.value, event.target.name);
};

/** Handle submit value {refactoring}*/
const onSubmitUsername = (event) => {
  event.preventDefault();
  setOpenUsername(false);
  handleSubmitUsername();
};
const onSubmitPassword = (event) => {
  event.preventDefault();
  setOpenPassword(false);
  handleSubmitPassword();
};
const onSubmitEmail = (event) => {
  event.preventDefault();
  setOpenEmail(false);
  handleSubmitEmail();
};

/** Return default pics */
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
        {/* USERNAME */}
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
          {/* USERNAME EDIT */}
          {openUsername && (
            <>
            <form className='account_container_card_content_username_form' onSubmit={onSubmitUsername}>
              <label className='account_container_card_content_username_form_label' htmlFor="username">Change Username</label>
              <input 
                value={editusername}
                onChange={onChange}
                className='account_container_card_content_username_form_input'
                type='text'
                name='editusername'
                id='editusername'
                placeholder='username'
              />
              <button className='account_container_card_content_username_button' type='submit'>
                Save
              </button>
              <button className='account_container_card_content_username_button' type='reset' onClick={usernameClick}>
                Cancel
              </button>
            </form>
            </>
          )}
          </div>
          {/* EMAIL */}
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
          {/* EMAIL EDIT */}
          {openEmail && (
            <>
            <form className='account_container_card_content_email_form' onSubmit={onSubmitEmail}>
              <label className='account_container_card_content_email_form_label' htmlFor="email">Change Email</label>
              <input 
                value={editemail}
                onChange={onChange}
                className='account_container_card_content_email_form_input'
                type='email'
                name='editemail'
                id='editemail'
                placeholder='email'
              />
              <button className='account_container_card_content_email_button' type='submit'>
                Save
              </button>
              <button className='account_container_card_content_email_button' type='reset' onClick={emailClick}>
                Cancel
              </button>
            </form>
            </>
          )}
          </div>
          {/* PASSWORD */}
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
          {/* PASSWORD EDIT */}
          {openPassword && (
            <>
            <form className='account_container_card_content_password_form' onSubmit={onSubmitPassword}>
              <label className='account_container_card_content_password_form_label' htmlFor="password">Change Password</label>
              <input 
                value={editpassword}
                onChange={onChange}
                className='account_container_card_content_password_form_input'
                type='editpassword'
                name='editpassword'
                id='editpassword'
                placeholder='password'
              />
              <button className='account_container_card_content_password_button' type='submit'>
                Save
              </button>
              <button className='account_container_card_content_password_button' type='reset' onClick={passwordClick}>
                Cancel
              </button>
            </form>
            </>
          )}
          </div>
        </div>
        {/* if success return a new div with success message and back home */}
        {success && (
        <>
        <div className='uploadimg_container_successfully'>
          <div className='uploadimg_container_successfully_msg'>
            Img update successfully
          </div>
          <button className='uploadimg_container_successfully_button'>
            <Link to ='/'>Back Home</Link>
          </button>
        </div>
        </>
      )}
        </div>
      </div>
    </div>
  )
};

export default Account;