"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueAccessor = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var ValueAccessor = /** @class */ (function () {
    function ValueAccessor(el) {
        this.el = el;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    ValueAccessor.prototype.writeValue = function (value) {
        this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
    };
    ValueAccessor.prototype.handleChangeEvent = function (value) {
        if (value !== this.lastValue) {
            this.lastValue = value;
            this.onChange(value);
        }
    };
    ValueAccessor.prototype._handleBlurEvent = function () {
        this.onTouched();
    };
    ValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ValueAccessor.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this.el.nativeElement.disabled = isDisabled;
    };
    ValueAccessor.ɵfac = function ValueAccessor_Factory(t) { return new (t || ValueAccessor)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    ValueAccessor.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ValueAccessor, hostBindings: function ValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("focusout", function ValueAccessor_focusout_HostBindingHandler() { return ctx._handleBlurEvent(); });
        } } });
    return ValueAccessor;
}());
exports.ValueAccessor = ValueAccessor;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ValueAccessor, [{
        type: core_1.Directive,
        args: [{}]
    }], function () { return [{ type: i0.ElementRef }]; }, { _handleBlurEvent: [{
            type: core_1.HostListener,
            args: ['focusout']
        }] }); })();
