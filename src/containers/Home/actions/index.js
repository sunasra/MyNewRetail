
export const FETCH_PRODUCT_INIT = 'FETCH_PRODUCT_INIT';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILED = 'FETCH_PRODUCT_FAILED';

export function setProduct (response) {
	return {
		type : FETCH_PRODUCT_SUCCESS,
		payload : response
	};
}

export function fetchInit () {
	return {
		type : FETCH_PRODUCT_INIT,
	};
}
export function fetchFailed () {
	return {
		type : FETCH_PRODUCT_FAILED,
	};
}

export const getData = () => {
	return (dispatch, getState) => {
		dispatch(fetchInit());
		return fetch('/get-data')
        .then(response => response.json())
        .then(json => dispatch(setProduct(json)))
        .catch((error) =>{
	        dispatch(fetchFailed());
		});
	};
};