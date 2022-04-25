import { combineReducers, createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import { InvReducer } from './inventario';

const rootReducer = combineReducers({
  tanques: InvReducer,
});

const store = createStore(rootReducer, applyMiddleware(Thunk));

export default store;
