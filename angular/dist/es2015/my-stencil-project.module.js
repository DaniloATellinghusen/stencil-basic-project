import { NgModule } from '@angular/core';
import { TextValueAccessor } from './directives/text-value-accessor';
import { SelectValueAccessor } from './directives/select-value-accessor';
import { BooleanValueAccessor } from './directives/boolean-value-accessor';
import { defineCustomElements } from '@my-stencil-project/my-stencil-project/dist/loader';
import { MyInput, MyButton } from './directives/proxies';
import * as i0 from "@angular/core";
defineCustomElements(window);
const DECLARATIONS = [
    // proxies
    MyInput,
    MyButton,
    // Value Accessors
    TextValueAccessor,
    SelectValueAccessor,
    BooleanValueAccessor,
];
export class MyStencilProjectModule {
}
MyStencilProjectModule.ɵfac = function MyStencilProjectModule_Factory(t) { return new (t || MyStencilProjectModule)(); };
MyStencilProjectModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MyStencilProjectModule });
MyStencilProjectModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [], imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyStencilProjectModule, [{
        type: NgModule,
        args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS,
                imports: [],
                providers: [],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MyStencilProjectModule, { declarations: [
        // proxies
        MyInput,
        MyButton,
        // Value Accessors
        TextValueAccessor,
        SelectValueAccessor,
        BooleanValueAccessor], exports: [
        // proxies
        MyInput,
        MyButton,
        // Value Accessors
        TextValueAccessor,
        SelectValueAccessor,
        BooleanValueAccessor] }); })();
