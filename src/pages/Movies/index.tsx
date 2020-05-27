import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import MediaList from '../../components/MediaList';
import api from '../../services/api';
import { Media } from '../../utils/interfaces';

interface Movie extends Media {
	release_date: string;
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
				const formattedMovies: Movie[] = [];
				Promise.all(
					response.data.results.map(async movie => {
						try {
							const movieResponse = await api.get(`movie/${movie.id}`);
							return formattedMovies.push({
								...movie,
								type: 'movie',
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
				<MediaList medias={movies} />
			</main>
		</>
	);
};

export default Movies;
