import React from 'react';
import { SearchBarInput, SearchBarContainer } from './searchbar.styles.jsx';
import { connect } from 'react-redux';

import { updateSearchFromField, updateSearchToField, setAutocompleteFromList, setAutocompleteToList } from '../../redux/searchbox/searchbox.actions.js';
import { updateDisplaynameField, updateEmailField, updatePasswordField } from '../../redux/signinmenu/signinmenu.actions.js';
import { createStructuredSelector } from 'reselect';
import { selectSuggestions } from '../../redux/searchbox/searchbox.selectors.js';
import { postAmadeusLocationSearch } from '../../amadeus/amadeus.utils.js';

const mapStateToProps = createStructuredSelector({
	suggestions: selectSuggestions
})

const mapDispatchToProps = dispatch => ({
	updateDisplaynameField:(text) => dispatch(updateDisplaynameField(text)),
	updateEmailField:(text) => dispatch(updateEmailField(text)),
	updatePasswordField:(text) => dispatch(updatePasswordField(text)),
	updateSearchFromField:(text) => dispatch(updateSearchFromField(text)),
	updateSearchToField:(text) => dispatch(updateSearchToField(text)),
	setAutocompleteFromList:(arr) => dispatch(setAutocompleteFromList(arr)),
	setAutocompleteToList:(arr) => dispatch(setAutocompleteToList(arr))
})

const displayname = 'displayname';
const email = 'email';
const password = 'password';
const fromorigin = 'fromorigin';
const toorigin = 'toorigin';

// export const searchSuggestions = (value,props) => {
// 			console.log(props)
// 			if (props.label === 'fromorigin') {
// 				if (value.length > 0) {
// 					const regex = new RegExp(`^${value}`,'i');
// 					const suggestions2 = props.suggestions.sort().filter(v => regex.test(v));
// 					props.setAutocompleteFromList(suggestions2)
// 					}
// 				if (value.length === 0) {
// 					props.setAutocompleteFromList([])
// 					return
// 				} 
// 			}
// 			if (props.label === 'toorigin') {
// 				if (value.length > 0) {
// 				const regex = new RegExp(`^${value}`,'i');
// 				const suggestions2 = props.suggestions.sort().filter(v => regex.test(v));
// 				props.setAutocompleteToList(suggestions2)
// 				}
// 				if (value.length === 0) {
// 				props.setAutocompleteToList([])
// 				return
// 				} 
// 			}
// }

export const SearchBar = ({inputText,placeholder,type,value,...props}) => {

	const setValueOnLabel = (event,label) => 
		{	const { value } = event.target
			switch (label) {
				case displayname:
					props.updateDisplaynameField(value)
					return
				case email:
					props.updateEmailField(value)
					return
				case password:
					props.updatePasswordField(value)
					return
				case fromorigin:
					props.updateSearchFromField(value);
					postAmadeusLocationSearch(value,props.setAutocompleteFromList);
					return
				case toorigin:
					props.updateSearchToField(value)
					postAmadeusLocationSearch(value,props.setAutocompleteToList);
					return
				default:
					return
			}
		}
	return(	
	<SearchBarContainer>	
		<SearchBarInput value={value} onChange={event => setValueOnLabel(event,props.label)}placeholder={placeholder} type={type}/>
	</SearchBarContainer>
)}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);