// Package imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Local imports
// Components
import Home from '../../containers/Home';
import Login from '../../containers/Login';
import Signup from '../../containers/Signup';
import Header from '../../containers/Header';
import Account from '../../containers/Account';
import Uploadimg from '../../containers/Uploadimg';

const App = () => {

  
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<Account />} />
        <Route path='/account/update' element={<Uploadimg />} />
      </Routes>
    </div>
  );
}

export default App;