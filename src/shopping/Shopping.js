/** @jsx jsx */

import { useState, useEffect } from 'react';
import { jsx } from '@emotion/core';

import { URL } from '../utils';
import { Form } from './Form';
import { List } from './List';

export function Shopping({ user }) {
	const [items, setItems] = useState([]);

	useEffect(() => {
		(async function () {
			const response = await fetch(`${URL}/shopping`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ user }),
			});
			const data = await response.json();
			setItems(data);
		})();
	}, [user]);

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
				<Form setItems={setItems} />
				<List items={items} />
			</div>
		</div>
	);
}
