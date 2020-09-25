const corsMiddleware = require('restify-cors-middleware');
const restify = require('restify');
const cfonts = require('cfonts');
require('dotenv').config();

const { getGoals, addGoals, editGoals, deleteGoals } = require('./routes/goals.js');
const { getMort, addMort, deleteMort } = require('./routes/mort.js');
const { getNavigation } = require('./routes/navigation.js');
const { getVersion } = require('./routes/version.js');
const { getDb, writeDb } = require('./routes/db.js');
const { checkUser } = require('./routes/user.js');
const { getTrash } = require('./routes/trash.js');
const { DEBUG, debug } = require('./utils.js');
const {
	getShopping,
	addShopping,
	editShopping,
	toggleDoneShopping,
	deleteShopping,
} = require('./routes/shopping.js');

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
		origins: [
			'http://127.0.0.1:3000',
			'http://localhost:3000',
			'https://dominikwilkowski.github.io',
		],
	});
	server.pre(cors.preflight);
	server.use(cors.actual);
	debug('CORS enabled', 'report');
}

// routes
server.post('/dash/checkuser', checkUser);
server.post('/dash/navigation', getNavigation);
server.post('/dash/shopping', getShopping);
server.post('/dash/addshopping', addShopping);
server.post('/dash/editshopping', editShopping);
server.post('/dash/toggleshopping', toggleDoneShopping);
server.post('/dash/deleteshopping', deleteShopping);
server.post('/dash/gettrash', getTrash);
server.post('/dash/getdb', getDb);
server.post('/dash/writedb', writeDb);
server.post('/dash/goals', getGoals);
server.post('/dash/addgoals', addGoals);
server.post('/dash/editgoals', editGoals);
server.post('/dash/deletegoals', deleteGoals);
server.post('/dash/mort', getMort);
server.post('/dash/addmort', addMort);
server.post('/dash/deletemort', deleteMort);
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
