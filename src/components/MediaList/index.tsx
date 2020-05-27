import React, { useCallback } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

import { Media } from '../../utils/interfaces';

import { MediaListStyle } from './styles';

interface Props {
	medias: Media[];
}

const MediaList: React.FC<Props> = ({ medias }) => {
	const handleAddFavorite = useCallback(
		({ id, type }: Media) => () => console.log('add to favorites', id, type),
		[],
	);

	return (
		<MediaListStyle>
			{medias.map(media => {
				const genres = media.genres.map(genre => genre.name).join(' / ');
				return (
					<div key={media.id}>
						<figure>
							<img
								src={`https://image.tmdb.org/t/p/w200/${media.poster_path}`}
								alt={media.title}
								title={media.title}
							/>
							<button type="button" onClick={handleAddFavorite(media)}>
								<FiPlusCircle size={40} />
							</button>
						</figure>

						<p title={media.title}>{media.title}</p>
						<span title={genres}>{`${media.year} • ${genres}`}</span>
					</div>
				);
			})}
		</MediaListStyle>
	);
};

export default MediaList;
