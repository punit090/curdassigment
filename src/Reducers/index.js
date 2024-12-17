import { combineReducers } from 'redux';
import { itemReducer } from '../Reducers/ItemReducer';

export const rootReducer = combineReducers({
    items: itemReducer,
});
