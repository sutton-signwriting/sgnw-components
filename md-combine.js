import fs from 'fs';

if (!fs.existsSync('./src/docs')){
  fs.mkdirSync('./src/docs');
}

const readme = fs.readFileSync('./readme.md','utf8');
const intro = fs.readFileSync('./src/components.md','utf8');
const fswIntro = fs.readFileSync('./src/components/fsw-components.md','utf8');
const list = ['sgnw-symbol','sgnw-sign','fsw-symbol','fsw-sign','fsw-vp'];
const components = list.map( item => {
  const md = fs.readFileSync('./src/components/' + item + '/readme.md','utf8');
  return md.replace(/# /g, '### ').replace(/\.\.\//g, '#').replace(/style [a-z]+-[a-z]+ fill:#f9f,stroke:#333,stroke-width:4px/g, '')
});


fs.writeFileSync('./src/docs/index.md', readme + "\n" + intro + "\n" + fswIntro + "\n" + components.join("\n"),'utf8');
fs.writeFileSync('./src/docs/fsw.md', readme + "\n" + intro + "\n" + fswIntro + "\n" + components.join("\n"),'utf8');

//fs.readdirSync('./').forEach((file) => {
//  if(fs.lstatSync(file).isFile()) {
//    fs.appendFileSync('./output.file', fs.readFileSync(file).toString())
//  }
//})