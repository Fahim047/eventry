import Image from 'next/image';
const Banner = ({ imageUrl }) => {
	return (
		<div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
			<Image
				src={imageUrl}
				alt="Event 1"
				className="w-full h-full object-cover"
				width={800}
				height={400}
			/>
		</div>
	);
};

export default Banner;
