import { MediaRequest, Movie, TvShow } from '@/@types';
import { MediaList } from '@/components';
import { SeeMoreLink } from '@/components/SeeMoreLink';
import { tmdbApi } from '@/services';

const { TMDB_IMAGES_API_URL } = process.env;
const TOP_COUNT = 8;

function mapTvShow(tvShow: TvShow): TvShow {
	return {
		...tvShow,
		title: tvShow.name,
		original_title: tvShow.original_name,
		type: 'tv',
		unique_id: `${tvShow.id}-tv`,
		year: Number(tvShow.first_air_date.split('-')[0]),
		poster_path: tvShow.poster_path
			? `${TMDB_IMAGES_API_URL}/w300${tvShow.poster_path}`
			: '/empty-poster.png',
	};
}

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

async function getMedias(
	tvShowMapper: (tvShow: TvShow) => TvShow,
	movieMapper: (movie: Movie) => Movie,
) {
	// get popular tv shows and movies
	const [{ results: popularShows }, { results: popularMovies }] = await Promise.all([
		tmdbApi.get<MediaRequest<TvShow>>('tv/popular'),
		tmdbApi.get<MediaRequest<Movie>>('movie/popular'),
	]);

	// format tv shows
	const formattedTvShows: TvShow[] = await Promise.all(
		popularShows.map(async tvShow => {
			const tvShowDetails = await tmdbApi.get<TvShow>(`tv/${tvShow.id}`);
			return tvShowMapper({ ...tvShow, ...tvShowDetails });
		}),
	);

	// format movies
	const formattedMovies: Movie[] = await Promise.all(
		popularMovies.map(async movie => {
			const movieDetails = await tmdbApi.get<Movie>(`movie/${movie.id}`);
			return movieMapper({ ...movie, ...movieDetails });
		}),
	);

	// return sorted by popularity
	return {
		tvShows: formattedTvShows
			.sort((a, b) => b.popularity - a.popularity)
			.filter((_, i) => i < TOP_COUNT),
		movies: formattedMovies
			.sort((a, b) => b.popularity - a.popularity)
			.filter((_, i) => i < TOP_COUNT),
	};
}

export default async function Home() {
	const { tvShows, movies } = await getMedias(mapTvShow, mapMovie);

	return (
		<div className="flex flex-col gap-5">
			<MediaList title={`Top ${TOP_COUNT} Tv Shows`} medias={tvShows} className="flex-1" />
			<SeeMoreLink href="/tv-shows" />

			<div className="h-px bg-gray-500 lg:h-auto lg:w-px" />

			<MediaList title={`Top ${TOP_COUNT} Movies`} medias={movies} className="flex-1" />
			<SeeMoreLink href="/movies" />
		</div>
	);
}
