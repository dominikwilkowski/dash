const corsMiddleware = require('restify-cors-middleware');
const restify = require('restify');
const cfonts = require('cfonts');
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
 * Getting the top 50 highscore
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function getNavigation( req, res, next ) {
	const { user } = req.params;
	const nav = JSON.parse( fs.readFileSync( path.normalize(`${ __dirname }/db/${ USERS[user] }${ DEBUG ? '-staging' : '' }.json`), { encoding: 'utf8' } ) );

	res.send( nav.navigation );
	return next();
}

/**
 * Getting version
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function getVersion( req, res, next ) {
	const { version } = require(`./package.json`);
	res.send({ version });
	return next();
}

/**
 * Starting init server
 */
const port = 5555;
const server = restify.createServer({ name: 'Dash-API' });
const cors = corsMiddleware({
	origins: ['http://127.0.0.1:3000', 'http://localhost:3000'],
});

server.use( restify.plugins.bodyParser() );
server.pre( restify.pre.sanitizePath() );
server.pre( cors.preflight );
server.use( cors.actual );

// routes
server.get( '/api/:user/navigation', getNavigation );
server.get( '/api/version', getVersion );

if( process.argv.includes('serve') ) {
	server.listen( port, () => {
		console.log('\n\n');

		cfonts.say('Dash', {
			font: 'slick',
			colors: ['#EF0FFF', 'gray'],
			letterSpacing: 0,
			align: 'center',
			space: false,
		});

		if( DEBUG ) {
			cfonts.say('debug mode', {
				font: 'chrome',
				colors: ['#EA1C2E', '#FFD520', '#EA1C2E'],
				align: 'center',
				space: false,
			});
		}

		cfonts.say(`${ server.name } listening at 127.0.0.1:${ port }`, {
			font: 'console',
			colors: ['white'],
			background: 'blue',
			letterSpacing: 0,
			align: 'center',
			space: false,
		});
	});
}
