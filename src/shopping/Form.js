/** @jsx jsx */

import { useState } from 'react';
import { jsx } from '@emotion/core';

import { LoadingBtn } from '../LoadingBtn';

export function Form({ addItem }) {
	const [loading, setLoading] = useState(false);
	const [text, setText] = useState('');

	const addingItem = async (event, text, setText) => {
		setLoading(true);
		await addItem(event, text, setText);
		setLoading(false);
	};

	return (
		<form
			onSubmit={(event) => addingItem(event, text, setText)}
			css={{
				display: 'flex',
				margin: '2rem 0',
			}}
		>
			<input
				type="text"
				value={text}
				onChange={(event) => setText(event.target.value)}
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
