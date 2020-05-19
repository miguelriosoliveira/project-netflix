import React from 'react';

import { MediaListStyle } from './styles';

interface Media {
	id: number;
	title: string;
	year: number;
	poster_path: string;
}

interface Props {
	medias: Media[];
}

const MediaList: React.FC<Props> = ({ medias }) => {
	return (
		<MediaListStyle>
			{medias.map(media => (
				<div key={media.id}>
					<img src={`https://image.tmdb.org/t/p/w500/${media.poster_path}`} alt={media.title} />
					<p title={media.title}>{media.title}</p>
					<span>{media.year}</span>
				</div>
			))}
		</MediaListStyle>
	);
};

export default MediaList;
