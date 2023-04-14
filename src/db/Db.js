/** @jsx jsx */

import { useState, useEffect } from 'react';
import { jsx } from '@emotion/core';

import { Wrapper } from '../Wrapper';
import { makeRestCall } from '../utils';
import { LoadingBtn } from '../LoadingBtn';

export function Db() {
	const [db, setDb] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async function () {
			const data = await makeRestCall('/getdb');
			setDb(JSON.stringify(data, null, '\t'));
		})();
	}, []);

	const saveDb = async (event) => {
		event.preventDefault();
		setLoading(true);
		setError('');

		try {
			JSON.parse(db); // testing JSON is valid
			const data = await makeRestCall('/writedb', { content: db });
			setDb(JSON.stringify(data, null, '\t'));
			setLoading(false);
		} catch (error) {
			setError(error.toString());
			setLoading(false);
		}
	};

	return (
		<Wrapper>
			<h1
				css={{
					fontFamily:
						'"Playfair Display", "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',
					fontStyle: 'italic',
					fontSize: '3.5rem',
					margin: '0 0 1rem 0',
					textAlign: 'center',
					fontWeight: 700,
				}}
			>
				Database
			</h1>

			<form onSubmit={saveDb}>
				<textarea
					value={db}
					onChange={(event) => setDb(event.target.value)}
					css={{
						MozTabSize: '2',
						OTabSize: '2',
						tabSize: '2',
						width: '100%',
						height: '30rem',
						apperance: 'none',
						border: error ? '1px solid red' : '1px solid #000',
						padding: '1rem',
					}}
				/>
				{error && (
					<span
						css={{
							display: 'block',
							color: 'red',
							margin: '0.5rem 0',
						}}
					>
						{error}
					</span>
				)}
				<LoadingBtn
					loading={loading}
					css={{
						fontSize: '1.5rem',
						borderLeft: '1px solid #000',
						padding: '0.5rem',
						':after': {
							top: '9px',
						},
					}}
				>
					Save
				</LoadingBtn>
			</form>
		</Wrapper>
	);
}
