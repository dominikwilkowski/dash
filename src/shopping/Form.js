/** @jsx jsx */

import { jsx } from '@emotion/core';
import { useState } from 'react';

export function Form({ setItems }) {
	const [item, setItem] = useState('');

	return (
		<form>
			<input type="text" value={item} onChange={(event) => setItem(event.target.value)} />
			<button type="submit">Save</button>
		</form>
	);
}
