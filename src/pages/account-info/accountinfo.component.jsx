import React from 'react';
import { PageContainer, SectionHeader, SectionHeaderContainer,
		 SectionContainer, Section, SectionText, 
		 SectionArrow, ArrowContainer, SectionsDividingLine,
		 SectionNoHover } from './accountinfo.styles.jsx';

const AccountInfoPage = () => (
	<PageContainer>
		<h2>Account Info</h2>
		<SectionHeaderContainer>
			<SectionHeader>
				General Info
			</SectionHeader>
		</SectionHeaderContainer>
		<SectionContainer>
			<SectionNoHover>
				<SectionText>
					Email:myemail@gmail.com
				</SectionText>
			</SectionNoHover>
		</SectionContainer>
		<SectionHeaderContainer>
			<SectionHeader>
				Password
			</SectionHeader>
		</SectionHeaderContainer>
		<SectionContainer>
			<Section>
				<SectionText>
					Change Password
				</SectionText>
				<ArrowContainer><SectionArrow></SectionArrow></ArrowContainer>
			</Section>
			<SectionsDividingLine/>
			<Section>
				<SectionText>
					Change Password
				</SectionText>
				<ArrowContainer><SectionArrow></SectionArrow></ArrowContainer>
			</Section>
		</SectionContainer>
		<SectionHeaderContainer>
			<SectionHeader>
				Account
			</SectionHeader>
		</SectionHeaderContainer>
		<SectionContainer>
			<Section>
				<SectionText>
					Delete Account
				</SectionText>
				<ArrowContainer><SectionArrow></SectionArrow></ArrowContainer>
			</Section>
		</SectionContainer>
	</PageContainer>
)

export default AccountInfoPage;