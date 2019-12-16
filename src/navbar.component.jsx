import React from 'react';
import NavMenu from './navmenu.component.jsx';
import NavSearchBox from './navsearchbox.component.jsx';

const NavBar = () => (
	<div className="navbar">
	<NavMenu />
	<NavSearchBox />
	</div>
)

export default NavBar;