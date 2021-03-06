// Package imports
import {┬ácombineReducers } from 'redux';

// Local imports
import authReducers from './auth';

export default combineReducers({
  auth: authReducers,
});