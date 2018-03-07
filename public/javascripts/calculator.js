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
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ ({

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PostFixCalculator_1 = __webpack_require__(52);
const MatrixFactory_1 = __webpack_require__(53);
const calculator = document.getElementById('calculator');
const input = document.getElementById('expression');
calculator.addEventListener('submit', ev => {
    ev.preventDefault();
    const resultBox = document.getElementById('result');
    resultBox.innerHTML = '';
    const expression = input.value;
    resultBox.appendChild(document.createTextNode(PostFixCalculator_1.default.calculate(expression).toString()));
});
document.querySelectorAll('.math').forEach(key => {
    key.addEventListener('click', () => input.value += key.textContent);
});
const matrix = MatrixFactory_1.default.createMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
]);
const matrix2 = MatrixFactory_1.default.createMatrix([
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15]
]);
const matrix3 = MatrixFactory_1.default.createMatrix([
    [4, 5, 6, 2],
    [7, 8, 9, 2],
    [10, 11, 12, 2]
]);
const matrix4 = MatrixFactory_1.default.createMatrix([
    [4, 5, 6, 2],
    [7, 8, 9, 2],
    [10, 11, 12, 2]
]);
const m = matrix.clone();
m.add(matrix2);
console.log(m);
console.log(matrix2);
console.log(matrix);
console.log(matrix.multiply(matrix3).mArray);
matrix4.rotate(1);
console.log(matrix4.mArray);
matrix4.transpose();
console.log(matrix4.mArray);


/***/ }),

/***/ 52:
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


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Matrix_1 = __webpack_require__(9);
class MatrixFactory {
    static createMatrix(mArray) {
        const length = mArray[0].length;
        for (let i = 1; i < mArray.length; i++) {
            if (mArray[i].length !== length) {
                return null;
            }
        }
        return new Matrix_1.default(mArray);
    }
}
exports.default = MatrixFactory;


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Matrix {
    constructor(mArray) {
        this.mArray = mArray;
        this.rows = mArray.length;
        this.columns = mArray[0].length;
    }
    set(array) {
        const length = array[0].length;
        let valid = true;
        for (let i = 1; i < array.length; i++) {
            if (array[i].length !== length) {
                valid = false;
            }
        }
        if (valid) {
            this.rows = array.length;
            this.columns = array[0].length;
            this.mArray = array;
        }
        else {
            throw new Error('The passed matrix array is malformed: ' + array);
        }
    }
    add(matrix) {
        if (this.equals(matrix)) {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.columns; j++) {
                    this.mArray[i][j] += matrix.mArray[i][j];
                }
            }
        }
    }
    subtract(matrix) {
        if (this.equals(matrix)) {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.columns; j++) {
                    this.mArray[i][j] -= matrix.mArray[i][j];
                }
            }
        }
    }
    multiply(matrix) {
        let newArray = [];
        if (this.columns === matrix.rows) {
            for (let i = 0; i < this.rows; i++) {
                newArray[i] = [];
                for (let j = 0; j < matrix.columns; j++) {
                    let val = 0;
                    for (let k = 0; k < this.columns; k++) {
                        val += this.mArray[i][k] * matrix.mArray[k][j];
                    }
                    newArray[i].push(val);
                }
            }
        }
        else {
            return null;
        }
        return new Matrix(newArray);
    }
    multScalar(scalar) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                this.mArray[i][j] *= scalar;
            }
        }
    }
    transpose() {
        let array = [];
        for (let i = 0; i < this.columns; i++) {
            array[i] = [];
            for (let j = 0; j < this.rows; j++) {
                array[i][j] = this.mArray[j][i];
            }
        }
        this.rows = array.length;
        this.columns = array[0].length;
        this.mArray = array;
    }
    rotate(direction) {
        this.transpose();
        if (direction > 0) {
            this.mArray.forEach(row => row.reverse());
        }
        else {
            this.mArray.reverse();
        }
    }
    equals(other) {
        return other.rows === this.rows && other.columns === this.columns;
    }
    clone() {
        let array = [];
        this.mArray.forEach(arr => array.push(arr.slice(0)));
        return new Matrix(Array.from(array));
    }
}
exports.default = Matrix;


/***/ })

/******/ });
//# sourceMappingURL=calculator.js.map