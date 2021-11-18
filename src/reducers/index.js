import { combineReducers } from 'redux';

// Local imports
import authReducers from './auth';

export default combineReducers({
  auth: authReducers,
});