/**
 * Log load script promise errors
 * @param {string} reason for the failure
 */
export function promiseRejected(reason) {
    throw new Error(`Loading JS assets failed due to ${reason}.`);
}

/**
 * Helper function to dynamically add scripts to the page.
 * @param {string} src URL to the script file
 * @param {boolean} loadAsync load async or not
 * @return {object} Promise
 */
export default function loadScript(src, loadAsync = false, loadDefer = true) {
    return new Promise((resolve, reject = promiseRejected) => {
        const script = document.createElement('script');

        script.async   = loadAsync;
        script.defer   = loadDefer;
        script.src     = src;
        script.onload  = resolve;
        script.onerror = reject;

        document.head.appendChild(script);
    });
}
