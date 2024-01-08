import { Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
import * as i0 from "@angular/core";
export class BooleanValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
    writeValue(value) {
        this.el.nativeElement.checked = this.lastValue = value == null ? false : value;
    }
}
BooleanValueAccessor.ɵfac = function BooleanValueAccessor_Factory(t) { return new (t || BooleanValueAccessor)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
BooleanValueAccessor.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BooleanValueAccessor, selectors: [["groupui-checkbox"], ["groupui-switch"], ["groupui-button-group", "variant", "checkbox"], ["groupui-button-group", "variant", "button"]], hostBindings: function BooleanValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("groupuiChange", function BooleanValueAccessor_groupuiChange_HostBindingHandler($event) { return ctx.handleChangeEvent($event.target.checked); });
    } }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: BooleanValueAccessor,
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BooleanValueAccessor, [{
        type: Directive,
        args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'groupui-checkbox, groupui-switch, groupui-button-group[variant="checkbox"], groupui-button-group[variant="button"]',
                host: {
                    '(groupuiChange)': 'handleChangeEvent($event.target.checked)'
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: BooleanValueAccessor,
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
