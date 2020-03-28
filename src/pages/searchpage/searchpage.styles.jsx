import styled, { css } from 'styled-components';

export const SearchPageContainer = styled.div`
	padding-top:60px;
	display:flex;
	flex-flow:column;
	height:100%;
`

export const searchResultsPadding = css`
	padding:10px;
`

export const SearchSettings = styled.div`
	padding: 20px 0;
	display:flex;
	justify-content:space-evenly;
`

export const SearchResultsContainer = styled.div`
	border-radius:5px;
	display:grid;
	grid-template-rows: 1fr;
	grid-row-gap:15px;
	width:calc(80% + 10px);
	margin-left:auto;
	margin-right:auto;
	background: rgba(255,255,255,0.1);
	${({flightOffers}) => flightOffers ? searchResultsPadding : null}	
	margin-bottom:20px;
`

export const SearchResult = styled.div`
	
`

export const ResultsField = styled.div`

`

export const SettingsField = styled.div`

`

export const NoFlightContainer = styled.div`
	display:flex;
	align-items:center;
	justify-content:center;
	height:100%;
`

export const NoFlightText = styled.p`
	color:white;
`