import { __decorate } from 'tslib';
import { ɵɵdirectiveInject, ChangeDetectorRef, ElementRef, NgZone, ɵɵdefineComponent, ɵɵprojectionDef, ɵɵprojection, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Directive, HostListener, ɵɵdefineDirective, ɵɵlistener, ɵɵProvidersFeature, ɵɵInheritDefinitionFeature, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵsetNgModuleScope } from '@angular/core';
import 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { defineCustomElements } from '@my-stencil-project/my-stencil-project/dist/loader';

/* eslint-disable */
const proxyInputs = (Cmp, inputs) => {
    const Prototype = Cmp.prototype;
    inputs.forEach((item) => {
        Object.defineProperty(Prototype, item, {
            get() {
                return this.el[item];
            },
            set(val) {
                this.z.runOutsideAngular(() => (this.el[item] = val));
            },
        });
    });
};
const proxyMethods = (Cmp, methods) => {
    const Prototype = Cmp.prototype;
    methods.forEach((methodName) => {
        Prototype[methodName] = function () {
            const args = arguments;
            return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
        };
    });
};
// tslint:disable-next-line: only-arrow-functions
function ProxyCmp(opts) {
    const decorator = function (cls) {
        const { defineCustomElementFn, inputs, methods } = opts;
        if (defineCustomElementFn !== undefined) {
            defineCustomElementFn();
        }
        if (inputs) {
            proxyInputs(cls, inputs);
        }
        if (methods) {
            proxyMethods(cls, methods);
        }
        return cls;
    };
    return decorator;
}

const _c0 = ["*"];
let MyButton = class MyButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
MyButton.ɵfac = function MyButton_Factory(t) { return new (t || MyButton)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
MyButton.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: MyButton, selectors: [["my-button"]], inputs: { disabled: "disabled", download: "download", icon: "icon", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function MyButton_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
MyButton = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'download', 'icon', 'value']
    })
], MyButton);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MyButton, [{
        type: Component,
        args: [{
                selector: 'my-button',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['disabled', 'download', 'icon', 'value'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();
let MyInput = class MyInput {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
MyInput.ɵfac = function MyInput_Factory(t) { return new (t || MyInput)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
MyInput.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: MyInput, selectors: [["my-input"]], inputs: { brand: "brand", disabled: "disabled", name: "name", placeholder: "placeholder", readonly: "readonly", type: "type", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function MyInput_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
MyInput = __decorate([
    ProxyCmp({
        inputs: ['brand', 'disabled', 'name', 'placeholder', 'readonly', 'type', 'value']
    })
], MyInput);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MyInput, [{
        type: Component,
        args: [{
                selector: 'my-input',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['brand', 'disabled', 'name', 'placeholder', 'readonly', 'type', 'value'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }]; }, null); })();

class ValueAccessor {
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
ValueAccessor.ɵfac = function ValueAccessor_Factory(t) { return new (t || ValueAccessor)(ɵɵdirectiveInject(ElementRef)); };
ValueAccessor.ɵdir = /*@__PURE__*/ ɵɵdefineDirective({ type: ValueAccessor, hostBindings: function ValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("focusout", function ValueAccessor_focusout_HostBindingHandler() { return ctx._handleBlurEvent(); });
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ValueAccessor, [{
        type: Directive,
        args: [{}]
    }], function () { return [{ type: ElementRef }]; }, { _handleBlurEvent: [{
            type: HostListener,
            args: ['focusout']
        }] }); })();

class TextValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
}
TextValueAccessor.ɵfac = function TextValueAccessor_Factory(t) { return new (t || TextValueAccessor)(ɵɵdirectiveInject(ElementRef)); };
TextValueAccessor.ɵdir = /*@__PURE__*/ ɵɵdefineDirective({ type: TextValueAccessor, selectors: [["my-input", "type", "text"], ["my-input", "type", "password"], ["my-input", "type", "date"], ["my-input", "type", "datetime-local"], ["my-input", "type", "email"], ["my-input", "type", "month"], ["my-input", "type", "tel"], ["my-input", "type", "time"], ["my-input", "type", "url"]], hostBindings: function TextValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("input", function TextValueAccessor_input_HostBindingHandler($event) { return ctx.handleChangeEvent($event.target.value); });
    } }, features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: TextValueAccessor,
                multi: true
            }
        ]), ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TextValueAccessor, [{
        type: Directive,
        args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'my-input[type=text], my-input[type=password], my-input[type=date], my-input[type=datetime-local], my-input[type=email], my-input[type=month], my-input[type=tel], my-input[type=time], my-input[type=url]',
                host: {
                    '(input)': 'handleChangeEvent($event.target.value)'
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: TextValueAccessor,
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: ElementRef }]; }, null); })();

class SelectValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
}
SelectValueAccessor.ɵfac = function SelectValueAccessor_Factory(t) { return new (t || SelectValueAccessor)(ɵɵdirectiveInject(ElementRef)); };
SelectValueAccessor.ɵdir = /*@__PURE__*/ ɵɵdefineDirective({ type: SelectValueAccessor, selectors: [["groupui-dropdown"], ["groupui-select"], ["groupui-radio-group"], ["groupui-slider"], ["groupui-button-group", "variant", "radio"]], hostBindings: function SelectValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("groupuiChange", function SelectValueAccessor_groupuiChange_HostBindingHandler($event) { return ctx.handleChangeEvent($event.target.value); });
    } }, features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: SelectValueAccessor,
                multi: true
            }
        ]), ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SelectValueAccessor, [{
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
    }], function () { return [{ type: ElementRef }]; }, null); })();

class BooleanValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
    writeValue(value) {
        this.el.nativeElement.checked = this.lastValue = value == null ? false : value;
    }
}
BooleanValueAccessor.ɵfac = function BooleanValueAccessor_Factory(t) { return new (t || BooleanValueAccessor)(ɵɵdirectiveInject(ElementRef)); };
BooleanValueAccessor.ɵdir = /*@__PURE__*/ ɵɵdefineDirective({ type: BooleanValueAccessor, selectors: [["groupui-checkbox"], ["groupui-switch"], ["groupui-button-group", "variant", "checkbox"], ["groupui-button-group", "variant", "button"]], hostBindings: function BooleanValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("groupuiChange", function BooleanValueAccessor_groupuiChange_HostBindingHandler($event) { return ctx.handleChangeEvent($event.target.checked); });
    } }, features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: BooleanValueAccessor,
                multi: true
            }
        ]), ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BooleanValueAccessor, [{
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
    }], function () { return [{ type: ElementRef }]; }, null); })();

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
class MyStencilProjectModule {
}
MyStencilProjectModule.ɵfac = function MyStencilProjectModule_Factory(t) { return new (t || MyStencilProjectModule)(); };
MyStencilProjectModule.ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({ type: MyStencilProjectModule });
MyStencilProjectModule.ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ providers: [], imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MyStencilProjectModule, [{
        type: NgModule,
        args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS,
                imports: [],
                providers: [],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MyStencilProjectModule, { declarations: [
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

export { BooleanValueAccessor, MyButton, MyInput, MyStencilProjectModule, SelectValueAccessor, TextValueAccessor };
