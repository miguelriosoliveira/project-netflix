import styled from 'styled-components';

export const MovieList = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-items: center;
	gap: 15px 0;

	div {
		img {
			width: 170px;
			border: 5px solid #fff;
			border-radius: 5px;
			transition: border-color 0.2s;
			&:hover {
				border-color: #6ac045;
			}
		}

		p {
			font-weight: bold;
			transition: color 0.2s;
			&:hover {
				color: #919191;
			}
		}

		span {
			color: #919191;
			font-size: 13px;
		}
	}
`;
