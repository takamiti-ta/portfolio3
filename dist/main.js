!function(e){var t={};function o(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);o(1),o(8)},function(e,t,o){var i=o(2),n=o(3);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var a={insert:"head",singleton:!1};i(n,a);e.exports=n.locals||{}},function(e,t,o){"use strict";var i,n=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),r=[];function l(e){for(var t=-1,o=0;o<r.length;o++)if(r[o].identifier===e){t=o;break}return t}function c(e,t){for(var o={},i=[],n=0;n<e.length;n++){var a=e[n],c=t.base?a[0]+t.base:a[0],s=o[c]||0,d="".concat(c," ").concat(s);o[c]=s+1;var p=l(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(r[p].references++,r[p].updater(f)):r.push({identifier:d,updater:h(f,t),references:1}),i.push(d)}return i}function s(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var n=o.nc;n&&(i.nonce=n)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var d,p=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,o,i){var n=o?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=p(t,n);else{var a=document.createTextNode(n),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function m(e,t,o){var i=o.css,n=o.media,a=o.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),a&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var u=null,g=0;function h(e,t){var o,i,n;if(t.singleton){var a=g++;o=u||(u=s(t)),i=f.bind(null,o,a,!1),n=f.bind(null,o,a,!0)}else o=s(t),i=m.bind(null,o,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var o=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<o.length;i++){var n=l(o[i]);r[n].references--}for(var a=c(e,t),s=0;s<o.length;s++){var d=l(o[s]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}o=a}}}},function(e,t,o){var i=o(4),n=o(5),a=o(6),r=o(7);t=i(!1);var l=n(a),c=n(r);t.push([e.i,'*,*:after,*:before{box-sizing:border-box}html,body,div,span,object,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;outline:0;font-size:100%;font-weight:normal;vertical-align:baseline;background:transparent}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}nav,ul,li{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:\'\';content:none}a{text-decoration:none;color:initial;margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent}ins{background-color:#ff9;color:#000;text-decoration:none}mark{background-color:#ff9;color:#000;font-style:italic;font-weight:bold}del{text-decoration:line-through}abbr[title],dfn[title]{border-bottom:1px dotted;cursor:help}table{border-collapse:collapse;border-spacing:0}hr{display:block;height:1px;border:0;border-top:1px solid #cccccc;margin:1em 0;padding:0}.main-bg-color{background-color:#fafafa}html{font-size:62.5%}body{font-size:1.6em}.inner{padding:180px 5vw}.anchor{display:block;margin-top:-80px}.sp-mode{display:block}@media screen and (max-width: 375px){.sp-mode{display:none}}.scroll-top{font-size:5rem;background-color:rgba(0,0,0,0.3);width:75px;height:75px;border-radius:50%;position:fixed;right:50px;bottom:15%;line-height:75px;text-align:center;transition:.5s}@media screen and (max-width: 375px){.scroll-top{font-size:3rem;width:50px;height:50px;line-height:50px;right:20px;bottom:10%}}.scroll-top:hover{background-color:rgba(0,0,0,0.8)}.scroll-top .fa-angle-up{color:#eee}.drawer-icon{display:none}@media screen and (max-width: 375px){.drawer-icon{display:block;font-size:2.5rem;color:#fff;position:fixed;top:20px;right:20px;z-index:11}}.drawer-nav{width:100%;display:block;position:fixed;z-index:1;transform:translateY(-107px);background-color:#eeeeee;transition:all .5s ease-out}.drawer-nav.active{transform:translateY(80px);transition:all .5s ease-out}.drawer-nav-list{text-align:right;display:none}@media screen and (max-width: 375px){.drawer-nav-list{display:block}}.drawer-nav-list li{font-weight:500;padding:.2em .3em;font-size:2rem;font-family:"Avenir","Helvetica Neue","Helvetica","Arial","Hiragino Sans","ヒラギノ角ゴシック","Yu Gothic","メイリオ","Meiryo","ＭＳ Ｐゴシック","MS PGothic","Regular";letter-spacing:5px;border-bottom:1px solid #333}.section-title{font-size:3rem;font-family:"Avenir","Helvetica Neue","Helvetica","Arial","Hiragino Sans","ヒラギノ角ゴシック","Yu Gothic","メイリオ","Meiryo","ＭＳ Ｐゴシック","MS PGothic","Regular";font-weight:900;letter-spacing:5px;color:#333;position:relative;line-height:1.4;padding:0.25em 1em;display:inline-block;top:0;margin-bottom:20px}@media screen and (max-width: 375px){.section-title{margin-bottom:40px}}.section-title:before,.section-title:after{position:absolute;top:0;content:\'\';width:15px;height:100%;display:inline-block}.section-title:before{border-left:solid 2px #333;border-top:solid 2px #333;border-bottom:solid 2px #333;left:0}.section-title:after{content:\'\';border-top:solid 2px #333;border-right:solid 2px #333;border-bottom:solid 2px #333;right:0}.section-title-sub{font-size:3rem;font-weight:bold;font-family:"Avenir","Helvetica Neue","Helvetica","Arial","Hiragino Sans","ヒラギノ角ゴシック","Yu Gothic","メイリオ","Meiryo","ＭＳ Ｐゴシック","MS PGothic","Regular";color:#333;position:relative;line-height:1.4;padding:0.25em 1em;display:inline-block;top:0;letter-spacing:1.5px}@media screen and (max-width: 375px){.section-title-sub{margin-bottom:20px;font-size:2rem}}.section-title-sub:before{position:absolute;content:"";width:25px;height:25px;display:inline-block;border:1px solid #333;left:0;background-color:#333;top:12.5px}@media screen and (max-width: 375px){.section-title-sub:before{width:15px;height:15px;top:10px}}.btn{font-size:3rem;font-family:"Avenir","Helvetica Neue","Helvetica","Arial","Hiragino Sans","ヒラギノ角ゴシック","Yu Gothic","メイリオ","Meiryo","ＭＳ Ｐゴシック","MS PGothic","Regular";font-weight:bold;color:#fff;background:#00aaff;border-radius:5px;border:0;letter-spacing:1.2px;padding:.25em .5em;transition:.5s;cursor:pointer}.btn a{color:#fff}.btn:hover{background:#005eff}.marker{background:linear-gradient(transparent 60%, #ff0 60%);font-weight:600}.fixed-bg{height:50vh;background-attachment:fixed;background-size:cover;background-position:center;position:relative}.bg01{background-image:url('+l+")}.bg02{background-image:url("+c+')}.title-text-side{display:flex;justify-content:space-around;margin-bottom:50px}@media screen and (max-width: 375px){.title-text-side{display:block;text-align:center}}.top-view-svg a span{position:absolute;bottom:10%;left:50%;width:30px;height:30px;margin-left:-12px;border-left:2px solid #fff;border-bottom:2px solid #fff;transform:rotateZ(-45deg);animation:sdb 1.5s infinite}@-webkit-keyframes sdb{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes sdb{0%{transform:rotateY(0) rotateZ(-45deg) translate(0, 0);opacity:0}50%{opacity:1}100%{transform:rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px);opacity:0}}.header{width:100%;height:80px;background-color:#333;box-shadow:0 2px 2px rgba(0,0,0,0.5);display:none}@media screen and (max-width: 375px){.header{display:block;position:fixed;top:0;right:0;z-index:1}}.global-nav{position:absolute;width:100%;z-index:10;height:80px}@media screen and (max-width: 375px){.global-nav{display:none}}.global-nav__list{display:flex;justify-content:center;line-height:80px}.global-nav__list li{font-size:2.5rem;font-family:"Avenir","Helvetica Neue","Helvetica","Arial","Hiragino Sans","ヒラギノ角ゴシック","Yu Gothic","メイリオ","Meiryo","ＭＳ Ｐゴシック","MS PGothic","Regular";margin-right:24px;letter-spacing:5px;font-weight:600}.global-nav__list li:last-child{margin-right:0}.global-nav__list li a{color:#ebebeb}.global-nav.clone-nav{position:fixed;top:-100px;left:0;transition:all 1s;background-color:#333;box-shadow:0 3px 2px rgba(0,0,0,0.3)}.global-nav.clone-nav.is-fixed-nav{top:0}.top-view-img img{width:100%;height:100vh}.fadeout{opacity:0;transition:2s ease-in-out}.fadein{opacity:1;transition:2s ease-in-out}.top-view-item{font-size:7rem;font-weight:500;letter-spacing:3px;font-family:\'Sriracha\', cursive;color:#fff;position:absolute;top:50%;left:50%;text-align:center;transform:translateX(-50%) translateY(-50%);text-shadow:9px 0px 1px black}@media screen and (max-width: 375px){.top-view-item{font-size:5rem}}.about-inner{display:flex;justify-content:center}@media screen and (max-width: 375px){.about-inner{flex-direction:column}}.about-inner-img{text-align:center}.about-img img{border-radius:50%;width:300px;height:300px;object-fit:cover;object-position:top}@media screen and (max-width: 375px){.about-img img{margin-bottom:20px}}.about-inner-profile{margin-left:10vw;text-align:center}@media screen and (max-width: 375px){.about-inner-profile{margin-left:0}}.about-profile{border:4px #333;padding:10px 2.5vw;border-style:double;margin-top:20px;text-align:left}.about-profile li{font-size:2rem;font-family:"Avenir","Helvetica Neue","Helvetica","Arial","Hiragino Sans","ヒラギノ角ゴシック","Yu Gothic","メイリオ","Meiryo","ＭＳ Ｐゴシック","MS PGothic","Regular";color:#333;line-height:2;letter-spacing:1.2px}@media screen and (max-width: 375px){.about-profile li{font-size:1.6rem;line-height:1.5}}.about-profile li:not(:last-child){border-bottom:1px solid #333}.portfolio-inner{display:flex;justify-content:center;flex-wrap:wrap}@media screen and (max-width: 375px){.portfolio-inner{display:block}}.portfolio-inner-item{border-radius:5px;border:1px solid #333;box-shadow:5px 5px 10px rgba(0,0,0,0.4);margin:0 3vw 50px 0;width:calc(33.33333333% - 3vw);position:relative}@media screen and (max-width: 375px){.portfolio-inner-item{width:100%}}.portfolio-inner-item:last-child{border-radius:0;box-shadow:initial;border:0}.portfolio-inner-item:nth-child(3n){margin-right:0}.portfolio-img{position:relative;padding:20px}.portfolio-img img{width:100%;height:200px;object-fit:cover;object-position:top}.portfolio-img-click{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);font-size:8rem;color:#fff;opacity:0;transition:opacity .5s}.portfolio-img:hover .portfolio-img-click{opacity:1}.portfolio-item-text{padding:20px;border-top:3px dotted #333}.portfolio-item-text li{font-size:1.6rem;font-family:"Avenir","Helvetica Neue","Helvetica","Arial","Hiragino Sans","ヒラギノ角ゴシック","Yu Gothic","メイリオ","Meiryo","ＭＳ Ｐゴシック","MS PGothic","Regular";letter-spacing:1.5px;line-height:2;color:#333}.portfolio-board-text{font-size:3rem;color:#333;font-family:"Avenir","Helvetica Neue","Helvetica","Arial","Hiragino Sans","ヒラギノ角ゴシック","Yu Gothic","メイリオ","Meiryo","ＭＳ Ｐゴシック","MS PGothic","Regular";letter-spacing:1.5px;font-weight:bold;line-height:1.5}.google-drive-btn{position:absolute;bottom:0;right:0}@media screen and (max-width: 375px){.google-drive-btn{bottom:initial}}.modal{position:fixed;display:flex;align-items:center;width:100vw;height:100vh;top:0;left:0;right:0;bottom:0;margin:auto;border:none;opacity:0;z-index:-1}.modal-cover{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5)}.modal-inner{text-align:center;width:80vw;max-width:100%;max-height:80vh;margin:0 auto;padding:15px;background:#fff;overflow-y:auto;z-index:1}@media screen and (max-width: 375px){.modal-content img{max-width:100%}}.portfolio-modal-btn{bottom:5px;left:50%;transform:translateX(-50%);position:fixed;padding:.25em 3em}@media screen and (max-width: 375px){.portfolio-modal-btn{padding:.25em 1.5em;bottom:10px}}.modal.is-open{animation:modal_open .5s ease forwards}.modal.is-close{animation:modal_close .5s ease forwards}@keyframes modal_open{0%{opacity:0}100%{opacity:1;z-index:10000}}@keyframes modal_close{0%{z-index:10000;opacity:1}100%{opacity:0}}.contact-form{display:flex;justify-content:center;position:relative}@media screen and (max-width: 375px){.contact-form{flex-direction:column}}.contact-btn{padding:.25em 3em;position:absolute;bottom:-20%}@media screen and (max-width: 375px){.contact-btn{bottom:-10%;right:11%}}.required-item{margin-right:10vw}@media screen and (max-width: 375px){.required-item{margin-right:0}}.required{background-color:#ff6464;color:#fff;padding:.3em .5em .2em .5em;border-radius:5em;font-size:1.5rem}label{display:inline-block;font-size:2rem;font-family:"Avenir","Helvetica Neue","Helvetica","Arial","Hiragino Sans","ヒラギノ角ゴシック","Yu Gothic","メイリオ","Meiryo","ＭＳ Ｐゴシック","MS PGothic","Regular";letter-spacing:1.5px;margin-bottom:10px}input{width:350px;height:5vh;font-size:1.5rem;font-family:"Avenir","Helvetica Neue","Helvetica","Arial","Hiragino Sans","ヒラギノ角ゴシック","Yu Gothic","メイリオ","Meiryo","ＭＳ Ｐゴシック","MS PGothic","Regular";letter-spacing:1.5px;padding:.2em 0 .2em .5em;display:block;margin-bottom:45px;border-style:solid;border-color:#e9e9e9;border-width:1px}@media screen and (max-width: 375px){input{width:100%}}textarea{width:500px;height:20vh;font-size:1.5rem;font-family:"Avenir","Helvetica Neue","Helvetica","Arial","Hiragino Sans","ヒラギノ角ゴシック","Yu Gothic","メイリオ","Meiryo","ＭＳ Ｐゴシック","MS PGothic","Regular";letter-spacing:1.5px;padding:.2em 0 .2em .5em;display:block;margin-bottom:100px;border-color:#e9e9e9;border-width:1px}@media screen and (max-width: 375px){textarea{width:100%}}::placeholder{color:#b0b0b0}#thxMessage{display:none;text-align:center;font-size:2rem;color:#333}.footer{width:100%;height:80px;background-color:#333;text-align:center}.footer-logo{font-size:1.6rem;font-family:"Avenir","Helvetica Neue","Helvetica","Arial","Hiragino Sans","ヒラギノ角ゴシック","Yu Gothic","メイリオ","Meiryo","ＭＳ Ｐゴシック","MS PGothic","Regular";letter-spacing:1.5px;color:#ebebeb;line-height:80px}\n',""]),e.exports=t},function(e,t,o){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=function(e,t){var o=e[1]||"",i=e[3];if(!i)return o;if(t&&"function"==typeof btoa){var n=(r=i,l=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),a=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[o].concat(a).concat([n]).join("\n")}var r,l,c;return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,i){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(i)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(n[r]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);i&&n[c[0]]||(o&&(c[2]?c[2]="".concat(o," and ").concat(c[2]):c[2]=o),t.push(c))}},t}},function(e,t,o){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,o){"use strict";o.r(t),t.default=o.p+"./images/scroll1.jpg"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"./images/scroll2.jpg"},function(e,t){var o=document.getElementById("drawer"),i=document.getElementById("drawer-nav"),n=document.getElementById("drawer-nav-list");o.addEventListener("click",(function(){i.classList.toggle("active")})),n.addEventListener("click",(function(){i.classList.toggle("active")}));const a=document.querySelectorAll('a[href^="#"]');for(let e=0;e<a.length;e++)a[e].addEventListener("click",t=>{t.preventDefault();const o=a[e].getBoundingClientRect().top-window.pageYOffset;window.scroll({top:o,behavior:"smooth"})});var r="pagetop",l=200,c=10,s=10;window.onload=function(){var e,t,o,i=document.getElementById(r);i.style.opacity=0,i.style.filter="alpha(opacity:0)",window.onscroll=function(){(document.body.scrollTop||document.documentElement.scrollTop)>=l?(clearTimeout(o),function e(o){o<1?(o+=.05,i.style.filter="alpha(opacity:"+100*o+")",i.style.opacity=o,t=setTimeout((function(){e(o)}),s)):(clearTimeout(t),i.style.filter="alpha(opacity:100)",i.style.opacity=1)}(parseFloat(i.style.opacity))):(clearTimeout(t),function e(n){n>=.05?(n-=.05,i.style.filter="alpha(opacity:"+100*n+")",i.style.opacity=n,o=setTimeout((function(){e(n)}),s)):(clearTimeout(t),i.style.filter="alpha(opacity:0)",i.style.opacity=0)}(parseFloat(i.style.opacity)))},i.onclick=function(){return function t(o,i){if(i>=1){var n=Math.floor(i-i/(2*c));window.scrollTo(o,n),e=setTimeout((function(){t(o,n)}),c)}else clearTimeout(e),window.scrollTo(o,0)}(document.body.scrollLeft||document.documentElement.scrollLeft,document.body.scrollTop||document.documentElement.scrollTop),!1}},myImage=new Array("../images/top-view1.jpg","../images/top-view2.jpg","../images/top-view3.jpg"),myNowCnt=-1,myflg=0,function e(){myNowCnt=myNowCnt<myImage.length-1?myNowCnt+1:0,myflg=0==myflg?1:0,0==myflg?(document.getElementById("idshow1").src=myImage[myNowCnt],document.getElementById("idshow1").className="fadein",document.getElementById("idshow2").className="fadeout"):(document.getElementById("idshow2").src=myImage[myNowCnt],document.getElementById("idshow1").className="fadeout",document.getElementById("idshow2").className="fadein"),setTimeout(e,2500)}(),document.addEventListener("click",e=>{const t=e.target;if(!t.classList.contains("js-smooth-scroll"))return;e.preventDefault();const o=t.hash;document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})});const d=document.querySelectorAll(".modal-open"),p=document.querySelectorAll(".modal"),f=document.querySelectorAll(".modal-cover");let m,u,g;for(let e=0;e<d.length;e++){m=function(e){g=e.currentTarget.closest(".modal"),g.classList.add("is-close"),setTimeout((function(e){g.classList.remove("is-open"),g.classList.remove("is-close")}),500)};const t=function(){f[e].addEventListener("click",(function(e){m(e)}),!1)},o=function(e){u=e.currentTarget.getAttribute("data-modal-open");for(var o=0;o<p.length;o++)if(p[o].getAttribute("data-modal")===u)return p[o].classList.add("is-open"),t(),!1};d[e].addEventListener("click",(function(e){o(e)}),!1)}const h=document.querySelectorAll(".btn-close");for(let e=0;e<h.length;e++)h[e].addEventListener("click",(function(e){return m(e),!1}),!1);!function(){var e=document.body,t=document.getElementById("js-global-nav");if(t){var o=t.cloneNode(!0);o.id="js-clone-nav",o.classList.add("clone-nav"),e.insertBefore(o,e.firstChild)}}(),window.addEventListener("scroll",(function(){var e=window.pageYOffset,t=document.getElementById("js-trigger"),o=document.getElementById("js-clone-nav");o&&t&&(e>e+t.getBoundingClientRect().top?o.classList.add("is-fixed-nav"):o.classList.remove("is-fixed-nav"))}))}]);