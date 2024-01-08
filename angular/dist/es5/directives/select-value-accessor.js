"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectValueAccessor = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var value_accessor_1 = require("./value-accessor");
var i0 = require("@angular/core");
var SelectValueAccessor = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(SelectValueAccessor, _super);
    function SelectValueAccessor(el) {
        return _super.call(this, el) || this;
    }
    SelectValueAccessor.ɵfac = function SelectValueAccessor_Factory(t) { return new (t || SelectValueAccessor)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    SelectValueAccessor.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SelectValueAccessor, selectors: [["groupui-dropdown"], ["groupui-select"], ["groupui-radio-group"], ["groupui-slider"], ["groupui-button-group", "variant", "radio"]], hostBindings: function SelectValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("groupuiChange", function SelectValueAccessor_groupuiChange_HostBindingHandler($event) { return ctx.handleChangeEvent($event.target.value); });
        } }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: SelectValueAccessor,
                    multi: true
                }
            ]), i0.ɵɵInheritDefinitionFeature] });
    return SelectValueAccessor;
}(value_accessor_1.ValueAccessor));
exports.SelectValueAccessor = SelectValueAccessor;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectValueAccessor, [{
        type: core_1.Directive,
        args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'groupui-dropdown, groupui-select, groupui-radio-group, groupui-slider, groupui-button-group[variant="radio"]',
                host: {
                    '(groupuiChange)': 'handleChangeEvent($event.target.value)'
                },
                providers: [
                    {
                        provide: forms_1.NG_VALUE_ACCESSOR,
                        useExisting: SelectValueAccessor,
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
