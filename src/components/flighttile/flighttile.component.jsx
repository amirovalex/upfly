import React from 'react';
import { FlightBox, FlightContainer, FlightDetailsContainer,
		AirlineLogo, FromPart, FlightTimeHeader,
		FlightDirection, FlightLine, AirplaneSvg,
		FlightLineContainer, FlightTimePeriod, MarkingLine,
		ButtonContainer, PriceTag } from './flighttile.styles.jsx';
import Button from '../button/button.component.jsx';

const FlightTile = ({returnFlight,buyOption,flight,...props}) => {
	console.log('flight tile', flight)
	return(
	<FlightBox {...props}>
		<FlightContainer>
			<AirlineLogo src={`http://pics.avs.io/400/400/${flight.airlineCodes[0]}.png`} alt="airline"/>
			<FlightDetailsContainer>
				<FromPart>
					<FlightTimeHeader>{flight.departSegments[0].departure.at.slice(flight.departSegments[0].departure.at.length - 8,flight.departSegments[0].departure.at.length - 3)}</FlightTimeHeader>
					<FlightDirection>{flight.departSegments[0].departure.iataCode}</FlightDirection>
				</FromPart>
				<FlightLineContainer>
					<FlightTimePeriod>
						{flight.departFlightTime.slice(2,flight.departFlightTime.length)} {flight.departStops > 0 ? `(${flight.departStops} stops)` : null}
					</FlightTimePeriod>
					<FlightLine>
						<AirplaneSvg src={require('../../assets/Plane_icon.svg')}/>
					</FlightLine>
				</FlightLineContainer>
				<FromPart>
					<FlightTimeHeader>{flight.departSegments[flight.departSegments.length-1].arrival.at.slice(flight.departSegments[flight.departSegments.length-1].arrival.at.length - 8, flight.departSegments[flight.departSegments.length-1].arrival.at.length -3)}</FlightTimeHeader>
					<FlightDirection>{flight.departSegments[flight.departSegments.length-1].arrival.iataCode}</FlightDirection>
				</FromPart>
			</FlightDetailsContainer>
		</FlightContainer>
		{flight.roundtrip &&
		<MarkingLine/>}
		{flight.roundtrip &&
			<FlightContainer>
				<AirlineLogo src={`http://pics.avs.io/400/400/${flight.airlineCodes[flight.airlineCodes.length - 1]}.png`} alt="airline"/>
				<FlightDetailsContainer>
					<FromPart>
						<FlightTimeHeader>{flight.returnSegments[0].departure.at.slice(flight.returnSegments[0].departure.at.length - 8,flight.returnSegments[0].departure.at.length -3)}</FlightTimeHeader>
						<FlightDirection>{flight.returnSegments[0].departure.iataCode}</FlightDirection>
					</FromPart>
					<FlightLineContainer>
						<FlightTimePeriod>
							{flight.returnFlightTime.slice(2,flight.returnFlightTime.length)} {flight.returnStops > 0 ? `(${flight.returnStops} stops` : null}
						</FlightTimePeriod>
						<FlightLine>
							<AirplaneSvg src={require('../../assets/Plane_icon.svg')}/>
						</FlightLine>
					</FlightLineContainer>
					<FromPart>
						<FlightTimeHeader>{flight.returnSegments[flight.returnSegments.length-1].arrival.at.slice(flight.returnSegments[flight.returnSegments.length-1].arrival.at.length - 8, flight.returnSegments[flight.returnSegments.length-1].arrival.at.length -3)}</FlightTimeHeader>
						<FlightDirection>{flight.returnSegments[flight.returnSegments.length -1].arrival.iataCode}</FlightDirection>
					</FromPart>
				</FlightDetailsContainer>
			</FlightContainer>
		}
		{buyOption &&
			<ButtonContainer>
				<PriceTag>{`${flight.price}$`}</PriceTag>
				<Button buy text="Buy"/>
			</ButtonContainer>
		}
	</FlightBox>
)}

export default FlightTile;