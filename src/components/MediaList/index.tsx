import React from 'react';

import { MediaListStyle } from './styles';

interface Media {
	id: number;
	title: string;
	year: number;
	poster_path: string;
	genres: { id: number; name: string }[];
}

interface Props {
	medias: Media[];
}

const MediaList: React.FC<Props> = ({ medias }) => {
	return (
		<MediaListStyle>
			{medias.map(media => {
				const genres = media.genres.map(genre => genre.name).join(' / ');
				return (
					<div key={media.id}>
						<img
							src={`https://image.tmdb.org/t/p/w200/${media.poster_path}`}
							alt={media.title}
							title={media.title}
						/>
						<p title={media.title}>{media.title}</p>
						<span title={genres}>{`${media.year} • ${genres}`}</span>
					</div>
				);
			})}
		</MediaListStyle>
	);
};

export default MediaList;
