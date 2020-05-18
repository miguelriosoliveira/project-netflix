import React, { useState, useEffect } from 'react';

import Header from '../../compoents/Header';
import api from '../../services/api';

import { MovieList } from './styles';

interface Movie {
	id: number;
	title: string;
	year: number;
	medium_cover_image: string;
}

interface MovieProps {
	data: {
		movies: Movie[];
	};
}

const Movies: React.FC = () => {
	const [movies, setMovies] = useState<Movie[]>([]);

	useEffect(() => {
		api
			.get<MovieProps>('list_movies.json')
			.then(response => setMovies(response.data.data.movies))
			.catch(err => console.error('deu ruim', err));
	}, []);

	return (
		<>
			<Header />
			<MovieList>
				{movies.map(movie => (
					<div key={movie.id}>
						<img src={movie.medium_cover_image} alt={movie.title} />
						<p>{movie.title}</p>
						<span>{movie.year}</span>
					</div>
				))}
			</MovieList>
		</>
	);
};

export default Movies;
