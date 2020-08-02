import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'sgnw-components',
  globalScript: 'src/global/global.ts',
  taskQueue: 'async',
  testing: {
    browserArgs: ['--no-sandbox', '--disable-setuid-sandbox']
  },
  outputTargets: [
    {
      type: 'www'
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme',
      footer: 'Sutton SignWriting Component',
      strict: true
    },
    {
      type: 'dist-custom-elements-bundle'
    }
  ]
};
// import { HelloWorld } from 'my-library/dist/custom-elements-bundle';
// customElements.define('hello-world', HelloWorld);

// import { defineCustomElements, HelloWorld } from 'my-library/dist/custom-elements-bundle';
// defineCustomElements();
