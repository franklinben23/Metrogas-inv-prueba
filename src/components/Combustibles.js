import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFuelsApi } from '../redux/combustibles';
import './fuel.css';
import Combustible from './Combustible';

const Combustibles = () => {
  const dispatch = useDispatch();
  const combustibles = useSelector((state) => state.combustibles);
  useEffect(() => {
    if(combustibles.length === 0){
      dispatch(getFuelsApi());
    }
  }, [])

  return (
    <div className="big-cont">
      <div className="fuel-cont">
        <h2 className="fuels-title"> Precio Combustibles: </h2>
        <div className="fuel-cont-cont">
        {combustibles.map((el) => (
          <Combustible 
          nombre={el.combustible}
          precio={el.precio}
          fecha={el.fecha}
          />
        ))
        }
        </div>
      </div>
    </div>
  )
};

export default Combustibles;