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

	const removeItem = async (id) => {
		const data = await makeRestCall('/deleteshopping', { id });
		setItems(data.shopping);
	};

	const toggleItem = async (id) => {
		const data = await makeRestCall('/toggleshopping', { id });
		setItems(data.shopping);
	};

	return (
		<div
			css={{
				display: 'grid',
				margin: 'auto',
			}}
		>
			<div
				css={{
					margin: 'auto',
				}}
			>
				<Form addItem={addItem} />
				<List items={items} removeItem={removeItem} toggleItem={toggleItem} />
			</div>
		</div>
	);
}
