'use client';
import Link from 'next/link';

export const Navbar = () => {
	return (
		<nav className="nav">
			<Link href="/">
				<span>Daily News</span>
			</Link>
		</nav>
	);
};
