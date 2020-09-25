/** @jsx jsx */

import differenceInWeeks from 'date-fns/differenceInWeeks';
import { useState, useEffect } from 'react';
import { jsx, Global } from '@emotion/core';
import parseISO from 'date-fns/parseISO';

import { makeRestCall } from '../utils';

export function Trash() {
	const [color, setColor] = useState(
		'#50C9C3 -webkit-radial-gradient(left bottom, #5f2c82, #49a09d) repeat fixed 0% 0%'
	);

	const syncTrash = async () => {
		const data = await makeRestCall('/gettrash');
		const yellowStart = parseISO(data.yellow);

		if (differenceInWeeks(new Date(), yellowStart) % 2 === 1) {
			setColor('#F09819 -webkit-radial-gradient(left bottom, #F09819, #EDDE5D) repeat fixed 0% 0%');
		} else {
			setColor('#3a7bd5 -webkit-radial-gradient(left bottom, #3a7bd5, #00d2ff) repeat fixed 0% 0%');
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
