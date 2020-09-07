const fs = require('fs');

const { DEBUG, USERS, debug, isUserMissing, getDB, writeDB } = require('./utils.js');

/**
 * Check user exist
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
	debug('Add to shopping list', 'interaction', req);

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
	debug('Add to shopping list', 'interaction', req);

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

/**
 * Get entire database
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function getAll(req, res, next) {
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

	res.send(getDB(user));
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
	getShopping,
	addShopping,
	editShopping,
	toggleDoneShopping,
	deleteShopping,
	getAll,
	writeAll,
	getVersion,
};
