"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextValueAccessor = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var value_accessor_1 = require("./value-accessor");
var i0 = require("@angular/core");
var TextValueAccessor = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(TextValueAccessor, _super);
    function TextValueAccessor(el) {
        return _super.call(this, el) || this;
    }
    TextValueAccessor.ɵfac = function TextValueAccessor_Factory(t) { return new (t || TextValueAccessor)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    TextValueAccessor.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TextValueAccessor, selectors: [["my-input", "type", "text"], ["my-input", "type", "password"], ["my-input", "type", "date"], ["my-input", "type", "datetime-local"], ["my-input", "type", "email"], ["my-input", "type", "month"], ["my-input", "type", "tel"], ["my-input", "type", "time"], ["my-input", "type", "url"]], hostBindings: function TextValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("input", function TextValueAccessor_input_HostBindingHandler($event) { return ctx.handleChangeEvent($event.target.value); });
        } }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: TextValueAccessor,
                    multi: true
                }
            ]), i0.ɵɵInheritDefinitionFeature] });
    return TextValueAccessor;
}(value_accessor_1.ValueAccessor));
exports.TextValueAccessor = TextValueAccessor;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextValueAccessor, [{
        type: core_1.Directive,
        args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'my-input[type=text], my-input[type=password], my-input[type=date], my-input[type=datetime-local], my-input[type=email], my-input[type=month], my-input[type=tel], my-input[type=time], my-input[type=url]',
                host: {
                    '(input)': 'handleChangeEvent($event.target.value)'
                },
                providers: [
                    {
                        provide: forms_1.NG_VALUE_ACCESSOR,
                        useExisting: TextValueAccessor,
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
