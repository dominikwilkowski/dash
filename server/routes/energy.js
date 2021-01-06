const { debug, isUserMissing, getDB, writeDB } = require('../utils.js');

/**
 * Get energy
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function getEnergy(req, res, next) {
	debug('Looking up energy', 'interaction', req);

	const { user } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	res.send(getDB(user).energy);
	return next();
}

/**
 * Add to energy
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function addEnergy(req, res, next) {
	debug('Add to energy', 'interaction', req);

	const { user, date } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	const db = getDB(user);
	if (!db.energy.includes(date)) {
		db.energy.push(date);
	}

	writeDB(user, db);

	res.send({ date, energy: db.energy });
	return next();
}

/**
 * Delete an item from energy
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function deleteEnergy(req, res, next) {
	debug('Delete energy item', 'interaction', req);

	const { user, date: userDate } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	const db = getDB(user);
	db.energy = db.energy.filter((date) => date !== userDate);
	writeDB(user, db);

	res.send({ userDate, energy: db.energy });
	return next();
}

module.exports = {
	getEnergy,
	addEnergy,
	deleteEnergy,
};
