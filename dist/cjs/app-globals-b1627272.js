'use strict';

const index = require('./index-3b115127.js');

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
  index.setMode((elm) => {
    return brandResolver(elm);
  });
};

const globalScripts = appGlobalScript;

exports.globalScripts = globalScripts;

//# sourceMappingURL=app-globals-b1627272.js.map