import styled from 'styled-components';

export const HeaderStyle = styled.header`
	margin: 20px 55px;
	font-size: 14px;

	.netflix-logo {
		font-family: 'Bebas Neue', cursive;
		margin-right: 30px;
		font-size: 35px;
		color: #e50914;
	}

	a {
		text-decoration: none;
		color: #fff;
		& + a {
			margin-left: 20px;
		}
	}
`;
