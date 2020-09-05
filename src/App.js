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
		<main
			css={{
				textRendering: 'optimizeLegibility',
				fontKerning: 'auto',
				MozOsxFontSmoothing: 'grayscale',
			}}
		>
			{!user ? (
				<form
					onSubmit={handleLogin}
					css={{
						display: 'flex',
						maxWidth: '60rem',
						background: '#fff',
						margin: '5rem auto',
						padding: '1.5rem',
						border: '3px solid #000',
						boxShadow: 'rgba(0, 0, 0, 0.3) 0 0 30px',
					}}
				>
					<label
						htmlFor="login"
						css={{
							display: 'inline-block',
							marginRight: '0.5rem',
							fontSize: '1.5rem',
							alignSelf: 'center',
						}}
					>
						User login
					</label>
					<input
						id="login"
						type="text"
						value={input}
						onChange={(event) => setInput(event.target.value)}
						css={{
							flexGrow: 1,
							fontSize: '1.5rem',
							padding: '0.5rem',
							border: '1px solid #000',
							borderRadius: 0,
						}}
					/>
					<button
						type="submit"
						css={{
							background: 'transparent',
							border: '1px solid #000',
							borderLeft: 'none',
							apperance: 'none',
							fontSize: '1rem',
							cursor: 'pointer',
							lineHeight: 1,
						}}
					>
						Login
					</button>
					{loginError && <span>{loginError}</span>}
				</form>
			) : (
				<Fragment>
					{error ? (
						<strong
							css={{
								display: 'block',
								padding: '5rem 1rem',
								fontSize: '2rem',
								textAlign: 'center',
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
