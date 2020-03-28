import { createSelector } from 'reselect';

const selectSignInMenu = state => state.signinmenu;

export const selectSignInMenuHidden = createSelector(
	[selectSignInMenu],
	(signinmenu) => signinmenu.hidden
)

export const selectSignInMenuIsRegister = createSelector(
	[selectSignInMenu],
	(signinmenu) => signinmenu.isRegister
)

export const selectSignInMenuIsSignIn = createSelector(
	[selectSignInMenu],
	(signinmenu) => signinmenu.isSignIn
)

export const selectSignInMenuDisplayName = createSelector(
	[selectSignInMenu],
	(signinmenu) => signinmenu.displayname
)

export const selectSignInMenuEmail = createSelector(
	[selectSignInMenu],
	(signinmenu) => signinmenu.email
)

export const selectSignInMenuPassword = createSelector(
	[selectSignInMenu],
	(signinmenu) => signinmenu.password
)