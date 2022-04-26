import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider }from 'react-redux';
import store from './redux/configureStore';
import './index.css';
import Navigation from './components/Navigation';
import Combustibles from './components/Combustibles'
import Inventario from './Inventario';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route path="/" element={ <Inventario />} />
          <Route path="/Combustibles"  element={ <Combustibles />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
