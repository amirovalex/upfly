import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SettingsContainer } from './settingsmenu.styles.jsx';
import TravellerInfoPage from '../../pages/traveller-info/travellerinfo.component.jsx';
import AccountInfoPage from '../../pages/account-info/accountinfo.component.jsx';
import MyFlights from '../../pages/myflights/myflights.component.jsx';

const SettingsMenu = (props) => (
	<SettingsContainer>
		<Switch>
			<Route path={`/user/travellerinfo`} component={TravellerInfoPage} />
			<Route path={`/user/myflights`} component={MyFlights} />
			<Route path={`/user/accountinfo`} component={AccountInfoPage} />
		</Switch>
	</SettingsContainer>
)

export default SettingsMenu;