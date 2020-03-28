import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors.js';
import { UserboxContainer, UserLogo, UserText, BodyStyle } from './userbox.styles.jsx';

export const UserBox = ({currentUser}) => (
	<UserboxContainer>
		<BodyStyle/>
		<UserLogo>
			<img alt="logo" src={require("./profile.svg")} width="100%"/>
		</UserLogo>
		<UserText>
		{currentUser.displayName}
		</UserText>
	</UserboxContainer>
)

const mapStateToProps = createStructuredSelector({
	currentUser:selectCurrentUser
})

export default connect(mapStateToProps)(UserBox);