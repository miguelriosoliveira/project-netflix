import { Header } from '@/components';
import { FavoritesProvider } from '@/hooks';
import { Metadata, Viewport } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
	title: 'Project Netflix',
	description: 'Netflix-inspired media app',
};

export const viewport: Viewport = {
	themeColor: '#E50914',
};

const font = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={font.className}>
			<body className="mt-5 mb-8 mx-14 bg-zinc-900 text-slate-100">
				<Header />
				<FavoritesProvider>
					<main className="mt-8">{children}</main>
				</FavoritesProvider>
			</body>
		</html>
	);
}
