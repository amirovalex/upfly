import React from 'react';
import { ButtonContainer, BarContainer } from './closebutton.styles.jsx';
import { connect } from 'react-redux';
import { toggleSignInMenu } from '../../redux/signinmenu/signinmenu.actions.js';

const mapDispatchToProps = dispatch => ({
	toggleSignInMenu:() => dispatch(toggleSignInMenu())
})
export const CloseButton = (props) => (
	<ButtonContainer onClick={() => props.toggleSignInMenu()}>
		<BarContainer/>
		<BarContainer/>
	</ButtonContainer>
)

export default connect(null,mapDispatchToProps)(CloseButton);