import Navbar from '@/components/shared/Navbar';
import { connectDB } from '@/db/mongodb';
import AuthProvider from '@/providers/AuthProvider';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata = {
	title: 'Eventry',
	description: 'Event planner platform',
};

export default async function RootLayout({ children }) {
	await connectDB();
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<AuthProvider>
					<Navbar />
					<main className="py-8">{children}</main>
				</AuthProvider>
			</body>
		</html>
	);
}
