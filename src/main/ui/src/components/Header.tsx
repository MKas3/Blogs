import React, { useState } from 'react';
import NavButton from './NavButton';
import { assetsPath } from '../models/Path';
import { useNavigate } from 'react-router-dom';

function Header() {
	const [headerImgPath] = useState(assetsPath + 'header.png');
	const navigate = useNavigate();

	return (
		<header className='bg-black py-2 sticky top-0 z-50 px-2'>
			<div className='container mx-auto flex justify-between items-center text-lg font-semibold'>
				<button onClick={() => navigate('/', { replace: true })}>
					<img
						className='rounded-lg max-w-[3rem]'
						src={headerImgPath}
						alt='Portfolio'
					/>
				</button>
				<nav>
					<ul className='flex space-x-4'>
						<NavButton href=''>Главная</NavButton>
						<NavButton href='login'>Войти</NavButton>
						<NavButton href='register'>
							Зарегистрироваться
						</NavButton>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
