import { TOGGLE_MENU } from '../constants/constants.js';

const INITIAL_STATE = {
	sideMenu:false
}

export const navMenuReducer = (state=INITIAL_STATE,action) => {
	switch(action.type) {
		case TOGGLE_MENU:
			return {...state,sideMenu:!state.sideMenu}
		default:
			return state;
	}
}

export default navMenuReducer;