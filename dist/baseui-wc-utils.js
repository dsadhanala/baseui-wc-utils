(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("baseuiWcUtils", [], factory);
	else if(typeof exports === 'object')
		exports["baseuiWcUtils"] = factory();
	else
		root["baseuiWcUtils"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export toHyphenCase */
/* unused harmony export toCamelCase */
/* harmony export (immutable) */ exports["c"] = createProps;
/* unused harmony export setBooleanAttributeValue */
/* unused harmony export isValidDate */
/* harmony export (immutable) */ exports["a"] = addAttributes;
/**
 * Converts string camelcase to hyphennated
 * @param {string} word data that passed to the function
 * @return {string} word converted string
 */
function toHyphenCase(word) {
    return word.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Converts string hyphennated to camelcase
 * @param {string} word data that passed to the function
 * @return {string} word converted string
 */
function toCamelCase(word) {
    return word.replace(/\b(_|-)([a-z])/g, function (s, f, c) {
        return c.toUpperCase();
    });
}

/**
 * Convert attributes into properties
 * @param {object} obj attributes
 * @return {object} properties object
 */
function createProps(obj) {
    if (!obj) return false;

    var props = {};

    Object.keys(obj).forEach(function (key) {
        props[toCamelCase(obj[key].name)] = obj[key].value;
    });

    return props;
}

/**
 * check if boolean attributes ex: checked, disabled, etc. exist
 * @param {object} props element properties
 * @param {string} attr attribute name
 * @return {string} value to add
 */
function setBooleanAttributeValue(props, attr) {
    return {}.hasOwnProperty.call(props, attr) ? attr : '';
}

/**
 * Validate if date provided
 * @param {string} value date value
 * @return {boolean} response valid date or not
 */
function isValidDate(value) {
    return !isNaN(Date.parse(value));
}

/**
 * Set attributes on the element if passed as object
 * @param {object} attrs attributes object, ex: checked, name, value, label, etc.
 * @param {object} field element, ex: input, radio, header-text, etc.
 */
function addAttributes(attrs, field) {
    if (!attrs || !field) return;

    Object.keys(attrs).forEach(function (attr) {
        field.setAttribute(attr, attrs[attr]);
    });
}

/* harmony default export */ exports["b"] = { toHyphenCase: toHyphenCase, toCamelCase: toCamelCase, createProps: createProps, setBooleanAttributeValue: setBooleanAttributeValue, isValidDate: isValidDate, addAttributes: addAttributes };

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_list__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_handlers__ = __webpack_require__(10);
/* unused harmony export ready */
/* unused harmony export find */
/* harmony export (immutable) */ exports["b"] = loopEach;



/**
 * attaches dom ready listener to CB given function
 * @param {Function} callback function that needs to be triggered when event fired
 */
function ready(callback) {
    document.addEventListener('DOMContentLoaded', callback, false);
}

/**
 * Helper function to search through DOM/ShadowRoot
 * @param {object} selector element which needs to be searched for
 * @param {object} context to search within
 * @param {string} mode to seach mode one/all
 * @return {object} element found
 */
function find(selector) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'one';

    var searchMode = mode === 'all' ? 'querySelectorAll' : 'querySelector';
    return context[searchMode](selector);
}

/**
 * helper to loop through array/nodeList as forEach support for nodeList is not available
 * also it's super fast in all browsers compared to forEach/map see this URL to check https://repl.it/ClBm/17
 * @param {array} array elements to loop through
 * @param {Function} callback function to call for each iteration
 */
function loopEach(array, callback) {
    for (var i = 0, length = array.length; i < length; i += 1) {
        callback(array[i], i, array);
    }
}

/* harmony default export */ exports["a"] = {
    ready: ready,
    find: find,
    loopEach: loopEach,
    addClass: __WEBPACK_IMPORTED_MODULE_0__class_list__["a" /* addClass */],
    removeClass: __WEBPACK_IMPORTED_MODULE_0__class_list__["b" /* removeClass */],
    hasClass: __WEBPACK_IMPORTED_MODULE_0__class_list__["c" /* hasClass */],
    toggleClass: __WEBPACK_IMPORTED_MODULE_0__class_list__["d" /* toggleClass */],
    on: __WEBPACK_IMPORTED_MODULE_1__event_handlers__["a" /* on */],
    off: __WEBPACK_IMPORTED_MODULE_1__event_handlers__["b" /* off */],
    trigger: __WEBPACK_IMPORTED_MODULE_1__event_handlers__["c" /* trigger */]
};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__load_script__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__get_json__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__load_script__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__load_script__["b"]; });





/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_class__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__html_escape__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__base_class__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__helpers__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__html_escape__["a"]; });






/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_element_helpers__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var BuildDocumentFragment = function () {
    function BuildDocumentFragment() {
        var htmlElementsArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, BuildDocumentFragment);

        this.elementsArray = htmlElementsArray;
        this.docFragment = document.createDocumentFragment();
    }

    _createClass(BuildDocumentFragment, [{
        key: 'getTemplate',
        value: function getTemplate() {
            if (!this.elementsArray) return '';

            this._init(this.elementsArray, this.docFragment);
            return this.docFragment;
        }

        /**
         * Initiate fragment generation
         * @param {array} children elements which needs to be nested inside
         * @param {object} contextToPass element/fragment to which newly created element will be added to
         */

    }, {
        key: '_init',
        value: function _init(array, contextToPass) {
            var _this = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom__["b" /* loopEach */])(array, function (ele) {
                _this._buildDynamicMarkup(ele, contextToPass);
            });
        }

        /**
         * adds child elements to the field
         * @param {array} children elements which needs to be nested inside
         * @param {object} field element, ex: input, radio, header-text, etc.
        */

    }, {
        key: '_addChildren',
        value: function _addChildren(children, field) {
            if (!children || !field) return;

            this._init(children, field);
        }

        /**
         * adds inner text to the field
         * @param {string} innerText text content that needs to be injected into element
         * @param {object} field element, ex: input, radio, header-text, etc.
         */

    }, {
        key: '_buildDynamicMarkup',


        /**
         * Build HTML markup based on given data, this will add element to nested DOM/document fragment (context)
         * @param {object} item contains component name, children, attributes and innerText properties
         * @param {object} context element/fragment to which newly created element will be added to
         */
        value: function _buildDynamicMarkup(item, context) {
            var formField = document.createElement(item.component);
            var formFieldAttrs = item.attributes;
            var formFieldChildren = item.children;
            var formFieldInnerText = item.innerText;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__custom_element_helpers__["a" /* addAttributes */])(formFieldAttrs, formField);
            this._addChildren(formFieldChildren, formField);
            this.constructor._addInnerText(formFieldInnerText, formField);

            context.appendChild(formField);
        }
    }], [{
        key: '_addInnerText',
        value: function _addInnerText(innerText, field) {
            if (!innerText || !field) return;

            var formField = field;
            formField.innerHTML = innerText;
        }
    }]);

    return BuildDocumentFragment;
}();

/* harmony default export */ exports["a"] = BuildDocumentFragment;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = getJSON;
/**
 * Converts raw reponse data to JS object
 * @param {object} response fetch request's response
 * @return {object} response converted raw data to JS object
 */
function getParsedJSON(response) {
    return response.json();
}

/**
 * Check for fetch request status, reusable utility function
 * @param {object} response fetch request's response
 * @return {object} reponse/error based on the status it will throw error or return response
 */
function checkRequestStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    var error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * helper function for using fetch and give back JSON data
 * @param {string} url URL to use in fetch
 * @return {object} Promise returns promise with response object
 */
function getJSON(url) {
    return fetch(url, { credentials: 'same-origin' }).then(checkRequestStatus).then(getParsedJSON);
}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["b"] = promiseRejected;
/* harmony export (immutable) */ exports["a"] = loadScript;
/**
 * Log load script promise errors
 * @param {string} reason for the failure
 */
function promiseRejected(reason) {
    throw new Error('Loading JS assets failed due to ' + reason + '.');
}

/**
 * Helper function to dynamically add scripts to the page.
 * @param {string} src URL to the script file
 * @param {boolean} loadAsync load async or not
 * @return {object} Promise
 */
function loadScript(src) {
    var loadAsync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var loadDefer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    return new Promise(function (resolve) {
        var reject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : promiseRejected;

        var script = document.createElement('script');

        script.async = loadAsync;
        script.defer = loadDefer;
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;

        document.head.appendChild(script);
    });
}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



/**
 * custom element base class for eap elements library, which extends from HTMLElement class
 */

var BaseCustomElement = function (_HTMLElement) {
  _inherits(BaseCustomElement, _HTMLElement);

  /**
   * @param {object} template component markup wrapped in template element
   * @param {array} observedAttrs attributes to observe for changes, default set to empty array
   */
  function BaseCustomElement(template) {
    var observedAttrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, BaseCustomElement);

    var _this = _possibleConstructorReturn(this, (BaseCustomElement.__proto__ || Object.getPrototypeOf(BaseCustomElement)).call(this));

    _this._attrsToObserve = observedAttrs;
    _this._template = template;
    return _this;
  }

  /**
   * This will set element attribute as enhanced
   * renders the component with styles and markup provided
   */


  _createClass(BaseCustomElement, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* createProps */])(this.attributes);
      this.originalProps = Object.assign({}, this.props);
      this._renderComponent();
    }

    /**
     * Generates markup from template binded with passed prop values
     * @param {function} template returns template fragment
     */

  }, {
    key: '_addMarkup',
    value: function _addMarkup(template) {
      if (!template) return;

      this._renderTemplate = template(this.props, this);
      this.appendChild(this._renderTemplate.content.cloneNode(true));
    }

    /**
     * validates which attribute changed and return changes as object
     * @param {attrName} attribute name which is being observed and changed
     * @param {oldVal} old value of the attribute
     * @param {newVal} new value of the attribute
     */

  }, {
    key: '_whatChanged',
    value: function _whatChanged(attrName, oldVal, newVal) {
      // to avoid first trigger before connectedCallback
      if (oldVal === null) {
        return false;
      }

      // skip update if not required
      if (this._attrsToObserve.indexOf(attrName) === -1) {
        return false;
      }

      return { name: attrName, value: newVal };
    }

    /**
     * Renders template markup into the component
     */

  }, {
    key: '_renderComponent',
    value: function _renderComponent() {
      if (!this._template) return;

      this._addMarkup(this._template);
      this.setAttribute('enhanced', '');
    }
  }]);

  return BaseCustomElement;
}(HTMLElement);

/* harmony default export */ exports["a"] = BaseCustomElement;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * configuration object for escaping HTML markup using ES6 Template literals
 * @type {Object}
 */
var escapeConfig = {
    regexEscape: /[&<>'"]/g,
    regexUnescape: /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,
    objEscape: {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    },
    objUnescape: {
        '&amp;': '&',
        '&#38;': '&',
        '&lt;': '<',
        '&#60;': '<',
        '&gt;': '>',
        '&#62;': '>',
        '&apos;': "'",
        '&#39;': "'",
        '&quot;': '"',
        '&#34;': '"'
    }
};

/**
 * takes in config object and two helper methods escape/unescape returns updated string
 */

var EscapeUtil = function () {
    function EscapeUtil(configObj) {
        var _this = this;

        _classCallCheck(this, EscapeUtil);

        this.config = configObj;
        this.replace = String.prototype.replace;
        this.fnEscape = function (key) {
            return _this.config.objEscape[key];
        };
        this.fnUnescape = function (key) {
            return _this.config.objUnescape[key];
        };
    }

    _createClass(EscapeUtil, [{
        key: 'escape',
        value: function escape(s) {
            return !s ? '' : this.replace.call(s, this.config.regexEscape, this.fnEscape);
        }
    }, {
        key: 'unescape',
        value: function unescape(s) {
            return !s ? '' : this.replace.call(s, this.config.regexUnescape, this.fnUnescape);
        }
    }]);

    return EscapeUtil;
}();

/**
 * helper function works as tagged template literals, which allow us to modify output of the string.
 * @param {array} strings array of string literals
 * @param {array} dynamic binding values of the processed substitution expressions
 * @return {string} concatinated
 */


function htmlEscape(strings) {
    var escapeUtil = new EscapeUtil(escapeConfig);

    for (var _len = arguments.length, bindings = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        bindings[_key - 1] = arguments[_key];
    }

    var result = bindings.reduce(function (accumulator, current, i) {
        var regexSpaceRemove = /\s\s+/g;
        return (accumulator + escapeUtil.escape(current) + strings[i + 1]).replace(regexSpaceRemove, ' ');
    }, strings[0]);

    return result.trim();
}

/* harmony default export */ exports["a"] = htmlEscape;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = addClass;
/* harmony export (immutable) */ exports["b"] = removeClass;
/* harmony export (immutable) */ exports["c"] = hasClass;
/* harmony export (immutable) */ exports["d"] = toggleClass;
/**
 * helper function to add class name using classList
 * @param {object} element DOM element
 * @param {string} className string of class name
 * @return {object} element DOM element
 */
function addClass(element, className) {
  element.classList.add(className);
  return element;
}

/**
 * helper function to remove class name using classList
 * @param {object} element DOM element
 * @param {string} className string of class name
 * @return {object} element DOM element
 */
function removeClass(element, className) {
  element.classList.remove(className);
  return element;
}

/**
 * helper function to check for has class name using classList
 * @param {object} element DOM element
 * @param {string} className string of class name
 * @return {boolean} contains true/false
 */
function hasClass(element, className) {
  return element.classList.contains(className);
}

/**
 * helper function to toggle class name using classList
 * @param {object} element DOM element
 * @param {string} className string of class name
 * @param {boolean} force boolean to use force optionally
 * @return {object} element DOM element
 */
function toggleClass(element, className, force) {
  return element.classList.toggle(className, force);
}

/* unused harmony default export */ var _unused_webpack_default_export = { addClass: addClass, removeClass: removeClass, hasClass: hasClass, toggleClass: toggleClass };

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = on;
/* harmony export (immutable) */ exports["b"] = off;
/* harmony export (immutable) */ exports["c"] = trigger;
/**
 * simplyfied event handler function, this allows to bind this context
 * also to avoid rendendant duplicate code for bind
 * @param {object} target HTML element that needs event to be added
 * @param {string} eventName event type ex: click, blur, etc.
 * @param {Function} callbackFunc callback function that needs to be triggerd
 * @param {object} context bind context
 */
function on(eventName, target, callbackFunc, context) {
  var bindContext = context || target;
  target.addEventListener(eventName, callbackFunc.bind(bindContext), false);
}

/**
 * simplyfied event handler function to remove events
 * @param {object} target HTML element that needs event to be added
 * @param {string} eventName event type ex: click, blur, etc.
 * @param {Function} callbackFunc callback function that needs to be triggerd
 */
function off(eventName, target, callbackFunc) {
  target.removeEventListener(eventName, callbackFunc, false);
}

/**
 * trigger native/custom event and pass data between components
 * @param {object} target element reference on which event needs to be triggerd
 * @param {string} eventName custom event name
 * @param {object} eventData custom event data to share
 */
function trigger(eventName, target, eventData) {
  var triggerEvent = !eventData ? new Event(eventName) : new CustomEvent(eventName, { detail: eventData || {} });
  target.dispatchEvent(triggerEvent);
}

/* unused harmony default export */ var _unused_webpack_default_export = { on: on, off: off, trigger: trigger };

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doc_fragment_generator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ajax__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_element__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "dom", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "htmlEscape", function() { return __WEBPACK_IMPORTED_MODULE_3__custom_element__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "getJSON", function() { return __WEBPACK_IMPORTED_MODULE_2__ajax__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "loadScript", function() { return __WEBPACK_IMPORTED_MODULE_2__ajax__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "promiseRejected", function() { return __WEBPACK_IMPORTED_MODULE_2__ajax__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "BaseClass", function() { return __WEBPACK_IMPORTED_MODULE_3__custom_element__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "helpers", function() { return __WEBPACK_IMPORTED_MODULE_3__custom_element__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "DocFragmentGenerator", function() { return __WEBPACK_IMPORTED_MODULE_1__doc_fragment_generator__["a"]; });







/***/ }
/******/ ]);
});