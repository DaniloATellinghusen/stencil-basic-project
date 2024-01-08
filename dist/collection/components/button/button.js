import { h, Host, } from '@stencil/core';
/**
 * @nativeEvent click  - dispatched when button was clicked
 *
 * @slot default - default slot for the content of the button
 */
export class Button {
  constructor() {
    this.icon = undefined;
    this.disabled = false;
    this.download = undefined;
    this.value = undefined;
    this.tabIndex = 0;
    this.backupTabIndex = undefined;
  }
  handleDisabledChanged() {
    try {
      if (this.disabled) {
        this.backupTabIndex = this.tabIndex;
      }
      this.host.shadowRoot.getElementById('button').blur();
    }
    catch (event) { }
  }
  onKeyDown(event) {
    if (event.code === 'Space') {
      event.preventDefault();
    }
  }
  onKeyUp(event) {
    if (event.code === 'Enter' || event.code === 'Space') {
      this.host.dispatchEvent(new window.Event('click', { bubbles: true }));
    }
  }
  captureClick(event) {
    if (this.disabled) {
      event.stopPropagation();
    }
  }
  onClick() {
    this.anchorTag.click();
  }
  componentWillLoad() {
    this.backupTabIndex = Number(this.host.getAttribute('tabindex'));
  }
  getSlotAndIcon() {
    return h("slot", null);
  }
  render() {
    return (h(Host, { role: "button" }, (h("a", { ref: (el) => (this.anchorTag = el), tabindex: "-1" }, h("div", { tabIndex: this.tabIndex, id: "button" }, this.getSlotAndIcon())))));
  }
  static get is() { return "my-button"; }
  static get encapsulation() { return "shadow"; }
  static get delegatesFocus() { return true; }
  static get originalStyleUrls() {
    return {
      "vwag": ["themes/vwag/button.vwag.scss"]
    };
  }
  static get styleUrls() {
    return {
      "vwag": ["./themes/vwag/button.vwag.css"]
    };
  }
  static get properties() {
    return {
      "icon": {
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
          "text": "icon name e.g. 'clock-24'. Use the following matching icon sizes for the different button sizes: s: 16px m: 24px l: 32px"
        },
        "attribute": "icon",
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
          "text": "deactivates the button"
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "download": {
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
          "text": "optionally specifies the new filename for the downloaded file if a url is specified."
        },
        "attribute": "download",
        "reflect": true
      },
      "value": {
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
          "text": "value of the button. This is the value that will be submitted if the button is placed inside a form."
        },
        "attribute": "value",
        "reflect": true
      }
    };
  }
  static get states() {
    return {
      "tabIndex": {},
      "backupTabIndex": {}
    };
  }
  static get elementRef() { return "host"; }
  static get watchers() {
    return [{
        "propName": "disabled",
        "methodName": "handleDisabledChanged"
      }];
  }
  static get listeners() {
    return [{
        "name": "keydown",
        "method": "onKeyDown",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "keyup",
        "method": "onKeyUp",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "click",
        "method": "captureClick",
        "target": undefined,
        "capture": true,
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
//# sourceMappingURL=button.js.map
