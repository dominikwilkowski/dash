/** @jsx jsx */

import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Fragment, useState, useEffect, forwardRef } from 'react';
import { jsx } from '@emotion/core';

import { EditForm } from './EditForm';
import { AsyncButton } from './AsyncButton';

const Item = forwardRef(function Item(
	{ toggle, toggleItem, removeItem, id, isDone, editItem, text, ...rest },
	ref
) {
	return (
		<li
			css={{
				textDecoration: isDone ? 'line-through' : 'none',
				display: 'flex',
				opacity: isDone ? 0.3 : 1,
				marginBottom: '0.5rem',
			}}
			ref={ref}
			{...rest}
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
						Mark this item as{isDone ? ' not done' : ' done'}
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
	);
});

export function List({ items, removeItem, toggle, toggleItem, editItem, sort, loading }) {
	const [undoneItems, setUndoneItems] = useState([]);
	const [doneItems, setDoneItems] = useState([]);

	useEffect(() => {
		const sortedItems = sort ? items.sort(comparator) : items;
		setUndoneItems(sortedItems.filter(({ isDone }) => !isDone));
		setDoneItems(sortedItems.filter(({ isDone }) => isDone));
	}, [items, sort]);

	if (!Array.isArray(items)) {
		return null;
	}

	const comparator = (a, b) => {
		if (a.isDone !== b.isDone) {
			return a.isDone ? 1 : -1;
		} else if (a.isDone && b.isDone) {
			return a.text.localeCompare(b.text);
		}

		return b.id - a.id;
	};

	return (
		<Fragment>
			<Droppable droppableId="droppable">
				{(provided, snapshot) => (
					<ul
						{...provided.droppableProps}
						ref={provided.innerRef}
						css={{
							listStyle: 'none',
							padding: 0,
							margin: 0,
						}}
					>
						{undoneItems.map(({ id, text, isDone }, index) => (
							<Draggable
								key={id + text}
								draggableId={id + text}
								index={index}
								isDragDisabled={isDone}
							>
								{(provided, snapshot) => (
									<Item
										toggle={toggle}
										toggleItem={toggleItem}
										removeItem={removeItem}
										id={id}
										isDone={isDone}
										editItem={editItem}
										text={text}
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
									/>
								)}
							</Draggable>
						))}
						{provided.placeholder}
					</ul>
				)}
			</Droppable>
			<ul
				css={{
					listStyle: 'none',
					padding: 0,
					margin: undoneItems.length > 0 || doneItems.length > 0 ? '0 0 -4rem' : 0,
				}}
			>
				{doneItems.map(({ id, text, isDone }, index) => (
					<Item
						key={id + text}
						toggle={toggle}
						toggleItem={toggleItem}
						removeItem={removeItem}
						id={id}
						isDone={isDone}
						editItem={editItem}
						text={text}
					/>
				))}
			</ul>
		</Fragment>
	);
}
