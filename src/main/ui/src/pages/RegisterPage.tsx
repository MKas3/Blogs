import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import SafeInput from '../components/SafeInput';
import { useRecoilState } from 'recoil';
import { currentUserState } from '../api/user.service';
import { registerUser } from '../api/auth.service';

function RegisterPage() {
	const [_, setCurrentUser] = useRecoilState(currentUserState);
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [successful, setSuccessful] = useState(false);
	const [message, setMessage] = useState('');

	const { register, handleSubmit } = useForm();

	const handleRegister = (data: FieldValues) => {
		setMessage('');
		setSuccessful(false);

		registerUser(username, email, password, setCurrentUser).then(
			response => {
				setMessage(response);
				setSuccessful(true);
			},
			error => {
				const resMessage =
					(error.response &&
						error.response.data &&
						error.response.data.message) ||
					error.message ||
					error.toString();

				setMessage(resMessage);
				setSuccessful(false);
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
					onSubmit={handleSubmit(data => handleRegister(data))}
					className='mt-2 space-y-1'
				>
					<SafeInput
						register={register}
						title='Username'
						minLength={3}
						maxLength={20}
						value={username}
						onChange={value =>
							setUsername(value.currentTarget.value)
						}
					/>

					<SafeInput
						register={register}
						title='Email'
						value={email}
						onChange={value => setEmail(value.currentTarget.value)}
						pattern={/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g}
					/>

					<SafeInput
						register={register}
						title='Password'
						minLength={6}
						maxLength={40}
						value={password}
						onChange={value =>
							setPassword(value.currentTarget.value)
						}
					/>

					<button className='bg-blue-500 rounded-md py-1 px-2 hover:bg-blue-600 transition'>
						Sign Up
					</button>

					{message && (
						<div
							className={
								successful ? 'text-green-500' : 'text-red-500'
							}
						>
							{message}
						</div>
					)}
				</form>
			</div>
		</div>
	);
}

export default RegisterPage;
