import Amadeus from 'amadeus';
import axios from 'axios';

export const amadeus = new Amadeus({
	clientId:'HMD2GNxtXenWu2OSkMAU7aXsefv2Okhi',
	clientSecret:'KJ7x15NPORaAwGyg'
})

export const amadeusCredentials = {
	grant_type:"client_credentials",
	client_id:"Az3GuajrD5fqCwi4jG0bgDD277dKiWOz",
	client_secret:"TLAIGNcJOB8rsP8A"
}

const formUrlEncoded = x =>
   ( Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, ''))

export const amadeusCredentialsEncoded = formUrlEncoded(amadeusCredentials);

export const getAmadeusAccessToken = () => ( axios({
    url:'https://test.api.amadeus.com//v1/security/oauth2/token',
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    params: amadeusCredentials,
    data: amadeusCredentialsEncoded
    })
)

export const postAmadeusLocationSearch = (kwd,updateField) => 
{	console.log('keyword',kwd)

	kwd === "" ? updateField([])
	:
	fetch('http://localhost:3050/searchLocation',{
		method:"post",
		headers:{'Content-Type':'application/json'},
		body:JSON.stringify({
			keyword:kwd
			})
		})
		.then(res => res.json())
		.then(data => updateField(data))
	
}
export const postAmadeusFlightSearch = (originDeparture,destinationDeparture,departureDate,originReturn,destinationReturn,returnDate,updateOffers,adults,roundtrip,setIsLoading,isLoading) => {

	console.log('origin depart///',originDeparture,'destination depart///',destinationDeparture,
		'depart date//',departureDate,
		'origin return//',originReturn,
		'destinationReturn//',returnDate,
		'update offers//',updateOffers,adults,roundtrip,
		'is loading',isLoading)
	return (
		departureDate && originDeparture && destinationDeparture && originReturn && destinationReturn && returnDate && !isLoading
		?
		fetch('http://localhost:3050/searchFlightRoundtrip', {
			method:"post",
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				originDeparture:originDeparture.iataCode,
				destinationDeparture:destinationDeparture.iataCode,
				departureDate,
				originReturn:originReturn.iataCode,
				destinationReturn:destinationReturn.iataCode,
				returnDate,
				roundtrip
			})		
		})	
		.then(res => res.json())
		.then(data => {
					console.log('data',data.res)
					if (data.res === "no flights") {
						console.log('errorrrrr')
						updateOffers(null)
						setIsLoading(false);
						return
					}
					console.log('toggle1')
					updateOffers(data)
					setIsLoading(false);
				}	
			  )
		.catch(console.log)

		:
		(
		departureDate && originDeparture && destinationDeparture && !isLoading && !roundtrip ?
		fetch('http://localhost:3050/searchFlightOffers', {
			method:"post",
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				originDeparture:originDeparture.iataCode,
				destinationDeparture:destinationDeparture.iataCode,
				departureDate,
				adults
			})
		})
		.then(res => res.json())
		.then(data => { console.log('data',data)
						if (data.res === "no flights") {
							console.log('errorrrrr')
							updateOffers(null)
							setIsLoading(false);
							return
						}
						console.log('toggle2')
						updateOffers(data) 
						setIsLoading(false);
						})
		.catch(console.log)

		:
		null
		)
		)}
export default amadeus;
