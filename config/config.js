const path = require('path');
const ROOT = process.cwd();

exports.CONFIG = {
	APP_PORT: 9000,
	DEV_PORT: 9001,
	JS_TEMPLATE: '[name]-[chunkhash].js',
	CSS_TEMPLATE: '[name]-[contenthash].css',
	ASSET_TEMPLATE: '[name]-[hash].[ext]'
};

exports.PATHS = {
	ROOT,
	SRC: path.join(ROOT, 'src'),
	ASSETS: path.join(ROOT, 'src/assets'),
	DIST: path.join(ROOT, 'dist'),
	HTML: path.join(ROOT, 'src/html')
};

exports.UTILS = {
	isExternal
};

function isExternal(module) {
	let userRequest = module.userRequest;
	if (typeof userRequest !== 'string') {
		return false;
	}
	return userRequest.indexOf('node_modules') >= 0 ||
		userRequest.indexOf('libraries') >= 0;
}