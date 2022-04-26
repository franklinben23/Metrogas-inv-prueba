import React from 'react';

const Combustible = (props) => {
  const { nombre, precio, fecha } = props;
  return (
    <div className="fuel-card">
      <h3 className="fuel-title li">Combustible: {nombre}</h3>
      <p className="fuel-p price li">Precio: {precio} </p>
      <p className="fuel-p date li">Fecha: {fecha} </p>
    </div>
  );
};

export default Combustible;