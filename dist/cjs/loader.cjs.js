'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3b115127.js');
const appGlobals = require('./app-globals-b1627272.js');

/*
 Stencil Client Patch Esm v3.4.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // TODO(STENCIL-659): Remove code implementing the CSS variable shim
    // @ts-ignore
    if (!(index.CSS && index.CSS.supports && index.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return Promise.resolve().then(function () { return require(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-68410b74.js'); }).then(() => {
            if ((index.plt.$cssShim$ = index.win.__cssshim)) {
                // TODO(STENCIL-659): Remove code implementing the CSS variable shim
                return index.plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  appGlobals.globalScripts();
  return index.bootstrapLazy([["my-button_2.cjs",[[49,"my-button",{"icon":[513],"disabled":[516],"download":[513],"value":[513],"tabIndex":[32],"backupTabIndex":[32]},[[0,"keydown","onKeyDown"],[0,"keyup","onKeyUp"],[2,"click","captureClick"],[0,"click","onClick"]]],[49,"my-input",{"readonly":[516],"placeholder":[513],"value":[1537],"disabled":[516],"type":[513],"name":[513],"brand":[513],"hasFocus":[32]},[[0,"focus","onFocus"],[0,"click","onClick"]]]]]], options);
  });
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map