import styled from 'styled-components';

export const MediaListStyle = styled.section`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	justify-items: center;
	gap: 15px 0;

	div {
		width: 170px;

		img {
			width: 100%;
			border: 5px solid #fff;
			border-radius: 5px;
			transition: border-color 0.2s;
			&:hover {
				border-color: #6ac045;
			}
		}

		p {
			font-weight: bold;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
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
