/** @jsx jsx */

import { useState } from 'react';
import { jsx } from '@emotion/core';

import { rotation } from '../LoadingBtn';

export function AsyncButton({ children, onClick, noLoadingReset, ...props }) {
	const [loading, setLoading] = useState(false);

	const handleOnClick = async () => {
		setLoading(true);
		if (onClick) {
			await onClick();
		}

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
				position: 'relative',
				background: 'transparent',
				border: 'none',
				apperance: 'none',
				fontSize: '1rem',
				cursor: 'pointer',
				lineHeight: 1,
				':after': {
					content: '""',
					display: loading ? 'block' : 'none',
					position: 'absolute',
					top: '12px',
					left: '50%',
					marginLeft: '-0.5rem',
					width: '1rem',
					height: '1rem',
					border: '3px solid #aaa',
					borderTopColor: '#000',
					borderRadius: '100%',
					animation: `${rotation} 0.6s linear infinite`,
				},
			}}
			{...props}
		>
			<span css={{ opacity: loading ? 0 : 1 }}>{children}</span>
		</button>
	);
}
