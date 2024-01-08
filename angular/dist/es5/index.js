"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyStencilProjectModule = void 0;
var tslib_1 = require("tslib");
// DIRECTIVES
(0, tslib_1.__exportStar)(require("./directives/proxies"), exports);
(0, tslib_1.__exportStar)(require("./directives/text-value-accessor"), exports);
(0, tslib_1.__exportStar)(require("./directives/select-value-accessor"), exports);
(0, tslib_1.__exportStar)(require("./directives/boolean-value-accessor"), exports);
// PACKAGE MODULE
var my_stencil_project_module_1 = require("./my-stencil-project.module");
Object.defineProperty(exports, "MyStencilProjectModule", { enumerable: true, get: function () { return my_stencil_project_module_1.MyStencilProjectModule; } });
