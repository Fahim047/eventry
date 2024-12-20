import EventList from '@/components/landing-page/EventList';
import Header from '@/components/landing-page/Header';

export default function Home({ searchParams: { query } }) {
	return (
		<section className="container">
			<Header />
			<EventList query={query} />
		</section>
	);
}
