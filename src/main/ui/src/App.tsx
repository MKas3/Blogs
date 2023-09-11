import { BrowserRouter, useRoutes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import { RecoilRoot } from 'recoil';

function SiteRoutes() {
	let element = useRoutes([
		{
			path: '/',
			element: <HomePage />,
		},
		{
			path: '/login',
			element: <LoginPage />,
		},
		{
			path: '/register',
			element: <RegisterPage />,
		},
		{
			path: '/profile',
			element: <ProfilePage />,
		},
		{
			path: '/home',
			element: <HomePage />,
		},
	]);

	return element;
}

function App() {
	return (
		<div className='min-h-screen bg-neutral-900 text-neutral-100'>
			<RecoilRoot>
				<BrowserRouter>
					<Header />
					<SiteRoutes />
				</BrowserRouter>
			</RecoilRoot>
		</div>
	);
}

export default App;
