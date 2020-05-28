import React, { useCallback } from 'react';
import { FiPlusCircle, FiCheckCircle } from 'react-icons/fi';

import { Media, useFavorites } from '../../hooks/favorites';

import { MediaListStyle, Figure } from './styles';

interface Props {
	medias: Media[];
}

const MediaList: React.FC<Props> = ({ medias }) => {
	const { toggleFavorite, isFavorite } = useFavorites();

	const handleToggleFavorite = useCallback(
		(media: Media) => () => {
			toggleFavorite(media);
		},
		[toggleFavorite],
	);

	return (
		<MediaListStyle>
			{medias.map(media => {
				const src = media.poster_path
					? `https://image.tmdb.org/t/p/w200/${media.poster_path}`
					: 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';
				const Icon = isFavorite(media) ? FiCheckCircle : FiPlusCircle;
				const genres = media.genres.map(genre => genre.name).join(' / ');
				return (
					<div key={media.id}>
						<Figure imgError={!media.poster_path}>
							<img src={src} alt={media.title} title={media.title} />
							<button type="button" onClick={handleToggleFavorite(media)}>
								<Icon size={40} />
							</button>
						</Figure>

						<p title={media.title}>{media.title}</p>
						<span title={genres}>{`${media.year} • ${genres}`}</span>
					</div>
				);
			})}
		</MediaListStyle>
	);
};

export default MediaList;
