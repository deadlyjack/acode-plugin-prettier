/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/worker.js":
/*!***********************!*\
  !*** ./src/worker.js ***!
  \***********************/
/***/ (function() {

eval("self.onmessage = e => {\n  const {\n    id,\n    code,\n    cursorOptions,\n    action,\n    scriptUrl\n  } = e.data;\n  if (action === \"load script\") {\n    importScripts(scriptUrl);\n    self.postMessage({\n      action: \"script loaded\"\n    });\n    return;\n  }\n  const {\n    prettier,\n    plugins\n  } = self.acodePluginPrettier;\n  cursorOptions.plugins = plugins;\n  const res = prettier.formatWithCursor(code, cursorOptions);\n  self.postMessage({\n    id,\n    action: \"code format\",\n    res\n  });\n};\n\n//# sourceURL=webpack://acode-plugin-prettier/./src/worker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/worker.js"]();
/******/ 	
/******/ })()
;