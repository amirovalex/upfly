import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import searchboxReducer from './searchbox/searchbox.reducer.js';
import navMenuReducer from './navmenu/navmenu.reducer.js';
import signinMenuReducer from './signinmenu/signinmenu.reducer.js';
import userReducer from './user/user.reducer.js';

const persistConfig = {
	key:'root',
	storage,
	whitelist:['user']
}

const rootReducer = combineReducers({
	navmenu:navMenuReducer,
	signinmenu:signinMenuReducer,
	user:userReducer,
	searchbox:searchboxReducer
})

export default persistReducer(persistConfig,rootReducer);