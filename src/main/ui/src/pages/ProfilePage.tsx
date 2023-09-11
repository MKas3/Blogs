import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { currentUserState } from '../api/user.service';

const Profile = () => {
	const [currentUser] = useRecoilState(currentUserState);

	const navigate = useNavigate();

	useEffect(() => {
		if (!currentUser.id) {
			navigate('/login');
		}
	}, [navigate, currentUser]);

	return (
		<div className='flex items-center align-middle'>
			<div className='block mx-auto mt-20 text-center'>
				<p>{currentUser.username}</p> Profile
				<p>
					<span className='font-bold'>ID:</span> {currentUser.id}
				</p>
				<p>
					<span className='font-bold'>Email:</span>{' '}
					{currentUser.email}
				</p>
				<p className='font-bold'>Authorities:</p>
				<ul>
					{currentUser.roles &&
						currentUser.roles.map((role: string, index: number) => (
							<li key={index}>{role}</li>
						))}
				</ul>
			</div>
		</div>
	);
};

export default Profile;
