import React from 'react';
import { Route } from 'react-router-dom'; 
import { UserpageContainer } from './userpage.styles.jsx';
import UserMenu from '../../components/usermenu/usermenu.component.jsx';
import SettingsMenu from '../../components/settingsmenu/settingsmenu.component.jsx';

export const UserPage = (props) => {
	return(
	<UserpageContainer>
		<Route exact path={`${props.match.path}`} component={UserMenu} />
		<Route path={`${props.match.path}/:settingsId`} component={SettingsMenu} />
	</UserpageContainer>
)}

export default UserPage;