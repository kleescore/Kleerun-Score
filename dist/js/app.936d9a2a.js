(function(){"use strict";var n={8205:function(n,e,r){var t=r(9242),o=r(3396),i=r(7139);const a={style:{"margin-top":"100px"}};function u(n,e,r,t,u,c){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("h3",null,"Klee old Earnings: $"+(0,i.zw)(u.oldEarnings),1),(0,o._)("h3",a,"Klee new Earnings: $"+(0,i.zw)(u.newEarnings),1)])}var c={data(){return{newEarnings:0,oldEarnings:0}},mounted(){fetch("https://bot.klee.games/earnings?address=0xD75c0a6E3F6C5d09Ae5aDC0cC30c92078c892867").then((n=>n.json())).then((n=>{this.newEarnings=n.earnings.toFixed(2)})),fetch("https://klee.games/api/kleerewards/balanceof?address=0xD75c0a6E3F6C5d09Ae5aDC0cC30c92078c892867").then((n=>n.json())).then((n=>{this.oldEarnings=parseFloat(n.balance).toFixed(2)}))}},s=r(89);const f=(0,s.Z)(c,[["render",u]]);var l=f;(0,t.ri)(l).mount("#app")}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={exports:{}};return n[t](i,i.exports,r),i.exports}r.m=n,function(){var n=[];r.O=function(e,t,o,i){if(!t){var a=1/0;for(f=0;f<n.length;f++){t=n[f][0],o=n[f][1],i=n[f][2];for(var u=!0,c=0;c<t.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((function(n){return r.O[n](t[c])}))?t.splice(c--,1):(u=!1,i<a&&(a=i));if(u){n.splice(f--,1);var s=o();void 0!==s&&(e=s)}}return e}i=i||0;for(var f=n.length;f>0&&n[f-1][2]>i;f--)n[f]=n[f-1];n[f]=[t,o,i]}}(),function(){r.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(e,{a:e}),e}}(),function(){r.d=function(n,e){for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};r.O.j=function(e){return 0===n[e]};var e=function(e,t){var o,i,a=t[0],u=t[1],c=t[2],s=0;if(a.some((function(e){return 0!==n[e]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(c)var f=c(r)}for(e&&e(t);s<a.length;s++)i=a[s],r.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return r.O(f)},t=self["webpackChunkkleerunscore"]=self["webpackChunkkleerunscore"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(8205)}));t=r.O(t)})();
//# sourceMappingURL=app.936d9a2a.js.map