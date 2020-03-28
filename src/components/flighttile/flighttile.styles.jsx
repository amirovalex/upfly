import styled from 'styled-components';

export const FlightBox = styled.div`
	border-radius:5px;
	background: rgba(0, 0, 0, 0.2);
	cursor: pointer;
	padding-top:20px;
	
	&:hover {
    	background: ${({nohover}) => nohover ? 'rgba(0, 0, 0, 0.2);' : 'rgba(0, 0, 0, 0.5);'}
    	box-shadow: 1px 1px 5px 2px rgba(0,0,0,0.25);
    }
`

export const FlightContainer = styled.div`
	margin-left:auto;
	margin-right:auto;
	height:95%;	
	width:95%;
	display:grid;
	grid-template-columns: .5fr 2fr;
`

export const AirlineLogo = styled.img`
	margin-top:auto;
	margin-bottom:auto;
	width:60%;
`

export const FlightDetailsContainer = styled.div`
	display:flex;
	justify-content:space-between;
	align-items:center;
`

export const FromPart = styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:space-between;
`

export const FlightTimeHeader = styled.h4`
	
`

export const FlightDirection = styled.p`

`

export const FlightLine = styled.ul`
	margin-left:auto;
	margin-right:auto;
    position: relative;
    display: block;
    width: 70%;
    height: .125rem;
    margin: 0;
    padding: 0;
    border-radius: .375rem;
    background-color: black;
    line-height: 0;
    text-align: center;
    list-style-type: disc;
    margin-bottom:20px;
    margin-right:9px;
` 

export const FlightLineContainer = styled.div`
	width:100%;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	z-index:-1;
`
//on mobile devices justify content to start

export const AirplaneSvg = styled.img`
	position:absolute;
	top:-7px;
	right: -1rem;
	width: 15px;
	transform: rotate(152deg);
`

export const FlightTimePeriod = styled.p`
	font-size:.5rem;
`

export const MarkingLine = styled.hr`
	margin:0;
	border-color:rgba(0,0,0,0.3);
	margin-left:auto;
	margin-right:auto;
	width:98%;
`

export const ButtonContainer = styled.div`
	padding-bottom:10px;
	margin-left: auto;
    width: 40%;
    margin-right: 15px;
    display:flex;
    align-items:center;
`

export const PriceTag = styled.p`
	color:white;
	margin-right:10px;
`