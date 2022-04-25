import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getInvData } from './redux/inventario';
import './App.css';

function Inventario() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getInvData());
  }, [])
  return (
    <div className="App">
      <h1> hello world</h1>
    </div>
  );
}

export default Inventario;
