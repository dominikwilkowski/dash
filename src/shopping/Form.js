/** @jsx jsx */

import { useState } from 'react';
import { jsx } from '@emotion/core';

import { LoadingBtn } from '../LoadingBtn';

export function Form({ addItem, input, setInput }) {
	const [loading, setLoading] = useState(false);

	const addingItem = async (event, input, setInput) => {
		setLoading(true);
		await addItem(event, input, setInput);
		setLoading(false);
	};

	return (
		<form
			onSubmit={(event) => addingItem(event, input, setInput)}
			css={{
				display: 'flex',
				margin: '2rem 0',
			}}
		>
			<input
				type="text"
				value={input}
				onChange={(event) => setInput(event.target.value)}
				css={{
					padding: '0.5rem 0.75rem',
					fontSize: '1rem',
					flexGrow: 1,
					border: '1px solid #000',
					borderRadius: 0,
					apperance: 'none',
					margin: 0,
					width: 0,
				}}
			/>
			<LoadingBtn
				loading={loading}
				css={{
					padding: '1rem',
				}}
			>
				Save
			</LoadingBtn>
		</form>
	);
}
