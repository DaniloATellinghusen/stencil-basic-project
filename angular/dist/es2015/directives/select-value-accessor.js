import { Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
import * as i0 from "@angular/core";
export class SelectValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
}
SelectValueAccessor.ɵfac = function SelectValueAccessor_Factory(t) { return new (t || SelectValueAccessor)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
SelectValueAccessor.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SelectValueAccessor, selectors: [["groupui-dropdown"], ["groupui-select"], ["groupui-radio-group"], ["groupui-slider"], ["groupui-button-group", "variant", "radio"]], hostBindings: function SelectValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("groupuiChange", function SelectValueAccessor_groupuiChange_HostBindingHandler($event) { return ctx.handleChangeEvent($event.target.value); });
    } }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: SelectValueAccessor,
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectValueAccessor, [{
        type: Directive,
        args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'groupui-dropdown, groupui-select, groupui-radio-group, groupui-slider, groupui-button-group[variant="radio"]',
                host: {
                    '(groupuiChange)': 'handleChangeEvent($event.target.value)'
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: SelectValueAccessor,
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
