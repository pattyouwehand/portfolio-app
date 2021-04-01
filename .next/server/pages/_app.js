module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/shared/Hero.js":
/*!***********************************!*\
  !*** ./components/shared/Hero.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Hero = () => __jsx("section", {
  className: "fj-hero"
}, __jsx("div", {
  className: "fj-hero-wrapper row"
}, __jsx("div", {
  className: "hero-left col-md-6"
}, __jsx("h1", {
  className: "white hero-title"
}, "Hey I'm Filip. Experienced full stack developer"), __jsx("h2", {
  className: "white hero-subtitle"
}, "Check my portfolio and video tutorials"), __jsx("div", {
  className: "button-container"
}, __jsx("a", {
  href: "",
  className: "btn btn-main bg-blue ttu"
}, "See my work"))), __jsx("div", {
  className: "hero-right col-md-6"
}, __jsx("div", {
  className: "hero-image-container"
}, __jsx("a", {
  className: "grow hero-link"
}, __jsx("img", {
  className: "hero-image",
  src: "https://i.udemycdn.com/course/750x422/1652608_662b_8.jpg"
}))))));

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/shared/Navbar.js":
/*!*************************************!*\
  !*** ./components/shared/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AppLink = ({
  children,
  className,
  href
}) => __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: href
}, __jsx("a", {
  className: className
}, children));

const AppNavbar = () => {
  return __jsx("div", {
    className: "navbar-wrapper"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    expand: "lg",
    className: "navbar-dark fj-mw9"
  }, __jsx(AppLink, {
    href: "/",
    className: "navbar-brand mr-3 font-weight-bold"
  }, "Patty Ouwehand"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Toggle, null), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Collapse, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    className: "mr-auto"
  }, __jsx(AppLink, {
    href: "/portfolios",
    className: "navlink mr-3"
  }, "Portfolios"), __jsx(AppLink, {
    href: "/forum/categories",
    className: "navlink mr-3"
  }, "Forum"), __jsx(AppLink, {
    href: "/cv",
    className: "navlink mr-3"
  }, "Cv")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], null, __jsx(AppLink, {
    href: "/login",
    className: "navlink mr-3"
  }, "Sing In"), __jsx(AppLink, {
    href: "/register",
    className: "mr-3 btn btn-success bg-green-2 bright"
  }, "Sign Up")))));
};

/* harmony default export */ __webpack_exports__["default"] = (AppNavbar);

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_shared_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shared/Navbar */ "./components/shared/Navbar.js");
/* harmony import */ var _components_shared_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shared/Hero */ "./components/shared/Hero.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const MyApp = ({
  Component,
  pageProps
}) => {
  const isHomePage = () => Component.name === 'Home';

  return __jsx("div", {
    className: "portfolio-app"
  }, __jsx(_components_shared_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), isHomePage() && __jsx(_components_shared_Hero__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx("div", {
    className: "container"
  }, __jsx(Component, pageProps)), isHomePage() && __jsx("footer", {
    id: "sticky-footer",
    className: "py-4 bg-black text-white-50 py-3"
  }, __jsx("div", {
    className: "container text-center"
  }, __jsx("small", null, "Copyright \xA9 Your Website"))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaGFyZWQvSGVyby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NoYXJlZC9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L0xpbmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIl0sIm5hbWVzIjpbIkhlcm8iLCJBcHBMaW5rIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJocmVmIiwiQXBwTmF2YmFyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpc0hvbWVQYWdlIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUEr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Q0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJjb25zdCBIZXJvID0gKCkgPT5cclxuICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmai1oZXJvXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJmai1oZXJvLXdyYXBwZXIgcm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tbGVmdCBjb2wtbWQtNlwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwid2hpdGUgaGVyby10aXRsZVwiPkhleSBJJ20gRmlsaXAuIEV4cGVyaWVuY2VkIGZ1bGwgc3RhY2sgZGV2ZWxvcGVyPC9oMT5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cIndoaXRlIGhlcm8tc3VidGl0bGVcIj5DaGVjayBteSBwb3J0Zm9saW8gYW5kIHZpZGVvIHR1dG9yaWFsczwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJidG4gYnRuLW1haW4gYmctYmx1ZSB0dHVcIj5TZWUgbXkgd29yazwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1yaWdodCBjb2wtbWQtNlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8taW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ3JvdyBoZXJvLWxpbmtcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVyby1pbWFnZVwiXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS51ZGVteWNkbi5jb20vY291cnNlLzc1MHg0MjIvMTY1MjYwOF82NjJiXzguanBnXCI+PC9pbWc+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3NlY3Rpb24+XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvXHJcbiIsImltcG9ydCB7IE5hdmJhciwgTmF2IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnXHJcblxyXG5jb25zdCBBcHBMaW5rID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgaHJlZiB9KSA9PiBcclxuICA8TGluayBocmVmPXtocmVmfT5cclxuICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57Y2hpbGRyZW59PC9hPlxyXG4gIDwvTGluaz5cclxuXHJcbmNvbnN0IEFwcE5hdmJhciA9ICgpID0+IHtcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci13cmFwcGVyXCI+XHJcbiAgICAgIDxOYXZiYXIgZXhwYW5kPVwibGdcIiBjbGFzc05hbWU9XCJuYXZiYXItZGFyayBmai1tdzlcIj5cclxuICAgICAgICA8QXBwTGluayBocmVmPScvJyBjbGFzc05hbWU9J25hdmJhci1icmFuZCBtci0zIGZvbnQtd2VpZ2h0LWJvbGQnPlBhdHR5IE91d2VoYW5kPC9BcHBMaW5rPiBcclxuICAgICAgICA8TmF2YmFyLlRvZ2dsZSAvPlxyXG4gICAgICAgIDxOYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5cclxuICAgICAgICAgICAgPEFwcExpbmsgaHJlZj1cIi9wb3J0Zm9saW9zXCIgY2xhc3NOYW1lPVwibmF2bGluayBtci0zXCI+XHJcbiAgICAgICAgICAgICAgUG9ydGZvbGlvc1xyXG4gICAgICAgICAgICA8L0FwcExpbms+XHJcbiAgICAgICAgICAgIDxBcHBMaW5rIGhyZWY9XCIvZm9ydW0vY2F0ZWdvcmllc1wiIGNsYXNzTmFtZT1cIm5hdmxpbmsgbXItM1wiPlxyXG4gICAgICAgICAgICAgIEZvcnVtXHJcbiAgICAgICAgICAgIDwvQXBwTGluaz5cclxuICAgICAgICAgICAgPEFwcExpbmsgaHJlZj1cIi9jdlwiIGNsYXNzTmFtZT1cIm5hdmxpbmsgbXItM1wiPlxyXG4gICAgICAgICAgICAgIEN2XHJcbiAgICAgICAgICAgIDwvQXBwTGluaz5cclxuICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgPE5hdj5cclxuICAgICAgICAgIDxBcHBMaW5rIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9XCJuYXZsaW5rIG1yLTNcIj5cclxuICAgICAgICAgICAgU2luZyBJblxyXG4gICAgICAgICAgPC9BcHBMaW5rPlxyXG4gICAgICAgICAgPEFwcExpbmsgaHJlZj1cIi9yZWdpc3RlclwiIGNsYXNzTmFtZT1cIm1yLTMgYnRuIGJ0bi1zdWNjZXNzIGJnLWdyZWVuLTIgYnJpZ2h0XCI+XHJcbiAgICAgICAgICAgIFNpZ24gVXBcclxuICAgICAgICAgIDwvQXBwTGluaz5cclxuICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTmF2YmFyXHJcbiIsIlxyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LnNjc3MnO1xyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9OYXZiYXInO1xyXG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9IZXJvJztcclxuXHJcbmNvbnN0IE15QXBwID0gKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pID0+IHtcclxuXHJcbiAgY29uc3QgaXNIb21lUGFnZSA9ICgpID0+IENvbXBvbmVudC5uYW1lID09PSAnSG9tZSdcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWFwcFwiPlxyXG4gICAgICA8TmF2YmFyIC8+XHJcbiAgICAgIHsgaXNIb21lUGFnZSgpICYmIDxIZXJvIC8+IH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogRk9PVEVSIFNUQVJUUyAqL31cclxuICAgICAgeyBpc0hvbWVQYWdlKCkgJiZcclxuICAgICAgICA8Zm9vdGVyIGlkPVwic3RpY2t5LWZvb3RlclwiIGNsYXNzTmFtZT1cInB5LTQgYmctYmxhY2sgdGV4dC13aGl0ZS01MCBweS0zXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8c21hbGw+Q29weXJpZ2h0ICZjb3B5OyBZb3VyIFdlYnNpdGU8L3NtYWxsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIH1cclxuICAgICAgey8qIEZPT1RFUiBFTkRTICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9MaW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9