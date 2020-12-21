import { Config } from '@stencil/core';

export const config: Config = {
  preamble: 'The Sutton SignWriting Web Components',
  namespace: 'sgnw-components',
  globalScript: 'src/global/global.ts',
  globalStyle: 'src/global/global.css',
  taskQueue: 'async',
  buildEs5: false,
  testing: {
    browserArgs: ['--no-sandbox', '--disable-setuid-sandbox']
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
      footer: '',
      strict: true
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
