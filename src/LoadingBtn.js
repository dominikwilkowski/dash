/** @jsx jsx */

import { jsx, keyframes } from '@emotion/core';

export const rotation = keyframes({
	to: {
		transform: 'rotate( 360deg )',
	},
});

export function LoadingBtn({ children, loading, ...props }) {
	return (
		<button
			type="submit"
			disabled={loading}
			css={{
				position: 'relative',
				background: 'transparent',
				border: '1px solid #000',
				borderLeft: 'none',
				apperance: 'none',
				fontSize: '1rem',
				cursor: 'pointer',
				lineHeight: 1,
				margin: 0,
				color: loading ? 'transparent' : null,
				':after': {
					content: '""',
					display: loading ? 'block' : 'none',
					position: 'absolute',
					top: '10px',
					left: '50%',
					marginLeft: '-0.75rem',
					width: '1.5rem',
					height: '1.5rem',
					border: '3px solid #aaa',
					borderTopColor: '#000',
					borderRadius: '100%',
					animation: `${rotation} 0.6s linear infinite`,
				},
			}}
			{...props}
		>
			{children}
		</button>
	);
}
