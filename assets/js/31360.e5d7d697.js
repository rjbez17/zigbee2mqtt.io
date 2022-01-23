"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[31360],{22076:(e,i,t)=>{t.d(i,{Z:()=>c});var o=t(33935),n=t(50596);const s=()=>!0;function r(e){return"string"==typeof e&&""!==e&&"/"!==e&&"#/"!==e}function a(e){return!0===e.startsWith("#")&&(e=e.substr(1)),!1===e.startsWith("/")&&(e="/"+e),!0===e.endsWith("/")&&(e=e.substr(0,e.length-1)),"#"+e}const c={__history:[],add:n.ZT,remove:n.ZT,install({$q:e}){if(!0===this.__installed)return;const{cordova:i,capacitor:t}=o.Lp.is;if(!0!==i&&!0!==t)return;const n=e.config[!0===i?"cordova":"capacitor"];if(void 0!==n&&!1===n.backButton)return;if(!0===t&&(void 0===window.Capacitor||void 0===window.Capacitor.Plugins.App))return;this.add=e=>{void 0===e.condition&&(e.condition=s),this.__history.push(e)},this.remove=e=>{const i=this.__history.indexOf(e);i>=0&&this.__history.splice(i,1)};const c=function(e){if(!1===e.backButtonExit)return()=>!1;if("*"===e.backButtonExit)return s;const i=["#/"];return!0===Array.isArray(e.backButtonExit)&&i.push(...e.backButtonExit.filter(r).map(a)),()=>i.includes(window.location.hash)}(Object.assign({backButtonExit:!0},n)),d=()=>{if(this.__history.length){const e=this.__history[this.__history.length-1];!0===e.condition()&&(this.__history.pop(),e.handler())}else!0===c()?navigator.app.exitApp():window.history.back()};!0===i?document.addEventListener("deviceready",(()=>{document.addEventListener("backbutton",d,!1)})):window.Capacitor.Plugins.App.addListener("backButton",d)}}},55377:(e,i,t)=>{t.d(i,{Z:()=>r});var o=t(43807),n=t(33935);const s=(0,o.Z)({isActive:!1,mode:!1},{__media:void 0,set(e){s.mode=e,"auto"===e?(void 0===s.__media&&(s.__media=window.matchMedia("(prefers-color-scheme: dark)"),s.__updateMedia=()=>{s.set("auto")},s.__media.addListener(s.__updateMedia)),e=s.__media.matches):void 0!==s.__media&&(s.__media.removeListener(s.__updateMedia),s.__media=void 0),s.isActive=!0===e,document.body.classList.remove("body--"+(!0===e?"light":"dark")),document.body.classList.add("body--"+(!0===e?"dark":"light"))},toggle(){s.set(!1===s.isActive)},install({$q:e,onSSRHydrated:i,ssrContext:t}){const{dark:o}=e.config;if(e.dark=this,!0===this.__installed&&void 0===o)return;this.isActive=!0===o;const s=void 0!==o&&o;if(!0===n.uX.value){const e=e=>{this.__fromSSR=e},t=this.set;this.set=e,e(s),i.push((()=>{this.set=t,this.set(this.__fromSSR)}))}else this.set(s)}}),r=s},33935:(e,i,t)=>{t.d(i,{uX:()=>n,aG:()=>s,Lp:()=>p,ZP:()=>u});var o=t(2262);const n=(0,o.iH)(!1);let s,r=!1;const a="ontouchstart"in window||window.navigator.maxTouchPoints>0,c=navigator.userAgent||navigator.vendor||window.opera,d={has:{touch:!1,webStorage:!1},within:{iframe:!1}},p={userAgent:c,is:function(e){const i=e.toLowerCase(),t=function(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}(i),o=function(e,i){const t=/(edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(iemobile)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[5]||t[3]||t[1]||"",version:t[2]||t[4]||"0",versionNumber:t[4]||t[2]||"0",platform:i[0]||""}}(i,t),n={};o.browser&&(n[o.browser]=!0,n.version=o.version,n.versionNumber=parseInt(o.versionNumber,10)),o.platform&&(n[o.platform]=!0);const r=n.android||n.ios||n.bb||n.blackberry||n.ipad||n.iphone||n.ipod||n.kindle||n.playbook||n.silk||n["windows phone"];return!0===r||i.indexOf("mobile")>-1?(n.mobile=!0,n.edga||n.edgios?(n.edge=!0,o.browser="edge"):n.crios?(n.chrome=!0,o.browser="chrome"):n.fxios&&(n.firefox=!0,o.browser="firefox")):n.desktop=!0,(n.ipod||n.ipad||n.iphone)&&(n.ios=!0),n["windows phone"]&&(n.winphone=!0,delete n["windows phone"]),(n.chrome||n.opr||n.safari||n.vivaldi||!0===n.mobile&&!0!==n.ios&&!0!==r)&&(n.webkit=!0),(n.safari&&n.blackberry||n.bb)&&(o.browser="blackberry",n.blackberry=!0),n.safari&&n.playbook&&(o.browser="playbook",n.playbook=!0),n.opr&&(o.browser="opera",n.opera=!0),n.safari&&n.android&&(o.browser="android",n.android=!0),n.safari&&n.kindle&&(o.browser="kindle",n.kindle=!0),n.safari&&n.silk&&(o.browser="silk",n.silk=!0),n.vivaldi&&(o.browser="vivaldi",n.vivaldi=!0),n.name=o.browser,n.platform=o.platform,i.indexOf("electron")>-1?n.electron=!0:document.location.href.indexOf("-extension://")>-1?n.bex=!0:(void 0!==window.Capacitor?(n.capacitor=!0,n.nativeMobile=!0,n.nativeMobileWrapper="capacitor"):void 0===window._cordovaNative&&void 0===window.cordova||(n.cordova=!0,n.nativeMobile=!0,n.nativeMobileWrapper="cordova"),!0===a&&!0===n.mac&&(!0===n.desktop&&!0===n.safari||!0===n.nativeMobile&&!0!==n.android&&!0!==n.ios&&!0!==n.ipad)&&function(e){s={is:{...e}},delete e.mac,delete e.desktop;const i=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(e,{mobile:!0,ios:!0,platform:i,[i]:!0})}(n)),n}(c),has:{touch:a},within:{iframe:window.self!==window.top}},l={install(e){const{$q:i}=e;!0===n.value?(e.onSSRHydrated.push((()=>{n.value=!1,Object.assign(i.platform,p),s=void 0})),i.platform=(0,o.qj)(this)):i.platform=this}};{let e;Object.defineProperty(p.has,"webStorage",{get:()=>{if(void 0!==e)return e;try{if(window.localStorage)return e=!0,!0}catch(e){}return e=!1,!1}}),r=!0===p.is.ios&&-1===window.navigator.vendor.toLowerCase().indexOf("apple"),!0===n.value?Object.assign(l,p,s,d):Object.assign(l,p)}const u=l},98886:(e,i,t)=>{function o(e,i=250,t){let o;function n(){const n=arguments,s=()=>{o=void 0,!0!==t&&e.apply(this,n)};clearTimeout(o),!0===t&&void 0===o&&e.apply(this,n),o=setTimeout(s,i)}return n.cancel=()=>{clearTimeout(o)},n}t.d(i,{Z:()=>o})},50596:(e,i,t)=>{t.d(i,{rU:()=>o,ZT:()=>n,FK:()=>s,AZ:()=>r,sT:()=>a,X$:()=>c,NS:()=>d,M0:()=>p,ul:()=>l});const o={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(o,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch(e){}function n(){}function s(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function r(e){if(e.path)return e.path;if(e.composedPath)return e.composedPath();const i=[];let t=e.target;for(;t;){if(i.push(t),"HTML"===t.tagName)return i.push(document),i.push(window),i;t=t.parentElement}}function a(e){e.stopPropagation()}function c(e){!1!==e.cancelable&&e.preventDefault()}function d(e){!1!==e.cancelable&&e.preventDefault(),e.stopPropagation()}function p(e,i,t){const n=`__q_${i}_evt`;e[n]=void 0!==e[n]?e[n].concat(t):t,t.forEach((i=>{i[0].addEventListener(i[1],e[i[2]],o[i[3]])}))}function l(e,i){const t=`__q_${i}_evt`;void 0!==e[t]&&(e[t].forEach((i=>{i[0].removeEventListener(i[1],e[i[2]],o[i[3]])})),e[t]=void 0)}},43807:(e,i,t)=>{t.d(i,{Z:()=>n});var o=t(2262);const n=(e,i)=>{const t={},n=(0,o.qj)(e);return Object.keys(e).forEach((e=>{t[e]={get:()=>n[e],set:i=>{n[e]=i}}})),Object.defineProperties(i,t),i}},43627:(e,i,t)=>{t.d(i,{w6:()=>o,Uf:()=>n,tP:()=>s});const o={};let n=!1;function s(){n=!0}},34152:(e,i,t)=>{t.d(i,{ZK:()=>n,Wm:()=>s,So:()=>r});let o=!1;function n(e){o=!0===e.isComposing}function s(e){return!0===o||e!==Object(e)||!0===e.isComposing||!0===e.qKeyEvent}function r(e,i){return!0!==s(e)&&[].concat(i).includes(e.keyCode)}},87042:(e,i,t)=>{t.d(i,{Ng:()=>o,vh:()=>n});const o="_q_",n="_q_fo_"}}]);