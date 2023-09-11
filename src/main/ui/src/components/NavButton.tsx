import React from 'react';
import { useNavigate } from 'react-router-dom';

type NavButtonProps = {
	children?: React.ReactNode;
	href: string;
};

function NavButton({ children, href }: NavButtonProps) {
	const navigate = useNavigate();

	const moveToSection = (
		event: React.MouseEvent<HTMLButtonElement>,
		href: string
	) => {
		let section = document.getElementById(href);
		if (!section) {
			navigate(href, { replace: true });
		} else
			section.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
				inline: 'center',
			});
	};

	return (
		<button
			className='cursor-pointer hover:text-neutral-400'
			onClick={event => moveToSection(event, href)}
		>
			{children}
		</button>
	);
}

export default NavButton;
