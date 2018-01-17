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
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Rectangle_1 = __webpack_require__(38);
const Triangle_1 = __webpack_require__(39);
const Circle_1 = __webpack_require__(40);
const Smiley_1 = __webpack_require__(41);
const Line_1 = __webpack_require__(42);
var ShapeType;
(function (ShapeType) {
    ShapeType[ShapeType["LINE"] = 0] = "LINE";
    ShapeType[ShapeType["RECTANGLE"] = 1] = "RECTANGLE";
    ShapeType[ShapeType["TRIANGLE"] = 2] = "TRIANGLE";
    ShapeType[ShapeType["CIRCLE"] = 3] = "CIRCLE";
    ShapeType[ShapeType["SMILEY"] = 4] = "SMILEY";
})(ShapeType = exports.ShapeType || (exports.ShapeType = {}));
class ShapeFactory {
    static create(shapeType, start, end, color, fill) {
        let shape;
        switch (shapeType) {
            case ShapeType.LINE:
                shape = new Line_1.default(start, end, color, fill);
                break;
            case ShapeType.RECTANGLE:
                shape = new Rectangle_1.default(start, end, color, fill);
                break;
            case ShapeType.TRIANGLE:
                shape = new Triangle_1.default(start, end, color, fill);
                break;
            case ShapeType.CIRCLE:
                shape = new Circle_1.default(start, end, color, fill);
                break;
            case ShapeType.SMILEY:
                shape = new Smiley_1.default(start, end, color, fill);
                break;
            default:
                throw new Error('Invalid Shape Type!');
        }
        return shape;
    }
}
exports.default = ShapeFactory;


/***/ }),
/* 14 */,
/* 15 */
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
exports.VALID_COLOR = '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$';


/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DrawingApp_1 = __webpack_require__(36);
const MenuBar_1 = __webpack_require__(37);
const Settings_1 = __webpack_require__(43);
const ShapeTool_1 = __webpack_require__(44);
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('pane');
    const context = canvas.getContext('2d');
    const menuBar = document.getElementById('menuBar');
    const settings = new Settings_1.default(menuBar.offsetHeight);
    const menu = new MenuBar_1.default(menuBar);
    const tool = new ShapeTool_1.default(settings);
    menu.addMenu('File');
    menu.addMenu('Edit', MenuBar_1.default.createEditMenu(settings, tool, context, canvas));
    menu.addMenu('Color', MenuBar_1.default.createColorMenu(settings));
    menu.addMenu('Shapes', MenuBar_1.default.createShapesMenu(settings));
    menu.addMenu('Options', MenuBar_1.default.createOptionsMenu(settings));
    menu.addMenu('Help');
    new DrawingApp_1.default(canvas, menuBar, context, tool).init();
});


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DrawingApp {
    constructor(canvas, menuBar, context, tool) {
        this.menuBar = menuBar;
        this.canvas = canvas;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight - this.menuBar.offsetHeight;
        this.context = context;
        this.tool = tool;
    }
    init() {
        this.canvas.addEventListener('mousedown', event => this.tool.click(event));
        this.canvas.addEventListener('mousemove', event => {
            this.tool.move(event);
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.tool.renderAll(this.context);
            this.tool.tempShape.render(this.context);
        });
        this.canvas.addEventListener('mouseup', event => {
            this.tool.release(event);
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.tool.renderAll(this.context);
        });
    }
}
exports.default = DrawingApp;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = __webpack_require__(15);
const ShapeFactory_1 = __webpack_require__(13);
class MenuBar {
    constructor(element) {
        this.element = element;
        this.submenus = [];
    }
    static createEditMenu(settings, tool, context, canvas) {
        const editEntries = [];
        const entryText = 'Undo';
        const menuEntry = document.createElement('li');
        const menuLink = document.createElement('a');
        menuLink.setAttribute('href', '#');
        menuLink.setAttribute('id', entryText.toLowerCase());
        menuLink.appendChild(document.createTextNode(entryText));
        menuEntry.appendChild(menuLink);
        menuEntry.classList.add('menuEntry');
        menuEntry.addEventListener('click', () => {
            tool.undo(context, canvas.width, canvas.height);
        });
        editEntries.push(menuEntry);
        return editEntries;
    }
    static createColorMenu(settings) {
        const colors = ['Red', 'Black', 'Blue', 'Yellow'];
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
                settings.activeColor = Shape_1.Color[color.toUpperCase()];
            });
            colorEntries.push(menuEntry);
        });
        const colorForm = document.createElement('form');
        const colorInput = document.createElement('input');
        colorInput.setAttribute('type', 'color');
        colorInput.setAttribute('accept', Shape_1.VALID_COLOR);
        colorInput.addEventListener('change', () => {
            settings.activeColor = colorInput.value;
        });
        colorForm.appendChild(colorInput);
        colorForm.classList.add('menuEntry');
        colorEntries.push(colorForm);
        return colorEntries;
    }
    static createShapesMenu(settings) {
        const tools = ['Line', 'Rectangle', 'Triangle', 'Circle', 'Smiley'];
        const toolEntries = [];
        tools.forEach(shape => {
            const menuEntry = document.createElement('li');
            const menuLink = document.createElement('a');
            menuLink.setAttribute('href', '#');
            menuLink.setAttribute('id', shape.toLowerCase());
            menuLink.appendChild(document.createTextNode(shape));
            menuEntry.appendChild(menuLink);
            menuEntry.classList.add('menuEntry');
            menuEntry.addEventListener('click', () => {
                settings.activeTool = ShapeFactory_1.ShapeType[shape.toUpperCase()];
            });
            toolEntries.push(menuEntry);
        });
        return toolEntries;
    }
    static createOptionsMenu(settings) {
        const optionEntries = [];
        const entryText = 'Fill';
        const menuEntry = document.createElement('li');
        const menuInput = document.createElement('input');
        menuInput.setAttribute('type', 'checkbox');
        menuInput.setAttribute('id', entryText.toLowerCase());
        menuEntry.appendChild(document.createTextNode(entryText));
        menuEntry.appendChild(menuInput);
        menuEntry.classList.add('menuEntry');
        menuInput.addEventListener('click', () => {
            settings.fill = !settings.fill;
        });
        optionEntries.push(menuEntry);
        return optionEntries;
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
            const list = document.createElement('ul');
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
}
exports.default = MenuBar;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    constructor(start, end, color, fill) {
        this.start = start;
        this.end = end;
        this.color = color;
        this.fill = fill;
    }
    render(context) {
        context.beginPath();
        context.rect(this.start.x, this.start.y, this.end.x - this.start.x, this.end.y - this.start.y);
        if (this.fill) {
            context.fillStyle = this.color;
            context.fill();
        }
        else {
            context.strokeStyle = this.color;
            context.stroke();
        }
    }
}
exports.default = Rectangle;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Triangle {
    constructor(start, end, color, fill) {
        this.start = start;
        this.end = end;
        this.color = color;
        this.fill = fill;
    }
    render(context) {
        context.beginPath();
        context.strokeStyle = this.color;
        context.fillStyle = this.color;
        context.moveTo(this.start.x, this.start.y);
        context.lineTo(this.start.x, this.end.y);
        context.lineTo(this.end.x, this.start.y);
        context.closePath();
        if (this.fill) {
            context.fill();
        }
        else {
            context.stroke();
        }
    }
}
exports.default = Triangle;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    constructor(start, end, color, fill) {
        this.start = start;
        this.end = end;
        this.color = color;
        this.fill = fill;
    }
    render(context) {
        const radius = Math.abs(this.end.x - this.start.x);
        if (radius !== 0) {
            context.beginPath();
            context.strokeStyle = this.color;
            context.arc(this.start.x, this.start.y, radius, 0, Math.PI * 2, true);
            if (this.fill) {
                context.fillStyle = this.color;
                context.fill();
            }
            else {
                context.stroke();
            }
        }
    }
}
exports.default = Circle;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Smiley {
    constructor(start, end, color, fill) {
        this.start = start;
        this.end = end;
        this.color = color;
        this.fill = fill;
    }
    render(context) {
        const radius = Math.abs(this.end.x - this.start.x);
        context.beginPath();
        context.strokeStyle = this.color;
        context.arc(this.start.x, this.start.y, radius, 0, Math.PI * 2, true);
        context.moveTo(this.start.x + (radius * 0.7), this.start.y);
        context.arc(this.start.x, this.start.y, radius * 0.7, 0, Math.PI, false);
        context.moveTo(this.start.x - (radius * 0.3) + radius * 0.1, this.start.y - (radius * 0.2));
        context.arc(this.start.x - (radius * 0.3), this.start.y - (radius * 0.2), radius * 0.1, 0, Math.PI * 2, false);
        context.moveTo(this.start.x + (radius * 0.3) + radius * 0.1, this.start.y - (radius * 0.2));
        context.arc(this.start.x + (radius * 0.3), this.start.y - (radius * 0.2), radius * 0.1, 0, Math.PI * 2, true);
        context.stroke();
    }
}
exports.default = Smiley;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Line {
    constructor(start, end, color, fill) {
        this.start = start;
        this.end = end;
        this.color = color;
        this.fill = fill;
    }
    render(context) {
        context.beginPath();
        context.strokeStyle = this.color;
        context.moveTo(this.start.x, this.start.y);
        context.lineTo(this.end.x, this.end.y);
        context.stroke();
    }
}
exports.default = Line;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ShapeFactory_1 = __webpack_require__(13);
const Shape_1 = __webpack_require__(15);
class Settings {
    constructor(menuHeight, activeColor = Shape_1.Color.BLACK, activeTool = ShapeFactory_1.ShapeType.LINE) {
        this.activeColor = activeColor;
        this.menuHeight = menuHeight;
        this.activeTool = activeTool;
        this.history = [];
        this.fill = false;
    }
}
exports.default = Settings;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __webpack_require__(5);
const ShapeFactory_1 = __webpack_require__(13);
class ShapeTool {
    constructor(settings) {
        this.start = new Point_1.default(0, 0);
        this.end = new Point_1.default(0, 0);
        this.history = settings.history;
        this.settings = settings;
        this.tempShape = ShapeFactory_1.default.create(this.settings.activeTool, this.start, this.end, this.settings.activeColor, this.settings.fill);
        this.down = false;
    }
    click(event) {
        this.down = true;
        this.start.set(event.clientX, event.clientY - this.settings.menuHeight);
    }
    move(event) {
        if (!this.down)
            return;
        this.tempShape = ShapeFactory_1.default.create(this.settings.activeTool, this.start, this.end, this.settings.activeColor, this.settings.fill);
        this.tempShape.end.set(event.clientX, event.clientY - this.settings.menuHeight);
    }
    release(event) {
        this.end.set(event.clientX, event.clientY - this.settings.menuHeight);
        this.history.push(ShapeFactory_1.default.create(this.settings.activeTool, this.start.clone(), this.end.clone(), this.settings.activeColor, this.settings.fill));
        this.down = false;
    }
    renderAll(context) {
        this.history.forEach(line => line.render(context));
    }
    undo(context, width, height) {
        if (this.history.length > 0) {
            context.clearRect(0, 0, width, height);
            this.tempShape.start.set(0, 0);
            this.tempShape.end.set(0, 0);
            this.history.pop();
            this.renderAll(context);
        }
    }
}
exports.default = ShapeTool;


/***/ })
/******/ ]);
//# sourceMappingURL=draw.js.map