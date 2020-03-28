import styled from 'styled-components';

export const BarContainer = styled.div`
	width: 35px;
	height: 5px;
	background-color: #333;
	margin: 6px 0;
	transition: 0.4s;
	z-index:10;
`

export const MenuButtonContainer = styled.div`
	margin-top:auto;
	margin-bottom:auto;
	margin-right:10px;
	z-index:10;


	div{
	transition: all 0.3s linear;
	position: relative;
	border-radius: 10px;
	transform-origin: 1px;
	}

	div:first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    div:nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(-20px)' : 'translateX(0)'};
    }

    div:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
`