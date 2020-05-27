interface Genre {
	id: number;
	name: string;
}

export interface Media {
	id: number;
	type: 'movie' | 'tv-show';
	title: string;
	year: number;
	poster_path: string;
	genres: Genre[];
}
