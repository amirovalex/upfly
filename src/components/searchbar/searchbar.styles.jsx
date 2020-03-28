import styled from 'styled-components';

export const SearchBarInput = styled.input`
    padding-left:5px;
	background: rgba(0, 0, 0, 0.2);
	border: none;
    outline: none;
    border-radius: 5px 5px 0px 0px;
    height:40px;
    width:100%;

    &::placeholder {
    	color:rgba(0, 0, 0, 0.7);
    }
        
    &:focus {
    	background: rgba(0, 0, 0, 0.5);
        box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.25);
    }

    &:hover {
	   box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.25);
	}
`

export const SearchBarContainer = styled.div`
    width:100%;
    position:relative;
    display:inline-block; 
`