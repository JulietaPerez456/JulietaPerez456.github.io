module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,js,png,jpg,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};