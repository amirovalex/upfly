import { createSelector } from 'reselect';

const selectSearchbox = state => state.searchbox;

export const selectSearchboxMinified = createSelector(
	[selectSearchbox],
	(searchbox) => searchbox.searchboxMinified
)

export const selectSuggestions = createSelector(
	[selectSearchbox],
	(searchbox) => searchbox.suggestions
)

export const selectAutocompleteFrom = createSelector(
	[selectSearchbox],
	(searchbox) => searchbox.autocompleteFrom
)

export const selectAutocompleteTo = createSelector(
	[selectSearchbox],
	(searchbox) => searchbox.autocompleteTo
)


export const selectSearchFrom = createSelector(
	[selectSearchbox],
	(searchbox) => searchbox.searchFrom
)

export const selectSearchTo = createSelector(
	[selectSearchbox],
	(searchbox) => searchbox.searchTo
)

export const selectRoundtrip = createSelector(
	[selectSearchbox],
	(searchbox) => searchbox.roundtrip
)

export const selectReturnDate = createSelector(
	[selectSearchbox],
	(searchbox) => searchbox.returnDate
)

export const selectDepartureDate = createSelector(
	[selectSearchbox],
	(searchbox) => searchbox.departureDate
)

export const selectPassengers = createSelector(
	[selectSearchbox],
	(searchbox) => searchbox.passengers
)

export const selectFromLocation = createSelector(
	[selectSearchbox],
	(searchbox) => searchbox.fromLocation
)

export const selectToLocation = createSelector(
	[selectSearchbox],
	(searchbox) => searchbox.toLocation
)

export const selectIsLoading = createSelector(
	[selectSearchbox],
	(searchbox) => searchbox.isLoading
)

export const selectFlightOffers = createSelector(
	[selectSearchbox],
	(searchbox) => searchbox.flightOffers
)