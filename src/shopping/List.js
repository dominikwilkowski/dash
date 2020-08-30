/** @jsx jsx */

import { jsx } from '@emotion/core';

export function List({ items }) {
	return (
		<ul>
			{items.map(({ id, text }) => (
				<li key={id}>{text}</li>
			))}
		</ul>
	);
}
