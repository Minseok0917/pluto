function h(type,config,children){
	return {
		type,
		config,
		children
	};
}

module.exports = Object.freeze({
	createElement: function(type,config,...children){
		if( typeof type === "function" ){
			return type(config,children);
		}
		return h(type,config,children);
	}
});