/** @jsx jsx */

import { useState, useEffect } from 'react';
import { jsx } from '@emotion/core';

import { rotation } from '../LoadingBtn';
import { makeRestCall } from '../utils';
import { Wrapper } from '../Wrapper';
import { Trash } from '../trash';
import { Form } from './Form';
import { List } from './List';

export function Shopping({ route = 'shopping', toggle = true, trash = true, sort = true }) {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const syncItems = async () => {
			const data = await makeRestCall(`/${route}`);
			setItems(data);
			setLoading(false);
		};
		syncItems();
		window.addEventListener('focus', syncItems, false);

		return () => window.removeEventListener('focus', syncItems, false);
	}, [route]);

	const addItem = async (event, text, setInput) => {
		event.preventDefault();

		if (text) {
			const data = await makeRestCall(`/add${route}`, { text });
			setItems(data[route]);
			setInput('');
		}
	};

	const toggleItem = async (id) => {
		const data = await makeRestCall(`/toggle${route}`, { id });
		setItems(data[route]);
	};

	const editItem = async (id, text) => {
		const data = await makeRestCall(`/edit${route}`, { id, text });
		setItems(data[route]);
	};

	const removeItem = async (id) => {
		const data = await makeRestCall(`/delete${route}`, { id });
		setItems(data[route]);
	};

	return (
		<Wrapper>
			{trash && <Trash />}
			<h1
				css={{
					fontFamily:
						'"Playfair Display", "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',
					fontStyle: 'italic',
					fontSize: '3.5rem',
					margin: '0 0 1rem 0',
					textAlign: 'center',
					fontWeight: 700,
				}}
			>
				{route.charAt(0).toUpperCase() + route.slice(1)}
			</h1>
			<Form addItem={addItem} />
			{loading ? (
				<div
					css={{
						width: '2rem',
						height: '2rem',
						margin: '2rem auto',
						border: '3px solid #aaa',
						borderTopColor: '#000',
						borderRadius: '100%',
						animation: `${rotation} 0.6s linear infinite`,
					}}
				/>
			) : (
				<List
					items={items}
					removeItem={removeItem}
					toggle={toggle}
					toggleItem={toggleItem}
					editItem={editItem}
					sort={sort}
				/>
			)}
		</Wrapper>
	);
}
