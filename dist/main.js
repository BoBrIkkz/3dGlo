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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/link */ \"./src/modules/link.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validation */ \"./src/modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('11 february 2023')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_validation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n\n//# sourceURL=webpack://3dglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/link.js":
/*!*****************************!*\
  !*** ./src/modules/link.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst link = () => {\r\n\r\n    const links = document.querySelectorAll('a');\r\n    for (let smoothLink of links) {\r\n        smoothLink.addEventListener('click', function(event) {\r\n            event.preventDefault()\r\n            const id = smoothLink.getAttribute('href')\r\n            document.querySelector(id).scrollIntoView({ behavior: 'smooth' })\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (link);\n\n//# sourceURL=webpack://3dglo/./src/modules/link.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu')\r\n    const menu = document.querySelector('menu')\r\n    const closeBtn = menu.querySelector('.close-btn')\r\n    const menuItems = menu.querySelectorAll('ul>li>a')\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu')\r\n    }\r\n\r\n    menuBtn.addEventListener('click', handleMenu)\r\n    closeBtn.addEventListener('click', handleMenu)\r\n\r\n    menuItems.forEach(menuItem => {\r\n        `1`\r\n        menuItem.addEventListener('click', handleMenu)\r\n    })\r\n\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://3dglo/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n\r\n    const buttons = document.querySelectorAll('.popup-btn')\r\n    const modal = document.querySelector('.popup')\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            modal.style.display = 'block'\r\n        })\r\n    })\r\n    modal.addEventListener('click', (event) => {\r\n        if (!event.target.closest('.popup-content') || event.target.classList.contains('popup-close')) {\r\n            modal.style.display = 'none'\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://3dglo/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelector('.service-header')\r\n    const tabs = document.querySelectorAll('.service-header-tab')\r\n    const tabContent = document.querySelectorAll('.service-tab')\r\n\r\n    tabPanel.addEventListener('click', (event) => {\r\n        console.log('123')\r\n        if (event.target.closest('.service-header-tab')) {\r\n            const tabBtn = event.target.closest('.service-header-tab')\r\n\r\n            tabs.forEach((tab, index) => {\r\n                if (tab === tabBtn) {\r\n                    tab.classList.add('active')\r\n                    tabContent[index].classList.remove('d-none')\r\n                } else {\r\n                    tab.classList.remove('active')\r\n                    tabContent[index].classList.add('d-none')\r\n                }\r\n            })\r\n        }\r\n\r\n    })\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3dglo/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    \r\n    const timerHours = document.getElementById('timer-hours')\r\n    const timerMinutes = document.getElementById('timer-minutes')\r\n    const timerSeconds = document.getElementById('timer-seconds')\r\n\r\n\r\n   const getTimeRemaining = () => {\r\n\r\n    let dateStop = new Date(deadline).getTime()\r\n    let dateNow = new Date().getTime()\r\n    let timeRemaining = (dateStop - dateNow) / 1000\r\n    let hours = Math.floor((timeRemaining / 60 / 60) % 24)\r\n    let minutes = Math.floor((timeRemaining / 60) % 60)\r\n    let seconds = Math.floor(timeRemaining % 60)\r\n\r\n    return {\r\n        timeRemaining,\r\n        hours,\r\n        minutes,\r\n        seconds\r\n\r\n    }\r\n}\r\n\r\n\r\nconst updateClock = () => {\r\n    let getTime = getTimeRemaining()\r\n    timerHours.textContent = (\"0\" + getTime.hours).slice(-2);\r\n    timerMinutes.textContent = (\"0\" + getTime.minutes).slice(-2);\r\n    timerSeconds.textContent = (\"0\" + getTime.seconds).slice(-2);\r\n    if(getTime.timeRemaining > 0) {\r\n        \r\n        setTimeout(updateClock, 1000)\r\n\r\n    } else {\r\n        timerHours.textContent = '00'\r\n        timerMinutes.textContent = '00'\r\n        timerSeconds.textContent = '00'\r\n\r\n    }\r\n   }\r\n   updateClock()\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://3dglo/./src/modules/timer.js?");

/***/ }),

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n    const calcSquareInput = document.querySelector(\".calc-square\");\r\n    const calcCountInput = document.querySelector(\".calc-count\");\r\n    const calcDayInput = document.querySelector(\".calc-day\");\r\n    const calcBlock = document.querySelector(\".calc-block\");\r\n    const textForms = document.querySelectorAll(\"form\");\r\n    const yourMessage = document.querySelector(\".mess\");\r\n    textForms.forEach((item) => {\r\n        const yourName = item.querySelector(\"input[type=text]\");\r\n        const yourEmail = item.querySelector(\"input[type=email]\");\r\n        const yourPhone = item.querySelector(\"input[type=tel]\");\r\n        yourName.addEventListener(\"input\", (event) => {\r\n            event.preventDefault();\r\n\r\n            event.target.value = event.target.value.replace(/[^а-я ]/gi, \"\");\r\n            if (event.target.value.length >= 2) {\r\n                event.target.classList.add(\"success\");\r\n            } else {\r\n                event.target.classList.remove(\"success\");\r\n            }\r\n        });\r\n        yourEmail.addEventListener(\"input\", (event) => {\r\n            const testEmail = /[\\-\\.\\w]+@([\\w]+\\.)+[\\w]+/gi;\r\n            event.preventDefault();\r\n            yourEmail.type = \"text\";\r\n\r\n            event.target.value = event.target.value.replace(/[^a-z0-9_.~*'!@-]/giu, \"\");\r\n\r\n            if (testEmail.test(event.target.value)) {\r\n                event.target.classList.add(\"success\");\r\n            } else {\r\n                event.target.classList.remove(\"success\");\r\n            }\r\n        });\r\n        yourPhone.addEventListener(\"input\", (event) => {\r\n            event.preventDefault();\r\n\r\n            event.target.value = event.target.value.replace(/[^0-9\\+]/g, \"\");\r\n            if (event.target.value.length >= 11) {\r\n                event.target.classList.add(\"success\");\r\n            } else {\r\n                event.target.classList.remove(\"success\");\r\n            }\r\n        });\r\n    });\r\n    yourMessage.addEventListener(\"input\", (event) => {\r\n        event.preventDefault();\r\n        event.target.value = e.target.value.replace(/[^а-я0-9 \\,\\.\\?\\!]/gi, \"\");\r\n        if (event.target.value) {\r\n            event.target.classList.add(\"success\");\r\n        } else {\r\n            event.target.classList.remove(\"success\");\r\n        }\r\n    });\r\n    calcBlock.addEventListener(\"input\", (event) => {\r\n        event.preventDefault();\r\n        calcSquareInput.value = calcSquareInput.value.replace(/\\D+/, \"\");\r\n        calcCountInput.value = calcCountInput.value.replace(/\\D+/, \"\");\r\n        calcDayInput.value = calcDayInput.value.replace(/\\D+/, \"\");\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack://3dglo/./src/modules/validation.js?");

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