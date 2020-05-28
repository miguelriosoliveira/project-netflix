import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import MediaList from '../../components/MediaList';
import { Media } from '../../hooks/favorites';
import api from '../../services/api';

interface TvShow extends Media {
	name: string;
	first_air_date: string;
}

interface TvShowRequest {
	results: TvShow[];
}

const TvShows: React.FC = () => {
	const [tvShows, setTvShows] = useState<TvShow[]>([]);

	useEffect(() => {
		api
			.get<TvShowRequest>('tv/popular')
			.then(response => {
				const formattedTvShows: TvShow[] = [];
				Promise.all(
					response.data.results.map(async tvShow => {
						try {
							const tvShowResponse = await api.get(`tv/${tvShow.id}`);
							return formattedTvShows.push({
								...tvShow,
								title: tvShow.name,
								type: 'tv',
								unique_id: `${tvShow.id}-tv`,
								year: Number(tvShow.first_air_date.split('-')[0]),
								genres: tvShowResponse.data.genres,
							});
						} catch (err) {
							return console.log('deu ruim', err);
						}
					}),
				).then(() => setTvShows(formattedTvShows));
			})
			.catch(err => console.log('deu ruim', err));
	}, []);

	return (
		<>
			<Header />
			<main>
				<MediaList medias={tvShows} />
			</main>
		</>
	);
};

export default TvShows;
