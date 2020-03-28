import styled from 'styled-components';

export const BarContainer = styled.div`
	margin: 6px 0;
	width: 30px;
	height: 5px;
	background-color: white;
	border-radius: 10px;
`

export const ButtonContainer = styled.div`
	margin-right:5px;
	cursor:pointer;
	height:30px;
	margin-top:5px;

	div:first-child {
		transform:rotate(41deg);
		margin-bottom:-11px;
	}

	div:nth-child(2) {
		transform:rotate(-45deg);
	}
`
