/**
 * helper function to add class name using classList
 * @param {object} element DOM element
 * @param {string} className string of class name
 * @return {object} element DOM element
 */
export function addClass(element, className) {
    element.classList.add(className);
    return element;
}

/**
 * helper function to remove class name using classList
 * @param {object} element DOM element
 * @param {string} className string of class name
 * @return {object} element DOM element
 */
export function removeClass(element, className) {
    element.classList.remove(className);
    return element;
}

/**
 * helper function to check for has class name using classList
 * @param {object} element DOM element
 * @param {string} className string of class name
 * @return {boolean} contains true/false
 */
export function hasClass(element, className) {
    return element.classList.contains(className);
}

/**
 * helper function to toggle class name using classList
 * @param {object} element DOM element
 * @param {string} className string of class name
 * @param {boolean} force boolean to use force optionally
 * @return {object} element DOM element
 */
export function toggleClass(element, className, force) {
    return element.classList.toggle(className, force);
}

export default { addClass, removeClass, hasClass, toggleClass };
