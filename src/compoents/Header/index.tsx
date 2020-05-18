import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderStyle } from './styles';

const Header: React.FC = () => (
	<HeaderStyle>
		<Link to="/" className="netflix-logo">
			Netflyts
		</Link>

		<Link to="/">Home</Link>
		<Link to="/tv-shows">TV Shows</Link>
		<Link to="/movies">Movies</Link>
		<Link to="/recently-added">Recently Added</Link>
		<Link to="/my-list">My List</Link>
	</HeaderStyle>
);

export default Header;
