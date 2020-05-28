import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import MediaList from '../../components/MediaList';
import { Media } from '../../hooks/favorites';
import api from '../../services/api';

import { CategoryTitle } from './styles';

interface TvShow extends Media {
	name: string;
	first_air_date: string;
}

interface Movie extends Media {
	release_date: string;
}

interface TvShowRequest {
	results: TvShow[];
}

interface MovieRequest {
	results: Movie[];
}

const Home: React.FC = () => {
	const [tvShows, setTvShows] = useState<TvShow[]>([]);
	const [movies, setMovies] = useState<Movie[]>([]);

	useEffect(() => {
		// get tv shows
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

		// get movies
		api
			.get<MovieRequest>('movie/popular')
			.then(response => {
				const formattedMovies: Movie[] = [];
				Promise.all(
					response.data.results.map(async movie => {
						try {
							const movieResponse = await api.get(`movie/${movie.id}`);
							return formattedMovies.push({
								...movie,
								type: 'movie',
								unique_id: `${movie.id}-movie`,
								year: Number(movie.release_date.split('-')[0]),
								genres: movieResponse.data.genres,
							});
						} catch (err) {
							return console.log('deu ruim', err);
						}
					}),
				).then(() => setMovies(formattedMovies));
			})
			.catch(err => console.log('deu ruim', err));
	}, []);

	return (
		<>
			<Header />

			<main>
				<CategoryTitle>TV Shows</CategoryTitle>
				<MediaList medias={tvShows} />

				<CategoryTitle>Movies</CategoryTitle>
				<MediaList medias={movies} />
			</main>
		</>
	);
};

export default Home;
