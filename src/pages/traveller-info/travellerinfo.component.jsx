import React from 'react';
import SearchBar from '../../components/searchbar/searchbar.component.jsx';
import DateBar from '../../components/datebar/datebar.component.jsx';
import SelectBar from '../../components/selectbar/selectbar.component.jsx';
import { InfoContainer, InputTile, PartTile,
		 Title } from './travellerinfo.styles.jsx';
import Button from '../../components/button/button.component.jsx';
const TravellerInfoPage = () => (
	<InfoContainer>
		<h2>Personal details</h2>
		<InputTile>
			<Title>Title</Title>
			<SearchBar type="text"/>
		</InputTile>
		<InputTile>
			<Title>First Name(s)</Title>
			<SearchBar type="text"/>
		</InputTile>
		<InputTile>
			<Title>Last Name</Title>
			<SearchBar type="text"/>
		</InputTile>
		<InputTile flex>
			<PartTile>
				<Title>Gender</Title>
				<SelectBar/>
			</PartTile>
			<PartTile>
				<Title>Nationality</Title>
				<SelectBar/>
			</PartTile>
		</InputTile>
		<InputTile>
			<Title>Place Of Birth</Title>
			<SearchBar type="text"/>
		</InputTile>
		<InputTile>
			<Title>Date Of Birth</Title>
			<DateBar type="text"/>
		</InputTile>
		<Button save text="SAVE"/>
	</InfoContainer>
)

export default TravellerInfoPage;