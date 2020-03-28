import styled , { css } from 'styled-components';

const FullSearchBoxCss = css`
	background:rgba(255,255,255,0.2);
	height:300px;
	border-bottom:1px solid rgba(255, 255, 255, 0.5);
`

const NormalizePadding = css `
	width:100%;
	padding-left:10px;
	padding-right:10px;
`

const fullWidth = css`
	width:100%;
`

const normalWidthDate = css`
	width:45%;
`

export const SearchBoxContainer = styled.div`
	width:100%;
	height:100%;
	display:flex;
	flex-flow:column;
	justify-content: space-evenly;
	align-items: center;
	color:white;
	${({atSearchPage}) => atSearchPage ? FullSearchBoxCss : null}
`

export const BigPartContainer = styled.div`
	width:80%;
	margin-left:auto;
	margin-right: auto;
	display:flex;
	align-items:center;
	${({atSearchPage}) => atSearchPage ? NormalizePadding : null}
`
export const CheckboxContainer = styled.div`
	width:90px;
	display:flex;
	justify-content:space-between;
`

export const DateContainer = styled.div`
	${({roundtrip}) => !roundtrip ? fullWidth : normalWidthDate}
`
// ${({roundtrip}) => !roundtrip ? fullWidth : normalWidthDate}
export const DepartReturnContainer = styled.div`
	width:80%;
	margin-left:auto;
	margin-right: auto;
	display:flex;
	justify-content: space-between;
	${({atSearchPage}) => atSearchPage ? NormalizePadding : null}
`

export const ParagraphContainer = styled.p`
	margin-bottom:0px;
`

export const TravellersContainer = styled.div`
	display:flex;
	flex-flow:column;
`

export const SearchFooterContainer = styled.div`
	display:flex;
	width:80%;
	justify-content:space-between;
	align-items:center;
	${({atSearchPage}) => atSearchPage ? NormalizePadding : null}
`

export const MinifiedContainer = styled.div`

`

export const DepartReturnText = styled.p`
	
`

export const FlightDetails = styled.p`

`

export const FlightDateContainer = styled.div`

`

export const ArrowRightContainer = styled.p`
	z-index: -1;
`

export const ArrowRight = styled.i`
	border: solid black;
	border-width: 0 3px 3px 0;
	display: inline-block;
	padding: 3px;

	transform: rotate(45deg);
  	-webkit-transform: rotate(45deg);
`