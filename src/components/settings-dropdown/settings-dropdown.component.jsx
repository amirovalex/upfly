import React from 'react';
import { DropdownContainer, DropdownHeader, DropdownTitle,
		 DropdownList, DropdownItem } from './settings-dropdown.component.jsx';

const SettingsDropdown = WrappedComponent => ({...otherProps}) => {

	return(
		<DropdownContainer>
			<DropdownHeader>
				<DropdownTitle>
					{otherProps.titleName}
				</DropdownTitle>
			</DropdownHeader>
			<WrappedComponent {...otherProps}/>
		</DropdownContainer>
		)
}

export default SettingsDropdown;