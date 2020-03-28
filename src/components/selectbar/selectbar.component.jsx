import React from 'react';
import { SelectbarContainer } from './selectbar.styles.jsx';
import { connect } from 'react-redux';
import { setPassengerQuantity } from '../../redux/searchbox/searchbox.actions.js';

const mapDispatchToProps = dispatch => ({
	setPassengerQuantity:(quantity) => dispatch(setPassengerQuantity(quantity))
})

export const SelectBar = ({label,setPassengerQuantity,props}) => {

	const setValueOnLabel = (event,label) => {
		const { value } = event.target
		switch (label) {
			case "passengers":
				setPassengerQuantity(value);
				return
			default:
				return
		}
	}

	return(
		  <SelectbarContainer onChange={(event) => setValueOnLabel(event,label)} useFor={label}>
		    <option value="1">1</option>
		    <option value="2">2</option>
		    <option value="3">3</option>
		    <option value="4+">4+</option>
		  </SelectbarContainer>
)}

export default connect(null,mapDispatchToProps)(SelectBar);