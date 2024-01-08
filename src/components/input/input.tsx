import {
  Component,
  Element,
  h,
  Host,
  Listen,
  Prop,
  State,
} from '@stencil/core';

/**
 * @nativeEvent click - dispatched when input was clicked => 'event.target.value' delivers the current value
 * @nativeEvent change - dispatched when input has changed => 'event.target.value' delivers the current value
 * @nativeEvent invalid - dispatched when input is invalid => 'event.target.value' delivers the invalid value
 *
 * @slot description - named slot 'description', here is any HTML content allowed.
 * @slot label - named slot 'label', here is any HTML content allowed.
 */
@Component({
  tag: 'my-input',
  styleUrls: {
    vwag: 'themes/vwag/input.vwag.scss'
  },
  shadow: { delegatesFocus: true },
})
export class Input {
  /**
   * toggles readonly mode
   */
  @Prop({ reflect: true }) readonly readonly: boolean;

  /**
   * placeholder of the input-field<br>
   */
  @Prop({ reflect: true }) readonly placeholder: string;

  /**
   * value of the input-field
   */
  @Prop({ reflect: true, mutable: true }) value: string;

  /**
   * sets input-field to readonly
   */
  @Prop({ reflect: true }) readonly disabled: boolean;

  /**
   * specifies the type of input element
   */
  @Prop({ reflect: true }) readonly type: string = 'text';

  /**
   * name of the input element to support forms
   */
  @Prop({ reflect: true }) readonly name: string;

  /**
   * determines which brand to use.
   */
  @Prop({ reflect: true }) readonly brand: string = 'vwag';

  @State() hasFocus: boolean;

  @Element() host: HTMLElement;

  @Listen('focus')
  onFocus() {
    this.hasFocus = true;
    this.delegateFocusToNativeInput();
  }

  @Listen('click')
  onClick() {
    this.delegateFocusToNativeInput();
  }

  componentDidLoad() {
   this.initFormEvent();
  }

  private initFormEvent() {
    const form = this.host.closest('form');
    if (form == null) return;

    form.addEventListener('formdata', (event: FormDataEvent) => {
      event.formData.append(this.name, this.value);
    });
  }

  private delegateFocusToNativeInput() {
    this.host.shadowRoot.querySelector('input').focus();
  }

  private handleInput = (event: InputEvent) => {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    this.value = input.value;
  };

  private handleChange = () => {
    this.host.dispatchEvent(new window.Event('change'));
  };

  private showTypingInfo() {
    return this.hasFocus;
  }

  private showDescription() {
      return true;
  }

  private isLabelSlotProvided(): boolean {
    return !!this.host.querySelector('[slot="label"]');
  }

  private isDescriptionSlotProvided(): boolean {
    return !!this.host.querySelector('[slot="description"]');
  }


  render() {
    return (
      <Host tabIndex={this.disabled ? -1 : 0}>
        <div>
          {this.isLabelSlotProvided() && (
            <div id="label" class={{ inline: !this.value && !this.hasFocus }}>
              <slot name="label" />
            </div>
          )}
          {/*<div id="input-wrapper">*/}
            <input
              placeholder={this.placeholder}
              onInput={this.handleInput}
              onChange={this.handleChange}
              value={this.value}
            />
          {/*</div>*/}
          {this.isInfoContainerNeeded() && (
            <div id="info">
              {this.isDescriptionSlotProvided() && this.showDescription() && (
                <div id="description">
                  <slot name="description" />
                </div>
              )}
            </div>
          )}
        </div>
      </Host>
    );
  }

  private isInfoContainerNeeded() {
    return (this.isDescriptionSlotProvided() && this.showDescription()) || this.showTypingInfo();
  }
}
