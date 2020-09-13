const { debug, isUserMissing, getDB } = require('../utils.js');

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

module.exports = {
	getNavigation,
};
