const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[window.OC.filePath('notifications', '', 'js/NotificationsApp-CsLed1pE.chunk.mjs'),window.OC.filePath('notifications', '', 'js/_plugin-vue2_normalizer-DfQsHmr4.chunk.mjs'),window.OC.filePath('notifications', '', 'js/style-BNtK61kD.chunk.mjs'),window.OC.filePath('notifications', '', 'css/style-BRbSke62.chunk.css'),window.OC.filePath('notifications', '', 'css/_plugin-vue2_normalizer-BUuD2aDb.chunk.css'),window.OC.filePath('notifications', '', 'js/BrowserStorage-BfYVTpBj.chunk.mjs'),window.OC.filePath('notifications', '', 'css/BrowserStorage-CMaes2Bv.chunk.css'),window.OC.filePath('notifications', '', 'css/NotificationsApp-qgLyaY73.chunk.css')])))=>i.map(i=>d[i]);
/*! third party licenses: js/vendor.LICENSE.txt */
import{V as p}from"./style-BNtK61kD.chunk.mjs";const E="modulepreload",v=function(r,s){return r[0]==="."?new URL(r,s).href:r},h={},A=function(r,s,f){let m=Promise.resolve();if(s&&s.length>0){const c=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),u=i?.nonce||i?.getAttribute("nonce");m=Promise.all(s.map(e=>{if(e=v(e,f),e in h)return;h[e]=!0;const l=e.endsWith(".css"),y=l?'[rel="stylesheet"]':"";if(f)for(let a=c.length-1;a>=0;a--){const d=c[a];if(d.href===e&&(!l||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${y}`))return;const o=document.createElement("link");if(o.rel=l?"stylesheet":E,l||(o.as="script",o.crossOrigin=""),o.href=e,u&&o.setAttribute("nonce",u),document.head.appendChild(o),l)return new Promise((a,d)=>{o.addEventListener("load",a),o.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${e}`)))})}))}return m.then(()=>r()).catch(c=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=c,window.dispatchEvent(i),!i.defaultPrevented)throw c})};p.prototype.t=t,p.prototype.n=n,p.prototype.OC=OC,p.prototype.OCA=OCA,new p({el:"#notifications",name:"NotificationsApp",components:{NotificationsApp:()=>A(()=>import("./NotificationsApp-CsLed1pE.chunk.mjs"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)},render:r=>r("NotificationsApp")});
