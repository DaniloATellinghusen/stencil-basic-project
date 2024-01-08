import { ElementRef } from '@angular/core';
import { ValueAccessor } from './value-accessor';
import * as i0 from "@angular/core";
export declare class BooleanValueAccessor extends ValueAccessor {
    constructor(el: ElementRef);
    writeValue(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BooleanValueAccessor, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BooleanValueAccessor, "groupui-checkbox, groupui-switch, groupui-button-group[variant=\"checkbox\"], groupui-button-group[variant=\"button\"]", never, {}, {}, never>;
}
