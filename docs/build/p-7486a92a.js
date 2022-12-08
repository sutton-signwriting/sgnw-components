/*!
 * The Sutton SignWriting Web Components
 */
let e,t,n,l=!1,o=!1,s=!1,r=!1,i=!1;const c="undefined"!=typeof window?window:{},f=c.document||{head:{}},u={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},a=e=>Promise.resolve(e),d=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),p=(e,t,n)=>{n&&n.map((([n,l,o])=>{const s=$(e,n),r=h(t,o),i=y(n);u.ael(s,l,r,i),(t.o=t.o||[]).push((()=>u.rel(s,l,r,i)))}))},h=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(e){ie(e)}},$=(e,t)=>8&t?c:e,y=e=>0!=(2&e),b=new WeakMap,m=e=>"sc-"+e.p,w={},g=e=>"object"==(e=typeof e)||"function"===e,v=(e,t,...n)=>{let l=null,o=null,s=!1,r=!1;const i=[],c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!g(l))&&(l+=""),s&&r?i[i.length-1].h+=l:i.push(s?j(null,l):l),r=s)};if(c(n),t){t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}const f=j(e,null);return f.$=t,i.length>0&&(f.m=i),f.g=o,f},j=(e,t)=>({t:0,v:e,h:t,j:null,m:null,$:null,g:null}),S={},k=(e,t,n,l,o,s)=>{if(n!==l){let r=re(e,t),i=t.toLowerCase();if("class"===t){const t=e.classList,o=M(n),s=M(l);t.remove(...o.filter((e=>e&&!s.includes(e)))),t.add(...s.filter((e=>e&&!o.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if(r||"o"!==t[0]||"n"!==t[1]){const i=g(l);if((r||i&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{const o=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(e){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!r||4&s||o)&&!i&&e.setAttribute(t,l=!0===l?"":l)}else t="-"===t[2]?t.slice(3):re(c,i)?i.slice(2):i[2]+t.slice(3),n&&u.rel(e,t,n,!1),l&&u.ael(e,t,l,!1)}},O=/\s/,M=e=>e?e.split(O):[],C=(e,t,n,l)=>{const o=11===t.j.nodeType&&t.j.host?t.j.host:t.j,s=e&&e.$||w,r=t.$||w;for(l in s)l in r||k(o,l,s[l],void 0,n,t.t);for(l in r)k(o,l,s[l],r[l],n,t.t)},T=(o,i,c,u)=>{const a=i.m[c];let d,p,h,$=0;if(l||(s=!0,"slot"===a.v&&(e&&u.classList.add(e+"-s"),a.t|=a.m?2:1)),null!==a.h)d=a.j=f.createTextNode(a.h);else if(1&a.t)d=a.j=f.createTextNode("");else{if(r||(r="svg"===a.v),d=a.j=f.createElementNS(r?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&a.t?"slot-fb":a.v),r&&"foreignObject"===a.v&&(r=!1),C(null,a,r),null!=e&&d["s-si"]!==e&&d.classList.add(d["s-si"]=e),a.m)for($=0;$<a.m.length;++$)p=T(o,a,$,d),p&&d.appendChild(p);"svg"===a.v?r=!1:"foreignObject"===d.tagName&&(r=!0)}return d["s-hn"]=n,3&a.t&&(d["s-sr"]=!0,d["s-cr"]=t,d["s-sn"]=a.g||"",h=o&&o.m&&o.m[c],h&&h.v===a.v&&o.j&&x(o.j,!1)),d},x=(e,t)=>{u.t|=1;const l=e.childNodes;for(let e=l.length-1;e>=0;e--){const o=l[e];o["s-hn"]!==n&&o["s-ol"]&&(P(o).insertBefore(o,N(o)),o["s-ol"].remove(),o["s-ol"]=void 0,s=!0),t&&x(o,t)}u.t&=-2},R=(e,t,l,o,s,r)=>{let i,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);s<=r;++s)o[s]&&(i=T(null,l,s,e),i&&(o[s].j=i,c.insertBefore(i,N(t))))},E=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(o=!0,(s=l.j)["s-ol"]?s["s-ol"].remove():x(s,!0),s.remove())},L=(e,t)=>e.v===t.v&&("slot"!==e.v||e.g===t.g),N=e=>e&&e["s-ol"]||e,P=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,q=(e,t)=>{const n=t.j=e.j,l=e.m,o=t.m,s=t.v,i=t.h;let c;null===i?(r="svg"===s||"foreignObject"!==s&&r,"slot"===s||C(e,t,r),null!==l&&null!==o?((e,t,n,l)=>{let o,s=0,r=0,i=t.length-1,c=t[0],f=t[i],u=l.length-1,a=l[0],d=l[u];for(;s<=i&&r<=u;)null==c?c=t[++s]:null==f?f=t[--i]:null==a?a=l[++r]:null==d?d=l[--u]:L(c,a)?(q(c,a),c=t[++s],a=l[++r]):L(f,d)?(q(f,d),f=t[--i],d=l[--u]):L(c,d)?("slot"!==c.v&&"slot"!==d.v||x(c.j.parentNode,!1),q(c,d),e.insertBefore(c.j,f.j.nextSibling),c=t[++s],d=l[--u]):L(f,a)?("slot"!==c.v&&"slot"!==d.v||x(f.j.parentNode,!1),q(f,a),e.insertBefore(f.j,c.j),f=t[--i],a=l[++r]):(o=T(t&&t[r],n,r,e),a=l[++r],o&&P(c.j).insertBefore(o,N(c.j)));s>i?R(e,null==l[u+1]?null:l[u+1].j,n,l,r,u):r>u&&E(t,s,i)})(n,l,t,o):null!==o?(null!==e.h&&(n.textContent=""),R(n,null,t,o,0,o.length-1)):null!==l&&E(l,0,l.length-1),r&&"svg"===s&&(r=!1)):(c=n["s-cr"])?c.parentNode.textContent=i:e.h!==i&&(n.data=i)},W=e=>{const t=e.childNodes;let n,l,o,s,r,i;for(l=0,o=t.length;l<o;l++)if(n=t[l],1===n.nodeType){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,s=0;s<o;s++)if(i=t[s].nodeType,t[s]["s-hn"]!==n["s-hn"]||""!==r){if(1===i&&r===t[s].getAttribute("slot")){n.hidden=!0;break}}else if(1===i||3===i&&""!==t[s].textContent.trim()){n.hidden=!0;break}W(n)}},A=[],D=e=>{let t,n,l,s,r,i,c=0;const f=e.childNodes,u=f.length;for(;c<u;c++){if(t=f[c],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(l=n.parentNode.childNodes,s=t["s-sn"],i=l.length-1;i>=0;i--)n=l[i],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(H(n,s)?(r=A.find((e=>e.S===n)),o=!0,n["s-sn"]=n["s-sn"]||s,r?r.k=t:A.push({k:t,S:n}),n["s-sr"]&&A.map((e=>{H(e.S,n["s-sn"])&&(r=A.find((e=>e.S===n)),r&&!e.k&&(e.k=r.k))}))):A.some((e=>e.S===n))||A.push({S:n}));1===t.nodeType&&D(t)}},H=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,U=e=>le(e).O,F=(e,t,n)=>{const l=U(e);return{emit:e=>V(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},V=(e,t,n)=>{const l=u.ce(t,n);return e.dispatchEvent(l),l},_=(e,t)=>{t&&!e.M&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.M=t)))},z=(e,t)=>{if(e.t|=16,!(4&e.t))return _(e,e.C),be((()=>B(e,t)));e.t|=512},B=(e,t)=>{const n=e.i;let l;return t&&(e.t|=256,e.u&&(e.u.map((([e,t])=>Q(n,e,t))),e.u=null),l=Q(n,"componentWillLoad")),X(l,(()=>G(e,n,t)))},G=async(e,t,n)=>{const l=e.O,o=l["s-rc"];n&&(e=>{const t=e.T,n=e.O,l=t.t,o=((e,t)=>{let n=m(t);const l=ue.get(n);if(e=11===e.nodeType?e:f,l)if("string"==typeof l){let t,o=b.get(e=e.head||e);o||b.set(e,o=new Set),o.has(n)||(t=f.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"),2&l&&n.classList.add(o+"-s"))})(e);I(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>J(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},I=(r,i)=>{try{i=i.render(),r.t&=-17,r.t|=2,((r,i)=>{const c=r.O,a=r.T,d=r.R||j(null,null),p=(e=>e&&e.v===S)(i)?i:v(null,null,i);if(n=c.tagName,a.L&&(p.$=p.$||{},a.L.map((([e,t])=>p.$[t]=c[e]))),p.v=null,p.t|=4,r.R=p,p.j=d.j=c.shadowRoot||c,e=c["s-sc"],t=c["s-cr"],l=0!=(1&a.t),o=!1,q(d,p),u.t|=1,s){let e,t,n,l,o,s;D(p.j);let r=0;for(;r<A.length;r++)e=A[r],t=e.S,t["s-ol"]||(n=f.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(r=0;r<A.length;r++)if(e=A[r],t=e.S,e.k){for(l=e.k.parentNode,o=e.k.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}o&&W(p.j),u.t&=-2,A.length=0})(r,i)}catch(e){ie(e,r.O)}return null},J=e=>{const t=e.O,n=e.i,l=e.C;64&e.t||(e.t|=64,Y(t),Q(n,"componentDidLoad"),e.N(t),l||K()),e.M&&(e.M(),e.M=void 0),512&e.t&&ye((()=>z(e,!1))),e.t&=-517},K=()=>{Y(f.documentElement),ye((()=>V(c,"appload",{detail:{namespace:"sgnw-components"}})))},Q=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){ie(e)}},X=(e,t)=>e&&e.then?e.then(t):t(),Y=e=>e.classList.add("hydrated"),Z=(e,t,n)=>{if(t.P){e.watchers&&(t.q=e.watchers);const l=Object.entries(t.P),o=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>le(this).W.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=le(e),s=o.O,r=o.W.get(t),i=o.t,c=o.i;if(n=((e,t)=>null==e||g(e)?e:4&t?"false"!==e&&(""===e||!!e):1&t?e+"":e)(n,l.P[t][0]),(!(8&i)||void 0===r)&&n!==r&&(!Number.isNaN(r)||!Number.isNaN(n))&&(o.W.set(t,n),c)){if(l.q&&128&i){const e=l.q[t];e&&e.map((e=>{try{c[e](n,r,t)}catch(e){ie(e,s)}}))}2==(18&i)&&z(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){u.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))l=this[t],delete this[t];else if(o.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==l)return;this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.L.push([e,o]),o}))}}return e},ee=e=>{Q(e,"connectedCallback")},te=(e,t={})=>{const n=[],l=t.exclude||[],o=c.customElements,s=f.head,r=s.querySelector("meta[charset]"),i=f.createElement("style"),a=[];let h,$=!0;Object.assign(u,t),u.l=new URL(t.resourcesUrl||"./",f.baseURI).href,e.map((e=>{e[1].map((t=>{const s={t:t[0],p:t[1],P:t[2],A:t[3]};s.P=t[2],s.A=t[3],s.L=[],s.q={};const r=s.p,i=class extends HTMLElement{constructor(e){super(e),se(e=this,s),1&s.t&&e.attachShadow({mode:"open"})}connectedCallback(){h&&(clearTimeout(h),h=null),$?a.push(this):u.jmp((()=>(e=>{if(0==(1&u.t)){const t=le(e),n=t.T,l=()=>{};if(1&t.t)p(e,t,n.A),ee(t.i);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=f.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){_(t,t.C=n);break}}n.P&&Object.entries(n.P).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=fe(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.q=o.watchers,Z(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(e){ie(e)}t.t&=-9,t.t|=128,e(),ee(t.i)}if(o.style){let e=o.style;const t=m(n);if(!ue.has(t)){const l=()=>{};((e,t,n)=>{let l=ue.get(e);d&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,ue.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.C,r=()=>z(t,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){u.jmp((()=>(()=>{if(0==(1&u.t)){const e=le(this);e.o&&(e.o.map((e=>e())),e.o=void 0)}})()))}componentOnReady(){return le(this).D}};s.H=e[0],l.includes(r)||o.get(r)||(n.push(r),o.define(r,Z(i,s,1)))}))})),i.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",i.setAttribute("data-styles",""),s.insertBefore(i,r?r.nextSibling:s.firstChild),$=!1,a.length?a.map((e=>e.connectedCallback())):u.jmp((()=>h=setTimeout(K,30)))},ne=new WeakMap,le=e=>ne.get(e),oe=(e,t)=>ne.set(t.i=e,t),se=(e,t)=>{const n={t:0,O:e,T:t,W:new Map};return n.D=new Promise((e=>n.N=e)),e["s-p"]=[],e["s-rc"]=[],p(e,n,t.A),ne.set(e,n)},re=(e,t)=>t in e,ie=(e,t)=>(0,console.error)(e,t),ce=new Map,fe=e=>{const t=e.p.replace(/-/g,"_"),n=e.H,l=ce.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(ce.set(n,e),e[t])),ie)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},ue=new Map,ae=[],de=[],pe=(e,t)=>n=>{e.push(n),i||(i=!0,t&&4&u.t?ye($e):u.raf($e))},he=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){ie(e)}e.length=0},$e=()=>{he(ae),he(de),(i=ae.length>0)&&u.raf($e)},ye=e=>a().then(e),be=pe(de,!0);var me="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function we(e,t,n){return e(n={path:t,exports:{},require:function(){return function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}export{S as H,me as a,te as b,we as c,F as d,U as g,v as h,a as p,oe as r}