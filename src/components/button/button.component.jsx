import React from 'react';
import { ButtonContainer } from './button.styles.jsx';


export const Button = ({text,label,...props}) => {
	return(
	<ButtonContainer {...props}>
		<p>{text}</p>
	</ButtonContainer>
)}

export default Button;