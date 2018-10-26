import { createStore } from 'redux';
import reducers from '../reducers/index';
import DevTools from '../tools/DevTools';

const store = createStore(reducers, DevTools.instrument());

export default store;