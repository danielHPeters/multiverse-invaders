"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InputManager_1 = require("./InputManager");
var SettingsMenu = (function () {
    function SettingsMenu(element, settings) {
        this.element = element;
        this.settings = settings;
        this.showing = false;
        this.init();
    }
    SettingsMenu.prototype.init = function () {
        var _this = this;
        var title = document.createElement('h4');
        var playerTitle = document.createElement('h4');
        var form = document.createElement('form');
        var submit = document.createElement('input');
        var playerForm = document.createElement('form');
        var playerSubmit = document.createElement('input');
        title.appendChild(document.createTextNode('Keyboard'));
        playerTitle.appendChild(document.createTextNode('Player Settings'));
        form.setAttribute('id', 'keyboardSettings');
        form.setAttribute('method', 'post');
        playerForm.setAttribute('id', 'playerSettings');
        playerForm.setAttribute('method', 'post');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('value', 'Save');
        playerSubmit.setAttribute('type', 'submit');
        playerSubmit.setAttribute('value', 'Save');
        this.element.appendChild(title);
        this.element.appendChild(form);
        Object.keys(this.settings.keyBoard).forEach(function (setting) { return _this.addEntry(setting, form); });
        form.appendChild(submit);
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            _this.settings.setKey(document.getElementById(InputManager_1.Actions.UP).value, InputManager_1.Actions.UP);
            _this.settings.setKey(document.getElementById(InputManager_1.Actions.DOWN).value, InputManager_1.Actions.DOWN);
            _this.settings.setKey(document.getElementById(InputManager_1.Actions.LEFT).value, InputManager_1.Actions.LEFT);
            _this.settings.setKey(document.getElementById(InputManager_1.Actions.RIGHT).value, InputManager_1.Actions.RIGHT);
            _this.settings.setKey(document.getElementById(InputManager_1.Actions.SHOOT).value, InputManager_1.Actions.SHOOT);
            _this.clear();
        });
        this.element.appendChild(document.createElement('hr'));
        this.element.appendChild(playerTitle);
        this.element.appendChild(playerForm);
        Object.keys(this.settings.player).forEach(function (setting) { return _this.addPlayerSettingEntry(setting, playerForm); });
        playerForm.appendChild(playerSubmit);
        playerForm.addEventListener('submit', function (event) {
            event.preventDefault();
            _this.settings.player.acceleration = Number(document.getElementById('acceleration').value);
            _this.settings.player.maxVelocity = Number(document.getElementById('maxVelocity').value);
            _this.settings.player.friction = Number(document.getElementById('friction').value);
            _this.settings.player.fireDelay = Number(document.getElementById('fireDelay').value);
            _this.clear();
        });
    };
    SettingsMenu.prototype.clear = function () {
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }
        this.init();
    };
    SettingsMenu.prototype.addPlayerSettingEntry = function (setting, element) {
        var label = document.createElement('label');
        var input = document.createElement('input');
        var row = document.createElement('div');
        label.setAttribute('for', setting);
        label.appendChild(document.createTextNode(setting + ':'));
        input.setAttribute('id', setting);
        input.setAttribute('type', 'number');
        input.setAttribute('name', setting);
        input.setAttribute('value', this.settings.player[setting]);
        row.classList.add('row');
        row.appendChild(label);
        row.appendChild(input);
        element.appendChild(row);
    };
    SettingsMenu.prototype.addEntry = function (setting, element) {
        var row = document.createElement('div');
        var label = document.createElement('label');
        var input = document.createElement('input');
        row.classList.add('row');
        label.setAttribute('for', this.settings.keyBoard[setting]);
        label.appendChild(document.createTextNode(this.settings.keyBoard[setting] + ':'));
        input.setAttribute('id', this.settings.keyBoard[setting]);
        input.setAttribute('type', 'text');
        input.setAttribute('name', this.settings.keyBoard[setting]);
        input.setAttribute('value', setting);
        row.appendChild(label);
        row.appendChild(input);
        element.appendChild(row);
    };
    SettingsMenu.prototype.toggleShow = function () {
        if (this.showing) {
            this.element.style.display = 'none';
            this.showing = false;
        }
        else {
            this.element.style.display = 'block';
            this.showing = true;
        }
    };
    return SettingsMenu;
}());
exports.SettingsMenu = SettingsMenu;
//# sourceMappingURL=SettingsMenu.js.map