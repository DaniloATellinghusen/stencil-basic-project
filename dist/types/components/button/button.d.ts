/**
 * @nativeEvent click  - dispatched when button was clicked
 *
 * @slot default - default slot for the content of the button
 */
export declare class Button {
  /**
   * icon name e.g. 'clock-24'. Use the following matching icon sizes for the different button sizes: s: 16px m: 24px l: 32px
   */
  readonly icon: string;
  /**
   * deactivates the button
   */
  readonly disabled: boolean;
  /**
   * optionally specifies the new filename for the downloaded file if a url is specified.
   */
  readonly download: string;
  /**
   * value of the button. This is the value that will be submitted if the button is placed inside a form.
   */
  readonly value: string;
  host: HTMLElement;
  private anchorTag;
  tabIndex: number;
  backupTabIndex: number;
  handleDisabledChanged(): void;
  onKeyDown(event: KeyboardEvent): void;
  onKeyUp(event: KeyboardEvent): void;
  captureClick(event: any): void;
  onClick(): void;
  componentWillLoad(): void;
  private getSlotAndIcon;
  render(): any;
}
