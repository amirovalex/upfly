import React from 'react';
import { DatebarContainer } from './datebar.styles.jsx';
import { connect } from 'react-redux';
import { setDepartureDate, setReturnDate } from '../../redux/searchbox/searchbox.actions.js';

const mapDispatchToProps = dispatch => ({
	setDepartureDate:(date) => dispatch(setDepartureDate(date)),
	setReturnDate:(date) => dispatch(setReturnDate(date))
})

export const DateBar = ({dateValue,...props}) => {
	console.log('datebar',dateValue)
	const setValueOnLabel = (event,label2) => 

			{	const { value } = event.target
				switch (label2) {
					case "fromorigin":
						props.setDepartureDate(value)
						return
					case "toorigin":
						props.setReturnDate(value)
						return
					default:
						return
				}
			}
	  return (
      <DatebarContainer value={dateValue} onChange={(event) => setValueOnLabel(event, props.label)}type="date"/>
)
}

export default connect(null,mapDispatchToProps)(DateBar);