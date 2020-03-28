import React, { useEffect } from 'react';
import { SpinnerContainer, SpinnerOverlay } from './withspinner.styles.jsx';
import Button from '../button/button.component.jsx';
import { withRouter } from 'react-router-dom'
const WithSpinner = WrappedComponent => ({ isLoading, setIsLoading, ...otherProps}) => {

const SpinnerOverlayComponent = (props) => {
	useEffect(() => {
	  return () => {
	  	if (isLoading) {
	  	console.log('toggle3')
	    setIsLoading(false)
		}
	  }
	}, []);

	return(
		<SpinnerOverlay>
			<SpinnerContainer/>
			<Button onClick={() => {
				setIsLoading(false)
				props.history.push('/')}} cancel text="CANCEL"/>
		</SpinnerOverlay>
	)
}

const SpinnerOverlayWithRouter = withRouter(SpinnerOverlayComponent)

	return isLoading ? (
		<SpinnerOverlayWithRouter/>
	) : (
		<WrappedComponent {...otherProps}/>
	)
}

export default WithSpinner;