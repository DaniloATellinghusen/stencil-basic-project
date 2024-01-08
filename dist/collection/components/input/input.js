import { h, Host, } from '@stencil/core';
/**
 * @nativeEvent click - dispatched when input was clicked => 'event.target.value' delivers the current value
 * @nativeEvent change - dispatched when input has changed => 'event.target.value' delivers the current value
 * @nativeEvent invalid - dispatched when input is invalid => 'event.target.value' delivers the invalid value
 *
 * @slot description - named slot 'description', here is any HTML content allowed.
 * @slot label - named slot 'label', here is any HTML content allowed.
 */
export class Input {
  constructor() {
    this.handleInput = (event) => {
      const input = event.target;
      this.value = input.value;
    };
    this.handleChange = () => {
      this.host.dispatchEvent(new window.Event('change'));
    };
    this.readonly = undefined;
    this.placeholder = undefined;
    this.value = undefined;
    this.disabled = undefined;
    this.type = 'text';
    this.name = undefined;
    this.brand = 'vwag';
    this.hasFocus = undefined;
  }
  onFocus() {
    this.hasFocus = true;
    this.delegateFocusToNativeInput();
  }
  onClick() {
    this.delegateFocusToNativeInput();
  }
  componentDidLoad() {
    this.initFormEvent();
  }
  initFormEvent() {
    const form = this.host.closest('form');
    if (form == null)
      return;
    form.addEventListener('formdata', (event) => {
      event.formData.append(this.name, this.value);
    });
  }
  delegateFocusToNativeInput() {
    this.host.shadowRoot.querySelector('input').focus();
  }
  showTypingInfo() {
    return this.hasFocus;
  }
  showDescription() {
    return true;
  }
  isLabelSlotProvided() {
    return !!this.host.querySelector('[slot="label"]');
  }
  isDescriptionSlotProvided() {
    return !!this.host.querySelector('[slot="description"]');
  }
  render() {
    return (h(Host, { tabIndex: this.disabled ? -1 : 0 }, h("div", null, this.isLabelSlotProvided() && (h("div", { id: "label", class: { inline: !this.value && !this.hasFocus } }, h("slot", { name: "label" }))), h("input", { placeholder: this.placeholder, onInput: this.handleInput, onChange: this.handleChange, value: this.value }), this.isInfoContainerNeeded() && (h("div", { id: "info" }, this.isDescriptionSlotProvided() && this.showDescription() && (h("div", { id: "description" }, h("slot", { name: "description" }))))))));
  }
  isInfoContainerNeeded() {
    return (this.isDescriptionSlotProvided() && this.showDescription()) || this.showTypingInfo();
  }
  static get is() { return "my-input"; }
  static get encapsulation() { return "shadow"; }
  static get delegatesFocus() { return true; }
  static get originalStyleUrls() {
    return {
      "vwag": ["themes/vwag/input.vwag.scss"]
    };
  }
  static get styleUrls() {
    return {
      "vwag": ["./themes/vwag/input.vwag.css"]
    };
  }
  static get properties() {
    return {
      "readonly": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "toggles readonly mode"
        },
        "attribute": "readonly",
        "reflect": true
      },
      "placeholder": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "placeholder of the input-field<br>"
        },
        "attribute": "placeholder",
        "reflect": true
      },
      "value": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "value of the input-field"
        },
        "attribute": "value",
        "reflect": true
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "sets input-field to readonly"
        },
        "attribute": "disabled",
        "reflect": true
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "specifies the type of input element"
        },
        "attribute": "type",
        "reflect": true,
        "defaultValue": "'text'"
      },
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "name of the input element to support forms"
        },
        "attribute": "name",
        "reflect": true
      },
      "brand": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "determines which brand to use."
        },
        "attribute": "brand",
        "reflect": true,
        "defaultValue": "'vwag'"
      }
    };
  }
  static get states() {
    return {
      "hasFocus": {}
    };
  }
  static get elementRef() { return "host"; }
  static get listeners() {
    return [{
        "name": "focus",
        "method": "onFocus",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "click",
        "method": "onClick",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=input.js.map
