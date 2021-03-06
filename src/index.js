import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/rdx/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    cacheLocation="localstorage"
    clientId={process.env.REACT_APP_AUTH_CLIENT}
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    redirectUri={window.location.origin}
    >
    <Provider store={store}>
      <App />
    </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
