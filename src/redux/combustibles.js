const GETFUEL = 'metrogas-inv-prueba/src/redux/GET_FUEL';

// action creator

const getFuels = (payload) => ({
  type: GETFUEL,
  data: payload,
});

// reducer

export const fuelReducer = (state = [], action) => {
  switch(action.type) {
    case GETFUEL:
      return action.data;
    default:
      return state
  };
};

// async action

export const getFuelsApi = () => async (dispatch) => {
  const rawDta = await fetch('http://bytecodestech.com:8080/Inventario/precio/all');
  const newDta = await rawDta.json();
  const dataObj = newDta[0];
  const dataArr = [];
  const fuelObj = {
    combustible: dataObj.combustible,
    precio: dataObj.precio,
    fecha: dataObj.fecha,
  }
  dataArr.push(fuelObj);
  dispatch(getFuels(dataArr));
};