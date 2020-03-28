import styled from 'styled-components';
import { createGlobalStyle } from "styled-components"

export const AppContainer = styled.div`
	height:100%;
`

export const HtmlStyle = createGlobalStyle`
	* {
		box-sizing:border-box;
	}

	html {
		background: #355C7D;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}
	html,body,#root {
		height:100%;
	}
`