import styled, { css } from 'styled-components';

const FullSearchBoxCss = css`
	background:rgba(255,255,255,0.2);
	height:300px;
	border-bottom:1px solid rgba(255, 255, 255, 0.5);
`

export const SearchBoxContainer = styled.div`
	${({full}) => full ? FullSearchBoxCss : null}
`