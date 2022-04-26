const GETAPI = 'metrogas-inv-prueba/src/redux/GET_API';

// Action Constructor

const dataInv = (payload) => ({
  type: GETAPI,
  data: payload,
});

export const InvReducer = (state = [], action) => {
  switch(action.type) {
    case GETAPI:
      return action.data;
    default:
      return state;
  }
};

const percentage = (partialValue, totalValue) => {
  return Math.round((100 * partialValue) / totalValue);
};

export const getInvData = () => async (dispatch) => {
  const rawDta = await fetch('http://bytecodestech.com:8080/Inventario/inventario/all');
  const parsedDta = await rawDta.json();
  const Inventory = [];
  parsedDta.forEach(el => {
    const id = el.inventarioId;
    const envasadora = el.envasadoraEntity.envasadoraNombre.replace('_', ' ');
    const maxCapacidad = el.envasadoraEntity.capacidadMaximaTanque;
    const minCapacidad = el.envasadoraEntity.capacidadMinimaTanque;
    const porcentajeMin = `${percentage(minCapacidad, maxCapacidad)}%`;
    const estadoTanque = el.envasadoraEntity.estatus;
    const contenidoGlp = el.existenciaGLP;
    const porcentajeGlp = `${percentage(contenidoGlp, maxCapacidad)}%`;
    const fechaInv = el.fechaInventario;
    const horaInv = el.horaInventario;
    const InvObjeto = {
      id,
      envasadora,
      maxCapacidad,
      minCapacidad,
      porcentajeMin,
      estadoTanque,
      contenidoGlp,
      porcentajeGlp,
      fechaInv,
      horaInv,
    }
    Inventory.push(InvObjeto);
  });
  dispatch(dataInv(Inventory));
};
