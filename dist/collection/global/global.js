import { setMode } from '@stencil/core';
// Used by Stencil to identify the brand attribute
export default () => {
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
//# sourceMappingURL=global.js.map
