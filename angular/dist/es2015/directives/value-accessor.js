import { Directive, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class ValueAccessor {
    constructor(el) {
        this.el = el;
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    writeValue(value) {
        this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
    }
    handleChangeEvent(value) {
        if (value !== this.lastValue) {
            this.lastValue = value;
            this.onChange(value);
        }
    }
    _handleBlurEvent() {
        this.onTouched();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.el.nativeElement.disabled = isDisabled;
    }
}
ValueAccessor.ɵfac = function ValueAccessor_Factory(t) { return new (t || ValueAccessor)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
ValueAccessor.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ValueAccessor, hostBindings: function ValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("focusout", function ValueAccessor_focusout_HostBindingHandler() { return ctx._handleBlurEvent(); });
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ValueAccessor, [{
        type: Directive,
        args: [{}]
    }], function () { return [{ type: i0.ElementRef }]; }, { _handleBlurEvent: [{
            type: HostListener,
            args: ['focusout']
        }] }); })();
