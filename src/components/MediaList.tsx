'use client';

import { Media } from '@/@types';
import { MediaItem } from './MediaItem';
import { useFavorites } from '@/hooks';
import { FiTrash } from 'react-icons/fi';

interface Props {
	title?: string;
	className?: string;
	medias: Media[] | 'favorites';
}

export function MediaList({ title, medias: medias_, className }: Props) {
	const { favorites, isFavorite, toggleFavorite, clearFavorites } = useFavorites();
	const medias = medias_ === 'favorites' ? favorites : medias_;

	return (
		<div className={`${className} grid gap-4`}>
			<div className="flex items-center gap-4">
				{title && <h1 className="text-2xl font-bold">{title}</h1>}

				{medias_ === 'favorites' && (
					<button
						type="button"
						className="flex items-center gap-1 px-3 py-2 text-xs transition rounded-full bg-zinc-800 w-fit hover:decoration-inherit hover:bg-red-900/75"
						onClick={clearFavorites}
					>
						<FiTrash size={14} />
						Clear
					</button>
				)}
			</div>

			<section className="grid grid-cols-4 gap-4 lg:grid-cols-8 justify-items-center">
				{medias.map(media => {
					return (
						<MediaItem
							key={media.id}
							media={media}
							isFavorite={isFavorite}
							toggleFavorite={toggleFavorite}
						/>
					);
				})}
			</section>
		</div>
	);
}
