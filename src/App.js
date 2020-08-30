/** @jsx jsx */

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navigation } from './Navigation';
import { Shopping } from './Shopping';
import { jsx } from '@emotion/core';
import { Mort } from './Mort';

export function App() {
	const [remoteNav, setRemoteNav] = useState([]);
	const [user, setUser] = useState(localStorage.getItem('dash-user') || null);
	const [input, setInput] = useState('');
	const [error, setError] = useState('');

	const url =
		process.env.REACT_APP_LOCAL === 'true'
			? 'http://localhost:5556/dash'
			: 'https://dominik-wilkowski.com/dash';

	useEffect(() => {
		if (user) {
			(async function () {
				const response = await fetch(`${url}/navigation`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ user }),
				});
				const data = await response.json();
				setRemoteNav(data);
			})();
		}
	}, [user, url]);

	const supportedComponents = {
		Shopping: <Shopping />,
		Mort: <Mort />,
	};

	const handleLogin = async (event) => {
		event.preventDefault();
		setError('');

		const response = await fetch(`${url}/checkuser`, {
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

	if (!user) {
		return (
			<main>
				<form onSubmit={handleLogin}>
					User:{' '}
					<input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
					<button type="submit">Login</button>
					{error && <span>{error}</span>}
				</form>
			</main>
		);
	} else {
		return (
			<main>
				<h1>Headline</h1>
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
			</main>
		);
	}
}
