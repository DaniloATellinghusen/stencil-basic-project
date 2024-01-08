import { C as CSS, p as plt, w as win, a as promiseResolve, b as bootstrapLazy } from './index-403d8268.js';
export { s as setNonce } from './index-403d8268.js';
import { g as globalScripts } from './app-globals-e9a68afd.js';

/*
 Stencil Client Patch Esm v3.4.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // TODO(STENCIL-659): Remove code implementing the CSS variable shim
    // @ts-ignore
    if (!(CSS && CSS.supports && CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return import(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-fa54d62f.js').then(() => {
            if ((plt.$cssShim$ = win.__cssshim)) {
                // TODO(STENCIL-659): Remove code implementing the CSS variable shim
                return plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  globalScripts();
  return bootstrapLazy([["my-button_2",[[49,"my-button",{"icon":[513],"disabled":[516],"download":[513],"value":[513],"tabIndex":[32],"backupTabIndex":[32]},[[0,"keydown","onKeyDown"],[0,"keyup","onKeyUp"],[2,"click","captureClick"],[0,"click","onClick"]]],[49,"my-input",{"readonly":[516],"placeholder":[513],"value":[1537],"disabled":[516],"type":[513],"name":[513],"brand":[513],"hasFocus":[32]},[[0,"focus","onFocus"],[0,"click","onClick"]]]]]], options);
  });
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map