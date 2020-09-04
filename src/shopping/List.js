/** @jsx jsx */

import { jsx } from '@emotion/core';

export function List({ items, removeItem, toggleItem }) {
	const comparator = (a, b) => {
		if (a.isDone !== b.isDone) {
			return a.isDone ? 1 : -1;
		}

		return b.id - a.id;
	};

	return (
		<ul>
			{items.sort(comparator).map(({ id, text, isDone }) => (
				<li
					key={id}
					css={{
						textDecoration: isDone ? 'line-through' : 'none',
					}}
				>
					<button type="button" onClick={() => toggleItem(id)}>
						<span role="img" aria-label="Toggle this item">
							✅
						</span>
					</button>
					{text}
					<button type="button" onClick={() => removeItem(id)}>
						<span role="img" aria-label="Delete this item">
							🗑
						</span>
					</button>
				</li>
			))}
		</ul>
	);
}
