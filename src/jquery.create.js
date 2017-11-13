$.fn.create = function(_config) {
	const parentInstance = this;
	const config = Object.assign({
		tag: "div"
	}, _config);
	const HTMLElement = document.createElement(config.tag);
	
	const jInstance = $(HTMLElement);
	const excludeKeys = ["tag", "cls"];
	Object.keys(config).map(key=>{
		if(excludeKeys.indexOf(key) === -1 && "function" === typeof jInstance[key]) {
			jInstance[key](config[key]);
		}
	});
	if(config.cls) {
		jInstance.addClass(config.cls);
	}
	
	const items = Object.assign([], config.items || config.children);
	items.map(item=>{
		if(!!item) {
			if(typeof item === "object" && !item.jquery && !(item instanceof Element)) {
				jInstance.create(item);
			}
			else {
				jInstance.append(item);
			}
		}
	});
	
	if(!!parentInstance && !!parentInstance.length && "function" === typeof parentInstance.append) {
		parentInstance.append(jInstance);
		return parentInstance;
	}
	else {
		return jInstance;
	}
};