/** @jsx jsx */

import { jsx } from '@emotion/core';

import { EditForm } from './EditForm';
import { AsyncButton } from './AsyncButton';

export function List({ items, removeItem, toggle, toggleItem, editItem, sort }) {
	const comparator = (a, b) => {
		if (a.isDone !== b.isDone) {
			return a.isDone ? 1 : -1;
		}

		return b.id - a.id;
	};
	const sortedItems = sort ? items.sort(comparator) : items;

	return (
		<ul
			css={{
				listStyle: 'none',
				padding: 0,
				margin: 0,
			}}
		>
			{sortedItems.map(({ id, text, isDone }) => (
				<li
					key={id + text}
					css={{
						textDecoration: isDone ? 'line-through' : 'none',
						display: 'flex',
						opacity: isDone ? 0.3 : 1,
						marginBottom: '0.5rem',
					}}
				>
					{toggle && (
						<AsyncButton onClick={() => toggleItem(id)}>
							<span
								css={{
									position: 'relative',
									display: 'inline-block',
									width: '1.5rem',
									height: '1.5rem',
									border: '3px solid #000',
									textIndent: '-99999rem',
									color: 'transparent',
									borderRadius: '3px',
									':before': {
										content: '""',
										display: isDone ? 'block' : 'none',
										position: 'absolute',
										top: '0',
										left: '4px',
										width: '1.1rem',
										height: '0.55rem',
										borderBottom: '3px solid #000',
										borderLeft: '3px solid #000',
										transform: 'rotate(-45deg)',
										zIndex: 2,
									},
									':after': {
										content: '""',
										display: isDone ? 'block' : 'none',
										position: 'absolute',
										top: '-3px',
										right: '-3px',
										width: '0.5rem',
										height: '0.8rem',
										background: '#fff',
										zIndex: 1,
									},
								}}
							>
								Toggle this item
							</span>
						</AsyncButton>
					)}
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
