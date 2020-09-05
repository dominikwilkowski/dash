/** @jsx jsx */

import { useState } from 'react';
import { jsx } from '@emotion/core';

export function EditForm({ text: defaultText, id, handleChange, ...rest }) {
	const [editing, setEditing] = useState(false);
	const [text, setText] = useState(defaultText);

	const handleSubmit = async (event) => {
		event.preventDefault();
		await handleChange(id, text);
		setEditing(false);
	};

	if (editing) {
		return (
			<form
				onSubmit={handleSubmit}
				css={{
					flexGrow: 1,
					display: 'flex',
					padding: 0,
					margin: 0,
				}}
			>
				<input
					type="text"
					value={text}
					onChange={(event) => setText(event.target.value)}
					autoFocus
					onBlur={() => setEditing(false)}
					onKeyDown={(event) => (event.keyCode === 27 ? setEditing(false) : null)}
					css={{
						flexGrow: 1,
						fontSize: '1.2rem',
						padding: '0.5rem',
						fontWeight: 500,
						border: '0',
						borderLeft: 'none',
						borderRadius: 0,
						apperance: 'none',
						margin: 0,
						width: 0,
					}}
				/>
				<button
					type="submit"
					css={{
						background: 'transparent',
						border: '1px solid #000',
						borderLeft: 'none',
						apperance: 'none',
						fontSize: '1rem',
						cursor: 'pointer',
						lineHeight: 1,
						margin: 0,
					}}
				>
					Save
				</button>
			</form>
		);
	} else {
		return (
			<div
				onClick={() => setEditing(true)}
				css={{
					display: 'inline-block',
					flexGrow: 1,
					fontSize: '1.2rem',
					padding: '0.5rem',
					fontWeight: 500,
				}}
			>
				{text}
			</div>
		);
	}
}
