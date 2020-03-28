arr.map(offer => 
	let flight = {}
	const offerDeparture = offer.itineraries[0]
	const offerReturn = offer.itineraries[1]
	let stopsReturn = 0
	offer.itineraries.map((obj,i) =>
			{
			if (i === 0) {
				flight.departFlightTime = obj.duration
				flight.departSegments = obj.segments
				flight.departStops = flight.departSegments.length
			}
			if (i === 1) {
				flight.returnFlightTime = obj.duration
				flight.returnSegments = obj.segments
				flight.returnStops = flight.returnSegments.length
			}
	})
)

arr.map (offer => {
	let flight = {}
	const { offerItems } = offer
	flight.price = offerItems.price.total
	offerItems[0].services[]
})
	console.log('ROOOOOOUNDTRIP')