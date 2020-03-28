import styled from 'styled-components';

export const CheckboxContainer = styled.div`
    display:flex;
    align-items:center;
`

export const Checkbox = styled.input`
	background: rgba(0, 0, 0, 0.2);
	border: none;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 20px;
    height: 20px;
    margin:0;
    border-radius:5px;
    margin-right:5px;

    &:checked {
    background: rgba(0, 0, 0, 0.7);
    }

    &:hover {
	box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.25);
	}
`