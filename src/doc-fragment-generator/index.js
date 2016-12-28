import { loopEach } from '../dom';
import { addAttributes } from '../custom-element/helpers';

class BuildDocumentFragment {
    constructor(htmlElementsArray = []) {
        this.elementsArray = htmlElementsArray;
        this.docFragment   = document.createDocumentFragment();
    }

    getTemplate() {
        if (!this.elementsArray) return '';

        this._init(this.elementsArray, this.docFragment);
        return this.docFragment;
    }

    /**
     * Initiate fragment generation
     * @param {array} children elements which needs to be nested inside
     * @param {object} contextToPass element/fragment to which newly created element will be added to
     */
    _init(array, contextToPass) {
        loopEach(array, (ele) => {
            this._buildDynamicMarkup(ele, contextToPass);
        });
    }

    /**
     * adds child elements to the field
     * @param {array} children elements which needs to be nested inside
     * @param {object} field element, ex: input, radio, header-text, etc.
    */
    _addChildren(children, field) {
        if (!children || !field) return;

        this._init(children, field);
    }

    /**
     * adds inner text to the field
     * @param {string} innerText text content that needs to be injected into element
     * @param {object} field element, ex: input, radio, header-text, etc.
     */
    static _addInnerText(innerText, field) {
        if (!innerText || !field) return;

        const formField = field;
        formField.innerHTML = innerText;
    }

    /**
     * Build HTML markup based on given data, this will add element to nested DOM/document fragment (context)
     * @param {object} item contains component name, children, attributes and innerText properties
     * @param {object} context element/fragment to which newly created element will be added to
     */
    _buildDynamicMarkup(item, context) {
        const formField          = document.createElement(item.component);
        const formFieldAttrs     = item.attributes;
        const formFieldChildren  = item.children;
        const formFieldInnerText = item.innerText;

        addAttributes(formFieldAttrs, formField);
        this._addChildren(formFieldChildren, formField);
        this.constructor._addInnerText(formFieldInnerText, formField);

        context.appendChild(formField);
    }
}

export default BuildDocumentFragment;
