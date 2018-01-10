/**
 * Converts string camelcase to hyphennated
 * @param {string} word data that passed to the function
 * @return {string} word converted string
 */
export function toHyphenCase(word) {
    return word.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Converts string hyphennated to camelcase
 * @param {string} word data that passed to the function
 * @return {string} word converted string
 */
export function toCamelCase(word) {
    return word.replace(/\b(_|-)([a-z])/g, (s, f, c) => c.toUpperCase());
}

/**
 * Convert attributes into properties
 * @param {object} obj attributes
 * @return {object} properties object
 */
export function createProps(obj) {
    if (!obj) return false;

    const props = {};

    Object.keys(obj).forEach((key) => {
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
export function setBooleanAttributeValue(props, attr) {
    return ({}.hasOwnProperty.call(props, attr)) ? attr : '';
}

/**
 * Validate if date provided
 * @param {string} value date value
 * @return {boolean} response valid date or not
 */
export function isValidDate(value) {
    return !Number.isNaN(Date.parse(value));
}

/**
 * Set attributes on the element if passed as object
 * @param {object} attrs attributes object, ex: checked, name, value, label, etc.
 * @param {object} field element, ex: input, radio, header-text, etc.
 */
export function addAttributes(attrs, field) {
    if (!attrs || !field) return;

    Object.keys(attrs).forEach((attr) => {
        field.setAttribute(attr, attrs[attr]);
    });
}

export default {
    toHyphenCase,
    toCamelCase,
    createProps,
    setBooleanAttributeValue,
    isValidDate,
    addAttributes
};
