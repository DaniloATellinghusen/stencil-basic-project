import { config as base } from './stencil.config';
import { Config } from '@stencil/core';
export const config: Config = {
  ...base,
  testing: {
    ...base.testing,
    testPathIgnorePatterns: ['themes', 'node_modules', 'dist', 'template-tests', 'playwright'],
  },
};
