import EventList from '@/components/landing-page/EventList';
import Header from '@/components/landing-page/Header';
import Loading from '@/components/landing-page/Loading';
import { Suspense } from 'react';

export default function Home({ searchParams: { query } }) {
	return (
		<section className="container">
			<Header />
			<Suspense key={query} fallback={<Loading />}>
				<EventList query={query} />
			</Suspense>
		</section>
	);
}
