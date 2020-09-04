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
	const [input, setInput] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		if (user) {
			(async function () {
				const data = await makeRestCall('/navigation');
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

		const data = await makeRestCall('/checkuser', { user: input });

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
			{!user ? (
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
