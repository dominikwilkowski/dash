/** @jsx jsx */

import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

export function Navigation() {
	return (
		<ul>
			<li>
				<Link to="/">Shopping</Link>
			</li>
			<li>
				<Link to="/mort">Mort</Link>
			</li>
		</ul>
	);
}
