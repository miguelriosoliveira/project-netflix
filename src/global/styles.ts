import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	body {
		font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		background: #141414;
		color: #fff;

	}

	button {
		cursor: pointer;
	}
`;
