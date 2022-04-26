import { combineReducers, createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import { InvReducer } from './inventario';
import { fuelReducer } from './combustibles';

const rootReducer = combineReducers({
  tanques: InvReducer,
  combustibles: fuelReducer,
});

const store = createStore(rootReducer, applyMiddleware(Thunk));

export default store;
