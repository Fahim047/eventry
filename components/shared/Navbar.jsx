import LWSLogo from '@/public/assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import SignInOut from './SignInOut';
const Navbar = () => {
	return (
		<nav>
			<div className="container flex justify-between items-center py-4">
				<div className="nav-brand">
					<Link href="/">
						<Image src={LWSLogo} alt="Eventry" className="w-fit" />
					</Link>
				</div>

				<ul className="flex items-center gap-4 text-[#9C9C9C]">
					<li>About</li>
					<li>Contact Us</li>
					<SignInOut />
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
