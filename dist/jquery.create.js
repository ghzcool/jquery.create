"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

$.fn.create = function (_config) {
	var parentInstance = this;
	var config = Object.assign({
		tag: "div"
	}, _config);
	var HTMLElement = document.createElement(config.tag);

	var jInstance = $(HTMLElement);
	var excludeKeys = ["tag", "cls"];
	Object.keys(config).map(function (key) {
		if (excludeKeys.indexOf(key) === -1 && "function" === typeof jInstance[key]) {
			jInstance[key](config[key]);
		}
	});
	if (config.cls) {
		jInstance.addClass(config.cls);
	}

	var items = Object.assign([], config.items || config.children);
	items.map(function (item) {
		if (!!item) {
			if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === "object" && !item.jquery && !(item instanceof Element)) {
				jInstance.create(item);
			} else {
				jInstance.append(item);
			}
		}
	});

	if (!!parentInstance && !!parentInstance.length && "function" === typeof parentInstance.append) {
		parentInstance.append(jInstance);
		return parentInstance;
	} else {
		return jInstance;
	}
};
