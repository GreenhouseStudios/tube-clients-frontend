const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'js/app.js'
	},
	resolve: {
		alias: {
			'@': path.resolve('./src'),
			'styles': path.resolve('./src/assets/styles'),
			'vue$': 'vue/dist/vue.esm.js'
		},
		extensions: ['.js', '.vue', '.scss']
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'css-loader',
					'sass-loader'
				] 
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					extractCSS: process.env.NODE_ENV == 'production'
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					"presets": [
					["@babel/preset-env", {
						"targets": {
							"browsers": ["last 2 versions", "safari >= 7"]
						},
					}]
  ]
				}
			},
			{
				test: /\.(png|jpg|gif|svg)$/, 
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'img/'
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			filename: 'index.html',
			template: 'index.html'
		})
	]
}