import fs from 'fs';
import { create } from 'markdown-to-html-cli';

const fswList = ['fsw-symbol','fsw-sign','fsw-vp','fsw-button','fsw-palette-symbol','fsw-palette','fsw-signbox'];
const fswLinks = fswList.map( item => {
  return '- ' + '[' + item + '](FSW-COMPONENTS.md#' + item + ')';
})
const fswLinksPlus = fswList.map( item => {
  return '- ' + '[' + item + '](FSW-COMPONENTS.md#' + item + ') with [additional examples](' + item + '.html)';
})

const sgnwList = ['sgnw-symbol','sgnw-sign','sgnw-vp','sgnw-button','sgnw-palette-symbol','sgnw-palette','sgnw-signbox'];
const sgnwLinks = sgnwList.map( item => {
  return '- ' + '[' + item + '](SGNW-COMPONENTS.md#' + item + ')';
})
const sgnwLinksPlus = sgnwList.map( item => {
  return '- ' + '[' + item + '](SGNW-COMPONENTS.md#' + item + ') with [additional examples](' + item + '.html)';
})

if (!fs.existsSync('./docs')){
  fs.mkdirSync('./docs');
}

const replace = (str,arr) => {
  arr.map( el => {
    str = str.replace(el[0],el[1]);
  })
  return str;
}

const replaceCommon = str => replace(str,[
  [/README.md/g, "index.html"],
  [/USAGE.md/g, "usage.html"],
  [/SGNW\-COMPONENTS.md/g, "sgnw-components.html"],
  [/FSW\-COMPONENTS.md/g, "fsw-components.html"],
  [/CHANGELOG.md/g, "changelog.html"],
  [/LICENSE/g, "license.html"],
]);

const header = `[Read Me](README.md) | 
[Using the Components](USAGE.md) | 
[&lt;sgnw-components />](SGNW-COMPONENTS.md) | 
[&lt;fsw-components />](FSW-COMPONENTS.md) | 
[Change Log](CHANGELOG.md)

---
`;

let md, mdTemp, html;
let doc = {
  "title": "Sutton SignWriting Web Components",
  "description": "a javascript package for the browser that includes a collection of web components built with https://stenciljs.com/",
  "style": ".red{color: red !important} span.code-line{font-family:monospace,SuttonSignWritingOneD}",
  "script": {
    "src": "build/sgnw-components.esm.js",
    "type": "module"
  }
};

let readme = fs.readFileSync('./README.md','utf8');
md = replaceCommon(readme);
html = create({markdown: md, document: doc})
fs.writeFileSync('./docs/index.html', html,'utf8');

const usage = fs.readFileSync('./src/usage.md','utf8');
md = header + "\n" + usage;
mdTemp = md.replace('- fsw-components',fswLinks.join("\n"))
mdTemp = mdTemp.replace('- sgnw-components',sgnwLinks.join("\n"))
fs.writeFileSync('./USAGE.md', mdTemp,'utf8');

md = md.replace('- fsw-components',fswLinksPlus.join("\n"))
md = md.replace('- sgnw-components',sgnwLinksPlus.join("\n"))
md = replaceCommon(md);
html = create({markdown: md, document: doc})
fs.writeFileSync('./docs/usage.html', html,'utf8');

let changelog = fs.readFileSync('./CHANGELOG.md','utf8');
md = replaceCommon(changelog);
html = create({markdown: md, document: doc})
fs.writeFileSync('./docs/changelog.html', html,'utf8');

let license = fs.readFileSync('./LICENSE','utf8');
md = replaceCommon(header) + "\n" + license;
html = create({markdown: md, document: doc})
fs.writeFileSync('./docs/license.html', html,'utf8');

const fsw = fs.readFileSync('./src/fsw-components.md','utf8');
const fswDetail = fswList.map( item => {
  const md = fs.readFileSync('./src/components/' + item + '/readme.md','utf8');
  return md.replace(/# /g, '## ').replace(/\.\.\//g, '#').replace(/style [a-z]+-[a-z]+ fill:#f9f,stroke:#333,stroke-width:4px/g, '')
});
md = header + "\n" + fsw + "\n" + fswDetail.join("\n");
mdTemp = md.replace('- fsw-components',fswLinks.join("\n"))
fs.writeFileSync('./FSW-COMPONENTS.md', mdTemp,'utf8');

md = md.replace('- fsw-components',fswLinksPlus.join("\n"))
md = replaceCommon(md);
html = create({markdown: md, document: doc})
fs.writeFileSync('./docs/fsw-components.html', html,'utf8');

fswList.map( item => {
  let md = fs.readFileSync('./src/components/' + item + '/' + item + '.md','utf8');
  md = replaceCommon(header) + "\n" + md;
  html = create({markdown: md, document: doc})
  fs.writeFileSync('./docs/' + item + '.html', html,'utf8');
});

const sgnw = fs.readFileSync('./src/sgnw-components.md','utf8');
const sgnwDetail = sgnwList.map( item => {
  const md = fs.readFileSync('./src/components/' + item + '/readme.md','utf8');
  return md.replace(/# /g, '## ').replace(/\.\.\//g, '#').replace(/style [a-z]+-[a-z]+ fill:#f9f,stroke:#333,stroke-width:4px/g, '')
});
md = header + "\n" + sgnw + "\n" + sgnwDetail.join("\n");
mdTemp = md.replace('- sgnw-components',sgnwLinks.join("\n"))
fs.writeFileSync('./SGNW-COMPONENTS.md', mdTemp,'utf8');

md = md.replace('- sgnw-components',sgnwLinksPlus.join("\n"))
md = replaceCommon(md);
html = create({markdown: md, document: doc})
fs.writeFileSync('./docs/sgnw-components.html', html,'utf8');

sgnwList.map( item => {
  let md = fs.readFileSync('./src/components/' + item + '/' + item + '.md','utf8');
  md = replaceCommon(header) + "\n" + md;
  html = create({markdown: md, document: doc})
  fs.writeFileSync('./docs/' + item + '.html', html,'utf8');
});

fs.copyFileSync('./src/steve.png', './docs/steve.png')
