/** @jsx jsx */

import { Fragment, useState } from 'react';
import { jsx } from '@emotion/core';

import { LoadingBtn } from '../LoadingBtn';

export function EditForm({ text: defaultText, id, handleChange, ...props }) {
	const [loading, setLoading] = useState(false);
	const [editing, setEditing] = useState(false);
	const [text, setText] = useState(defaultText);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		await handleChange(id, text);
		setEditing(false);
		setLoading(false);
	};

	if (editing) {
		return (
			<Fragment>
				<form
					onSubmit={handleSubmit}
					css={{
						position: 'relative',
						flexGrow: 1,
						display: 'flex',
						padding: 0,
						margin: 0,
						zIndex: 2,
					}}
					{...props}
				>
					<input
						type="text"
						value={text}
						onChange={(event) => setText(event.target.value)}
						autoFocus
						onKeyDown={(event) => (event.keyCode === 27 ? setEditing(false) : null)}
						css={{
							flexGrow: 1,
							fontSize: '1.2rem',
							padding: '0.5rem',
							fontWeight: 500,
							border: '1px solid #000',
							borderRadius: 0,
							apperance: 'none',
							margin: 0,
							width: 0,
						}}
					/>
					<LoadingBtn loading={loading}>Save</LoadingBtn>
				</form>
				<div
					onClick={() => {
						setText(defaultText);
						setEditing(false);
					}}
					css={{
						position: 'fixed',
						top: 0,
						right: 0,
						bottom: 0,
						left: 0,
						background: 'transparent',
						zIndex: 1,
					}}
				/>
			</Fragment>
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
