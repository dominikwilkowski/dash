const { debug, isUserMissing, getDB } = require('../utils.js');

/**
 * Get trash dates
 *
 * @param  {object}   req  - The request object from express
 * @param  {object}   res  - The result object from express
 * @param  {function} next - The next function from express
 */
function getTrash(req, res, next) {
	debug('Retrieve trash dates', 'interaction', req);

	const { user } = req.body;
	const userMissing = isUserMissing(user);
	if (userMissing) {
		return next(userMissing);
	}

	res.send(getDB(user).trash);
	return next();
}

module.exports = {
	getTrash,
};
