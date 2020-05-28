import React, { createContext, useContext, useCallback, useState } from 'react';

interface Genre {
	id: number;
	name: string;
}

export interface Media {
	id: number;
	unique_id: string;
	type: 'movie' | 'tv';
	title: string;
	year: number;
	poster_path: string;
	genres: Genre[];
}

interface FavoritesContextData {
	toggleFavorite(media: Media): void;
	isFavorite(media: Media): boolean;
	favorites: Media[];
}

const FavoritesContext = createContext<FavoritesContextData>({} as FavoritesContextData);

const FavoritesProvider: React.FC = ({ children }) => {
	const [favorites, setFavorites] = useState<Media[]>(() => {
		const favs = localStorage.getItem('@ProjectNetflix:favorites');
		return favs ? JSON.parse(favs) : [];
	});

	const isFavorite = useCallback(
		(media: Media) => {
			return favorites.some(fav => fav.unique_id === media.unique_id);
		},
		[favorites],
	);

	const toggleFavorite = useCallback(
		(media: Media) => {
			let updatedFavorites: Media[] = [...favorites];

			if (isFavorite(media)) {
				updatedFavorites = favorites.filter(fav => fav.unique_id !== media.unique_id);
			} else {
				updatedFavorites.push(media);
			}

			setFavorites(updatedFavorites);
			localStorage.setItem('@ProjectNetflix:favorites', JSON.stringify(updatedFavorites));
		},
		[favorites, isFavorite],
	);

	return (
		<FavoritesContext.Provider value={{ toggleFavorite, isFavorite, favorites }}>
			{children}
		</FavoritesContext.Provider>
	);
};

function useFavorites(): FavoritesContextData {
	const context = useContext(FavoritesContext);
	if (!context) {
		throw new Error('useFavorites must be used within a FavoritesProvider');
	}
	return context;
}

export { FavoritesProvider, useFavorites };
