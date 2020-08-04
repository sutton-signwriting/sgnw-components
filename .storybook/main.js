module.exports = {
  stories: [
    '../src/readme.stories.mdx',
    '../src/introduction.stories.mdx',
    '../src/**/*.stories.(js|mdx)'
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
};