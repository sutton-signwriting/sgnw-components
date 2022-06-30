import { Config } from '@stencil/core';

export const config: Config = {
  preamble: 'The Sutton SignWriting Web Components',
  namespace: 'sgnw-components',
  globalScript: 'src/global/global.ts',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'dist',
      empty: false,
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
      footer: '',
      strict: true
    },
    {
      type: 'www',
      dir: 'docs',
      indexHtml: 'docs/index.html',
      empty: false,
      serviceWorker: null, // disable service workers
    },
  ],
};
