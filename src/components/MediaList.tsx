import { Media } from '@/@types';
import { MediaItem } from './MediaItem';

interface Props {
	title?: string;
	className?: string;
	medias: Media[];
}

export function MediaList({ title, medias, className }: Props) {
	return (
		<div className={`${className} grid gap-4`}>
			{title && <h1 className="text-2xl font-bold">{title}</h1>}

			<section className="grid grid-cols-4 gap-4 lg:grid-cols-8 justify-items-center">
				{medias.map(media => {
					return <MediaItem key={media.id} media={media} />;
				})}
			</section>
		</div>
	);
}
