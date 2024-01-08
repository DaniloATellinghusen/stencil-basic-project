"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanValueAccessor = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var value_accessor_1 = require("./value-accessor");
var i0 = require("@angular/core");
var BooleanValueAccessor = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(BooleanValueAccessor, _super);
    function BooleanValueAccessor(el) {
        return _super.call(this, el) || this;
    }
    BooleanValueAccessor.prototype.writeValue = function (value) {
        this.el.nativeElement.checked = this.lastValue = value == null ? false : value;
    };
    BooleanValueAccessor.ɵfac = function BooleanValueAccessor_Factory(t) { return new (t || BooleanValueAccessor)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    BooleanValueAccessor.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BooleanValueAccessor, selectors: [["groupui-checkbox"], ["groupui-switch"], ["groupui-button-group", "variant", "checkbox"], ["groupui-button-group", "variant", "button"]], hostBindings: function BooleanValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("groupuiChange", function BooleanValueAccessor_groupuiChange_HostBindingHandler($event) { return ctx.handleChangeEvent($event.target.checked); });
        } }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: BooleanValueAccessor,
                    multi: true
                }
            ]), i0.ɵɵInheritDefinitionFeature] });
    return BooleanValueAccessor;
}(value_accessor_1.ValueAccessor));
exports.BooleanValueAccessor = BooleanValueAccessor;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BooleanValueAccessor, [{
        type: core_1.Directive,
        args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'groupui-checkbox, groupui-switch, groupui-button-group[variant="checkbox"], groupui-button-group[variant="button"]',
                host: {
                    '(groupuiChange)': 'handleChangeEvent($event.target.checked)'
                },
                providers: [
                    {
                        provide: forms_1.NG_VALUE_ACCESSOR,
                        useExisting: BooleanValueAccessor,
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
