import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CloseButton from '../closebutton/closebutton.component.jsx';
import { SigninContainer, BodyStyle, SigninformContainer,
		 TextContainer, PageContainer, ButtonsContainer, Header, HeaderContainer } from './signin.styles.jsx';
import Button from '../../components/button/button.component.jsx';
import SearchBar from '../searchbar/searchbar.component.jsx';

import { toggleSignInMenu, toggleSignInRegister, setRegisterSignInDefault } from '../../redux/signinmenu/signinmenu.actions.js';
import { selectSignInMenuHidden , selectSignInMenuIsRegister, selectSignInMenuIsSignIn,
		selectSignInMenuDisplayName, selectSignInMenuEmail, selectSignInMenuPassword } from '../../redux/signinmenu/signinmenu.selectors.js';
import { signInWithGoogle, auth, createUserProfileDocument } from '../../firebase/firebase.utils.js';

const mapStateToProps = createStructuredSelector({
	hidden:selectSignInMenuHidden,
	isRegister:selectSignInMenuIsRegister,
	isSignIn:selectSignInMenuIsSignIn,
	displayName:selectSignInMenuDisplayName,
	email:selectSignInMenuEmail,
	password:selectSignInMenuPassword
})

const mapDispatchToProps = dispatch => ({
	toggleSignInMenu:() => dispatch(toggleSignInMenu()),
	toggleSignInRegister:() => dispatch(toggleSignInRegister()),
	setRegisterSignInDefault:() => dispatch(setRegisterSignInDefault())
})

const SignIn = (props) => {

	const handleGoogleSignIn = async event => {
		const { toggleSignInMenu } = props;
		try {
			await signInWithGoogle()
			await toggleSignInMenu()
		}
		catch(error) {
			console.log(error)
		}
	}

	const handleSubmitRegister = async event => {
		const { displayName, email, password, setRegisterSignInDefault, toggleSignInMenu } = props

		try {
			console.log(displayName)
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password);
			await createUserProfileDocument(user,{ displayName })
			setRegisterSignInDefault()
			toggleSignInMenu()

		} catch(error) {
			console.error(error)
		}
	}

	const handleSubmitSignin = async event => {
		const { email, password, setRegisterSignInDefault, toggleSignInMenu } = props

		try {
			await auth.signInWithEmailAndPassword(email,password);
			setRegisterSignInDefault();
			toggleSignInMenu();
		} catch (error) {
			console.log(error)
		}
	}


	return (
	<PageContainer open={props.hidden}>
	<BodyStyle open={props.hidden}/>
		<SigninContainer isRegister={props.isRegister}>
				<HeaderContainer>
					<Header>{props.isRegister ? 'Register' : 'Sign In'}</Header>
					<CloseButton onClick={() => console.log('exit')}/>
				</HeaderContainer>
			<SigninformContainer>
				{props.isRegister ? 
					<div>
						<TextContainer>Full Name</TextContainer>
						<SearchBar value={props.displayName} label="displayname" type="text" onChange={(event) => props.updateDisplaynameField(event.target.value)}/>
					</div> : null }
				<TextContainer>Email</TextContainer>
				<SearchBar label="email" value={props.email} type="email"/>
				<TextContainer>Password</TextContainer>
				<SearchBar label="password" value={props.password} type="password"/>
				<ButtonsContainer>
					<Button onClick={() => {props.isSignIn ? handleSubmitSignin() : props.toggleSignInRegister()}}signin text="Sign In"/>
					<Button onClick={() => {props.isRegister ? handleSubmitRegister() : props.toggleSignInRegister()} }signin text="Register"/>
				</ButtonsContainer>
				<Button onClick={() => handleGoogleSignIn()}google text="Sign In With Google"/>
			</SigninformContainer>
		</SigninContainer>
	</PageContainer>
	)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SignIn));