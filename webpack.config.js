const __path = require("path");
const __dotenv = require('dotenv');
const __webpack = require("webpack");
const __HtmlWebpackPlugin = require('html-webpack-plugin');


const getPath = (path,root=__dirname) => __path.join(root,path);
const addRule = (test,use) => ({ test, use });


{
	const envMode = process.env.mode;
	const envPath = getPath('env');
	const envFile = (
		envMode === 'dev' ? 'dev.env' :
		envMode === 'prd' ? 'prd.env' : 
		''
	);
	__dotenv.config({ path: getPath(envFile,envPath) });
	__dotenv.config({ path: getPath('.env',envPath) });
}


module.exports = {
	mode:"development",
	entry: getPath('src/main.js'),
	output: {
		filename: '[name].[contenthash].bundle.js'
	},
	module:{
		rules:[
			addRule(/\.js$/,{
				loader:'babel-loader'
			})
		]
	},
	resolve:{
		alias:{
			'@':getPath('src'),
			'pluto':getPath('src/modules/pluto'),
			'plutoDom':getPath('src/modules/plutoDom')
		}
	},
	plugins: [
		new __webpack.ProvidePlugin({ // Auto Import
			Pluto: '@/modules/pluto',
		}),
		new __HtmlWebpackPlugin({
			template: getPath('public/index.html')
		})
	],
	devServer: {
		static: {
			directory: getPath('public')
		},
		port:9000,
		compress: true, // http gzip 
	}
};