import { TvShow, MediaRequest } from '@/@types';
import { MediaList } from '@/components';
import { tmdbApi } from '@/services';

const { TMDB_IMAGES_API_URL } = process.env;

function mapTvShow(tvShow: TvShow): TvShow {
	return {
		...tvShow,
		title: tvShow.name,
		original_title: tvShow.original_name,
		type: 'tv',
		unique_id: `${tvShow.id}-tv`,
		year: Number(tvShow.first_air_date.split('-')[0]),
		poster_path: tvShow.poster_path
			? `${TMDB_IMAGES_API_URL}/w300/${tvShow.poster_path}`
			: '/empty-poster.png',
	};
}

async function getShows(tvShowMapper: (tvShow: TvShow) => TvShow) {
	// get popular tv shows
	const { results: popularShows } = await tmdbApi.get<MediaRequest<TvShow>>('tv/popular');

	// format tv shows
	const formattedTvShows: TvShow[] = await Promise.all(
		popularShows.map(async tvShow => {
			const tvShowDetails = await tmdbApi.get<TvShow>(`tv/${tvShow.id}`);
			return tvShowMapper({ ...tvShow, ...tvShowDetails });
		}),
	);

	// return sorted by popularity
	return formattedTvShows.sort((a, b) => b.popularity - a.popularity);
}

export default async function Home() {
	const tvShows = await getShows(mapTvShow);

	return <MediaList medias={tvShows} />;
}
