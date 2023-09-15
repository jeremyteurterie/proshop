import React from 'react';
import ReactDOM from 'react-dom/client';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Provider } from 'react-redux';
import store from './store.js';
import Router from './router.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <Router />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);
