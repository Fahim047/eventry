import ActionButtons from '../shared/ActionButtons';

const Overview = ({ event }) => {
	return (
		<div className="flex items-end">
			<div className="flex-auto py-4">
				<h1 className="font-bold text-2xl">Google I/O Extended</h1>
				<p className="text-[#9C9C9C] text-base mt-1">{event.location}</p>
				<div className="text-[#737373] text-sm mt-1">
					<span>{event.interested_ids.length} Interested </span>
					<span>| </span>
					<span>{event.going_ids.length} Going</span>
				</div>
			</div>

			<ActionButtons
				isDetailsPage={true}
				eventId={event?.id}
				interestedUserIds={event?.interested_ids}
				goingUserIds={event?.going_ids}
			/>
		</div>
	);
};

export default Overview;
