import React from 'react';
import { MainContainer, PreferenceContainer, PreferenceHeader,
		 PreferenceText,VerticalLine } from './flightpreferences.styles.jsx';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectFlightOffers } from '../../redux/searchbox/searchbox.selectors.js';

const mapStateToProps = createStructuredSelector({
	flightOffers:selectFlightOffers
})

const FlightPreferences = ({...props}) => {
	return(
	<MainContainer>
		<PreferenceContainer side="left">
			<PreferenceText>Best</PreferenceText>
			<PreferenceHeader>${props.flightOffers ? props.flightOffers[0].price.total : null}</PreferenceHeader>
			<PreferenceText>{props.flightOffers ? props.flightOffers[0].itineraries[0].duration.slice(2,props.flightOffers[0].itineraries[0].duration.length) : null}</PreferenceText>
		</PreferenceContainer>
		<VerticalLine></VerticalLine>
		<PreferenceContainer>
			<PreferenceText>Cheapest</PreferenceText>
			<PreferenceHeader>${props.flightOffers ? props.flightOffers[0].price.total : null}</PreferenceHeader>
			<PreferenceText>{props.flightOffers ? props.flightOffers[0].itineraries[0].duration.slice(2,props.flightOffers[0].itineraries[0].duration.length) : null}</PreferenceText>
		</PreferenceContainer>
		<VerticalLine></VerticalLine>
		<PreferenceContainer side ="right">
			<PreferenceText>Fastest</PreferenceText>
			<PreferenceHeader>${props.flightOffers ? props.flightOffers[0].price.total : null}</PreferenceHeader>
			<PreferenceText>{props.flightOffers ? props.flightOffers[0].itineraries[0].duration.slice(2,props.flightOffers[0].itineraries[0].duration.length) : null}</PreferenceText>
		</PreferenceContainer>
	</MainContainer>
	)
}

export default connect(mapStateToProps)(FlightPreferences);