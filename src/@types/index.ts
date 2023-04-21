export interface Genre {
	id: number;
	name: string;
}

export interface Media {
	id: number;
	unique_id: string;
	type: 'movie' | 'tv';
	title: string;
	original_title: string;
	year: number;
	popularity: number;
	poster_path: string;
	genres: Genre[];
}

export interface TvShow extends Media {
	name: string;
	original_name: string;
	first_air_date: string;
}

export interface Movie extends Media {
	release_date: string;
}

export interface MediaRequest<T> {
	results: T[];
}
