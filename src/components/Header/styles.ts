import styled from 'styled-components';

export const HeaderStyle = styled.header`
	margin: 20px 55px;
	font-size: 14px;
	display: flex;
	align-items: center;

	a {
		text-decoration: none;
	}

	.netflix-logo {
		font-family: 'Bebas Neue', cursive;
		margin-right: 30px;
		font-size: 35px;
		color: #e50914;
	}

	nav {
		a {
			color: #fff;
			& + a {
				margin-left: 20px;
			}
		}
	}
`;
