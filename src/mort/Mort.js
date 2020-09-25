/** @jsx jsx */

import getDaysInMonth from 'date-fns/getDaysInMonth';
import { useState, useEffect } from 'react';
import getMonth from 'date-fns/getMonth';
import getYear from 'date-fns/getYear';
import isAfter from 'date-fns/isAfter';
import format from 'date-fns/format';
import { jsx } from '@emotion/core';

import { rotation } from '../LoadingBtn';
import { makeRestCall } from '../utils';
import { Wrapper } from '../Wrapper';

function Empty() {
	return (
		<div
			css={{
				backgroundImage:
					'linear-gradient(45deg, #ffffff 31.25%, #f2f2f2 31.25%, #f2f2f2 50%, #ffffff 50%, #ffffff 81.25%, #f2f2f2 81.25%, #f2f2f2 100%)',
				backgroundSize: '11.31px 11.31px',
			}}
		/>
	);
}

function Button({ children, size = 'sm', ...props }) {
	const styleMap = {
		sm: {},
		lg: {
			fontSize: '1rem',
		},
	};

	return (
		<button
			{...props}
			css={{
				background: '#fff',
				border: '1px solid #000',
				apperance: 'none',
				cursor: 'pointer',
				padding: '0.25rem',
				lineHeight: 1,
				':disabled': {
					opacity: 0.2,
				},
				...styleMap[size],
			}}
		>
			{children}
		</button>
	);
}

export function Mort() {
	const DAY_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	const [year, setYear] = useState(getYear(new Date()));
	const [month, setMonth] = useState(getMonth(new Date()));
	const [days, setDays] = useState(getDaysInMonth(new Date(year, month)));
	const [loading, setLoading] = useState(true);
	const [db, setDb] = useState({});

	useEffect(() => {
		const getDB = async () => {
			const data = await makeRestCall('/mort');
			setDb(data);
			setLoading(false);
		};
		getDB();
		window.addEventListener('focus', getDB, false);

		return () => window.removeEventListener('focus', getDB, false);
	}, []);

	const addDate = async (date) => {
		setLoading(true);
		const data = await makeRestCall('/addmort', { date });
		setDb(data.mort);
		setLoading(false);
	};

	const deleteDate = async (date) => {
		setLoading(true);
		const data = await makeRestCall('/deletemort', { date });
		setDb(data.mort);
		setLoading(false);
	};

	const changeMonth = (newMonth, newYear = year) => {
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
			<div
				css={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr 1fr',
					gap: '1rem',
				}}
			>
				<Button size="lg" onClick={() => changeMonth(month - 1)}>
					Back a month
				</Button>
				<Button size="lg" onClick={() => changeMonth(getMonth(new Date()), getYear(new Date()))}>
					Today
				</Button>
				<Button size="lg" onClick={() => changeMonth(month + 1)}>
					Forward a month
				</Button>
			</div>
			<h2>
				{format(new Date(year, month, days), 'MMM')} {year}
			</h2>
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
				<div
					css={{
						display: 'grid',
						gridTemplateColumns: 'repeat(7, 1fr)',
						borderTop: '1px solid #888',
						borderBottom: '1px solid #888',
						background: '#888',
						margin: '0 -4vw',
						gap: '1px',
						'@media (min-width: 500px)': {
							margin: '0',
							border: '1px solid #888',
						},
					}}
				>
					{DAY_NAMES.map((day) => (
						<div
							key={day}
							css={{
								background: '#fff',
								padding: '0.5rem',
								textAlign: 'center',
							}}
						>
							{day}
						</div>
					))}
					{Array(DAY_NAMES.indexOf(format(new Date(year, month, 1), 'EEE')))
						.fill()
						.map((_, i) => (
							<Empty key={`non-${i}`} />
						))}
					{Array(days)
						.fill()
						.map((_, day) => {
							const thisDay = new Date(year, month, day + 1);
							const isoDay = format(thisDay, 'yyyy-MM-dd');
							const isFuture = isAfter(new Date(year, month, day), new Date());

							let background = db[isoDay]
								? {
										background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
										color: '#fff',
								  }
								: { background: '#11FFBD' };
							if (isFuture) {
								background = { background: '#fff' };
							}

							return (
								<div
									key={day}
									css={{
										position: 'relative',
										padding: '1.75rem 0.5rem 0.5rem 0.5rem',
										...background,
									}}
								>
									<span
										css={{
											position: 'absolute',
											fontSize: '0.75rem',
											top: 0,
											right: 0,
											margin: '0.5rem 0.5rem 0 0',
										}}
									>
										{format(thisDay, 'd')}
									</span>
									<div
										css={{
											position: 'absolute',
											left: 0,
											right: '1.6rem',
											top: 0,
											display: 'grid',
											gridTemplateColumns: 'repeat(5, 1fr)',
											padding: '0.25rem',
											justifyItems: 'center',
										}}
									>
										{db[isoDay] &&
											Array(db[isoDay])
												.fill()
												.map((_, i) => (
													<span
														key={`dot-${i}`}
														css={{
															display: 'inline-block',
															background: '#fff',
															borderRadius: '100%',
															width: '0.5rem',
															height: '0.5rem',
														}}
													/>
												))}
									</div>

									<Button
										onClick={() => addDate(isoDay)}
										disabled={isFuture}
										css={{
											display: 'block',
											width: '100%',
										}}
									>
										+
									</Button>
									<Button
										onClick={() => deleteDate(isoDay)}
										disabled={isFuture}
										css={{
											display: 'block',
											width: '100%',
											marginTop: '0.5rem',
										}}
									>
										-
									</Button>
								</div>
							);
						})}
					{Array(6 - DAY_NAMES.indexOf(format(new Date(year, month, days), 'EEE')))
						.fill()
						.map((_, i) => (
							<Empty key={`non2-${i}`} />
						))}
				</div>
			)}
		</Wrapper>
	);
}
