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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STATIC; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_config__);


var _getConfig = __WEBPACK_IMPORTED_MODULE_0_next_config___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var BASE = publicRuntimeConfig.base;
var URL = publicRuntimeConfig.url;
var STATIC = publicRuntimeConfig.static;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/Header/style.css
var style = __webpack_require__(3);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./playground.js
var playground = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Header/Burger.js




/* harmony default export */ var Burger = (function () {
  return external__react__default.a.createElement("div", {
    className: style_default.a.burger
  }, external__react__default.a.createElement("div", {
    className: style_default.a.menuhider
  }), external__react__default.a.createElement("div", {
    className: style_default.a.line1
  }), external__react__default.a.createElement("div", {
    className: style_default.a.line2
  }), external__react__default.a.createElement("div", {
    className: style_default.a.line3
  }), external__react__default.a.createElement("div", {
    className: style_default.a.potential_menu
  }, external__react__default.a.createElement("div", {
    className: style_default.a.menu_item_1
  }, "About"), external__react__default.a.createElement("div", {
    className: style_default.a.menu_item_2
  }, "Concept"), external__react__default.a.createElement("div", {
    className: style_default.a.menu_item_3
  }, "Contact")));
});
// EXTERNAL MODULE: ./components/Header/register.css
var register = __webpack_require__(5);
var register_default = /*#__PURE__*/__webpack_require__.n(register);

// CONCATENATED MODULE: ./components/Header/Register.js




/* harmony default export */ var Register = (function () {
  return external__react__default.a.createElement("div", {
    className: register_default.a.register_holder
  }, external__react__default.a.createElement("div", {
    className: register_default.a.register_button
  }, "Register"));
});
// CONCATENATED MODULE: ./components/Header/index.js





/* harmony default export */ var Header = __webpack_exports__["a"] = (function () {
  return external__react__default.a.createElement("div", {
    className: style_default.a.header
  }, external__react__default.a.createElement(Burger, null), external__react__default.a.createElement(Register, null));
});

/***/ }),
/* 3 */
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
	"menuapear": "menuapear_26u2M",
	"menu_fill": "menu_fill_2kk9-"
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
	"register_modal": "register_modal_rFU0F",
	"register_holder": "register_holder_2sIZu",
	"register_button": "register_button_3QM8S"
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
	"hero": "hero_1FmCw",
	"hero_title": "hero_title_2ky1R",
	"button_amazing": "button_amazing_3viFx"
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__playground__ = __webpack_require__(1);





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.logo_holder
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "".concat(__WEBPACK_IMPORTED_MODULE_3__playground__["a" /* STATIC */], "/images/logo.png")
  }));
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__playground__ = __webpack_require__(1);





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.button_amazing
  }, "Amazing Button");
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__playground__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.team_member_box
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.team_face,
    src: "".concat(__WEBPACK_IMPORTED_MODULE_3__playground__["a" /* STATIC */], "/images/team_member.png")
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.team_member_name
  }, "Empoyee 1"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.team_member_job
  }, "Sed nunc ante"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.team_member_bio
  }, "Morbi interdum dolor ut pellentesque gravida. Vivamus aliquet augue ac tincidunt cursus. Nam sed lectus ipsum."));
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
	"team_member_box": "team_member_box_2h0X4",
	"team_face": "team_face_18XXw",
	"team_member_name": "team_member_name_O71Jn",
	"team_member_job": "team_member_job_1gm2o",
	"team_member_bio": "team_member_bio_20HRv"
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__playground__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.team_member_box
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.team_face,
    src: "".concat(__WEBPACK_IMPORTED_MODULE_3__playground__["a" /* STATIC */], "/images/team_member.png")
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.team_member_name
  }, "Empoyee 2"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.team_member_job
  }, "Nunc ante sed"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.team_member_bio
  }, "Morbi interdum dolor ut pellentesque gravida. Vivamus aliquet augue ac tincidunt cursus. Nam sed lectus ipsum."));
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
	"team_member_box": "team_member_box_1SkWt",
	"team_face": "team_face_9uCf_",
	"team_member_name": "team_member_name_2UkgM",
	"team_member_job": "team_member_job_2pK4o",
	"team_member_bio": "team_member_bio_3n09K"
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__playground__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.team_member_box
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.team_face,
    src: "".concat(__WEBPACK_IMPORTED_MODULE_3__playground__["a" /* STATIC */], "/images/team_member.png")
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.team_member_name
  }, "Empoyee 3"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.team_member_job
  }, "Ante sed nunc"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.team_member_bio
  }, "Morbi interdum dolor ut pellentesque gravida. Vivamus aliquet augue ac tincidunt cursus. Nam sed lectus ipsum."));
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {
	"team_member_box": "team_member_box_16rBE",
	"team_face": "team_face_2QDLK",
	"team_member_name": "team_member_name_zxCzC",
	"team_member_job": "team_member_job_zm7j9",
	"team_member_bio": "team_member_bio_RE71c"
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__playground__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.features
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.feature
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.feature_title
  }, "Feature 1"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.feature_description
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus nec arcu ac maximus. In eros turpis, efficitur et erat ut, pellentesque laoreet arcu.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.feature
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.feature_title
  }, "Feature 2"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.feature_description
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus nec arcu ac maximus. In eros turpis, efficitur et erat ut, pellentesque laoreet arcu.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.feature
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.feature_title
  }, "Feature 3"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.feature_description
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus nec arcu ac maximus. In eros turpis, efficitur et erat ut, pellentesque laoreet arcu.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.feature
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.feature_title
  }, "Feature 4"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.feature_description
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus nec arcu ac maximus. In eros turpis, efficitur et erat ut, pellentesque laoreet arcu.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.feature
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.feature_title
  }, "Feature 5"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.feature_description
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus nec arcu ac maximus. In eros turpis, efficitur et erat ut, pellentesque laoreet arcu.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.feature
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.feature_title
  }, "Feature 6"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.feature_description
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus nec arcu ac maximus. In eros turpis, efficitur et erat ut, pellentesque laoreet arcu.")));
});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {
	"features": "features_1jkOu",
	"feature_title": "feature_title_1DR12",
	"feature": "feature_3twE1",
	"feature_description": "feature_description_2qM9q"
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playground__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Logo_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Button_Amazing__ = __webpack_require__(8);





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.hero
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Logo_js__["default"], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.hero_title
  }, "Lorem ipsum dolor sit amet"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Button_Amazing__["default"], null));
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Team_member1__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Team_member2__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Team_member3__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__playground__ = __webpack_require__(1);







/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.team
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.team_container_title
  }, "Team"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.team_holeder
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Team_member1__["default"], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Team_member2__["default"], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Team_member3__["default"], null)));
});

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {
	"team": "team_2X4n4",
	"team_container_title": "team_container_title_MXwvF",
	"team_holeder": "team_holeder_1WV8Z"
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__playground__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.newsletter
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.newsletter_titile
  }, "Join our newsletter"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.newsletter_form_holder
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.newsletter_input,
    type: "text",
    placeholder: "Placeholder"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.newsletter_button
  }, "SEND")));
});

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {
	"newsletter": "newsletter_3mbYp",
	"newsletter_titile": "newsletter_titile_3syOg",
	"newsletter_form_holder": "newsletter_form_holder_27Rtc",
	"newsletter_button": "newsletter_button_1BN16",
	"newsletter_input": "newsletter_input_1M8w0"
};

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(27);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./pages/style.css
var style = __webpack_require__(28);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(29);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./pages/PlatformPromo/index.js
var PlatformPromo = __webpack_require__(17);

// EXTERNAL MODULE: ./pages/Features/index.js
var Features = __webpack_require__(15);

// EXTERNAL MODULE: ./pages/Team/index.js
var Team = __webpack_require__(18);

// EXTERNAL MODULE: ./playground.js
var playground = __webpack_require__(1);

// EXTERNAL MODULE: ./pages/Newsletter/index.js
var Newsletter = __webpack_require__(20);

// EXTERNAL MODULE: ./components/Header/index.js + 2 modules
var Header = __webpack_require__(2);

// EXTERNAL MODULE: ./components/Footer/style.css
var Footer_style = __webpack_require__(30);
var Footer_style_default = /*#__PURE__*/__webpack_require__.n(Footer_style);

// EXTERNAL MODULE: ./components/Footer/Footer_upper/style.css
var Footer_upper_style = __webpack_require__(31);
var Footer_upper_style_default = /*#__PURE__*/__webpack_require__.n(Footer_upper_style);

// CONCATENATED MODULE: ./components/Footer/Footer_upper/index.js




/* harmony default export */ var Footer_upper = (function () {
  return external__react__default.a.createElement("div", {
    className: Footer_upper_style_default.a.upper_footer_holder
  }, external__react__default.a.createElement("div", {
    className: Footer_upper_style_default.a.contacts_holder
  }, external__react__default.a.createElement("div", {
    className: Footer_upper_style_default.a.contacts
  }, "Contacts"), external__react__default.a.createElement("div", {
    className: Footer_upper_style_default.a.contacts_info
  }, "Morbi interdum dolor ut pellentesque gravida. Vivamus aliquet augue ac tincidunt cursus. Nam sed lectus ipsum.")), external__react__default.a.createElement("div", {
    className: Footer_upper_style_default.a.contacts_ctas
  }, external__react__default.a.createElement("div", {
    className: Footer_upper_style_default.a.cta
  }, "Morbi interdum dolor1"), external__react__default.a.createElement("div", {
    className: Footer_upper_style_default.a.cta
  }, "Morbi interdum dolor2"), external__react__default.a.createElement("div", {
    className: Footer_upper_style_default.a.cta
  }, "Morbi interdum dolor3"), external__react__default.a.createElement("div", {
    className: Footer_upper_style_default.a.cta
  }, "Morbi interdum dolor4")), external__react__default.a.createElement("div", {
    className: Footer_upper_style_default.a.contacts_ctas
  }, external__react__default.a.createElement("div", {
    className: Footer_upper_style_default.a.cta
  }, "Morbi interdum dolor1"), external__react__default.a.createElement("div", {
    className: Footer_upper_style_default.a.cta
  }, "Morbi interdum dolor2"), external__react__default.a.createElement("div", {
    className: Footer_upper_style_default.a.cta
  }, "Morbi interdum dolor3"), external__react__default.a.createElement("div", {
    className: Footer_upper_style_default.a.cta
  }, "Morbi interdum dolor4")));
});
// EXTERNAL MODULE: ./components/Footer/Footer_lower/style.css
var Footer_lower_style = __webpack_require__(32);
var Footer_lower_style_default = /*#__PURE__*/__webpack_require__.n(Footer_lower_style);

// CONCATENATED MODULE: ./components/Footer/Footer_lower/index.js



/* harmony default export */ var Footer_lower = (function () {
  return external__react__default.a.createElement("div", {
    className: Footer_lower_style_default.a.lower_footer_holder
  }, external__react__default.a.createElement("div", {
    className: Footer_lower_style_default.a.logo_holder
  }, external__react__default.a.createElement("img", {
    src: "".concat(playground["a" /* STATIC */], "/images/logo_dark.png")
  })), external__react__default.a.createElement("div", {
    className: Footer_lower_style_default.a.navigation_holder
  }, external__react__default.a.createElement("div", {
    className: Footer_lower_style_default.a.navigation_item
  }, "About"), external__react__default.a.createElement("div", {
    className: Footer_lower_style_default.a.navigation_item
  }, "Concept"), external__react__default.a.createElement("div", {
    className: Footer_lower_style_default.a.navigation_item
  }, "Contact")), external__react__default.a.createElement("div", {
    className: Footer_lower_style_default.a.disclaimer_holder
  }, "THIS WEBSITE IS JUST A TEST... THAT INPUT IS GDPR COMPLIANT (IT'S FAKE)"));
});
// CONCATENATED MODULE: ./components/Footer/index.js






/* harmony default export */ var Footer = (function () {
  return external__react__default.a.createElement("div", {
    className: Footer_style_default.a.footer
  }, external__react__default.a.createElement("div", {
    className: Footer_style_default.a.footer_upper
  }, external__react__default.a.createElement(Footer_upper, null)), external__react__default.a.createElement("div", {
    className: Footer_style_default.a.footer_lower
  }, external__react__default.a.createElement(Footer_lower, null)));
});
// CONCATENATED MODULE: ./pages/index.js











/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external__react__default.a.createElement("div", {
    className: style_default.a.application
  }, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Amatic+SC:400,700",
    rel: "stylesheet"
  })), external__react__default.a.createElement(Header["a" /* default */], null), external__react__default.a.createElement(PlatformPromo["default"], null), external__react__default.a.createElement(Features["default"], null), external__react__default.a.createElement(Team["default"], null), external__react__default.a.createElement(Newsletter["default"], null), external__react__default.a.createElement(Footer, null));
});

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {
	"application": "application_2w-7Z"
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {
	"footer": "footer_34BaK",
	"footer_upper": "footer_upper_2arT3",
	"footer_lower": "footer_lower_2kc6r"
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = {
	"contacts": "contacts_Og7FD",
	"contacts_info": "contacts_info_2yHex",
	"upper_footer_holder": "upper_footer_holder_QoCGb",
	"contacts_holder": "contacts_holder_2KkqL",
	"contacts_ctas": "contacts_ctas_3uYGr"
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {
	"lower_footer_holder": "lower_footer_holder_-32Sp",
	"logo_holder": "logo_holder_3qBsU",
	"navigation_holder": "navigation_holder_1mZpQ",
	"navigation_item": "navigation_item_1Gj-V",
	"disclaimer_holder": "disclaimer_holder_1PXKU"
};

/***/ })
/******/ ]);