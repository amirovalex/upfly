import React from 'react';
import FlightTile from '../../components/flighttile/flighttile.component.jsx';
import { PageContainer } from './myflights.styles.jsx';

const MyFlights = () => (
	<PageContainer>
		<h1>My Flights</h1>
		<FlightTile />
	</PageContainer>
)

export default MyFlights;