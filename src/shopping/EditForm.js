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
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={text}
					onChange={(event) => setText(event.target.value)}
					autoFocus
				/>
				<button type="submit">Save</button>
			</form>
		);
	} else {
		return <div onClick={() => setEditing(true)}>{text}</div>;
	}
}
