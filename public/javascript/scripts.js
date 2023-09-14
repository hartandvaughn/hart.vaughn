/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/modules/debounce.js":
/*!********************************************!*\
  !*** ./src/javascript/modules/debounce.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar _this = undefined;\n/**\n * Debounce\n * Wrapper Function To Create A Closure That Prevents A Function From Executing If It Is Called Multiple Times In Succession Until The Function Is Not Called For A Specified Amount Of Time Preventing The Function From Firing Multiple Times. The Function Will Only Execute Once After The Specified Amount Of Time Has Passed When The Function Is No Longer Being Called.\n * \n * Author: mcbeav\n * Created: 3.20.2023\n * MIT License\n * ( c ) Copyright mcbeav 2022 422939+mcbeav@users.noreply.github.com\n * \n */\n\n/**\n * debounce\n * Prevents A Function From Firing More Than Once When It's Called Multiple Times Within A Specified Amount Of Time. The Function Will Only Execute The Last Time The Function Is Called Within The Specified Amount Of Time\n * @param {*} fn \n * @param {*} ms \n * @returns \n */\nvar debounce = function debounce(fn, ms) {\n  var timerID;\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    var bound = fn.bind.apply(fn, [_this].concat(args));\n    clearTimeout(timerID);\n    timerID = setTimeout(bound, ms);\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debounce);\n\n//# sourceURL=webpack://hart-vaugn/./src/javascript/modules/debounce.js?");

/***/ }),

/***/ "./src/javascript/modules/load.js":
/*!****************************************!*\
  !*** ./src/javascript/modules/load.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n/**\n * load\n * Handles iPhone Touch Events For A Better Mobile Viewing Experience\n */\nvar load = function load() {\n  try {\n    if (document.readyState !== \"complete\") {\n      setTimeout(function () {\n        load();\n      }, 100);\n      return;\n    }\n    if (/iP(hone|ad)/.test(window.navigator.userAgent)) {\n      var elements = _toConsumableArray(document.querySelectorAll(\"li\"));\n      var empty = function empty() {};\n      for (var i = 0; i < elements.length; i++) {\n        elements[i].addEventListener(\"touchstart\", empty, false);\n      }\n    }\n  } catch (err) {\n    console.error(\"Error: \", err);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://hart-vaugn/./src/javascript/modules/load.js?");

/***/ }),

/***/ "./src/javascript/modules/viewport.js":
/*!********************************************!*\
  !*** ./src/javascript/modules/viewport.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce */ \"./src/javascript/modules/debounce.js\");\n/**\n * Viewport\n * Measures & Sets VH & VW CSS Variables To Get Accurate Window Measurments Across All Browsers To Handle Compensating For Browser Or OS UI\n * \n * Author: mcbeav\n * Created: 3.20.2023\n * MIT License\n * ( c ) Copyright mcbeav 2022 422939+mcbeav@users.noreply.github.com\n * \n */\n\n\nvar dimensions = function dimensions() {\n  var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;\n  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;\n  var vh = height * 0.01;\n  var vw = width * 0.01;\n  document.documentElement.style.setProperty(\"--vh\", \"\".concat(vh, \"px\"));\n  document.documentElement.style.setProperty(\"--vw\", \"\".concat(vw, \"px\"));\n};\nvar viewport = (0,_debounce__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(dimensions, 100);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewport);\n\n//# sourceURL=webpack://hart-vaugn/./src/javascript/modules/viewport.js?");

/***/ }),

/***/ "./src/javascript/scripts.js":
/*!***********************************!*\
  !*** ./src/javascript/scripts.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/load */ \"./src/javascript/modules/load.js\");\n/* harmony import */ var _modules_viewport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/viewport */ \"./src/javascript/modules/viewport.js\");\n\n\n(0,_modules_viewport__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nwindow.addEventListener(\"DOMContentLoaded\", _modules_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n  once: true\n}, true);\nwindow.addEventListener(\"resize\", _modules_viewport__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://hart-vaugn/./src/javascript/scripts.js?");

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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/javascript/scripts.js");
/******/ 	
/******/ })()
;