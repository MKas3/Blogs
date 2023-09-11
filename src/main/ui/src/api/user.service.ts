import { atom } from 'recoil';
import { IUser } from '../models/User';
import axios from 'axios';

export const currentUserState = atom({
	key: 'currentUser',
	default: {} as IUser,
});

export const getAllUsers = async (user: IUser) => {
	const response = await axios.get('/api/users', {
		params: {
			user: user,
		},
	});
	return response;
};

export const createUser = async (data: IUser) => {
	const response = await axios.post(
		`/api/user`,
		{
			data: data,
		},
		{
			headers: { 'Content-Type': 'application/json' },
		}
	);
	return response.data as IUser;
};
