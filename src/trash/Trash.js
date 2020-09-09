/** @jsx jsx */

import differenceInWeeks from 'date-fns/differenceInWeeks';
import { useState, useEffect } from 'react';
import { jsx, Global } from '@emotion/core';
import parseISO from 'date-fns/parseISO';

import { makeRestCall } from '../utils';

export function Trash() {
	const [color, setColor] = useState('lightseagreen');

	const syncTrash = async () => {
		const data = await makeRestCall('/gettrash');
		const yellowStart = parseISO(data.yellow);

		if (differenceInWeeks(new Date(), yellowStart) % 2 === 1) {
			setColor('yellow');
		} else {
			setColor('SkyBlue');
		}
	};

	useEffect(() => {
		syncTrash();

		window.addEventListener('focus', syncTrash, false);

		return () => window.removeEventListener('focus', syncTrash, false);
	}, []);

	return (
		<Global
			styles={{
				body: {
					background: color,
				},
			}}
		/>
	);
}
