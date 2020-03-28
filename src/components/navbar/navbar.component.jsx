import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavBarContainer,LogoContainer } from './navbar.styles.jsx';
import { toggleMenu } from '../../redux/navmenu/navmenu.actions.js';
import { connect } from 'react-redux';
import MenuButton from '../menubutton/menubutton.component.jsx';
import NavMenu from '../../components/navmenu/navmenu.component.jsx';

const mapDispatchToProps = dispatch => ({
	toggleMenu: () => dispatch(toggleMenu())
})

const NavBar = (props) => (
	<NavBarContainer>
		<LogoContainer onClick={() => props.history.push("/")} alt="logo" src={require("./logo_transparent.png")}/>
		<MenuButton />
		<NavMenu />
	</NavBarContainer>
)

export default withRouter(connect(null,mapDispatchToProps)(NavBar));