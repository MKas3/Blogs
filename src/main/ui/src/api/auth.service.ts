import axios from 'axios';
import { IUser } from '../models/User';
import { apiAuthUrl } from '../models/Path';

export const registerUser = async (
	username: string,
	email: string,
	password: string,
	setCurrentUser: (user: IUser) => void
) => {
	const response = await axios.post(apiAuthUrl + 'signup', {
		username,
		email,
		password,
	});
	setCurrentUser(response.data);
	return response.data;
};

export const loginUser = (
	username: string,
	password: string,
	setCurrentUser: (user: IUser) => void
) => {
	return axios
		.post(apiAuthUrl + 'signin', {
			username,
			password,
		})
		.then(response => {
			if (response.data.username) {
				setCurrentUser(response.data);
			}

			return response.data;
		});
};

export const logoutUser = (setCurrentUser: (user: IUser) => void) => {
	localStorage.removeItem('user');
	return axios.post(apiAuthUrl + 'signout').then(response => {
		setCurrentUser({} as IUser);
		return response.data;
	});
};
