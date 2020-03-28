import styled from 'styled-components';

export const DatebarContainer = styled.input`
	background: rgba(0, 0, 0, 0.2);
	border: none;
    outline: none;
    height:40px;
    width:100%;
    padding-left:5px;
    border-radius: 5px 5px 0px 0px;

    &:focus {
    	background: rgba(0, 0, 0, 0.5);
        box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.25);
    }

    &:hover {
	   box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.25);
	}
`