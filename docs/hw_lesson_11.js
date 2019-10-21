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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/hw_lesson_11/colorSwitcher.js":
/*!*******************************************!*\
  !*** ./src/hw_lesson_11/colorSwitcher.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*const greetButton = document.querySelector('.greet-button');
const input = document.querySelector('.input');

function showHideInput() {
    console.log(input.style.display, input.style.display !== 'none');
    if (input.style.display !== 'none') {
        input.style.display = 'none';
    } else {
        input.style.display = 'block';
    }
}

function switchColor() {
    if (greetButton.style.backgroundColor !== 'red') {
        greetButton.style.backgroundColor = 'red';
    } else if () {
        greetButton.style.backgroundColor = '';
    }
}

function clickHandler() {
    showHideInput();
    switchColor();
}*/

/***/ }),

/***/ "./src/hw_lesson_11/hw_lesson_11.js":
/*!******************************************!*\
  !*** ./src/hw_lesson_11/hw_lesson_11.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hw_lesson_11_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hw_lesson_11.scss */ "./src/hw_lesson_11/hw_lesson_11.scss");
/* harmony import */ var _hw_lesson_11_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hw_lesson_11_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _colorSwitcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colorSwitcher.js */ "./src/hw_lesson_11/colorSwitcher.js");
/* harmony import */ var _colorSwitcher_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_colorSwitcher_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lamp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lamp.js */ "./src/hw_lesson_11/lamp.js");
/* harmony import */ var _lamp_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lamp_js__WEBPACK_IMPORTED_MODULE_2__);



/*class State {
    constructor(name, dur, next) {
        this.name = name;
        this.dur = dur;
        this.next = next;
    }
}

class Constroller {
    trigger(state, callback) {
        callback(state);
        setTimeout(() => {
            this.trigger(state.next, callback);
        }, state.dur * 1000)
    }
}


var app = new Vue({
    el: '#traffic-light',
    data: {
        current: 'red'
    },
    mounted() {
        var constroller = new Constroller();

        var red = new State('red', 2);
        var yellowR = new State('yellow', 1);
        var yellowG = new State('yellow', 1);
        var green = new State('green', 3);

        red.next = yellowR;
        yellowR.next = green;
        green.next = yellowG;
        yellowG.next = red;

        constroller.trigger(red, (state) => {
            this.current = state.name;
        });

    }
})*/

/***/ }),

/***/ "./src/hw_lesson_11/hw_lesson_11.scss":
/*!********************************************!*\
  !*** ./src/hw_lesson_11/hw_lesson_11.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/hw_lesson_11/lamp.js":
/*!**********************************!*\
  !*** ./src/hw_lesson_11/lamp.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var red = document.querySelector('.red');
var yellow = document.querySelector('.yellow');
var green = document.querySelector('.green');
/*function toggleRed() {
    const isEnabledRed = red.classList.contains('active');

    if (isEnabledRed === true) {
        red.classList.remove('active');
        yellow.classList.remove('active');
        green.classList.remove('active');
        red.textContent = 'Off';
        yellow.textContent = 'Off';
        green.textContent = 'Off';
    } else {
        red.classList.add('active');
        yellow.classList.remove('active');
        green.classList.remove('active');
        red.textContent = 'On';
        yellow.textContent = 'Off';
        green.textContent = 'Off';
    }
}

function toggleYellow() {
    const isEnabledYellow = yellow.classList.contains('active');

    if (isEnabledYellow === true) {
        red.classList.remove('active');
        yellow.classList.remove('active');
        green.classList.remove('active');
        red.textContent = 'Off';
        yellow.textContent = 'Off';
        green.textContent = 'Off';
    } else {
        yellow.classList.add('active');
        red.classList.remove('active');
        green.classList.remove('active');
        red.textContent = 'Off';
        green.textContent = 'Off';
        yellow.textContent = 'On';
    }
}

function toggleGreen() {
    const isEnabledGreen = green.classList.contains('active');

    if (isEnabledGreen === true) {
        red.classList.remove('active');
        yellow.classList.remove('active');
        green.classList.remove('active');
        red.textContent = 'Off';
        yellow.textContent = 'Off';
        green.textContent = 'Off';
    } else {
        red.classList.remove('active');
        yellow.classList.remove('active');
        green.classList.add('active');
        red.textContent = 'Off';
        yellow.textContent = 'Off';
        green.textContent = 'On';
    }
}

red.onclick = toggleRed;
yellow.onclick = toggleYellow;
green.onclick = toggleGreen;*/

function toggleOnRed() {
  red.classList.add('active');
  red.textContent = 'on';
}

function toggleOnYellow() {
  yellow.classList.add('active');
  yellow.textContent = 'on';
}

function toggleOnGreen() {
  green.classList.add('active');
  green.textContent = 'on';
}

function toggleOfAll() {
  red.classList.remove('active');
  yellow.classList.remove('active');
  green.classList.remove('active');
  red.textContent = 'off';
  yellow.textContent = 'off';
  green.textContent = 'off';
}

red.onclick = function () {
  toggleOfAll();
  toggleOnRed();
};

yellow.onclick = function () {
  toggleOfAll();
  toggleOnYellow();
};

green.onclick = function () {
  toggleOfAll();
  toggleOnGreen();
};

/***/ }),

/***/ 18:
/*!************************************************!*\
  !*** multi ./src/hw_lesson_11/hw_lesson_11.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/hw_lesson_11/hw_lesson_11.js */"./src/hw_lesson_11/hw_lesson_11.js");


/***/ })

/******/ });
//# sourceMappingURL=hw_lesson_11.js.map