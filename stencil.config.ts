import { Config } from '@stencil/core';

export const config: Config = {
  preamble: 'The Sutton SignWriting Web Components',
  namespace: 'sgnw-components',
  globalScript: 'src/global/global.ts',
  taskQueue: 'async',
  buildEs5: false,
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
      footer: '',
      strict: true
    },
    {
      type: 'dist-custom-elements-bundle'
    }
  ]
};
