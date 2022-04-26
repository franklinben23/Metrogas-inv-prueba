import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider }from 'react-redux';
import store from './redux/configureStore';
import './index.css';
import Inventario from './Inventario';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Inventario />
    </Provider>
  </React.StrictMode>
);
