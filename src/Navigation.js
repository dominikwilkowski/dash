/** @jsx jsx */

import { Link, useLocation } from 'react-router-dom';
import { jsx } from '@emotion/core';

export function Navigation({ nav }) {
	const { pathname } = useLocation();

	if (nav.length === 0) {
		return null;
	} else {
		return (
			<ul>
				{nav.map(({ name, url }) => (
					<li key={url}>
						<Link
							to={url}
							css={{
								textDecoration: pathname === url ? 'underline' : 'none',
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
