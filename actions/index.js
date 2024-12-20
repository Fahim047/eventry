'use server';

import EmailTemplate from '@/components/shared/EmailTemplate';
import {
	createUser,
	findUserByCredentials,
	getEventById,
	updateGoingUsers,
	updateInterestedUsers,
} from '@/db/queries';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Resend } from 'resend';

export const registerUser = async (formData) => {
	const userData = Object.fromEntries(formData);
	const createdUser = await createUser(userData);
	redirect('/login');
};

export const performLogin = async (formData) => {
	try {
		const credentials = {};
		credentials.email = formData.get('email');
		credentials.password = formData.get('password');
		const user = await findUserByCredentials(credentials);
		return user;
	} catch (err) {
		throw new Error(err.message);
	}
};

export const addAndRemoveInterestedUsers = async (eventId, userId) => {
	try {
		await updateInterestedUsers(eventId, userId);
		revalidatePath('/');
	} catch (err) {
		throw new Error(err?.message);
	}
};

export const addGoingUsers = async (eventId, user) => {
	try {
		await updateGoingUsers(eventId, user?.id);
		await sendEmail(eventId, user);
		revalidatePath('/');
		redirect(`/`);
	} catch (err) {
		console.log(err);
		throw err;
	}
};

export const sendEmail = async (eventId, user) => {
	try {
		const event = await getEventById(eventId);
		const resend = new Resend(process.env.RESEND_API_KEY);
		const { data, error } = await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: user?.email,
			subject: 'Event Registration Confirmation',
			react: EmailTemplate({ event, user }),
		});
		if (error) {
			throw new Error(
				typeof error === 'string'
					? error
					: `Email sending failed: ${JSON.stringify(error)}`
			);
		}
		return data;
	} catch (err) {
		console.log(err);
		throw err;
	}
};
