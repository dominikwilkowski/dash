require('dotenv').config();
const cfonts = require('cfonts');
const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');

const { DEBUG, debug } = require('./utils.js');
const { checkUser, getNavigation, getVersion, writeAll } = require('./routes.js');

// HEADERS FOR LOG
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

/**
 * Starting server
 */
const port = 5556;
const server = restify.createServer({ name: 'Dash-API' });
server.use(restify.plugins.bodyParser());

if (process.env.LOCAL === 'true') {
	const cors = corsMiddleware({
		origins: ['http://127.0.0.1:3000', 'http://localhost:3000'],
	});
	server.pre(cors.preflight);
	server.use(cors.actual);
	debug('CORS enabled', 'report');
}

// routes
server.post('/dash/checkuser', checkUser);
server.post('/dash/navigation', getNavigation);
server.post('/dash/writeall', writeAll);
server.get('/dash/version', getVersion);

if (process.argv.includes('serve')) {
	server.listen(port, () => {
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
