import React from 'react';

import Header from '../../components/Header';
import MediaList from '../../components/MediaList';
import { useFavorites } from '../../hooks/favorites';

const MyList: React.FC = () => {
	const { favorites } = useFavorites();
	return (
		<>
			<Header />
			<main>
				<MediaList medias={favorites} />
			</main>
		</>
	);
};

export default MyList;
