'use client';

import { performLogin } from '@/actions';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginForm = () => {
	const [error, setError] = useState('');
	const { setAuth } = useAuth();
	const router = useRouter();
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			const formData = new FormData(e.currentTarget);
			const user = await performLogin(formData);
			if (!user) {
				setError('Invalid credentials!');
				return;
			}
			setAuth(user);
			router.push('/');
		} catch (err) {
			setError(err.message);
		}
	};
	return (
		<form className="login-form" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="email">Email Address</label>
				<input type="email" name="email" id="email" />
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" />
			</div>

			{error && <p className="text-red-500">{error}</p>}

			<button
				type="submit"
				className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
			>
				Login
			</button>
		</form>
	);
};

export default LoginForm;
