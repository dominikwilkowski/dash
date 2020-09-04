/** @jsx jsx */

import { useState } from 'react';
import { jsx } from '@emotion/core';

export function Form({ addItem }) {
	const [text, setText] = useState('');

	return (
		<form onSubmit={(event) => addItem(event, text, setText)}>
			<input type="text" value={text} onChange={(event) => setText(event.target.value)} />
			<button type="submit">Save</button>
		</form>
	);
}
