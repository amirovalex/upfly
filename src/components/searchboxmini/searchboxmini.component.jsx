import React from 'react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import DateBar from '../../components/datebar/datebar.component.jsx';
import { SearchBoxContainer, SearchBox, SearchButton, 
		 SearchButtonContainer, DirectionsContainer, Directions,
		 FlightInfo, FromDateContainer, ToDateContainer,
		 LeftArrowContainer, LeftArrow, RightArrowContainer, 
		 RightArrow, DatesContainer, SearchButtonCircle,
		 SearchSystem } from './searchboxmini.styles.jsx';
import { toggleSearchBoxStyle } from '../../redux/searchbox/searchbox.actions.js';
import { selectSearchboxMinified, selectRoundtrip } from '../../redux/searchbox/searchbox.selectors.js';
import { selectDepartureDate, selectReturnDate } from '../../redux/searchbox/searchbox.selectors.js';

const mapStateToProps = createStructuredSelector({
	searchboxMinified: selectSearchboxMinified,
	departureDate: selectDepartureDate,
	returnDate: selectReturnDate,
	roundtrip: selectRoundtrip
})

const mapDispatchToProps = (dispatch) => ({
	toggleSearchBoxStyle: () => dispatch(toggleSearchBoxStyle())
})

const SearchBoxMini = (props) => (
	<SearchSystem full={!props.searchboxMinified}>
		<SearchBoxContainer>
			<SearchBox onClick={() => props.toggleSearchBoxStyle()}>
				<DirectionsContainer>
					<Directions>Tel Aviv(TLV)-Tel Aviv(TLV)</Directions>
					<FlightInfo>1 adult | Economy</FlightInfo>
				</DirectionsContainer>
			</SearchBox>
			<DatesContainer>
					<FromDateContainer>
						<LeftArrowContainer>
							<LeftArrow/>
						</LeftArrowContainer>
							<DateBar dateValue={props.departureDate} />
						<RightArrowContainer>
							<RightArrow/>
						</RightArrowContainer>
					</FromDateContainer>
					{ props.roundtrip &&
						<ToDateContainer>
							<LeftArrowContainer>
								<LeftArrow/>
							</LeftArrowContainer>
								<DateBar dateValue={props.returnDate}/>
							<RightArrowContainer>
								<RightArrow/>
							</RightArrowContainer>
						</ToDateContainer>	
					}
			</DatesContainer>
		</SearchBoxContainer>
		<SearchButtonContainer>
				<SearchButtonCircle>
					<SearchButton onClick={() => props.toggleSearchBoxStyle()}src={require('../../assets/search-icon.svg')} />
				</SearchButtonCircle>
		</SearchButtonContainer>
	</SearchSystem>
)

export default connect(mapStateToProps,mapDispatchToProps)(SearchBoxMini);