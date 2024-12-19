import mongoose from 'mongoose';

export const connectDB = async () => {
	try {
		const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
		if (connectionInstance) console.log('Connected to MongoDB');
		return connectionInstance;
	} catch (err) {
		console.error(err.message);
	}
};
