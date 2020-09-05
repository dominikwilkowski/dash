/** @jsx jsx */

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { jsx } from '@emotion/core';

import { Navigation } from './Navigation';
import { makeRestCall } from './utils';
import { Shopping } from './shopping';
import { Mort } from './mort';

export function App() {
	const [remoteNav, setRemoteNav] = useState([]);
	const [user, setUser] = useState(localStorage.getItem('dash-user') || null);
	const [loginError, setLoginError] = useState('');
	const [input, setInput] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		if (user) {
			(async function () {
				try {
					const data = await makeRestCall('/navigation');
					setRemoteNav(data);
				} catch (error) {
					setError(error);
				}
			})();
		}
	}, [user]);

	const supportedComponents = {
		Shopping: <Shopping user={user} />,
		Mort: <Mort user={user} />,
	};

	const handleLogin = async (event) => {
		event.preventDefault();
		setLoginError('');

		const data = await makeRestCall('/checkuser', { user: input });

		if (data.user === 'Found') {
			localStorage.setItem('dash-user', input);
			setUser(input);
		} else {
			setLoginError('User could not be found');
		}
	};

	const handleLogout = () => {
		localStorage.setItem('dash-user', '');
		setUser(null);
	};

	return (
		<main>
			{!user ? (
				<form onSubmit={handleLogin}>
					User:{' '}
					<input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
					<button type="submit">Login</button>
					{loginError && <span>{loginError}</span>}
				</form>
			) : (
				<Fragment>
					{error ? (
						<strong
							css={{
								display: 'block',
								maxWidth: '30rem',
								margin: '3rem auto',
								fontSize: '2rem',
							}}
						>
							An error occured trying to reach the server. Please try again later
						</strong>
					) : (
						<Router>
							<nav
								css={{
									display: 'block',
									borderBottom: '3px solid #000',
									margin: '0 0 3rem 0',
									background: '#fff',
								}}
							>
								<Navigation nav={remoteNav} />
								<button
									type="button"
									onClick={handleLogout}
									css={{
										display: 'inline-block',
										float: 'right',
										padding: '1rem',
										background: 'transparent',
										border: 'none',
										apperance: 'none',
										fontSize: '1rem',
										cursor: 'pointer',
									}}
								>
									Logout
								</button>
							</nav>
							<Switch>
								{remoteNav.map(({ name, url }) => (
									<Route exact path={url} key={url}>
										{supportedComponents[name]}
									</Route>
								))}
							</Switch>
						</Router>
					)}
				</Fragment>
			)}
		</main>
	);
}
