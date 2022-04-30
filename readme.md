# Sutton SignWriting Web Components

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/sutton-signwriting/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![version](https://img.shields.io/npm/v/@sutton-signwriting/sgnw-components)](https://www.npmjs.com/package/@sutton-signwriting/sgnw-components)
[![npm downloads](https://img.shields.io/npm/dm/@sutton-signwriting/sgnw-components)](https://npm-stat.com/charts.html?package=@sutton-signwriting/sgnw-components&from=2020-07-24)

@sutton-signwriting/sgnw-components is a javascript package for the browser that includes a collection of web components built with https://stenciljs.com/

This package supports both Formal SignWriting in ASCII (FSW) and SignWriting in Unicode (SWU) character sets, along with the associated query languages and style string.  See [draft-slevinski-formal-signwriting](https://tools.ietf.org/id/draft-slevinski-formal-signwriting-09.html) for detailed specification.

> Author: https://SteveSlevinski.me  
> Channel: https://www.youtube.com/channel/UCXu4AXlG0rXFtk_5SzumDow  
> Sponsor: https://www.patreon.com/signwriting  
> Donate: https://paypal.me/signwriting

## Useful links

- Source: https://github.com/sutton-signwriting/sgnw-components
- Distribution: https://unpkg.com/browse/@sutton-signwriting/sgnw-components/
- Documentation: https://sutton-signwriting.github.io/sgnw-components/
- Issue Tracker: https://github.com/sutton-signwriting/sgnw-components/issues
- Online Discussion: https://gitter.im/sutton-signwriting/community


## Using the components

### Script tag

Put script tags similar to this

    <script type="module" src="https://unpkg.com/@sutton-signwriting/sgnw-components@0.10.0/dist/sgnw-components/sgnw-components.esm.js"></script>
    <link type="text/css" rel="stylesheet" href="https://unpkg.com/@sutton-signwriting/sgnw-components@0.10.0/dist/sgnw-components/sgnw-components.css"/>

Then you can use the elements anywhere in your template, JSX, html etc

### Node modules
- Run `npm install @sutton-signwriting/sgnw-components --save`
- Put a script tag similar to this `<script src='node_modules/@sutton-signwriting/sgnw-components/dist/sgnw-components.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install @sutton-signwriting/sgnw-components --save`
- Add an import to the npm packages `import '@sutton-signwriting/sgnw-components';`
- Then you can use the element anywhere in your template, JSX, html etc


## License
MIT

## SignWriting links
- SignWriting Website: https://signwriting.org/
- Wikipedia page: https://en.wikipedia.org/wiki/SignWriting
- Email Discussion: https://www.signwriting.org/forums/swlist/
- Facebook Group: https://www.facebook.com/groups/SuttonSignWriting/
