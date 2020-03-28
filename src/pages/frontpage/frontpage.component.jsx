import React from 'react'
import SearchBox from '../../components/searchbox/searchbox.component.jsx';
import { FrontPageContainer } from './frontpage.styles.jsx';

const FrontPage = () => (
	<FrontPageContainer>
			<SearchBox frontpage/>
	</FrontPageContainer>
	)

export default FrontPage;