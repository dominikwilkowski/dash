/** @jsx jsx */

import { useState, useEffect } from 'react';
import { jsx } from '@emotion/core';

import { makeRestCall } from '../utils';
import { Form } from './Form';
import { List } from './List';

export function Shopping({ user }) {
	const [items, setItems] = useState([]);

	useEffect(() => {
		(async function () {
			const data = await makeRestCall('/shopping');
			setItems(data);
		})();
	}, [user]);

	const addItem = async (event, text, setInput) => {
		event.preventDefault();

		const data = await makeRestCall('/addshopping', { text });
		setItems(data.shopping);
		setInput('');
	};

	const toggleItem = async (id) => {
		const data = await makeRestCall('/toggleshopping', { id });
		setItems(data.shopping);
	};

	const editItem = async (id, text) => {
		const data = await makeRestCall('/editshopping', { id, text });
		setItems(data.shopping);
	};

	const removeItem = async (id) => {
		const data = await makeRestCall('/deleteshopping', { id });
		setItems(data.shopping);
	};

	return (
		<div
			css={{
				maxWidth: '60rem',
				margin: '0 auto',
				padding: '2rem 4vw',
				background: '#fff',
				boxShadow: 'rgba(0, 0, 0, 0.3) 0 0 30px',
				borderTop: '3px solid #000',
				borderBottom: '3px solid #000',
				'@media (min-width: 60rem)': {
					borderRight: '3px solid #000',
					borderLeft: '3px solid #000',
				},
			}}
		>
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
				Shopping
			</h1>
			<Form addItem={addItem} />
			<List items={items} removeItem={removeItem} toggleItem={toggleItem} editItem={editItem} />
		</div>
	);
}
