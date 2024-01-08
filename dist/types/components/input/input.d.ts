/**
 * @nativeEvent click - dispatched when input was clicked => 'event.target.value' delivers the current value
 * @nativeEvent change - dispatched when input has changed => 'event.target.value' delivers the current value
 * @nativeEvent invalid - dispatched when input is invalid => 'event.target.value' delivers the invalid value
 *
 * @slot description - named slot 'description', here is any HTML content allowed.
 * @slot label - named slot 'label', here is any HTML content allowed.
 */
export declare class Input {
  /**
   * toggles readonly mode
   */
  readonly readonly: boolean;
  /**
   * placeholder of the input-field<br>
   */
  readonly placeholder: string;
  /**
   * value of the input-field
   */
  value: string;
  /**
   * sets input-field to readonly
   */
  readonly disabled: boolean;
  /**
   * specifies the type of input element
   */
  readonly type: string;
  /**
   * name of the input element to support forms
   */
  readonly name: string;
  /**
   * determines which brand to use.
   */
  readonly brand: string;
  hasFocus: boolean;
  host: HTMLElement;
  onFocus(): void;
  onClick(): void;
  componentDidLoad(): void;
  private initFormEvent;
  private delegateFocusToNativeInput;
  private handleInput;
  private handleChange;
  private showTypingInfo;
  private showDescription;
  private isLabelSlotProvided;
  private isDescriptionSlotProvided;
  render(): any;
  private isInfoContainerNeeded;
}
