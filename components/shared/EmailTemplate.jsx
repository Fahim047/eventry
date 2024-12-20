const EmailTemplate = ({ event, user }) => {
	const message = `Congratulations, ${user?.name}! You have successfully booked a sit for the upcoming event "${event.title}". Thank you for your interest in this event. We look forward to seeing you there!`;
	return (
		<div>
			<p className="text-2xl">{message}</p>
		</div>
	);
};

export default EmailTemplate;
