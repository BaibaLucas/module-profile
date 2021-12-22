// Package imports
import React, { useEffect } from 'react';

// Local imports
import defaultPic from '../../assets/images/defaultPic.jpeg';
import Loader from '../Loader';

// Components

const Home = ({ loadMembersData, isLogged, username, members, isLoaded, resetMembers }) => {

  const clearCacheData = () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
    // alert('Complete Cache Cleared')
  };


  useEffect(() => {
    // resetMembers();
    clearCacheData();
    console.log("Load members Data");
    loadMembersData();
    console.log(members);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userImg = (img) => {
    if (img === null) {
      return defaultPic
    } else {
      return img
    }
  };

  return (
    <div className='home'>
      <div className='home_container'>
        <div className='home_container_title'>
          <h1>all members</h1>
        </div>
        {!isLoaded && (
          <Loader />
        )}
        
        {isLoaded && (
          <>
          {isLogged && (  
            <div className='home_container_profil'> Bienvenue {username} </div> 
        )}
          <div className='home_container_members'>
          {members.map((member) => {
            return (
              <div key={member.id} className='home_container_members_card'>
                <div className='home_container_members_card_image'>
                  <img src={userImg(member.profilurl)} alt='avatar'/>
                </div>
                <div className='home_container_members_card_username'>
                  {member.username}
                </div>
              </div>
            )
          })}
        </div>
          </>
        )}    
      </div>
    </div>
  )
};

export default Home;