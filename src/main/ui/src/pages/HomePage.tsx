import { useState, useEffect } from 'react';
import { IPost } from '../models/Post';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { currentUserState } from '../api/user.service';
import { getCurrentPosts } from '../api/post.service';

const HomePage = () => {
	const [currentUser] = useRecoilState(currentUserState);

	const navigate = useNavigate();

	const [posts, setPosts] = useState<IPost[]>([]);
	const [message, setMessage] = useState('');

	useEffect(() => {
		if (!currentUser.id) {
			navigate('/login', { replace: true });
		}
	}, [navigate, currentUser]);

	useEffect(() => {
		getCurrentPosts().then(
			response => {
				setPosts(response);
				setMessage('');
			},
			error => {
				setMessage(error.message);
			}
		);
	}, []);

	return (
		<div className='flex items-center align-middle'>
			<div className='block mx-auto mt-20 text-center'>
				{message && (
					<p className='text-red-500'>{message} Зарегайся пж</p>
				)}
				{posts.map((post, index) => {
					return (
						<div key={index}>
							<p className='text-2xl font-bold'>{post.title}</p>
							<p>{post.description}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default HomePage;
