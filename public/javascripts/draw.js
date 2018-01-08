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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static addVector(v1, v2) {
        return new Vector2(v1.x + v2.x, v1.y + v2.y);
    }
    static subtractVector(v1, v2) {
        return new Vector2(v1.x - v2.x, v1.y - v2.y);
    }
    static multiply(vector, scalar) {
        return new Vector2(vector.x * scalar, vector.y * scalar);
    }
    static divide(vector, scalar) {
        if (scalar === 0) {
            throw new Error('cannot divide vector by scalar with value "0"');
        }
        return new Vector2(vector.x / scalar, vector.y / scalar);
    }
    set x(x) {
        this._x = x;
    }
    set y(y) {
        this._y = y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set(x, y) {
        this.x = x;
        this.y = y;
    }
    setVector(vector) {
        this.x = vector.x;
        this.y = vector.y;
    }
    add(x, y) {
        this.x += x;
        this.y += y;
    }
    addVector(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }
    subtract(x, y) {
        this.x -= x;
        this.y -= y;
    }
    subtractVector(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    }
    multiply(scalar) {
        this.x *= scalar;
        this.y *= scalar;
    }
    divide(scalar) {
        if (scalar === 0) {
            throw new Error('cannot divide vector by "0"');
        }
        this.x /= scalar;
        this.y /= scalar;
    }
    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    negative() {
        return new Vector2(-this.x, -this.y);
    }
    normalize() {
        let magnitude = this.mag();
        if (magnitude !== 0) {
            this.divide(magnitude);
        }
    }
    limit(max) {
        if (Math.floor(this.mag()) > max) {
            this.normalize();
            this.multiply(max);
        }
    }
    distanceTo(vector) {
        return Math.sqrt(Math.pow(vector.x - this.x, 2) + Math.pow(vector.y - this.y, 2));
    }
    dot(vector) {
        return this.x * vector.x + this.y * vector.y;
    }
    floor() {
        this.x = Math.floor(this.x);
        this.x = Math.floor(this.x);
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
}
exports.Vector2 = Vector2;


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Pane_1 = __webpack_require__(32);
const MenuBar_1 = __webpack_require__(37);
const Color_1 = __webpack_require__(38);
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('pane');
    const context = canvas.getContext('2d');
    const menuBar = document.getElementById('menuBar');
    const menu = new MenuBar_1.default(menuBar);
    const colors = ['Red', 'Black', 'Blue', 'Yellow'];
    const settings = { activeColor: '000000' };
    const colorEntries = [];
    colors.forEach(color => {
        const menuEntry = document.createElement('li');
        const menuLink = document.createElement('a');
        menuLink.setAttribute('href', '#');
        menuLink.setAttribute('id', color.toLowerCase());
        menuLink.appendChild(document.createTextNode(color));
        menuEntry.appendChild(menuLink);
        menuEntry.classList.add('menuEntry');
        menuEntry.addEventListener('click', () => {
            context.strokeStyle = Color_1.Color[color.toUpperCase()].toString();
            console.log(Color_1.Color[color.toUpperCase()]);
        });
        colorEntries.push(menuEntry);
    });
    menu.addMenu('File');
    menu.addMenu('Edit');
    menu.addMenu('Color', colorEntries);
    menu.addMenu('Options');
    menu.addMenu('Help');
    new Pane_1.default(canvas, menuBar, context).init();
});


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Pen_1 = __webpack_require__(33);
const Vector2_1 = __webpack_require__(0);
const Mouse_1 = __webpack_require__(34);
class Pane {
    constructor(canvas, menuBar, context) {
        this.menuBar = menuBar;
        this.canvas = canvas;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight - this.menuBar.offsetHeight;
        this.context = context;
        this.pen = new Pen_1.default(10, 0.5);
        this.mousePosition = new Vector2_1.Vector2(0, 0);
        this.mouse = new Mouse_1.default(this.menuBar.offsetHeight);
    }
    init() {
        this.canvas.addEventListener('mousedown', event => this.mouse.click(event));
        this.canvas.addEventListener('mousemove', event => {
            this.mouse.move(event);
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.drawAllLines();
            this.mouse.tempLine.render(this.context);
        });
        this.canvas.addEventListener('mouseup', event => {
            this.mouse.release(event);
            this.drawAllLines();
        });
    }
    drawAllLines() {
        this.mouse.lines.forEach(line => line.render(this.context));
    }
}
exports.default = Pane;


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_1 = __webpack_require__(0);
class Pen {
    constructor(radius, opacity = 0) {
        this.radius = radius;
        this.opacity = opacity;
        this.position = new Vector2_1.Vector2(0, 0);
    }
    draw(context, mousePosition) {
        context.beginPath();
        context.arc(mousePosition.x, mousePosition.y, this.radius, 0, 2 * Math.PI);
        context.stroke();
    }
}
exports.default = Pen;


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __webpack_require__(35);
const Line_1 = __webpack_require__(36);
class LineTool {
    constructor(offsetY = 0) {
        this.start = new Point_1.default(0, 0);
        this.end = new Point_1.default(0, 0);
        this.lines = [];
        this.tempLine = new Line_1.default(this.start, this.end);
        this.down = false;
        this.offsetY = offsetY;
    }
    click(event) {
        this.down = true;
        this.start.set(event.clientX, event.clientY - this.offsetY);
    }
    move(event) {
        if (!this.down)
            return;
        this.tempLine.end.set(event.clientX, event.clientY - this.offsetY);
    }
    release(event) {
        this.end.set(event.clientX, event.clientY - this.offsetY);
        this.lines.push(new Line_1.default(this.start.clone(), this.end.clone()));
        this.down = false;
    }
}
exports.default = LineTool;


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    set(x, y) {
        this.x = x;
        this.y = y;
    }
    setPoint(point) {
        this.x = point.x;
        this.y = point.y;
    }
    clone() {
        return new Point(this.x, this.y);
    }
}
exports.default = Point;


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Line {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    render(context) {
        context.beginPath();
        context.moveTo(this.start.x, this.start.y);
        context.lineTo(this.end.x, this.end.y);
        context.stroke();
    }
}
exports.default = Line;


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class MenuBar {
    constructor(element) {
        this.element = element;
        this.submenus = [];
    }
    addMenu(title, entries = []) {
        let submenu = document.createElement('li');
        let menuLink = document.createElement('a');
        menuLink.setAttribute('href', '#');
        menuLink.appendChild(document.createTextNode(title));
        submenu.appendChild(menuLink);
        submenu.classList.add('submenu');
        submenu.setAttribute('id', title.toLowerCase());
        if (entries.length > 0) {
            let list = document.createElement('ul');
            list.classList.add('submenu-content');
            submenu.appendChild(list);
            entries.forEach(entry => {
                list.appendChild(entry);
            });
        }
        this.submenus[title.toLowerCase()] = submenu;
        this.element.appendChild(submenu);
    }
    getMenu(title) {
        return this.submenus.hasOwnProperty(title.toLowerCase()) ? this.submenus[title.toLowerCase()] : null;
    }
    hide(submenu) {
        submenu.children[0].style.display = 'none';
    }
    show(submenu) {
        submenu.children[0].style.display = 'block';
    }
}
exports.default = MenuBar;


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Color;
(function (Color) {
    Color["RED"] = "#FF0000";
    Color["GREEN"] = "#00FF00";
    Color["BLUE"] = "#0000FF";
    Color["YELLOW"] = "#FFFF00";
    Color["BLACK"] = "#000000";
})(Color = exports.Color || (exports.Color = {}));


/***/ })

/******/ });
//# sourceMappingURL=draw.js.map