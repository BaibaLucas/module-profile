// Package imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Local imports
// Components
import Home from '../../containers/Home';
import Login from '../../containers/Login';
import Signup from '../../containers/Signup';
import Header from '../Header';

const App = () => {

  
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;