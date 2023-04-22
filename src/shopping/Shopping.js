/** @jsx jsx */

import { useState, useEffect, useCallback } from 'react';
import { jsx } from '@emotion/core';

import { LoadingBtn, rotation } from '../LoadingBtn';
import { makeRestCall } from '../utils';
import { Wrapper } from '../Wrapper';
import { Trash } from '../trash';
import { Form } from './Form';
import { List } from './List';

export function Shopping({
	path = 'shopping',
	toggle = true,
	trash = false,
	sort = true,
	name = 'Shopping',
}) {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [reload, setReload] = useState(false);

	path = path.replaceAll('/', '');
	if (path === '') {
		path = 'shopping';
	}

	const syncItems = useCallback(async () => {
		try {
			const data = await makeRestCall(`/${path}`);
			setItems(data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
		}
	}, [setItems, setLoading, path]);

	useEffect(() => {
		syncItems();
		window.addEventListener('focus', syncItems, false);

		return () => window.removeEventListener('focus', syncItems, false);
	}, [syncItems]);

	const reloadState = async () => {
		setReload(true);
		await syncItems();
		setReload(false);
	};

	const addItem = async (event, text, setInput) => {
		event.preventDefault();

		if (text) {
			const data = await makeRestCall(`/add${path}`, { text });
			setItems(data[path]);
			setInput('');
		}
	};

	const toggleItem = async (id) => {
		const data = await makeRestCall(`/toggle${path}`, { id });
		setItems(data[path]);
	};

	const editItem = async (id, text) => {
		const data = await makeRestCall(`/edit${path}`, { id, text });
		setItems(data[path]);
	};

	const removeItem = async (id) => {
		const data = await makeRestCall(`/delete${path}`, { id });
		setItems(data[path]);
	};

	return (
		<Wrapper>
			{trash && <Trash />}
			<div
				css={{
					position: 'relative',
				}}
			>
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
					{name}
				</h1>
				<LoadingBtn
					loading={reload}
					css={{
						padding: '0.3rem',
						borderLeft: '1px solid #000',
						position: 'absolute',
						top: 0,
						right: 0,
						borderRadius: '5px',
						fontSize: '0.7rem',
						':after': {
							top: '4px',
							marginLeft: '-0.45rem',
							width: '.9rem',
							height: '.9rem',
						},
					}}
					onClick={reloadState}
				>
					refresh
				</LoadingBtn>
			</div>
			<Form addItem={addItem} />
			{loading ? (
				<div
					css={{
						width: '2rem',
						height: '2rem',
						margin: '2rem auto',
						border: '3px solid #aaa',
						borderTopColor: '#000',
						borderRadius: '100%',
						animation: `${rotation} 0.6s linear infinite`,
					}}
				/>
			) : (
				<List
					items={items}
					removeItem={removeItem}
					toggle={toggle}
					toggleItem={toggleItem}
					editItem={editItem}
					sort={sort}
				/>
			)}
		</Wrapper>
	);
}
