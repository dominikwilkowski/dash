/** @jsx jsx */

import getDaysInMonth from 'date-fns/getDaysInMonth';
import getMonth from 'date-fns/getMonth';
import getYear from 'date-fns/getYear';
import format from 'date-fns/format';
import { jsx } from '@emotion/core';
import { useState } from 'react';

import { Wrapper } from '../Wrapper';

export function Mort() {
	const DAY_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	const [year, setYear] = useState(getYear(new Date()));
	const [month, setMonth] = useState(getMonth(new Date()));
	const [days, setDays] = useState(getDaysInMonth(new Date(year, month)));

	const changeMonth = (newMonth) => {
		let newYear = year;

		if (newMonth < 1) {
			newMonth = 12;
			newYear--;
		}
		if (newMonth > 12) {
			newMonth = 1;
			newYear++;
		}

		setYear(newYear);
		setMonth(newMonth);
		setDays(getDaysInMonth(new Date(newYear, newMonth)));
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
				Mort
			</h1>
			<button onClick={() => changeMonth(month - 1)}>Back a month</button>
			<button onClick={() => changeMonth(getMonth(new Date()))}>Today</button>
			<button onClick={() => changeMonth(month + 1)}>Forward a month</button>
			<h2>
				{format(new Date(year, month, days), 'MMM')} {year}
			</h2>
			<div
				css={{
					display: 'grid',
					gridTemplateColumns: 'repeat(7, 1fr)',
					border: '1px solid #000',
					background: '#000',
					gap: '1px',
				}}
			>
				{DAY_NAMES.map((day) => (
					<div
						key={day}
						css={{
							background: '#fff',
						}}
					>
						{day}
					</div>
				))}
				{Array(DAY_NAMES.indexOf(format(new Date(year, month, 1), 'EEE')))
					.fill()
					.map((_, i) => (
						<div
							key={`non-${i}`}
							css={{
								background: '#ccc',
							}}
						/>
					))}
				{Array(days)
					.fill()
					.map((_, day) => (
						<div
							key={day}
							css={{
								background: '#fff',
							}}
						>
							{format(new Date(year, month, day + 1), 'd')}
						</div>
					))}
				{Array(6 - DAY_NAMES.indexOf(format(new Date(year, month, days), 'EEE')))
					.fill()
					.map((_, i) => (
						<div
							key={`non2-${i}`}
							css={{
								background: '#ccc',
							}}
						/>
					))}
			</div>
		</Wrapper>
	);
}
