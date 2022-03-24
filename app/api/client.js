import { create } from 'apisauce';
const liveUrl = 'https://webapi.golfbreaks.com/1.05/api/';
const testUrl = 'https://b-webapi.golfbreaks.com/1.05/api/';

const useTest = true;

const apiClient = create({
	baseURL: useTest ? testUrl : liveUrl
});

export default apiClient;
