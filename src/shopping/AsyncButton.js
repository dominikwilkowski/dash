/** @jsx jsx */

import { useState } from 'react';
import { jsx } from '@emotion/core';

export function AsyncButton({ children, onClick, noLoadingReset, ...rest }) {
	const [loading, setLoading] = useState(false);

	const handleOnClick = async () => {
		setLoading(true);
		await onClick();
		if (!noLoadingReset) {
			setLoading(false);
		}
	};

	return (
		<button type="button" onClick={handleOnClick} disabled={loading}>
			{children}
		</button>
	);
}
