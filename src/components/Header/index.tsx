import { Bebas_Neue } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';
import TmdbLogo from '../../../public/tmdb-big.svg';
import { NavLink } from './NavLink';

const bebasNeue = Bebas_Neue({
	weight: '400',
	display: 'swap',
	subsets: ['latin'],
});

export function Header() {
	return (
		<header className="flex items-center">
			<Link href="/" className="flex items-baseline mr-8">
				<span className={`${bebasNeue.className} text-red-600 text-4xl`}>Netflix</span>
				<FiPlus size={25} />
				<Image src={TmdbLogo} width={190} alt="TMDB Logo" />
			</Link>

			<nav className="flex gap-5 font-medium">
				<NavLink href="/">Home</NavLink>
				<NavLink href="/tv-shows">TV Shows</NavLink>
				<NavLink href="/movies">Movies</NavLink>
				<NavLink href="/my-list">My List</NavLink>
			</nav>
		</header>
	);
}
