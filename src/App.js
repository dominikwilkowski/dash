/** @jsx jsx */

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { jsx } from '@emotion/core';

import { Navigation } from './Navigation';
import { LoadingBtn } from './LoadingBtn';
import { makeRestCall } from './utils';
import { Shopping } from './shopping';
import { Energy } from './energy';
import { Goals } from './goals';
import { Mort } from './mort';
import { Db } from './db';

export function App() {
	const [remoteNav, setRemoteNav] = useState([]);
	const [user, setUser] = useState(localStorage.getItem('dash-user') || null);
	const [version, setVersion] = useState('');
	const [loginError, setLoginError] = useState('');
	const [loading, setLoading] = useState(false);
	const [input, setInput] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		if (user) {
			(async function () {
				try {
					const data = await makeRestCall('/navigation');
					setRemoteNav(data.navigation);
					setVersion(data.version);
				} catch (error) {
					setError(error);
				}
			})();
		}
	}, [user]);

	const supportedComponents = {
		Shopping: (name, path) => <Shopping name={name} path={path} />,
		Energy: (name, path) => <Energy name={name} path={path} />,
		Goals: (name, path) => <Goals name={name} path={path} />,
		Mort: (name, path) => <Mort name={name} path={path} />,
		Db: (name, path) => <Db name={name} path={path} />,
	};

	const handleLogin = async (event) => {
		event.preventDefault();
		if (input) {
			setLoginError('');
			setLoading(true);

			let data;
			try {
				data = await makeRestCall('/checkuser', { user: input });

				if (data.user === 'Found') {
					localStorage.setItem('dash-user', input);
					setUser(input);
				} else {
					setLoginError('User could not be found');
				}
				setLoading(false);
			} catch (error) {
				setLoginError('Unable to connect to the server: ' + error.toString());
				setLoading(false);
			}
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
				<Fragment>
					<h1
						css={{
							fontFamily:
								'"Playfair Display", "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',
							fontStyle: 'italic',
							fontSize: '20vw',
							margin: 0,
							textAlign: 'center',
							fontWeight: 700,
							textShadow: '0 0.5rem 0.5rem #25514F',
						}}
					>
						Dash
					</h1>
					<form
						onSubmit={handleLogin}
						css={{
							maxWidth: '60rem',
							background: '#fff',
							margin: '2rem auto',
							padding: '1rem 0.5rem',
							borderTop: '3px solid #000',
							borderBottom: '3px solid #000',
							boxShadow: 'rgba(0, 0, 0, 0.3) 0 0 30px',
							'@media (min-width: 500px)': {
								padding: '1.5rem',
							},
							'@media (min-width: 60rem)': {
								borderRight: '3px solid #000',
								borderLeft: '3px solid #000',
							},
						}}
					>
						<div css={{ display: 'flex' }}>
							<label
								htmlFor="login"
								css={{
									display: 'inline-block',
									marginRight: '0.5rem',
									fontSize: '1rem',
									alignSelf: 'center',
									whiteSpace: 'nowrap',
									'@media (min-width: 500px)': {
										fontSize: '1.5rem',
									},
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
									margin: 0,
									border: '1px solid #000',
									borderRadius: 0,
									apperance: 'none',
									width: 0,
								}}
							/>
							<LoadingBtn loading={loading}>Login</LoadingBtn>
						</div>
						{loginError && (
							<span
								css={{
									display: 'block',
									marginTop: '0.5rem',
									color: 'red',
								}}
							>
								{loginError}
							</span>
						)}
					</form>
				</Fragment>
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
									position: 'relative',
									display: 'block',
									borderBottom: '3px solid #000',
									margin: '0 0 3rem 0',
									background: '#fff',
								}}
							>
								<Navigation nav={remoteNav} />
							</nav>
							<Switch>
								{remoteNav.map(({ name, url, component }) => (
									<Route exact path={url} key={name + url}>
										{supportedComponents[component](name, url)}
									</Route>
								))}
							</Switch>
						</Router>
					)}
				</Fragment>
			)}
			<div
				css={{
					fontSize: '0.7rem',
					color: '#fff',
					padding: '0.5rem',
					display: 'grid',
					gridTemplateColumns: '1fr 1fr',
				}}
			>
				<div
					css={{
						padding: '1rem',
					}}
				>
					v{version}
				</div>
				<div
					css={{
						textAlign: 'right',
					}}
				>
					<button
						type="button"
						onClick={handleLogout}
						css={{
							padding: '1rem',
							color: '#fff',
							background: 'transparent',
							border: 'none',
							apperance: 'none',
							cursor: 'pointer',
						}}
					>
						Logout
					</button>
				</div>
			</div>
		</main>
	);
}
