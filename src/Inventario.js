import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInvData } from './redux/inventario';
import Envasadora from './components/Envasadora';
import './App.css';

function Inventario() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getInvData());
  }, [])
  const envasadoras = useSelector((state) => state.tanques);
  return (
    <div className="App">
      <h1 className="big-title"> Metrogas envasadoras</h1>
      <div className="content-inventario">
        {envasadoras.map((el)=> (
          <Envasadora key={el.id}
          id={el.id} 
          nombre={el.envasadora} 
          capacidadMax={el.maxCapacidad}
          capacidadMin={el.minCapacidad}
          porcentajeMin={el.porcentajeMin}
          status={el.estadoTanque}
          contenido={el.contenidoGlp}
          porcentaje={el.porcentajeGlp}
          fecha={el.fechaInv}
          hora={el.horaInv}
          />
        ))}
      </div>
    </div>
  );
}

export default Inventario;
