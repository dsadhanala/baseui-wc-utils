/**
 * simplyfied event handler function, this allows to bind this context
 * also to avoid rendendant duplicate code for bind
 * @param {object} target HTML element that needs event to be added
 * @param {string} eventName event type ex: click, blur, etc.
 * @param {Function} callbackFunc callback function that needs to be triggerd
 * @param {object} context bind context
 */
export function on(eventName, target, callbackFunc, context) {
    const bindContext = context || target;
    target.addEventListener(eventName, callbackFunc.bind(bindContext), false);
}

/**
 * simplyfied event handler function to remove events
 * @param {object} target HTML element that needs event to be added
 * @param {string} eventName event type ex: click, blur, etc.
 * @param {Function} callbackFunc callback function that needs to be triggerd
 */
export function off(eventName, target, callbackFunc) {
    target.removeEventListener(eventName, callbackFunc, false);
}

/**
 * trigger native/custom event and pass data between components
 * @param {object} target element reference on which event needs to be triggerd
 * @param {string} eventName custom event name
 * @param {object} eventData custom event data to share
 */
export function trigger(eventName, target, eventData) {
    const triggerEvent = (!eventData) ? new Event(eventName) : new CustomEvent(eventName, { detail: eventData || {} });
    target.dispatchEvent(triggerEvent);
}

export default { on, off, trigger };
