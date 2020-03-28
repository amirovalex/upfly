import React from 'react';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { NavMenuContainer, NavListContainer, BodyStyle } from './navmenu.styles.jsx';
import { connect } from 'react-redux';
import { toggleMenu } from '../../redux/navmenu/navmenu.actions.js';
import { toggleSignInMenu } from '../../redux/signinmenu/signinmenu.actions.js';
import { auth } from '../../firebase/firebase.utils.js';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';
import { selectNavMenuSideMenu } from '../../redux/navmenu/navmenu.selectors.js';

const mapStateToProps = createStructuredSelector({
	sideMenu:selectNavMenuSideMenu,
	user:selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
	toggleMenu: () => dispatch(toggleMenu()),
	toggleSignInMenu: () => dispatch(toggleSignInMenu())
})

const NavMenu = (props) => {
	return(
	<NavMenuContainer {...props}>
		<BodyStyle open={props.sideMenu}/>
		<NavListContainer>
			<div onClick={() => { if (props.user !== null ) {props.history.push('/user');props.toggleMenu()} else {props.toggleSignInMenu();props.toggleMenu()}}}>
			{props.user === null ? 'Sign In' : 'User Profile'}
			</div>
			<div onClick={() => {props.history.push("/"); props.toggleMenu()}}>Search Flight
			</div>
			<div onClick={() => {props.history.push("/"); props.toggleMenu()}}>Best Deals
			</div>
			{	props.user !== null &&
				<div onClick={() => {props.history.push('/');auth.signOut();props.toggleMenu()}}>
					Sign Out
				</div>
			}
		</NavListContainer>
	</NavMenuContainer>
)}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavMenu));