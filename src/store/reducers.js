import { combineReducers } from 'redux';
import productReducer from '../containers/Home/reducers'

export const makeRootReducer = combineReducers({
	productData:productReducer,
});

export default makeRootReducer;
