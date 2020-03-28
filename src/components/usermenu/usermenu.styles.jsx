import styled from 'styled-components';

export const UsermenuContainer = styled.div`
	width:80%;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	margin-left:auto;
	margin-right:auto;
`

export const UsermenuItem = styled.div`
	border-radius:5px;
	height:60px;
	width:100%;
	display:flex;
	justify-content:center;
	align-items:center;
	margin-top:2px;
	cursor:pointer;
	background: rgba(0, 0, 0, 0.2);

	&:hover {
    	background: rgba(0, 0, 0, 0.5);
    	box-shadow: 1px 1px 5px 2px rgba(0,0,0,0.25);
    }
`