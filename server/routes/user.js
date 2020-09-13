const { debug, isUserMissing } = require('../utils.js');

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

module.exports = {
	checkUser,
};
