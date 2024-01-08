import { ElementRef } from '@angular/core';
import { ValueAccessor } from './value-accessor';
import * as i0 from "@angular/core";
export declare class TextValueAccessor extends ValueAccessor {
    constructor(el: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<TextValueAccessor, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TextValueAccessor, "my-input[type=text], my-input[type=password], my-input[type=date], my-input[type=datetime-local], my-input[type=email], my-input[type=month], my-input[type=tel], my-input[type=time], my-input[type=url]", never, {}, {}, never>;
}
