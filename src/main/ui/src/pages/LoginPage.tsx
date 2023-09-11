import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import SafeInput from '../components/SafeInput';
import { loginUser } from '../api/auth.service';
import { useRecoilState } from 'recoil';
import { currentUserState } from '../api/user.service';

function LoginPage() {
	const [_, setCurrentUser] = useRecoilState(currentUserState);

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');

	const { register, handleSubmit } = useForm();

	const navigate = useNavigate();

	const handleLogin = (data: FieldValues) => {
		setMessage('');

		loginUser(username, password, setCurrentUser).then(
			() => {
				navigate('/profile');
			},
			error => {
				const resMessage =
					(error.response &&
						error.response.data &&
						error.response.data.message) ||
					error.message ||
					error.toString();

				setMessage(resMessage);
			}
		);
	};

	return (
		<div className='flex items-center align-middle'>
			<div className='block mx-auto mt-20 text-center'>
				<img
					src='//ssl.gstatic.com/accounts/ui/avatar_2x.png'
					alt='profile-img'
					className='rounded mx-auto'
				/>

				<form
					className='mt-2 space-y-1'
					onSubmit={handleSubmit(data => handleLogin(data))}
				>
					<SafeInput
						register={register}
						title='Username'
						value={username}
						onChange={value =>
							setUsername(value.currentTarget.value)
						}
						minLength={3}
						maxLength={20}
					/>

					<SafeInput
						register={register}
						title='Password'
						value={password}
						onChange={value =>
							setPassword(value.currentTarget.value)
						}
						minLength={6}
						maxLength={40}
					/>

					<button className='bg-blue-500 rounded-md py-1 px-2 hover:bg-blue-600 transition'>
						<span>Login</span>
					</button>

					{message && <div className='text-red-500'>{message}</div>}
				</form>
			</div>
		</div>
	);
}

export default LoginPage;
