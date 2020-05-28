import React from 'react';

import { FavoritesProvider } from './hooks/favorites';
import Routes from './Routes';
import GlobalStyle from './styles';

const App: React.FC = () => (
	<>
		<GlobalStyle />
		<FavoritesProvider>
			<Routes />
		</FavoritesProvider>
	</>
);

export default App;
