import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Movies from './pages/Movies';
import MyList from './pages/MyList';
import RecentlyAdded from './pages/RecentlyAdded';
import TvShows from './pages/TvShows';

const Routes: React.FC = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/tv-shows" component={TvShows} />
			<Route exact path="/movies" component={Movies} />
			<Route exact path="/recently-added" component={RecentlyAdded} />
			<Route exact path="/my-list" component={MyList} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
