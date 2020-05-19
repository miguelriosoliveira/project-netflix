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
			cursor: pointer;
			border-radius: 10px;
			transition: transform 0.2s, border 0.2s;
			&:hover {
				transform: scale(1.1);
				border: 2px solid #fff;
			}
		}

		p {
			cursor: pointer;
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
			display: block;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
	}
`;
