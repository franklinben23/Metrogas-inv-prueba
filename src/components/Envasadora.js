import React from 'react';

const Envasadora = (props) => {
  const { id, nombre, capacidadMax, capacidadMin, porcentajeMin, status, contenido, porcentaje, fecha, hora } = props;
  return (
    <div className="envasadora">
      <div className="envasadora-titulo">
        <p className="env-id">{id}</p>
        <h3 className="env-nombre">{nombre}</h3>
      </div>
      <div className="envasadora-tanque">
        <div className="tanque"></div>
      </div>
      <div className="lista-informacion">
        <div className="info-lista"> Estado: 
        {' '}
          <p className="info-lista-dato"> {status === true ? <span className="status"> Activo</span> : <span className="status"> Inactivo</span>} </p>
        </div>
        <div className="info-lista"> Capacidad Maxima: 
        {' '}
          <p className="info-lista-dato"> {capacidadMax} </p>
        </div>
        <div className="info-lista"> Capacidad Minima: 
        {' '}
          <p className="info-lista-dato"> {capacidadMin} </p>
        </div>
        <div className="info-lista"> Contenido total: 
        {' '}
          <p className="info-lista-dato"> {contenido} </p>
          {porcentaje <= porcentajeMin ? <span className="span-alerta">El tanque esta a minima capacidad!</span> : null}
        </div>
        <div className="info-lista"> Fecha: 
        {' '}
          <p className="info-lista-dato"> {fecha} </p>
        </div>
        <div className="info-lista"> Hora: 
        {' '}
          <p className="info-lista-dato"> {hora} </p>
        </div>
      </div>
    </div>
  );
};

export default Envasadora;