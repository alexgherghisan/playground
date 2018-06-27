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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
	"hero": "hero_1FmCw",
	"hero_title": "hero_title_2ky1R",
	"button_amazing": "button_amazing_3viFx"
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BASE */
/* unused harmony export URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STATIC; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_config__);


var _getConfig = __WEBPACK_IMPORTED_MODULE_0_next_config___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var BASE = publicRuntimeConfig.base;
var URL = publicRuntimeConfig.url;
var STATIC = publicRuntimeConfig.static;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playground__ = __webpack_require__(2);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.logo
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "".concat(__WEBPACK_IMPORTED_MODULE_2__playground__["a" /* STATIC */], "/images/logo.png")
  }));
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.button_amazing
  }, "Amazing Button");
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
	"header": "header_3Qvcu",
	"burger": "burger_30_pT",
	"line1": "line1_3qjZl",
	"line2": "line2_2vJKV",
	"line3": "line3_29FQw",
	"rotateunite": "rotateunite_13QXn",
	"rotateMiddle": "rotateMiddle_2nupe",
	"rotateuniteRight": "rotateuniteRight_5hBDQ",
	"potential_menu": "potential_menu_178-z",
	"menu_item_1": "menu_item_1_1BB-O",
	"menu_item_2": "menu_item_2_3iW8v",
	"menu_item_3": "menu_item_3_1HrZo",
	"menuhider": "menuhider_29bhT",
	"menuapear": "menuapear_1zh9s",
	"menu_fill": "menu_fill_3D2RA"
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var avatar = _ref.avatar,
      name = _ref.name,
      job = _ref.job,
      bio = _ref.bio;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.member
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.avatar
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: avatar
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.name
  }, name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.job
  }, job), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.bio
  }, bio));
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {
	"member": "member_169L3",
	"avatar": "avatar_3iCrs",
	"name": "name_2Nv1T",
	"job": "job_afcTL",
	"bio": "bio_2Drfa"
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__playground__ = __webpack_require__(2);

/* harmony default export */ __webpack_exports__["default"] = ({
  members: [{
    avatar: "".concat(__WEBPACK_IMPORTED_MODULE_0__playground__["a" /* STATIC */], "/images/team_member.png"),
    name: "Empoyee 1",
    job: "Sed nunc ante",
    bio: "Morbi interdum dolor ut pellentesque gravida. Vivamus aliquet augue ac tincidunt cursus. Nam sed lectus ipsum."
  }, {
    avatar: "".concat(__WEBPACK_IMPORTED_MODULE_0__playground__["a" /* STATIC */], "/images/team_member.png"),
    name: "Empoyee 88",
    job: "Lorem ipsum",
    bio: "Morbi interdum dolor ut pellentesque gravida. Vivamus aliquet augue ac tincidunt cursus. Nam sed "
  }, {
    avatar: "".concat(__WEBPACK_IMPORTED_MODULE_0__playground__["a" /* STATIC */], "/images/team_member.png"),
    name: "Empoyee 3",
    job: "Se ante",
    bio: "Morbi interdum dolor ut pellentesque gravida. Vivamus aliquet augue ac tincidunt cursus"
  }],
  features: [{
    title: "",
    headline: ""
  }, {
    title: "",
    headline: ""
  }, {
    title: "",
    headline: ""
  }]
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);


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
/* 11 */
/***/ (function(module, exports) {

module.exports = {
	"features": "features_1jkOu",
	"feature_title": "feature_title_1DR12",
	"feature": "feature_3twE1",
	"feature_description": "feature_description_2qM9q"
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./pages/PlatformPromo/style.css
var style = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./pages/PlatformPromo/Logo.js
var Logo = __webpack_require__(4);

// EXTERNAL MODULE: ./pages/PlatformPromo/Button_Amazing.js
var Button_Amazing = __webpack_require__(5);

// EXTERNAL MODULE: ./components/WebsiteHeader/style.css
var WebsiteHeader_style = __webpack_require__(6);
var WebsiteHeader_style_default = /*#__PURE__*/__webpack_require__.n(WebsiteHeader_style);

// CONCATENATED MODULE: ./components/WebsiteHeader/Burger.js


/* harmony default export */ var Burger = (function () {
  return external__react__default.a.createElement("div", {
    className: WebsiteHeader_style_default.a.burger
  }, external__react__default.a.createElement("div", {
    className: WebsiteHeader_style_default.a.menuhider
  }), external__react__default.a.createElement("div", {
    className: WebsiteHeader_style_default.a.line1
  }), external__react__default.a.createElement("div", {
    className: WebsiteHeader_style_default.a.line2
  }), external__react__default.a.createElement("div", {
    className: WebsiteHeader_style_default.a.line3
  }), external__react__default.a.createElement("div", {
    className: WebsiteHeader_style_default.a.potential_menu
  }, external__react__default.a.createElement("div", {
    className: WebsiteHeader_style_default.a.menu_item_1
  }, "About"), external__react__default.a.createElement("div", {
    className: WebsiteHeader_style_default.a.menu_item_2
  }, "Concept"), external__react__default.a.createElement("div", {
    className: WebsiteHeader_style_default.a.menu_item_3
  }, "Contact")));
});
// EXTERNAL MODULE: ./components/WebsiteHeader/Register/style.css
var Register_style = __webpack_require__(13);
var Register_style_default = /*#__PURE__*/__webpack_require__.n(Register_style);

// CONCATENATED MODULE: ./components/WebsiteHeader/Register/index.js


/* harmony default export */ var Register = (function () {
  return external__react__default.a.createElement("div", {
    className: Register_style_default.a.register
  }, external__react__default.a.createElement("div", {
    className: Register_style_default.a.register_button
  }, "Register"));
});
// CONCATENATED MODULE: ./components/WebsiteHeader/index.js




/* harmony default export */ var WebsiteHeader = (function () {
  return external__react__default.a.createElement("div", {
    className: WebsiteHeader_style_default.a.header
  }, external__react__default.a.createElement(Burger, null), external__react__default.a.createElement(Register, null));
});
// CONCATENATED MODULE: ./pages/PlatformPromo/index.js





/* harmony default export */ var PlatformPromo = __webpack_exports__["default"] = (function () {
  return external__react__default.a.createElement("div", {
    className: style_default.a.hero
  }, external__react__default.a.createElement(WebsiteHeader, null), external__react__default.a.createElement(Logo["default"], null), external__react__default.a.createElement("div", {
    className: style_default.a.hero_title
  }, "Lorem ipsum dolor sit amet"), external__react__default.a.createElement(Button_Amazing["default"], null));
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
	"register_modal": "register_modal_2BdMm",
	"register": "register_iLq0W",
	"register_button": "register_button_wy1nq"
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TeamMember__ = __webpack_require__(7);



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var items = _ref.items;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.section
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.section_title
  }, "Team"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.members
  }, items.map(function (member, key) {
    var memberClass = "".concat(__WEBPACK_IMPORTED_MODULE_1__style_css___default.a.member, " member_").concat(key); // metoda de a pune 2 clase pe un element

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: memberClass,
      key: key
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__TeamMember__["default"], {
      avatar: member.avatar,
      name: member.name,
      job: member.job,
      bio: member.bio
    }));
  })));
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {
	"section": "section_2lFl6",
	"section_title": "section_title_35mVI",
	"members": "members_3W82c",
	"member": "member_3rz4x"
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.newsletter
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.newsletter_title
  }, "Join our newsletter"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.newsletter_form
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.newsletter_input
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    type: "text",
    placeholder: "Placeholder"
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.newsletter_submit
  }, "SEND")));
});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {
	"newsletter": "newsletter_3mbYp",
	"newsletter_title": "newsletter_title_2ZUJY",
	"newsletter_form": "newsletter_form_3W1Eh",
	"newsletter_submit": "newsletter_submit_1Frui",
	"newsletter_input": "newsletter_input_1M8w0"
};

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(25);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./pages/PlatformPromo/index.js + 3 modules
var PlatformPromo = __webpack_require__(12);

// EXTERNAL MODULE: ./pages/Features/index.js
var Features = __webpack_require__(10);

// EXTERNAL MODULE: ./pages/Team/index.js
var Team = __webpack_require__(14);

// EXTERNAL MODULE: ./pages/Newsletter/index.js
var Newsletter = __webpack_require__(16);

// EXTERNAL MODULE: ./components/WebsiteFooter/style.css
var style = __webpack_require__(26);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./components/WebsiteFooter/Footer_upper/style.css
var Footer_upper_style = __webpack_require__(27);
var Footer_upper_style_default = /*#__PURE__*/__webpack_require__.n(Footer_upper_style);

// CONCATENATED MODULE: ./components/WebsiteFooter/Footer_upper/index.js


/* harmony default export */ var Footer_upper = (function () {
  return external__react__default.a.createElement("div", {
    className: Footer_upper_style_default.a.upper_footer
  }, external__react__default.a.createElement("div", {
    className: Footer_upper_style_default.a.contact
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
// EXTERNAL MODULE: ./components/WebsiteFooter/Footer_lower/style.css
var Footer_lower_style = __webpack_require__(28);
var Footer_lower_style_default = /*#__PURE__*/__webpack_require__.n(Footer_lower_style);

// EXTERNAL MODULE: ./playground.js
var playground = __webpack_require__(2);

// CONCATENATED MODULE: ./components/WebsiteFooter/Footer_lower/index.js



/* harmony default export */ var Footer_lower = (function () {
  return external__react__default.a.createElement("div", {
    className: Footer_lower_style_default.a.lower_footer
  }, external__react__default.a.createElement("div", {
    className: Footer_lower_style_default.a.logo
  }, external__react__default.a.createElement("img", {
    src: "".concat(playground["a" /* STATIC */], "/images/logo_dark.png")
  })), external__react__default.a.createElement("div", {
    className: Footer_lower_style_default.a.navigation
  }, external__react__default.a.createElement("div", {
    className: Footer_lower_style_default.a.navigation_item
  }, "About"), external__react__default.a.createElement("div", {
    className: Footer_lower_style_default.a.navigation_item
  }, "Concept"), external__react__default.a.createElement("div", {
    className: Footer_lower_style_default.a.navigation_item
  }, "Contact")), external__react__default.a.createElement("div", {
    className: Footer_lower_style_default.a.disclaimer
  }, "THIS WEBSITE IS JUST A TEST... THAT INPUT IS GDPR COMPLIANT (IT'S FAKE)"));
});
// CONCATENATED MODULE: ./components/WebsiteFooter/index.js




/* harmony default export */ var WebsiteFooter = (function () {
  return external__react__default.a.createElement("div", {
    className: style_default.a.footer
  }, external__react__default.a.createElement("div", {
    className: style_default.a.footer_upper
  }, external__react__default.a.createElement(Footer_upper, null)), external__react__default.a.createElement("div", {
    className: style_default.a.footer_lower
  }, external__react__default.a.createElement(Footer_lower, null)));
});
// EXTERNAL MODULE: ./pages/style.css
var pages_style = __webpack_require__(29);
var pages_style_default = /*#__PURE__*/__webpack_require__.n(pages_style);

// EXTERNAL MODULE: ./pages/data.js
var data = __webpack_require__(9);

// CONCATENATED MODULE: ./pages/index.js










/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external__react__default.a.createElement("div", {
    className: pages_style_default.a.application
  }, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Amatic+SC:400,700",
    rel: "stylesheet"
  })), external__react__default.a.createElement(PlatformPromo["default"], null), external__react__default.a.createElement(Features["default"], null), external__react__default.a.createElement(Team["default"], {
    items: data["default"].members
  }), external__react__default.a.createElement(Newsletter["default"], {
    items: data["default"].features
  }), external__react__default.a.createElement(WebsiteFooter, null));
});

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {
	"footer": "footer_38E2j",
	"footer_upper": "footer_upper_15dXz",
	"footer_lower": "footer_lower_iRxiw"
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {
	"contacts": "contacts_3pGq_",
	"contacts_info": "contacts_info_2fFkZ",
	"upper_footer": "upper_footer_3nKR9",
	"contact": "contact_kAcB2",
	"contacts_ctas": "contacts_ctas_1fDKb"
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {
	"lower_footer": "lower_footer_1qyEe",
	"logo": "logo_3IsXG",
	"navigation": "navigation_1fVFv",
	"navigation_item": "navigation_item_8lLCW",
	"disclaimer": "disclaimer_kbr5y"
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {
	"application": "application_2w-7Z"
};

/***/ })
/******/ ]);