import SearchBox from './SearchBox';

const Header = () => {
	return (
		<div className="flex justify-between">
			<h1 className="font-bold text-3xl">Discover Events</h1>
			<SearchBox />
		</div>
	);
};

export default Header;
