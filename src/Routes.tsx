import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Movies from './pages/Movies';
import MyList from './pages/MyList';
import RecentlyAdded from './pages/RecentlyAdded';
import TvShows from './pages/TvShows';

const AppRoutes: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/tv-shows" element={<TvShows />} />
			<Route path="/movies" element={<Movies />} />
			<Route path="/recently-added" element={<RecentlyAdded />} />
			<Route path="/my-list" element={<MyList />} />
		</Routes>
	</BrowserRouter>
);

export default AppRoutes;
