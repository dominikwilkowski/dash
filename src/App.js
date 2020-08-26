/** @jsx jsx */

import { Mort } from './Mort';
import { jsx } from '@emotion/core';
import { Shopping } from './Shopping';
import { Navigation } from './Navigation';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

export function App() {
	return (
		<main>
			<h1>Headline</h1>
			<Router>
				<Navigation />
				<Switch>
					<Route exact path="/">
						<Shopping />
					</Route>
					<Route exact path="/mort">
						<Mort />
					</Route>
				</Switch>
			</Router>
		</main>
	);
}
