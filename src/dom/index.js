import { addClass, removeClass, hasClass, toggleClass } from './class-list';
import { on, off, trigger } from './event-handlers';

/**
 * attaches dom ready listener to CB given function
 * @param {Function} callback function that needs to be triggered when event fired
 */
export function ready(callback) {
    document.addEventListener('DOMContentLoaded', callback, false);
}

/**
 * Helper function to search through DOM/ShadowRoot
 * @param {object} selector element which needs to be searched for
 * @param {object} context to search within
 * @param {string} mode to seach mode one/all
 * @return {object} element found
 */
export function find(selector, context = document, mode = 'one') {
    const searchMode = (mode === 'all') ? 'querySelectorAll' : 'querySelector';
    return context[searchMode](selector);
}

/**
 * helper to loop through array/nodeList as forEach support for nodeList is not available
 * also it's super fast in all browsers compared to forEach/map see this URL to check https://repl.it/ClBm/17
 * @param {array} array elements to loop through
 * @param {Function} callback function to call for each iteration
 */
export function loopEach(array, cb) {
    if (Array.from) {
        Array.from(array).forEach(cb);
        return;
    }

    for (let i = 0, { length } = array; i < length; i += 1) {
        cb(array[i], i, array);
    }
}

export default {
    ready,
    find,
    loopEach,
    addClass,
    removeClass,
    hasClass,
    toggleClass,
    on,
    off,
    trigger
};
