import * as serviceWorker from './serviceWorker';
import { Global } from '@emotion/core';
import ReactDOM from 'react-dom';
import { App } from './App';
import React from 'react';

ReactDOM.render(
	<React.StrictMode>
		<Global
			styles={{
				body: {
					fontFamily:
						'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
					lineHeight: 1.2,
					margin: 0,
					padding: 0,
					background:
						'#fff -webkit-radial-gradient(left bottom, rgba(95, 44, 130, 0.7), rgba(73, 160, 157, 0.7)) repeat fixed 0% 0%',
				},
				a: {
					color: '#000',
				},
				'*, *:before, *:after': {
					boxSizing: 'border-box',
				},
			}}
		/>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
