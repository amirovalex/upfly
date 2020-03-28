import styled from 'styled-components';

export const SelectbarContainer = styled.select`
	background: rgba(0, 0, 0, 0.2);
	border: none;
    outline: none;
    height:40px;
    width:${({useFor}) => useFor === "passengers" ? '20%' : '100%' }

    &:focus {
    	background: rgba(0, 0, 0, 0.5);
        box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.25);
    }
    
    &:hover {
	   box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.25);
	}
`