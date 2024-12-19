'use client';
import { addAndRemoveInterestedUsers } from '@/actions';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

const ActionButtons = ({
	eventId,
	interestedUserIds,
	goingUserIds,
	isDetailsPage = false,
}) => {
	const { auth } = useAuth();
	const isUserInterested = interestedUserIds.includes(auth?.id);
	const isUserGoing = goingUserIds.includes(auth?.id);
	const [interested, setInterested] = useState(isUserInterested);
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const toggleInterest = async () => {
		if (auth) {
			await addAndRemoveInterestedUsers(eventId, auth.id);
			setInterested((prev) => !prev);
		} else {
			router.push('/login');
		}
	};
	const markAsGoing = () => {
		if (auth) {
			router.push(`/payment/${eventId}`);
		} else {
			router.push('/login');
		}
	};
	return (
		<div className={`w-full flex gap-4 mt-4 ${isDetailsPage && 'flex-1'}`}>
			<button
				className={`w-full ${
					interested && 'bg-indigo-600 hover:bg-indigo-800'
				}`}
				onClick={() => startTransition(() => toggleInterest())}
			>
				Interested
			</button>
			<button
				disabled={isUserGoing}
				className={`w-full ${
					auth && isUserGoing
						? 'bg-green-600 cursor-not-allowed hover:bg-green-600 opacity-50'
						: ''
				}`}
				onClick={markAsGoing}
			>
				Going
			</button>
		</div>
	);
};

export default ActionButtons;
