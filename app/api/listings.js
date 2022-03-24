import client from './client';

const endpoint = '/listings';

const getListingsAsync = async () => {
	//client.get(endpoint);
	// dummy data
	await asyncWait(2000);
	return { ok: true, data: listings };
};

const asyncWait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const listings = [
	{
		id: 1,
		title: 'Red Jacket for sale',
		price: 100,
		image:
			'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y'
	},
	{
		id: 2,
		title: 'Couch for sale',
		price: 1000,
		image:
			'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y'
	}
];

export default {
	getListingsAsync,
	listings
};
