module.exports = {
  stories: [
    '../src/readme.stories.mdx',
    '../src/introduction.stories.mdx',
    '../src/**/*.stories.@(js|mdx)'
  ],
  addons: [
    '@storybook/addon-viewport',
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        sourceLoaderOptions: {
          prettierConfig: {
            printWidth: 100,
            singleQuote: false,
          }
        }
      },
    },
    '@storybook/addon-controls',
  ],
};