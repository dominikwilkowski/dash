/** @jsx jsx */

import { jsx } from '@emotion/core';

import { EditForm } from './EditForm';
import { AsyncButton } from './AsyncButton';

export function List({ items, removeItem, toggleItem, editItem }) {
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
					<AsyncButton onClick={() => toggleItem(id)}>
						<span role="img" aria-label="Toggle this item">
							✅
						</span>
					</AsyncButton>
					<EditForm handleChange={editItem} text={text} id={id} />
					<AsyncButton onClick={() => removeItem(id)} noLoadingReset>
						<span role="img" aria-label="Delete this item">
							🗑
						</span>
					</AsyncButton>
				</li>
			))}
		</ul>
	);
}
