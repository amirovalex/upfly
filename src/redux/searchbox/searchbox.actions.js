import { TOGGLE_SEARCHBOX_STYLE, UPDATE_SEARCHFROM_FIELD, UPDATE_SEARCHTO_FIELD,
		 SET_AUTOCOMPLETE_FROM_LIST, SET_AUTOCOMPLETE_TO_LIST, SET_FROM_LOCATION,
		 SET_TO_LOCATION, TOGGLE_ROUNDTRIP, SET_PASSENGERS_QUANTITY,
		 SET_DEPARTURE_DATE, SET_RETURN_DATE, SET_FLIGHT_OFFERS,
		 SET_IS_LOADING, ADD_ONE_STOP, ADD_NON_STOP,
		 ADD_TWO_PLUS, RESET_FLIGHT } from '../constants/constants.js';

export const toggleSearchBoxStyle = () => ({
	type:TOGGLE_SEARCHBOX_STYLE
})

export const updateSearchFromField = (text) => ({
	type:UPDATE_SEARCHFROM_FIELD,
	payload:text
})

export const updateSearchToField = (text) => ({
	type:UPDATE_SEARCHTO_FIELD,
	payload:text
})

export const setAutocompleteFromList = (list) => ({
	type:SET_AUTOCOMPLETE_FROM_LIST,
	payload:list
})

export const setAutocompleteToList = (list) => ({
	type:SET_AUTOCOMPLETE_TO_LIST,
	payload:list
})

export const setFromLocation = (obj) => ({
	type:SET_FROM_LOCATION,
	payload:obj
})

export const setToLocation = (obj) => ({
	type:SET_TO_LOCATION,
	payload:obj
})

export const toggleRoundtrip = () => ({
	type:TOGGLE_ROUNDTRIP
})

export const setPassengerQuantity = (quantity) => ({
	type:SET_PASSENGERS_QUANTITY,
	payload:quantity
})

export const setDepartureDate = (date) => ({
	type:SET_DEPARTURE_DATE,
	payload:date
})

export const setReturnDate = (date) => ({
	type:SET_RETURN_DATE,
	payload:date
})

export const setFlightOffers = (arr) => ({
	type:SET_FLIGHT_OFFERS,
	payload:arr
})

export const setIsLoading = (bool) => ({
	type:SET_IS_LOADING,
	payload:bool
})	

export const addNonStop = () => ({
	type:ADD_NON_STOP
})

export const addOneStop = () => ({
	type:ADD_ONE_STOP
})

export const addTwoPlus = () => ({
	type:ADD_TWO_PLUS
})

export const resetFlight = () => ({
	type:RESET_FLIGHT
})