
import axios from 'axios';




export const axiosLiferay = axios.create({
	baseURL: '/api/jsonws',
	timeout: 15000,
	auth: {
	    username: 'test@liferay.com',	//'service.user@liferay.com',
	    password: 'test'
	},
	headers: {'Content-Type': 'application/json'}
});



