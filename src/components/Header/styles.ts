import styled from 'styled-components';

export const HeaderStyle = styled.header`
	margin: 20px 55px;
	font-size: 14px;
	display: flex;
	align-items: center;

	a {
		text-decoration: none;
	}

	.logo-mashup {
		font-family: 'Bebas Neue', cursive;
		margin-right: 30px;
		font-size: 35px;
		.netflix {
			color: #e50914;
		}
		.yts {
			color: #6ac045;
		}
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
