/** @jsx jsx */

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navigation } from './Navigation';
import { Shopping } from './Shopping';
import { jsx } from '@emotion/core';
import { Mort } from './Mort';

export function App() {
	const [remoteNav, setRemoteNav] = useState([]);

	useEffect(() => {
		(async function () {
			const options = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ user: process.env.REACT_APP_USER }),
			};

			const url =
				process.env.REACT_APP_LOCAL === 'true'
					? 'http://localhost:5556/dash/navigation'
					: 'https://dominik-wilkowski.com/dash/navigation';

			const response = await fetch(url, options);
			const data = await response.json();
			setRemoteNav(data);
		})();
	}, []);

	const supportedComponents = {
		Shopping: <Shopping />,
		Mort: <Mort />,
	};

	return (
		<main>
			<h1>Headline</h1>
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
