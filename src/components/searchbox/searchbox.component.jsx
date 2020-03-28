import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postAmadeusFlightSearch } from '../../amadeus/amadeus.utils.js';

import { createStructuredSelector } from 'reselect';
import { toggleRoundtrip, setFlightOffers, setIsLoading } from '../../redux/searchbox/searchbox.actions.js';
import { selectSearchFrom, selectSearchTo, selectRoundtrip,
		 selectFromLocation, selectToLocation, selectDepartureDate,
		 selectReturnDate, selectPassengers, selectIsLoading } from '../../redux/searchbox/searchbox.selectors.js';
import { SearchBoxContainer, BigPartContainer, DateContainer, 
		 DepartReturnContainer, SearchFooterContainer, CheckboxContainer } from './searchbox.styles.jsx';
import SearchBar from '../searchbar/searchbar.component.jsx';
import DateBar from '../datebar/datebar.component.jsx';
import SelectBar from '../selectbar/selectbar.component.jsx';
import CheckBox from '../checkbox/checkbox.component.jsx';
import Button from '../button/button.component.jsx';
import { autocompleteText } from '../autocomplete-text/autocomplete-text.component.jsx';

const SearchBarAutocomplete = autocompleteText(SearchBar);

const mapStateToProps = createStructuredSelector({
	searchFrom: selectSearchFrom,
	searchTo: selectSearchTo,
	roundtrip: selectRoundtrip,
	fromLocation:selectFromLocation,
	toLocation:selectToLocation,
	departureDate:selectDepartureDate,
	returnDate:selectReturnDate,
	passengers:selectPassengers,
	isLoading:selectIsLoading
})

const mapDispatchToProps = dispatch => ({
	toggleRoundtrip:() => dispatch(toggleRoundtrip()),
	setFlightOffers:(arr) => dispatch(setFlightOffers(arr)),
	setIsLoading:(bool) => dispatch(setIsLoading(bool))
})

const SearchBox = ({...props}) => {
	const { fromLocation, toLocation, departureDate, returnDate, passengers, roundtrip, setFlightOffers, setIsLoading, isLoading } = props
	return(
	<SearchBoxContainer {...props}>
		{props.frontpage && <h1 className="header">Search new flight</h1>}
		<BigPartContainer {...props}>
			<CheckboxContainer>
				<CheckBox text="Roundtrip"/>
			</CheckboxContainer>
		</BigPartContainer>
		<BigPartContainer {...props}>
			<SearchBarAutocomplete label="fromorigin" type="text" placeholder="From" inputText="From" value={props.searchFrom}/>			
		</BigPartContainer>
		<BigPartContainer {...props}>
			<SearchBarAutocomplete label="toorigin" type="text" placeholder="To" value={props.searchTo}/>
		</BigPartContainer>
		{
		!props.onSearchPage &&
			<DepartReturnContainer {...props}>
				<DateContainer roundtrip={roundtrip}>
					<DateBar dateValue={departureDate} label="fromorigin" inputText="Depart"/>
				</DateContainer>
				{roundtrip &&
				<DateContainer roundtrip={roundtrip}>
					<DateBar dateValue={returnDate} label="toorigin" inputText="Return"/>
				</DateContainer>
				}
			</DepartReturnContainer>
		}
		<SearchFooterContainer {...props} >
			<SelectBar label="passengers" person/>
			<Button onClick={() => { 
				if (departureDate && fromLocation && toLocation) 
					{
					setIsLoading(true);
					postAmadeusFlightSearch(fromLocation,toLocation,departureDate,toLocation,fromLocation,returnDate,setFlightOffers,passengers,roundtrip,setIsLoading,isLoading)
					props.history.push('/search')}
			}} text='SEARCH'/>
		</SearchFooterContainer>
	</SearchBoxContainer>		
)
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SearchBox));