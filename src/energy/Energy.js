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
			css={{
				background: '#fff',
				border: '1px solid #000',
				apperance: 'none',
				cursor: 'pointer',
				padding: '0.25rem',
				lineHeight: 1,
				':disabled': {
					opacity: 0,
					cursor: 'default',
				},
				...styleMap[size],
			}}
			{...props}
		>
			{children}
		</button>
	);
}

export function Energy() {
	const DAY_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	const [year, setYear] = useState(getYear(new Date()));
	const [month, setMonth] = useState(getMonth(new Date()));
	const [days, setDays] = useState(getDaysInMonth(new Date(year, month)));
	const [loading, setLoading] = useState(true);
	const [db, setDb] = useState([]);

	useEffect(() => {
		const getDB = async () => {
			const data = await makeRestCall('/energy');
			setDb(data);
			setLoading(false);
		};
		getDB();
		window.addEventListener('focus', getDB, false);

		return () => window.removeEventListener('focus', getDB, false);
	}, []);

	const addDate = async (date) => {
		setLoading(true);
		const data = await makeRestCall('/addenergy', { date });
		setDb(data.energy);
		setLoading(false);
	};

	const deleteDate = async (date) => {
		setLoading(true);
		const data = await makeRestCall('/deleteenergy', { date });
		setDb(data.energy);
		setLoading(false);
	};

	const changeMonth = (newMonth, newYear = year) => {
		if (newMonth < 0) {
			newMonth = 11;
			newYear--;
		}
		if (newMonth > 11) {
			newMonth = 0;
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
				Energy
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
			<div
				css={{
					position: 'relative',
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
					':before': {
						content: '""',
						display: loading ? 'block' : 'none',
						position: 'absolute',
						top: 0,
						right: 0,
						bottom: 0,
						left: 0,
						background: 'rgba(0, 0, 0, 0.4)',
						zIndex: 2,
					},
					':after': {
						content: '""',
						display: loading ? 'block' : 'none',
						position: 'absolute',
						top: '50%',
						left: '50%',
						width: '4rem',
						height: '4rem',
						margin: '-2rem 0 0 -2rem',
						border: '6px solid #fff',
						borderTopColor: '#555',
						borderRadius: '100%',
						animation: `${rotation} 0.6s linear infinite`,
						zIndex: 3,
					},
					'@supports not (display: grid)': {
						overflow: 'hidden',
						display: 'block',
						'& > div': {
							float: 'left',
							width: '14.2857142857%',
							height: '86px',
							border: '1px solid #888',
						},
						'& .header': {
							height: '35px',
						},
						'& div:nth-child(7n + 1)': {
							clear: 'left',
						},
					},
				}}
			>
				{DAY_NAMES.map((day) => (
					<div
						className="header"
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
						const isFuture = isAfter(thisDay, new Date());

						let background = db.includes(isoDay)
							? { background: 'linear-gradient(to right, #00f76b, #11ffbd)' }
							: {
									background: '#fff',
									backgroundImage:
										'linear-gradient(45deg, #ffffff 31.25%, #aaa 31.25%, #aaa 50%, #ffffff 50%, #ffffff 81.25%, #aaa 81.25%, #aaa 100%)',
									backgroundSize: '11.31px 11.31px',
							  };
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
										margin: '0',
										background: '#fff',
										padding: '0.25rem 0.5rem',
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
										borderColor: 'transparent',
									}}
								>
									<span role="img" aria-label="Tick">
										✔️
									</span>
								</Button>
								<Button
									onClick={() => deleteDate(isoDay)}
									disabled={isFuture}
									css={{
										marginTop: '0.5rem',
										float: 'right',
										borderColor: 'transparent',
									}}
								>
									🅧
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
		</Wrapper>
	);
}
