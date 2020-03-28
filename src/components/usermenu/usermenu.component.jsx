import React from 'react';
import { withRouter } from 'react-router-dom';

import { UsermenuItem, UsermenuContainer } from './usermenu.styles.jsx';
import UserBox from '../userbox/userbox.component.jsx';
import Button from '../button/button.component.jsx';
import { auth } from '../../firebase/firebase.utils';

export const UserMenu = (props) => (
		<UsermenuContainer>
			<UserBox/>
			<UsermenuItem onClick={() => props.history.push('/user/travellerinfo')}>Traveller Info</UsermenuItem>
			<UsermenuItem onClick={() => props.history.push('/user/myflights')}>My flights</UsermenuItem>
			<UsermenuItem onClick={() => props.history.push('/user/accountinfo')}>Account Info</UsermenuItem>
			<Button onClick={() => {props.history.push('/');auth.signOut()}}userpage text="Log Out"/>
		</UsermenuContainer>
)

export default withRouter(UserMenu);