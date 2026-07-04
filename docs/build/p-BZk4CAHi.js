/*!
 * The Sutton SignWriting Web Components
 */
const s=function(s,t){return s?s.replace(/<svg\b([^>]*)>/i,((s,e)=>{const n=e.match(/\sstyle=(["'])(.*?)\1/i);return n?s.replace(n[0],` style=${n[1]}${t};${n[2]}${n[1]}`):`<svg${e} style="${t}">`})):s},t=function(s,t,e){return s?s.replace(/<[^/!][^>]*\bclass=(["'])([^"']*)\1[^>]*>/gi,((s,n,$)=>{if(!$.split(/\s+/).includes(t))return s;const r=s.match(/\sstyle=(["'])(.*?)\1/i);return r?s.replace(r[0],` style=${r[1]}${r[2]};${e}${r[1]}`):s.replace(/>$/,` style="${e}">`)})):s};export{s as a,t as b}