'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3b115127.js');

const buttonVwagCss = ":host div{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:6px}:host{display:inline-block;font-size:1rem;vertical-align:middle;height:-webkit-max-content;height:-moz-max-content;height:max-content}:host ::slotted([slot=start]){padding-right:4px}:host ::slotted([slot=end]){padding-left:4px}:host(:focus-visible){outline:none}:host a{text-decoration:none;background:inherit;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto}:host(:focus){outline:none}:host div{color:white;background:darkcyan;border:1px solid darkcyan}:host a{color:inherit;border-color:inherit}";

const Button = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return index.h("slot", null);
  }
  render() {
    return (index.h(index.Host, { role: "button" }, (index.h("a", { ref: (el) => (this.anchorTag = el), tabindex: "-1" }, index.h("div", { tabIndex: this.tabIndex, id: "button" }, this.getSlotAndIcon())))));
  }
  static get delegatesFocus() { return true; }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "disabled": ["handleDisabledChanged"]
  }; }
};
Button.style = {
  vwag: buttonVwagCss
};

const inputVwagCss = ":host{line-height:1.2rem;letter-spacing:0.1rem;width:100%}:host #label{margin-bottom:0.2rem}:host ::slotted([slot=label]){position:relative;font-weight:bold;font-size:0.875rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transition:-webkit-transform 0.25s;transition:-webkit-transform 0.25s;transition:transform 0.25s;transition:transform 0.25s, -webkit-transform 0.25s;cursor:default}:host div{position:relative}:host input{position:relative;line-height:2.4px;letter-spacing:0.1rem;outline:none;display:-ms-flexbox;display:flex;resize:none;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}:host input.no-bottom-border-radius{border-bottom-left-radius:0;border-bottom-right-radius:0}:host #description{-ms-flex-preferred-size:100%;flex-basis:100%}:host #typing-info{white-space:nowrap}:host ::slotted([slot=description]),:host #typing-info{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:0.875rem;cursor:default}:host([disabled=\"\"]) input{cursor:not-allowed;pointer-events:auto;-webkit-box-shadow:none;box-shadow:none}:host #input-wrapper{position:relative}:host ::slotted([slot=label]){color:gray}:host input{height:2rem;font-size:1rem;background:white;border:1px solid gray;color:darkblue}:host input::-webkit-input-placeholder{color:gray}:host input::-moz-placeholder{color:gray}:host input:-ms-input-placeholder{color:gray}:host input::-ms-input-placeholder{color:gray}:host input::placeholder{color:gray}:host ::slotted([slot=description]),:host #typing-info{color:gray}:host(:not([disabled=\"\"])) input:hover,:host(:not([disabled=\"\"])) input:focus{border-color:darkblue}";

const Input = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, { tabIndex: this.disabled ? -1 : 0 }, index.h("div", null, this.isLabelSlotProvided() && (index.h("div", { id: "label", class: { inline: !this.value && !this.hasFocus } }, index.h("slot", { name: "label" }))), index.h("input", { placeholder: this.placeholder, onInput: this.handleInput, onChange: this.handleChange, value: this.value }), this.isInfoContainerNeeded() && (index.h("div", { id: "info" }, this.isDescriptionSlotProvided() && this.showDescription() && (index.h("div", { id: "description" }, index.h("slot", { name: "description" }))))))));
  }
  isInfoContainerNeeded() {
    return (this.isDescriptionSlotProvided() && this.showDescription()) || this.showTypingInfo();
  }
  static get delegatesFocus() { return true; }
  get host() { return index.getElement(this); }
};
Input.style = {
  vwag: inputVwagCss
};

exports.my_button = Button;
exports.my_input = Input;

//# sourceMappingURL=my-button_2.cjs.entry.js.map