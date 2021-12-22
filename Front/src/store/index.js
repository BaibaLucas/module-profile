// Package imports
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducer
import rootReducer from '../reducers';
// MW
import authMiddleware from '../middlewares/auth';

// Store creation
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(authMiddleware),
  ),
);

export default store