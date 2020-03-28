import React from 'react';
import { Checkbox, CheckboxContainer } from './checkbox.styles.jsx';
import { connect } from 'react-redux';
import { toggleRoundtrip } from '../../redux/searchbox/searchbox.actions.js';
import { createStructuredSelector } from 'reselect';
import { selectRoundtrip } from '../../redux/searchbox/searchbox.selectors.js';

const mapStateToProps = createStructuredSelector({
	roundtrip: selectRoundtrip
})


const mapDispatchToProps = dispatch => ({
	toggleRoundtrip:() => dispatch(toggleRoundtrip())
})

export const CheckBox = ({...props}) => (
	<CheckboxContainer>
		<Checkbox defaultChecked={props.roundtrip} onClick={() => {if (props.text ==="Roundtrip") {props.toggleRoundtrip()} return}}type="checkbox"/>{props.text}
	</CheckboxContainer>
)

export default connect(mapStateToProps,mapDispatchToProps)(CheckBox);