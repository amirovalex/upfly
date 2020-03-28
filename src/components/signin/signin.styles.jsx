import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { minDevice } from '../../mediaquerries/sizes.js';

export const BodyStyle = createGlobalStyle`
	body{
		overflow:${({open}) => open ? 'visible' : 'hidden'}
	}
`

export const PageContainer = styled.div`
	z-index:1;
	height:100%;
	width:100%;
	display:flex;
	justify-content:center;
	align-items:center;
	position:fixed;
	background-color:rgba(0,0,0,0.8);
	transform: ${({open}) => open ? 'translateX(+100%)' : 'translateX(0)'};
	opacity:${({open}) => open ? '0' : '1'};
`

export const SigninContainer = styled.div`
	background-color:rgba(255,255,255,0.5);
	width:80%;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	margin-top:60px;
`

export const SigninformContainer = styled.div`
	width:80%;
	padding-bottom:20px;
`

export const TextContainer = styled.p`
	color:white;
`

export const Header = styled.h2`
	color:white;
	text-align:center;
`

export const HeaderContainer = styled.div`
	display:grid;
	grid-template-columns:1fr 1fr 1fr;
	grid-template-rows:50px;
	width:100%;
	height:100%;
	padding-top:20px;

	h2 {
		grid-column:2/3
	}

	div{
		justify-self:end;
	}
`

export const ButtonsContainer = styled.div`
	display:grid
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	grid-column-gap:10px;

	@media only screen and ${minDevice.tablet} {
    	div:first-child {
			justify-self:end;
		}

		div:nth-child(2) {
			justify-self:start;
		}
  	}
`