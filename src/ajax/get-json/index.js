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

    const error    = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * helper function for using fetch and give back JSON data
 * @param {string} url URL to use in fetch
 * @return {object} Promise returns promise with response object
 */
export default function getJSON(url) {
    return fetch(url, { credentials: 'same-origin' })
    .then(checkRequestStatus)
    .then(getParsedJSON);
}
