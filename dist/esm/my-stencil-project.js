import { p as plt, w as win, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-403d8268.js';
export { s as setNonce } from './index-403d8268.js';
import { g as globalScripts } from './app-globals-e9a68afd.js';

/*
 Stencil Client Patch Browser v3.4.2 | MIT Licensed | https://stenciljs.com
 */
/**
 * Helper method for querying a `meta` tag that contains a nonce value
 * out of a DOM's head.
 *
 * @param doc The DOM containing the `head` to query against
 * @returns The content of the meta tag representing the nonce value, or `undefined` if no tag
 * exists or the tag has no content.
 */
function queryNonceMetaTagContent(doc) {
    var _a, _b, _c;
    return (_c = (_b = (_a = doc.head) === null || _a === void 0 ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) === null || _b === void 0 ? void 0 : _b.getAttribute('content')) !== null && _c !== void 0 ? _c : undefined;
}
// TODO(STENCIL-661): Remove code related to the dynamic import shim
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // TODO(STENCIL-659): Remove code implementing the CSS variable shim
    {
        // shim css vars
        // TODO(STENCIL-659): Remove code implementing the CSS variable shim
        plt.$cssShim$ = win.__cssshim;
    }
    // @ts-ignore
    const scriptElm = 
    // TODO(STENCIL-661): Remove code related to the dynamic import shim
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    Array.from(doc.querySelectorAll('script')).find((s) => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === NAMESPACE)
        ;
    const opts = (scriptElm || {})['data-opts'] || {} ;
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if ('onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        if (!win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-8de30773.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
// TODO(STENCIL-661): Remove code related to the dynamic import shim
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            var _a;
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
                    type: 'application/javascript',
                }));
                // Apply CSP nonce to the script tag if it exists
                const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
                if (nonce != null) {
                    script.setAttribute('nonce', nonce);
                }
                mod = new Promise((resolve) => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["my-button_2",[[49,"my-button",{"icon":[513],"disabled":[516],"download":[513],"value":[513],"tabIndex":[32],"backupTabIndex":[32]},[[0,"keydown","onKeyDown"],[0,"keyup","onKeyUp"],[2,"click","captureClick"],[0,"click","onClick"]]],[49,"my-input",{"readonly":[516],"placeholder":[513],"value":[1537],"disabled":[516],"type":[513],"name":[513],"brand":[513],"hasFocus":[32]},[[0,"focus","onFocus"],[0,"click","onClick"]]]]]], options);
});

//# sourceMappingURL=my-stencil-project.js.map