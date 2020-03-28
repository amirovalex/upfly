import React from 'react';
import { SearchBoxContainer } from './searchboxhandle.styles.jsx';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSearchboxMinified } from '../../redux/searchbox/searchbox.selectors.js';
import SearchBox from '../searchbox/searchbox.component.jsx';
import SearchBoxMinified from '../searchboxmini/searchboxmini.component.jsx';

const mapStateToProps = createStructuredSelector({
  searchboxMini:selectSearchboxMinified
})


export const SearchBoxHandle = (props) => {
	console.log(props)
	return(
	<SearchBoxContainer  full={!props.searchboxMini}>
		{props.searchboxMini ?
			<SearchBoxMinified/>
			:
			<SearchBox onSearchPage/>
		}
	</SearchBoxContainer>
)}

export default connect(mapStateToProps)(SearchBoxHandle);