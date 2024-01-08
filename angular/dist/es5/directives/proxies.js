"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyInput = exports.MyButton = void 0;
var tslib_1 = require("tslib");
/* tslint:disable */
/* auto-generated angular directive proxies */
var core_1 = require("@angular/core");
var utils_1 = require("./angular-component-lib/utils");
var i0 = require("@angular/core");
var _c0 = ["*"];
var MyButton = /** @class */ (function () {
    function MyButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    MyButton.ɵfac = function MyButton_Factory(t) { return new (t || MyButton)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    MyButton.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MyButton, selectors: [["my-button"]], inputs: { disabled: "disabled", download: "download", icon: "icon", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function MyButton_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    MyButton = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['disabled', 'download', 'icon', 'value']
        })
    ], MyButton);
    return MyButton;
}());
exports.MyButton = MyButton;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyButton, [{
        type: core_1.Component,
        args: [{
                selector: 'my-button',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['disabled', 'download', 'icon', 'value'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
var MyInput = /** @class */ (function () {
    function MyInput(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    MyInput.ɵfac = function MyInput_Factory(t) { return new (t || MyInput)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    MyInput.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MyInput, selectors: [["my-input"]], inputs: { brand: "brand", disabled: "disabled", name: "name", placeholder: "placeholder", readonly: "readonly", type: "type", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function MyInput_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    MyInput = (0, tslib_1.__decorate)([
        (0, utils_1.ProxyCmp)({
            inputs: ['brand', 'disabled', 'name', 'placeholder', 'readonly', 'type', 'value']
        })
    ], MyInput);
    return MyInput;
}());
exports.MyInput = MyInput;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyInput, [{
        type: core_1.Component,
        args: [{
                selector: 'my-input',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'disabled', 'name', 'placeholder', 'readonly', 'type', 'value'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
