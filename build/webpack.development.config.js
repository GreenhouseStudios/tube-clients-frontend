const merge = require('webpack-merge')
const base = require ('./webpack.base.config')
const webpack = require ('webpack')

const config = require ('../config/development.config')

module.exports = merge(base, {
	devServer: {
		compress: true,
		port: 3000,
		overlay: true
	},
	plugins: [
	new webpack.DefinePlugin({
			'process': {
				env: config
			}
		})
	]
})