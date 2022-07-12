import fs from 'fs';

const replace = (str,arr) => {
  arr.map( el => {
    str = str.replace(el[0],el[1]);
  })
  return str;
}

const replaceCommon = str => replace(str,[
  [/README.md/g, "https://www.sutton-signwriting.io/sgnw-components/index.html"],
  [/USAGE.md/g, "https://www.sutton-signwriting.io/sgnw-components/usage.html"],
  [/SGNW\-COMPONENTS.md/g, "https://www.sutton-signwriting.io/sgnw-components/sgnw-components.html"],
  [/FSW\-COMPONENTS.md/g, "https://www.sutton-signwriting.io/sgnw-components/fsw-components.html"],
  [/CHANGELOG.md/g, "https://www.sutton-signwriting.io/sgnw-components/changelog.html"],
  [/LICENSE/g, "https://www.sutton-signwriting.io/sgnw-components/license.html"]
]);


let readme = fs.readFileSync('./README.md','utf8');
readme = replaceCommon(readme);
fs.writeFileSync('./README.md', readme,'utf8');