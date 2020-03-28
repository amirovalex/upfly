import React, { useRef, useEffect } from 'react';

import { AutocompleteContainer, UnorderedList, ListElement,
		 LocationImage } from './autocomplete-text.styles.jsx';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSuggestions, selectAutocompleteFrom, selectAutocompleteTo } from '../../redux/searchbox/searchbox.selectors.js';
import { updateSearchFromField, updateSearchToField, setAutocompleteFromList,
		 setAutocompleteToList, setFromLocation, setToLocation } from '../../redux/searchbox/searchbox.actions.js';
// import { searchSuggestions } from '../searchbar/searchbar.component.jsx';

const mapStateToProps = createStructuredSelector({
	suggestions: selectSuggestions,
	autocompleteFrom: selectAutocompleteFrom,
	autocompleteTo: selectAutocompleteTo
})

const mapDispatchToProps = dispatch => ({
	updateSearchFromField:(text) => dispatch(updateSearchFromField(text)),
	updateSearchToField:(text) => dispatch(updateSearchToField(text)),
	setAutocompleteFromList:(arr) => dispatch(setAutocompleteFromList(arr)),
	setAutocompleteToList:(arr) => dispatch(setAutocompleteToList(arr)),
	setFromLocation:(obj) => dispatch(setFromLocation(obj)),
	setToLocation:(obj) => dispatch(setToLocation(obj))
})

const useOutsideAlerter = (ref,label,setAutocompleteFromList,setAutocompleteToList) => {
  /**
   * Alert if clicked on outside of element
   */
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      if (label ==="fromorigin") {
      	setAutocompleteFromList([])
      	console.log('1');
      }
      if (label ==="toorigin") {
      	setAutocompleteToList([])
      	console.log('2');
      }
      console.log('nooo')
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}

export const autocompleteText = (WrappedComponent) => {
	const AutocompleteText = (props) => {

		const wrapperRef = useRef(null);
  		useOutsideAlerter(wrapperRef,props.label,props.setAutocompleteFromList,props.setAutocompleteToList);

		const checkLabel = (label,item) => {
			if (label === 'fromorigin') {
				props.updateSearchFromField(item.name)
				props.setFromLocation(item)
				props.setAutocompleteFromList([])
				return
			}
			if (label === 'toorigin') {
				props.updateSearchToField(item.name)
				props.setToLocation(item)
				props.setAutocompleteToList([])
				return
			}
			return
		}

		const renderSuggestions = (searchLabel) => {
			const { autocompleteFrom, label,
					autocompleteTo } = props;
			if (searchLabel === 'fromorigin') {
				if (autocompleteFrom.length === 0) {
					return null
				}
				return (
						<UnorderedList>
							{ autocompleteFrom.map((suggestion,i) =>
								<ListElement onClick={() => checkLabel(label, suggestion)} key={i}><LocationImage src={suggestion.subType === "CITY" ? require('../../assets/house.svg') : require('../../assets/departures.svg')}/>{`${suggestion.name} (${suggestion.iataCode})`}</ListElement>
								)
							}
						</UnorderedList>
				)
			}
			if (searchLabel === 'toorigin') {
				if(autocompleteTo.length === 0) {
					return null
				}
				return (
						<UnorderedList>
							{ autocompleteTo.map((suggestion,i) =>
								<ListElement onClick={() => checkLabel(label, suggestion)} key={i}><LocationImage src={suggestion.subType === "CITY" ? require('../../assets/house.svg') : require('../../assets/departures.svg')}/>{`${suggestion.name} (${suggestion.iataCode})`}</ListElement>
								)
							}
						</UnorderedList>
				)				
			}
		}

		return (
			<AutocompleteContainer ref={wrapperRef} {...props}>
				<WrappedComponent {...props}/>
				{renderSuggestions(props.label)}
			</AutocompleteContainer>
		)
		}
	return connect(mapStateToProps,mapDispatchToProps)(AutocompleteText);
}

export default autocompleteText;