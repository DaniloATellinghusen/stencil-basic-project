"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyCmp = exports.defineCustomElement = exports.proxyOutputs = exports.proxyMethods = exports.proxyInputs = void 0;
/* eslint-disable */
/* tslint:disable */
var rxjs_1 = require("rxjs");
var proxyInputs = function (Cmp, inputs) {
    var Prototype = Cmp.prototype;
    inputs.forEach(function (item) {
        Object.defineProperty(Prototype, item, {
            get: function () {
                return this.el[item];
            },
            set: function (val) {
                var _this = this;
                this.z.runOutsideAngular(function () { return (_this.el[item] = val); });
            },
        });
    });
};
exports.proxyInputs = proxyInputs;
var proxyMethods = function (Cmp, methods) {
    var Prototype = Cmp.prototype;
    methods.forEach(function (methodName) {
        Prototype[methodName] = function () {
            var _this = this;
            var args = arguments;
            return this.z.runOutsideAngular(function () { return _this.el[methodName].apply(_this.el, args); });
        };
    });
};
exports.proxyMethods = proxyMethods;
var proxyOutputs = function (instance, el, events) {
    events.forEach(function (eventName) { return (instance[eventName] = (0, rxjs_1.fromEvent)(el, eventName)); });
};
exports.proxyOutputs = proxyOutputs;
var defineCustomElement = function (tagName, customElement) {
    if (customElement !== undefined && typeof customElements !== 'undefined' && !customElements.get(tagName)) {
        customElements.define(tagName, customElement);
    }
};
exports.defineCustomElement = defineCustomElement;
// tslint:disable-next-line: only-arrow-functions
function ProxyCmp(opts) {
    var decorator = function (cls) {
        var defineCustomElementFn = opts.defineCustomElementFn, inputs = opts.inputs, methods = opts.methods;
        if (defineCustomElementFn !== undefined) {
            defineCustomElementFn();
        }
        if (inputs) {
            (0, exports.proxyInputs)(cls, inputs);
        }
        if (methods) {
            (0, exports.proxyMethods)(cls, methods);
        }
        return cls;
    };
    return decorator;
}
exports.ProxyCmp = ProxyCmp;
