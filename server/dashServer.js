const corsMiddleware = require('restify-cors-middleware');
const errors = require('restify-errors');
const restify = require('restify');
const cfonts = require('cfonts');
const chalk = require('chalk');
const path = require('path');
require('dotenv').config();
const fs = require('fs');

/**
 * Setting global flag for debugging
 *
 * @type {boolean}
 */
const DEBUG = process.argv.includes('debug') ? true : false;

/**
 * The supported users
 *
 * @type {Object}
 */
const USERS = {
	[process.env.USER1]: 'dom',
	[process.env.USER2]: 'walker',
};

/**
 * A function to report back to stdout what's happening
 *
 * @param  {string} text - The text to be logged
 * @param  {string} code - The kind of message, can be: 'report', 'error' or 'interaction'
 * @param  {object} req  - The request object from express
 */
function debug(text, code, req) {
	const ip = req
		? chalk.blueBright(
				` [${(req.headers['x-forwarded-for'] || req.connection.remoteAddress || '')
					.split(',')[0]
					.trim()}]`
		  )
		: '';
	const time = chalk.magentaBright(new Date().toISOString());

	if (code === 'report') {
		console.log(`${chalk.green('\u2713 ')}${ip} ${time} ${text}`);
	} else if (code === 'error') {
		console.error(`${chalk.red('\u2717 ')}${ip} ${time} ${text}`);
	} else if (code === 'interaction') {
		console.log(`${chalk.magenta('\u261C ')}${ip} ${time} ${text}`);
	}
}

/**
 * Getting the top 50 highscore
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function getNavigation(req, res, next) {
	debug('Looking up navigation', 'interaction', req);

	const { user } = req.body;
	if (!USERS[user]) {
		return next(new errors.UnauthorizedError(`The user "${user}" not found`));
	}

	const nav = JSON.parse(
		fs.readFileSync(
			path.normalize(`${__dirname}/db/${USERS[user]}${DEBUG ? '-staging' : ''}.json`),
			{ encoding: 'utf8' }
		)
	);

	res.send(nav.navigation);
	return next();
}

/**
 * Getting version
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function getVersion(req, res, next) {
	debug('Looking up version', 'interaction', req);

	const { version } = require(`./package.json`);
	res.send({ version });
	return next();
}

/**
 * Starting init server
 */
const port = 5556;
const server = restify.createServer({ name: 'Dash-API' });
const cors = corsMiddleware({
	origins: ['http://127.0.0.1:3000', 'http://localhost:3000'],
});

server.use(restify.plugins.bodyParser());
server.pre(cors.preflight);
server.use(cors.actual);

// routes
server.post('/dash/navigation', getNavigation);
server.get('/dash/version', getVersion);

if (process.argv.includes('serve')) {
	server.listen(port, () => {
		console.log('\n\n');

		cfonts.say('Dash', {
			font: 'slick',
			colors: ['#EF0FFF', 'gray'],
			letterSpacing: 0,
			align: 'center',
			space: false,
		});

		if (DEBUG) {
			cfonts.say('debug mode', {
				font: 'chrome',
				colors: ['#EA1C2E', '#FFD520', '#EA1C2E'],
				align: 'center',
				space: false,
			});
		}

		cfonts.say(`${server.name} listening at 127.0.0.1:${port}`, {
			font: 'console',
			colors: ['white'],
			background: 'blue',
			letterSpacing: 0,
			align: 'center',
			space: false,
		});

		debug('Server started', 'report');
	});
}
