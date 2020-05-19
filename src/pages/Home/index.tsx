import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import MediaList from '../../components/MediaList';
import api from '../../services/api';

import { CategoryTitle } from './styles';

interface TvShow {
	id: number;
	name: string;
	first_air_date: string;
	poster_path: string;

	title: string;
	year: number;
}

interface Movie {
	id: number;
	title: string;
	release_date: string;
	poster_path: string;

	year: number;
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
				const formattedTvShows = response.data.results.map(tvShow => ({
					...tvShow,
					title: tvShow.name,
					year: Number(tvShow.first_air_date.split('-')[0]),
				}));
				setTvShows(formattedTvShows);
			})
			.catch(err => console.log('deu ruim', err));

		// get movies
		api
			.get<MovieRequest>('movie/popular')
			.then(response => {
				const formattedMovies = response.data.results.map(movie => ({
					...movie,
					year: Number(movie.release_date.split('-')[0]),
				}));
				setMovies(formattedMovies);
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
