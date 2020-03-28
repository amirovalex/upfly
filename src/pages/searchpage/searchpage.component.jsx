import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { SearchPageContainer, SearchSettings, SearchResultsContainer,
		 SearchResult, ResultsField, SettingsField,
		 NoFlightContainer, NoFlightText } from './searchpage.styles.jsx';
import SearchBox from '../../components/searchbox/searchbox.component.jsx';
import SearchBoxMini from '../../components/searchboxmini/searchboxmini.component.jsx';
import FlightTile from '../../components/flighttile/flighttile.component.jsx';
import FlightPreferences from '../../components/flightpreferences/flightpreferences.component.jsx';
import Button from '../../components/button/button.component.jsx';
import { selectSearchboxMinified, selectFlightOffers } from '../../redux/searchbox/searchbox.selectors.js';
import { setIsLoading, addNonStop, addOneStop,
		 addTwoPlus } from '../../redux/searchbox/searchbox.actions.js';

const mapStateToProps = createStructuredSelector({
	searchboxMinified: selectSearchboxMinified,
	flightOffers: selectFlightOffers
})

const mapDispatchToProps = dispatch => ({
	setIsLoading:(bool) => dispatch(setIsLoading(bool)),
	addNonStop:() => dispatch(addNonStop()),
	addOneStop:() => dispatch(addOneStop()),
	addTwoPlus:() => dispatch(addTwoPlus())
})

const SearchPage = ({...props}) => {
	const { flightOffers, searchboxMinified, addNonStop,
			addOneStop, addTwoPlus } = props
	return(
	<SearchPageContainer>
		<SearchBoxMini/>
		{!searchboxMinified &&
			<SearchBox atSearchPage/>}
		<SettingsField>
		</SettingsField>
		{flightOffers ?
		<ResultsField>
			<SearchSettings>
				<Button text="Filter"/>
				<Button text="Sort"/>
			</SearchSettings>
			<FlightPreferences/>
			<SearchResultsContainer flightOffers={flightOffers}>
			{ flightOffers !== null 
				? 
				(
					flightOffers.map((offer,ind) => {
						let flight = {}
						flight.price = offer.price.total
						flight.airlineCodes = offer.validatingAirlineCodes
						offer.itineraries.map((obj,i) =>
								{
								if (i === 0) {
									flight.departFlightTime = obj.duration
									flight.departSegments = obj.segments
									flight.departStops = flight.departSegments.length-1
								}
								if (i === 1) {
									flight.roundtrip = true
									flight.returnFlightTime = obj.duration
									flight.returnSegments = obj.segments
									flight.returnStops = flight.returnSegments.length-1
								}
								return null
								})

						// switch(flight.departStops) {
						// 	case 0:
						// 		return addNonStop()
						// 	case 1:
						// 		return addOneStop()
						// 	case 2:
						// 		return addTwoPlus()
						// 	default:
						// 		return addTwoPlus()
						// 	}

						return (
							<SearchResult key={offer.id}>
								<FlightTile 
								buyOption 
								nohover
								flight={flight}/>
							</SearchResult>
					)
					})
				)
				:
				null
			}
			</SearchResultsContainer>
		</ResultsField>
		:
		<NoFlightContainer>
			<NoFlightText>
				There are no flights on selected route or dates.
			</NoFlightText>
		</NoFlightContainer>
		}
	</SearchPageContainer>
)}

export default connect(mapStateToProps,mapDispatchToProps)(SearchPage);