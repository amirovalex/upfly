import { createSelector } from 'reselect';

const selectNavMenu = state => state.navmenu;

export const selectNavMenuSideMenu = createSelector(
	[selectNavMenu],
	(navmenu) => navmenu.sideMenu
)