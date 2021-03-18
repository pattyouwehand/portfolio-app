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
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_shared_Hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/shared/Hero */ "./components/shared/Hero.js");
/* harmony import */ var _components_shared_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/shared/Navbar */ "./components/shared/Navbar.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const client = new apollo_boost__WEBPACK_IMPORTED_MODULE_1___default.a({
  uri: 'http://localhost:3000/graphql'
});

const MyApp = ({
  Component,
  pageProps
}) => {
  const isHomePage = () => Component.name === 'Home';

  return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
    client: client
  }, __jsx("div", {
    className: "portfolio-app"
  }, __jsx(_components_shared_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], null), isHomePage() && __jsx(_components_shared_Hero__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx("div", {
    className: "container"
  }, __jsx(Component, pageProps)), isHomePage() && __jsx("footer", {
    id: "sticky-footer",
    className: "py-4 bg-black text-white-50 py-3"
  }, __jsx("div", {
    className: "container text-center"
  }, __jsx("small", null, "Copyright \xA9 Your Website")))));
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

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaGFyZWQvSGVyby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NoYXJlZC9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWJvb3N0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiJdLCJuYW1lcyI6WyJIZXJvIiwiQXBwTGluayIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiaHJlZiIsIkFwcE5hdmJhciIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsInVyaSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNIb21lUGFnZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUFELE9BREYsRUFFSU0sVUFBVSxNQUFNLE1BQUMsK0RBQUQsT0FGcEIsRUFHRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsTUFBQyxTQUFELEVBQWVELFNBQWYsQ0FERixDQUhGLEVBTUdDLFVBQVUsTUFDVDtBQUFRLE1BQUUsRUFBQyxlQUFYO0FBQTJCLGFBQVMsRUFBQztBQUFyQyxLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxtREFERixDQURGLENBUEosQ0FERixDQURGO0FBa0JELENBdEJEOztBQXdCZUgsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiY29uc3QgSGVybyA9ICgpID0+XHJcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmotaGVyb1wiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiZmotaGVyby13cmFwcGVyIHJvd1wiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWxlZnQgY29sLW1kLTZcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cIndoaXRlIGhlcm8tdGl0bGVcIj5IZXkgSSdtIEZpbGlwLiBFeHBlcmllbmNlZCBmdWxsIHN0YWNrIGRldmVsb3BlcjwvaDE+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ3aGl0ZSBoZXJvLXN1YnRpdGxlXCI+Q2hlY2sgbXkgcG9ydGZvbGlvIGFuZCB2aWRlbyB0dXRvcmlhbHM8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1tYWluIGJnLWJsdWUgdHR1XCI+U2VlIG15IHdvcms8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tcmlnaHQgY29sLW1kLTZcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImdyb3cgaGVyby1saW5rXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlcm8taW1hZ2VcIlxyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2kudWRlbXljZG4uY29tL2NvdXJzZS83NTB4NDIyLzE2NTI2MDhfNjYyYl84LmpwZ1wiPjwvaW1nPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9zZWN0aW9uPlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb1xyXG4iLCJpbXBvcnQgeyBOYXZiYXIsIE5hdiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJ1xyXG5cclxuY29uc3QgQXBwTGluayA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGhyZWYgfSkgPT4gXHJcbiAgPExpbmsgaHJlZj17aHJlZn0+XHJcbiAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2NoaWxkcmVufTwvYT5cclxuICA8L0xpbms+XHJcblxyXG5jb25zdCBBcHBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItd3JhcHBlclwiPlxyXG4gICAgICA8TmF2YmFyIGV4cGFuZD1cImxnXCIgY2xhc3NOYW1lPVwibmF2YmFyLWRhcmsgZmotbXc5XCI+XHJcbiAgICAgICAgPEFwcExpbmsgaHJlZj0nLycgY2xhc3NOYW1lPSduYXZiYXItYnJhbmQgbXItMyBmb250LXdlaWdodC1ib2xkJz5QYXR0eSBPdXdlaGFuZDwvQXBwTGluaz4gXHJcbiAgICAgICAgPE5hdmJhci5Ub2dnbGUgLz5cclxuICAgICAgICA8TmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxBcHBMaW5rIGhyZWY9XCIvcG9ydGZvbGlvc1wiIGNsYXNzTmFtZT1cIm5hdmxpbmsgbXItM1wiPlxyXG4gICAgICAgICAgICAgIFBvcnRmb2xpb3NcclxuICAgICAgICAgICAgPC9BcHBMaW5rPlxyXG4gICAgICAgICAgICA8QXBwTGluayBocmVmPVwiL2ZvcnVtL2NhdGVnb3JpZXNcIiBjbGFzc05hbWU9XCJuYXZsaW5rIG1yLTNcIj5cclxuICAgICAgICAgICAgICBGb3J1bVxyXG4gICAgICAgICAgICA8L0FwcExpbms+XHJcbiAgICAgICAgICAgIDxBcHBMaW5rIGhyZWY9XCIvY3ZcIiBjbGFzc05hbWU9XCJuYXZsaW5rIG1yLTNcIj5cclxuICAgICAgICAgICAgICBDdlxyXG4gICAgICAgICAgICA8L0FwcExpbms+XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgIDxOYXY+XHJcbiAgICAgICAgICA8QXBwTGluayBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwibmF2bGluayBtci0zXCI+XHJcbiAgICAgICAgICAgIFNpbmcgSW5cclxuICAgICAgICAgIDwvQXBwTGluaz5cclxuICAgICAgICAgIDxBcHBMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIiBjbGFzc05hbWU9XCJtci0zIGJ0biBidG4tc3VjY2VzcyBiZy1ncmVlbi0yIGJyaWdodFwiPlxyXG4gICAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgICA8L0FwcExpbms+XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcE5hdmJhclxyXG4iLCJpbXBvcnQgQXBvbGxvQ2xpZW50IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXHJcbmltcG9ydCAnQC9zdHlsZXMvaW5kZXguc2NzcydcclxuaW1wb3J0IEhlcm8gZnJvbSAnQC9jb21wb25lbnRzL3NoYXJlZC9IZXJvJ1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ0AvY29tcG9uZW50cy9zaGFyZWQvTmF2YmFyJ1xyXG5cclxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgdXJpOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2dyYXBocWwnXHJcbn0pXHJcblxyXG5cclxuXHJcbmNvbnN0IE15QXBwID0gKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pID0+IHtcclxuXHJcbiAgY29uc3QgaXNIb21lUGFnZSA9ICgpID0+IENvbXBvbmVudC5uYW1lID09PSAnSG9tZSdcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWFwcFwiPlxyXG4gICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICB7IGlzSG9tZVBhZ2UoKSAmJiA8SGVybyAvPiB9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7aXNIb21lUGFnZSgpICYmXHJcbiAgICAgICAgICA8Zm9vdGVyIGlkPVwic3RpY2t5LWZvb3RlclwiIGNsYXNzTmFtZT1cInB5LTQgYmctYmxhY2sgdGV4dC13aGl0ZS01MCBweS0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHNtYWxsPkNvcHlyaWdodCAmY29weTsgWW91ciBXZWJzaXRlPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vcmVhY3QtaG9va3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWJvb3N0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=