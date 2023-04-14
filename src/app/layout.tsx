import '@styles/styles.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Red_Hat_Display } from 'next/font/google';

import { Navbar } from '@components/common/Navbar';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

export const metadata = {
	title: 'Daily News',
	description: 'Daily News',
};

const RedHatDisplay = Red_Hat_Display({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--red-hat-display',
	display: 'swap',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={RedHatDisplay.className}>
			<body>
					<Navbar />
					<main className="main">{children}</main>
					
			</body>
		</html>
	);
}
