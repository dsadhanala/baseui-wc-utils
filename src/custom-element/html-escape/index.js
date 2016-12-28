/**
 * configuration object for escaping HTML markup using ES6 Template literals
 * @type {Object}
 */
const escapeConfig = {
    regexEscape  : /[&<>'"]/g,
    regexUnescape: /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,
    objEscape: {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    },
    objUnescape: {
        '&amp;' : '&',
        '&#38;' : '&',
        '&lt;'  : '<',
        '&#60;' : '<',
        '&gt;'  : '>',
        '&#62;' : '>',
        '&apos;': "'",
        '&#39;' : "'",
        '&quot;': '"',
        '&#34;' : '"'
    }
};

/**
 * takes in config object and two helper methods escape/unescape returns updated string
 */
class EscapeUtil {
    constructor(configObj) {
        this.config     = configObj;
        this.replace    = String.prototype.replace;
        this.fnEscape   = key => this.config.objEscape[key];
        this.fnUnescape = key => this.config.objUnescape[key];
    }

    escape(s) {
        return (!s) ? '' : this.replace.call(s, this.config.regexEscape, this.fnEscape);
    }

    unescape(s) {
        return (!s) ? '' : this.replace.call(s, this.config.regexUnescape, this.fnUnescape);
    }
}

/**
 * helper function works as tagged template literals, which allow us to modify output of the string.
 * @param {array} strings array of string literals
 * @param {array} dynamic binding values of the processed substitution expressions
 * @return {string} concatinated
 */
function htmlEscape(strings, ...bindings) {
    const escapeUtil = new EscapeUtil(escapeConfig);

    const result = bindings.reduce((accumulator, current, i) => {
        const regexSpaceRemove = /\s\s+/g;
        return (accumulator + escapeUtil.escape(current) + strings[i + 1]).replace(regexSpaceRemove, ' ');
    }, strings[0]);

    return result.trim();
}

export default htmlEscape;
