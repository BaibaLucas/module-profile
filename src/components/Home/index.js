// Package imports
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// Local imports

// Components

const Home = ({ loadMembersData }) => {

  useEffect(() => {
    loadMembersData();
  }, []);


  return (
    <div className='home'>
      <div className='home_container'>
        <div className='home_container_title'>
          <h1>all members</h1>
        </div>
      </div>
    </div>
  )
};

export default Home;