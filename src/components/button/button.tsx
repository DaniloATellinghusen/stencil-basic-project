import {
  Component,
  Element,
  h,
  Host,
  Listen,
  Prop,
  State,
  Watch,
} from '@stencil/core';

/**
 * @nativeEvent click  - dispatched when button was clicked
 *
 * @slot default - default slot for the content of the button
 */
@Component({
  tag: 'my-button',
  styleUrls: {
    vwag: 'themes/vwag/button.vwag.scss'
  },
  shadow: { delegatesFocus: true },
})
export class Button {

  /**
   * icon name e.g. 'clock-24'. Use the following matching icon sizes for the different button sizes: s: 16px m: 24px l: 32px
   */
  @Prop({ reflect: true }) readonly icon: string;

  /**
   * deactivates the button
   */
  @Prop({ reflect: true }) readonly disabled: boolean = false;

  /**
   * optionally specifies the new filename for the downloaded file if a url is specified.
   */
  @Prop({ reflect: true }) readonly download: string;

  /**
   * value of the button. This is the value that will be submitted if the button is placed inside a form.
   */
  @Prop({ reflect: true }) readonly value: string;

  @Element() host: HTMLElement;
  private anchorTag: HTMLElement;

  @State() tabIndex: number = 0;

  @State() backupTabIndex: number;

  @Watch('disabled')
  handleDisabledChanged() {
    try {
      if (this.disabled) {
        this.backupTabIndex = this.tabIndex;
      }
      this.host.shadowRoot.getElementById('button').blur();
    } catch (event) {}
  }

  @Listen('keydown')
  onKeyDown(event: KeyboardEvent) {
    if (event.code === 'Space') {
      event.preventDefault();
    }
  }

  @Listen('keyup')
  onKeyUp(event: KeyboardEvent) {
    if (event.code === 'Enter' || event.code === 'Space') {
      this.host.dispatchEvent(new window.Event('click', { bubbles: true }));
    }
  }

  @Listen('click', { capture: true })
  captureClick(event) {
    if (this.disabled) {
      event.stopPropagation();
    }
  }

  @Listen('click')
  onClick() {
      this.anchorTag.click();
  }

  componentWillLoad() {
    this.backupTabIndex = Number(this.host.getAttribute('tabindex'));
  }

  private getSlotAndIcon() {
      return <slot />;
  }

  render() {
    return (
      <Host role="button">
        {(
          <a
            ref={(el) => (this.anchorTag = el)}
            tabindex="-1"
          >
            <div tabIndex={this.tabIndex} id="button">
              {this.getSlotAndIcon()}
            </div>
          </a>
        )}
      </Host>
    );
  }
}
