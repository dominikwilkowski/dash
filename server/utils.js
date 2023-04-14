const fs = require('fs');
require('dotenv').config();
const path = require('path');
const chalk = require('chalk');
const errors = require('restify-errors');

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
	[process.env.USER2]: 'wilkowski',
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
 * Check user exists
 *
 * @param   {string} user    - The user hash
 *
 * @returns {Boolean|string} - False or error
 */
function isUserMissing(user) {
	if (!USERS[user]) {
		return new errors.UnauthorizedError(`The user "${user}" not found`);
	} else {
		return false;
	}
}

/**
 * Get the database content
 *
 * @param  {string} user  - The user hash
 *
 * @return {object}       - The database
 */
function getDB(user) {
	return JSON.parse(
		fs.readFileSync(path.normalize(`${__dirname}/db/${USERS[user]}.json`), { encoding: 'utf8' })
	);
}

/**
 * Write to database
 *
 * @param  {string} user  - The user hash
 *
 * @return {object}       - The database
 */
function writeDB(user, content) {
	content.name = USERS[user];

	fs.writeFileSync(path.normalize(`${__dirname}/db/${USERS[user]}.json`), JSON.stringify(content), {
		encoding: 'utf8',
	});
}

module.exports = {
	DEBUG,
	USERS,
	debug,
	isUserMissing,
	getDB,
	writeDB,
};
