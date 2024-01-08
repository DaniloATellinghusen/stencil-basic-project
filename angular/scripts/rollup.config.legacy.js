import config from './rollup.config';

export default {
  ...config,
  input: 'dist/es5/core.js',
  output: {
    file: 'dist/es5/fesm5.js',
    format: 'cjs',
  },
};
