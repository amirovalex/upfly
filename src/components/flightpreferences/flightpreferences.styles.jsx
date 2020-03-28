import styled, { css } from 'styled-components';

const leftSideCss = css`
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
`

const rightSideCss = css`
	border-top-right-radius:5px;
	border-bottom-right-radius:5px;
`

export const MainContainer = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	border-radius:5px;
	background:rgba(0,0,0,0.2);
	width:90%;
	margin-left:auto;
	margin-right:auto;
	margin-bottom:20px;
`

export const VerticalLine = styled.div`
	border-left:1px solid black;
	height:96.6px;
`

export const PreferenceContainer = styled.div`
	width:100%;
	text-align:center;
	cursor:pointer;
	overflow:hidden;
	height:96.6px;

	&:hover {
		${({side}) => {if( side === "left" ) { return leftSideCss } 
		else if ( side === "right" ) { return rightSideCss } return }}
		background:rgba(0,0,0,0.3);
	}
`

export const PreferenceHeader = styled.h3`
	
`

export const PreferenceText = styled.p`
	font-size:0.6rem;
`