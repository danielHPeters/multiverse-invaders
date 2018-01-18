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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ({

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PostFixCalculator_1 = __webpack_require__(49);
const calculator = document.getElementById('calculator');
calculator.addEventListener('submit', ev => {
    ev.preventDefault();
    const resultBox = document.getElementById('result');
    resultBox.innerHTML = '';
    const input = document.getElementById('expression');
    const expression = input.value;
    resultBox.appendChild(document.createTextNode(PostFixCalculator_1.default.calculate(expression).toString()));
});


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class PostFixCalculator {
    static calculate(input) {
        let result = null;
        if (input.match(PostFixCalculator.VALID_INPUT)) {
            let tokens = input.split(' ');
            let operation = [];
            tokens.forEach(token => {
                if (isNaN(Number(token))) {
                    const operand2 = operation.pop();
                    const operand = operation.pop();
                    switch (token) {
                        case '+':
                            result = operand + operand2;
                            break;
                        case '-':
                            result = operand - operand2;
                            break;
                        case '*':
                            result = operand * operand2;
                            break;
                        case '/':
                            if (operand2 !== 0) {
                                result = operand / operand2;
                            }
                            else {
                                throw new Error('Division by zero not allowed!');
                            }
                            break;
                        case '^':
                            result = Math.pow(operand, operand2);
                            break;
                        default:
                            throw new Error('Internal error!');
                    }
                    operation.push(result);
                }
                else {
                    operation.push(Number(token));
                }
            });
        }
        else {
            throw new Error('The expression is not valid!');
        }
        return result;
    }
}
PostFixCalculator.VALID_INPUT = '^\\s*([-+]?)(\\d+)(?:\\s*\\s*([-+]?)(\\d+)\\s*([-+*\\/\\^]))+$';
exports.default = PostFixCalculator;


/***/ })

/******/ });
//# sourceMappingURL=calculator.js.map