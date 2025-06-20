import { Movie, MediaRequest } from '@/@types';
import { MediaList } from '@/components';
import { tmdbApi } from '@/services';

const { TMDB_IMAGES_API_URL } = process.env;

function mapMovie(movie: Movie): Movie {
	return {
		...movie,
		type: 'movie',
		unique_id: `${movie.id}-movie`,
		year: Number(movie.release_date.split('-')[0]),
		poster_path: movie.poster_path
			? `${TMDB_IMAGES_API_URL}/w300${movie.poster_path}`
			: '/empty-poster.png',
	};
}

async function getMovies(movieMapper: (movie: Movie) => Movie) {
	// get popular movies
	const { results: popularMovies } = await tmdbApi.get<MediaRequest<Movie>>('movie/popular');

	// format movies
	const formattedMovies: Movie[] = await Promise.all(
		popularMovies.map(async movie => {
			const movieDetails = await tmdbApi.get<Movie>(`movie/${movie.id}`);
			return movieMapper({ ...movie, ...movieDetails });
		}),
	);

	// return sorted by popularity
	return formattedMovies.sort((a, b) => b.popularity - a.popularity);
}

export default async function Movies() {
	const movies = await getMovies(mapMovie);
	return <MediaList medias={movies} />;
}
