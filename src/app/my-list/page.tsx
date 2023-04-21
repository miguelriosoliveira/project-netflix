'use client';

import { MediaList } from '@/components';
import { useFavorites } from '@/hooks';

export default async function Home() {
	const { favorites } = useFavorites();
	return <MediaList medias={favorites} />;
}
