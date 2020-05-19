import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import MediaList from '../../components/MediaList';
import api from '../../services/api';

interface Movie {
	id: number;
	title: string;
	year: number;
	release_date: string;
	poster_path: string;
}

interface MovieRequest {
	results: Movie[];
}

const Movies: React.FC = () => {
	const [movies, setMovies] = useState<Movie[]>([]);

	useEffect(() => {
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
				<MediaList medias={movies} />
			</main>
		</>
	);
};

export default Movies;
