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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Patty\\udemy\\portfolio-app\\pages\\index.js";

const Home = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: "portfolio-app",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "navbar-wrapper",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "navbar navbar-expand-lg navbar-dark fj-mw9",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "navbar-brand mr-3 font-weight-bold",
        href: "#",
        children: "FilipJerga"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "navbar-toggler-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "navbar-nav",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "nav-item mr-3",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "nav-link",
              href: "#",
              children: "Portfolio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "nav-item mr-3",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "nav-link",
              href: "#",
              children: "Courses"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "nav-item mr-3",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "nav-link",
              href: "#",
              children: "Cv"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "nav-item mr-3",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "nav-link",
              href: "#",
              children: "Ask me"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "navbar-nav ml-auto",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "nav-item mr-3",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "nav-link",
              href: "#",
              children: "Sign Up"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "nav-item mr-3",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "nav-link btn btn-success bg-green-2 bright",
              href: "#",
              children: "Sign In"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "fj-hero",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "fj-hero-wrapper row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "hero-left col-md-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "white hero-title",
          children: "Hey I'm Filip. Experienced full stack developer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "white hero-subtitle",
          children: "Check my portfolio and video tutorials"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "button-container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "",
            className: "btn btn-main bg-blue ttu",
            children: "See my work"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "hero-right col-md-6",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "hero-image-container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "grow hero-link",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "hero-image",
              src: "https://i.udemycdn.com/course/750x422/1652608_662b_8.jpg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "section-title",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "px-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pt-5 pb-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Portfolios"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "pb-5",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card subtle-shadow no-border",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "card-body",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                className: "card-title",
                children: "Card title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                className: "card-subtitle mb-2 text-muted",
                children: "Card subtitle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "card-text fs-2",
                children: "Some quick example text to build on the card title and make up the bulk of the card's content."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "card-footer no-border",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-muted",
                children: "Last updated 3 mins ago"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card subtle-shadow no-border",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "card-body",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                className: "card-title",
                children: "Card title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                className: "card-subtitle mb-2 text-muted",
                children: "Card subtitle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "card-text fs-2 ",
                children: "Some quick example text to build on the card title and make up the bulk of the card's content."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "card-footer no-border",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-muted",
                children: "Last updated 3 mins ago"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card subtle-shadow no-border",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "card-body",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                className: "card-title",
                children: "Card title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                className: "card-subtitle mb-2 text-muted",
                children: "Card subtitle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "card-text fs-2 ",
                children: "Some quick example text to build on the card title and make up the bulk of the card's content."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "card-footer no-border",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-muted",
                children: "Last updated 3 mins ago"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "",
      className: "btn btn-main bg-blue ttu",
      children: "See More Portfolios"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "section-title",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "px-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pt-5 pb-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Ask Me"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "pb-5",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "list-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "list-group-item list-group-item-action flex-column align-items-start py-3 subtle-shadow no-border",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex w-100 justify-content-between",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              className: "mb-1 black",
              children: "List group item heading"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
              children: "3 days ago"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mb-1",
            children: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "avatar-container my-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "https://via.placeholder.com/150",
              className: "avatar-image mr-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "avatar-title",
              children: "Filip Jerga"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "list-group-item list-group-item-action flex-column align-items-start mt-3 py-3 subtle-shadow no-border",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex w-100 justify-content-between",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              className: "mb-1 black",
              children: "List group item heading"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
              className: "text-muted",
              children: "3 days ago"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mb-1",
            children: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "avatar-container my-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "https://via.placeholder.com/150",
              className: "avatar-image mr-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "avatar-title",
              children: "Filip Jerga"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "list-group-item list-group-item-action flex-column align-items-start mt-3 py-3 subtle-shadow no-border",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex w-100 justify-content-between",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              className: "mb-1 black",
              children: "List group item heading"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
              className: "text-muted",
              children: "3 days ago"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mb-1",
            children: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "avatar-container my-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "https://via.placeholder.com/150",
              className: "avatar-image mr-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "avatar-title",
              children: "Filip Jerga"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "",
      className: "btn btn-main bg-blue ttu",
      children: "See More Posts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "section-title",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "px-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pt-5 pb-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Categories"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "fj-category-list",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "fj-category-container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "fj-category subtle-shadow no-border",
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "category-information",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "heading gray-90",
                  children: "General Discussion"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "description",
                  children: "Just general question"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 178,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "fj-category-container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "fj-category subtle-shadow no-border",
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "category-information",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "heading gray-90",
                  children: "Other Discussion"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "description",
                  children: "Just general question"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "fj-category-container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "fj-category subtle-shadow no-border",
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "category-information",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "heading gray-90",
                  children: "Some Discussion"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 213,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "description",
                  children: "Just general question"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "section-title",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "px-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pt-5 pb-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Specific Category"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "fj-topic-list",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        className: "table table-hover ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "col",
              children: "Topic"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "col",
              children: "Category"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "col",
              children: "Author"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "col",
              children: "Replies"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Some Topic Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              className: "category",
              children: "General Discussion"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: "Filip Jerga"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: "2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Some Topic Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              className: "category",
              children: "General Discussion"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: "Filip Jerga"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: "2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Some Topic Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              className: "category",
              children: "General Discussion"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: "Filip Jerga"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: "2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "section-title",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "px-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pt-5 pb-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Specific Topic"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "fj-post-list",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-9",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "topic-post",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "row",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "topic-avatar",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "main-avatar",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        className: "avatar subtle-shadow",
                        src: "https://i.imgur.com/cVDadwb.png"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 284,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 283,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 282,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "topic-body",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "topic-header",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "topic-meta",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "name-container",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "name",
                            children: "Filip Jerga"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 293,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 292,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "date-container",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "date",
                            children: "21h"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 295,
                            columnNumber: 59
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 295,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 291,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 290,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "topic-content",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "cooked",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 300,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 299,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
                        className: "post-menu-area",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
                          className: "post-controls",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "actions",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                              className: "btn",
                              children: "reply"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 305,
                              columnNumber: 31
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 304,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 303,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 302,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 298,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 289,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 281,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 280,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-9",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "topic-post",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "row",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "topic-avatar",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "main-avatar",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        className: "avatar subtle-shadow",
                        src: "https://i.imgur.com/cVDadwb.png"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 323,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 322,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 321,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "topic-body",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "topic-header",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "topic-meta",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "name-container",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "name",
                            children: "Filip Jerga"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 332,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 331,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "date-container",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "date",
                            children: "21h"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 334,
                            columnNumber: 59
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 334,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 330,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 329,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "topic-content",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "cooked",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 339,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 338,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
                        className: "post-menu-area",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
                          className: "post-controls",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "actions",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                              className: "btn",
                              children: "reply"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 344,
                              columnNumber: 31
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 343,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 342,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 341,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 337,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 328,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 320,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 319,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 318,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 317,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-9",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "topic-post",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "row",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "topic-avatar",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "main-avatar",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        className: "avatar subtle-shadow",
                        src: "https://i.imgur.com/cVDadwb.png"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 362,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 361,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 360,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "topic-body",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "topic-header",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "topic-meta",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "name-container",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "name",
                            children: "Filip Jerga"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 371,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 370,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "date-container",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "date",
                            children: "21h"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 373,
                            columnNumber: 59
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 373,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 369,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 368,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "topic-content",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "cooked",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 378,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 377,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
                        className: "post-menu-area",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
                          className: "post-controls",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "actions",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                              className: "btn",
                              children: "reply"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 383,
                              columnNumber: 31
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 382,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 381,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 380,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 376,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 367,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 359,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 358,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 357,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 356,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "section-title",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "px-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pt-5 pb-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Login Page"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 401,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bwm-form",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-5 mx-auto",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "page-title",
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 408,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "email",
                children: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 411,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "email",
                className: "form-control",
                id: "email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 412,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 410,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "password",
                children: "Password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 418,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "password",
                className: "form-control",
                id: "password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 419,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 417,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "submit",
              className: "btn btn-main bg-blue py-2 ttu",
              children: "Submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 424,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 409,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 406,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "reply-controls",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "reply-area",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "reply-to",
        children: ["Reply To: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "text ml-2",
          children: "User1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 439,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 438,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "fj-editor-input",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          name: "title",
          placeholder: "Topic title",
          type: "text"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 442,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 441,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "fj-editor",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "fj-editor-textarea-wrapper",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
            name: "content",
            placeholder: "Type here"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 449,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 448,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "fj-editor-preview-wrapper",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "preview",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 456,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 455,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 454,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 447,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "submit-area",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "send mr-auto",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            href: "#",
            className: "btn btn-main bg-blue py-2 ttu",
            children: "Reply"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 462,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "btn py-2 ttu gray-10",
            children: "Cancel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 465,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 461,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "btn py-2 ttu gray-10",
            children: "hide preview"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 468,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 467,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 460,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 436,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    id: "sticky-footer",
    className: "py-4 bg-black text-white-50 py-3",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container text-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
        children: "Copyright \xA9 Your Website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 477,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 475,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 2,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQSxNQUFNQSxJQUFJLEdBQUcsbUJBQ1g7QUFBSyxXQUFTLEVBQUMsZUFBZjtBQUFBLDBCQUVFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsNENBQWY7QUFBQSw4QkFDRTtBQUFHLGlCQUFTLEVBQUMsb0NBQWI7QUFBa0QsWUFBSSxFQUFDLEdBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBemRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQW1lZUEsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNuZUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tYXBwXCI+XG4gICAgey8qIE5BVkJBUiBTVEFSVCAqL31cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci13cmFwcGVyXCI+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGZqLW13OVwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQgbXItMyBmb250LXdlaWdodC1ib2xkXCIgaHJlZj1cIiNcIj5GaWxpcEplcmdhPC9hPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXItM1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+UG9ydGZvbGlvPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBtci0zXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5Db3Vyc2VzPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBtci0zXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5DdjwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXItM1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+QXNrIG1lPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBtci0zXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5TaWduIFVwPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBtci0zXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGJ0biBidG4tc3VjY2VzcyBiZy1ncmVlbi0yIGJyaWdodFwiIGhyZWY9XCIjXCI+U2lnbiBJbjwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgICB7LyogTkFWQkFSIEVORFMgKi99XG4gICAgey8qIEhFUk8gU1RBUlRTICovfVxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZqLWhlcm9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmotaGVyby13cmFwcGVyIHJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tbGVmdCBjb2wtbWQtNlwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3aGl0ZSBoZXJvLXRpdGxlXCI+SGV5IEknbSBGaWxpcC4gRXhwZXJpZW5jZWQgZnVsbCBzdGFjayBkZXZlbG9wZXI8L2gxPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ3aGl0ZSBoZXJvLXN1YnRpdGxlXCI+Q2hlY2sgbXkgcG9ydGZvbGlvIGFuZCB2aWRlbyB0dXRvcmlhbHM8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImJ0biBidG4tbWFpbiBiZy1ibHVlIHR0dVwiPlNlZSBteSB3b3JrPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXJpZ2h0IGNvbC1tZC02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ3JvdyBoZXJvLWxpbmtcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlcm8taW1hZ2VcIlxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS51ZGVteWNkbi5jb20vY291cnNlLzc1MHg0MjIvMTY1MjYwOF82NjJiXzguanBnXCI+PC9pbWc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIHsvKiBIRVJPIEVORFMgKi99XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIHsvKiBIT01FIFBBR0UgU1RBUlRTICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTUgcGItNFwiPlxuICAgICAgICAgICAgPGgxPlBvcnRmb2xpb3M8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBiLTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc3VidGxlLXNoYWRvdyBuby1ib3JkZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkNhcmQgdGl0bGU8L2g1PlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIG1iLTIgdGV4dC1tdXRlZFwiPkNhcmQgc3VidGl0bGU8L2g2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmcy0yXCI+U29tZSBxdWljayBleGFtcGxlIHRleHQgdG8gYnVpbGQgb24gdGhlIGNhcmQgdGl0bGUgYW5kIG1ha2UgdXAgdGhlIGJ1bGsgb2YgdGhlIGNhcmQncyBjb250ZW50LjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXIgbm8tYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5MYXN0IHVwZGF0ZWQgMyBtaW5zIGFnbzwvc21hbGw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHN1YnRsZS1zaGFkb3cgbm8tYm9yZGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5DYXJkIHRpdGxlPC9oNT5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSBtYi0yIHRleHQtbXV0ZWRcIj5DYXJkIHN1YnRpdGxlPC9oNj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHQgZnMtMiBcIj5Tb21lIHF1aWNrIGV4YW1wbGUgdGV4dCB0byBidWlsZCBvbiB0aGUgY2FyZCB0aXRsZSBhbmQgbWFrZSB1cCB0aGUgYnVsayBvZiB0aGUgY2FyZCdzIGNvbnRlbnQuPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlciBuby1ib3JkZXJcIj5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPkxhc3QgdXBkYXRlZCAzIG1pbnMgYWdvPC9zbWFsbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc3VidGxlLXNoYWRvdyBuby1ib3JkZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkNhcmQgdGl0bGU8L2g1PlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIG1iLTIgdGV4dC1tdXRlZFwiPkNhcmQgc3VidGl0bGU8L2g2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmcy0yIFwiPlNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mIHRoZSBjYXJkJ3MgY29udGVudC48L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyIG5vLWJvcmRlclwiPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+TGFzdCB1cGRhdGVkIDMgbWlucyBhZ288L3NtYWxsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJidG4gYnRuLW1haW4gYmctYmx1ZSB0dHVcIj5TZWUgTW9yZSBQb3J0Zm9saW9zPC9hPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTUgcGItNFwiPlxuICAgICAgICAgICAgPGgxPkFzayBNZTwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGItNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0IHB5LTMgc3VidGxlLXNoYWRvdyBuby1ib3JkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IHctMTAwIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0xIGJsYWNrXCI+TGlzdCBncm91cCBpdGVtIGhlYWRpbmc8L2g1PlxuICAgICAgICAgICAgICA8c21hbGw+MyBkYXlzIGFnbzwvc21hbGw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTFcIj5Eb25lYyBpZCBlbGl0IG5vbiBtaSBwb3J0YSBncmF2aWRhIGF0IGVnZXQgbWV0dXMuIE1hZWNlbmFzIHNlZCBkaWFtIGVnZXQgcmlzdXMgdmFyaXVzIGJsYW5kaXQuPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXItY29udGFpbmVyIG15LTJcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCIgY2xhc3NOYW1lPVwiYXZhdGFyLWltYWdlIG1yLTJcIj48L2ltZz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXZhdGFyLXRpdGxlXCI+RmlsaXAgSmVyZ2E8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydCBtdC0zIHB5LTMgc3VidGxlLXNoYWRvdyBuby1ib3JkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IHctMTAwIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0xIGJsYWNrXCI+TGlzdCBncm91cCBpdGVtIGhlYWRpbmc8L2g1PlxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPjMgZGF5cyBhZ288L3NtYWxsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0xXCI+RG9uZWMgaWQgZWxpdCBub24gbWkgcG9ydGEgZ3JhdmlkYSBhdCBlZ2V0IG1ldHVzLiBNYWVjZW5hcyBzZWQgZGlhbSBlZ2V0IHJpc3VzIHZhcml1cyBibGFuZGl0LjwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyLWNvbnRhaW5lciBteS0yXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MFwiIGNsYXNzTmFtZT1cImF2YXRhci1pbWFnZSBtci0yXCI+PC9pbWc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF2YXRhci10aXRsZVwiPkZpbGlwIEplcmdhPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtc3RhcnQgbXQtMyBweS0zIHN1YnRsZS1zaGFkb3cgbm8tYm9yZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCB3LTEwMCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMSBibGFja1wiPkxpc3QgZ3JvdXAgaXRlbSBoZWFkaW5nPC9oNT5cbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj4zIGRheXMgYWdvPC9zbWFsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMVwiPkRvbmVjIGlkIGVsaXQgbm9uIG1pIHBvcnRhIGdyYXZpZGEgYXQgZWdldCBtZXR1cy4gTWFlY2VuYXMgc2VkIGRpYW0gZWdldCByaXN1cyB2YXJpdXMgYmxhbmRpdC48L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci1jb250YWluZXIgbXktMlwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTBcIiBjbGFzc05hbWU9XCJhdmF0YXItaW1hZ2UgbXItMlwiPjwvaW1nPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdmF0YXItdGl0bGVcIj5GaWxpcCBKZXJnYTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1tYWluIGJnLWJsdWUgdHR1XCI+U2VlIE1vcmUgUG9zdHM8L2E+XG4gICAgICB7LyogSE9NRSBQQUdFIEVORFMgKi99XG4gICAgICB7LyogRk9SVU0gQ0FURUdPUklFUyBTVEFSVCAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01IHBiLTRcIj5cbiAgICAgICAgICAgIDxoMT5DYXRlZ29yaWVzPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmai1jYXRlZ29yeS1saXN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmai1jYXRlZ29yeS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmotY2F0ZWdvcnkgc3VidGxlLXNoYWRvdyBuby1ib3JkZXJcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWljb25cIj5cbiAgICAgICAgICAgICAgICAvLyAgIDxpbWcgc3JjPVwiaW1hZ2VzL3Blbi5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIC8vIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWluZm9ybWF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmcgZ3JheS05MFwiPlxuICAgICAgICAgICAgICAgICAgICBHZW5lcmFsIERpc2N1c3Npb25cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICBKdXN0IGdlbmVyYWwgcXVlc3Rpb25cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZqLWNhdGVnb3J5LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmai1jYXRlZ29yeSBzdWJ0bGUtc2hhZG93IG5vLWJvcmRlclwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktaWNvblwiPlxuICAgICAgICAgICAgICAgIC8vICAgPGltZyBzcmM9XCJpbWFnZXMvcGVuLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgLy8gPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktaW5mb3JtYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZyBncmF5LTkwXCI+XG4gICAgICAgICAgICAgICAgICAgIE90aGVyIERpc2N1c3Npb25cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICBKdXN0IGdlbmVyYWwgcXVlc3Rpb25cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZqLWNhdGVnb3J5LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmai1jYXRlZ29yeSBzdWJ0bGUtc2hhZG93IG5vLWJvcmRlclwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktaWNvblwiPlxuICAgICAgICAgICAgICAgIC8vICAgPGltZyBzcmM9XCJpbWFnZXMvcGVuLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgLy8gPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktaW5mb3JtYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZyBncmF5LTkwXCI+XG4gICAgICAgICAgICAgICAgICAgIFNvbWUgRGlzY3Vzc2lvblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIEp1c3QgZ2VuZXJhbCBxdWVzdGlvblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIHsvKiBGT1JVTSBDQVRFR09SSUVTIEVORFMgKi99XG4gICAgICB7LyogVE9QSUNTIFBBR0UgU1RBUlRTICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTUgcGItNFwiPlxuICAgICAgICAgICAgPGgxPlNwZWNpZmljIENhdGVnb3J5PC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmai10b3BpYy1saXN0XCI+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlciBcIj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlRvcGljPC90aD5cbiAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Q2F0ZWdvcnk8L3RoPlxuICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BdXRob3I8L3RoPlxuICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5SZXBsaWVzPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5Tb21lIFRvcGljIEluZm88L3RoPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5HZW5lcmFsIERpc2N1c3Npb248L3RkPlxuICAgICAgICAgICAgICA8dGQ+RmlsaXAgSmVyZ2E8L3RkPlxuICAgICAgICAgICAgICA8dGQ+MjwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+U29tZSBUb3BpYyBJbmZvPC90aD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+R2VuZXJhbCBEaXNjdXNzaW9uPC90ZD5cbiAgICAgICAgICAgICAgPHRkPkZpbGlwIEplcmdhPC90ZD5cbiAgICAgICAgICAgICAgPHRkPjI8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPlNvbWUgVG9waWMgSW5mbzwvdGg+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPkdlbmVyYWwgRGlzY3Vzc2lvbjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5GaWxpcCBKZXJnYTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD4yPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIHsvKiBUT1BJQ1MgUEFHRSBFTkRTICovfVxuICAgICAgey8qIFBPU1RTIFBBR0UgU1RBUlRTICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTUgcGItNFwiPlxuICAgICAgICAgICAgPGgxPlNwZWNpZmljIFRvcGljPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmai1wb3N0LWxpc3RcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljLXBvc3RcIj5cbiAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9waWMtYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdmF0YXIgc3VidGxlLXNoYWRvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vY1ZEYWR3Yi5wbmdcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9waWMtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9waWMtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljLW1ldGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj5GaWxpcCBKZXJnYTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1jb250YWluZXJcIj48c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+MjFoPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BpYy1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvb2tlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicG9zdC1tZW51LWFyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJwb3N0LWNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPnJlcGx5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljLXBvc3RcIj5cbiAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9waWMtYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdmF0YXIgc3VidGxlLXNoYWRvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vY1ZEYWR3Yi5wbmdcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9waWMtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9waWMtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljLW1ldGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj5GaWxpcCBKZXJnYTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1jb250YWluZXJcIj48c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+MjFoPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BpYy1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvb2tlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicG9zdC1tZW51LWFyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJwb3N0LWNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPnJlcGx5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljLXBvc3RcIj5cbiAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9waWMtYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdmF0YXIgc3VidGxlLXNoYWRvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vY1ZEYWR3Yi5wbmdcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9waWMtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9waWMtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljLW1ldGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj5GaWxpcCBKZXJnYTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1jb250YWluZXJcIj48c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+MjFoPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BpYy1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvb2tlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicG9zdC1tZW51LWFyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJwb3N0LWNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPnJlcGx5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICB7LyogUE9TVFMgUEFHRSBFTkRTICovfVxuICAgICAgey8qIExPR0lOIFBBR0UgU1RBUlRTICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTUgcGItNFwiPlxuICAgICAgICAgICAgPGgxPkxvZ2luIFBhZ2U8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYndtLWZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01IG14LWF1dG9cIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+TG9naW48L2gxPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1tYWluIGJnLWJsdWUgcHktMiB0dHVcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiBMT0dJTiBQQUdFIEVORFMgKi99XG4gICAgPC9kaXY+XG5cbiAgICB7LyogUkVQTElFUiBTVEFSVFMgKi99XG4gICAgey8qIDxkaXYgY2xhc3NOYW1lPSdyZXBseS1jb250cm9scyBpcy1vcGVuJz4gKi99XG4gICAgPGRpdiBjbGFzc05hbWU9J3JlcGx5LWNvbnRyb2xzJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwbHktYXJlYVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcGx5LXRvXCI+XG4gICAgICAgICAgUmVwbHkgVG86IDxzcGFuIGNsYXNzTmFtZT1cInRleHQgbWwtMlwiPlVzZXIxPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmai1lZGl0b3ItaW5wdXRcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRvcGljIHRpdGxlXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCI+PC9pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmotZWRpdG9yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmai1lZGl0b3ItdGV4dGFyZWEtd3JhcHBlclwiPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmVcIj5cbiAgICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmai1lZGl0b3ItcHJldmlldy13cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXdcIj5cbiAgICAgICAgICAgICAgPHA+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdC1hcmVhXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZW5kIG1yLWF1dG9cIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW1haW4gYmctYmx1ZSBweS0yIHR0dVwiPlJlcGx5PC9idXR0b24+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gcHktMiB0dHUgZ3JheS0xMFwiPkNhbmNlbDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIHB5LTIgdHR1IGdyYXktMTBcIj5oaWRlIHByZXZpZXc8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgey8qIFJFUExJRVIgRU5EUyAqL31cbiAgICB7LyogRk9PVEVSIFNUQVJUUyAqL31cbiAgICA8Zm9vdGVyIGlkPVwic3RpY2t5LWZvb3RlclwiIGNsYXNzTmFtZT1cInB5LTQgYmctYmxhY2sgdGV4dC13aGl0ZS01MCBweS0zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8c21hbGw+Q29weXJpZ2h0ICZjb3B5OyBZb3VyIFdlYnNpdGU8L3NtYWxsPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICAgey8qIEZPT1RFUiBFTkRTICovfVxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=