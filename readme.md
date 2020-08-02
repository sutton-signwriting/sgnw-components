# @sutton-signwriting/sgnw-components

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/sutton-signwriting/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![version](https://img.shields.io/npm/v/@sutton-signwriting/sgnw-components)](https://www.npmjs.com/package/@sutton-signwriting/sgnw-components)
[![npm downloads](https://img.shields.io/npm/dm/@sutton-signwriting/sgnw-components)](https://npm-stat.com/charts.html?package=@sutton-signwriting/sgnw-components&from=2020-07-24)

@sutton-signwriting/sgnw-components is a javascript package for the browser that includes a collection of web components built with https://stenciljs.com/

This is an early release for testing and development.
Feedback is welcome.

This package supports both Formal SignWriting in ASCII (FSW) and SignWriting in Unicode (SWU) character sets, along with the associated query languages and style string.  See [draft-slevinski-formal-signwriting](https://tools.ietf.org/id/draft-slevinski-formal-signwriting-07.html) for detailed specification.

> Author: https://SteveSlevinski.me  
> Channel: https://www.youtube.com/channel/UCXu4AXlG0rXFtk_5SzumDow  
> Support: https://www.patreon.com/signwriting  

## Useful links

- Source: https://github.com/sutton-signwriting/sgnw-components
- Distribution: https://unpkg.com/browse/@sutton-signwriting/sgnw-components/
- Issue Tracker: https://github.com/sutton-signwriting/sgnw-components/issues
- Online Discussion: https://gitter.im/sutton-signwriting/community


## Web Components
A  variety of web components are planned such as 
sgnw-symbol, sgnw-signbox, sgnw-sequence, sgnw-signmaker, sgnw-palette, sgnw-p, sgnw-vp.

### sgnw-symbol
Basic symbol example is functional.
It supports Formal SignWriting in ASCII (fsw), SignWriting in Unicode (swu), and ISWA 2010 IDs (iid).

The values can be explicitly defined as properties.

    <sgnw-symbol fsw="S10000"></sgnw-symbol>
    <sgnw-symbol swu="񆇡"></sgnw-symbol>
    <sgnw-symbol iid="1"></sgnw-symbol>

The values can be implicitly defined as the element contents.

    <sgnw-symbol>S10000</sgnw-symbol>
    <sgnw-symbol>񆇡</sgnw-symbol>
    <sgnw-symbol>1</sgnw-symbol>

## Using the Sutton SignWriting Web Components

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/@sutton-signwriting/sgnw-components@0.1.0/dist/sgnw-components.js'></script>` in the head of your index.html
- Then you can use the elements anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install @sutton-signwriting/sgnw-components --save`
- Put a script tag similar to this `<script src='node_modules/@sutton-signwriting/sgnw-components/dist/sgnw-components.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install @sutton-signwriting/sgnw-components --save`
- Add an import to the npm packages `import @sutton-signwriting/sgnw-components;`
- Then you can use the element anywhere in your template, JSX, html etc


## License
MIT

## SignWriting General Interest
- SignWriting Website: https://signwriting.org/
- Wikipedia page: https://en.wikipedia.org/wiki/SignWriting
- Email Discussion: https://www.signwriting.org/forums/swlist/
- Facebook Group: https://www.facebook.com/groups/SuttonSignWriting/