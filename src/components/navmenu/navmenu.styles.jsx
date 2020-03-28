import styled, {css} from 'styled-components';
import { createGlobalStyle } from "styled-components";
import { maxDevice } from '../../mediaquerries/sizes.js';

const MenuStyles = css`
	background-color:rgba(255,255,255,0.95);
	height: 100vh;
	position: absolute;
	top: 0;
	right:0;
	transition: transform 0.3s ease-in-out;
	padding: 2rem;
	z-index:4;
	width:30%;

	@media only screen and ${maxDevice.tablet} {
    	width:100%
  	}
`

const MenuOpenStyles = css`
	${MenuStyles}
	transform: translateX(0)
`

const getMenuStyles = props => {
	if (props.sideMenu) {
		return MenuOpenStyles;
	}
	return null
}

export const NavMenuContainer = styled.div`
	${MenuStyles}
	transform: translateX(+100%)
	${getMenuStyles}
`

export const NavListContainer = styled.div`
	display: flex;
    flex-direction: column;
	align-items:center;
	height:100%;
	justify-content:space-around;

	div{
		width:100%;
		font-size:20px;
		cursor:pointer;
		display:flex;
		justify-content:center;
		align-items:center;

		&:hover {
			color:rgba(0,0,0,0.5);
		}
	}
`

export const BodyStyle = createGlobalStyle`
	@media only screen and ${maxDevice.tablet} {
		body {
	    	overflow:${({open}) => open ? 'hidden' : 'visible'};
	    }
	}
`