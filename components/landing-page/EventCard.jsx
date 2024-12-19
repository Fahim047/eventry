import CardImage from '@/public/assets/events/google-io-2023-1.png';
import Image from 'next/image';
import Link from 'next/link';
import ActionButtons from '../shared/ActionButtons';

const EventCard = ({ event }) => {
	return (
		<div className="overflow-hidden flex flex-col items-center rounded-md bg-[#242526]">
			<Image
				src={event.imageUrl || CardImage}
				alt="Event 1"
				className="w-full h-[250px] object-cover"
				width={400}
				height={300}
			/>

			<div className="p-3 w-full">
				<div className="flex flex-col">
					<Link href={`/events/${event.id}`} className="font-bold text-lg">
						{event.name}
					</Link>
					<h4 className="text-[#9C9C9C] text-sm mt-1">{event.location}</h4>
					<p className="text-[#737373] text-sm mt-1">
						<span>{event.interested_ids.length} Interested </span>
						<span>| </span>
						<span>{event.going_ids.length} Going</span>
					</p>
				</div>
				<ActionButtons
					eventId={event?.id}
					interestedUserIds={event?.interested_ids}
					goingUserIds={event?.going_ids}
				/>
			</div>
		</div>
	);
};

export default EventCard;
