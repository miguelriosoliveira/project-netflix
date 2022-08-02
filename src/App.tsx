import React from 'react';

import { FavoritesProvider } from './hooks/favorites';
import AppRoutes from './Routes';
import GlobalStyle from './styles';

const App: React.FC = () => (
	<>
		<GlobalStyle />
		<FavoritesProvider>
			<AppRoutes />
		</FavoritesProvider>
	</>
);

export default App;
