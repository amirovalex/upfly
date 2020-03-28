import { SET_CURRENT_USER, FETCH_USER_START, FETCH_USER_SUCCESS,
		 FETCH_USER_FAILURE } from '../constants/constants.js';

const INITIAL_STATE = {
	currentUser:null,
	isFetching:false,
	errorMessage: undefined
}

export const userReducer = (state=INITIAL_STATE,action) => {
	switch(action.type) {
		case FETCH_USER_START: 
			return {
			...state,
			isFetching: true
		}
		case FETCH_USER_SUCCESS: 
			return {
			...state,
			isFetching:false,
			currentUser:action.payload
		}
		case FETCH_USER_FAILURE: 
			return {
			...state,
			isFetching:false,
			errorMessage: action.payload
		}
		case SET_CURRENT_USER:
			return {...state,currentUser:action.payload}
		default:
			return state;
	}
}

export default userReducer;