import { SET_CURRENT_USER, FETCH_USER_START, FETCH_USER_SUCCESS,
		 FETCH_USER_FAILURE } from '../constants/constants.js';

import { createUserProfileDocument } from '../../firebase/firebase.utils.js';

export const setCurrentUser = (user) => ({
	type:SET_CURRENT_USER,
	payload:user
})

export const fetchUserStart = () => ({
	type:FETCH_USER_START
})

export const fetchUserSuccess = (user) => ({
	type:FETCH_USER_SUCCESS,
	payload:user
})

export const fetchUserFailure = errorMessage => ({
	type:FETCH_USER_FAILURE,
	payload:errorMessage
})

export const fetchUserStartAsync = (userAuth) => {
	return dispatch => {
		const userRef = createUserProfileDocument(userAuth)
		dispatch(fetchUserStart())

        userRef.get().then(snapShot => {
          dispatch(fetchUserSuccess({
            id: snapShot.id,
            ...snapShot.data()}))
        }).catch(error => dispatch(fetchUserFailure(error.message)))
	}
}