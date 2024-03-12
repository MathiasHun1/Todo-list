/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/storage */ \"./src/modules/storage.js\");\n\n\nconst storage = new _modules_storage__WEBPACK_IMPORTED_MODULE_0__.Storage;\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n\nclass Project {\n    constructor(name, description='', type='custom', active=false) {\n        this.name = name;\n        this.description = description;\n        this.type = type;\n        this.active = active;\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Storage: () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n\n\nclass Storage {\n    constructor() {\n        //initialize default projects\n      this._defProjects= [];\n      this._defProjects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.Project('all', '', 'default', true));\n      this._defProjects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.Project('today', '', 'default', false));\n      this._defProjects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.Project('this week', '', 'default', false));\n        //initialize custom projects if exists\n      this._ownProjects = JSON.parse(localStorage.getItem('projects')) || [];\n      this._allProjects = this._defProjects.concat(this._ownProjects);\n        //initialize tasks\n      this._tasks = JSON.parse(localStorage.getItem('tasks')) || [];\n    }\n\n    // methods for projects\n    saveProjects() {\n        localStorage.setItem('projects', JSON.stringify(this.getOwnProjects()));\n    }\n\n    getDefProjects() {\n        return this._defProjects;\n    }\n\n    getOwnProjects() {\n        return this._ownProjects;\n    }\n\n    getAllprojects() {\n        return this._allProjects;\n    }\n\n    addnewProject(name, desc) {\n        const projects = this.getOwnProjects();\n        projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.Project(name, desc));\n        this.saveProjects();\n    }\n\n    //methods for tasks\n    saveTasks() {\n        localStorage.setItem('tasks', JSON.stringify(this.getAllTasks));\n    }\n\n    getAllTasks() {\n        return this._tasks; \n    }\n\n    getTodayTasks() {\n        const tasks = this.getAllTasks();\n        const todayTasks = tasks.filter((task) => {\n            return task.dueDate \n        })\n    }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/storage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;