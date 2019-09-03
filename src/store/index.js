import { createStore } from 'redux';
import initialState from './initialState.json';
import appReducer from './reducers';

export default createStore(appReducer, initialState);