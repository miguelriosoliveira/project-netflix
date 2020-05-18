import React, { useState, useEffect } from 'react';

import Header from '../../compoents/Header';
import api from '../../services/api';
import { MovieList } from './styles';

interface MovieProps {
	data: {
		movies: {
			title: string;
			year: number;
		};
	};
}

interface Movie {
	id: number;
	title: string;
	year: number;
	medium_cover_image: string;
}

const Home: React.FC = () => {
	const [movies, setMovies] = useState<Movie[]>([]);

	useEffect(() => {
		api
			.get('list_movies.json')
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

export default Home;
