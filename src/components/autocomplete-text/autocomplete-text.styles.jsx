import styled from 'styled-components';

export const AutocompleteContainer = styled.div`
	width:100%;
	border-radius: 5px 5px 0px 0px;
`

export const UnorderedList = styled.ul`
	position:absolute;
	background-color:rgba(255,255,255,0.85);
	width:80%;
	list-style-type: none;
	text-align: left;
	padding:0;
	margin:0;
	color:black;
	z-index:2;
`

export const ListElement = styled.li`
	display:flex;
	align-items:center;
	cursor:pointer;
	padding:10px 5px;
	&:hover {
		background:rgba(0,0,0,0.1);
		text-decoration: underline;
	}
`

export const LocationImage = styled.img`
	width:40px;
	padding-right:10px;
`