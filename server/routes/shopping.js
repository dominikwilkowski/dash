const { debug, isUserMissing, getDB, writeDB } = require('../utils.js');

/**
 * Get shopping list
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function getShopping(req, res, next) {
	debug('Looking up shopping list', 'interaction', req);

	const { user } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	res.send(getDB(user).shopping);
	return next();
}

/**
 * Add to shopping list
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function addShopping(req, res, next) {
	debug('Add to shopping list', 'interaction', req);

	const { user, text } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	const db = getDB(user);
	const id = db.shopping.length === 0 ? 1 : db.shopping[db.shopping.length - 1].id + 1;
	db.shopping.push({ id, text, isDone: false });

	writeDB(user, db);

	res.send({ id, shopping: db.shopping });
	return next();
}

/**
 * Edit an item in the shopping list
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function editShopping(req, res, next) {
	debug('Edit shopping list item', 'interaction', req);

	const { user, id, text } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	const db = getDB(user);
	db.shopping = db.shopping.map(({ id: itemID, text: itemText, ...rest }) =>
		itemID == id ? { id, text, ...rest } : { id: itemID, text: itemText, ...rest }
	);

	writeDB(user, db);

	res.send({ id, shopping: db.shopping });
	return next();
}

/**
 * Toggle an item in the shopping list
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function toggleDoneShopping(req, res, next) {
	debug('Toggle an item status in shopping list', 'interaction', req);

	const { user, id } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	const db = getDB(user);
	db.shopping = db.shopping.map(({ id: itemID, ...rest }) =>
		itemID == id ? { id: itemID, ...rest, isDone: !rest.isDone } : { id: itemID, ...rest }
	);

	writeDB(user, db);

	res.send({ id, shopping: db.shopping });
	return next();
}

/**
 * Delete an item from the shopping list
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function deleteShopping(req, res, next) {
	debug('Delete shopping list item', 'interaction', req);

	const { user, id } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	const db = getDB(user);
	db.shopping = db.shopping.filter(({ id: itemID }) => itemID != id);

	writeDB(user, db);

	res.send({ id, shopping: db.shopping });
	return next();
}

module.exports = {
	getShopping,
	addShopping,
	editShopping,
	toggleDoneShopping,
	deleteShopping,
};
