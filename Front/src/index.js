// = Package imports
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';

// == Local imports
// styles
import './styles/reset.scss';
import './styles/index.scss';
// components
import App from './components/App';
// store
import store from './store';

const rootReactElement = (
  <BrowserRouter>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </BrowserRouter>
);

const target = document.getElementById('root');

render(rootReactElement, target);


