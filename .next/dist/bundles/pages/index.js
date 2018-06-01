module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/playground";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BASE */
/* unused harmony export URL */
/* unused harmony export STATIC */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_config__);


var _getConfig = __WEBPACK_IMPORTED_MODULE_0_next_config___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var BASE = publicRuntimeConfig.base;
var URL = publicRuntimeConfig.url;
var STATIC = publicRuntimeConfig.static;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
	"header": "header_2uitE",
	"burger": "burger_2rbS6",
	"line1": "line1_2cfzz",
	"line2": "line2_17OGe",
	"line3": "line3_2NSWq",
	"rotateunite": "rotateunite_3p2kP",
	"rotateMiddle": "rotateMiddle_ZKVmS",
	"rotateuniteRight": "rotateuniteRight_1ckqD",
	"potential_menu": "potential_menu_T4jvI",
	"menu_item_1": "menu_item_1_1_1hw",
	"menu_item_2": "menu_item_2_3lQdc",
	"menu_item_3": "menu_item_3_2jSRv",
	"menuhider": "menuhider_1N9sW",
	"menuapear": "menuapear_26u2M"
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./pages/PlatformPromo/style.css
var style = __webpack_require__(4);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./components/Header/style.css
var Header_style = __webpack_require__(2);
var Header_style_default = /*#__PURE__*/__webpack_require__.n(Header_style);

// EXTERNAL MODULE: ./playground.js
var playground = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Header/Burger.js




/* harmony default export */ var Burger = (function () {
  return external__react__default.a.createElement("div", {
    className: Header_style_default.a.burger
  }, external__react__default.a.createElement("div", {
    className: Header_style_default.a.menuhider
  }), external__react__default.a.createElement("div", {
    className: Header_style_default.a.line1
  }), external__react__default.a.createElement("div", {
    className: Header_style_default.a.line2
  }), external__react__default.a.createElement("div", {
    className: Header_style_default.a.line3
  }), external__react__default.a.createElement("div", {
    className: Header_style_default.a.potential_menu
  }, external__react__default.a.createElement("div", {
    className: Header_style_default.a.menu_item_1
  }, "About"), external__react__default.a.createElement("div", {
    className: Header_style_default.a.menu_item_2
  }, "Concept"), external__react__default.a.createElement("div", {
    className: Header_style_default.a.menu_item_3
  }, "Contact")));
});
// CONCATENATED MODULE: ./components/Header/index.js




/* harmony default export */ var Header = (function () {
  return external__react__default.a.createElement("div", {
    className: Header_style_default.a.header
  }, external__react__default.a.createElement(Burger, null));
});
// CONCATENATED MODULE: ./pages/PlatformPromo/index.js





/* harmony default export */ var PlatformPromo = __webpack_exports__["default"] = (function () {
  return external__react__default.a.createElement("div", {
    className: style_default.a.hero
  }, external__react__default.a.createElement(Header, null));
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {
	"hero": "hero_1FmCw"
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PlatformPromo__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__playground__ = __webpack_require__(1);






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.application
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Amatic+SC:400,700",
    rel: "stylesheet"
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__PlatformPromo__["default"], null));
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {
	"application": "application_2w-7Z"
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })
/******/ ]);