import styled, { css } from 'styled-components';

const SectionCss = css`
    display:flex;
    justify-content:space-between;	
`

export const PageContainer = styled.div`
	margin-left:auto;
	margin-right:auto;
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
	width:80%;
`

export const SectionHeader = styled.h4`
	padding-left:16px;
`

export const SectionHeaderContainer = styled.div`
	background: rgba(0, 0, 0, 0.5);
	width:100%;
`

export const SectionContainer = styled.div`
	width:100%;
	background: rgba(0,0,0,0.1);
`

export const Section = styled.div`
	${SectionCss}
	cursor:pointer;
	&:hover {
    	background: rgba(0, 0, 0, 0.2);
    }
`

export const SectionText = styled.p`
	margin:0;
	padding:16px;
`

export const SectionArrow = styled.i`
	border: solid black;
	border-width: 0 3px 3px 0;
	display: inline-block;
	padding: 3px;

	transform: rotate(-45deg);
  	-webkit-transform: rotate(-45deg);	
`

export const SectionsDividingLine = styled.hr`
	margin:0;
	width:98%;
	margin-left:auto;
	margin-right:auto;
	border:1px solid rgba(0,0,0,0.5);
`

export const ArrowContainer = styled.p`
	margin-right:16px;
`

export const SectionNoHover = styled.div`
	${SectionCss}
`