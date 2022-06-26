module.exports = {
	presets:[
		[
			'@babel/preset-react',
			{
		        "runtime": "classic",
				"pragma": "Pluto.createElement",
		        "pragmaFrag": "Pluto.Fragment",
			}
		]
	],
	plugins:[
		["babel-plugin-transform-inline-environment-variables"]
	]
}

		
	      
	      		
	      
