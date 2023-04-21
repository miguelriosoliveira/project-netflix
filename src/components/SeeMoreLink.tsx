import Link from 'next/link';
import { FiArrowRightCircle } from 'react-icons/fi';

interface Props {
	href: string;
}

export function SeeMoreLink({ href }: Props) {
	return (
		<Link
			href={href}
			className="flex flex-col items-center self-center gap-1 px-6 py-4 text-sm underline transition rounded-full decoration-transparent bg-zinc-800 w-fit hover:decoration-inherit hover:brightness-125"
		>
			<FiArrowRightCircle size={20} />
			See More...
		</Link>
	);
}
