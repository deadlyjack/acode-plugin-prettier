/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/prettierPlugins.js":
/*!********************************!*\
  !*** ./src/prettierPlugins.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prettier_plugins_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prettier/plugins/html */ \"./node_modules/prettier/plugins/html.mjs\");\n/* harmony import */ var prettier_plugins_babel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prettier/plugins/babel */ \"./node_modules/prettier/plugins/babel.mjs\");\n/* harmony import */ var prettier_plugins_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prettier/plugins/graphql */ \"./node_modules/prettier/plugins/graphql.mjs\");\n/* harmony import */ var prettier_plugins_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prettier/plugins/angular */ \"./node_modules/prettier/plugins/angular.mjs\");\n/* harmony import */ var prettier_plugins_estree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prettier/plugins/estree */ \"./node_modules/prettier/plugins/estree.mjs\");\n/* harmony import */ var prettier_plugins_flow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prettier/plugins/flow */ \"./node_modules/prettier/plugins/flow.mjs\");\n/* harmony import */ var prettier_plugins_glimmer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prettier/plugins/glimmer */ \"./node_modules/prettier/plugins/glimmer.mjs\");\n/* harmony import */ var prettier_plugins_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prettier/plugins/markdown */ \"./node_modules/prettier/plugins/markdown.mjs\");\n/* harmony import */ var prettier_plugins_meriyah__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prettier/plugins/meriyah */ \"./node_modules/prettier/plugins/meriyah.mjs\");\n/* harmony import */ var prettier_plugins_postcss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prettier/plugins/postcss */ \"./node_modules/prettier/plugins/postcss.mjs\");\n/* harmony import */ var prettier_plugins_typescript__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prettier/plugins/typescript */ \"./node_modules/prettier/plugins/typescript.mjs\");\n/* harmony import */ var prettier_plugins_yaml__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prettier/plugins/yaml */ \"./node_modules/prettier/plugins/yaml.mjs\");\n/* harmony import */ var prettier_plugins_acorn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prettier/plugins/acorn */ \"./node_modules/prettier/plugins/acorn.mjs\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([prettier_plugins_babel__WEBPACK_IMPORTED_MODULE_1__[\"default\"], prettier_plugins_graphql__WEBPACK_IMPORTED_MODULE_2__[\"default\"], prettier_plugins_angular__WEBPACK_IMPORTED_MODULE_3__[\"default\"], prettier_plugins_estree__WEBPACK_IMPORTED_MODULE_4__[\"default\"], prettier_plugins_flow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], prettier_plugins_glimmer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], prettier_plugins_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"], prettier_plugins_markdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], prettier_plugins_meriyah__WEBPACK_IMPORTED_MODULE_8__[\"default\"], prettier_plugins_postcss__WEBPACK_IMPORTED_MODULE_9__[\"default\"], prettier_plugins_typescript__WEBPACK_IMPORTED_MODULE_10__[\"default\"], prettier_plugins_yaml__WEBPACK_IMPORTED_MODULE_11__[\"default\"], prettier_plugins_acorn__WEBPACK_IMPORTED_MODULE_12__[\"default\"]]);\n\n//# sourceURL=webpack://acode-plugin-prettier/./src/prettierPlugins.js?");

/***/ }),

/***/ "./src/worker.js":
/*!***********************!*\
  !*** ./src/worker.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prettier_standalone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prettier/standalone */ \"./node_modules/prettier/standalone.mjs\");\n/* harmony import */ var _prettierPlugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prettierPlugins */ \"./src/prettierPlugins.js\");\n\n\nself.onmessage = async e => {\n  const {\n    id,\n    code,\n    cursorOptions,\n    action,\n    scriptUrl\n  } = e.data;\n  if (action === \"load script\") {\n    importScripts(scriptUrl);\n    self.postMessage({\n      action: \"script loaded\"\n    });\n    return;\n  }\n  cursorOptions.plugins = _prettierPlugins__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  const res = await prettier_standalone__WEBPACK_IMPORTED_MODULE_0__[\"default\"].formatWithCursor(code, cursorOptions);\n  self.postMessage({\n    id,\n    action: \"code format\",\n    res\n  });\n};\n\n//# sourceURL=webpack://acode-plugin-prettier/./src/worker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = function() {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_prettier_plugins_acorn_mjs-node_modules_prettier_plugins_angular_mjs-nod-2246c6"], function() { return __webpack_require__("./src/worker.js"); })
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"src_worker_js": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = function(data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkacode_plugin_prettier"] = self["webpackChunkacode_plugin_prettier"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	!function() {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			return __webpack_require__.e("vendors-node_modules_prettier_plugins_acorn_mjs-node_modules_prettier_plugins_angular_mjs-nod-2246c6").then(next);
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;