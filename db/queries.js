import { Event } from '@/models/event.models';
import { User } from '@/models/user.models';
import {
	removeMongoDBIdFromArray,
	removeMongoDBIdFromObject,
} from '@/utils/removeMongoDBId';
import mongoose from 'mongoose';

export const getAllEvents = async (query) => {
	let events = [];
	if (query) {
		const regex = new RegExp(query, 'i');
		events = await Event.find({ name: { $regex: regex } }).lean();
	} else {
		events = await Event.find().lean();
	}
	return removeMongoDBIdFromArray(events);
};

export const getEventById = async (id) => {
	const event = await Event.findById(id).lean();
	return removeMongoDBIdFromObject(event);
};

export const createUser = async (user) => {
	const createdUser = await User.create(user);
	return createdUser;
};

export const findUserByCredentials = async (credentials) => {
	const user = await User.findOne(credentials).lean();
	if (user) {
		return removeMongoDBIdFromObject(user);
	}
	return null;
};

export const updateInterestedUsers = async (eventId, userId) => {
	const event = await Event.findById(eventId);
	if (event) {
		const isUserInterested = event.interested_ids.includes(
			new mongoose.Types.ObjectId(userId)
		);
		if (isUserInterested) {
			event.interested_ids.pull(new mongoose.Types.ObjectId(userId));
		} else {
			event.interested_ids.push(new mongoose.Types.ObjectId(userId));
		}
		event.save();
	}
};

export const updateGoingUsers = async (eventId, userId) => {
	const event = await Event.findById(eventId);
	if (event) {
		event.going_ids.push(new mongoose.Types.ObjectId(userId));
		event.save();
	}
};
