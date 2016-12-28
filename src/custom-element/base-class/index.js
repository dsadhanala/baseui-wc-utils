import { createProps } from '../helpers';

/**
 * custom element base class for eap elements library, which extends from HTMLElement class
 */
class BaseCustomElement extends HTMLElement {

    /**
     * @param {object} template component markup wrapped in template element
     * @param {array} observedAttrs attributes to observe for changes, default set to empty array
     */
    constructor(template, observedAttrs = []) {
        super();

        this._attrsToObserve = observedAttrs;
        this._template       = template;
    }

    /**
     * This will set element attribute as enhanced
     * renders the component with styles and markup provided
     */
    connectedCallback() {
        this.props         = createProps(this.attributes);
        this.originalProps = Object.assign({}, this.props);
        this._renderComponent();
    }

    /**
     * Generates markup from template binded with passed prop values
     * @param {function} template returns template fragment
     */
    _addMarkup(template) {
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
    _whatChanged(attrName, oldVal, newVal) {
        // to avoid first trigger before connectedCallback
        if (oldVal === null) { return false; }

        // skip update if not required
        if (this._attrsToObserve.indexOf(attrName) === -1) { return false; }

        return { name: attrName, value: newVal };
    }

    /**
     * Renders template markup into the component
     */
    _renderComponent() {
        if (!this._template) return;

        this._addMarkup(this._template);
        this.setAttribute('enhanced', '');
    }
}

export default BaseCustomElement;
