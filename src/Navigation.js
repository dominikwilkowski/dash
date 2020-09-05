/** @jsx jsx */

import { Link, useLocation } from 'react-router-dom';
import { jsx } from '@emotion/core';

export function Navigation({ nav }) {
	const { pathname } = useLocation();

	if (nav.length === 0) {
		return null;
	} else {
		return (
			<ul
				css={{
					display: 'inline-block',
					listStyle: 'none',
					padding: 0,
					margin: 0,
				}}
			>
				{nav.map(({ name, url }) => (
					<li
						key={url}
						css={{
							display: 'inline-block',
							margin: '0 0.5rem',
						}}
					>
						<Link
							to={url}
							css={{
								display: 'inline-block',
								fontWeight: pathname === url ? 900 : 400,
								padding: '1rem',
								':hover': {
									textDecoration: 'none',
								},
							}}
						>
							{name}
						</Link>
					</li>
				))}
			</ul>
		);
	}
}
