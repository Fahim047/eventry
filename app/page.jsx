import EventList from '@/components/landing-page/EventList';
import Header from '@/components/landing-page/Header';

export default function Home() {
	return (
		<section className="container">
			<Header />
			<EventList />
		</section>
	);
}
