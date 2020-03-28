import styled, { css } from 'styled-components';
import { maxDevice } from '../../mediaquerries/sizes.js';


const DateContainerCss = css`
	display:flex;
	justify-content:space-between;
	align-items:center;
	width:40%;
`

export const SearchBoxContainer = styled.div`
	width:100%;
	display:flex;
	flex-flow:column;

	justify-content:space-between;
`

export const SearchBox = styled.div`
	width:100%;
`

export const SearchButtonCircle = styled.div`
	border:1px solid black;
	border-radius:50%;
	display:flex;
	align-items:center;
	justify-content:center;
	background:rgba(0,0,0,0.2);
	width:50px;
	height:50px;

	&:hover {
		box-shadow: 1px 1px 5px 2px rgba(0,0,0,0.25);
	}
`

export const SearchButtonContainer = styled.div`
	display:flex;
	justify-content:flex-end;
	align-items:flex-start;
	width:60px;
	height:60px;
	padding-top:10px;
	padding-right:10px;
	position:absolute;
	right:0px;

	@media only screen and ${maxDevice.mobileM} {
    	justify-content:center;
    	padding-right:0;
  	}
`

export const SearchButton = styled.img`
	width:35px;
	padding:5px;
`

export const DirectionsContainer = styled.div`
	padding-left:10px;
	display:flex;
	flex-direction:column;
	justify-content:start;
	align-items:space-between;
`

export const Directions = styled.p`

`

export const FlightInfo = styled.p`

`

export const DatesContainer = styled.div`
	display:flex;
	justify-content:space-around;
	width:100%;
`

export const FromDateContainer = styled.div`
	${DateContainerCss}
`

export const ToDateContainer = styled.div`
	${DateContainerCss}
`

export const LeftArrowContainer = styled.p`

`

export const LeftArrow = styled.i`
	border: solid black;
	border-width: 0 3px 3px 0;
	display: inline-block;
	padding: 3px;

	transform: rotate(135deg);
 	-webkit-transform: rotate(135deg);
`

export const RightArrowContainer = styled.p`

`

export const RightArrow = styled.i`
	border: solid black;
	border-width: 0 3px 3px 0;
	display: inline-block;
	padding: 3px;
	transform: rotate(-45deg);
  	-webkit-transform: rotate(-45deg);

`

export const SearchSystem = styled.div`
	${({full}) => full ? null : 'border-bottom:1px solid rgba(255, 255, 255, 0.5);'}
	background: rgba(255, 255, 255, 0.2);
	display:flex;
	cursor:pointer;
`