/** @jsx jsx */

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { jsx } from '@emotion/core';

import { Navigation } from './Navigation';
import { Shopping } from './shopping';
import { Mort } from './mort';
import { URL } from './utils';

export function App() {
	const [remoteNav, setRemoteNav] = useState([]);
	const [user, setUser] = useState(localStorage.getItem('dash-user') || null);
	const [input, setInput] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		if (user) {
			(async function () {
				const response = await fetch(`${URL}/navigation`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ user }),
				});
				const data = await response.json();
				setRemoteNav(data);
			})();
		}
	}, [user]);

	const supportedComponents = {
		Shopping: <Shopping user={user} />,
		Mort: <Mort user={user} />,
	};

	const handleLogin = async (event) => {
		event.preventDefault();
		setError('');

		const response = await fetch(`${URL}/checkuser`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ user: input }),
		});
		const data = await response.json();

		if (data.user === 'Found') {
			localStorage.setItem('dash-user', input);
			setUser(input);
		} else {
			setError('User could not be found');
		}
	};

	const handleLogout = () => {
		localStorage.setItem('dash-user', '');
		setUser(null);
	};

	return (
		<main>
			{error ? (
				<form onSubmit={handleLogin}>
					User:{' '}
					<input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
					<button type="submit">Login</button>
					{error && <span>{error}</span>}
				</form>
			) : (
				<Fragment>
					<button type="button" onClick={handleLogout}>
						Logout
					</button>
					<Router>
						<Navigation nav={remoteNav} />
						<Switch>
							{remoteNav.map(({ name, url }) => (
								<Route exact path={url} key={url}>
									{supportedComponents[name]}
								</Route>
							))}
						</Switch>
					</Router>
				</Fragment>
			)}
		</main>
	);
}
