import { ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
import { Components } from '@my-stencil-project/my-stencil-project';
import * as i0 from "@angular/core";
export declare class MyButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<MyButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyButton, "my-button", never, { "disabled": "disabled"; "download": "download"; "icon": "icon"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface MyButton extends Components.MyButton {
}
export declare class MyInput {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<MyInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyInput, "my-input", never, { "brand": "brand"; "disabled": "disabled"; "name": "name"; "placeholder": "placeholder"; "readonly": "readonly"; "type": "type"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface MyInput extends Components.MyInput {
}
