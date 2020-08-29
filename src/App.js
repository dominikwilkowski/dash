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

	useEffect(() => {
		if (user) {
			(async function () {
				const options = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ user }),
				};

				const url =
					process.env.REACT_APP_LOCAL === 'true'
						? 'http://localhost:5556/dash/navigation'
						: 'https://dominik-wilkowski.com/dash/navigation';

				const response = await fetch(url, options);
				const data = await response.json();
				setRemoteNav(data);
			})();
		}
	}, [user]);

	const supportedComponents = {
		Shopping: <Shopping />,
		Mort: <Mort />,
	};

	const handleLogin = async (event) => {
		event.preventDefault();
		// TODO verify user
		localStorage.setItem('dash-user', input);
		setUser(input);
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
