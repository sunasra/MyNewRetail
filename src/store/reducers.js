import { combineReducers } from 'redux';
import productReducer from '../pages/Home/reducers'

export const makeRootReducer = combineReducers({
	productData:productReducer,
});

export default makeRootReducer;
