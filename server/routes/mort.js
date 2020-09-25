const { debug, isUserMissing, getDB, writeDB } = require('../utils.js');

/**
 * Get mort
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function getMort(req, res, next) {
	debug('Looking up mort', 'interaction', req);

	const { user } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	res.send(getDB(user).mort);
	return next();
}

/**
 * Add to mort
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function addMort(req, res, next) {
	debug('Add to mort', 'interaction', req);

	const { user, date } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	const db = getDB(user);
	db.mort[date] = db.mort[date] ? db.mort[date] + 1 : 1;

	writeDB(user, db);

	res.send({ date, mort: db.mort });
	return next();
}

/**
 * Delete an item from the goals
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function deleteMort(req, res, next) {
	debug('Delete mort item', 'interaction', req);

	const { user, date } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	const db = getDB(user);
	if (db.mort[date] > 1) {
		db.mort[date]--;
	} else {
		delete db.mort[date];
	}
	writeDB(user, db);

	res.send({ date, mort: db.mort });
	return next();
}

module.exports = {
	getMort,
	addMort,
	deleteMort,
};
