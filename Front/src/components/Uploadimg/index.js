// Package imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import getCanvasImage from '../../utils';
import { dataURLtoFile } from '../../utils';




import Loader from '../Loader';

const Uploadimg = ({ handleSubmit, isLoaded, success, handleChange, imgprofil }) => {

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

const onSubmit = async (event) => {
  event.preventDefault();
  const canvas = await getCanvasImage(image);
  const canvasDataUrl = canvas.toDataURL('image/jpeg');
  const convertedUrlToFile = dataURLtoFile(canvasDataUrl, 'profil-picture.jpeg');
  setAvatar(canvasDataUrl);
  handleSubmit(convertedUrlToFile);
}


  return(
    <div className='uploadimg'>

        {!isLoaded && (
          <Loader />
        )}
      <div className='uploadimg_container'>
        <div className='uploadimg_container_title'>
          MODIFIER PROFIL
        </div>
        <form className='uploadimg_container_form' encType='multipart/form-data' onSubmit={onSubmit}>
        {avatar && (
          <div className='uploadimg_container_form_image'>
            <img src={avatar} alt='avatar' />
          </div>
        )}
        <label className='uploadimg_container_form_label'>Upload Profile Photo</label>
        {!success && (
          <>
          <input
          id='upload_photo'
          onChange={onSelectFile}
          className='uploadimg_container_form_input'
          type='file'
          name='imgprof'
          accept="image/*"
          />
          <button className='uploadimg_container_form_button' type='submit'>
            Valider
          </button>
          </>
        )}
        </form>
        {success && (
        <>
        <div className='uploadimg_container_successfully'>
          <div className='uploadimg_container_successfully_msg'>
            Img update successfully
          </div>
          <button className='uploadimg_container_successfully_button'>
            <Link to ='/account'>Retour au profil</Link>
          </button>
        </div>
        </>
      )}
      </div>
    </div>
  )
};

export default Uploadimg;