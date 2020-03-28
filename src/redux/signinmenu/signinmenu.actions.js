import { TOGGLE_SIGNIN_MENU, TOGGLE_SIGNIN_REGISTER, UPDATE_DISPLAYNAME_FIELD,
		 UPDATE_EMAIL_FIELD, UPDATE_PASSWORD_FIELD, SET_REGISTER_SIGNIN_DEFAULT } from '../constants/constants.js';

export const toggleSignInMenu = () => ({
	type:TOGGLE_SIGNIN_MENU
})

export const toggleSignInRegister = () => ({
	type:TOGGLE_SIGNIN_REGISTER
})

export const updateDisplaynameField = (text) => ({
	type:UPDATE_DISPLAYNAME_FIELD,
	payload:text
})

export const updateEmailField = (text) => ({
	type:UPDATE_EMAIL_FIELD,
	payload:text
})

export const updatePasswordField = (text) => ({
	type:UPDATE_PASSWORD_FIELD,
	payload:text
})

export const setRegisterSignInDefault = () => ({
	type:SET_REGISTER_SIGNIN_DEFAULT
})
