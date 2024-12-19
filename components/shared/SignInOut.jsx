'use client';

import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SignInOut = () => {
	const { auth, setAuth } = useAuth();
	const router = useRouter();
	const handleLogout = () => {
		setAuth(null);
		router.push('/login');
	};
	return (
		<>
			{auth ? (
				<>
					<li>{auth?.email}</li>
					<li>
						<button
							className="border-red-600 hover:text-red-600"
							onClick={handleLogout}
						>
							Logout
						</button>
					</li>
				</>
			) : (
				<>
					<li>
						<Link
							href="/login"
							className="px-4 py-2 rounded-md border border-indigo-600 hover:text-indigo-600"
						>
							Login
						</Link>
					</li>
					<li>
						<Link
							href="/register"
							className="px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-800 transition-transform duration-300"
						>
							Register
						</Link>
					</li>
				</>
			)}
		</>
	);
};

export default SignInOut;
