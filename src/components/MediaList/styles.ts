import styled, { css } from 'styled-components';

export const MediaListStyle = styled.section`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	justify-items: center;
	gap: 15px 0;

	div {
		width: 170px;

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

interface FigureProps {
	imgError: boolean;
}

export const Figure = styled.figure<FigureProps>`
	/* figure { */
	position: relative;
	height: 260px;
	margin-bottom: 5px;

	img {
		/* background-image: url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg); */
		/* background-color: #dbdbdb; */
		${props =>
			props.imgError &&
			css`
				background-color: #dbdbdb;
			`}
		cursor: pointer;
		width: 100%;
		height: 100%;
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
	/* } */
`;
