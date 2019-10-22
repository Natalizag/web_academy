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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/hw_practice_7/hw_practice_7.js":
/*!********************************************!*\
  !*** ./src/hw_practice_7/hw_practice_7.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hw_practice_7_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hw_practice_7.scss */ "./src/hw_practice_7/hw_practice_7.scss");
/* harmony import */ var _hw_practice_7_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hw_practice_7_scss__WEBPACK_IMPORTED_MODULE_0__);

var containerBody = document.querySelector('body');
clock();
clock();
clock();
clock();
clock();

function clock() {
  var rootElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : containerBody;
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var currentTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var wrapper = document.createElement('div');
  var block = document.createElement('div');
  wrapper.classList.add('block');
  block.classList.add('block__time');
  block.style.height = size / 2 + 'px';
  block.style.width = size + 'px';
  wrapper.appendChild(block);
  rootElement.appendChild(wrapper);
  var textHours;
  var textMinutes;
  var textSeconds;
  var intervalId;

  function digitalWatch() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    textHours = hours + ":";
    textMinutes = minutes + ":" + seconds;
    textSeconds = seconds;
    currentTime = hours + ":" + minutes + ":" + seconds;
    block.textContent = currentTime;
  }

  setInterval(digitalWatch, 1000);
  digitalWatch();
}
/*const containerBody = document.querySelector('body');
let textHours;
let textMinutes;
let textSeconds;

clock();
clock(containerBody, 90, textHours);
clock();
clock(containerBody, 90, textMinutes);
clock();

function clock(
    rootElement = containerBody,
    size = 100,
    currentTime = textHours,

) {
    const wrapper = document.createElement('div');
    const block = document.createElement('div');

    wrapper.classList.add('block');
    block.classList.add('block__time');
    block.style.height = size / 2 + 'px';
    block.style.width = size + 'px';
    block.textContent = currentTime;

    wrapper.appendChild(block)

    rootElement.appendChild(wrapper);

    function digitalWatchHour() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = "0" + hours;

        currentTime = hours + ":";

        block.textContent = currentTime;

        return currentTime;

    }

    function digitalWatchMitutes() {
        let date = new Date();
        let minutes = date.getMinutes();
        if (minutes < 10) minutes = "0" + minutes;

        currentTime = minutes + ":";

        block.textContent = currentTime;

        return currentTime;
    }

    function digitalWatchSeconds() {
        let date = new Date();
        let seconds = date.getSeconds();
        if (seconds < 10) seconds = "0" + seconds;

        currentTime = seconds;

        block.textContent = currentTime;

        return currentTime;
    }

    setInterval(digitalWatchHour, 1000);
    setInterval(digitalWatchMitutes, 1000);
    setInterval(digitalWatchSeconds, 1000);


    textHours = digitalWatchHour();
    textMinutes = digitalWatchMitutes();
    textSeconds = digitalWatchSeconds();
}

clock(containerBody, 100, textHours);
clock(containerBody, 120, textMinutes);
clock(containerBody, 140, textSeconds);*/

/***/ }),

/***/ "./src/hw_practice_7/hw_practice_7.scss":
/*!**********************************************!*\
  !*** ./src/hw_practice_7/hw_practice_7.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 26:
/*!**************************************************!*\
  !*** multi ./src/hw_practice_7/hw_practice_7.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/hw_practice_7/hw_practice_7.js */"./src/hw_practice_7/hw_practice_7.js");


/***/ })

/******/ });
//# sourceMappingURL=hw_practice_7.js.map