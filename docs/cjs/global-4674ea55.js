'use strict';

/* Sutton SignWriting TrueType Font Module v1.2.0 (https://github.com/sutton-signwriting/font-ttf), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
const t=function(t=""){if(!document.getElementById("SgnwFontCss")){const n=document.createElement("style");n.setAttribute("id","SgnwFontCss"),n.appendChild(document.createTextNode(`\n  @font-face {\n    font-family: "SuttonSignWritingLine";\n    src: \n      local('SuttonSignWritingLine'),\n      ${t?`url('${t}SuttonSignWritingLine.ttf') format('truetype'),`:""}\n      url('https://cdn.jsdelivr.net/npm/@sutton-signwriting/font-ttf@1.0.0/font/SuttonSignWritingLine.ttf') format('truetype');\n  }\n  @font-face {\n    font-family: "SuttonSignWritingFill";\n    src: \n      local('SuttonSignWritingFill'),\n      ${t?`url('${t}SuttonSignWritingFill.ttf') format('truetype'),`:""}\n      url('https://cdn.jsdelivr.net/npm/@sutton-signwriting/font-ttf@1.0.0/font/SuttonSignWritingFill.ttf') format('truetype');\n  }\n  @font-face {\n    font-family: "SuttonSignWritingOneD";\n    src: \n      local('SuttonSignWritingOneD'),\n      ${t?`url('${t}SuttonSignWritingOneD.ttf') format('truetype'),`:""}\n      url('https://cdn.jsdelivr.net/npm/@sutton-signwriting/font-ttf@1.0.0/font/SuttonSignWritingOneD.ttf') format('truetype');\n  }\n    `)),document.head.appendChild(n);}};let n={};const e=document.createElement("canvas");e.width=152,e.height=152;const i=e.getContext("2d"),o=function(t){if(t in n)return [...n[t]];i.clearRect(0,0,152,152),i.font="60px 'SuttonSignWritingLine'",i.fillText(String.fromCodePoint(t+983040),0,0);const e=i.getImageData(0,0,152,152).data;let o,r,l,f;t:for(o=151;o>=0;o--)for(r=0;r<152;r+=1)for(f=0;f<4;f+=1)if(l=4*o+4*r*152+f,e[l])break t;var c=o;t:for(r=151;r>=0;r--)for(o=0;o<c;o+=1)for(f=0;f<4;f+=1)if(l=4*o+4*r*152+f,e[l])break t;var u=r+1;if(c=Math.ceil(c/2),u=Math.ceil(u/2),14394==t&&(c=19),[10468,10480,10496,10512,10500,10532,10548,10862,10878,10894,11058,11074,11476,11488,11492,11504,11508,11520,10516,10910,10926,11042,11082,10942].includes(t)&&(c=20),31921==t&&(c=22),38460==t&&(c=23),[20164,20212].includes(t)&&(c=25),31894==t&&(c=28),46698==t&&(c=29),29606==t&&(c=30),44855==t&&(c=40),32667==t&&(c=50),[11088,11474,11490,11506].includes(t)&&(u=20),6285==t&&(u=21),40804==t&&(u=31),41475==t&&(u=36),0==c&&0==u){const n={9:[15,30],10:[21,30],11:[30,15],12:[30,21],13:[15,30],14:[21,30]};t in n&&(c=n[t][0],u=n[t][1]);}return 0!=c||0!=u?(n[t]=[c,u],[c,u]):void 0},l=function(t){return String.fromCodePoint(t+1048576)},c=function(t){let n=!1,e=!1;u(()=>{n=!0;}),a(()=>{e=!0;});const i=setInterval((function(){n&&e&&(clearInterval(i),t());}),100);},u=function(t){if(o(1))t();else {const n=setInterval((function(){o(1)&&(clearInterval(n),t());}),100);}},a=function(t){const n=function(){const t=document.createElement("canvas");t.width=15,t.height=30;const n=t.getContext("2d");n.font="30px 'SuttonSignWritingFill'",n.fillText(l(1),0,0);return !n.getImageData(0,0,15,30).data.every(t=>0===t)};if(n())t();else {const e=setInterval((function(){n()&&(clearInterval(e),t());}),100);}};

/* Sutton SignWriting Unicode 8 Module v1.1.2 (https://github.com/sutton-signwriting/unicode8), author: Steve Slevinski (https://SteveSlevinski.me), license: MIT */
const n$1=function(n=""){if(!document.getElementById("SgnwUnicode8FontCss")){const t=document.createElement("style");t.setAttribute("id","SgnwUnicode8FontCss"),t.appendChild(document.createTextNode(`\n    @font-face {\n      font-family: "NotoSansSignWriting";\n      src: \n        local('NotoSansSignWriting'),\n        local('Noto Sans SignWriting'),\n        local('Noto_Sans_SignWriting'),\n        local('Noto Sans SignWriting Regular'),\n        local('Noto_Sans_SignWriting_Regular'),\n        ${n?`url('${n}NotoSansSignWriting-Regular.otf') format('truetype'),`:""}\n        url('https://cdn.jsdelivr.net/gh/googlefonts/noto-fonts/unhinted/otf/NotoSansSignWriting/NotoSansSignWriting-Regular.otf') format('opentype');\n    }\n    `)),document.head.appendChild(t);}};

// @ts-ignore
window['sgnw'] = false;
const event = new Event('sgnw');
const rgb2hex = function (rgba) {
    return rgba.replace(/rgba?\((.+?)\)/ig, (_, values) => {
        let parts = values.split(',');
        if (parts.length == 4 && (parseInt(parts[3]) == 0)) {
            return 'transparent';
        }
        else {
            return parts.slice(0, 3)
                .map(str => parseInt(str, 10).toString(16).padStart(2, '0'))
                .join('');
        }
    });
};
const rgba2hex = function (rgba) {
    return rgba.replace(/rgba?\((.+?)\)/ig, (_, values) => {
        let parts = values.split(',');
        if (parts.length == 4 && (parseInt(parts[3]) < 1)) {
            return 'transparent';
        }
        else {
            return parts.slice(0, 3)
                .map(str => parseInt(str, 10).toString(16).padStart(2, '0'))
                .join('');
        }
    });
};
function appGlobalScript () {
    t();
    c(() => {
        window['sgnw'] = true;
        window.dispatchEvent(event);
    });
    n$1();
}

exports.appGlobalScript = appGlobalScript;
exports.rgb2hex = rgb2hex;
exports.rgba2hex = rgba2hex;
