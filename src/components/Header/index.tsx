import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import tmdbLogo from '../../assets/tmdb-big.svg';

import { HeaderStyle } from './styles';

const Header: React.FC = () => (
	<HeaderStyle>
		<Link to="/" className="logos">
			<span>Netflix</span>
			<FiPlus size={25} />
			<img src={tmdbLogo} alt="TMDB Logo" />
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
