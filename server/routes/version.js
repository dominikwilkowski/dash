const { debug } = require('../utils.js');

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
	getVersion,
};
