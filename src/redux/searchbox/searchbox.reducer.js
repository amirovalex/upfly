import { TOGGLE_SEARCHBOX_STYLE, UPDATE_SEARCHFROM_FIELD, UPDATE_SEARCHTO_FIELD,
		 SET_AUTOCOMPLETE_FROM_LIST, SET_AUTOCOMPLETE_TO_LIST, SET_TO_LOCATION,
		 SET_FROM_LOCATION, TOGGLE_ROUNDTRIP, SET_PASSENGERS_QUANTITY,
		 SET_DEPARTURE_DATE, SET_RETURN_DATE, SET_FLIGHT_OFFERS,
		 SET_IS_LOADING, ADD_ONE_STOP, ADD_NON_STOP,
		 ADD_TWO_PLUS, RESET_FLIGHT } from '../constants/constants.js';

const INITIAL_STATE = {
	searchboxMinified:true,
	searchFrom:'',
	searchTo:'',
	roundtrip:false,
	autocompleteFrom:[],
	autocompleteTo:[],
	fromLocation:null,
	toLocation:null,
	departureDate:'',
	returnDate:'',
	passengers:1,
	flightOffers:null,
	isLoading:false,
	flightStops:{
		nonStop:{
				 flights:0,
				 filter:true
				},
		oneStop:{
				 flights:0,
				 filter:true
				},
		twoPlus:{
				 flights:0,
				 filter:true
				}
	}
}

export const searchboxReducer = (state=INITIAL_STATE,action) => {
	switch(action.type) {
		case TOGGLE_SEARCHBOX_STYLE:
			return {...state,searchboxMinified:!state.searchboxMinified }
		case UPDATE_SEARCHFROM_FIELD:
			return {...state,searchFrom:action.payload}
		case UPDATE_SEARCHTO_FIELD:
			return {...state,searchTo:action.payload}
		case SET_AUTOCOMPLETE_FROM_LIST:
			return {...state,autocompleteFrom:action.payload}
		case SET_AUTOCOMPLETE_TO_LIST:
			return {...state,autocompleteTo:action.payload}
		case SET_TO_LOCATION:
			return {...state,toLocation:action.payload}
		case SET_FROM_LOCATION:
			return {...state,fromLocation:action.payload}
		case TOGGLE_ROUNDTRIP:
			return {...state,roundtrip:!state.roundtrip}
		case SET_RETURN_DATE:
			return {...state,returnDate:action.payload}
		case SET_DEPARTURE_DATE:
			return {...state,departureDate:action.payload}
		case SET_PASSENGERS_QUANTITY:
			return {...state,passengers:action.payload}
		case SET_FLIGHT_OFFERS:
			return {...state,flightOffers:action.payload}
		case SET_IS_LOADING:
			return {...state,isLoading:action.payload}
		case ADD_NON_STOP:
			return {...state,flightStops:{...state.flightStops,nonStop:{...state.flightStops.nonStop,flights:state.flightStops.nonStop.flights+1}}}
		case ADD_ONE_STOP:
			return {...state,flightStops:{...state.flightStops,oneStop:{...state.flightStops.oneStop,flights:state.flightStops.oneStop.flights+1}}}
		case ADD_TWO_PLUS:
			return {...state,flightStops:{...state.flightStops,twoPlus:{...state.flightStops.twoPlus,flights:state.flightStops.twoPlus.flights+1}}}
		case RESET_FLIGHT:
			return INITIAL_STATE
		default:
			return state
	}
}

export default searchboxReducer;