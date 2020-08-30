import * as serviceWorker from './serviceWorker';
import { Global } from '@emotion/core';
import ReactDOM from 'react-dom';
import { App } from './App';
import React from 'react';

ReactDOM.render(
	<React.StrictMode>
		<Global
			styles={{
				'body, html': {
					height: '100%',
					padding: 0,
					margin: 0,
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
