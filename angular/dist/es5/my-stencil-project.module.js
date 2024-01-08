"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyStencilProjectModule = void 0;
var core_1 = require("@angular/core");
var text_value_accessor_1 = require("./directives/text-value-accessor");
var select_value_accessor_1 = require("./directives/select-value-accessor");
var boolean_value_accessor_1 = require("./directives/boolean-value-accessor");
var loader_1 = require("@my-stencil-project/my-stencil-project/dist/loader");
var proxies_1 = require("./directives/proxies");
var i0 = require("@angular/core");
(0, loader_1.defineCustomElements)(window);
var DECLARATIONS = [
    // proxies
    proxies_1.MyInput,
    proxies_1.MyButton,
    // Value Accessors
    text_value_accessor_1.TextValueAccessor,
    select_value_accessor_1.SelectValueAccessor,
    boolean_value_accessor_1.BooleanValueAccessor,
];
var MyStencilProjectModule = /** @class */ (function () {
    function MyStencilProjectModule() {
    }
    MyStencilProjectModule.ɵfac = function MyStencilProjectModule_Factory(t) { return new (t || MyStencilProjectModule)(); };
    MyStencilProjectModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MyStencilProjectModule });
    MyStencilProjectModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [], imports: [[]] });
    return MyStencilProjectModule;
}());
exports.MyStencilProjectModule = MyStencilProjectModule;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyStencilProjectModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS,
                imports: [],
                providers: [],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MyStencilProjectModule, { declarations: [
        // proxies
        proxies_1.MyInput,
        proxies_1.MyButton,
        // Value Accessors
        text_value_accessor_1.TextValueAccessor,
        select_value_accessor_1.SelectValueAccessor,
        boolean_value_accessor_1.BooleanValueAccessor], exports: [
        // proxies
        proxies_1.MyInput,
        proxies_1.MyButton,
        // Value Accessors
        text_value_accessor_1.TextValueAccessor,
        select_value_accessor_1.SelectValueAccessor,
        boolean_value_accessor_1.BooleanValueAccessor] }); })();
