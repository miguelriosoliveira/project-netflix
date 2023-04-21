'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface Props {
	href: string;
	children: ReactNode;
}

export function NavLink({ href, children }: Props) {
	const pathname = usePathname();

	return (
		<Link
			href={href}
			data-is-route={pathname === href}
			className="transition-colors border-b-2 border-transparent hover:border-gray-100 data-[is-route=true]:border-gray-100"
		>
			{children}
		</Link>
	);
}
