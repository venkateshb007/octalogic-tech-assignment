import { createStore } from 'redux';
import combineReducer from './Reducers/combine';

const store = createStore(combineReducer);

export default store;