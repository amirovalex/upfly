import React from 'react';
import { StopsList, StopsNumber } from './stop-settings.styles.jsx';

export const StopSettings = ({flight}) => (
	<StopsList>
		{flight.map()}
	</StopsList>
)

export default StopSettings;