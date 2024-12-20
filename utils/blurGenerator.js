import { getPlaiceholder } from 'plaiceholder';

export const generateBlur = async (imgSrc) => {
	const buffer = await fetch(imgSrc).then(async (res) =>
		Buffer.from(await res.arrayBuffer())
	);
	const blurImage = await getPlaiceholder(buffer);
	return blurImage;
};
