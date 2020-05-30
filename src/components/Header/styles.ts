import styled from 'styled-components';

export const HeaderStyle = styled.header`
	margin: 20px 55px;
	font-size: 14px;
	display: flex;
	align-items: center;

	a {
		color: #fff;
		text-decoration: none;
	}

	.logos {
		margin-right: 30px;
		color: #fff;
		display: flex;
		align-items: baseline;

		span {
			color: #e50914;
			font-family: 'Bebas Neue', cursive;
			font-size: 35px;
		}

		img {
			width: 190px;
		}
	}

	nav {
		a + a {
			margin-left: 20px;
		}
	}
`;
