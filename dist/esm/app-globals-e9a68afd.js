import { c as setMode } from './index-403d8268.js';

// Used by Stencil to identify the brand attribute
const appGlobalScript = () => {
  const brandResolver = (elm) => {
    const brand = elm.brand || elm.getAttribute('brand');
    if (brand) {
      return brand;
    }
    else if (!elm.parentElement) {
      return 'vwag';
    }
    else {
      return brandResolver(elm.parentElement);
    }
  };
  setMode((elm) => {
    return brandResolver(elm);
  });
};

const globalScripts = appGlobalScript;

export { globalScripts as g };

//# sourceMappingURL=app-globals-e9a68afd.js.map