'use server';

import {
	createUser,
	findUserByCredentials,
	updateGoingUsers,
	updateInterestedUsers,
} from '@/db/queries';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

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
		revalidatePath('/');
		redirect(`/`);
	} catch (err) {
		throw new Error(err?.message);
	}
};
