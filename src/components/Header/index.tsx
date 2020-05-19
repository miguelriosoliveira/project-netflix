import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderStyle } from './styles';

const Header: React.FC = () => (
	<HeaderStyle>
		<Link to="/" className="logo-mashup">
			<span className="netflix">Netfl</span>
			<span className="yts">Yts</span>
		</Link>

		<nav>
			<Link to="/">Home</Link>
			<Link to="/tv-shows">TV Shows</Link>
			<Link to="/movies">Movies</Link>
			{/* <Link to="/recently-added">Recently Added</Link> */}
			<Link to="/my-list">My List</Link>
		</nav>
	</HeaderStyle>
);

export default Header;
