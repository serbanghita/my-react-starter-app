/*eslint-env node*/

module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					browsers: [
						'last 2 versions',
						'ie >= 11'
					]
				}
			}
		],
		'@babel/preset-react'
	],
	plugins: [
		[
		    '@babel/plugin-transform-runtime',
			{
				helpers: false
			}
		],
		[
			'@babel/plugin-proposal-decorators',
			{
				legacy: true
			}
		],
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-optional-chaining'
	]
};
