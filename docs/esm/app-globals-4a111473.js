import { C as CSS, p as plt, w as win, a as promiseResolve, d as doc, N as NAMESPACE } from './index-f826a15c.js';

/*
 Stencil Client Patch v1.17.2 | MIT Licensed | https://stenciljs.com
 */
const noop = () => {
    /* noop*/
};
const IS_DENO_ENV = typeof Deno !== 'undefined';
const IS_NODE_ENV = !IS_DENO_ENV &&
    typeof global !== 'undefined' &&
    typeof require === 'function' &&
    !!global.process &&
    typeof __filename === 'string' &&
    (!global.origin || typeof global.origin !== 'string');
const IS_DENO_WINDOWS_ENV = IS_DENO_ENV && Deno.build.os === 'windows';
const getCurrentDirectory = IS_NODE_ENV ? process.cwd : IS_DENO_ENV ? Deno.cwd : () => '/';
const exit = IS_NODE_ENV ? process.exit : IS_DENO_ENV ? Deno.exit : noop;
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if ( !(CSS && CSS.supports && CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return import(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-e7d213b9.js').then(() => {
            if ((plt.$cssShim$ = win.__cssshim)) {
                return plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return promiseResolve();
};
const patchBrowser = () => {
    {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    // @ts-ignore
    const scriptElm =  Array.from(doc.querySelectorAll('script')).find(s => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute('data-stencil-namespace') === NAMESPACE)
        ;
    const opts =  scriptElm['data-opts'] || {} ;
    if ( 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if ( !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-d5f595cc.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], { type: 'application/javascript' }));
                mod = new Promise(resolve => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};

/* Sutton SignWriting TrueType Font Module v1.2.0 (https://github.com/sutton-signwriting/font-ttf), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
const t=function(t=""){if(!document.getElementById("SgnwFontCss")){const n=document.createElement("style");n.setAttribute("id","SgnwFontCss"),n.appendChild(document.createTextNode(`\n  @font-face {\n    font-family: "SuttonSignWritingLine";\n    src: \n      local('SuttonSignWritingLine'),\n      ${t?`url('${t}SuttonSignWritingLine.ttf') format('truetype'),`:""}\n      url('https://cdn.jsdelivr.net/npm/@sutton-signwriting/font-ttf@1.0.0/font/SuttonSignWritingLine.ttf') format('truetype');\n  }\n  @font-face {\n    font-family: "SuttonSignWritingFill";\n    src: \n      local('SuttonSignWritingFill'),\n      ${t?`url('${t}SuttonSignWritingFill.ttf') format('truetype'),`:""}\n      url('https://cdn.jsdelivr.net/npm/@sutton-signwriting/font-ttf@1.0.0/font/SuttonSignWritingFill.ttf') format('truetype');\n  }\n  @font-face {\n    font-family: "SuttonSignWritingOneD";\n    src: \n      local('SuttonSignWritingOneD'),\n      ${t?`url('${t}SuttonSignWritingOneD.ttf') format('truetype'),`:""}\n      url('https://cdn.jsdelivr.net/npm/@sutton-signwriting/font-ttf@1.0.0/font/SuttonSignWritingOneD.ttf') format('truetype');\n  }\n    `)),document.head.appendChild(n);}};let n={};const e=document.createElement("canvas");e.width=152,e.height=152;const i=e.getContext("2d"),o=function(t){if(t in n)return [...n[t]];i.clearRect(0,0,152,152),i.font="60px 'SuttonSignWritingLine'",i.fillText(String.fromCodePoint(t+983040),0,0);const e=i.getImageData(0,0,152,152).data;let o,r,l,f;t:for(o=151;o>=0;o--)for(r=0;r<152;r+=1)for(f=0;f<4;f+=1)if(l=4*o+4*r*152+f,e[l])break t;var c=o;t:for(r=151;r>=0;r--)for(o=0;o<c;o+=1)for(f=0;f<4;f+=1)if(l=4*o+4*r*152+f,e[l])break t;var u=r+1;if(c=Math.ceil(c/2),u=Math.ceil(u/2),14394==t&&(c=19),[10468,10480,10496,10512,10500,10532,10548,10862,10878,10894,11058,11074,11476,11488,11492,11504,11508,11520,10516,10910,10926,11042,11082,10942].includes(t)&&(c=20),31921==t&&(c=22),38460==t&&(c=23),[20164,20212].includes(t)&&(c=25),31894==t&&(c=28),46698==t&&(c=29),29606==t&&(c=30),44855==t&&(c=40),32667==t&&(c=50),[11088,11474,11490,11506].includes(t)&&(u=20),6285==t&&(u=21),40804==t&&(u=31),41475==t&&(u=36),0==c&&0==u){const n={9:[15,30],10:[21,30],11:[30,15],12:[30,21],13:[15,30],14:[21,30]};t in n&&(c=n[t][0],u=n[t][1]);}return 0!=c||0!=u?(n[t]=[c,u],[c,u]):void 0},l=function(t){return String.fromCodePoint(t+1048576)},c=function(t){let n=!1,e=!1;u(()=>{n=!0;}),a(()=>{e=!0;});const i=setInterval((function(){n&&e&&(clearInterval(i),t());}),100);},u=function(t){if(o(1))t();else {const n=setInterval((function(){o(1)&&(clearInterval(n),t());}),100);}},a=function(t){const n=function(){const t=document.createElement("canvas");t.width=15,t.height=30;const n=t.getContext("2d");n.font="30px 'SuttonSignWritingFill'",n.fillText(l(1),0,0);return !n.getImageData(0,0,15,30).data.every(t=>0===t)};if(n())t();else {const e=setInterval((function(){n()&&(clearInterval(e),t());}),100);}};

// @ts-ignore
window['sgnw'] = false;
const event = new Event('sgnw');
function appGlobalScript () {
    t();
    c(() => {
        window['sgnw'] = true;
        window.dispatchEvent(event);
    });
}

const globalScripts = appGlobalScript;

export { patchEsm as a, globalScripts as g, patchBrowser as p };
