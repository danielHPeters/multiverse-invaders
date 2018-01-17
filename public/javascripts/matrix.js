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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const GUI_1 = __webpack_require__(33);
document.addEventListener('DOMContentLoaded', () => new GUI_1.default().init());


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Matrix_1 = __webpack_require__(34);
class GUI {
    constructor() {
        this.canvas = document.getElementById('matrix');
        this.context = this.canvas.getContext('2d');
        this.matrix = new Matrix_1.default(this.canvas.width, this.canvas.height);
    }
    init() {
        this.setSize();
        window.addEventListener('resize', () => this.setSize());
        this.matrix.run(this.context);
    }
    setSize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.yPositions = Array(window.innerWidth).join('0').split('');
        this.matrix.setSize(window.innerWidth, window.innerHeight, this.yPositions);
    }
}
exports.default = GUI;


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Matrix {
    constructor(width, height, yPositions = []) {
        this.width = width;
        this.height = height;
        this.yPositions = yPositions;
        this.running = false;
    }
    draw(ctx) {
        if (this.running) {
            ctx.fillStyle = 'rgba(0,0,0,.05)';
            ctx.fillRect(0, 0, this.width, this.height);
            ctx.fillStyle = '#0F0';
            ctx.font = '10pt Georgia';
            this.yPositions.map((y, index) => {
                const text = String.fromCharCode(1e2 + Math.random() * 33);
                const x = (index * 10) + 10;
                ctx.fillText(text, x, y);
                if (y > 100 + Math.random() * 1e4) {
                    this.yPositions[index] = 0;
                }
                else {
                    this.yPositions[index] = y + 10;
                }
            });
            this.frameId = requestAnimationFrame(() => this.draw(ctx));
        }
    }
    run(ctx) {
        this.running = true;
        this.draw(ctx);
    }
    stop() {
        if (this.frameId) {
            this.running = false;
            cancelAnimationFrame(this.frameId);
            this.frameId = undefined;
        }
    }
    setSize(width, height, yPositions) {
        this.width = width;
        this.height = height;
        this.yPositions = yPositions;
    }
}
exports.default = Matrix;


/***/ })

/******/ });
//# sourceMappingURL=matrix.js.map