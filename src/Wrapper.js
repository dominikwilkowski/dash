/** @jsx jsx */

import { jsx } from '@emotion/core';

export function Wrapper({ children, ...props }) {
	return (
		<div
			css={{
				maxWidth: '60rem',
				margin: '0 auto',
				padding: '2rem 4vw',
				background: '#fff',
				boxShadow: 'rgba(0, 0, 0, 0.3) 0 0 30px',
				borderTop: '3px solid #000',
				borderBottom: '3px solid #000',
				'@media (min-width: 60rem)': {
					borderRight: '3px solid #000',
					borderLeft: '3px solid #000',
				},
			}}
			{...props}
		>
			{children}
		</div>
	);
}
