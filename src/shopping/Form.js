/** @jsx jsx */

import { useState } from 'react';
import { jsx } from '@emotion/core';

export function Form({ addItem }) {
	const [text, setText] = useState('');

	return (
		<form
			onSubmit={(event) => addItem(event, text, setText)}
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
				}}
			/>
			<button
				type="submit"
				css={{
					padding: '1rem',
					background: 'transparent',
					border: '1px solid #000',
					borderLeft: 'none',
					apperance: 'none',
					fontSize: '1rem',
					cursor: 'pointer',
				}}
			>
				Save
			</button>
		</form>
	);
}
