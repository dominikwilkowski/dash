const { debug, isUserMissing, getDB, writeDB } = require('../utils.js');

/**
 * Get shopping list
 *
 * @param  {object}   req   - The request object from express
 * @param  {object}   res   - The result object from express
 * @param  {function} next  - The next function from express
 * @param  {string}   route - The route of this instance
 */
function getShopping(req, res, next, route) {
	debug('Looking up shopping list', 'interaction', req);

	const { user } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	res.send(getDB(user)[route]);
	return next();
}

/**
 * Add to shopping list
 *
 * @param  {object}   req   - The request object from express
 * @param  {object}   res   - The result object from express
 * @param  {function} next  - The next function from express
 * @param  {string}   route - The route of this instance
 */
function addShopping(req, res, next, route) {
	debug('Add to shopping list', 'interaction', req);

	const { user, text } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	const db = getDB(user);
	let biggestID = 1;

	const textBits = text.split(',');
	textBits.forEach((text) => {
		const id =
			db[route].length === 0
				? 1
				: db[route].reduce((_, { id }) => {
						if (id > biggestID) {
							biggestID = id;
						}
						return biggestID;
				  }) + 1;
		db[route].push({ id, text, isDone: false });
	});

	writeDB(user, db);

	res.send({ [route]: db[route] });
	return next();
}

/**
 * Edit an item in the shopping list
 *
 * @param  {object}   req   - The request object from express
 * @param  {object}   res   - The result object from express
 * @param  {function} next  - The next function from express
 * @param  {string}   route - The route of this instance
 */
function editShopping(req, res, next, route) {
	debug('Edit shopping list item', 'interaction', req);

	const { user, id, text } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	const db = getDB(user);
	db[route] = db[route].map(({ id: itemID, text: itemText, ...rest }) =>
		itemID == id ? { id, text, ...rest } : { id: itemID, text: itemText, ...rest }
	);

	writeDB(user, db);

	res.send({ id, [route]: db[route] });
	return next();
}

/**
 * Order an item in the shopping list
 *
 * @param  {object}   req   - The request object from express
 * @param  {object}   res   - The result object from express
 * @param  {function} next  - The next function from express
 * @param  {string}   route - The route of this instance
 */
function orderShopping(req, res, next, route) {
	debug('Order shopping list items', 'interaction', req);

	const { user, sourceId, destinationId } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	const db = getDB(user);
	db[route] = db[route].map(({ id, ...rest }) =>
		id == sourceId
			? { id: destinationId, ...rest }
			: id == destinationId
			? { id: sourceId, ...rest }
			: { id, ...rest }
	);

	writeDB(user, db);

	res.send({ [route]: db[route] });
	return next();
}

/**
 * Toggle an item in the shopping list
 *
 * @param  {object}   req   - The request object from express
 * @param  {object}   res   - The result object from express
 * @param  {function} next  - The next function from express
 * @param  {string}   route - The route of this instance
 */
function toggleDoneShopping(req, res, next, route) {
	debug('Toggle an item status in shopping list', 'interaction', req);

	const { user, id } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	const db = getDB(user);
	db[route] = db[route].map(({ id: itemID, ...rest }) =>
		itemID == id ? { id: itemID, ...rest, isDone: !rest.isDone } : { id: itemID, ...rest }
	);

	writeDB(user, db);

	res.send({ id, [route]: db[route] });
	return next();
}

/**
 * Delete an item from the shopping list
 *
 * @param  {object}   req   - The request object from express
 * @param  {object}   res   - The result object from express
 * @param  {function} next  - The next function from express
 * @param  {string}   route - The route of this instance
 */
function deleteShopping(req, res, next, route) {
	debug('Delete shopping list item', 'interaction', req);

	const { user, id } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	const db = getDB(user);
	db[route] = db[route].filter(({ id: itemID }) => itemID != id);

	writeDB(user, db);

	res.send({ id, [route]: db[route] });
	return next();
}

module.exports = {
	getShopping,
	addShopping,
	editShopping,
	orderShopping,
	toggleDoneShopping,
	deleteShopping,
};
