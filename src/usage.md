# Using the Sutton SignWriting Web Components

## Script tag

Put tags similar to this in HEAD

    <script type="module" src="https://unpkg.com/@sutton-signwriting/sgnw-components@1.1.0/dist/sgnw-components/sgnw-components.esm.js"></script>
    <link type="text/css" rel="stylesheet" href="https://unpkg.com/@sutton-signwriting/sgnw-components@1.1.0/dist/sgnw-components/sgnw-components.css"/>

Then use the elements anywhere in your template, JSX, html etc

---

## ES Modules

Put script tag in HEAD

    <script type="module">
      import { defineCustomElements } from 'https://unpkg.com/@sutton-signwriting/sgnw-components@1.1.0/loader/index.es2017.mjs';
      defineCustomElements();
    </script>

Then use the elements anywhere in your template, JSX, html etc

---

## Node modules
- Run `npm install @sutton-signwriting/sgnw-components --save`
- Put a script tag similar to this `<script src='node_modules/@sutton-signwriting/sgnw-components/dist/sgnw-components.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

---

## In a stencil-starter app
- Run `npm install @sutton-signwriting/sgnw-components --save`
- Add an import to the npm packages `import '@sutton-signwriting/sgnw-components';`
- Then you can use the element anywhere in your template, JSX, html etc

---

## Sutton SignWriting Web Components

**&lt;sgnw-components /&gt;** use [SignWriting in Unicode (SWU)](https://tools.ietf.org/id/draft-slevinski-formal-signwriting-09.html#name-signwriting-in-unicode-swu) characters.

- sgnw-components

---

## Formal SignWriting Web Components

**&lt;fsw-components /&gt;** use [Formal SignWriting in ASCII (FSW)](https://tools.ietf.org/id/draft-slevinski-formal-signwriting-09.html#name-formal-signwriting-in-ascii) characters.

- fsw-components

---
