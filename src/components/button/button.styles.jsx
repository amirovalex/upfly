import styled, { css } from 'styled-components';
import { minDevice } from '../../mediaquerries/sizes.js';

const userpageButton = css`
    margin-top:50px;
`

const signinButton = css`
    margin-top:20px;
    width:100%;
    color:white;

    @media only screen and ${minDevice.tablet} {
        width:50%;
    }
`

const googleButton = css`
    background: #4285f4;
    margin-top:20px;
    width:100%;
    color:white;

    &:hover {
        background: rgba(14, 59, 181, 0.7);
    }
`

const buyButton = css`
    margin-left:auto;
    width:100%;
`

const cancelButton = css`
    margin-top:15px;
    padding:3px;
    color:white;
`
const saveButton = css`
    margin-top:15px;
`
const getButtonStyles = props => {
    if (props.userpage) {
        return userpageButton
    }

    if (props.signin) {
        return signinButton
    }

    if (props.google) {
        return googleButton
    }

    if (props.buy) {
        return buyButton
    }

    if (props.cancel) {
        return cancelButton
    }
    if (props.save) {
        return saveButton
    }
    return
}   

export const ButtonContainer = styled.div`
	background: rgba(0, 0, 0, 0.2);
	border: none;
    outline: none;
    height:40px;
    width:150px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    cursor:pointer;

    &:hover {
    	background: rgba(0, 0, 0, 0.5);
    	box-shadow: 1px 1px 5px 2px rgba(0,0,0,0.25);
    }

    ${getButtonStyles}
`