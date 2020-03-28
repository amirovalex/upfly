import React from 'react';
import { createStructuredSelector } from 'reselect';
import { BarContainer, MenuButtonContainer } from './menubutton.styles.jsx';
import { toggleMenu } from '../../redux/navmenu/navmenu.actions.js';
import { connect } from 'react-redux';
import { selectNavMenuSideMenu } from '../../redux/navmenu/navmenu.selectors.js';

const mapStateToProps = createStructuredSelector({
	sidemenu:selectNavMenuSideMenu
})

const mapDispatchToProps = dispatch => ({
	toggleMenu: () => dispatch(toggleMenu())
})

export const MenuButton = (props) => {
	return (

	<MenuButtonContainer
		open={props.sidemenu} 
		onClick={() => props.toggleMenu()}>
	  <BarContainer/>
	  <BarContainer/>
	  <BarContainer/>
	</MenuButtonContainer>
)}

export default connect(mapStateToProps,mapDispatchToProps)(MenuButton);