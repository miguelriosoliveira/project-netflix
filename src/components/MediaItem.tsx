'use client';

import Image from 'next/image';
import { Media } from '@/@types';
import { useFavorites } from '@/hooks';
import { useCallback } from 'react';
import { FiCheckCircle, FiPlusCircle } from 'react-icons/fi';

interface Props {
	media: Media;
}

export function MediaItem({ media }: Props) {
	const { toggleFavorite, isFavorite } = useFavorites();

	const handleToggleFavorite = useCallback(
		(media: Media) => {
			toggleFavorite(media);
		},
		[toggleFavorite],
	);

	const hoverTitle =
		media.title === media.original_title
			? media.title
			: `${media.title} (Original title: ${media.original_title})`;
	const Icon = isFavorite(media) ? FiCheckCircle : FiPlusCircle;
	const genres = media.genres.map(genre => genre.name).join(' / ');

	return (
		<div className="w-44">
			<figure data-error={!media.poster_path} className="relative h-64 mb-1 group">
				<Image
					src={media.poster_path}
					fill
					sizes="(max-width: 768px) 100vw,
								 (max-width: 1200px) 50vw,
								 33vw"
					alt={media.title}
					title={hoverTitle}
					className="object-cover transition-transform rounded-lg cursor-pointer group-hover:scale-110 group-hover:border-2"
				/>
				<button
					type="button"
					onClick={() => handleToggleFavorite(media)}
					className="absolute invisible transition-all rounded-full group-hover:visible top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 hover:scale-125 hover:bg-black/60 bg-black/25 hover:rounded-full"
				>
					<Icon size={40} />
				</button>
			</figure>

			<strong
				title={hoverTitle}
				className="block truncate transition-colors hover:cursor-pointer hover:text-gray-400"
			>
				{media.title}
			</strong>

			<span title={genres} className="block text-xs text-gray-400 truncate">
				{`${media.year} • ${genres}`}
			</span>
		</div>
	);
}
