import { createStore } from 'redux';
import { rootReducer } from '../Reducers/index'; // Combine reducers

const store = createStore(rootReducer);

export default store;
