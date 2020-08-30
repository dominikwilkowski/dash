const fs = require('fs');

const { DEBUG, USERS, debug, isUserMissing, getDB, writeDB } = require('./utils.js');

/**
 * Getting the navigation
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function checkUser(req, res, next) {
	debug('Checking user', 'interaction', req);

	const { user } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		res.send({ user: 'Not found' });
		return next(userMissing);
	}

	res.send({ user: 'Found' });
	return next();
}

/**
 * Getting the navigation
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function getNavigation(req, res, next) {
	debug('Looking up navigation', 'interaction', req);

	const { user } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	res.send(getDB(user).navigation);
	return next();
}

/**
 * Overriding entire database
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function writeAll(req, res, next) {
	debug('Overriding entire database', 'interaction', req);

	const { user, content } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	let parsedContent;
	try {
		parsedContent = JSON.parse(content);
		writeDB(user, parsedContent);
	} catch (error) {
		console.error(error);
	}

	res.send({ written: parsedContent ? 'successful' : 'unsuccessful' });
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

module.exports = {
	checkUser,
	getNavigation,
	getVersion,
	writeAll,
};
