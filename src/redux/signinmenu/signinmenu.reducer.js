import { TOGGLE_SIGNIN_MENU, TOGGLE_SIGNIN_REGISTER, UPDATE_DISPLAYNAME_FIELD,
		 UPDATE_EMAIL_FIELD, UPDATE_PASSWORD_FIELD, SET_REGISTER_SIGNIN_DEFAULT } from '../constants/constants.js';

const INITIAL_STATE = {
	hidden:true,
	isRegister:false,
	isSignIn:true,
	displayname:'',
	email:'',
	password:''
}

const REGISTER_SIGNIN_DEFAULT = {
	displayname:'',
	email:'',
	password:''
}

export const signinMenuReducer = (state=INITIAL_STATE,action) => {
	switch(action.type) {
		case TOGGLE_SIGNIN_MENU:
			return {...state,hidden:!state.hidden,
							isRegister:false,
							isSignIn:true
					}
		case TOGGLE_SIGNIN_REGISTER:
			return {...state,isRegister:!state.isRegister,
							 isSignIn:!state.isSignIn}
		case UPDATE_DISPLAYNAME_FIELD:
			return {...state,displayname:action.payload}
		case UPDATE_EMAIL_FIELD:
			return {...state,email:action.payload}
		case UPDATE_PASSWORD_FIELD:
			return  {...state,password:action.payload}
		case SET_REGISTER_SIGNIN_DEFAULT:
			return {...state,...REGISTER_SIGNIN_DEFAULT}
		default:
			return state;
	}
}

export default signinMenuReducer;