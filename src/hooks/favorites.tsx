'use client';

import { Media } from '@/@types';
import {
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

interface FavoritesContextData {
	favorites: Media[];
	isFavorite(media: Media): boolean;
	toggleFavorite(media: Media): void;
	clearFavorites(): void;
}

const LOCAL_STORAGE_KEY = '@ProjectNetflix:favorites';
const FavoritesContext = createContext<FavoritesContextData>({} as FavoritesContextData);

function FavoritesProvider({ children }: { children: ReactNode }) {
	const [favorites, setFavorites] = useState<Media[]>([]);

	useEffect(() => {
		const favoritesString = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (favoritesString) {
			setFavorites(JSON.parse(favoritesString));
		}
	}, []);

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
				updatedFavorites = updatedFavorites.filter(fav => fav.unique_id !== media.unique_id);
			} else {
				updatedFavorites.push(media);
			}

			setFavorites(updatedFavorites);
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedFavorites));
		},
		[favorites, isFavorite],
	);

	const clearFavorites = useCallback(() => {
		setFavorites([]);
		localStorage.removeItem(LOCAL_STORAGE_KEY);
	}, []);

	const providerValues = useMemo(
		() => ({ favorites, isFavorite, toggleFavorite, clearFavorites }),
		[favorites, isFavorite, toggleFavorite, clearFavorites],
	);

	return <FavoritesContext.Provider value={providerValues}>{children}</FavoritesContext.Provider>;
}

function useFavorites(): FavoritesContextData {
	const context = useContext(FavoritesContext);
	if (!context) {
		throw new Error('useFavorites must be used within a FavoritesProvider');
	}
	return context;
}

export { FavoritesProvider, useFavorites };
