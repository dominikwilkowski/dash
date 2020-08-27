/** @jsx jsx */

import { Link } from 'react-router-dom';
import { jsx } from '@emotion/core';

export function Navigation({ nav }) {
	if (nav.length === 0) {
		return null;
	} else {
		return (
			<ul>
				{nav.map(({ name, url }) => (
					<li key={url}>
						<Link to={url}>{name}</Link>
					</li>
				))}
			</ul>
		);
	}
}
