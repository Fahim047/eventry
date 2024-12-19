import Banner from '@/components/event-details-page/Banner';
import Details from '@/components/event-details-page/Details';
import EventMap from '@/components/event-details-page/EventMap';
import Overview from '@/components/event-details-page/Overview';
import { getEventById } from '@/db/queries';

const EventDetailsPage = async ({ params: { id } }) => {
	const event = await getEventById(id);
	return (
		<section className="container">
			<Banner imageUrl={event.imageUrl} />
			<Overview event={event} />
			<div className="grid grid-cols-5 gap-12 my-12">
				<div className="col-span-3">
					<Details details={event.details} swags={event.swags} />
				</div>
				<div className="col-span-2">
					<EventMap location={event.location} />
				</div>
			</div>
		</section>
	);
};

export default EventDetailsPage;
