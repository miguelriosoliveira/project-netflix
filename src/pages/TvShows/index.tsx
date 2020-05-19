import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import MediaList from '../../components/MediaList';
import api from '../../services/api';

interface TvShow {
	id: number;
	name: string;
	first_air_date: string;
	poster_path: string;

	title: string;
	year: number;
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
				const formattedTvShows = response.data.results.map(tvShow => ({
					...tvShow,
					title: tvShow.name,
					year: Number(tvShow.first_air_date.split('-')[0]),
				}));
				setTvShows(formattedTvShows);
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
