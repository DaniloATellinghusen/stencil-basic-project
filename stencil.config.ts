import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: [
      'my-input[type=text]',
      'my-input[type=password]',
      'my-input[type=date]',
      'my-input[type=datetime-local]',
      'my-input[type=email]',
      'my-input[type=month]',
      'my-input[type=tel]',
      'my-input[type=time]',
      'my-input[type=url]',
    ],
    event: 'input',
    targetAttr: 'value',
    type: 'text',
  },

  {
    elementSelectors: ['my-input[type=number]'],
    event: 'input',
    targetAttr: 'value',
    type: 'number',
  }
];

export const config: Config = {
  namespace: 'my-stencil-project',
  taskQueue: 'async',
  testing: {
    browserArgs: [
      '--font-render-hinting=none',
      '--disable-lcd-text',
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--lang=de-DE',
    ],
    setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
    browserHeadless: true,
  },
  buildEs5: 'prod',
  watchIgnoredRegex: /custom-elements\//,
  globalScript: './src/global/global.ts',
  extras: {
    __deprecated__cssVarsShim: true,
    __deprecated__dynamicImportShim: true,
    __deprecated__shadowDomShim: true,
    __deprecated__safari10: true,
    scriptDataOpts: true,
    appendChildSlotFix: false,
    cloneNodeFix: false,
    slotChildNodesFix: true,
    enableImportInjection: true,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    angularOutputTarget({
      componentCorePackage: '@my-stencil-project/my-stencil-project',
      directivesProxyFile: './angular/src/directives/proxies.ts',
      directivesArrayFile: './angular/src/directives/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    {
      type: 'docs-readme',
      footer: '',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'components/**/themes/**/*.html' },
      ],
    },
    {
      type: 'dist',
      copy: [{ src: 'assets', warn: true }],
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/global/functions.scss',
      ],
    }),
  ],
};
