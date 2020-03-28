import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

export const UserboxContainer = styled.div`
	padding-top:50px;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
`

export const UserLogo = styled.div`
	height:200px;
	width:200px;
	background-color: #bbb;
 	border-radius:50%;
`

export const UserText = styled.h1`
	text-align:center;
`

export const BodyStyle = createGlobalStyle`
	html,body {
		height:100%;
	}
`