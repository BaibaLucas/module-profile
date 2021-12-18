// Package imports
import React, { useEffect, useState } from 'react';
import { Navigate, NavLink } from 'react-router-dom';

// Local imports
import defaultPic from '../../assets/images/defaultPic.jpeg';


// Components

const Profil = ({ username, email, imgprofil, isLogged, changeSuccess, success }) => {

  // useEffect(() => {
  //   console.log("Load members Data");
  //   changeLoader();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

useEffect(() => {
  // changeLoader();
  changeSuccess();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

const [openUsername, setOpenUsername] = useState(false);
const [openEmail, setOpenEmail] = useState(false);
const [openPassword, setOpenPassword] = useState(false);

const userImg = () => {
  if (imgprofil === null) {
    return defaultPic
  } else {
    return imgprofil
  }
};

  return (
    <div className='profil'>
      {/* redirect if user is logged */}
      {!isLogged && (
        <Navigate to='/login' />
      )}
      <div className='profil_container'>
        <div className='profil_container_title'>
          MY PROFIL
        </div>
        <div className='profil_container_card'>
        {/* PICTURE + NAME  */}
        <div className='profil_container_card_header'>
          <div className='profil_container_card_header_image'>
            <img src={userImg()} alt='avatar' />
          </div>
          <div className='profil_container_card_header_name'>
            {username}
          </div>
        </div>
        {/* DETAILS */}
        <div className='profil_container_card_content'>
          <div className='profil_container_card_content_username'>
            <div className='profil_container_card_content_username_box'>
              <div className='profil_container_card_content_username_box_left'>
              <div className='profil_container_card_content_username_box_left_desc'>
                Display name
              </div>
              <div className='profil_container_card_content_username_box_left_name'>
                {username}
              </div>
              </div>
              <div className='profil_container_card_content_username_box_right'>
              <button className='profil_container_card_content_username_box_right_button' onClick={() => setOpenUsername(!openUsername)}>
                Edit
              </button>
              </div>
            </div>
          
          {openUsername && (
            <>
            <form className='profil_container_card_content_username_form'>
              <label className='profil_container_card_content_username_form_label' htmlFor="username">Change Username</label>
              <input 
                value={username}
                // onChange={onChange}
                className='profil_container_card_content_username_form_input'
                type='text'
                name='username'
                id='username'
                placeholder='username'
              />
              <button className='profil_container_card_content_username_button' onClick={() => setOpenUsername(!openUsername)}>
                Save
              </button>
              <button className='profil_container_card_content_username_button' onClick={() => setOpenUsername(!openUsername)}>
                Cancel
              </button>
            </form>
            </>
          )}
          </div>
          <div className='profil_container_card_content_email'>
            <div className='profil_container_card_content_email_box'>
              <div className='profil_container_card_content_email_box_desc'>
                Email
              </div>
              <div className='profil_container_card_content_email_box_name'>
                {email}
              </div>
            </div>
            <button className='profil_container_card_content_email_button' onClick={() => setOpenEmail(true)}>
              Edit
            </button>
            {openEmail && (
            <>
            <label className='profil_container_card_content_email_edit' htmlFor="email">Email</label>
            <input 
            value={username}
            // onChange={onChange}
            className='profil_container_card_content_email_edit_input'
            type='email'
            name='email'
            id='email'
            placeholder='email'
            />
            </>
          )}
          </div>
          <div className='profil_container_card_content_password'>
            <div className='profil_container_card_content_password_box'>
              <div className='profil_container_card_content_password_box_desc'>
                Password
              </div>
              <div className='profil_container_card_content_password_box_name'>
                *********
              </div>
            </div>
            <button className='profil_container_card_content_password_button' onClick={() => setOpenPassword(true)}>
              Change
            </button>
            {openPassword && (
            <>
            <label className='profil_container_card_content_password_edit' htmlFor="password">Password</label>
            <input 
            value={username}
            // onChange={onChange}
            className='profil_container_card_content_password_edit_input'
            type='password'
            name='password'
            id='password'
            placeholder='password'
            />
            </>
          )}
          </div>
          <div className='profil_container_card_content_uploadimg'>
            <button className='profil_container_card_content_uploadimg_btn'>
              <NavLink to ='/account/update' > Update profile </NavLink>
            </button>
          </div>
        </div>
        </div> 
      </div>
    </div>
  )
};

export default Profil;