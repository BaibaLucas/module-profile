// Package imports
import React, { useState } from 'react';
import { Navigate, Redirect, useNavigate, Link } from 'react-router-dom';
import getCanvasImage from '../../utils';
import { dataURLtoFile } from '../../utils';
import defaultPic from '../../assets/images/defaultPic.jpeg';



import Loader from '../Loader';

const Editprofil = ({ handleSubmit, isLoaded, success, handleChange, imgprofil }) => {

  const [image, setImage] = useState(null);
  const [avatar, setAvatar] = useState(null);
  
  const onSelectFile = async (event) => {
    if (event.target.files && event.target.files.length > 0) {
			const reader = new FileReader();
			reader.readAsDataURL(event.target.files[0]);
			reader.addEventListener("load", () => {
				setImage(reader.result);
			});
		}
    setAvatar(image);
    console.log('IMAGE --->', image);
  };

  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  };

const onSubmit = async (event) => {
  event.preventDefault();
  const canvas = await getCanvasImage(image);
  const canvasDataUrl = canvas.toDataURL('image/jpeg');
  const convertedUrlToFile = dataURLtoFile(canvasDataUrl, 'profil-picture.jpeg');
  setAvatar(convertedUrlToFile);
  handleSubmit(convertedUrlToFile);
}


  return(
    <div className='editprofil'>

        {!isLoaded && (
          <Loader />
        )}
      <div className='editprofil_container'>
        <div className='editprofil_container_title'>
          MODIFIER PROFIL
        </div>
        <form className='editprofil_container_form' encType='multipart/form-data' onSubmit={onSubmit}>
        {avatar && (
          <div className='profil_container_card_header_image'>
          
            <img src={avatar} alt='avatar' />
          </div>
        )}
        <label className='editprofil_container_form_label'>Upload Profile Photo</label>
          <input
          id='upload_photo'
          onChange={onSelectFile}
          className='editprofil_container_form_input'
          type='file'
          name='imgprof'
          accept="image/*"
          />
          <button className='editprofil_container_form_button' type='submit'>
            Valider
          </button>
        </form>
        {success && (
        <>
        <div className='editprofil_container_successfully'>
          <div className='editprofil_container_successfully_msg'>
            Img update successfully
          </div>
          <button className='editprofil_container_successfully_button'>
            <Link to ='/account'>Retour au profil</Link>
          </button>
        </div>
        </>
      )}
      </div>
    </div>
  )
};

export default Editprofil;