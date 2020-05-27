import styled from 'styled-components';

export const MediaListStyle = styled.section`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	justify-items: center;
	gap: 15px 0;

	div {
		width: 170px;

		figure {
			position: relative;

			img {
				cursor: pointer;
				width: 100%;
				border-radius: 10px;
				transition: transform 0.2s, border 0.2s;
			}

			button {
				display: none;
				height: fit-content;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				background: transparent;
				border: 0;
				transition: transform 0.2s, background-color 0.2s, border-radius 0.2s;
				&:hover {
					transform: translate(-50%, -50%) scale(1.2);
					background-color: rgb(0, 0, 0, 0.6);
					border-radius: 50%;
				}
				svg {
					color: #fff;
				}
			}

			&:hover {
				img {
					transform: scale(1.1);
					border: 2px solid #fff;
				}
				button {
					display: flex;
				}
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
