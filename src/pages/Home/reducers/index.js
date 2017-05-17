import * as actions from '../actions/'
const ACTION_HANDLERS = {
	[actions.FETCH_PRODUCT_INIT] : (state, action) => {
		return { 
			...state,
			fetchInit:true,
		};
	},
	[actions.FETCH_PRODUCT_SUCCESS] : (state, action) => {
		return { 
		    ...state,
			fetchSuccess:true,
			data:action.payload
		};
	},
	[actions.FETCH_PRODUCT_FAILED] : (state, action) => {
		return { 
			...state,
			fetchFailed:true,
		};
	},
};

const initialState = {
	fetchInit:false,
	fetchSuccess:false,
	fetchFailed: false,
	data:{}
};
export default function productReducer (state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}