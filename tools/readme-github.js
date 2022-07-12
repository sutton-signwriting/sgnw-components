import fs from 'fs';

const replace = (str,arr) => {
  arr.map( el => {
    str = str.replace(el[0],el[1]);
  })
  return str;
}

const replaceCommon = str => replace(str,[
  [/https:\/\/www.sutton-signwriting.io\/sgnw-components\/index.html/g,"README.md"],
  [/https:\/\/www.sutton-signwriting.io\/sgnw-components\/usage.html/g, "USAGE.md"],
  [/https:\/\/www.sutton-signwriting.io\/sgnw-components\/sgnw-components.html/g, "SGNW-COMPONENTS.md"],
  [/https:\/\/www.sutton-signwriting.io\/sgnw-components\/fsw-components.html/g, "FSW-COMPONENTS.md"],
  [/https:\/\/www.sutton-signwriting.io\/sgnw-components\/changelog.html/g, "CHANGELOG.md"],
  [/https:\/\/www.sutton-signwriting.io\/sgnw-components\/license.html/g, "LICENSE"]
]);


let readme = fs.readFileSync('./README.md','utf8');
readme = replaceCommon(readme);
fs.writeFileSync('./README.md', readme,'utf8');