const { debug, isUserMissing, getDB, writeDB } = require('../utils.js');

/**
 * Get goals
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function getGoals(req, res, next) {
	debug('Looking up goals', 'interaction', req);

	const { user } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	res.send(getDB(user).goals);
	return next();
}

/**
 * Add to goals
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function addGoals(req, res, next) {
	debug('Add to goals', 'interaction', req);

	const { user, text } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	const db = getDB(user);
	const id = db.goals.length === 0 ? 1 : db.goals[db.goals.length - 1].id + 1;
	db.goals.push({ id, text, isDone: false });

	writeDB(user, db);

	res.send({ id, goals: db.goals });
	return next();
}

/**
 * Edit an item in the goals
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function editGoals(req, res, next) {
	debug('Edit goals item', 'interaction', req);

	const { user, id, text } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	const db = getDB(user);
	db.goals = db.goals.map(({ id: itemID, text: itemText, ...rest }) =>
		itemID == id ? { id, text, ...rest } : { id: itemID, text: itemText, ...rest }
	);

	writeDB(user, db);

	res.send({ id, goals: db.goals });
	return next();
}

/**
 * Delete an item from the goals
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function deleteGoals(req, res, next) {
	debug('Delete goals item', 'interaction', req);

	const { user, id } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	const db = getDB(user);
	db.goals = db.goals.filter(({ id: itemID }) => itemID != id);

	writeDB(user, db);

	res.send({ id, goals: db.goals });
	return next();
}

module.exports = {
	getGoals,
	addGoals,
	editGoals,
	deleteGoals,
};
