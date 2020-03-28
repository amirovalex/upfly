import styled , { css } from 'styled-components';

const flexCss = css`
	display:flex;
	flex-wrap:nowrap;
	justify-content:space-between;
`

export const InfoContainer = styled.div`
	margin-left:auto;
	margin-right:auto;
	width:80%;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	padding-bottom:50px;
`

export const InputTile = styled.div`
	width:100%;
	${({flex}) => flex ? flexCss : null}

`

export const PartTile = styled.div`
	width:40%;
`

export const Title = styled.h6`

`