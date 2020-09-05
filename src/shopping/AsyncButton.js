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
		<button
			type="button"
			onClick={handleOnClick}
			disabled={loading}
			css={{
				background: 'transparent',
				border: 'none',
				apperance: 'none',
				fontSize: '1rem',
				cursor: 'pointer',
				lineHeight: 1,
			}}
		>
			{children}
		</button>
	);
}
