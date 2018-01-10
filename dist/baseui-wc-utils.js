(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.baseuiWcUtils = {})));
}(this, (function (exports) { 'use strict';

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
function loopEach(array, cb) {
    if (Array.from) {
        Array.from(array).forEach(cb);
        return;
    }

    for (var i = 0, length = array.length; i < length; i += 1) {
        cb(array[i], i, array);
    }
}

var index = {
    ready: ready,
    find: find,
    loopEach: loopEach,
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    on: on,
    off: off,
    trigger: trigger
};

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
    return !Number.isNaN(Date.parse(value));
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

var index$3 = {
    toHyphenCase: toHyphenCase,
    toCamelCase: toCamelCase,
    createProps: createProps,
    setBooleanAttributeValue: setBooleanAttributeValue,
    isValidDate: isValidDate,
    addAttributes: addAttributes
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var BuildDocumentFragment = function () {
    function BuildDocumentFragment() {
        var htmlElementsArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        classCallCheck(this, BuildDocumentFragment);

        this.elementsArray = htmlElementsArray;
        this.docFragment = document.createDocumentFragment();
    }

    createClass(BuildDocumentFragment, [{
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

            loopEach(array, function (ele) {
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

            addAttributes(formFieldAttrs, formField);
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

        classCallCheck(this, EscapeUtil);

        this.config = configObj;
        this.replace = String.prototype.replace;
        this.fnEscape = function (key) {
            return _this.config.objEscape[key];
        };
        this.fnUnescape = function (key) {
            return _this.config.objUnescape[key];
        };
    }

    createClass(EscapeUtil, [{
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

var obj1 = { firstName: 'Hello' };
var obj2 = { lastName: 'World!' };

var newObj = _extends({}, obj1, obj2);
console.log(newObj);

exports.dom = index;
exports.DocFragmentGenerator = BuildDocumentFragment;
exports.getJSON = getJSON;
exports.loadScript = loadScript;
exports.helpers = index$3;
exports.htmlEscape = htmlEscape;

Object.defineProperty(exports, '__esModule', { value: true });

})));
