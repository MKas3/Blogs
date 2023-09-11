import axios from 'axios';
import { IPost } from '../models/Post';
import { apiUserUrl } from '../models/Path';

export const getCurrentPosts = async () => {
	return (await axios.get(apiUserUrl + 'posts')).data as IPost[];
};
