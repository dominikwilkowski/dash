const { debug, isUserMissing, getDB, writeDB } = require('../utils.js');

/**
 * Get entire database
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function getDb(req, res, next) {
	debug('Retrieve entire database', 'interaction', req);

	const { user } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	res.send(getDB(user));
	return next();
}

/**
 * Overriding entire database
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function writeDb(req, res, next) {
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

	res.send(getDB(user));
	return next();
}

module.exports = {
	getDb,
	writeDb,
};
