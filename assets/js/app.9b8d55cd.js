(function(t){function e(e){for(var c,o,u=e[0],i=e[1],l=e[2],s=0,d=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],c=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(c=!1)}c&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var c={},o={app:0},r={app:0},a=[];function u(t){return i.p+"assets/js/"+({}[t]||t)+"."+{"chunk-2d0c8460":"9937a9d4","chunk-2d231006":"fc231d44","chunk-55ab58a8":"570c7867","chunk-6a541e5c":"a5478953","chunk-71f6e672":"b6e73912"}[t]+".js"}function i(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-55ab58a8":1,"chunk-6a541e5c":1,"chunk-71f6e672":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var c="assets/css/"+({}[t]||t)+"."+{"chunk-2d0c8460":"31d6cfe0","chunk-2d231006":"31d6cfe0","chunk-55ab58a8":"26f46495","chunk-6a541e5c":"96614a2b","chunk-71f6e672":"65efacd1"}[t]+".css",r=i.p+c,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===c||s===r))return e()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],s=l.getAttribute("data-href");if(s===c||s===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var c=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete o[t],f.parentNode.removeChild(f),n(a)},f.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){o[t]=0})));var c=r[t];if(0!==c)if(c)e.push(c[2]);else{var a=new Promise((function(e,n){c=r[t]=[e,n]}));e.push(c[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(t);var d=new Error;l=function(e){s.onerror=s.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var c=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+c+": "+o+")",d.name="ChunkLoadError",d.type=c,d.request=o,n[1](d)}r[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=c,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)i.d(n,c,function(e){return t[e]}.bind(null,c));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"063d":function(t,e,n){},"11d1":function(t,e,n){"use strict";n("3c69")},"1a0d":function(t,e,n){"use strict";var c=n("7a23"),o={class:"header__nav",id:"nav"},r=Object(c["g"])("Home"),a=Object(c["g"])(" | "),u=Object(c["g"])("Canvas"),i=Object(c["g"])(" | "),l=Object(c["g"])("Flutter"),s=Object(c["g"])(" | "),d=Object(c["g"])("About");function f(t,e,n,f,b,h){var m=Object(c["z"])("router-link");return Object(c["s"])(),Object(c["e"])("nav",o,[Object(c["h"])(m,{class:"header__link",to:"/"},{default:Object(c["F"])((function(){return[r]})),_:1}),a,Object(c["h"])(m,{class:"header__link",to:"/canvas"},{default:Object(c["F"])((function(){return[u]})),_:1}),i,Object(c["h"])(m,{class:"header__link",to:"/flutter"},{default:Object(c["F"])((function(){return[l]})),_:1}),s,Object(c["h"])(m,{class:"header__link",to:"/about"},{default:Object(c["F"])((function(){return[d]})),_:1})])}n("6672");var b={name:"Navi"},h=(n("11d1"),n("6b0d")),m=n.n(h);const j=m()(b,[["render",f],["__scopeId","data-v-355a89de"]]);e["a"]=j},"1f53":function(t,e,n){},"37a3":function(t,e,n){},"3c69":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7"),n("159b");var c=n("7a23");function o(t,e,n,o,r,a){var u=Object(c["z"])("Navi"),i=Object(c["z"])("router-view");return Object(c["s"])(),Object(c["e"])(c["a"],null,[Object(c["h"])(u),Object(c["h"])(i,{class:"content"})],64)}var r=function(t){return Object(c["v"])("data-v-42f23245"),t=t(),Object(c["t"])(),t},a={class:"commonBottom"},u=r((function(){return Object(c["f"])("div",{style:{width:"100%",height:"90%"}},null,-1)})),i=r((function(){return Object(c["f"])("p",null,"this is a blog bottom",-1)})),l=[u,i];function s(t,e,n,o,r,u){return Object(c["s"])(),Object(c["e"])("div",a,l)}var d={name:"CommonBottom"},f=(n("9785"),n("6b0d")),b=n.n(f);const h=b()(d,[["render",s],["__scopeId","data-v-42f23245"]]);var m=h,j=(n("6672"),n("1a0d")),p={components:{Navi:j["a"],CommonBottom:m}};n("9f4d");const O=b()(p,[["render",o],["__scopeId","data-v-952505ba"]]);var v=O,g=(n("3ca3"),n("ddb0"),n("6c02")),y=function(t){return Object(c["v"])("data-v-88787796"),t=t(),Object(c["t"])(),t},_={class:"home"},k=y((function(){return Object(c["f"])("h1",{class:"header__title",style:{margin:"0"}},[Object(c["f"])("a",{href:"/"},"yumez")],-1)})),w=y((function(){return Object(c["f"])("h2",{class:"header__subtitle"},"我们的征途是星辰大海",-1)})),F=[k,w];function C(t,e,n,o,r,a){var u=Object(c["z"])("home-list");return Object(c["s"])(),Object(c["e"])("div",_,[Object(c["f"])("header",{class:"header",style:Object(c["o"])({backgroundImage:"url("+r.bg+")"})},F,4),Object(c["h"])(u)])}var E=function(t){return Object(c["v"])("data-v-45436592"),t=t(),Object(c["t"])(),t},S={class:"list"},L={class:"list-item"},H={key:0},P={style:{color:"#FFFFFF"}},A=E((function(){return Object(c["f"])("p",null,null,-1)})),T={key:1},x={style:{color:"#FFFFFF"}},N={class:"list2"},I={class:"list-item2"},M=E((function(){return Object(c["f"])("p",null,null,-1)})),z=E((function(){return Object(c["f"])("p",null,null,-1)})),B=E((function(){return Object(c["f"])("p",null,null,-1)}));function D(t,e,n,o,r,a){return Object(c["s"])(),Object(c["e"])("div",null,[Object(c["f"])("ul",S,[(Object(c["s"])(!0),Object(c["e"])(c["a"],null,Object(c["y"])(r.list,(function(t,e){return Object(c["s"])(),Object(c["e"])("li",L,[e%2==0?(Object(c["s"])(),Object(c["e"])("div",H,[Object(c["f"])("div",P,Object(c["C"])(t),1),Object(c["f"])("h4",null," - "+Object(c["C"])(e),1),A])):(Object(c["s"])(),Object(c["e"])("div",T,[Object(c["f"])("div",x,Object(c["C"])(t),1),Object(c["f"])("ul",N,[(Object(c["s"])(!0),Object(c["e"])(c["a"],null,Object(c["y"])(r.list,(function(t,e){return Object(c["s"])(),Object(c["e"])("li",I,[Object(c["f"])("div",null,[Object(c["f"])("div",null,Object(c["C"])(t),1),Object(c["f"])("h4",null," - "+Object(c["C"])(e),1),M,z,B])])})),256))])]))])})),256)),Object(c["f"])("li",{style:Object(c["o"])({display:r.loading?"initial":"none",color:"red"})},"Loading......",4)])])}var q=n("2909"),J=(n("a434"),n("99af"),{name:"HomeList",data:function(){return{list:[],loading:!0,allLoaded:!1}},methods:{getData:function(){var t=this;this.loading=!0,this.fetch22(this.list.length+1).then((function(e){var n;(n=t.list).splice.apply(n,[t.list.length,0].concat(Object(q["a"])(e.data))),t.loading=!1,t.list.length===e.total&&(t.allLoaded=!0)}))},onScroll:function(t){if(!this.loading&&!this.allLoaded){var e=document.documentElement.scrollTop||document.body.scrollTop,n="CSS1Compat"==document.compatMode?document.documentElement.clientHeight:document.body.clientHeight,c=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);e+n>=c&&this.getData()}},fetch22:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;console.log("获取数据 传入: ",{from:t,size:e});var n=[],c=198;e=Math.min(e,c-t+1);for(var o=0;o<e;o++)n.push(":".concat(t+o));var r={data:n,total:c};return new Promise((function(t,e){setTimeout((function(){console.log("获取数据 返回: ",r),t(r)}),500)}))}},created:function(){this.getData(),window.addEventListener("scroll",this.onScroll)},destroyed:function(){window.removeEventListener("scroll",this.onScroll)}});n("8b91");const K=b()(J,[["render",D],["__scopeId","data-v-45436592"]]);var U=K,G={name:"Home",components:{Navi:j["a"],HomeList:U},data:function(){return{bg:n("7631")}}};n("8683");const Q=b()(G,[["render",C],["__scopeId","data-v-88787796"]]);var R=Q,V=[{path:"/",name:"Home",component:R},{path:"/about",name:"About",component:function(){return n.e("chunk-2d231006").then(n.bind(null,"ef4c"))}},{path:"/canvas",name:"Canvas",component:function(){return n.e("chunk-71f6e672").then(n.bind(null,"fe48"))},children:[{path:"/highlight",name:"HighLight",component:function(){return n.e("chunk-6a541e5c").then(n.bind(null,"891f"))}}]},{path:"/flutter",name:"Flutter",component:function(){return n.e("chunk-2d0c8460").then(n.bind(null,"53d0"))}},{path:"/:catchAll(.*)",name:"404",component:function(){return n.e("chunk-55ab58a8").then(n.bind(null,"658b"))}}],W=Object(g["a"])({history:Object(g["b"])(""),routes:V}),X=W,Y=n("5502"),Z=Object(Y["a"])({state:{},mutations:{},actions:{},modules:{}}),$=n("1487"),tt=n.n($);n("6470");Object(c["c"])(v).directive("highlight",(function(t){var e=t.querySelectorAll("pre code");e.forEach((function(t){tt.a.highlightElement(t)}))})).use(Z).use(X).mount("#app")},6672:function(t,e,n){},7631:function(t,e,n){t.exports=n.p+"assets/img/header.46b96b2b.jpg"},8683:function(t,e,n){"use strict";n("ae67")},"8b91":function(t,e,n){"use strict";n("37a3")},9785:function(t,e,n){"use strict";n("063d")},"9f4d":function(t,e,n){"use strict";n("1f53")},ae67:function(t,e,n){}});