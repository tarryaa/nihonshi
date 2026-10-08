import{t as e}from"./rolldown-runtime.js";import{a as t,c as n,d as r,f as i,i as a,l as o,n as s,o as c,p as l,r as u,s as d,t as f,u as p}from"./signals.module.js";import{_ as m,a as h,c as g,d as _,f as v,g as y,h as b,i as x,l as S,m as C,n as w,o as T,p as E,r as D,s as O,t as k,u as A,v as j}from"./ops.js";import{$ as ee,A as M,B as N,C as te,D as ne,E as re,F as ie,G as P,H as F,I as ae,J as I,K as oe,L,M as se,N as ce,O as le,P as ue,Q as de,R as fe,S as pe,T as me,U as he,V as ge,W as _e,X as ve,Y as ye,Z as be,_ as xe,a as Se,c as Ce,d as we,f as Te,g as Ee,h as De,i as R,j as Oe,k as ke,l as Ae,m as je,n as Me,o as Ne,p as Pe,q as z,r as Fe,s as Ie,t as Le,u as B,v as Re,w as ze,x as Be,y as Ve,z as He}from"./notes.js";var Ue=Object.assign;function We(e,t){for(var n in e)if(n!=`__source`&&e[n]!==t[n])return!0;for(var r in t)if(r!=`__source`&&!(r in e))return!0;return!1}var Ge=/^(-|f[lo].*[^se]$|g.{5,}[^ps]$|z|o[pr]|(W.{5})?[lL]i.*(t|mp)$|an|(bo|s).{4}Im|sca|m.{6}[ds]|ta|c.*[st]$|wido|ini)/;function Ke(e,t){function n(e){var n=this.props.ref;return n!=e.ref&&n&&(typeof n==`function`?n(null):n.current=null),t?!t(this.props,e)||n!=e.ref:We(this.props,e)}function i(t){return this.shouldComponentUpdate=n,r(e,t)}return i.displayName=`Memo(`+(e.displayName||e.name)+`)`,i.prototype.isReactComponent=!0,i.type=e,i}var qe=Symbol.for(`react.element`),Je=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(?!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ye=/[A-Z0-9]/g,Xe=typeof document<`u`,Ze=function(e){return/fil|che|rad/.test(e)};p.prototype.isReactComponent=!0,[`componentWillMount`,`componentWillReceiveProps`,`componentWillUpdate`].forEach(function(e){Object.defineProperty(p.prototype,e,{configurable:!0,get:function(){return this[`UNSAFE_`+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Qe=i.event;i.event=function(e){return Qe&&(e=Qe(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var $e={configurable:!0,get:function(){return this.class}},et=i.vnode;i.vnode=function(e){if(typeof e.type==`string`)(function(e){var t=e.props,n=e.type,r={},i=n.indexOf(`-`)==-1;for(var a in t){var s=t[a];if(!(a==`value`&&`defaultValue`in t&&s==null||Xe&&a==`children`&&n==`noscript`||a==`class`||a==`className`)){if(a==`style`&&typeof s==`object`){var c=void 0;for(var l in s)typeof s[l]!=`number`||Ge.test(l)||(c||=s=Ue({},s),s[l]+=`px`)}else if(a==`defaultValue`&&`value`in t&&t.value==null)a=`value`;else if(a==`download`&&!0===s)s=``;else if(a==`translate`&&s===`no`)s=!1;else if(a[0]==`o`&&a[1]==`n`){var u=a.toLowerCase();u==`ondoubleclick`?a=`ondblclick`:u!=`onchange`||n!=`input`&&n!=`textarea`||Ze(t.type)?u==`onfocus`?a=`onfocusin`:u==`onblur`&&(a=`onfocusout`):u=a=`oninput`,u==`oninput`&&r[a=u]&&(a=`oninputCapture`)}else i&&Je.test(a)?a=a.replace(Ye,`-$&`).toLowerCase():s===null&&(s=void 0);r[a]=s}}n==`select`&&(r.multiple&&Array.isArray(r.value)&&(r.value=o(t.children).forEach(function(e){e.props.selected=r.value.indexOf(e.props.value)!=-1})),r.defaultValue!=null&&(r.value=o(t.children).forEach(function(e){e.props.selected=r.multiple?r.defaultValue.indexOf(e.props.value)!=-1:r.defaultValue==e.props.value}))),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,"className",$e)):t.className&&(r.class=r.className=t.className),e.props=r})(e);else if(typeof e.type==`function`&&(`ref`in e.props&&`prototype`in e.type&&e.type.prototype.render&&(e.ref=e.props.ref,delete e.props.ref),e.type.defaultProps)){var t=Ue({},e.props);for(var n in e.type.defaultProps)t[n]===void 0&&(t[n]=e.type.defaultProps[n]);e.props=t}e.ref&&!(`ref`in e.props)&&Object.defineProperty(e.props,"ref",{value:e.ref,configurable:!0,writable:!0}),e.$$typeof=qe,et&&et(e)};function tt(e,t,n){if(e){var r=e.__c&&e.__c.__H;r&&(r.__.forEach(function(e){e.__P!=null&&(typeof e.__c==`function`&&e.__c(),e.__c=e.__H=void 0)}),r.__h=e.__c.__h=[]),typeof e.type==`string`&&(e.__u|=8),(e=Ue({constructor:void 0},e)).__c!=null&&(e.__c.__P==n&&(e.__c.__P=t),e.__c.__g|=4,e.__c=null),e.__k=e.__k&&e.__k.map(function(e){return tt(e,t,n)})}return e}function nt(e,t,n){return e&&n&&(typeof e.type==`string`&&(e.__u|=1),e.__v=null,e.__k=e.__k&&e.__k.map(function(e){return nt(e,t,n)}),e.__c&&e.__c.__P==t&&(e.__e&&n.appendChild(e.__e),e.__c.__g|=4,e.__c.__P=n)),e}function rt(){function e(){this.__u=0,this.o=null,this.__b=null}return function(){var e=i.__e;i.__e=function(t,n,r,i){if(t.then){for(var a,o=n;o=o.__;)if((a=o.__c)&&a.__c)return r&&!r.__c&&(n.__c.__H=void 0),a.__c(t,n)}e(t,n,r,i)};var t=i.unmount;i.unmount=function(e){var n=e.__c;n&&n.__R&&n.__R(),t&&t(e)}}(),(e.prototype=new p).__c=function(e,t){var n=this,r=t.__c;this.o??=[],this.o.push(r);var i=!1,a=function(){!i&&n.__P&&(i=!0,r.__R=null,s())};r.__R=a;var o=r.__P;r.__P=null;var s=function(){if(!--n.__u){if(n.state.__a){var e=n.state.__a;n.__v.__k[0]=nt(e,e.__c.__P,e.__c.__O)}var t;for(n.setState({__a:n.__b=null});t=n.o.pop();)t.__P=o,t.forceUpdate()}};this.__u++||32&t.__u||this.setState({__a:this.__b=this.__v.__k[0]}),e.then(a,a)},e.prototype.componentWillUnmount=function(){this.o=[]},e.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement(`div`),i=this.__v.__k[0].__c;this.__v.__k[0]=tt(this.__b,n,i.__O=i.__P)}this.__b=null}return[r(l,null,t.__a?null:e.children),t.__a&&r(l,null,e.fallback)]},e}var it=rt();function V(e){var t,n,i,a=null;function o(o){if(t||(t=e()).then(function(e){e&&(a=e.default||e),i=!0},function(e){n=e,i=!0}),n)throw n;if(!i)throw t;return a?r(a,o):null}return o.displayName=`Lazy`,o}var at=`nhnote.ui`,ot={v:1,tab:`timeline`,focusYear:645,focusFrom:`init`,level:1,scrollX:0,weakFilter:0,redSheet:!1,weakPen:!1,openTermId:null,dismissed:{},notesFolder:null,openNoteId:null,weakSeg:`list`,groupFilter:null,openGroupId:null,openWeakMemoId:null,showArrows:!0,mapView:{lon:128,lat:36,z:9e3},mapLayers:{terr:!0,borders:!1,relief:!0,pins:!0,pinsByYear:!0}};function st(){try{let e=localStorage.getItem(at);if(e){let t=JSON.parse(e);if(t&&t.v===1)return{...ot,...t}}}catch{}return{...ot}}var H=s(st()),ct=null;function lt(){ct&&=(clearTimeout(ct),null);try{localStorage.setItem(at,JSON.stringify(H.value))}catch{}}f(()=>{H.value,ct&&clearTimeout(ct),ct=setTimeout(lt,250)});function U(e){H.value={...H.value,...e}}function ut(e,t){let n=Math.round(e);(n!==H.value.focusYear||t!==H.value.focusFrom)&&(H.value={...H.value,focusYear:n,focusFrom:t})}var dt=s(null),ft=0;function W(e,t={}){dt.value={year:e,...t,seq:++ft}}var pt=s(null),mt=s(null),ht=s(null),gt=s(!1),_t=null;function vt(){if(!(`serviceWorker`in navigator))return;let e=!1;navigator.serviceWorker.addEventListener(`controllerchange`,()=>{e||(e=!0,location.reload())}),navigator.serviceWorker.register(`./sw.js`,{scope:`./`}).then(e=>{let t=()=>{e.waiting&&navigator.serviceWorker.controller&&(_t=e.waiting,gt.value=!0)};t(),e.addEventListener(`updatefound`,()=>{let n=e.installing;n?.addEventListener(`statechange`,()=>{n.state===`installed`&&t()})}),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`&&e.update().catch(()=>{})}),setInterval(()=>e.update().catch(()=>{}),36e5)}).catch(()=>{})}async function yt(){await j.flush(),lt(),_t?_t.postMessage(`SKIP_WAITING`):location.reload()}function bt(){let e=/iPhone|iPad|iPod/.test(navigator.userAgent),t=navigator.standalone===!0||matchMedia(`(display-mode: standalone)`).matches;return e&&!t}var xt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-table"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M3 10h18" />
  <path d="M10 3v18" />
</svg>`,St=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-notebook"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
  <path d="M13 8l2 0" />
  <path d="M13 12l2 0" />
</svg>`,Ct=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-target"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
</svg>`,wt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-map-2"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" />
  <path d="M9 4v13" />
  <path d="M15 7v5.5" />
  <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" />
  <path d="M19 18v.01" />
</svg>`,Tt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-dots"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
</svg>`,Et=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-search"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M21 21l-6 -6" />
</svg>`,Dt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back-up"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 14l-4 -4l4 -4" />
  <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
</svg>`,Ot=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-forward-up"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M15 14l4 -4l-4 -4" />
  <path d="M19 10h-11a4 4 0 1 0 0 8h1" />
</svg>`,kt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-eye"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
</svg>`,At=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-eye-off"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
  <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
  <path d="M3 3l18 18" />
</svg>`,jt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-ballpen"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M14 6l7 7l-4 4" />
  <path d="M5.828 18.172a2.828 2.828 0 0 0 4 0l10.586 -10.586a2 2 0 0 0 0 -2.829l-1.171 -1.171a2 2 0 0 0 -2.829 0l-10.586 10.586a2.828 2.828 0 0 0 0 4" />
  <path d="M4 20l1.768 -1.768" />
</svg>`,Mt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-zoom-in"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M7 10l6 0" />
  <path d="M10 7l0 6" />
  <path d="M21 21l-6 -6" />
</svg>`,Nt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-plus"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 5l0 14" />
  <path d="M5 12l14 0" />
</svg>`,Pt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-x"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M18 6l-12 12" />
  <path d="M6 6l12 12" />
</svg>`,Ft=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-check"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M5 12l5 5l10 -10" />
</svg>`,It=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M9 12l2 2l4 -4" />
</svg>`,Lt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-sparkles"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6" />
</svg>`,Rt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-trash"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 7l16 0" />
  <path d="M10 11l0 6" />
  <path d="M14 11l0 6" />
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
</svg>`,zt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M18 9l3 3l-3 3" />
  <path d="M15 12h6" />
  <path d="M6 9l-3 3l3 3" />
  <path d="M3 12h6" />
  <path d="M9 18l3 3l3 -3" />
  <path d="M12 15v6" />
  <path d="M15 6l-3 -3l-3 3" />
  <path d="M12 3v6" />
</svg>`,Bt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 6l6 6l-6 6" />
</svg>`,Vt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M15 6l-6 6l6 6" />
</svg>`,Ht=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M6 15l6 -6l6 6" />
</svg>`,Ut=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M6 9l6 6l6 -6" />
</svg>`,Wt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-pin"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />
  <path d="M9 15l-4.5 4.5" />
  <path d="M14.5 4l5.5 5.5" />
</svg>`,Gt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-columns"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
  <path d="M12 4l0 16" />
</svg>`,Kt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-refresh"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
</svg>`,qt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-download"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
  <path d="M7 11l5 5l5 -5" />
  <path d="M12 4l0 12" />
</svg>`,Jt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-upload"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
  <path d="M7 9l5 -5l5 5" />
  <path d="M12 4l0 12" />
</svg>`,Yt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-database"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 6a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
  <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
  <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
</svg>`,Xt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-history"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 8l0 4l2 2" />
  <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
</svg>`,Zt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M12 9h.01" />
  <path d="M11 12h1v4h1" />
</svg>`,Qt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-settings"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065" />
  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
</svg>`,$t=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-alert-triangle"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 9v4" />
  <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" />
  <path d="M12 16h.01" />
</svg>`,en=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-file-import"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M5 13v-8a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5.5m-9.5 -2h7m-3 -3l3 3l-3 3" />
</svg>`,tn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-text"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
  <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" />
  <path d="M9 12h6" />
  <path d="M9 16h6" />
</svg>`,nn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-minus"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M5 12l14 0" />
</svg>`,rn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-moon"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008" />
</svg>`,an=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-sun"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
</svg>`,on=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-brightness-half"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 9a3 3 0 0 0 0 6v-6" />
  <path d="M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5l0 -3.5" />
</svg>`,sn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M4 6l8 0" />
  <path d="M16 6l4 0" />
  <path d="M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M4 12l2 0" />
  <path d="M10 12l10 0" />
  <path d="M15 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M4 18l11 0" />
  <path d="M19 18l1 0" />
</svg>`,cn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-filter"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227" />
</svg>`,ln=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-cloud-download"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" />
  <path d="M12 13l0 9" />
  <path d="M9 19l3 3l3 -3" />
</svg>`,un=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-home-share"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.247 0 .484 .045 .702 .127" />
  <path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5" />
  <path d="M16 22l5 -5" />
  <path d="M21 21.5v-4.5h-4.5" />
</svg>`,dn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-stack-2"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 4l-8 4l8 4l8 -4l-8 -4" />
  <path d="M4 12l8 4l8 -4" />
  <path d="M4 16l8 4l8 -4" />
</svg>`,fn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-folder"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
</svg>`,pn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-folder-plus"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
</svg>`,mn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-pinned"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 4v6l-2 4v2h10v-2l-2 -4v-6" />
  <path d="M12 16l0 5" />
  <path d="M8 4l8 0" />
</svg>`,hn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-tag"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3" />
</svg>`,gn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-clock"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M12 7v5l3 3" />
</svg>`,_n=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M5 12l14 0" />
  <path d="M13 18l6 -6" />
  <path d="M13 6l6 6" />
</svg>`,vn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M5 12l14 0" />
  <path d="M5 12l6 6" />
  <path d="M5 12l6 -6" />
</svg>`,yn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-grip-vertical"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M8 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M8 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M8 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M14 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M14 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M14 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
</svg>`,bn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-square"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
</svg>`,xn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-square-check"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M9 12l2 2l4 -4" />
</svg>`,Sn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-copy"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" />
  <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
</svg>`,Cn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-pencil"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M13.5 6.5l4 4" />
</svg>`,wn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-columns-3"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-16" />
  <path d="M9 3v18" />
  <path d="M15 3v18" />
</svg>`,Tn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-chart-line"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 19l16 0" />
  <path d="M4 15l4 -6l4 2l4 -5l4 4" />
</svg>`,En=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-chart-bar"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6" />
  <path d="M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -10" />
  <path d="M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -14" />
  <path d="M4 20h14" />
</svg>`,Dn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-sitemap"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 17a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2" />
  <path d="M15 17a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2" />
  <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2" />
  <path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" />
  <path d="M12 9l0 3" />
</svg>`,On=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-file-text"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
  <path d="M9 9l1 0" />
  <path d="M9 13l6 0" />
  <path d="M9 17l6 0" />
</svg>`,kn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-board"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
  <path d="M4 9h8" />
  <path d="M12 15h8" />
  <path d="M12 4v16" />
</svg>`,An=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-photo"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M15 8h.01" />
  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12" />
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
</svg>`,jn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-link"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 15l6 -6" />
  <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
  <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
</svg>`,Mn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-rows"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
  <path d="M4 12l16 0" />
</svg>`,Nn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0" />
</svg>`,Pn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin-plus"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  <path d="M12.794 21.322a2 2 0 0 1 -2.207 -.422l-4.244 -4.243a8 8 0 1 1 13.59 -4.616" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
</svg>`,Fn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-player-play"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M7 4v16l13 -8l-13 -8" />
</svg>`,In=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-player-pause"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M6 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12" />
  <path d="M14 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12" />
</svg>`,Ln=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-world"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M3.6 9h16.8" />
  <path d="M3.6 15h16.8" />
  <path d="M11.5 3a17 17 0 0 0 0 18" />
  <path d="M12.5 3a17 17 0 0 1 0 18" />
</svg>`,Rn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-left-right"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M21 17l-18 0" />
  <path d="M6 10l-3 -3l3 -3" />
  <path d="M3 7l18 0" />
  <path d="M18 20l3 -3l-3 -3" />
</svg>`,zn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-up-down"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M7 3l0 18" />
  <path d="M10 6l-3 -3l-3 3" />
  <path d="M20 18l-3 3l-3 -3" />
  <path d="M17 21l0 -18" />
</svg>`,Bn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
</svg>`,Vn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-bold"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6l0 -7" />
  <path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7" />
</svg>`,Hn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-align-left"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 6l16 0" />
  <path d="M4 12l10 0" />
  <path d="M4 18l14 0" />
</svg>`,Un=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-align-center"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 6l16 0" />
  <path d="M8 12l8 0" />
  <path d="M6 18l12 0" />
</svg>`,Wn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-align-right"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 6l16 0" />
  <path d="M10 12l10 0" />
  <path d="M6 18l14 0" />
</svg>`,Gn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-palette"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
  <path d="M7.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M15.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
</svg>`,Kn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-box"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
  <path d="M12 12l8 -4.5" />
  <path d="M12 12l0 9" />
  <path d="M12 12l-8 -4.5" />
</svg>`,qn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-frame"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 7l16 0" />
  <path d="M4 17l16 0" />
  <path d="M7 4l0 16" />
  <path d="M17 4l0 16" />
</svg>`,Jn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-line"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M16 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M7.5 16.5l9 -9" />
</svg>`,Yn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-zoom-out"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M7 10l6 0" />
  <path d="M21 21l-6 -6" />
</svg>`,Xn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-focus-2"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M11.5 12a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" fill="currentColor" />
  <path d="M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M12 3l0 2" />
  <path d="M3 12l2 0" />
  <path d="M12 19l0 2" />
  <path d="M19 12l2 0" />
</svg>`,Zn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-table-plus"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
  <path d="M3 10h18" />
  <path d="M10 3v18" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
</svg>`,Qn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-row-insert-bottom"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M20 6v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1" />
  <path d="M12 15l0 4" />
  <path d="M14 17l-4 0" />
</svg>`,$n=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-column-insert-right"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" />
  <path d="M15 12l4 0" />
  <path d="M17 10l0 4" />
</svg>`,er=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-row-remove"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M20 6v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1" />
  <path d="M10 16l4 4" />
  <path d="M10 20l4 -4" />
</svg>`,tr=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-column-remove"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" />
  <path d="M16 10l4 4" />
  <path d="M16 14l4 -4" />
</svg>`,nr=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-join"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 7h5l3.5 5h9.5" />
  <path d="M3 17h5l3.495 -5" />
  <path d="M18 15l3 -3l-3 -3" />
</svg>`,rr=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-split"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M21 17h-8l-3.5 -5h-6.5" />
  <path d="M21 7h-8l-3.495 5" />
  <path d="M18 10l3 -3l-3 -3" />
  <path d="M18 20l3 -3l-3 -3" />
</svg>`,ir=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-note"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M13 20l7 -7" />
  <path d="M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7" />
</svg>`,ar=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-sticker"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M20 12l-2 .5a6 6 0 0 1 -6.5 -6.5l.5 -2l8 8" />
  <path d="M20 12a8 8 0 1 1 -8 -8" />
</svg>`,or=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-message-circle"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
</svg>`,sr=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-list-check"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
  <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
  <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
  <path d="M11 6l9 0" />
  <path d="M11 12l9 0" />
  <path d="M11 18l9 0" />
</svg>`,cr=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />
  <path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" />
  <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />
  <path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
  <path d="M5 3l-1 -1" />
  <path d="M4 7h-1" />
  <path d="M14 3l1 -1" />
  <path d="M15 6h1" />
</svg>`,lr=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-list"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
  <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" />
  <path d="M9 12l.01 0" />
  <path d="M13 12l2 0" />
  <path d="M9 16l.01 0" />
  <path d="M13 16l2 0" />
</svg>`,ur=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M5 12l14 0" />
  <path d="M15 16l4 -4" />
  <path d="M15 8l4 4" />
</svg>`,dr=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-link-off"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 15l3 -3m2 -2l1 -1" />
  <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
  <path d="M3 3l18 18" />
  <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
</svg>`,fr=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-text-size"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 7v-2h13v2" />
  <path d="M10 5v14" />
  <path d="M12 19h-4" />
  <path d="M15 13v-1h6v1" />
  <path d="M18 12v7" />
  <path d="M17 19h2" />
</svg>`,pr=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-checkbox"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 11l3 3l8 -8" />
  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
</svg>`,mr=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-circle"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
</svg>`,hr=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-dashed"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
  <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
  <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
  <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
  <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
  <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
  <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
  <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
</svg>`,gr=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-calendar"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" />
  <path d="M16 3v4" />
  <path d="M8 3v4" />
  <path d="M4 11h16" />
  <path d="M11 15h1" />
  <path d="M12 15v3" />
</svg>`,_r=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-shuffle"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M18 4l3 3l-3 3" />
  <path d="M18 20l3 -3l-3 -3" />
  <path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />
  <path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" />
</svg>`,vr=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-lock"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6" />
  <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
</svg>`,yr=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-lock-open"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -6" />
  <path d="M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M8 11v-5a4 4 0 0 1 8 0" />
</svg>`,br=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-external-link"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
  <path d="M11 13l9 -9" />
  <path d="M15 4h5v5" />
</svg>`,xr=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-target-arrow"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M12 7a5 5 0 1 0 5 5" />
  <path d="M13 3.055a9 9 0 1 0 7.941 7.945" />
  <path d="M15 6v3h3l3 -3h-3v-3l-3 3" />
  <path d="M15 9l-3 3" />
</svg>`,Sr=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-route"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M19 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4" />
  <path d="M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5" />
</svg>`,Cr=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-timeline-event"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M10 20a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M10 20h-6" />
  <path d="M14 20h6" />
  <path d="M12 15l-2 -2h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-3l-2 2" />
</svg>`,wr=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-eraser"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3" />
  <path d="M18 13.3l-6.3 -6.3" />
</svg>`,Tr=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-highlight"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 19h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M12.5 5.5l4 4" />
  <path d="M4.5 13.5l4 4" />
  <path d="M21 15v4h-8l4 -4l4 0" />
</svg>`,Er=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-text-color"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 15v-7a3 3 0 0 1 6 0v7" />
  <path d="M9 11h6" />
  <path d="M5 19h14" />
</svg>`,Dr=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-horizontal"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M7 8l-4 4l4 4" />
  <path d="M17 8l4 4l-4 4" />
  <path d="M3 12l18 0" />
</svg>`,Or=0;Array.isArray;function G(e,t,n,r,a,o){t||={};var s,c,l=t;if(`ref`in l&&typeof e!=`function`)for(c in l={},t)c==`ref`?s=t[c]:l[c]=t[c];var u={type:e,props:l,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Or,__i:-1,__u:0};return(a||o)&&(u.__source=a,u.__self=o),i.vnode&&i.vnode(u),u}var kr={table:xt,notebook:St,target:Ct,map2:wt,dots:Tt,search:Et,undo:Dt,redo:Ot,eye:kt,eyeOff:At,ballpen:jt,zoomIn:Mt,plus:Nt,x:Pt,check:Ft,circleCheck:It,sparkles:Lt,trash:Rt,arrowsMove:zt,chevronRight:Bt,chevronLeft:Vt,chevronUp:Ht,chevronDown:Ut,pin:Wt,columns:Gt,refresh:Kt,download:qt,upload:Jt,database:Yt,history:Xt,info:Zt,settings:Qt,alert:$t,fileImport:en,clipboard:tn,minus:nn,moon:rn,sun:an,auto:on,adjust:sn,filter:cn,cloudDown:ln,homeShare:un,stack:dn,folder:fn,folderPlus:pn,pinned:mn,tag:hn,clock:gn,arrowRight:_n,arrowLeft:vn,grip:yn,square:bn,squareCheck:xn,copy:Sn,pencil:Cn,cols3:wn,chartLine:Tn,chartBar:En,sitemap:Dn,fileText:On,board:kn,photo:An,link:jn,splitRows:Mn,mapPin:Nn,mapPinPlus:Pn,play:Fn,pause:In,world:Ln,leftRight:Rn,upDown:zn,dotsV:Bn,bold:Vn,alignLeft:Hn,alignCenter:Un,alignRight:Wn,palette:Gn,box:Kn,frame:qn,line:Jn,zoomOut:Yn,focus:Xn,tablePlus:Zn,rowAdd:Qn,colAdd:$n,rowRemove:er,colRemove:tr,join:nr,split:rr,note:ir,sticker:ar,message:or,listCheck:sr,handClick:cr,clipboardList:lr,arrowNarrow:ur,linkOff:dr,textSize:fr,checkbox:pr,circle:mr,circleDashed:hr,calendar:gr,shuffle:_r,lock:vr,lockOpen:yr,external:br,targetArrow:xr,route:Sr,timelineEvent:Cr,eraser:wr,highlight:Tr,textColor:Er,arrowsH:Dr},Ar=new Map,jr=e=>e.replace(/\s(class|width|height)="[^"]*"/g,``).replace(`stroke-width="2"`,`stroke-width="1.8"`).replace(`<svg`,`<svg aria-hidden="true" focusable="false"`);function K({name:e,size:t}){let n=Ar.get(e);return n||(n=jr(kr[e]),Ar.set(e,n)),G(`span`,{class:`ic`,style:t?{width:t+`px`,height:t+`px`}:void 0,dangerouslySetInnerHTML:{__html:n}})}var Mr=s([]),Nr=0;function q(e,t={}){if((t.tone??`normal`)===`normal`)return;let n={id:++Nr,text:e,action:t.action,tone:t.tone??`normal`,ms:t.ms??(t.action?4500:2600),key:t.key};Mr.value=[...(t.key?Mr.value.filter(e=>e.key!==t.key):Mr.value).slice(-2),n],setTimeout(()=>{Mr.value=Mr.value.filter(e=>e.id!==n.id)},n.ms)}function Pr(){return G(`div`,{class:`toasts`,"aria-live":`polite`,children:Mr.value.map(e=>G(`div`,{class:`toast ${e.tone===`error`?`err`:``}`,children:[G(`span`,{class:`t`,children:e.text}),e.action&&G(`button`,{class:`tbtn`,onClick:()=>{e.action.run(),Mr.value=Mr.value.filter(t=>t.id!==e.id)},children:e.action.label}),G(`button`,{class:`tclose`,"aria-label":`閉じる`,onClick:()=>{Mr.value=Mr.value.filter(t=>t.id!==e.id)},children:G(K,{name:`x`,size:16})})]},e.id))})}var Fr=s(null);function J(e){return new Promise(t=>{Fr.value={...e,resolve:t}})}function Ir(){let e=Fr.value;if(!e)return null;let t=t=>{Fr.value=null,e.resolve(t)};return G(`div`,{class:`dlg-back`,onClick:e=>{e.target===e.currentTarget&&t(!1)},children:G(`div`,{class:`dlg`,role:`dialog`,"aria-modal":`true`,children:[G(`h3`,{children:e.title}),e.body&&G(`div`,{class:`dlg-body`,children:e.body}),G(`div`,{class:`dlg-btns`,children:[G(`button`,{class:`btn`,onClick:()=>t(!1),children:e.cancel??`やめる`}),G(`button`,{class:`btn ${e.danger?`danger`:`primary`}`,onClick:()=>t(!0),children:e.ok})]})]})})}function Y(e){let[n,r]=d(e.full?`full`:`half`),[i,a]=d(0),[o,s]=d(e.open),[c,l]=d(!1),f=t(null);if(u(()=>{if(!e.open)return;let t=t=>{t.key===`Escape`&&e.onClose()};return addEventListener(`keydown`,t),()=>removeEventListener(`keydown`,t)},[e.open,e.onClose]),u(()=>{if(e.open)s(!0),l(!1),r(e.full?`full`:`half`);else if(o){l(!0);let e=setTimeout(()=>{s(!1),l(!1)},220);return()=>clearTimeout(e)}},[e.open]),!o)return null;let p=e=>{f.current={y:e.clientY,t:performance.now()},e.currentTarget.setPointerCapture(e.pointerId)},m=e=>{f.current&&a(e.clientY-f.current.y)},h=t=>{if(!f.current)return;let i=t.clientY-f.current.y,o=i/Math.max(1,performance.now()-f.current.t);f.current=null,a(0),i>120||o>.6?n===`full`&&i<260&&o<1.2?r(`half`):e.onClose():(i<-60||o<-.5)&&r(`full`)};return G(`div`,{class:`sheet-layer ${c?`closing`:``}`,children:[G(`div`,{class:`sheet-back`,onClick:e.onClose}),G(`div`,{class:`sheet ${n} ${e.class??``}`,style:{transform:i?`translateY(${Math.max(i,n===`full`?0:-200)}px)`:void 0,transition:i?`none`:void 0},role:`dialog`,"aria-modal":`true`,"aria-label":e.title,children:[G(`div`,{class:`sheet-grab`,onPointerDown:p,onPointerMove:m,onPointerUp:h,onPointerCancel:h,children:G(`span`,{})}),e.title&&G(`div`,{class:`sheet-title`,onPointerDown:p,onPointerMove:m,onPointerUp:h,children:[G(`h3`,{children:e.title}),G(`button`,{class:`iconbtn`,"aria-label":`閉じる`,onClick:e.onClose,children:G(K,{name:`x`})})]}),G(`div`,{class:`sheet-body`,children:e.children})]})]})}function Lr(){j.undo()}function Rr(){j.redo()}function zr(e,t){}var Br={10:`最重要`,9:`共通テスト頻出`,8:`共通テストで出る`,7:`二次・私大で頻出`,6:`二次・私大で出る`,5:`標準`,4:`難関私大で時々`,3:`難関私大でたまに`,2:`難関私大でまれ`,1:`細かい知識`};function Vr({items:e,getId:n,render:r,onReorder:i,class:a,gap:o=0}){let s=t(null),[c,l]=d(null),f=t({id:``,y0:0,from:0,tops:[],heights:[],timer:null,x0:0,active:!1,pid:0,el:null}),p=e.map(n),m=t(0);u(()=>{let e=s.current;if(!e)return;let t=e=>{f.current.active&&e.preventDefault()};e.addEventListener(`touchmove`,t,{passive:!1});let n=e=>{Date.now()-m.current<300&&(e.stopPropagation(),e.preventDefault())};return e.addEventListener(`click`,n,!0),()=>{e.removeEventListener(`touchmove`,t),e.removeEventListener(`click`,n,!0)}},[]);let h=(e,t)=>{if(t<0||t>=p.length||e===t)return;let n=[...p],[r]=n.splice(e,1);n.splice(t,0,r),i(n)},g=(e,t,n)=>{if(e.target.closest(`input, textarea, select, [contenteditable="true"], .no-drag`))return;let r=f.current;r.id=t,r.y0=e.clientY,r.x0=e.clientX,r.from=n,r.active=!1,r.pid=e.pointerId,r.el=e.currentTarget,r.timer&&clearTimeout(r.timer),r.timer=setTimeout(()=>{let e=[...s.current.querySelectorAll(`:scope > .sort-row`)];r.tops=e.map(e=>e.getBoundingClientRect().top),r.heights=e.map(e=>e.getBoundingClientRect().height),r.active=!0;try{r.el?.setPointerCapture(r.pid)}catch{}navigator.vibrate?.(12),l({id:t,dy:0,target:n})},400)},_=e=>{let t=f.current;if(!t.active){t.timer&&Math.hypot(e.clientX-t.x0,e.clientY-t.y0)>8&&(clearTimeout(t.timer),t.timer=null);return}let n=e.clientY-t.y0,r=t.tops[t.from]+t.heights[t.from]/2+n,i=t.from;for(let e=0;e<t.tops.length;e++){let n=t.tops[e]+t.heights[e]/2;if(e<t.from&&r<n){i=e;break}e>t.from&&r>n&&(i=e)}l({id:t.id,dy:n,target:i})},v=()=>{let e=f.current;e.timer&&=(clearTimeout(e.timer),null),e.active&&c&&(m.current=Date.now(),h(e.from,c.target)),e.active=!1,l(null)},y=e=>{if(!c)return 0;let t=f.current,n=(t.heights[t.from]??0)+o;return e>t.from&&e<=c.target?-n:e<t.from&&e>=c.target?n:0};return G(`div`,{class:`sortable ${a??``} ${c?`dragging`:``}`,ref:s,style:o?{display:`flex`,flexDirection:`column`,gap:o+`px`}:void 0,children:e.map((t,n)=>{let i=p[n],a=c?.id===i;return G(`div`,{class:`sort-row ${a?`lifted`:``}`,style:{transform:a?`translateY(${c.dy}px) scale(1.02)`:`translateY(${y(n)}px)`,transition:a?`none`:void 0},onPointerDown:e=>g(e,i,n),onPointerMove:_,onPointerUp:v,onPointerCancel:v,children:r(t,{index:n,count:e.length,dragging:a,up:()=>h(n,n-1),down:()=>h(n,n+1)})},i)})})}var Hr=()=>({text:``});function Ur(e){let t=Array.from({length:e.rows},(t,n)=>Array.from({length:e.cols},(t,r)=>({...e.cells[n]?.[r]??Hr()})));return{...e,cells:t,colW:e.colW?Array.from({length:e.cols},(t,n)=>e.colW[n]??120):void 0}}function Wr(e,t,n,r){let i=Ur(e);i.cells[t][n]={...i.cells[t][n],...r};for(let e of Object.keys(i.cells[t][n]))i.cells[t][n][e]===void 0&&delete i.cells[t][n][e];return i}function Gr(e,t){let n=Ur(e);for(let e=0;e<n.rows;e++)for(let r=0;r<n.cols;r++){let i=n.cells[e][r],a=i.rs??1;e<t&&e+a>t&&(i.rs=a+1)}return n.cells.splice(t,0,Array.from({length:n.cols},Hr)),n.rows+=1,n.header&&t<n.header&&(n.header+=1),n}function Kr(e,t){if(e.rows<=1)return e;let n=Ur(e);for(let e=0;e<n.rows;e++)for(let r=0;r<n.cols;r++){let i=n.cells[e][r],a=i.rs??1;e===t&&a>1&&t+1<n.rows?n.cells[t+1][r]={...i,rs:a-1}:e<t&&e+a>t&&(i.rs=a-1)}return n.cells.splice(t,1),--n.rows,n.header&&t<n.header&&--n.header,Zr(n)}function qr(e,t){let n=Ur(e);for(let e=0;e<n.rows;e++)for(let r=0;r<n.cols;r++){let i=n.cells[e][r],a=i.cs??1;r<t&&r+a>t&&(i.cs=a+1)}for(let e of n.cells)e.splice(t,0,Hr());return n.cols+=1,n.colW&&n.colW.splice(t,0,120),n.headerCols&&t<n.headerCols&&(n.headerCols+=1),n}function Jr(e,t){if(e.cols<=1)return e;let n=Ur(e);for(let e=0;e<n.rows;e++)for(let r=0;r<n.cols;r++){let i=n.cells[e][r],a=i.cs??1;r===t&&a>1&&t+1<n.cols?n.cells[e][t+1]={...i,cs:a-1}:r<t&&r+a>t&&(i.cs=a-1)}for(let e of n.cells)e.splice(t,1);return--n.cols,n.colW&&n.colW.splice(t,1),n.headerCols&&t<n.headerCols&&--n.headerCols,Zr(n)}function Yr(e,t,n,r){let i=Ur(e),a=i.cells[t][n],o=a.rs??1,s=a.cs??1,c=r===`right`?t:t+o,l=r===`right`?n+s:n;if(c>=i.rows||l>=i.cols)return null;let u=i.cells[c][l];if(r===`right`&&(u.rs??1)!==o||r===`down`&&(u.cs??1)!==s)return null;let d=[a.text,u.text].filter(e=>e.trim()).join(r===`right`?` `:`
`);return r===`right`?a.cs=s+(u.cs??1):a.rs=o+(u.rs??1),a.text=d,i.cells[c][l]=Hr(),i}function Xr(e,t,n){return Wr(e,t,n,{rs:void 0,cs:void 0})}function Zr(e){for(let t=0;t<e.rows;t++)for(let n=0;n<e.cols;n++){let r=e.cells[t][n];r.rs&&t+r.rs>e.rows&&(r.rs=e.rows-t),r.cs&&n+r.cs>e.cols&&(r.cs=e.cols-n),r.rs===1&&delete r.rs,r.cs===1&&delete r.cs}return e}function Qr(e){let t=e.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.startsWith(`|`)||e.includes(`|`)&&e.split(`|`).length>2);if(t.length<2)return null;let n=t.filter(e=>!/^\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(e)).map(e=>e.replace(/^\|/,``).replace(/\|$/,``).split(`|`).map(e=>e.trim())),r=Math.max(...n.map(e=>e.length)),i=t.findIndex(e=>/^\|?\s*:?-{2,}/.test(e));return{rows:n.length,cols:r,cells:n.map(e=>Array.from({length:r},(t,n)=>({text:e[n]??``}))),header:i>0?i:1}}function $r(e){let t=0;for(let n of e)t+=/[\u0000-ÿ｡-ﾟ]/.test(n)?.55:1;return t}var ei={[-2]:.72,[-1]:.86,1:1.22,2:1.5};function ti(e){let t=Ur(e);return Array.from({length:t.cols},(e,n)=>{let r=2;for(let e=0;e<t.rows;e++){let i=t.cells[e][n];if((i.cs??1)>1)continue;let a=[];if(i.runs?.length){let e={text:``,em:0};for(let t of i.runs)t.t.split(`
`).forEach((n,r)=>{r&&(a.push(e),e={text:``,em:0}),e.em+=$r(n)*(ei[t.s??0]??1)*(t.b?1.04:1)});a.push(e)}else for(let e of i.text.replace(/[〔〕]|\*\*/g,``).split(`
`))a.push({text:e,em:$r(e)*(i.bold?1.04:1)});let o=e<(t.header??0)||n<(t.headerCols??0);for(let e of a)r=Math.max(r,e.em*(o?1.05:1))}return Math.round(Math.max(64,Math.min(300,Math.min(16,r)*14.5+26)))})}var ni=[{key:`red`,name:`赤`,sheet:!0},{key:`orange`,name:`橙`,sheet:!0},{key:`pink`,name:`桃`,sheet:!0},{key:`brown`,name:`茶`},{key:`green`,name:`緑`},{key:`teal`,name:`青緑`},{key:`blue`,name:`青`},{key:`navy`,name:`紺`},{key:`purple`,name:`紫`},{key:`gray`,name:`灰`}],ri=[{key:`yellow`,name:`黄`},{key:`orange`,name:`橙`},{key:`pink`,name:`桃`},{key:`red`,name:`赤`},{key:`purple`,name:`紫`},{key:`blue`,name:`青`},{key:`sky`,name:`水色`},{key:`green`,name:`緑`},{key:`lime`,name:`黄緑`},{key:`gray`,name:`灰`}],ii=[{s:-2,name:`極小`,em:.72},{s:-1,name:`小`,em:.86},{s:0,name:`標準`,em:1},{s:1,name:`大`,em:1.22},{s:2,name:`特大`,em:1.5}],ai=new Set(ni.filter(e=>e.sheet).map(e=>e.key)),oi=e=>!!e.h||!!e.c&&ai.has(e.c);function si(e){let t={t:e.t};return e.b&&(t.b=!0),e.c&&(t.c=e.c),e.m&&(t.m=e.m),e.s&&(t.s=e.s),e.h&&(t.h=!0),t}var ci=e=>`${+!!e.b}|${e.c??``}|${e.m??``}|${e.s??0}|${+!!e.h}`;function li(e){let t=[];for(let n of e){if(!n.t)continue;let e=si(n),r=t[t.length-1];r&&ci(r)===ci(e)?r.t+=e.t:t.push(e)}return t}var ui=e=>e.reduce((e,t)=>e+t.t.length,0),di=e=>e.map(e=>e.t).join(``),fi=e=>e.every(e=>!e.b&&!e.c&&!e.m&&!e.s&&!e.h);function pi(e){let t=``,n=!1;for(let r of li(e)){let e=oi(r);e&&!n&&(t+=`〔`,n=!0),!e&&n&&(t+=`〕`,n=!1),t+=r.t}return n?t+`〕`:t}function mi(e,t=!1){let n=new Map,r=/〔[^〔〕]*〕/g,i;for(;i=r.exec(e);)n.set(i.index,`h`),n.set(i.index+i[0].length-1,`h`);let a=[],o=/\*\*/g;for(;i=o.exec(e);)n.has(i.index)||a.push(i.index);for(let e=0;e+1<a.length;e+=2)n.set(a[e],`b`),n.set(a[e+1],`b`);let s=[],c=!1,l=!1;for(let r=0;r<e.length;r++){let i=n.get(r);if(i===`h`){c=!c;continue}if(i===`b`){l=!l,r++;continue}s.push({t:e[r],b:l||t||void 0,h:c||void 0})}return li(s)}function hi(e){return e.some(e=>/〔[^〔〕]*〕/.test(e.t))?li(e.flatMap(e=>mi(e.t).map(t=>({...e,t:t.t,h:e.h||t.h})))):e}function gi(e,t){let n=[],r=0;for(let i of e){let e=r+i.t.length;t>r&&t<e?n.push({...i,t:i.t.slice(0,t-r)},{...i,t:i.t.slice(t-r)}):n.push({...i}),r=e}return n}function _i(e,t,n,r){let i=0;return li(gi(gi(e,t),n).map(e=>{let a=i;return i+=e.t.length,a>=t&&i<=n?r({...e}):e}))}function vi(e,t,n,r){let i=0,a=!1;for(let o of e){let e=i;if(i+=o.t.length,!(i<=t||e>=n||!o.t.replace(/\n/g,``))&&(a=!0,!r(o)))return!1}return a}function yi(e,t,n,r){let i=0,a=null;for(let o of e){let e=i;if(i+=o.t.length,!(i<=t||e>=n)){if(a===null)a=o[r];else if(a!==o[r])return}}return a}function bi(e,t,n,r){let i=0,a={};for(let n of e){let e=i+n.t.length;if(t>i&&t<=e||t===0&&i===0){let{t:e,...r}=n;if(a=r,t>i)break}i=e}let o=gi(gi(e,t),n),s=[],c=0,l=!1;for(let e of o){let i=c;c+=e.t.length,!l&&i>=t&&(s.push({...a,t:r}),l=!0),!(i>=t&&c<=n&&e.t)&&s.push(e)}return l||s.push({...a,t:r}),li(s)}var xi={table:`この写真の表を、日本史の学習アプリ「日本史ノート」に取り込める形に変換してください。

【出力の形】次のJSONだけを返してください（\`\`\`json で囲んでもかまいません）。
{
  "type": "table",
  "title": "表の題名（写真に無ければ内容から短く）",
  "header": 1,
  "rows": [
    ["見出し1", "見出し2", "見出し3"],
    ["中身", "**太字の語**を含む文", "中身⋯中身"]
  ],
  "merges": [ { "r": 0, "c": 0, "rs": 1, "cs": 2 } ],
  "colors": [ { "r": 1, "c": 2, "color": "yellow" } ]
}

【決まり】
・rows は上の行から順に、各行は左から右へ。どの行も同じマスの数にする
・結合されたマスは、左上のマスに文字を入れ、結合で隠れるマスは "" にして、merges に書く（r＝行、c＝列。0から数える。rs＝縦に何マス、cs＝横に何マス）
・header は見出しの行の数
・文字は写真のとおりに（旧字体・送り仮名・記号もそのまま）。読めない字は「？」にし、推測で補わない
・マスの中で改行されている所は \\n で表す
・【太字】太く印刷された文字（ゴシック体の重要語など）は、太字の部分だけを ** と ** で正確に囲む（例：「**墾田永年私財法**を出す」）。1つのマスに太字が2か所あれば2か所とも囲む。マス全体が太字ならマス全体を囲む。太字でない文字は囲まない。見出しの行の文字は囲まなくてよい
・【三点リーダー】写真の「⋯」（文字の高さの真ん中に並ぶ点）は、必ず「⋯」（U+22EF）のまま書く。「…」（U+2026）や「...」に置きかえない。「‥」も写真のとおりに
・赤い文字で印刷された部分は 〔 と 〕 で囲む（アプリの赤シートで隠せるようになります）。それ以外の文字の色・マーカーは区別しなくてよい
・背景に色の付いたマスは colors に（yellow / pink / green / blue / gray / red のうち近いもの）。無ければ空の配列 []
・JSON 以外の説明は書かない`,diagram:`この写真の図（流れ図・関係図・系図など）を、日本史の学習アプリ「日本史ノート」に取り込める形に変換してください。

【出力の形】次のJSONだけを返してください（\`\`\`json で囲んでもかまいません）。
{
  "type": "diagram",
  "title": "図の題名",
  "nodes": [
    { "id": "a", "text": "箱の中の文字", "col": 0, "row": 0, "w": 3, "h": 1, "kind": "box" }
  ],
  "edges": [
    { "from": "a", "to": "b", "label": "矢印に書かれた文字（無ければ空）", "style": "arrow" }
  ]
}

【決まり】
・写真全体を「横12マス × 縦12マス」の方眼だと考え、それぞれの箱が左から何マス目（col）・上から何マス目（row）にあるか、幅（w）・高さ（h）が何マス分かで答える（0から数える）。だいたいでよいので、元の配置になるべく近く
・kind は box（枠のある箱）/ text（枠の無い文字）/ frame（いくつかの箱を囲む大きな枠）
・矢印の向きは from → to。矢印の無い線は style を "line"、両向きは "double"
・系図は、親子を上下、兄弟を左右に並べる。婚姻は "line"
・文字は写真のとおりに。読めない字は「？」にし、推測で補わない
・太く印刷された文字は、その部分だけを ** と ** で囲む。赤い文字で印刷された部分は 〔 と 〕 で囲む（アプリの赤シートで隠せるようになります）
・写真の「⋯」（真ん中に並ぶ点）は「⋯」のまま書く。「…」や「...」に置きかえない
・JSON 以外の説明は書かない`,chart:`この写真のグラフを、日本史の学習アプリ「日本史ノート」に取り込める形に変換してください。

【出力の形】次のJSONだけを返してください（\`\`\`json で囲んでもかまいません）。
{
  "type": "chart",
  "title": "グラフの題名",
  "chartType": "line",
  "xLabel": "年",
  "yLabel": "縦軸の名前",
  "unit": "単位（例：万人、万石、千両）",
  "series": [
    { "name": "系列の名前", "points": [[1600, 1200], [1700, 2800]] }
  ],
  "notes": [ { "x": 1732, "text": "享保の飢饉" } ],
  "source": "写真に出典があれば"
}

【決まり】
・chartType は、折れ線グラフなら "line"、棒グラフなら "bar"
・points は [年, 値] の組。横軸が年でないとき（地域名など）は、左から 1, 2, 3 … の番号にし、その名前を notes に書く
・値は、数字が書いてあればその数字を、無ければ目盛りから読み取れる範囲で
・グラフに書き込まれた出来事は notes に
・写真の「⋯」（真ん中に並ぶ点）は「⋯」のまま書く。「…」や「...」に置きかえない
・JSON 以外の説明は書かない`},Si=e=>e.replace(/\u2026/g,`⋯`),X=e=>e==null?``:Si(String(e)).replace(/\r\n?/g,`
`);function Ci(e,t=!1){if(!t&&!/\*\*|〔/.test(e))return{text:e};let n=mi(e,t);return fi(n)?{text:pi(n)}:{text:pi(n),runs:n}}function wi(e){let t=[],n=Array.isArray(e.rows)?e.rows:[];if(!n.length)throw Error(`表の中身（rows）がありません`);let r=Math.max(...n.map(e=>Array.isArray(e)?e.length:0));n.some(e=>!Array.isArray(e)||e.length!==r)&&t.push(`行によってマスの数が違ったので、足りないマスを空にしました`);let i=n.map(e=>Array.from({length:r},(t,n)=>Ci(X(e?.[n]))));for(let n of e.merges??[])i[n.r]?.[n.c]?((n.rs??1)>1&&(i[n.r][n.c].rs=Math.min(n.rs,i.length-n.r)),(n.cs??1)>1&&(i[n.r][n.c].cs=Math.min(n.cs,r-n.c))):t.push(`結合 ${n.r}行${n.c}列 が表の外です`);for(let t of e.bold??[])if(i[t[0]]?.[t[1]]){let e=i[t[0]][t[1]];i[t[0]][t[1]]={...e,...Ci(e.runs?X(n[t[0]]?.[t[1]]):e.text,!0)}}for(let t of e.colors??[])i[t.r]?.[t.c]&&(i[t.r][t.c].color=[`yellow`,`pink`,`green`,`blue`,`gray`,`red`].includes(t.color)?t.color:`yellow`);let a={rows:i.length,cols:r,cells:i,header:typeof e.header==`number`?e.header:1};return a.colW=ti(a),{kind:`table`,title:X(e.title)||`取り込んだ表`,content:a,warnings:t}}function Ti(e){let t=[],n=e.nodes??[];if(!n.length)throw Error(`図の箱（nodes）がありません`);let r=new Map,i=n.map((e,t)=>{let n=T(`dn`);r.set(X(e.id??t),n);let i=Number(e.col??e.x??0),a=Number(e.row??e.y??0),o=Math.max(1,Number(e.w??3)),s=Math.max(1,Number(e.h??1));return{id:n,kind:[`box`,`text`,`frame`].includes(X(e.kind))?X(e.kind):`box`,x:Math.round(i*5),y:Math.round(a*3),w:Math.max(2,Math.round(o*5)-1),h:Math.max(1,Math.round(s*3)-1),text:X(e.text)}}),a=(e.edges??[]).flatMap(e=>{let n=r.get(X(e.from)),i=r.get(X(e.to));if(!n||!i)return t.push(`つなぐ先が見つからない矢印を飛ばしました（${X(e.from)} → ${X(e.to)}）`),[];let a=[`arrow`,`line`,`double`].includes(X(e.style))?X(e.style):`arrow`;return[{id:T(`de`),from:n,to:i,label:X(e.label)||void 0,style:a}]});return{kind:`diagram`,title:X(e.title)||`取り込んだ図`,content:{nodes:i,edges:a,grid:24},warnings:t}}function Ei(e){let t=[],n=e.series??[];if(!n.length)throw Error(`グラフのデータ（series）がありません`);let r=n.map((e,n)=>{let r=(e.points??[]).flatMap(e=>{let n=Array.isArray(e)?e:[e?.x,e?.y],r=Number(n[0]),i=Number(String(n[1]).replace(/,/g,``));return Number.isNaN(r)||Number.isNaN(i)?(t.push(`数字として読めない点を飛ばしました（${JSON.stringify(e)}）`),[]):[[r,i]]});return{name:X(e.name)||`系列${n+1}`,points:r.sort((e,t)=>e[0]-t[0])}}),i=(e.notes??[]).flatMap(e=>Number.isNaN(Number(e.x))?[]:[{x:Number(e.x),text:X(e.text)}]);return{kind:`chart`,title:X(e.title)||`取り込んだグラフ`,content:{chartType:e.chartType===`bar`?`bar`:`line`,xLabel:X(e.xLabel)||`年`,yLabel:X(e.yLabel),unit:X(e.unit),series:r,notes:i,source:X(e.source)||void 0},warnings:t}}function Di(e,t){let n=e.trim();if(!n)throw Error(`貼り付けた内容が空です`);let r=null;try{r=ee(n)}catch(e){let t=Qr(n);if(t)return t.cells=t.cells.map(e=>e.map(e=>({...e,...Ci(Si(e.text))}))),t.colW=ti(t),{kind:`table`,title:`取り込んだ表`,content:t,warnings:[`Markdownの表として読み取りました`]};throw e}Array.isArray(r)&&(r={type:t??`table`,rows:r});let i=X(r.type)||t||(r.rows?`table`:r.nodes?`diagram`:r.series?`chart`:``);if(i===`table`)return wi(r);if(i===`diagram`)return Ti(r);if(i===`chart`)return Ei(r);throw Error(`表・図・グラフのどれか分かりませんでした（"type" を確認してください）`)}function Oi(e){let t=e.cells.map((t,n)=>t.map((t,r)=>{if(!t.runs||n<(e.header??0)||r<(e.headerCols??0)||!t.runs.some(e=>e.b))return t;let i=t.runs.map(e=>e.b?{...e,h:!0}:e);return{...t,runs:i,text:pi(i)}}));return{...e,cells:t}}var ki=s(null);function Ai(e,t=null){ki.value={a:e,b:t,sync:!0,ratio:.5}}function ji(){ki.value=null}var Mi=s(!1);function Ni({target:e,onClose:t}){return G(Y,{open:!!e,onClose:t,title:e?.startsWith(`folder:`)?`フォルダ`:`ノート`,children:e&&(e.startsWith(`folder:`)?G(Pi,{id:e.slice(7),onClose:t}):G(Fi,{id:e,onClose:t}))})}function Pi({id:e,onClose:t}){let n=j.get(`folders`,e),[r,i]=d(n?.name??``),[a,o]=d(``);return n?G(`div`,{class:`form`,children:[G(`label`,{class:`fld`,children:[G(`span`,{children:`名前`}),G(`input`,{value:r,onInput:e=>i(e.target.value),onBlur:()=>void Ia(e,`rename`,r)})]}),G(`div`,{class:`add-row`,children:[G(`input`,{value:a,placeholder:`中に作るフォルダの名前`,onInput:e=>o(e.target.value)}),G(`button`,{class:`btn`,onClick:()=>{a.trim()&&(Ne(a,e),o(``))},children:[G(K,{name:`folderPlus`}),`作る`]})]}),G(`div`,{class:`action-list`,children:G(`button`,{class:`danger`,onClick:()=>{t(),Ia(e,`delete`)},children:[G(K,{name:`trash`}),`このフォルダを削除（中身は残す）`]})})]}):null}function Fi({id:e,onClose:t}){j.rev.value;let n=j.get(`notes`,e),[r,i]=d(n?.name??``),[a,o]=d(n?.tags.join(`、`)??``),[s,c]=d(n?.when?String(n.when.from):``),[l,f]=d(n?.when?.to==null?``:String(n.when.to));if(u(()=>{i(n?.name??``)},[n?.name]),!n)return null;let p=j.list(`folders`),m=e=>Te(e).map(e=>e.name).join(` › `),h=()=>{let t=[...new Set(a.split(/[、,，\s#]+/).map(e=>e.trim()).filter(Boolean))];t.join()!==n.tags.join()&&M(e,{tags:t},`タグを変更`)},g=()=>{let t=parseInt(s,10),r=parseInt(l,10);if(Number.isNaN(t)){n.when&&M(e,{when:void 0},`時期を消す`);return}M(e,{when:!Number.isNaN(r)&&r>t?{from:t,to:r}:{from:t}},`時期を設定`)},_=e===k,v=n.kind===`table`?n.content:null,y=v?JSON.stringify(v.cells).split(`…`).length-1:0;return G(`div`,{class:`form`,children:[G(`label`,{class:`fld`,children:[G(`span`,{children:`名前`}),G(`input`,{value:r,onInput:e=>i(e.target.value),onBlur:()=>{r.trim()&&r!==n.name&&M(e,{name:r.trim()},`名前を変更`)}})]}),G(`label`,{class:`fld`,children:[G(`span`,{children:`タグ（、で区切る）`}),G(`input`,{value:a,placeholder:`土地制度、外交`,onInput:e=>o(e.target.value),onBlur:h})]}),G(`div`,{class:`fld-row`,children:[G(`label`,{class:`fld`,children:[G(`span`,{children:`時期（年）`}),G(`input`,{inputMode:`numeric`,value:s,placeholder:`自動`,onInput:e=>c(e.target.value),onBlur:g})]}),G(`label`,{class:`fld`,children:[G(`span`,{children:`〜終わり`}),G(`input`,{inputMode:`numeric`,value:l,placeholder:``,onInput:e=>f(e.target.value),onBlur:g})]})]}),G(`p`,{class:`hint`,children:`時期を入れると「この時期のノート」に出て、比較のときに年でそろえられます（空なら中身から自動）。`}),!_&&G(`label`,{class:`fld`,children:[G(`span`,{children:`フォルダ`}),G(`select`,{value:n.folderId??``,onChange:t=>{let n=t.target.value;M(e,{folderId:n||void 0},`フォルダを移動`)},children:[G(`option`,{value:``,children:`（いちばん上）`}),p.map(e=>G(`option`,{value:e.id,children:m(e.id)},e.id))]})]}),G(`div`,{class:`action-list`,children:[G(`button`,{onClick:()=>M(e,{pinned:!n.pinned},n.pinned?`ピン留めを外す`:`ピン留め`),children:[G(K,{name:`pinned`}),n.pinned?`ピン留めを外す`:`ピン留めする`]}),!_&&n.kind!==`timeline`&&n.kind!==`board`&&G(`button`,{onClick:()=>{t(),Ba(e)},children:[G(K,{name:`timelineEvent`}),`年表に差し込む`]}),G(`button`,{onClick:()=>{t(),Ai(n.kind===`timeline`?{kind:`timeline`,id:e}:{kind:`note`,id:e})},children:[G(K,{name:`splitRows`}),`並べて見る`]}),G(`button`,{onClick:()=>{t(),Ha({kind:`note`,id:e})},children:[G(K,{name:`board`}),`比較ボードに追加`]}),G(`button`,{onClick:()=>{let n=we(e);n&&(t(),`${n.name}`)},children:[G(K,{name:`copy`}),`複製する`]}),y>0&&G(`button`,{onClick:()=>{if(!v)return;let t=v.cells.map(e=>e.map(e=>({...e,text:Si(e.text),...e.runs?{runs:e.runs.map(e=>({...e,t:Si(e.t)}))}:{}})));te(e,{...v,cells:t},`「…」を「⋯」に`),`${y}`},children:[G(K,{name:`refresh`}),`「…」を「⋯」に直す（`,y,`か所）`]}),!_&&G(`button`,{class:`danger`,onClick:()=>{le(e),t(),H.value.openNoteId===e&&U({openNoteId:null}),`${n.name}`},children:[G(K,{name:`trash`}),`ゴミ箱へ`]})]})]})}var Ii=[[`timeline`,`年表`,`table`,`自分専用の年表（例：室町の外交まとめ）`],[`table`,`表`,`cols3`,`マスの結合・色、1文字ずつの太字・文字色・マーカーができる表`],[`diagram`,`図`,`sitemap`,`箱・文字・矢印・囲み枠の図（流れ図・関係図・系図）`],[`chart`,`グラフ`,`chartLine`,`折れ線・棒グラフ（人口・貿易額・石高など）`],[`memo`,`メモ`,`fileText`,`自由に書くメモ（〔 〕で赤シート）`],[`board`,`比較ボード`,`board`,`比べたいものを集めておく場所`],[`folder`,`フォルダ`,`folder`,`ノートを分けて入れる`],[`import`,`画像から取り込む`,`photo`,`写真の表・図・グラフを、編集できる形に`]];function Li({mode:e,folderId:t,onClose:n,onMode:r}){let[i,a]=d(``);u(()=>{a(``)},[e]);let o=()=>{if(!e||e===`menu`||e===`import`)return;if(e===`folder`){Ne(i||`フォルダ`,t),n();return}let r=Ce(e,i||Le[e],{folderId:t});n(),Ma(r.id)},s=e&&e!==`menu`?Ii.find(t=>t[0]===e)?.[1]:``;return G(Y,{open:!!e,onClose:n,title:e===`menu`?`新しく作る`:`${s}を作る`,children:[e===`menu`&&G(`div`,{class:`create-grid`,children:Ii.map(([e,t,i,a])=>G(`button`,{class:`create-item`,onClick:()=>{if(e===`import`){n(),U({tab:`notes`}),Mi.value=!0;return}r(e)},children:[G(`span`,{class:`fi`,"data-kind":e,children:G(K,{name:i})}),G(`b`,{children:t}),G(`small`,{children:a})]},e))}),e&&e!==`menu`&&e!==`import`&&G(`div`,{class:`form`,children:[G(`label`,{class:`fld`,children:[G(`span`,{children:`名前`}),G(`input`,{value:i,placeholder:e===`folder`?`例：古代`:`例：${e===`timeline`?`室町の外交まとめ`:e===`table`?`江戸の三大改革`:e===`diagram`?`摂関政治の系図`:e===`chart`?`江戸時代の人口`:e===`board`?`土地制度の比較`:`覚え方メモ`}`,autoFocus:!0,onInput:e=>a(e.target.value),onKeyDown:e=>{e.key===`Enter`&&o()}})]}),G(`button`,{class:`btn primary wide`,onClick:o,children:[G(K,{name:e===`folder`?`folderPlus`:Oa[e]??`plus`}),`作る`]}),G(`button`,{class:`btn wide ghost`,onClick:()=>r(`menu`),children:`戻る`})]})]})}function Ri(e){let t=[];return e.b&&t.push(`rb`),e.c&&t.push(`fc-`+e.c),e.m&&t.push(`mk-`+e.m),e.s&&t.push(`fs`+e.s),e.h&&t.push(`rr-h`),t.join(` `)}function zi({text:e}){let t=e.split(`
`);return G(l,{children:t.map((e,t)=>t?[G(`br`,{},`b`+t),e]:e)})}function Bi({runs:e,sheet:t}){let[n,r]=d(new Set),i=[];for(let t of e){let e=oi(t),n=i[i.length-1];n&&n.hidden===e?n.runs.push(t):i.push({hidden:e,runs:[t]})}return G(`span`,{class:`rt rr`,children:i.map((e,i)=>{if(e.hidden&&t&&!n.has(i))return G(`button`,{class:`rt-mask`,"aria-label":`隠れた語（タップでめくる）`,onClick:e=>{e.stopPropagation(),r(new Set([...n,i]))}},i);let a=e.runs.map((e,t)=>G(`span`,{class:Ri(e),children:G(zi,{text:e.t})},t));return e.hidden&&t?G(`span`,{class:`rr-peeled`,onClick:e=>{e.stopPropagation();let t=new Set(n);t.delete(i),r(t)},children:a},i):a})})}function Vi(e){let t=[],n=/〔([^〔〕]*)〕/g,r=0,i;for(;i=n.exec(e);)i.index>r&&t.push({text:e.slice(r,i.index),hidden:!1}),t.push({text:i[1],hidden:!0}),r=i.index+i[0].length;return r<e.length&&t.push({text:e.slice(r),hidden:!1}),t}function Hi({text:e,sheet:t,class:n,placeholder:r}){let[i,a]=d(new Set);if(!e)return r?G(`span`,{class:`rt ${n??``} ph`,children:r}):null;if(e.includes(`**`))return G(`span`,{class:`rt ${n??``}`,children:G(Bi,{runs:mi(e),sheet:t})});let o=Vi(e);return G(`span`,{class:`rt ${n??``}`,children:o.map((e,n)=>e.hidden?t&&!i.has(n)?G(`button`,{class:`rt-mask`,"aria-label":`隠れた語（タップでめくる）`,onClick:e=>{e.stopPropagation(),a(new Set([...i,n]))}},n):G(`mark`,{class:`rt-hid ${t?`peeled`:``}`,onClick:t?e=>{e.stopPropagation();let t=new Set(i);t.delete(n),a(t)}:void 0,children:e.text},n):G(Ui,{text:e.text},n))})}function Ui({text:e}){let t=e.split(`
`);return G(l,{children:t.map((e,t)=>t?[G(`br`,{},`b`+t),e]:e)})}var Wi=new Set(ni.map(e=>e.key)),Gi=new Set(ri.map(e=>e.key)),Ki=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`);function qi(e){let t=e.map(e=>{let t={t:e.t,b:e.b,c:e.c&&Wi.has(e.c)?e.c:void 0,m:e.m&&Gi.has(e.m)?e.m:void 0,s:Number.isInteger(e.s)?e.s:void 0,h:e.h};return`<span data-r="1"${`${t.b?` data-b="1"`:``}${t.c?` data-c="${t.c}"`:``}${t.m?` data-m="${t.m}"`:``}${t.s?` data-s="${t.s}"`:``}${t.h?` data-h="1"`:``}`} class="${Ri(t)}">${Ki(t.t)}</span>`}).join(``);return di(e).endsWith(`
`)&&(t+=`<br data-x="1">`),t}function Ji(e,t){return e.dataset.r?{b:e.dataset.b===`1`||void 0,c:e.dataset.c||void 0,m:e.dataset.m||void 0,s:e.dataset.s?Number(e.dataset.s):void 0,h:e.dataset.h===`1`||void 0}:e.tagName===`B`||e.tagName===`STRONG`?{...t,b:!0}:t}function Yi(e){let t=[],n=0,r=!0,i=(e,i,a)=>{t.push({node:e,start:n,len:i.length,text:i,style:a}),n+=i.length,i&&(r=i.endsWith(`
`))},a=(t,o)=>{if(t.nodeType===Node.TEXT_NODE){i(t,t.nodeValue??``,o);return}if(t.nodeType!==Node.ELEMENT_NODE)return;let s=t;if(s.tagName===`BR`){s.dataset.x||i(s,`
`,o);return}s!==e&&(s.tagName===`DIV`||s.tagName===`P`)&&n>0&&!r&&i(s,`
`,o);let c=s===e?o:Ji(s,o);for(let e of Array.from(s.childNodes))a(e,c)};return a(e,{}),{segs:t,total:n}}var Xi=4;function Zi(e,t,n,r){if(n.nodeType===Node.TEXT_NODE){let i=e.find(e=>e.node===n);return i?i.start+Math.min(r,i.len):t}let i=n.childNodes,a=r<i.length?i[r]:null;for(let t of e)if(a){if(t.node===a||a.contains(t.node)||a.compareDocumentPosition(t.node)&Xi)return t.start}else if(t.node!==n&&!n.contains(t.node)&&n.compareDocumentPosition(t.node)&Xi)return t.start;return t}function Qi(e,t,n){for(let e of t)if(e.node.nodeType===Node.TEXT_NODE&&n>=e.start&&n<=e.start+e.len)return[e.node,n-e.start];return n<=0||!t.length?[e,0]:[e,e.childNodes.length]}function $i({value:e,onChange:n,onBlur:r,placeholder:i,whole:a=`マス全体`,tall:o}){let s=t(null),c=t(li(e)),l=t(null),f=t(!1),p=t(n);p.current=n;let[m,h]=d(null),[g,_]=d(()=>v(c.current,null));function v(e,t){let n=ui(e),r=!t||t.a===t.b,i=r?0:t.a,o=r?n:t.b,s=di(e).slice(i,o).replace(/\n/g,` `);return{a:i,b:o,whole:r,label:r?a:`「${s.length>10?s.slice(0,10)+`…`:s}」`,b_:vi(e,i,o,e=>!!e.b),c:yi(e,i,o,`c`),m:yi(e,i,o,`m`),s:yi(e,i,o,`s`),h:vi(e,i,o,e=>!!e.h)}}let y=e=>{s.current&&(s.current.innerHTML=qi(e))},b=()=>{let e=s.current,t=document.getSelection();if(!e||!t||!t.rangeCount||document.activeElement!==e)return null;let n=t.getRangeAt(0);if(!e.contains(n.startContainer)||!e.contains(n.endContainer))return null;let{segs:r,total:i}=Yi(e),a=Zi(r,i,n.startContainer,n.startOffset),o=Zi(r,i,n.endContainer,n.endOffset);return{a:Math.min(a,o),b:Math.max(a,o)}},x=(e,t)=>{let n=s.current,r=document.getSelection();if(!n||!r||document.activeElement!==n)return;let{segs:i}=Yi(n),[a,o]=Qi(n,i,e),[c,l]=Qi(n,i,t),u=document.createRange();u.setStart(a,o),u.setEnd(c,l),r.removeAllRanges(),r.addRange(u)};u(()=>{let e=s.current;y(c.current);let t=()=>{let e=b();e&&(l.current=e,_(v(c.current,e)))},n=e=>{let t=b()??l.current??{a:ui(c.current),b:ui(c.current)},n=bi(c.current,t.a,t.b,e);c.current=n,y(n),x(t.a+e.length,t.a+e.length),p.current(n,!1)},r=e=>{let t=e.inputType;t===`insertParagraph`||t===`insertLineBreak`?(e.preventDefault(),n(`
`)):t===`formatBold`?(e.preventDefault(),w(`b`)):(t.startsWith(`format`)||t===`insertFromDrop`)&&e.preventDefault()},i=e=>{e.preventDefault(),n((e.clipboardData?.getData(`text/plain`)??``).replace(/\r\n?/g,`
`))};return document.addEventListener(`selectionchange`,t),e.addEventListener(`beforeinput`,r),e.addEventListener(`paste`,i),()=>{document.removeEventListener(`selectionchange`,t),e.removeEventListener(`beforeinput`,r),e.removeEventListener(`paste`,i)}},[]);let S=()=>{let e=s.current;if(!e||f.current)return;let{segs:t}=Yi(e),n=li(t.map(e=>({...e.style,t:e.text})));c.current=n;let r=di(n).endsWith(`
`);if(e.querySelector(`div,p,b,strong,font,i,u,br:not([data-x])`)||r!==!!e.querySelector(`br[data-x]`)){let e=b();y(n),e&&x(e.a,e.b)}p.current(n,!1)},C=e=>{let t=c.current,n=b(),r=n??l.current,i=ui(t),a=!r||r.a===r.b,o=a?0:Math.min(r.a,i),s=a?i:Math.min(r.b,i);if(o===s)return;let u=e(t,o,s);c.current=u,y(u),n&&!a&&x(o,s),_(v(u,a?null:{a:o,b:s})),p.current(u,!0)};function w(e){C((t,n,r)=>{let i=vi(t,n,r,t=>!!t[e]);return _i(t,n,r,t=>({...t,[e]:!i||void 0}))})}let T=(e,t)=>C((n,r,i)=>_i(n,r,i,n=>({...n,[e]:t||void 0}))),E=()=>C((e,t,n)=>_i(e,t,n,e=>({t:e.t}))),D=e=>e.preventDefault();return G(`div`,{class:`rte-box ${o?`tall`:``}`,children:[G(`div`,{class:`rte-bar`,onPointerDown:D,onMouseDown:D,children:[G(`button`,{class:`fbtn ${g.b_?`on`:``}`,"aria-label":`太字`,onClick:()=>w(`b`),children:G(K,{name:`bold`,size:17})}),G(`button`,{class:`fbtn ${m===`c`?`open`:``}`,onClick:()=>h(m===`c`?null:`c`),children:[G(`span`,{class:`fc-a ${g.c?`fc-`+g.c:``}`,children:`A`}),`文字色`]}),G(`button`,{class:`fbtn ${m===`m`?`open`:``}`,onClick:()=>h(m===`m`?null:`m`),children:[G(`span`,{class:`mk-a ${g.m?`mk-`+g.m:``}`,children:`A`}),`マーカー`]}),G(`button`,{class:`fbtn ${m===`s`?`open`:``}`,onClick:()=>h(m===`s`?null:`s`),children:[G(K,{name:`textSize`,size:17}),`大きさ`]}),G(`button`,{class:`fbtn rs ${g.h?`on`:``}`,onClick:()=>w(`h`),children:[G(K,{name:`eyeOff`,size:16}),`赤シート`]}),G(`button`,{class:`fbtn`,"aria-label":`装飾を消す`,onClick:E,children:G(K,{name:`eraser`,size:17})})]}),m===`c`&&G(`div`,{class:`rte-pal`,onPointerDown:D,onMouseDown:D,children:[G(`button`,{class:`sw-t ${g.c?``:`on`}`,onClick:()=>T(`c`,void 0),children:[G(`span`,{class:`fc-def`,children:`A`}),`黒`]}),ni.map(e=>G(`button`,{class:`sw-t ${g.c===e.key?`on`:``}`,onClick:()=>T(`c`,e.key),children:[G(`span`,{class:`fc-${e.key}`,children:`A`}),e.name,e.sheet&&G(`i`,{class:`sheet-dot`,title:`赤シートで隠れる`})]},e.key)),G(`p`,{class:`rte-note`,children:[G(`i`,{class:`sheet-dot`}),`の色（赤・橙・桃）は、本物の赤シートと同じく赤シートで隠れます`]})]}),m===`m`&&G(`div`,{class:`rte-pal`,onPointerDown:D,onMouseDown:D,children:[G(`button`,{class:`sw-m ${g.m?``:`on`}`,onClick:()=>T(`m`,void 0),children:`なし`}),ri.map(e=>G(`button`,{class:`sw-m ${g.m===e.key?`on`:``}`,onClick:()=>T(`m`,e.key),children:G(`span`,{class:`mk-${e.key}`,children:e.name})},e.key))]}),m===`s`&&G(`div`,{class:`rte-pal`,onPointerDown:D,onMouseDown:D,children:ii.map(e=>G(`button`,{class:`sw-s ${(g.s??0)===e.s?`on`:``}`,onClick:()=>T(`s`,e.s||void 0),children:[G(`span`,{class:e.s?`fs`+e.s:``,children:`あ`}),e.name]},e.s))}),G(`div`,{class:`rte-target`,children:[g.label,`に付けます`,G(`small`,{children:`（文字を選ぶと、その部分だけに）`})]}),G(`div`,{ref:s,class:`rte`,contentEditable:!0,"data-ph":i,onInput:S,onCompositionStart:()=>{f.current=!0},onCompositionEnd:()=>{f.current=!1,S()},onBlur:()=>{S(),r?.()}})]})}var ea=e({imageRatio:()=>ra,saveImage:()=>na,useImageUrl:()=>ia});async function ta(e,t=1600){try{let n=await createImageBitmap(e),r=Math.min(1,t/Math.max(n.width,n.height));if(r>=1&&e.size<9e5)return e;let i=document.createElement(`canvas`);return i.width=Math.round(n.width*r),i.height=Math.round(n.height*r),i.getContext(`2d`).drawImage(n,0,0,i.width,i.height),await new Promise(t=>i.toBlob(n=>t(n??e),`image/jpeg`,.85))}catch{return e}}async function na(e,t=`画像を追加`){let n=await ta(e),r=Date.now(),i={id:T(`img`),createdAt:r,updatedAt:r,name:e.name,type:n.type,blob:n};return j.tx(t,e=>e.put(`images`,i)),i.id}async function ra(e){let t=await createImageBitmap(e).catch(()=>null);return t?t.height/t.width:.75}function ia(e){let t=c(()=>{let t=e?j.get(`images`,e):void 0;return t?.blob?URL.createObjectURL(t.blob):``},[e]);return u(()=>()=>{t&&URL.revokeObjectURL(t)},[t]),t}function aa(e,t,n=10){let r=t.filter(t=>t.x<e.x+e.w&&t.x+t.w>e.x&&t.y<e.y+e.h&&t.y+t.h>e.y),i=t=>t.x+t.w/2<e.x+e.w/2?`left`:`right`;return[`left`,`right`].flatMap(t=>{let a=r.filter(e=>i(e)===t).map(r=>({top:Math.max(0,r.y-e.y-n),bottom:Math.min(e.h,r.y+r.h-e.y+n),w:t===`left`?r.x+r.w-e.x+n:e.x+e.w-r.x+n})).filter(t=>e.w-t.w>=80).sort((e,t)=>e.top-t.top),o=0;return a.flatMap((n,r)=>{let i=Math.max(n.top,o),a=Math.max(0,n.bottom-i),s=i-o;return o=i+a,[G(`i`,{class:`cv-shim`,style:{float:t,clear:t,width:`0px`,height:s+`px`}},t+`s`+r),G(`i`,{class:`cv-shim`,style:{float:t,clear:t,width:Math.max(0,Math.min(e.w,n.w))+`px`,height:a+`px`}},t+`f`+r)]})})}function oa({id:e}){let t=ia(e);return t?G(`img`,{src:t,alt:``,draggable:!1}):G(`span`,{class:`pic-miss`,children:`画像が見つかりません`})}function sa({note:e,editing:t}){let n=e.pics??[],[r,i]=d(null);if(!n.length)return null;let a=(t,n)=>M(e.id,{pics:t},n),o=(e,n,r)=>{if(t){e.preventDefault(),e.stopPropagation();try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}i({id:n.id,mode:r,sx:e.clientX,sy:e.clientY,p0:n,cur:n})}},s=e=>{if(!r)return;let t=e.clientX-r.sx,n=e.clientY-r.sy,a=r.p0,o=a.h/a.w,s=r.mode===`move`?{...a,x:Math.max(0,Math.round(a.x+t)),y:Math.max(0,Math.round(a.y+n))}:{...a,w:Math.round(Math.max(40,a.w+t)),h:Math.round(Math.max(40,a.w+t)*o)};i({...r,cur:s})},c=()=>{if(!r)return;let e=r.cur,t=r.p0;(e.x!==t.x||e.y!==t.y||e.w!==t.w)&&a(n.map(t=>t.id===e.id?e:t),r.mode===`move`?`画像を動かす`:`画像の大きさ`),i(null)};return G(`div`,{class:`pic-layer ${t?`editing`:``}`,children:n.map(e=>{let i=r?.id===e.id?r.cur:e;return G(`div`,{class:`pic`,style:{left:i.x+`px`,top:i.y+`px`,width:i.w+`px`,height:i.h+`px`},onPointerDown:t=>o(t,e,`move`),onPointerMove:s,onPointerUp:c,onPointerCancel:c,children:[G(oa,{id:i.img}),t&&G(l,{children:[G(`button`,{class:`pic-x`,"aria-label":`画像を外す`,onPointerDown:e=>e.stopPropagation(),onClick:()=>a(n.filter(e=>e.id!==i.id),`画像を外す`),children:G(K,{name:`x`,size:14})}),G(`span`,{class:`pic-h`,"aria-label":`大きさを変える`,onPointerDown:t=>o(t,e,`size`)})]})]},i.id)})})}async function ca(e,t,n={x:16,y:16}){let r=await ra(t),i=await na(t,`ノートに画像を追加`),a=j.get(`notes`,e);if(!a)return;let o={id:T(`pic`),img:i,x:Math.round(n.x),y:Math.round(n.y),w:240,h:Math.round(240*r)};M(e,{pics:[...a.pics??[],o]},`画像を貼る`)}function la({note:e,editing:n,setEditing:r,scrollEl:i}){let a=t(null);return G(l,{children:[G(`button`,{class:`tool ${n?`pen-on`:``}`,onClick:()=>{!n&&!(e.pics??[]).length&&a.current?.click(),r(!n)},children:[G(K,{name:`photo`}),n?`画像を終わる`:`画像`]}),n&&G(`button`,{class:`tool`,onClick:()=>a.current?.click(),children:[G(K,{name:`plus`}),`画像を足す`]}),G(`input`,{ref:a,type:`file`,accept:`image/*`,hidden:!0,onChange:async t=>{let n=t.target.files?.[0];if(t.target.value=``,!n)return;let a=i?.();await ca(e.id,n,{x:16+(a?.scrollLeft??0),y:16+(a?.scrollTop??0)}),r(!0)}})]})}var ua=e=>li(e.runs??mi(e.text??``));function da({note:e}){let n=e.content??{text:``},[r,i]=d(!n.text),a=c(()=>ua(n),[r]),o=t(a),s=t(JSON.stringify(a)),l=()=>{let t=hi(li(o.current)),n=JSON.stringify(t);if(n===s.current)return;s.current=n;let r=j.get(`notes`,e.id)?.content??{text:``};te(e.id,{...r,text:pi(t),runs:fi(t)?void 0:t},`メモを編集`)};u(()=>()=>l(),[]);let f=H.value.redSheet,[p,m]=d(!1),h=t(null),[g,_]=d({w:320,h:1e5});u(()=>{let e=h.current;if(!e)return;let t=new ResizeObserver(()=>_({w:e.clientWidth-32,h:1e5}));return t.observe(e),()=>t.disconnect()},[r]);let v=aa({x:0,y:0,w:g.w,h:g.h},(e.pics??[]).map(e=>({x:e.x-16,y:e.y-14,w:e.w,h:e.h})));return G(`div`,{class:`memo-note`,children:[G(`div`,{class:`memo-tools`,children:[G(`button`,{class:`tool ${f?`sheet-on`:``}`,onClick:()=>U({redSheet:!f}),children:[G(K,{name:`eyeOff`}),`赤シート`]}),G(`button`,{class:`tool ${r?`pen-on`:``}`,onClick:()=>{r?l():(o.current=ua(n),s.current=JSON.stringify(o.current)),i(!r),m(!1)},children:[G(K,{name:r?`check`:`pencil`}),r?`書き終わる`:`書く`]}),!r&&G(la,{note:e,editing:p,setEditing:m,scrollEl:()=>h.current})]}),r?G(`div`,{class:`memo-edit`,children:G($i,{value:a,tall:!0,whole:`メモ全体`,placeholder:`自由に書けます。文字を選んで、太字・色・マーカー・大きさ・赤シートを付けられます`,onChange:(e,t)=>{o.current=e,t&&l()},onBlur:l})}):G(`div`,{class:`memo-read`,ref:h,onDblClick:()=>{p||i(!0)},children:[G(sa,{note:e,editing:p}),G(`div`,{class:`memo-flow`,children:[v,n.runs?.length?G(Bi,{runs:n.runs,sheet:f}):G(Hi,{text:n.text,sheet:f,placeholder:`（空のメモ）`})]})]})]})}function fa(){return j.rev.value,G(l,{children:[G(`button`,{class:`iconbtn`,"aria-label":`元に戻す`,title:j.canUndo.value?`元に戻す`:``,disabled:!j.canUndo.value,onClick:()=>j.undo(),children:G(K,{name:`undo`})}),G(`button`,{class:`iconbtn`,"aria-label":`やり直し`,disabled:!j.canRedo.value,onClick:()=>j.redo(),children:G(K,{name:`redo`})})]})}var pa=(function(){let e=typeof document<`u`&&document.createElement(`link`).relList;return e&&e.supports&&e.supports(`modulepreload`)?`modulepreload`:`preload`})(),ma=function(e,t){return new URL(e,t).href},ha={},ga=function(e){return e.pathname.endsWith(`.css`)},Z=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=ma(t,n);let r=s(t);if(r.href in ha)return;ha[r.href]=!0;let i=ga(r);if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let o=document.createElement(`link`);if(o.rel=i?`stylesheet`:pa,i||(o.as=`script`),o.crossOrigin=``,o.href=r.href,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),i)return new Promise((e,t)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},_a=V(()=>Z(()=>import(`./TableNote.js`).then(e=>({default:e.TableNote})),[],import.meta.url)),va=V(()=>Z(()=>import(`./DiagramNote.js`).then(e=>({default:e.DiagramNote})),[],import.meta.url)),ya=V(()=>Z(()=>import(`./ChartNote.js`).then(e=>({default:e.ChartNote})),[],import.meta.url)),ba=V(()=>Z(()=>import(`./BoardNote.js`).then(e=>({default:e.BoardNote})),[],import.meta.url));function xa({note:e}){let[t,n]=d(!1),r=()=>U({openNoteId:null,notesFolder:e.folderId??null});if(e.kind===`timeline`)return G(Ns,{noteId:e.id,onBack:r});let i=Te(e.folderId);return G(`div`,{class:`view note-view`,children:[G(`header`,{class:`appbar`,children:[G(`button`,{class:`iconbtn`,"aria-label":`戻る`,onClick:r,children:G(K,{name:`chevronLeft`})}),G(`div`,{class:`tt`,children:[G(`div`,{class:`crumb`,children:[`ノート`,i.map(e=>G(l,{children:[G(K,{name:`chevronRight`}),e.name]})),G(K,{name:`chevronRight`}),G(K,{name:Oa[e.kind],size:13}),Le[e.kind]]}),G(`h1`,{class:`title`,children:e.name})]}),G(fa,{}),G(`button`,{class:`iconbtn`,"aria-label":`ノートの操作`,onClick:()=>n(!0),children:G(K,{name:`dots`})})]}),G(it,{fallback:G(`div`,{class:`loading`,children:`読み込み中…`}),children:[e.kind===`memo`&&G(da,{note:e}),e.kind===`table`&&G(_a,{note:e}),e.kind===`diagram`&&G(va,{note:e}),e.kind===`chart`&&G(ya,{note:e}),e.kind===`board`&&G(ba,{note:e})]}),G(Ni,{target:t?e.id:null,onClose:()=>n(!1)})]})}var Sa=s(!1);function Ca(){Sa.value=!0}function wa(){let e=Sa.value,[n,r]=d(``),i=t(null);u(()=>{e&&(r(``),setTimeout(()=>i.current?.focus(),260))},[e]);let a=()=>{Sa.value=!1},o=c(()=>{let e=n.trim();if(!e)return null;let t=/^-?\d{1,5}$/.test(e)?parseInt(e,10):null;return{terms:j.list(`terms`).filter(n=>t==null?n.name.includes(e)||(n.yomi??``).includes(e)||n.desc.includes(e):n.when.from===t||n.when.to!=null&&n.when.from<=t&&t<=n.when.to).sort((e,t)=>t.importance-e.importance||e.when.from-t.when.from).slice(0,50),notes:j.list(`notes`).filter(t=>t.name.includes(e)||t.tags.some(t=>t.includes(e.replace(/^#/,``)))||t.kind===`memo`&&(t.content?.text??``).includes(e)),groups:j.list(`groups`).filter(t=>t.name.includes(e)||t.memo.includes(e)),memos:j.list(`weakMemos`).filter(t=>t.title.includes(e)||t.body.includes(e)),prios:j.list(`priorityMemos`).filter(t=>t.text.includes(e))}},[n,j.rev.value]),s=e=>j.get(`notes`,e)?.name??``,l=o?o.terms.length+o.notes.length+o.groups.length+o.memos.length+o.prios.length:0;return G(Y,{open:e,onClose:a,title:`検索`,full:!0,children:G(`div`,{class:`form`,children:[G(`div`,{class:`searchbox`,children:[G(K,{name:`search`}),G(`input`,{ref:i,value:n,placeholder:`用語・ノート・メモ・タグ・年（例：743）`,onInput:e=>r(e.target.value)})]}),o&&G(`div`,{class:`results`,children:[o.notes.length>0&&G(`div`,{class:`res-h`,children:`ノート`}),o.notes.map(e=>G(`button`,{class:`res`,onClick:()=>{a(),Ma(e.id)},children:[G(K,{name:Oa[e.kind]}),G(`span`,{class:`nm`,children:e.name}),G(`span`,{class:`sub`,children:Le[e.kind]})]},e.id)),o.terms.length>0&&G(`div`,{class:`res-h`,children:`用語`}),o.terms.map(e=>G(`button`,{class:`res`,onClick:()=>{a(),e.noteId===`n-main`?(U({tab:`timeline`}),W(e.when.from,{termId:e.id})):(Ma(e.noteId),setTimeout(()=>W(e.when.from,{termId:e.id}),60))},children:[G(`span`,{class:`w ${e.weakness?`wk`+e.weakness:``}`}),G(`span`,{class:`nm`,children:e.name}),G(`span`,{class:`sub`,children:[L(e.when.from),e.noteId===`n-main`?``:`・`+s(e.noteId)]})]},e.id)),o.groups.length>0&&G(`div`,{class:`res-h`,children:`グループ`}),o.groups.map(e=>G(`button`,{class:`res`,onClick:()=>{a(),U({openGroupId:e.id})},children:[G(K,{name:`stack`}),G(`span`,{class:`nm`,children:e.name})]},e.id)),o.memos.length>0&&G(`div`,{class:`res-h`,children:`苦手メモ`}),o.memos.map(e=>G(`button`,{class:`res`,onClick:()=>{a(),U({tab:`weak`,weakSeg:`memos`,openWeakMemoId:e.id})},children:[G(K,{name:`note`}),G(`span`,{class:`nm`,children:e.title||e.body.slice(0,30)})]},e.id)),o.prios.length>0&&G(`div`,{class:`res-h`,children:`優先順位メモ`}),o.prios.map(e=>G(`button`,{class:`res`,onClick:()=>{a(),U({tab:`weak`,weakSeg:`priority`})},children:[G(K,{name:`listCheck`}),G(`span`,{class:`nm`,children:e.text})]},e.id)),!l&&G(`p`,{class:`hint center`,children:`見つかりませんでした。`})]})]})})}var Ta=s(null);function Ea(e){let t=Ta.value;t&&R(t.notes,t.folders,e,`${t.notes.length+t.folders.length}件を貼り付け`,!0)}function Da({open:e,notes:t,folders:n,folderId:r,onClose:i,onDone:a}){let[o,s]=d(`menu`),[c,l]=d(``);u(()=>{e&&(s(`menu`),l(``))},[e]);let f=t.length+n.length,p=()=>{i(),a()},m=(e,t,n,r=!1)=>G(`button`,{class:r?`danger`:``,onClick:n,children:[G(K,{name:e}),t]}),h=[...new Set(t.flatMap(e=>j.get(`notes`,e)?.tags??[]))],g=e=>[...new Set(e.split(/[、,，\s#]+/).map(e=>e.trim()).filter(Boolean))];return G(Y,{open:e,onClose:i,title:o===`menu`?`${f}件をまとめて操作`:o===`move`?`移動先のフォルダ`:o===`tag`?`タグを付ける`:o===`untag`?`タグを外す`:o===`folder`?`フォルダにまとめる`:`1つのボードにまとめる`,children:[o===`menu`&&G(`div`,{class:`action-list`,children:[m(`arrowRight`,`移動する`,()=>s(`move`)),m(`copy`,`ここに複製する`,()=>{R(t,n,void 0),p()}),m(`clipboard`,`コピーする（あとで別の所に貼り付け）`,()=>{Ta.value={notes:t,folders:n},q(`コピーしました。貼り付けたいフォルダで［貼り付け］を押してください`,{tone:`warn`}),p()}),t.length>0&&m(`tag`,`タグを付ける`,()=>s(`tag`)),t.length>0&&h.length>0&&m(`tag`,`タグを外す`,()=>s(`untag`)),m(`folderPlus`,`新しいフォルダにまとめる`,()=>s(`folder`)),t.length>0&&m(`board`,`1つのボードにまとめる（自由に並べられる）`,()=>s(`board`)),m(`trash`,`ゴミ箱へ`,async()=>{await J({title:`${f}件をゴミ箱に入れますか？`,body:n.length?`フォルダは消えて、中のノートは1つ上の場所に移ります。ノートはゴミ箱から戻せます。`:`ゴミ箱から戻せます。`,ok:`ゴミ箱へ`,danger:!0})&&(ne(t,n),p())},!0)]}),o===`move`&&G(`div`,{class:`action-list`,children:[G(`button`,{onClick:()=>{Ve(t,n,null),p()},children:[G(K,{name:`folder`}),`（いちばん上）`]}),j.list(`folders`).filter(e=>!n.includes(e.id)).map(e=>G(`button`,{onClick:()=>{Ve(t,n,e.id),p()},children:[G(K,{name:`folder`}),Te(e.id).map(e=>e.name).join(` › `)]},e.id))]}),(o===`tag`||o===`folder`||o===`board`)&&G(`div`,{class:`form`,children:[G(`label`,{class:`fld`,children:[G(`span`,{children:o===`tag`?`タグ（、で区切る）`:o===`folder`?`フォルダの名前`:`ボードの名前`}),G(`input`,{value:c,autoFocus:!0,placeholder:o===`tag`?`土地制度、外交`:o===`folder`?`例：江戸の改革`:`例：三大改革の比較`,onInput:e=>l(e.target.value)})]}),G(`button`,{class:`btn primary wide`,onClick:()=>{if(o===`tag`){let e=g(c);if(!e.length)return;me(t,e,!0),p()}else if(o===`folder`)Pe(t,n,c,r),p();else{let e=Re(t,c,r);p(),U({tab:`notes`,openNoteId:e.id})}},children:[G(K,{name:`check`}),o===`tag`?`付ける`:`まとめる`]})]}),o===`untag`&&G(`div`,{class:`tags`,children:h.map(e=>G(`button`,{onClick:()=>{me(t,[e],!1),p()},children:[`#`,e,` ×`]},e))})]})}var Oa={timeline:`table`,table:`cols3`,diagram:`sitemap`,chart:`chartLine`,memo:`fileText`,board:`board`};function ka(e){if(e.when)return e.when;if(e.kind===`timeline`){let t=j.list(`terms`).filter(t=>t.noteId===e.id);return t.length?{from:Math.min(...t.map(e=>e.when.from)),to:Math.max(...t.map(e=>e.when.to??e.when.from))}:void 0}if(e.kind===`chart`){let t=(e.content?.series??[]).flatMap(e=>e.points.map(e=>e[0]));return t.length?{from:Math.min(...t),to:Math.max(...t)}:void 0}if(e.kind===`board`){let t=e.content,n=[...(t?.items??[]).filter(e=>e.kind===`note`).map(e=>e.id),...(t?.canvas??[]).filter(e=>e.kind===`note`&&e.ref).map(e=>e.ref)].map(e=>j.get(`notes`,e)).filter(t=>t&&t.id!==e.id).map(e=>ka(e)).filter(Boolean);return n.length?{from:Math.min(...n.map(e=>e.from)),to:Math.max(...n.map(e=>e.to??e.from))}:void 0}let t=j.list(`terms`).filter(t=>t.noteId===e.id);if(t.length)return{from:Math.min(...t.map(e=>e.when.from)),to:Math.max(...t.map(e=>e.when.to??e.when.from))}}var Aa=e=>e?`${L(e.from)}${e.to!=null&&e.to!==e.from?`〜`+L(e.to):``}`:``,ja=e=>{if(!e)return``;let t=Math.floor((Date.now()-e)/6e4);if(t<1)return`いま`;if(t<60)return`${t}分前`;let n=Math.floor(t/60);if(n<24)return`${n}時間前`;let r=Math.floor(n/24);return r<30?`${r}日前`:new Date(e).toLocaleDateString(`ja-JP`)};function Ma(e){if(re(e),e===`n-main`){U({tab:`timeline`});return}U({tab:`notes`,openNoteId:e})}function Na(){j.rev.value;let e=H.value,t=e.openNoteId?j.get(`notes`,e.openNoteId):void 0;return t&&!t.deletedAt?G(xa,{note:t},t.id):G(Fa,{folderId:e.notesFolder&&j.get(`folders`,e.notesFolder)&&!j.get(`folders`,e.notesFolder).deletedAt?e.notesFolder:null})}var Pa=new Map;function Fa({folderId:e}){j.rev.value;let n=t(null),r=e??`root`;a(()=>{let e=n.current;e&&(e.scrollTop=Pa.get(r)??0)},[r]);let[i,o]=d(null),[s,u]=d(null),[f,p]=d(null),[m,h]=d(!1),[g,_]=d([]),[v,y]=d([]),[b,x]=d(!1),S=()=>{h(!1),_([]),y([])},C=e=>_(g.includes(e)?g.filter(t=>t!==e):[...g,e]),w=e=>y(v.includes(e)?v.filter(t=>t!==e):[...v,e]),T=G(l,{children:[Ta.value&&!m&&G(`button`,{class:`iconbtn`,"aria-label":`貼り付け`,title:`貼り付け`,onClick:()=>Ea(e),children:G(K,{name:`clipboard`})}),G(`button`,{class:`iconbtn ${m?`on`:``}`,"aria-label":`選んでまとめて操作`,onClick:()=>m?S():h(!0),children:G(K,{name:`squareCheck`})})]}),E=j.list(`notes`),D=j.list(`folders`),O=E.filter(t=>(t.folderId??null)===e&&(!f||t.tags.includes(f))).sort(Fe),A=D.filter(t=>(t.parentId??null)===e).sort(Fe),ee=c(()=>[...E].filter(e=>e.lastOpenedAt).sort((e,t)=>(t.lastOpenedAt??0)-(e.lastOpenedAt??0)).slice(0,8),[j.rev.value]),M=E.filter(e=>e.pinned).sort(Fe),te=[...new Set(E.flatMap(e=>e.tags))].sort((e,t)=>e.localeCompare(t,`ja`)),ne=ae(Math.floor(oe()),N.eras),re=E.filter(e=>e.id!==k).filter(e=>{let t=ka(e);return t&&t.from<ne.to&&(t.to??t.from)>=ne.from}),ie=j.list(`groups`).sort(Fe),P=Te(e),F=e?j.get(`folders`,e):void 0,I=e=>G(`div`,{class:`nrow ${m&&g.includes(e.id)?`picked`:``}`,onClick:()=>m?C(e.id):Ma(e.id),children:[m&&G(`span`,{class:`chk ${g.includes(e.id)?`on`:``}`,children:G(K,{name:`check`})}),G(`span`,{class:`fi`,"data-kind":e.kind,children:G(K,{name:Oa[e.kind]})}),G(`span`,{class:`tx`,children:[G(`b`,{children:e.name}),G(`small`,{children:[Le[e.kind],Aa(ka(e))&&`・`+Aa(ka(e)),e.tags.length?`・`+e.tags.map(e=>`#`+e).join(` `):``]})]}),e.pinned&&G(K,{name:`pinned`,size:16}),!m&&G(`button`,{class:`iconbtn sm no-drag`,"aria-label":`メニュー`,onClick:t=>{t.stopPropagation(),o(e.id)},children:G(K,{name:`dots`})})]});return G(`div`,{class:`view notes`,children:[e?G(`header`,{class:`appbar`,children:[G(`button`,{class:`iconbtn`,"aria-label":`戻る`,onClick:()=>U({notesFolder:F?.parentId??null}),children:G(K,{name:`chevronLeft`})}),G(`div`,{class:`tt`,children:[G(`div`,{class:`crumb`,children:[`ノート`,P.slice(0,-1).map(e=>G(l,{children:[G(K,{name:`chevronRight`}),e.name]}))]}),G(`h1`,{class:`title`,children:F?.name})]}),G(fa,{}),T,G(`button`,{class:`iconbtn`,"aria-label":`フォルダの操作`,onClick:()=>o(`folder:`+e),children:G(K,{name:`dots`})})]}):G(`header`,{class:`bigbar row`,children:[G(`h1`,{class:`big-title`,children:`ノート`}),G(`span`,{class:`sp`}),G(fa,{}),T]}),G(`div`,{class:`scroll`,ref:n,onScroll:e=>Pa.set(r,e.currentTarget.scrollTop),children:[!e&&!m&&G(l,{children:[G(`button`,{class:`searchbox big`,onClick:()=>Ca(),children:[G(K,{name:`search`}),G(`span`,{children:`ノート・用語・メモを検索`})]}),G(`div`,{class:`sec-title`,children:`最近開いた`}),G(`div`,{class:`cards`,children:[G(`button`,{class:`ncard`,style:{"--c":`var(--era-${ne.id})`},onClick:()=>U({tab:`timeline`}),children:[G(`div`,{class:`band`}),G(`div`,{class:`cb`,children:[G(`div`,{class:`kind`,children:[G(K,{name:`table`}),`年表`]}),G(`div`,{class:`nm`,children:`全体年表`}),G(`div`,{class:`when`,children:[ne.name,`を表示中`]})]})]}),ee.filter(e=>e.id!==`n-main`).map(e=>{let t=ka(e),n=t?ae(t.from,N.eras):void 0;return G(`button`,{class:`ncard`,style:{"--c":n?`var(--era-${n.id})`:`var(--accent)`},onClick:()=>Ma(e.id),children:[G(`div`,{class:`band`}),G(`div`,{class:`cb`,children:[G(`div`,{class:`kind`,children:[G(K,{name:Oa[e.kind]}),Le[e.kind]]}),G(`div`,{class:`nm`,children:e.name}),G(`div`,{class:`when`,children:ja(e.lastOpenedAt)})]})]},e.id)})]}),re.length>0&&G(l,{children:[G(`div`,{class:`sec-title`,children:[`この時期のノート`,G(`small`,{style:{color:`var(--era-${ne.id})`},children:ne.name})]}),G(`div`,{class:`list`,children:re.slice(0,6).map(e=>G(`div`,{children:I(e)},e.id))})]}),M.length>0&&G(l,{children:[G(`div`,{class:`sec-title`,children:[`ピン留め`,G(`small`,{children:`長押しで並べ替え`})]}),G(Vr,{class:`list`,items:M,getId:e=>e.id,onReorder:e=>ze(`notes`,e,`ピン留めを並べ替え`),render:e=>I(e)})]}),ie.length>0&&G(l,{children:[G(`div`,{class:`sec-title`,children:[`グループ`,G(`small`,{children:`長押しで並べ替え`})]}),G(Vr,{class:`list`,items:ie,getId:e=>e.id,onReorder:e=>ze(`groups`,e,`グループを並べ替え`),render:e=>G(`div`,{class:`nrow`,onClick:()=>U({openGroupId:e.id}),children:[G(`span`,{class:`fi`,style:e.weakness?{"--c":`var(--w${e.weakness})`}:void 0,children:G(K,{name:`stack`})}),G(`span`,{class:`tx`,children:[G(`b`,{children:e.name}),G(`small`,{children:[je(e).length,`語`,Aa(De(e))&&`・`+Aa(De(e)),e.weakness?`・苦手${e.weakness}`:``]})]}),G(K,{name:`chevronRight`})]})})]})]}),G(`div`,{class:`sec-title`,children:[e?`フォルダの中`:`フォルダとノート`,G(`small`,{children:m?`タップで選ぶ`:f?G(`button`,{class:`linklike`,onClick:()=>p(null),children:[`#`,f,` ×`]}):`長押しで並べ替え`})]}),A.length>0&&G(Vr,{class:`list`,items:A,getId:e=>e.id,onReorder:e=>ze(`folders`,e,`フォルダを並べ替え`),render:e=>G(`div`,{class:`nrow ${m&&v.includes(e.id)?`picked`:``}`,onClick:()=>m?w(e.id):U({notesFolder:e.id}),children:[m&&G(`span`,{class:`chk ${v.includes(e.id)?`on`:``}`,children:G(K,{name:`check`})}),G(`span`,{class:`fi folder`,children:G(K,{name:`folder`})}),G(`span`,{class:`tx`,children:[G(`b`,{children:e.name}),G(`small`,{children:[E.filter(t=>t.folderId===e.id).length,`件`]})]}),G(K,{name:`chevronRight`})]})}),O.length>0&&G(Vr,{class:`list gap`,items:O,getId:e=>e.id,onReorder:e=>ze(`notes`,e,`ノートを並べ替え`),render:e=>I(e)}),!O.length&&!A.length&&G(`div`,{class:`empty`,children:[G(`div`,{class:`empty-ic`,children:G(K,{name:`notebook`,size:30})}),G(`p`,{children:`右下の＋から、年表・表・図・グラフ・メモ・比較ボード・フォルダを作れます。`})]}),!e&&te.length>0&&G(l,{children:[G(`div`,{class:`sec-title`,children:`タグ`}),G(`div`,{class:`tags`,children:te.map(e=>G(`button`,{class:f===e?`on`:``,onClick:()=>p(f===e?null:e),children:[`#`,e]},e))})]})]}),m?G(`div`,{class:`bulk-bar`,children:[G(`b`,{children:[g.length+v.length,`件`]}),G(`button`,{onClick:()=>{_(O.filter(e=>e.id!==k).map(e=>e.id)),y(A.map(e=>e.id))},children:`全部`}),G(`button`,{class:`primary`,disabled:!g.length&&!v.length,onClick:()=>x(!0),children:[G(K,{name:`dots`}),`操作`]}),G(`button`,{onClick:S,children:`終わる`})]}):G(`button`,{class:`fab`,"aria-label":`新しく作る`,onClick:()=>u(`menu`),children:G(K,{name:`plus`})}),G(Da,{open:b,notes:g,folders:v,folderId:e,onClose:()=>x(!1),onDone:S}),G(Ni,{target:i,onClose:()=>o(null)}),G(Li,{mode:s,folderId:e??void 0,onClose:()=>u(null),onMode:u})]});function oe(){return H.value.focusYear}}async function Ia(e,t,n){let r=j.get(`folders`,e);if(r&&(t===`rename`&&n&&pe(e,n),t===`delete`)){if(!await J({title:`フォルダ「${r.name}」を削除しますか？`,body:`中のノートは消えずに、1つ上の場所に移ります。`,ok:`削除`,danger:!0}))return;B(e),U({notesFolder:r.parentId??null})}}var La=e({BoardPickSheet:()=>Ka,EmbedSheet:()=>Wa,addToBoard:()=>Ga,addToBoardPrompt:()=>Ha,boardTarget:()=>za,createEmbed:()=>Ua,embedPinPrompt:()=>Va,embedPrompt:()=>Ba,embedTarget:()=>Ra,pasteImageToTimeline:()=>qa}),Ra=s(null),za=s(null);function Ba(e){Ra.value={kind:`note`,id:e}}function Va(e){Ra.value={kind:`pin`,id:e}}function Ha(e){za.value=e}function Ua(e){let t=Date.now(),n={id:T(`e`),createdAt:t,updatedAt:t,...e};return j.tx(`年表に差し込む`,e=>e.put(`embeds`,n)),n}function Wa(){let e=Ra.value,[t,n]=d(``),[r,i]=d(`event`),[a,o]=d(k),[s,c]=d(`collapsed`),[l,f]=d(``);u(()=>{if(e){if(f(``),c(`collapsed`),e.kind===`note`){let t=j.get(`notes`,e.id),r=t?ka(t):void 0;n(String(r?.from??Math.floor(H.value.focusYear)))}else{let t=j.get(`pins`,e.id);n(String(t?.when?.from??Math.floor(H.value.focusYear)))}}},[e]);let p=()=>{Ra.value=null},m=j.list(`notes`).filter(e=>e.kind===`timeline`),h=j.get(`notes`,a)?.columns??[],g=e?e.kind===`note`?j.get(`notes`,e.id)?.name:j.get(`pins`,e.id)?.title:``;return G(Y,{open:!!e,onClose:p,title:`年表に差し込む`,children:e&&G(`div`,{class:`form`,children:[G(`p`,{class:`hint`,children:[`「`,g,`」を、年表の好きな年・列に置きます。`,e.kind===`pin`?`地図のピンはボタンとして置かれ、タップすると地図が開きます。`:`最初はボタン（タップで開く）として置かれます。`]}),m.length>1&&G(`label`,{class:`fld`,children:[G(`span`,{children:`年表`}),G(`select`,{value:a,onChange:e=>o(e.target.value),children:m.map(e=>G(`option`,{value:e.id,children:e.name},e.id))})]}),G(`div`,{class:`fld-row`,children:[G(`label`,{class:`fld`,children:[G(`span`,{children:`年`}),G(`input`,{inputMode:`numeric`,value:t,onInput:e=>n(e.target.value)})]}),G(`label`,{class:`fld`,children:[G(`span`,{children:`列`}),G(`select`,{value:r,onChange:e=>i(e.target.value),children:h.map(e=>G(`option`,{value:e.id,children:e.name},e.id))})]})]}),e.kind===`note`&&G(`div`,{class:`seg two`,children:[G(`button`,{class:s===`collapsed`?`on`:``,onClick:()=>c(`collapsed`),children:`ボタンで置く`}),G(`button`,{class:s===`expanded`?`on`:``,onClick:()=>c(`expanded`),children:`展開して置く`})]}),l&&G(`p`,{class:`err`,children:l}),G(`button`,{class:`btn primary wide`,onClick:()=>{let n=parseInt(t,10);if(Number.isNaN(n)){f(`年を数字で入れてください`);return}Ua({noteId:a,year:n,col:r,target:e,display:e.kind===`pin`?`collapsed`:s}),p(),q(`「${g}」を年表に差し込みました`,{action:{label:`年表で見る`,run:()=>{U({tab:a===`n-main`?`timeline`:`notes`,openNoteId:a===`n-main`?H.value.openNoteId:a}),W(n)}}})},children:[G(K,{name:`timelineEvent`}),`差し込む`]})]})})}function Ga(e,t){let n=j.get(`notes`,e);if(!n)return;let r=n.content??{items:[]};if(r.items.some(e=>e.kind===t.kind&&e.id===t.id)){q(`すでに入っています`,{tone:`warn`});return}te(e,{...r,items:[...r.items,t]},`比較ボードに追加`)}function Ka(){let e=za.value,[t,n]=d(``),r=()=>{za.value=null},i=j.list(`notes`).filter(e=>e.kind===`board`),a=e?e.kind===`note`?j.get(`notes`,e.id)?.name:e.kind===`term`?j.get(`terms`,e.id)?.name:e.kind===`group`?j.get(`groups`,e.id)?.name:`地図`:``;return G(Y,{open:!!e,onClose:r,title:`比較ボードに追加`,children:e&&G(`div`,{class:`form`,children:[G(`p`,{class:`hint`,children:[`「`,a,`」を入れる比較ボードを選びます。`]}),G(`div`,{class:`list-box`,children:i.map(t=>G(`button`,{class:`lrow btnrow`,onClick:()=>{Ga(t.id,e),r(),`${t.name}`},children:[G(K,{name:`board`}),G(`span`,{class:`nm`,children:t.name}),G(`span`,{class:`ct`,children:[(t.content?.items??[]).length,`件`]})]},t.id))}),G(`div`,{class:`add-row`,children:[G(`input`,{value:t,placeholder:`新しい比較ボードの名前`,onInput:e=>n(e.target.value)}),G(`button`,{class:`btn`,onClick:()=>{let n=Ce(`board`,t||`比較ボード`);Ga(n.id,e),r(),`${n.name}`},children:[G(K,{name:`plus`}),`作る`]})]})]})})}async function qa(e,t,n){let{createNote:r}=await Z(async()=>{let{createNote:e}=await import(`./notes.js`).then(e=>e.b);return{createNote:e}},[],import.meta.url),{imageRatio:i,saveImage:a}=await Z(async()=>{let{imageRatio:e,saveImage:t}=await Promise.resolve().then(()=>ea);return{imageRatio:e,saveImage:t}},void 0,import.meta.url),o=await i(n),s=await a(n,`年表に画像を貼る`),c=r(`memo`,`画像（${t}年）`,{content:{text:``}});j.tx(`画像の位置`,e=>{e.patch(`notes`,c.id,{pics:[{id:T(`pic`),img:s,x:16,y:14,w:300,h:Math.round(300*o)}]})});let l=j.get(`notes`,e)?.columns??[];Ua({noteId:e,year:t,col:l.find(e=>e.id===`event`&&e.visible)?.id??l.find(e=>e.visible)?.id??`event`,target:{kind:`note`,id:c.id},display:`expanded`})}var Ja=[`原因`,`結果`,`影響`,`反発`,`継承`,`対立`,`見直し`,`発展`,`契機`];function Ya(e,t,n,r){if(t===n)return null;let i=Date.now(),a={id:T(`a`),createdAt:i,updatedAt:i,noteId:e,from:t,to:n,label:r.trim()},o=j.get(`terms`,t)?.name,s=j.get(`terms`,n)?.name;return j.tx(`矢印「${o} → ${s}」を引く`,e=>e.put(`arrows`,a)),a}function Xa(e,t,n=`矢印を編集`){j.get(`arrows`,e)&&j.tx(n,n=>{n.patch(`arrows`,e,t)})}function Za(e){let t=j.get(`arrows`,e);t&&Xa(e,{from:t.to,to:t.from},`矢印の向きを逆に`)}var Qa=e=>C([{c:`arrows`,id:e}],`矢印を削除`);function $a(e,t,n,r=``,i=`yellow`){let a=Date.now(),o={id:T(`s`),createdAt:a,updatedAt:a,anchor:{kind:`timeline`,noteId:e,year:t,col:n},text:r,color:i,author:`me`};return j.tx(`表に付箋を貼る`,e=>e.put(`stickies`,o)),o}function eo(e,t,n=`付箋を編集`){j.get(`stickies`,e)&&j.tx(n,n=>{n.patch(`stickies`,e,t)})}var to=e=>C([{c:`stickies`,id:e}],`付箋を削除`),no=e=>j.list(`stickies`).filter(t=>t.anchor.kind===`timeline`&&t.anchor.noteId===e);function ro(e,t,n=`差し込みを変更`){j.get(`embeds`,e)&&j.tx(n,n=>{n.patch(`embeds`,e,t)})}var io=e=>C([{c:`embeds`,id:e}],`差し込みを外す`),ao=e=>e.shape===`span`&&e.when.to!=null&&e.when.to>e.when.from,oo=(e,t=!0)=>e.importance+(t&&e.weakness>0?1:0);function so(e,t,n=!0){return oo(e,n)>=t.minImportance}var co=(e,t)=>t.importance-e.importance||e.when.from-t.when.from||e.name.localeCompare(t.name,`ja`),lo=(e,t)=>e.when.from-t.when.from||t.importance-e.importance||e.name.localeCompare(t.name,`ja`);function uo(e){let{terms:t,columns:n,level:r,eras:i,gengo:a}=e,o=new Set(n.map(e=>e.id)),s=r.bucket===`era`,c=s?0:r.bucket,l=e=>{let t=0;for(let n=0;n<i.length;n++)i[n].from<=e&&(t=n);return t},u=e=>s?l(e):ue(e,c),d=new Map,f=e=>{let t=d.get(e);return t||(t={points:new Map},d.set(e,t)),t},p=[],m=0,h=0,g=new Map,_=new Set;for(let n of t){if(n.deletedAt||!o.has(n.col)||e.filter&&!e.filter(n))continue;if(!so(n,r,e.weakBonus??!0)){h++;continue}m++;let t=u(n.when.from),i=ao(n)?u(n.when.to):t;if(i!==t)f(t),f(i),p.push({t:n,k0:t,k1:i});else{let e=f(t),r=e.points.get(n.col)??[];r.push(n),e.points.set(n.col,r)}c===1&&(n.when.approx&&n.when.label?g.has(t)||g.set(t,n.when.label):_.add(t))}let v=new Map;for(let t of e.embeds??[]){if(t.deletedAt||!o.has(t.col)||(t.importance??8)<r.minImportance)continue;let e=u(t.year);f(e);let n=v.get(e)??[];n.push(t),v.set(e,n)}for(let t of e.stickies??[])t.anchor.kind===`timeline`&&!t.deletedAt&&f(u(t.anchor.year));let y=[...d.keys()].sort((e,t)=>e-t),b=new Map(y.map((e,t)=>[e,t])),x={},S=new Map,C=new Map;for(let e of p){let t=C.get(e.t.col)??[];t.push(e),C.set(e.t.col,t)}for(let[e,t]of C){t.sort((e,t)=>e.k0-t.k0||t.k1-e.k1||t.t.importance-e.t.importance);let n=[];for(let r of t){let t=b.get(r.k0),i=b.get(r.k1),a=n.findIndex(e=>e<t);if(a<0){if(n.length>=3){let t=d.get(r.k0),n=t.points.get(e)??[];n.push(r.t),t.points.set(e,n);continue}a=n.length,n.push(i)}else n[a]=i;for(let n=t;n<=i;n++){let o=y[n],s=S.get(o);s||(s=new Map,S.set(o,s));let c=s.get(e)??[];c.push({term:r.t,lane:a,start:n===t,end:n===i}),s.set(e,c)}}x[e]=n.length}let w=[],T=null,E=null;for(let t of y){let o=d.get(t),l,u,f,p,m;if(s)m=i[t],l=m.from,u=m.to-1,f=m.name,p=m.label??`${L(m.from)}〜`;else{[l,u]=ie(t,c),m=ae(l,i);let n=ce(t,c),o=!_.has(t)&&g.get(t);if(f=o?l<600?o:`${n.main}頃`:n.main,p=n.sub,r.gengo){let t=fe(l,a,e.gengoTo);t&&(p=c===1?t:`${t}〜`)}}let h=E==null;!s&&(!T||T.id!==m.id)&&(w.push({kind:`era`,key:`era:${m.id}:${t}`,era:m}),T=m,h=!0);let y={},b=S.get(t);if(h&&b)for(let e of b.values())for(let t of e)t.start||(t.cont=!0);let x=v.get(t)??[];for(let t of n){let n=(o.points.get(t.id)??[]).sort(co),i=r.maxPerCell??6,a=!!e.expanded?.has(`${t.id}|${l}`),s=a?1/0:i;y[t.id]={points:n.slice(0,s).sort(lo),more:Math.max(0,n.length-s),less:a&&n.length>i,coarse:c!==1,spans:b?.get(t.id)??[],embeds:x.filter(e=>e.col===t.id&&e.display===`collapsed`)}}w.push({kind:`row`,key:`r:${t}`,bucket:t,from:l,to:u,label:f,sub:p,era:m,cells:y,gapBefore:E!=null&&!s&&t-E>1});for(let e of x)e.display===`expanded`&&w.push({kind:`embed`,key:`e:${e.id}`,embed:e,era:m,from:l});E=t}return{items:w,lanes:x,shown:m,hidden:h}}function fo(e,t){let n=-1;for(let r=0;r<e.length;r++){let i=e[r];if(i.kind===`row`){if(i.to>=Math.floor(t))return r;n=r}}return n}var Q={HEAD_H:34,ERA_H:36,ROW_MIN:46,GAP_MARK:10,YEAR_W:68,CELL_PAD:6,GAP:4,CHIP_PAD_X:8,CHIP_PAD_Y:4,WEAK_EXTRA:5,LINE:20,MASK_W:84,LANE_W:8,YEAR_LABEL_LINE:20,YEAR_SMALL_SIZE:12,YEAR_SMALL_LINE:16,YEAR_SUB_LINE:14,YEAR_SUB_SIZE:10.5,YEAR_PAD_Y:8,CHIP_YEAR_LINE:14,BOTTOM_PAD:220,EMBED_H:300,CHIP_YEAR_SIZE:11,MORE_SIZE:13},po=[{tiers:[12.5,13,14,14.5,15],line:20,px:8,py:4,ys:11,yl:14,ms:13,mw:84,wk:5},{tiers:[11.5,12,12.5,13,13.5],line:18,px:7,py:3,ys:10.5,yl:13,ms:12,mw:74,wk:5},{tiers:[10.5,11,11.5,12,12],line:16,px:6,py:3,ys:10,yl:12,ms:11,mw:64,wk:4}],mo=-1;function ho(e){if(e=Math.max(0,Math.min(po.length-1,e|0)),e===mo)return;mo=e;let t=po[e];Object.assign(Q,{LINE:t.line,CHIP_PAD_X:t.px,CHIP_PAD_Y:t.py,CHIP_YEAR_LINE:t.yl,MASK_W:t.mw,WEAK_EXTRA:t.wk,CHIP_YEAR_SIZE:t.ys,MORE_SIZE:t.ms}),t.tiers.forEach((e,t)=>{xo[t+1]=[e,xo[t+1][1]]}),Ao.clear()}function go(){let e=po[Math.max(0,mo)],t={"--lh":e.line+`px`,"--px":e.px+`px`,"--py":e.py+`px`,"--ys":e.ys+`px`,"--yl":e.yl+`px`,"--ms":e.ms+`px`,"--wk":e.wk+`px`};return e.tiers.forEach((e,n)=>{t[`--f${n+1}`]=e+`px`}),t}var _o={ruler:140,event:150,policy:148,system:140,diplomacy:144,finance:132,society:136,industry:136,culture:148,situation:140,world:148},vo=e=>e.width??_o[e.id]??128;function yo(e,t){let n=new Map;for(let t of e){if(t.deletedAt)continue;let e=n.get(t.col)??[],[r,i]=So(bo(Math.max(5,t.importance)));e.push($(t.name,r,i)),n.set(t.col,e)}return t.map(e=>{if(e.width)return e.width;let t=(n.get(e.id)??[]).sort((e,t)=>e-t);if(t.length<5)return _o[e.id]??140;let r=t[Math.min(t.length-1,Math.floor(t.length*.6))],i=Math.ceil(r+Q.CHIP_PAD_X*2+Q.CELL_PAD*2+Q.LANE_W+6),a=Q.LINE/20;return Math.max(Math.round(108*a),Math.min(Math.round(230*a),i))})}var bo=e=>Math.max(1,Math.min(5,Math.ceil(e/2))),xo={5:[15,800],4:[14.5,700],3:[14,500],2:[13,400],1:[12.5,400]},So=e=>xo[e],Co=null,wo=`sans-serif`,To=new Map;function Eo(e){wo=e||`sans-serif`,To.clear(),Ao.clear()}function $(e,t,n){let r=`${t}|${n}|${e}`,i=To.get(r);if(i!=null)return i;Co||=(typeof document<`u`?document.createElement(`canvas`):null)?.getContext(`2d`)??null;let a;return Co?(Co.font=`${n} ${t}px ${wo}`,a=Co.measureText(e).width):a=[...e].length*t,To.set(r,a),a}function Do(e,t,n,r){if($(e,t,n)<=r)return 1;let i=1,a=0;for(let o of e){let e=$(o,t,n);a+e>r&&a>0?(i++,a=e):a+=e}return i}var Oo=new Set([...`）)」』】〕〉》］]、。，．,.・：；！？!?ーぁぃぅぇぉっゃゅょゎァィゥェォッャュョヮヵヶ々〜～`]),ko=new Set([...`（(「『【〔〈《［[`]),Ao=new Map;function jo(e,t,n,r){let i=[],a=[],o=0;for(let s of e){let e=$(s,t,n);if(o+e>r&&a.length>0){let e=[];for(Oo.has(s)&&a.length>1&&(e=[a.pop()]);a.length>1&&ko.has(a[a.length-1]);)e.unshift(a.pop());i.push(a.join(``)),a=[...e,s],o=a.reduce((e,r)=>e+$(r,t,n),0)}else a.push(s),o+=e}return a.length&&i.push(a.join(``)),i}function Mo(e,t,n,r){if($(e,t,n)<=r)return[e];let i=`${t}|${n}|${Math.round(r)}|${e}`,a=Ao.get(i);if(a)return a;let o=[...e],s=jo(o,t,n,r);for(let e=1;e<o.length;e++){if(o[e]!==`（`&&o[e]!==`(`&&o[e-1]!==`・`&&o[e-1]!==`、`&&o[e-1]!==`＝`)continue;let i=o.slice(0,e).join(``);if($(i,t,n)>r)continue;let a=[i,...Mo(o.slice(e).join(``),t,n,r)];a.length<=s.length&&(s=a)}let c=s.length;if(c>=2&&[...s[c-1]].length===1){let e=[...s[c-2]],t=e[e.length-1];e.length>2&&!Oo.has(t)&&!ko.has(e[e.length-2])&&(s=[...s.slice(0,c-2),e.slice(0,-1).join(``),t+s[c-1]])}return Ao.set(i,s),s}function No(e,t,n=!1){return n||ao(e)?Io(e):!t||e.when.approx?``:e.when.from<0?`前${-e.when.from}`:String(e.when.from)}function Po(e,t,n,r=``){let i=e.weakness?Q.WEAK_EXTRA:0;if(n)return{w:Q.MASK_W+i,h:Q.LINE+Q.CHIP_PAD_Y*2,years:!1};let[a,o]=So(bo(e.importance)),s=Q.CHIP_PAD_X*2+i,c=t-s,l=$(e.name,a,o);if(r){let n=$(r,Q.CHIP_YEAR_SIZE,500);if(l+5+n<=c)return{w:Math.ceil(l+5+n+s+1),h:Q.LINE+Q.CHIP_PAD_Y*2,years:`inline`};let i=Mo(e.name,a,o,c);return{w:Math.min(t,Math.ceil(Math.max(Fo(i,a,o),n)+s+1)),h:i.length*Q.LINE+Q.CHIP_YEAR_LINE+Q.CHIP_PAD_Y*2,years:`below`,lines:i}}if(l<=c)return{w:Math.ceil(l+s+1),h:Q.LINE+Q.CHIP_PAD_Y*2,years:!1};let u=Mo(e.name,a,o,c);return{w:Math.min(t,Math.ceil(Fo(u,a,o)+s+1)),h:u.length*Q.LINE+Q.CHIP_PAD_Y*2,years:!1,lines:u}}var Fo=(e,t,n)=>e.reduce((e,r)=>Math.max(e,$(r,t,n)),0),Io=e=>{let t=e.when.from,n=e.when.to??t,r=e=>e<0?`前${-e}`:String(e);return t>0&&n>0&&Math.floor(t/100)===Math.floor(n/100)?`${r(t)}–${String(n).slice(-2)}`:`${r(t)}–${r(n)}`},Lo=e=>e.more?`＋${e.more}`:e.less?`閉じる`:``,Ro=e=>({w:Math.ceil($(e,Q.MORE_SIZE,700)+Q.CHIP_PAD_X*2+1),h:Q.LINE+Q.CHIP_PAD_Y*2,years:!1});function zo(e){let t=[];for(let n of e.spans)(n.start||n.cont)&&t.push({t:n.term,span:!0,cont:!n.start});for(let n of e.points)t.push({t:n,span:!1,cont:!1});return t.sort((e,t)=>Number(t.cont)-Number(e.cont)||e.t.when.from-t.t.when.from||t.t.importance-e.t.importance)}var Bo=()=>`差し込み`;function Vo(e){Bo=e}var Ho=e=>Bo(e);function Uo(e,t){let n=Math.ceil($(Bo(e),13,600)+16+20+1);return n<=t?{w:n,h:28,years:!1}:{w:t,h:Do(Bo(e),13,600,t-16-20)*20+8,years:!1}}function Wo(e,t,n){let r=[];for(let n of e.embeds){let e=Uo(n,t);r.push({kind:`embed`,id:n.id,...e})}for(let i of zo(e)){let a=Po(i.t,t,n(i.t),No(i.t,!!e.coarse,i.span));r.push({kind:i.span?`span`:`term`,id:i.t.id,...a})}let i=Lo(e);if(i){let e=Ro(i);r.push({kind:`more`,id:`more`,...e})}return r}function Go(e,t){let n=[];if(!e.length)return{pos:n,height:0};let r=0,i=0,a=0;for(let o of e)i>0&&i+Q.GAP+o.w>t&&(r+=a+Q.GAP,i=0,a=0),n.push({x:i>0?i+Q.GAP:0,y:r}),i+=(i>0?Q.GAP:0)+o.w,a=Math.max(a,o.h);return{pos:n,height:r+a}}function Ko(e,t){return e-Q.CELL_PAD*2-t-1}function qo(e){if(!e||!e.spans.length)return 0;let t=0;for(let n of e.spans)n.lane>t&&(t=n.lane);return(t+1)*Q.LANE_W+3}function Jo(e,t,n,r){let i=r??t.map(vo),a=[],o=Q.YEAR_W;for(let e of i)a.push(o),o+=e;let s=e.items.length,c=new Float64Array(s+1),l=new Float64Array(s),u=0;for(let r=0;r<s;r++){let a=e.items[r],o=a.kind===`era`?Q.ERA_H:a.kind===`embed`?Q.EMBED_H:Xo(a,t,i,n);c[r]=u,l[r]=o,u+=o}return c[s]=u,{offsets:c,heights:l,total:u,colX:a,colW:i,totalW:o}}function Yo(e){return $(e,15.5,800)>Q.YEAR_W-16}function Xo(e,t,n,r){let i=Q.ROW_MIN,a=Yo(e.label)?Do(e.label,Q.YEAR_SMALL_SIZE,700,Q.YEAR_W-16)*Q.YEAR_SMALL_LINE:Q.YEAR_LABEL_LINE,o=e.sub?Do(e.sub,Q.YEAR_SUB_SIZE,500,Q.YEAR_W-16):0;return i=Math.max(i,Q.YEAR_PAD_Y*2+a+o*Q.YEAR_SUB_LINE),t.forEach((t,a)=>{let o=e.cells[t.id];if(!o)return;let s=Ko(n[a],qo(o)),c=Go(Wo(o,s,r),s).height;c&&(i=Math.max(i,c+Q.CELL_PAD*2+1))}),i+(e.gapBefore?Q.GAP_MARK:0)}function Zo(e,t){let n=0,r=e.heights.length-1;if(r<0)return-1;for(;n<r;){let i=n+r+1>>1;e.offsets[i]<=t?n=i:r=i-1}return n}function Qo(e,t,n,r){let i=r(e,n);if(i<0)return 0;let a=e[i],o=a.to-a.from+1,s=n>=a.from?Math.min(.999,(n-a.from)/o):0;return t.offsets[i]+s*t.heights[i]}function $o(e,t,n){let r=Zo(t,Math.max(0,n));if(r<0)return null;for(;r<e.length&&e[r].kind!==`row`;)r++;if(r>=e.length){for(r=e.length-1;r>=0&&e[r].kind!==`row`;)r--;if(r<0)return null}let i=e[r],a=Math.max(0,Math.min(.999,(n-t.offsets[r])/t.heights[r]));return i.from+a*(i.to-i.from+1)}function es(e,t,n,r,i){let a=new Map,o=e.gapBefore?Q.GAP_MARK:0;return n.forEach((n,s)=>{let c=e.cells[n.id];if(!c)return;let l=qo(c),u=Ko(r.colW[s],l),d=Wo(c,u,i),{pos:f}=Go(d,u);d.forEach((e,n)=>{(e.kind===`span`||e.kind===`term`)&&a.set(e.id,{x:r.colX[s]+Q.CELL_PAD+l+f[n].x,y:t+o+Q.CELL_PAD+f[n].y,w:e.w,h:e.h})});for(let e of c.spans)a.has(e.term.id)||a.set(e.term.id,{x:r.colX[s]+Q.CELL_PAD+e.lane*Q.LANE_W+1,y:t+o+4,w:6,h:20})}),a}var ts=s(new Set),ns=s(!1);function rs(e,t){return t.cols.length&&!t.cols.includes(e.col)?t.manual&&!!e.hide:!!(t.manual&&e.hide||t.minImportance>0&&e.importance>=t.minImportance||t.minWeakness>0&&e.weakness>=t.minWeakness)}function is(e,t,n,r){return!e||r?e=>!1:e=>rs(e,t)&&!n.has(e.id)}var as=new Map;function os(e){as.set(e,Date.now());let t=new Set(ts.value);t.add(e),ts.value=t}function ss(e){let t=new Set(ts.value);t.delete(e),ts.value=t}function cs(){ts.value=new Set,ns.value=!1}function ls(){ns.value=!0}function us(e,t){let n=[];e.minImportance>0&&n.push(`重要度${e.minImportance}以上`),e.minWeakness>0&&n.push(`苦手${e.minWeakness}以上`),e.manual&&n.push(`個別指定`);let r=e.cols.length?`（${e.cols.map(t).join(`・`)}）`:``;return(n.join(`・`)||`対象なし`)+r}function ds({preset:e,onClose:n,columns:r,noteId:i=k}){let[a,o]=d(``),[s,c]=d(`event`),[l,f]=d(``),[p,m]=d(``),[h,g]=d(5),[_,v]=d(``),y=t(null);u(()=>{e&&(o(``),m(``),v(``),c(e.col??localStorage.getItem(`nhnote.lastCol`)??`event`),f(e.year==null?``:String(e.year)),setTimeout(()=>y.current?.focus(),250))},[e]);let b=()=>{let e=parseInt(l,10),t=p.trim()?parseInt(p,10):void 0;if(!a.trim()){v(`名前を入れてください`);return}if(Number.isNaN(e)){v(`年を数字で入れてください（紀元前は -300 のように）`);return}if(t!=null&&(Number.isNaN(t)||t<e)){v(`終わりの年は始まりより後にしてください`);return}let r=D({name:a,col:s,when:t==null?{from:e}:{from:e,to:t},importance:h,noteId:i});try{localStorage.setItem(`nhnote.lastCol`,s)}catch{}n(),W(e,{termId:r.id}),`${r.name}`};return G(Y,{open:!!e,onClose:n,title:`用語を追加`,full:!0,children:G(`div`,{class:`form`,children:[G(`label`,{class:`fld`,children:[G(`span`,{children:`名前`}),G(`input`,{ref:y,value:a,placeholder:`例：乙巳の変`,onInput:e=>o(e.target.value),onKeyDown:e=>{e.key===`Enter`&&b()}})]}),G(`label`,{class:`fld`,children:[G(`span`,{children:`列`}),G(`select`,{value:s,onChange:e=>c(e.target.value),children:r.map(e=>G(`option`,{value:e.id,children:[e.name,e.visible?``:`（非表示の列）`]},e.id))})]}),G(`div`,{class:`fld-row`,children:[G(`label`,{class:`fld`,children:[G(`span`,{children:`年`}),G(`input`,{inputMode:`numeric`,value:l,placeholder:`645`,onInput:e=>f(e.target.value)})]}),G(`label`,{class:`fld`,children:[G(`span`,{children:`終わり（期間なら）`}),G(`input`,{inputMode:`numeric`,value:p,placeholder:`なし`,onInput:e=>m(e.target.value)})]})]}),G(`div`,{class:`f-label`,children:[`重要度`,G(`small`,{children:Br[h]})]}),G(`div`,{class:`imp10`,children:[Array.from({length:10},(e,t)=>t+1).map(e=>G(`button`,{"aria-label":`重要度${e}`,class:e<=h?`on`:``,style:{height:10+e*2.2+`px`},onClick:()=>g(e)},e)),G(`div`,{class:`imp-txt`,children:G(`b`,{children:h})})]}),_&&G(`p`,{class:`err`,children:_}),G(`button`,{class:`btn primary wide`,onClick:b,children:[G(K,{name:`plus`}),`追加する`]}),G(`p`,{class:`hint`,children:`終わりの年を入れると「期間」として、年表に縦線で表示されます。表の空いたマスを長押ししても、その場所に追加できます。`})]})})}function fs({open:e,onClose:t,noteId:n=k}){j.rev.value;let r=j.get(`notes`,n)?.columns??[],[i,a]=d(``),o=(e,t)=>{let i=[...r],a=e+t;a<0||a>=i.length||([i[e],i[a]]=[i[a],i[e]],y(n,i,`列の並びを変更`))},s=e=>{let t=r.map((t,n)=>n===e?{...t,visible:!t.visible}:t);t.some(e=>e.visible)&&y(n,t,`列「${r[e].name}」を${r[e].visible?`非表示`:`表示`}に`)},c=()=>{let e=i.trim();e&&(y(n,[...r,{id:T(`col`),name:e,visible:!0}],`列「${e}」を追加`),a(``))};return G(Y,{open:e,onClose:t,title:`表示`,full:!0,children:G(`div`,{class:`form`,children:[G(`div`,{class:`f-label`,children:[`文字の大きさ`,G(`small`,{children:`小さくすると横に多くの列が並びます`})]}),G(`div`,{class:`seg three`,children:[`標準`,`小さめ`,`最小`].map((e,t)=>G(`button`,{class:(j.settings.tlText??0)===t?`on`:``,onClick:()=>j.setSettings({tlText:t}),children:e},t))}),G(`div`,{class:`f-label`,children:`苦手で絞り込み`}),G(`div`,{class:`seg four`,children:[0,1,2,3].map(e=>G(`button`,{class:H.value.weakFilter===e?`on`:``,style:{"--wc":e?`var(--w${e})`:`var(--ink-2)`},onClick:()=>U({weakFilter:e}),children:e?G(l,{children:[G(`i`,{}),e,`以上`]}):`すべて`},e))}),G(`div`,{class:`f-label`,children:[`列`,G(`small`,{children:`表示・並び替え・追加`})]}),G(`div`,{class:`list-box`,children:r.map((e,t)=>G(`div`,{class:`lrow`,children:[G(`input`,{type:`checkbox`,class:`switch sm`,checked:e.visible,onChange:()=>s(t),"aria-label":`${e.name}を表示`}),G(`span`,{class:`nm ${e.visible?``:`off`}`,children:e.name}),G(`button`,{class:`iconbtn sm`,"aria-label":`上へ`,onClick:()=>o(t,-1),disabled:t===0,children:G(K,{name:`chevronUp`})}),G(`button`,{class:`iconbtn sm`,"aria-label":`下へ`,onClick:()=>o(t,1),disabled:t===r.length-1,children:G(K,{name:`chevronDown`})})]},e.id))}),G(`div`,{class:`add-row`,children:[G(`input`,{value:i,placeholder:`新しい列の名前`,onInput:e=>a(e.target.value),onKeyDown:e=>{e.key===`Enter`&&c()}}),G(`button`,{class:`btn`,onClick:c,children:[G(K,{name:`plus`}),`追加`]})]}),G(`p`,{class:`hint`,children:`「西暦・元号・時代」は左端に固定で表示されます。`})]})})}function ps({open:e,onClose:t,columns:n}){j.rev.value;let r=j.settings.redSheet,i=e=>j.setSettings({redSheet:{...r,...e}});return G(Y,{open:e,onClose:t,title:`赤シートで隠すもの`,full:!0,children:G(`div`,{class:`form`,children:[G(`div`,{class:`f-label`,children:[`重要度がこれ以上`,G(`small`,{children:r.minImportance?`${r.minImportance}以上`:`使わない`})]}),G(`div`,{class:`chips-row`,children:[0,10,9,8,7,6,5,4,3,1].map(e=>G(`button`,{class:`chip ${r.minImportance===e?`on`:``}`,onClick:()=>i({minImportance:e}),children:e?`${e}以上`:`なし`},e))}),G(`div`,{class:`f-label`,children:`苦手度がこれ以上`}),G(`div`,{class:`seg four`,children:[0,1,2,3].map(e=>G(`button`,{class:r.minWeakness===e?`on`:``,style:{"--wc":e?`var(--w${e})`:`var(--ink-2)`},onClick:()=>i({minWeakness:e}),children:e?G(l,{children:[G(`i`,{}),e,`以上`]}):`なし`},e))}),G(`label`,{class:`switch-row`,children:[G(`span`,{children:`個別に指定した用語も隠す`}),G(`input`,{type:`checkbox`,class:`switch`,checked:r.manual,onChange:e=>i({manual:e.target.checked})})]}),G(`div`,{class:`f-label`,children:[`対象の列`,G(`small`,{children:r.cols.length?`${r.cols.length}列だけ`:`すべての列`})]}),G(`div`,{class:`chips-row`,children:n.map(e=>{let t=r.cols.includes(e.id);return G(`button`,{class:`chip ${t?`on`:``}`,onClick:()=>i({cols:t?r.cols.filter(t=>t!==e.id):[...r.cols,e.id]}),children:e.name},e.id)})}),G(`p`,{class:`hint`,children:`隠した語は、どれも同じ幅の赤い板になります（文字数や形から答えが分からないように）。板をタップすると1つずつめくれます。`})]})})}var ms=s(null);function hs(e,t,n={}){ms.value={title:e,onPick:t,...n}}var gs={timeline:`table`,table:`cols3`,diagram:`sitemap`,chart:`chartLine`,memo:`fileText`,board:`board`};function _s(){let e=ms.value,[t,n]=d(``);u(()=>{e&&n(``)},[e]);let r=()=>{ms.value=null},i=e?j.list(`notes`).filter(n=>(!e.kinds||e.kinds.includes(n.kind))&&(!t.trim()||n.name.includes(t.trim()))).sort((e,t)=>(t.lastOpenedAt??0)-(e.lastOpenedAt??0)):[];return G(Y,{open:!!e,onClose:r,title:e?.title,full:!0,children:e&&G(`div`,{class:`form`,children:[G(`div`,{class:`searchbox`,children:[G(K,{name:`search`}),G(`input`,{value:t,placeholder:`ノートの名前で探す`,onInput:e=>n(e.target.value)})]}),G(`div`,{class:`results`,children:[e.extra?.map(t=>G(`button`,{class:`res`,onClick:()=>{r(),e.onPick(t.id)},children:[G(K,{name:t.icon}),G(`span`,{class:`nm`,children:t.label})]},t.id)),i.map(t=>G(`button`,{class:`res`,onClick:()=>{r(),e.onPick(t.id)},children:[G(K,{name:gs[t.kind]??`note`}),G(`span`,{class:`nm`,children:t.name}),G(`span`,{class:`sub`,children:Le[t.kind]})]},t.id)),!i.length&&!e.extra?.length&&G(`p`,{class:`hint center`,children:`ノートがありません。ノートタブの＋から作れます。`})]})]})})}var vs=s(null),ys=V(()=>Z(()=>import(`./Preview.js`).then(e=>({default:e.NotePreview})),[],import.meta.url));function bs({at:e,noteId:t,onClose:n,onAdd:r}){let i=e?j.get(`notes`,t)?.columns?.find(t=>t.id===e.col)?.name:``;return G(Y,{open:!!e,onClose:n,title:e?`${L(e.year)}・${i}`:``,children:e&&G(`div`,{class:`action-list`,children:[G(`button`,{onClick:()=>r(e),children:[G(K,{name:`plus`}),`ここに用語を追加`]}),G(`button`,{onClick:()=>{$a(t,e.year,e.col),n()},children:[G(K,{name:`sticker`}),`ここに付箋を貼る`]}),G(`button`,{onClick:()=>{n(),hs(`差し込むノートを選ぶ`,n=>{setTimeout(()=>xs(n,e.year,e.col,t),50)})},children:[G(K,{name:`timelineEvent`}),`ここにノートを差し込む`]}),G(`button`,{onClick:()=>{n(),ut(e.year,`timeline`),U({tab:`map`})},children:[G(K,{name:`map2`}),`この年の地図を見る`]})]})})}function xs(e,t,n,r){Z(()=>Promise.resolve().then(()=>La).then(i=>{i.createEmbed({noteId:r,year:t,col:n,target:{kind:`note`,id:e},display:`collapsed`}),`${j.get(`notes`,e)?.name}`}),void 0,import.meta.url)}function Ss({open:e,onClose:t,noteId:n,onSelect:r,onMap:i,onCompare:a,onImage:o}){let s=j.list(`groups`),[c,l]=d(!1);return u(()=>{e||l(!1)},[e]),G(Y,{open:e,onClose:t,title:`ほかの操作`,children:c?G(`div`,{class:`action-list`,children:[s.map(e=>G(`button`,{onClick:()=>{U({groupFilter:e.id}),t()},children:[G(K,{name:`stack`}),e.name]},e.id)),!s.length&&G(`p`,{class:`hint center`,children:`グループはまだありません。「選んで操作」→「グループ」で作れます。`})]}):G(`div`,{class:`action-list`,children:[G(`button`,{onClick:r,children:[G(K,{name:`handClick`}),`選んで操作（グループ・比較表・赤シート）`]}),G(`button`,{onClick:()=>l(!0),children:[G(K,{name:`filter`}),`グループで絞り込む`]}),G(`button`,{onClick:()=>U({showArrows:!H.value.showArrows}),children:[G(K,{name:`arrowRight`}),`矢印を`,H.value.showArrows?`隠す`:`表示する`]}),G(`button`,{onClick:a,children:[G(K,{name:`splitRows`}),`並べて見る`]}),G(`button`,{onClick:i,children:[G(K,{name:`map2`}),`この時期の地図を見る`]}),o&&G(`button`,{onClick:o,children:[G(K,{name:`photo`}),`画像を貼る（いま見ている年に）`]}),G(`p`,{class:`hint`,children:`付箋や差し込みは、表の空いたマスを長押しして置けます。矢印は、用語の詳細 →「矢印を引く」から。`}),n&&null]})})}function Cs({open:e,count:t,onClose:n,onCreate:r}){let[i,a]=d(``);return u(()=>{e&&a(``)},[e]),G(Y,{open:e,onClose:n,title:`グループにする`,children:G(`div`,{class:`form`,children:[G(`label`,{class:`fld`,children:[G(`span`,{children:[`グループの名前（`,t,`語）`]}),G(`input`,{value:i,autoFocus:!0,placeholder:`例：享保の改革`,onInput:e=>a(e.target.value),onKeyDown:e=>{e.key===`Enter`&&r(i)}})]}),G(`button`,{class:`btn primary wide`,onClick:()=>r(i),children:[G(K,{name:`stack`}),`作る`]})]})})}function ws({pair:e,noteId:t,onClose:n}){let[r,i]=d(``);u(()=>{e&&i(``)},[e]);let a=e?j.get(`terms`,e.from):void 0,o=e?j.get(`terms`,e.to):void 0,s=r=>{e&&(Ya(t,e.from,e.to,r),n())};return G(Y,{open:!!e,onClose:n,title:`矢印を引く`,children:e&&G(`div`,{class:`form`,children:[G(`p`,{class:`arrow-pair`,children:[G(`b`,{children:a?.name}),G(K,{name:`arrowRight`}),G(`b`,{children:o?.name})]}),G(`div`,{class:`f-label`,children:`ラベル（タップで決定）`}),G(`div`,{class:`chips-row`,children:Ja.map(e=>G(`button`,{class:`chip`,onClick:()=>s(e),children:e},e))}),G(`div`,{class:`add-row`,children:[G(`input`,{value:r,placeholder:`自分で書く（なしでもよい）`,onInput:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`&&s(r)}}),G(`button`,{class:`btn primary`,onClick:()=>s(r),children:`引く`})]})]})})}function Ts({id:e,onClose:t}){j.rev.value;let n=e?j.get(`arrows`,e):void 0,[r,i]=d(``);if(u(()=>{i(n?.label??``)},[e]),e&&(!n||n.deletedAt))return G(Y,{open:!1,onClose:t,children:null});let a=n?j.get(`terms`,n.from):void 0,o=n?j.get(`terms`,n.to):void 0;return G(Y,{open:!!n,onClose:t,title:`矢印`,children:n&&G(`div`,{class:`form`,children:[G(`p`,{class:`arrow-pair`,children:[G(`button`,{class:`linklike`,onClick:()=>U({openTermId:n.from}),children:a?.name}),G(K,{name:`arrowRight`}),G(`button`,{class:`linklike`,onClick:()=>U({openTermId:n.to}),children:o?.name})]}),G(`div`,{class:`chips-row`,children:Ja.map(e=>G(`button`,{class:`chip ${n.label===e?`on`:``}`,onClick:()=>{Xa(n.id,{label:e},`矢印のラベルを変更`),i(e)},children:e},e))}),G(`label`,{class:`fld`,children:[G(`span`,{children:`ラベル`}),G(`input`,{value:r,onInput:e=>i(e.target.value),onBlur:()=>{r!==n.label&&Xa(n.id,{label:r},`矢印のラベルを変更`)}})]}),G(`div`,{class:`action-list`,children:[G(`button`,{onClick:()=>Za(n.id),children:[G(K,{name:`leftRight`}),`向きを逆にする`]}),G(`button`,{class:`danger`,onClick:()=>{Qa(n.id),t()},children:[G(K,{name:`trash`}),`削除`]})]})]})})}function Es({id:e,onClose:t}){j.rev.value;let n=e?j.get(`stickies`,e):void 0,[r,i]=d(``);u(()=>{i(n?.text??``)},[e]);let a=()=>{n&&r!==n.text&&eo(n.id,{text:r})};return u(()=>()=>{let t=e?j.get(`stickies`,e):void 0;t&&!t.deletedAt&&t.text!==r&&eo(t.id,{text:r})},[e,r]),G(Y,{open:!!n&&!n.deletedAt,onClose:()=>{a(),t()},title:`付箋`,children:n&&G(`div`,{class:`form`,children:[G(`div`,{class:`sticky-card c-${n.color}`,children:[G(`textarea`,{rows:4,value:r,autoFocus:!n.text,placeholder:`メモを書く（〔 〕で赤シート）`,onInput:e=>i(e.target.value),onBlur:a}),G(`div`,{class:`colors`,children:[`yellow`,`pink`,`green`,`blue`].map(e=>G(`button`,{class:`c-${e} ${n.color===e?`on`:``}`,"aria-label":`色：${e}`,onClick:()=>eo(n.id,{color:e},`付箋の色を変更`)},e))})]}),n.anchor.kind===`timeline`&&G(`div`,{class:`nudge`,children:[G(`span`,{children:`位置`}),G(`button`,{class:`iconbtn sm`,"aria-label":`左へ`,onClick:()=>eo(n.id,{dx:(n.dx??0)-20},`付箋を動かす`),children:G(K,{name:`chevronLeft`})}),G(`button`,{class:`iconbtn sm`,"aria-label":`上へ`,onClick:()=>eo(n.id,{dy:(n.dy??0)-20},`付箋を動かす`),children:G(K,{name:`chevronUp`})}),G(`button`,{class:`iconbtn sm`,"aria-label":`下へ`,onClick:()=>eo(n.id,{dy:(n.dy??0)+20},`付箋を動かす`),children:G(K,{name:`chevronDown`})}),G(`button`,{class:`iconbtn sm`,"aria-label":`右へ`,onClick:()=>eo(n.id,{dx:(n.dx??0)+20},`付箋を動かす`),children:G(K,{name:`chevronRight`})}),G(`button`,{class:`btn sm`,onClick:()=>eo(n.id,{dx:0,dy:0},`付箋を元の位置に`),children:`元の位置`})]}),G(`div`,{class:`action-list`,children:[G(`button`,{onClick:()=>{a(),eo(n.id,{collapsed:!n.collapsed},n.collapsed?`付箋を開く`:`付箋を折りたたむ`),t()},children:[G(K,{name:n.collapsed?`note`:`minus`}),n.collapsed?`開いて表示する`:`小さく折りたたむ`]}),G(`button`,{class:`danger`,onClick:()=>{to(n.id),t()},children:[G(K,{name:`trash`}),`はがす（削除）`]})]})]})})}function Ds({id:e,onClose:t}){j.rev.value;let n=e?j.get(`embeds`,e):void 0;return G(Y,{open:!!n&&!n.deletedAt,onClose:t,title:n?Ho(n):``,children:n&&G(`div`,{class:`action-list`,children:[G(`button`,{onClick:()=>{n&&(t(),n.target.kind===`note`?U({tab:`notes`,openNoteId:n.target.id}):(U({tab:`map`}),Z(()=>import(`./mapState.js`).then(e=>e.n).then(e=>e.focusPin(n.target.id)),[],import.meta.url)))},children:[G(K,{name:n.target.kind===`pin`?`map2`:`external`}),n.target.kind===`pin`?`地図で見る`:`開く`]}),n.target.kind===`note`&&G(`button`,{onClick:()=>{ro(n.id,{display:n.display===`expanded`?`collapsed`:`expanded`},n.display===`expanded`?`ボタンに戻す`:`展開して表示`),t()},children:[G(K,{name:n.display===`expanded`?`minus`:`arrowsMove`}),n.display===`expanded`?`ボタンに戻す`:`年表の中に展開する`]}),G(`button`,{onClick:()=>{t(),n.target.kind===`note`&&Ba(n.target.id),io(n.id)},children:[G(K,{name:`arrowsMove`}),`別の年・列へ移す`]}),G(`button`,{class:`danger`,onClick:()=>{io(n.id),t(),q(`差し込みを外しました（ノートは消えません）`)},children:[G(K,{name:`trash`}),`差し込みを外す`]})]})})}function Os({item:e,top:t,height:n}){let r=e.embed,i=r.target.kind===`note`?j.get(`notes`,r.target.id):void 0;return G(`div`,{class:`tl-embed`,style:{top:t+`px`,height:n+`px`,"--c":`var(--era-${e.era.id})`},children:G(`div`,{class:`emb-in`,children:[G(`div`,{class:`emb-h`,children:[G(K,{name:`timelineEvent`,size:16}),G(`b`,{children:Ho(r)}),G(`small`,{children:L(r.year)}),G(`span`,{class:`sp`}),G(`button`,{class:`btn sm`,"data-eid":r.id,children:`操作`})]}),G(`div`,{class:`emb-body`,style:{height:n-52+`px`},children:i?G(it,{fallback:G(`div`,{class:`loading`,children:`読み込み中…`}),children:G(ys,{note:i,sheet:H.value.redSheet})}):G(`p`,{class:`hint`,children:`ノートが見つかりません`})})]})})}Q.EMBED_H;var ks=800,As=Q.HEAD_H+Q.ERA_H+2,js={table:`cols3`,diagram:`sitemap`,chart:`chartLine`,memo:`fileText`,board:`board`,timeline:`table`};Vo(e=>(e.target.kind===`note`?j.get(`notes`,e.target.id)?.name:j.get(`pins`,e.target.id)?.title)??`（見つかりません）`);var Ms=e=>{ut(e,`timeline`),U({tab:`map`})};function Ns({noteId:e=k,onBack:n,pane:r}){let i=j.rev.value,o=H.value,s=j.get(`notes`,e),f=c(()=>(s?.columns??[]).filter(e=>e.visible),[s]),p=j.settings.zoomLevels,h=p[0],[g,_]=d(()=>new Set);u(()=>_(new Set),[0]);let v=!r&&e===`n-main`?o.groupFilter:null,y=v?j.get(`groups`,v):void 0,b=c(()=>y?new Set(je(y).map(e=>e.id)):null,[y,i]),S=c(()=>j.list(`terms`).filter(t=>t.noteId===e),[i,e]),C=c(()=>j.list(`embeds`).filter(t=>t.noteId===e),[i,e]),w=c(()=>no(e),[i,e]),T=c(()=>o.showArrows?j.list(`arrows`).filter(t=>t.noteId===e):[],[i,e,o.showArrows]),E=c(()=>new Set(j.list(`stickies`).flatMap(e=>e.anchor.kind===`term`?[e.anchor.termId]:[])),[i]),D=o.weakFilter,O=c(()=>uo({terms:S,columns:f,level:h,eras:N.eras,gengo:N.gengo,gengoTo:N.gengoCoverage.to,weakBonus:j.settings.weakBonus,filter:D||b?e=>(!D||e.weakness>=D)&&(!b||b.has(e.id)):void 0,embeds:b?[]:C,stickies:b?[]:w,expanded:g}),[S,f,h,D,j.settings.weakBonus,b,C,w,g]),A=j.settings.redSheet,ee=c(()=>{let e=new Set;for(let t of A.groups??[]){let n=j.get(`groups`,t);if(n&&!n.deletedAt)for(let t of je(n))e.add(t.id)}return e},[A.groups,i]),M=c(()=>{let e=is(o.redSheet,A,ts.value,ns.value);return!o.redSheet||ns.value||!ee.size?e:t=>e(t)||ee.has(t.id)&&!ts.value.has(t.id)},[o.redSheet,A,ts.value,ns.value,ee]),[te,ne]=d(0),re=j.settings.tlText??0;ho(re);let ie=c(()=>yo(S,f),[S,f,te,re]),P=c(()=>Jo(O,f,M,ie),[O,f,M,te,ie,re]),F=t(null),I=t(null),oe=t(null),L=t(null),se=t(null),ce=t(null),le=t(null),ue=t(null),de=t(null),fe=t(null),pe=()=>le.current??se.current,me=t(0),he=t(null),ge=t(null),_e=t(0),ve=t(600),ye=t([0,0]),[,be]=d(0),xe=t(null),Ce=t(P),we=t(O),Ee=t(0);Ce.current=P,we.current=O,Ee.current=0;let De=r?r.initialYear:o.focusYear,R=t({year:De,screenY:As}),[Oe,ke]=d(null),[Me,Ne]=d(null),[Pe,z]=d(null),[Fe,Le]=d(null),[B,Re]=d(null),[ze,Be]=d(!1),[Ve,He]=d(null),[Ue,We]=d(null),[Ge,Ke]=d(null),[qe,Je]=d(null);a(()=>{let e=getComputedStyle(document.documentElement).getPropertyValue(`--sans`).trim();Eo(e),ne(e=>e+1),document.fonts?.ready.then(()=>{Eo(e),ne(e=>e+1)})},[]);let Ye=t(O.items.length>0);!Ye.current&&O.items.length>0&&(Ye.current=!0,R.current={year:r?r.initialYear:H.value.focusYear,screenY:As});let Xe=t(null);if(!R.current&&Xe.current&&Xe.current.geo!==P&&F.current){let e=$o(Xe.current.items,Xe.current.geo,F.current.scrollTop+As-Q.HEAD_H);e!=null&&(R.current={year:e,screenY:As})}Xe.current={geo:P,items:O.items};let Ze=t(r?.follow?.seq??0);if(r?.follow&&r.follow.seq!==Ze.current&&(Ze.current=r.follow.seq,R.current={year:r.follow.year,screenY:As}),R.current){let e=R.current,t=Qo(O.items,P,e.year,fo);_e.current=Math.max(0,Math.min(Math.max(0,Q.HEAD_H+P.total+Q.BOTTOM_PAD-ve.current),t-(e.screenY-Q.HEAD_H)))}let Qe=Math.max(0,Zo(P,_e.current-ks)),$e=Math.min(O.items.length-1,Zo(P,_e.current+ve.current+ks));ye.current=[Qe,$e];let et=t(!1);a(()=>{let e=F.current;ve.current=e.clientHeight,!me.current&&!r&&o.scrollX&&(me.current=o.scrollX,e.scrollLeft=o.scrollX),R.current&&=(et.current=!!r,e.scrollTop=_e.current,null),rt(),tt()});function tt(){let e=he.current,t=pe(),n=L.current,r=I.current;if(!e||!t||!n||!r||(he.current=null,matchMedia(`(prefers-reduced-motion: reduce)`).matches))return;let i=r.getBoundingClientRect(),a=e=>e.bottom>i.top-300&&e.top<i.bottom+300,o=new Set,s=[];t.classList.add(`morph`),t.querySelectorAll(`[data-tid]`).forEach(t=>{let n=t.getBoundingClientRect();if(!a(n))return;let r=e.chips.get(t.dataset.tid);if(t.style.transition=`none`,r){o.add(t.dataset.tid);let e=r.left-n.left,i=r.top-n.top;if(Math.abs(e)+Math.abs(i)<1)return;t.style.transform=`translate(${e}px, ${i}px)`}else t.style.opacity=`0`;s.push(t)}),t.querySelectorAll(`.tl-yrs .yr-in`).forEach(e=>{a(e.getBoundingClientRect())&&(e.style.transition=`none`,e.style.opacity=`0`,s.push(e))});let c=[],l=(e,t)=>{let r=e.cloneNode(!0);r.style.left=t.left-i.left+`px`,r.style.top=t.top-i.top+`px`,r.style.width=t.width+`px`,r.style.height=t.height+`px`,r.style.transform=``,r.style.opacity=`1`,n.appendChild(r),c.push(r)};for(let t of e.clones)o.has(t.id)||l(t.el,t.r);for(let t of e.yrs)l(t.el,t.r);t.offsetWidth;for(let e of s)e.style.transition=`transform 260ms cubic-bezier(.2,.8,.25,1), opacity 220ms ease-out`,e.style.transform=``,e.style.opacity=``;requestAnimationFrame(()=>{for(let e of c)e.style.opacity=`0`}),setTimeout(()=>{for(let e of c)e.remove();t.classList.remove(`morph`);for(let e of s)e.style.transition=``},300)}let nt=t(null);function rt(){let e=F.current,t=ge.current;if(!e||!t)return;let n=Ce.current,r=we.current.items,i=e.scrollTop,a=Zo(n,i);if(a<0){t.style.opacity=`0`;return}let o=a;for(;o<r.length&&r[o].kind===`era`;)o++;let s=(r[Math.min(o,r.length-1)]??r[a]).era,c=0;for(let e=a+1;e<Math.min(r.length,a+4);e++)if(r[e].kind===`era`){let t=n.offsets[e]-i;t<Q.ERA_H&&(c=t-Q.ERA_H);break}if(p[Ee.current].bucket===`era`){t.style.opacity=`0`;return}t.style.opacity=`1`,t.style.transform=`translateY(${c}px)`,t.style.setProperty(`--c`,`var(--era-${s.id})`),t.dataset.era!==s.id&&(t.dataset.era=s.id,t.querySelector(`b`).textContent=s.name,t.querySelector(`small`).textContent=s.label??`${s.from}〜${s.to<9999?s.to:``}`)}let it=t(null),V=()=>{ht();let e=F.current;_e.current=e.scrollTop,ve.current=e.clientHeight,e.scrollLeft!==me.current&&(me.current=e.scrollLeft,nt.current&&clearTimeout(nt.current),r||(nt.current=setTimeout(()=>U({scrollX:me.current}),300)));let t=Ce.current,n=Zo(t,_e.current-ks/2),i=Zo(t,_e.current+ve.current+ks/2),[a,o]=ye.current;(n<a||i>o)&&be(e=>e+1),rt(),it.current&&clearTimeout(it.current),it.current=setTimeout(()=>{if(et.current){et.current=!1;return}let t=$o(we.current.items,Ce.current,e.scrollTop+As-Q.HEAD_H);t!=null&&(r?r.onYear(t):ut(t,`timeline`))},120)};u(()=>{if(!Oe)return;let e=setTimeout(()=>ke(null),1400);return()=>clearTimeout(e)},[Oe]),u(()=>{let e=F.current,t=new ResizeObserver(()=>{ve.current=e.clientHeight,be(e=>e+1)});return t.observe(e),()=>t.disconnect()},[]),u(()=>{if(r)return;let e=dt.value;if(!e)return;dt.value=null;let t=e.level??Ee.current;if(e.termId){let n=j.get(`terms`,e.termId);if(n&&!so(n,p[t],j.settings.weakBonus))for(;t>0&&!so(n,p[t],j.settings.weakBonus);)t--;pt.value=e.termId,setTimeout(()=>{pt.value===e.termId&&(pt.value=null)},2600)}R.current={year:e.year,screenY:Q.HEAD_H+Math.round(ve.current*.35)},t!==Ee.current||be(e=>e+1)},[dt.value]);let at=t(null),ot=t(null),st=t(null),ct=e=>e.clientY-(I.current??F.current).getBoundingClientRect().top,lt=e=>{let t=e.target,n=t.closest(`[data-arrow]`);if(n){We(n.dataset.arrow);return}let r=t.closest(`[data-sticky]`);if(r){Ke(r.dataset.sticky);return}let i=t.closest(`[data-eid]`);if(i){Je(i.dataset.eid);return}let a=t.closest(`[data-tid]`);if(a){let e=a.dataset.tid,t=vs.value;if(t){t!==e&&(vs.value=null,He({from:t,to:e}));return}if(B){let t=new Set(B);t.has(e)?t.delete(e):t.add(e),Re(t);return}if(a.classList.contains(`mask`)){os(e);return}if(H.value.redSheet&&a.classList.contains(`peeled`)){ss(e);return}if(H.value.weakPen){let t=x(e);q(t?`苦手度 ${t}`:`苦手度を解除`,{ms:1400,key:`pen`});return}U({openTermId:e});return}let o=t.closest(`[data-more],[data-less]`);if(o){let t=o.closest(`[data-cell]`)?.dataset.cell,n=p[Ee.current]?.bucket;t&&(o.dataset.less||typeof n==`number`&&n<=2)?_(e=>{let n=new Set(e);return o.dataset.less?n.delete(t):n.add(t),n}):(Ee.current-1,ct(e));return}let s=performance.now(),c=at.current;c&&s-c.t<320&&Math.hypot(e.clientX-c.x,e.clientY-c.y)<30?(at.current=null,Ee.current-1,ct(e)):at.current={t:s,x:e.clientX,y:e.clientY}},ft=t(new Set),W=e=>{if(ft.current.add(e.pointerId),ft.current.size>1){ht();return}let t=e.target.closest(`[data-cell]`);t&&!e.target.closest(`[data-tid],[data-more],[data-less],[data-eid]`)&&(st.current={x:e.clientX,y:e.clientY},ot.current&&clearTimeout(ot.current),ot.current=setTimeout(()=>{if(ot.current=null,ft.current.size>1)return;let[e,n]=t.dataset.cell.split(`|`);Le({col:e,year:+n}),navigator.vibrate?.(10)},550))},mt=e=>{ft.current.delete(e.pointerId),ht()},ht=e=>{e&&st.current&&Math.hypot(e.clientX-st.current.x,e.clientY-st.current.y)<8&&e.type===`pointermove`||(ot.current&&=(clearTimeout(ot.current),null))},gt=e=>s?.columns?.find(t=>t.id===e)?.name??e,_t=r?r.follow?.year??r.initialYear:o.focusYear,vt=ae(Math.floor(_t),N.eras),yt=c(()=>new Set(O.items.flatMap(e=>e.kind===`row`?[e.era.id]:[])),[O]),bt=e=>{let t=N.eras.find(t=>t.id===e);R.current={year:t.from,screenY:As},be(e=>e+1),r?r.onYear(t.from):ut(t.from,`timeline`)},xt=N.eras.findIndex(e=>e.id===vt.id),St=Math.max(0,Math.min(1,(_t-vt.from)/Math.max(1,Math.min(vt.to,2030)-vt.from))),Ct=t(null);u(()=>{(Ct.current?.querySelector(`.era-chip.on`))?.scrollIntoView({block:`nearest`,inline:`center`,behavior:`smooth`})},[vt.id]);let wt=O.items,Tt=[],Et=[],Dt=[];for(let e=Qe;e<=$e&&e<wt.length;e++){let t=wt[e];t.kind===`era`?Dt.push(G(Fs,{era:t.era,top:P.offsets[e]},t.key)):t.kind===`embed`?Dt.push(G(Os,{item:t,top:P.offsets[e],height:P.heights[e]},t.key)):(Tt.push(G(Is,{item:t,top:P.offsets[e],height:P.heights[e]},t.key)),Et.push(G(Ls,{item:t,top:P.offsets[e],height:P.heights[e],columns:f,geo:P,isMasked:M,stickyIds:E,hl:pt.value,sel:B},t.key)))}let Ot=c(()=>{let e=new Map;return wt.forEach((t,n)=>{if(t.kind===`row`)for(let r of Object.values(t.cells)){for(let t of r.points)e.set(t.id,n);for(let t of r.spans)(t.start||!e.has(t.term.id))&&e.set(t.term.id,n)}}),e},[O]),kt=new Map,At=e=>{let t=Ot.get(e);if(t==null)return null;let n=kt.get(t);return n||(n=es(wt[t],P.offsets[t],f,P,M),kt.set(t,n)),n.get(e)??null},jt=[];for(let e of T){let t=Ot.get(e.from),n=Ot.get(e.to);if(t==null||n==null||Math.max(t,n)<Qe||Math.min(t,n)>$e)continue;let r=At(e.from),i=At(e.to);if(!r||!i)continue;let a={...r,x:r.x-Q.YEAR_W},o={...i,x:i.x-Q.YEAR_W};jt.push({a:e,d:Ps(a,o),mid:{x:(a.x+a.w/2+o.x+o.w/2)/2,y:(a.y+a.h/2+o.y+o.h/2)/2}})}let Mt=[];for(let e of O.items.length?w:[]){if(e.anchor.kind!==`timeline`)continue;let t=f.findIndex(t=>t.id===e.anchor.col);if(t<0)continue;let n=fo(wt,e.anchor.year);n<Qe||n>$e||Mt.push({s:e,x:P.colX[t]-Q.YEAR_W+10+(e.dx??0),y:P.offsets[n]+8+(e.dy??0)})}let Nt=e===`n-main`?`全体年表`:s?.name??`年表`,Pt=Te(s?.folderId),Ft=B&&G(`div`,{class:`sel-bar`,children:[G(`span`,{class:`t`,children:[B.size,`語を選択`]}),G(`button`,{disabled:!B.size,onClick:()=>Be(!0),children:[G(K,{name:`stack`}),`グループ`]}),G(`button`,{disabled:B.size<2,onClick:()=>{let e=Se([...B]);e&&(Re(null),U({tab:`notes`,openNoteId:e.id}))},children:[G(K,{name:`cols3`}),`比較表`]}),G(`button`,{disabled:!B.size,onClick:()=>{for(let e of B){let t=j.get(`terms`,e);t&&!t.hide&&m(e,{hide:!0},`「${t.name}」を赤シートの対象に`)}q(`${B.size}語を赤シートの対象にしました`),Re(null)},children:[G(K,{name:`eyeOff`}),`赤シート`]}),G(`button`,{disabled:!B.size,onClick:()=>{let e=Ae({links:[...B].map(e=>({kind:`term`,id:e}))});Re(null),U({tab:`weak`,weakSeg:`memos`,openWeakMemoId:e.id})},children:[G(K,{name:`note`}),`苦手メモ`]}),G(`button`,{class:`end`,onClick:()=>Re(null),children:`終わる`})]}),It=P.totalW-Q.YEAR_W,Lt=(t,n,r)=>G(`div`,{class:`tl-body ${o.weakPen?`pen`:``} ${B?`selecting`:``} ${vs.value?`picking`:``}`,ref:n,style:{width:P.totalW+`px`,height:P.total+Q.BOTTOM_PAD+`px`},children:[G(`div`,{class:`tl-yrs`,style:{height:P.total+`px`},children:Tt}),G(`div`,{class:`tl-h`,ref:r,children:G(`div`,{class:`tl-hin`,style:{width:It+`px`,height:P.total+Q.BOTTOM_PAD+`px`},children:[Et,jt.length>0&&G(`svg`,{class:`tl-arrows`,width:It,height:P.total,"aria-hidden":`true`,children:[G(`defs`,{children:G(`marker`,{id:`ah-${e}`,viewBox:`0 0 10 10`,refX:`8`,refY:`5`,markerWidth:`7`,markerHeight:`7`,orient:`auto-start-reverse`,children:G(`path`,{d:`M0 0 L10 5 L0 10 z`,class:`ah`})})}),jt.map(({a:t,d:n})=>G(`g`,{children:[G(`path`,{d:n,class:`ar`,"marker-end":`url(#ah-${e})`}),G(`path`,{d:n,class:`ar-hit`,"data-arrow":t.id})]},t.id))]}),jt.map(({a:e,mid:t})=>e.label?G(`button`,{class:`ar-label`,"data-arrow":e.id,style:{left:t.x+`px`,top:t.y+`px`},children:e.label},e.id):null),Mt.map(({s:e,x:t,y:n})=>G(`button`,{class:`tl-sticky c-${e.color} ${e.collapsed?`folded`:``}`,"data-sticky":e.id,style:{left:t+`px`,top:n+`px`},children:e.collapsed?G(K,{name:`sticker`,size:16}):G(l,{children:[G(`span`,{class:`sh`,children:[G(K,{name:`pin`,size:13}),`付箋`]}),G(`span`,{class:`tx`,children:e.text||`（空の付箋）`})]})},e.id))]})}),Dt]},t),Rt;if(de.current)Rt=[de.current,Lt(`live`,le,ue)];else{let e=Lt(`body`,se,ce);fe.current=e,Rt=[e]}return G(`div`,{class:`view tl-view ${r?`pane`:``}`,children:[G(`header`,{class:`appbar`,children:[n&&G(`button`,{class:`iconbtn`,"aria-label":`戻る`,onClick:n,children:G(K,{name:`chevronLeft`})}),G(`div`,{class:`tt`,children:[!r&&G(`div`,{class:`crumb`,children:[`ノート`,Pt.map(e=>G(l,{children:[G(K,{name:`chevronRight`}),e.name]})),G(K,{name:`chevronRight`}),`年表`]}),G(`h1`,{class:`title`,children:Nt})]}),!r&&G(`button`,{class:`iconbtn`,"aria-label":`検索`,onClick:()=>Ca(),children:G(K,{name:`search`})}),!r&&G(`button`,{class:`iconbtn`,"aria-label":`元に戻す`,disabled:!j.canUndo.value,onClick:Lr,children:G(K,{name:`undo`})}),!r&&G(`button`,{class:`iconbtn`,"aria-label":`やり直し`,disabled:!j.canRedo.value,onClick:Rr,children:G(K,{name:`redo`})}),r&&G(`button`,{class:`tool zoom sm`,onClick:()=>z(`view`),children:[G(K,{name:`columns`}),`表示`]})]}),!r&&G(l,{children:[G(`div`,{class:`erarail`,ref:Ct,children:N.eras.filter(e=>e.id!==`reiwa`||yt.has(`reiwa`)).map(e=>G(`button`,{class:`era-chip ${e.id===vt.id?`on`:``} ${yt.has(e.id)?``:`nodata`}`,style:{"--c":`var(--era-${e.id})`},onClick:()=>bt(e.id),children:e.name.replace(`時代`,``)},e.id))}),G(`div`,{class:`ruler`,"aria-hidden":`true`,children:[N.eras.map(e=>G(`span`,{class:e.id===vt.id?`on`:``,style:{"--c":`var(--era-${e.id})`}},e.id)),G(`span`,{class:`mk`,style:{left:`calc(${(xt+St)/N.eras.length*100}% - 1px)`}})]}),G(`div`,{class:`tools`,children:[G(`button`,{class:`tool ${o.redSheet?`sheet-on`:``}`,onClick:()=>{U({redSheet:!o.redSheet}),cs()},children:[G(K,{name:`eyeOff`}),`赤シート`]}),G(`button`,{class:`tool`,onClick:()=>z(`view`),children:[G(K,{name:`columns`}),`表示`,D?G(`small`,{children:[`苦手`,D,`+`]}):null]}),G(`button`,{class:`tool ${o.weakPen?`pen-on`:``}`,onClick:()=>U({weakPen:!o.weakPen}),children:[G(K,{name:`ballpen`}),`苦手ペン`]}),G(`button`,{class:`tool icon`,onClick:()=>z(`more`),"aria-label":`ほかの操作`,children:G(K,{name:`dots`})})]})]}),o.redSheet&&!r&&G(`div`,{class:`subbar rs`,children:[G(`span`,{class:`t`,children:[us(A,gt),(A.groups??[]).length?`・グループ`:``,`を隠す`]}),G(`button`,{onClick:ls,children:`全部めくる`}),G(`button`,{onClick:cs,children:`全部隠す`}),G(`button`,{onClick:()=>z(`red`),"aria-label":`隠す対象`,children:G(K,{name:`adjust`})})]}),o.weakPen&&!r&&G(`div`,{class:`subbar pen`,children:[G(`span`,{class:`t`,children:`苦手ペン：用語をタップするたびに なし→1→2→3`}),G(`button`,{onClick:()=>U({weakPen:!1}),children:`終わる`})]}),y&&G(`div`,{class:`subbar grp`,children:[G(K,{name:`stack`}),G(`span`,{class:`t`,children:[`グループ「`,y.name,`」だけ表示`]}),G(`button`,{onClick:()=>U({openGroupId:y.id}),children:`詳細`}),G(`button`,{onClick:()=>U({groupFilter:null}),children:`解除`})]}),vs.value&&!r&&G(`div`,{class:`subbar arrow`,children:[G(K,{name:`arrowRight`}),G(`span`,{class:`t`,children:[`矢印の行き先の用語をタップ（「`,j.get(`terms`,vs.value)?.name,`」から）`]}),G(`button`,{onClick:()=>{vs.value=null},children:`やめる`})]}),G(`div`,{class:`tl-wrap`,ref:I,style:go(),children:[G(`div`,{class:`tl-v`,ref:F,onScroll:V,onClick:lt,onPointerDown:W,onPointerUp:mt,onPointerMove:ht,onPointerCancel:mt,onPointerLeave:mt,children:[G(`div`,{class:`tl-head`,style:{width:P.totalW+`px`},children:[G(`div`,{class:`yr-h`,children:`年`}),G(`div`,{class:`cols`,ref:oe,children:f.map((e,t)=>G(`div`,{style:{width:P.colW[t]+`px`},children:e.name},e.id))})]}),Rt,!wt.length&&G(`div`,{class:`tl-empty`,children:S.length?`表示する用語がありません（「表示」の絞り込みを確かめてください）`:`用語がまだありません。右下の＋から追加できます`})]}),G(`div`,{class:`era-sticky`,ref:ge,"aria-hidden":`true`,children:[G(`b`,{}),G(`small`,{})]}),G(`div`,{class:`tl-ghosts`,ref:L,"aria-hidden":`true`})]}),B?Ft:!r&&G(`button`,{class:`fab`,"aria-label":`用語を追加`,onClick:()=>Ne({year:Math.floor(o.focusYear)}),children:G(K,{name:`plus`})}),G(ds,{preset:Me,onClose:()=>Ne(null),columns:s?.columns??[],noteId:e}),G(fs,{open:Pe===`view`,onClose:()=>z(null),level:0,onLevel:e=>void 0,noteId:e}),G(ps,{open:Pe===`red`,onClose:()=>z(null),columns:s?.columns??[]}),G(Ss,{open:Pe===`more`,onClose:()=>z(null),noteId:e,onSelect:()=>{Re(new Set),z(null)},onMap:()=>{z(null),Ms(Math.floor(o.focusYear))},onCompare:()=>{z(null),Ai({kind:`timeline`,id:e})},onImage:()=>{z(null),xe.current?.click()}}),G(`input`,{ref:xe,type:`file`,accept:`image/*`,hidden:!0,onChange:async t=>{let n=t.target.files?.[0];t.target.value=``,n&&await qa(e,Math.floor(o.focusYear),n)}}),G(bs,{at:Fe,noteId:e,onClose:()=>Le(null),onAdd:e=>{Le(null),Ne(e)}}),G(Cs,{open:ze,count:B?.size??0,onClose:()=>Be(!1),onCreate:e=>{let t=Ie(e,[...B??[]].map(e=>({kind:`term`,id:e})));Be(!1),Re(null),`${t.name}`}}),G(ws,{pair:Ve,noteId:e,onClose:()=>He(null)}),G(Ts,{id:Ue,onClose:()=>We(null)}),G(Es,{id:Ge,onClose:()=>Ke(null)}),G(Ds,{id:qe,onClose:()=>Je(null)})]})}function Ps(e,t){let n={x:e.x+e.w/2,y:e.y+e.h/2},r={x:t.x+t.w/2,y:t.y+t.h/2};if(Math.abs(r.y-n.y)<10){let i=r.x>n.x,a=i?e.x+e.w:e.x,o=i?t.x-2:t.x+t.w+2,s=Math.min(40,Math.abs(o-a)/2+10);return`M${a} ${n.y} C ${a+(i?s:-s)} ${n.y-26}, ${o-(i?s:-s)} ${r.y-26}, ${o} ${r.y}`}let i=r.y>n.y,a=i?e.y+e.h:e.y,o=i?t.y-2:t.y+t.h+2,s=Math.min(80,Math.abs(o-a)*.45);return`M${n.x} ${a} C ${n.x} ${a+(i?s:-s)}, ${r.x} ${o-(i?s:-s)}, ${r.x} ${o}`}var Fs=Ke(({era:e,top:t})=>G(`div`,{class:`tl-era`,"data-era":e.id,style:{top:t+`px`,"--c":`var(--era-${e.id})`},children:G(`div`,{class:`lbl`,children:[e.name,G(`span`,{class:`yrs`,children:e.label??`${e.from}〜${e.to<9999?e.to:``}`})]})})),Is=Ke(({item:e,top:t,height:n})=>G(`div`,{class:`yr ${e.gapBefore?`gap`:``}`,style:{top:t+`px`,height:n+`px`,"--c":`var(--era-${e.era.id})`},children:G(`div`,{class:`yr-in`,children:[G(`b`,{class:Yo(e.label)?`sm`:void 0,children:e.label}),e.sub&&G(`small`,{children:e.sub})]})})),Ls=Ke(({item:e,top:t,height:n,columns:r,geo:i,isMasked:a,stickyIds:o,hl:s,sel:c})=>G(`div`,{class:`tl-row ${e.gapBefore?`gap`:``}`,style:{top:t+`px`,height:n+`px`,width:i.totalW-Q.YEAR_W+`px`,"--c":`var(--era-${e.era.id})`},children:r.map((t,n)=>{let r=e.cells[t.id],l=qo(r),u=Ko(i.colW[n],l);return G(`div`,{class:`cell`,"data-cell":`${t.id}|${e.from}`,style:{width:i.colW[n]+`px`,paddingLeft:Q.CELL_PAD+l+`px`},children:[r?.spans.map(e=>G(Rs,{s:e},e.term.id)),r?.embeds.map(e=>G(zs,{e,inner:u},e.id)),r&&zo(r).map(e=>G(Bs,{t:e.t,inner:u,masked:a(e.t),sticky:o.has(e.t.id),span:e.span||ao(e.t),cont:e.cont,yt:No(e.t,!!r.coarse,e.span),hl:s===e.t.id,selected:!!c?.has(e.t.id)},e.t.id)),r?.more?G(`button`,{class:`more-chip`,"data-more":`1`,style:{width:Ro(Lo(r)).w+`px`},children:Lo(r)}):r?.less?G(`button`,{class:`more-chip less`,"data-less":`1`,style:{width:Ro(Lo(r)).w+`px`},children:Lo(r)}):null]},t.id)})}));function Rs({s:e}){let t=e.term;return G(`i`,{class:`ln ${e.start?`s`:``} ${e.end?`e`:``} t${bo(t.importance)} ${t.weakness?`wk`+t.weakness:``}`,style:{left:Q.CELL_PAD+e.lane*Q.LANE_W+3+`px`}})}function zs({e,inner:t}){let n=Uo(e,t),r=e.target.kind===`pin`?`pin`:j.get(`notes`,e.target.id)?.kind??`memo`;return G(`button`,{class:`embed-chip k-${r}`,"data-eid":e.id,style:{width:n.w+`px`,minHeight:n.h+`px`},children:[G(K,{name:r===`pin`?`mapPin`:js[r]??`note`,size:15}),G(`span`,{children:Ho(e)})]})}function Bs({t:e,inner:t,masked:n,sticky:r,span:i,cont:a,yt:o=``,hl:s,selected:c}){let l=Po(e,t,n,o),u=e.weakness?` wk${e.weakness}`:``;return n?G(`button`,{class:`mask${u}${c?` sel`:``}`,"data-tid":e.id,"aria-label":`隠れた用語（タップでめくる）`,style:{width:l.w+`px`}}):G(`button`,{class:`term t${bo(e.importance)}${u}${e.status===`unverified`?` unv`:``}${r?` has-sticky`:``}${i?` span-start`:``}${a?` cont`:``}${s?` hl`:``}${c?` sel`:``}${ts.value.has(e.id)?` peeled`:``}${Date.now()-(as.get(e.id)??0)<600?` peeling`:``}`,"data-tid":e.id,style:{width:l.w+`px`,minHeight:l.h+`px`},children:[G(`span`,{class:`tx`,children:l.lines?l.lines.map((e,t)=>t?[G(`br`,{}),e]:e):e.name}),l.years&&G(`small`,{class:`yrs ${l.years}`,children:o})]})}s(0);function Vs(){j.rev.value;let e=H.value.openTermId,t=e?j.get(`terms`,e):void 0,n=!!t&&!t.deletedAt,r=()=>U({openTermId:null});return u(()=>{e&&(!t||t.deletedAt)&&r()},[e,t]),G(Y,{open:n,onClose:r,class:`term-sheet`,children:t&&G(Us,{t,onClose:r},t.id)})}var Hs=e=>{let t=`${L(e.from)}${e.from>0?`年`:``}`,n=fe(e.from,N.gengo,N.gengoCoverage.to),r=e.to!=null&&e.to!==e.from?`〜${L(e.to)}${e.to>0?`年`:``}`:``;return`${e.approx?`約`:``}${t}${r}${n&&!r?`・${n}`:``}`};function Us({t:e,onClose:n}){let r=j.get(`notes`,e.noteId??`n-main`)?.columns??[],i=r.find(t=>t.id===e.col),a=ae(e.when.from,N.eras),o=E(e.id),[s,c]=d(!1),[f,p]=d(e.name),[h,g]=d(e.yomi??``),[y,x]=d(e.desc),[C,w]=d(o?.text??``),[T,D]=d(!e.desc),[O,k]=d(!1),[ee,M]=d(``),[te,ne]=d(String(e.when.from)),[re,ie]=d(e.when.to==null?``:String(e.when.to));u(()=>{x(e.desc)},[e.desc]),u(()=>{w(E(e.id)?.text??``)},[o?.text]);let P=()=>{let t=j.get(`terms`,e.id);t&&!t.deletedAt&&y!==t.desc&&m(e.id,{desc:y},`「${e.name}」の説明を編集`)},F=()=>{let t=j.get(`terms`,e.id);t&&!t.deletedAt&&A(e.id,C)},I=t({saveDesc:P,saveSticky:F});I.current={saveDesc:P,saveSticky:F},u(()=>()=>{I.current.saveDesc(),I.current.saveSticky()},[]);let oe=()=>{let t=parseInt(te,10),n=re.trim()?parseInt(re,10):void 0;if(!f.trim()||Number.isNaN(t)||n!=null&&(Number.isNaN(n)||n<t))return!1;let r={...e.when,from:t,to:n};return n??delete r.to,m(e.id,{name:f,yomi:h.trim()||void 0,when:r,shape:n!=null&&n>t?e.shape===`point`?`span`:e.shape:`point`}),!0};return G(`div`,{class:`tsheet`,children:[G(`div`,{class:`sheet-top`,children:[G(`span`,{class:`pill era`,style:{"--c":`var(--era-${a.id})`},children:a.name}),G(`button`,{class:`pill`,onClick:()=>c(!s),children:Hs(e.when)}),G(`label`,{class:`pill sel`,children:[i?.name??e.col,G(`select`,{value:e.col,onChange:t=>m(e.id,{col:t.target.value},`「${e.name}」を「${r.find(e=>e.id===t.target.value)?.name}」へ移動`),"aria-label":`列を変える（移動）`,children:r.map(e=>G(`option`,{value:e.id,children:e.name},e.id))})]}),G(`span`,{class:`sp`}),G(`button`,{class:`iconbtn`,"aria-label":`編集`,onClick:()=>c(!s),children:G(K,{name:s?`check`:`ballpen`})})]}),s?G(`div`,{class:`edit-basic`,children:[G(`label`,{class:`fld`,children:[G(`span`,{children:`名前`}),G(`input`,{value:f,onInput:e=>p(e.target.value)})]}),G(`label`,{class:`fld`,children:[G(`span`,{children:`読み`}),G(`input`,{value:h,placeholder:`（なくてもよい）`,onInput:e=>g(e.target.value)})]}),G(`div`,{class:`fld-row`,children:[G(`label`,{class:`fld`,children:[G(`span`,{children:`年（始まり）`}),G(`input`,{inputMode:`numeric`,value:te,onInput:e=>ne(e.target.value)})]}),G(`label`,{class:`fld`,children:[G(`span`,{children:`終わり（期間なら）`}),G(`input`,{inputMode:`numeric`,value:re,placeholder:`なし`,onInput:e=>ie(e.target.value)})]})]}),G(`p`,{class:`hint`,children:`紀元前は「-」を付けます（前300年 → -300）。`}),G(`button`,{class:`btn primary wide`,onClick:()=>{oe()&&c(!1)},children:`保存`})]}):G(l,{children:[G(`h2`,{class:`term-title`,children:e.name}),e.yomi&&G(`div`,{class:`yomi`,children:e.yomi})]}),G(`div`,{class:`verify`,children:e.status===`unverified`?G(l,{children:[G(`span`,{class:`unv-badge`,children:[G(K,{name:`sparkles`}),`AI作成・未確認`]}),G(`button`,{class:`linkbtn`,onClick:()=>_(e.id,!0),children:[G(K,{name:`circleCheck`}),`教科書で確認した`]})]}):G(l,{children:[G(`span`,{class:`ok-badge`,children:[G(K,{name:`circleCheck`}),e.author===`me`?`自分で作成`:`確認済み`]}),e.author===`ai`&&G(`button`,{class:`linkbtn sub`,onClick:()=>_(e.id,!1),children:`未確認に戻す`})]})}),G(`div`,{class:`f-label`,children:[`苦手度`,G(`small`,{children:`もう一度押すと解除`})]}),G(`div`,{class:`seg weak`,children:[0,1,2,3].map(t=>G(`button`,{class:e.weakness===t?`on`:``,style:{"--wc":t?`var(--w${t})`:`var(--ink-4)`},onClick:()=>{let n=e.weakness===t?0:t;v(e.id,n),n&&`${n}`},children:t?G(l,{children:[G(`i`,{}),t]}):`なし`},t))}),G(`div`,{class:`f-label`,children:[`重要度`,G(`small`,{children:e.importanceBy===`ai`?`AIの初期値（変更できます）`:`自分で設定`})]}),G(`div`,{class:`imp10`,role:`radiogroup`,"aria-label":`重要度`,children:[Array.from({length:10},(e,t)=>t+1).map(t=>G(`button`,{role:`radio`,"aria-checked":e.importance===t,"aria-label":`重要度${t}`,class:t<=e.importance?`on`:``,style:{height:10+t*2.2+`px`},onClick:()=>S(e.id,t)},t)),G(`div`,{class:`imp-txt`,children:[G(`b`,{children:e.importance}),Br[e.importance]]})]}),G(`div`,{class:`f-label`,children:`形`}),G(`div`,{class:`seg two`,children:[G(`button`,{class:e.shape===`point`?`on`:``,onClick:()=>m(e.id,{shape:`point`},`「${e.name}」を単発に`),children:`単発（出来事）`}),G(`button`,{class:e.shape===`span`?`on`:``,onClick:()=>{if(e.when.to==null||e.when.to<=e.when.from){c(!0);return}m(e.id,{shape:`span`},`「${e.name}」を期間に`)},children:`期間（線で表示）`})]}),e.shape===`span`&&e.when.to==null&&G(`p`,{class:`hint`,children:`期間にするには「終わり」の年を入れてください。`}),G(`div`,{class:`f-label`,children:[`説明`,G(`small`,{children:`〔 〕で囲んだ語は赤シートで隠れます`})]}),T||!e.desc?G(`textarea`,{class:`desc`,rows:3,value:y,placeholder:`説明を書く…`,onInput:e=>x(e.target.value),onBlur:()=>{P(),y&&D(!1)}}):G(`div`,{class:`desc dview`,onClick:()=>D(!0),children:G(Hi,{text:e.desc,sheet:H.value.redSheet})}),G(`div`,{class:`f-label`,children:`付箋`}),G(`div`,{class:`sticky-card c-${o?.color??`yellow`}`,children:[G(`textarea`,{rows:2,value:C,placeholder:`短いメモ（表に印が付きます）`,onInput:e=>w(e.target.value),onBlur:F}),o&&G(`div`,{class:`colors`,children:[`yellow`,`pink`,`green`,`blue`].map(t=>G(`button`,{class:`c-${t} ${o.color===t?`on`:``}`,"aria-label":`付箋の色：${t}`,onClick:()=>A(e.id,C||o.text,t)},t))})]}),G(`div`,{class:`f-label`,children:`つながり`}),G(`div`,{class:`links`,children:[Ee(e.id).map(e=>G(`button`,{class:`lk`,onClick:()=>U({openGroupId:e.id}),children:[G(K,{name:`stack`}),G(`span`,{class:`grow`,children:[e.name,G(`span`,{class:`sub`,children:`グループ`})]}),G(K,{name:`chevronRight`})]},e.id)),xe(e.id).map(e=>G(`button`,{class:`lk`,onClick:()=>U({tab:`weak`,weakSeg:`memos`,openWeakMemoId:e.id}),children:[G(K,{name:`note`}),G(`span`,{class:`grow`,children:[e.title||`苦手メモ`,G(`span`,{class:`sub`,children:e.status===`done`?`解決`:e.status===`doing`?`取組中`:`未解決`})]}),G(K,{name:`chevronRight`})]},e.id)),j.list(`arrows`).filter(t=>t.from===e.id||t.to===e.id).map(t=>{let n=j.get(`terms`,t.from===e.id?t.to:t.from);return G(`button`,{class:`lk`,onClick:()=>n&&U({openTermId:n.id}),children:[G(K,{name:`arrowRight`}),G(`span`,{class:`grow`,children:[t.from===e.id?`→ `:`← `,n?.name,t.label&&G(`span`,{class:`sub`,children:[`〈`,t.label,`〉`]})]}),G(K,{name:`chevronRight`})]},t.id)})]}),O?G(`div`,{class:`group-pick`,children:[j.list(`groups`).map(t=>G(`button`,{class:`chip`,onClick:()=>{Me(t.id,[e.id]),k(!1),`${t.name}`},children:t.name},t.id)),G(`div`,{class:`add-row`,children:[G(`input`,{value:ee,placeholder:`新しいグループの名前`,onInput:e=>M(e.target.value)}),G(`button`,{class:`btn`,onClick:()=>{let t=Ie(ee||e.name,[{kind:`term`,id:e.id}]);k(!1),M(``),`${t.name}`},children:[G(K,{name:`plus`}),`作る`]})]})]}):G(`div`,{class:`mini-actions`,children:[G(`button`,{onClick:()=>{vs.value=e.id,n(),e.noteId===`n-main`&&U({tab:`timeline`})},children:[G(K,{name:`arrowRight`}),`矢印を引く`]}),G(`button`,{onClick:()=>k(!0),children:[G(K,{name:`stack`}),`グループに入れる`]}),G(`button`,{onClick:()=>{let t=Ae({title:e.name,links:[{kind:`term`,id:e.id}]});n(),U({tab:`weak`,weakSeg:`memos`,openWeakMemoId:t.id})},children:[G(K,{name:`note`}),`苦手メモ`]}),G(`button`,{onClick:()=>{n(),Ha({kind:`term`,id:e.id})},children:[G(K,{name:`board`}),`比較ボードへ`]})]}),G(`div`,{class:`f-label`,children:`赤シート`}),G(`label`,{class:`switch-row`,children:[G(`span`,{children:`この用語をいつも隠す（個別指定）`}),G(`input`,{type:`checkbox`,class:`switch`,checked:!!e.hide,onChange:t=>m(e.id,{hide:t.target.checked},`「${e.name}」の赤シート指定`)})]}),G(`div`,{class:`meta-line`,children:[e.author===`ai`?`AIが作成`:`自分で作成`,`・更新 `,new Date(e.updatedAt).toLocaleDateString(`ja-JP`)]}),G(`div`,{class:`sheet-actions`,children:[G(`button`,{onClick:()=>{n(),U({tab:`timeline`}),W(e.when.from,{termId:e.id})},children:[G(K,{name:`table`}),`年表で見る`]}),G(`button`,{onClick:()=>{n(),ut(e.when.from,`term`),U({tab:`map`})},children:[G(K,{name:`map2`}),`地図で見る`]}),G(`button`,{onClick:()=>c(!0),children:[G(K,{name:`arrowsMove`}),`年を変える`]}),G(`button`,{class:`danger`,onClick:async()=>{await J({title:`「${e.name}」をゴミ箱に入れますか？`,body:`ゴミ箱からいつでも戻せます。`,ok:`ゴミ箱へ`,danger:!0})&&(b(e.id),n(),`${e.name}`)},children:[G(K,{name:`trash`}),`ゴミ箱へ`]})]})]})}async function Ws(e){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}try{let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.position=`fixed`,t.style.top=`-1000px`,t.style.fontSize=`16px`,document.body.append(t),t.select(),t.setSelectionRange(0,e.length);let n=document.execCommand(`copy`);return t.remove(),n}catch{return!1}}var Gs=`10＝教科書の最重要語、9＝共通テスト頻出、8＝共通テストで出る、7＝二次・私大で頻出、6＝二次・私大で出る、5＝標準、4＝難関私大で時々、3＝難関私大でたまに、2＝まれ、1＝細かい知識`;function Ks(e,t,n){let r=(j.get(`notes`,`n-main`)?.columns??[]).map(e=>`${e.id}（${e.name}）`).join(`、`),i=j.list(`terms`).filter(e=>t==null||n==null||(e.when.to??e.when.from)>=t&&e.when.from<=n),a=t!=null&&n!=null?i.map(e=>e.name):[];return`日本史の学習アプリ「日本史ノート」の年表に、用語を追加したいです。

【追加してほしいもの】
${e.trim()||`（ここに書いてください）`}${t!=null&&n!=null?`\n（年の範囲：${t}年〜${n}年）`:``}

【出力の形】次のJSONだけを返してください（\`\`\`json で囲んでもかまいません）。
{
  "format": "nhnote-patch",
  "schemaVersion": 1,
  "title": "何を追加したかの短い題名",
  "upsert": {
    "terms": [
      { "name": "用語名", "yomi": "ようごめい", "col": "policy", "when": { "from": 1716, "to": 1745 }, "importance": 8, "desc": "短い説明" }
    ]
  }
}

【決まり】
・col は次のどれか（列のID）：${r}
・when.from は西暦の年（紀元前はマイナス）。続いた期間のもの（内閣・改革・文化の時期など）は to（終わりの年）も書く。1回の出来事は to を書かない
・年がはっきりしないものは "approx": true と、"label": "18世紀前半" のような言い方を when に加える
・importance は 1〜10 の数（${Gs}）
・山川出版社『詳説日本史』に出てくる用語を中心に。史実の正確さを最優先にして、年や内容に確信が持てない用語は入れない
・desc は1〜2文の短い説明。覚えるべき語は 〔 〕 で囲む（アプリの赤シートで隠れます）。説明が無理なら書かなくてよい
・「⋯」（真ん中の点）は「⋯」のまま書く
・id は書かない（アプリが付けます）
${a.length?`・次の用語はすでにあるので、入れない：${a.join(`、`)}\n`:``}・JSON 以外の説明は書かない`}function qs(e){return`日本史の学習アプリ「日本史ノート」の地図に、ピンを立てたいです。

【立ててほしいピン】
${e.trim()||`（ここに書いてください）`}

【出力の形】次のJSONだけを返してください（\`\`\`json で囲んでもかまいません）。
{
  "format": "nhnote-patch",
  "schemaVersion": 1,
  "title": "何のピンかの短い題名",
  "upsert": {
    "pins": [
      { "title": "ピンの名前", "lat": 35.0116, "lon": 135.7681, "when": { "from": 794, "to": 1185 }, "memo": "説明" }
    ]
  }
}

【決まり】
・lat（緯度）と lon（経度）は、その場所の位置を小数で書く（今の地図の位置。例：京都 35.0116, 135.7681）
・when は、そのピンを地図に出す時期（西暦の年。紀元前はマイナス）。ピンはその時期だけ地図に出ます。1回の出来事なら from だけでよい
・memo は1〜3文の説明。覚えるべき語は 〔 〕 で囲む（アプリの赤シートで隠れます）
・史実の正確さを最優先にして、場所や年に確信が持てないものは入れない
・id は書かない（アプリが付けます）
・JSON 以外の説明は書かない`}function Js({kind:e,onClose:t,onSubmit:n}){let[r,i]=d(``),[a,o]=d(``),[s,c]=d(``),[l,u]=d(``),f=e=>e.trim()&&!Number.isNaN(parseInt(e,10))?parseInt(e,10):null,p=async()=>{let t=await Ws(e===`pins`?qs(r):Ks(r,f(a),f(s)));q(t?`指示文をコピーしました。Claude アプリに貼り付けて送ってください`:`コピーできませんでした`,{tone:t?`warn`:`error`,ms:5e3})};return G(Y,{open:!!e,onClose:t,title:e===`pins`?`AIに地図のピンを立ててもらう`:`AIに用語を追加してもらう`,full:!0,children:G(`div`,{class:`form import`,children:[G(`div`,{class:`f-label`,children:[`① 何を`,e===`pins`?`立てて`:`追加して`,`ほしいか`]}),G(`textarea`,{class:`paste`,rows:3,value:r,placeholder:e===`pins`?`例：江戸時代の主な藩の城下町／戦国大名の本拠地／開港した港`:`例：化政文化の作品と人物を詳しく／1930年代の外交`,onInput:e=>i(e.target.value)}),e===`terms`&&G(`div`,{class:`fld-row`,children:[G(`label`,{class:`fld`,children:[G(`span`,{children:`年の範囲（あれば）`}),G(`input`,{inputMode:`numeric`,value:a,placeholder:`1800`,onInput:e=>o(e.target.value)})]}),G(`label`,{class:`fld`,children:[G(`span`,{children:`〜`}),G(`input`,{inputMode:`numeric`,value:s,placeholder:`1850`,onInput:e=>c(e.target.value)})]})]}),e===`terms`&&G(`p`,{class:`hint`,children:`年の範囲を入れると、その範囲にすでにある用語の名前も指示文に入るので、同じ用語が重なりにくくなります。`}),G(`button`,{class:`btn primary wide`,onClick:()=>void p(),children:[G(K,{name:`clipboard`}),`指示文をコピー`]}),G(`ol`,{class:`steps`,children:[G(`li`,{children:[`iPhone の `,G(`b`,{children:`Claude アプリ`}),`で新しいチャットを開き、コピーした`,G(`b`,{children:`指示文を貼り付けて送る`})]}),G(`li`,{children:[`返ってきた答えを`,G(`b`,{children:`長押し →「コピー」`}),`して、このアプリに戻る`]}),G(`li`,{children:[`下に貼り付けて`,G(`b`,{children:`取り込む`}),`（確認画面が出ます。取り込んだ後も「元に戻す」で戻せます）`]})]}),G(`div`,{class:`f-label`,children:`② 答えを貼り付ける`}),G(`textarea`,{class:`paste`,rows:6,value:l,placeholder:`ここに貼り付け（前後の説明文があっても大丈夫です）`,onInput:e=>u(e.target.value)}),G(`button`,{class:`btn primary wide`,disabled:!l.trim(),onClick:()=>{n(l),u(``)},children:[G(K,{name:`check`}),`取り込む`]}),G(`p`,{class:`hint`,children:[`追加した`,e===`pins`?`ピン`:`用語`,`は「未確認」の印が付きます。教科書で確かめてください。`]})]})})}var Ys=s([]),Xs=864e5,Zs=e=>{if(!e)return`まだありません`;let t=Math.floor((Date.now()-e)/Xs);return t===0?`今日`:`${t}日前`},Qs={terms:`用語`,notes:`ノート`,stickies:`付箋`,groups:`グループ`,arrows:`矢印`,weakMemos:`苦手メモ`,priorityMemos:`優先順位メモ`,pins:`ピン`,folders:`フォルダ`,embeds:`差し込み`,images:`画像`};function $s(){j.rev.value;let[e,n]=d(null),[r,i]=d(null),a=t(null),o=j.meta.lastBackupAt??0,s=h().length,c=async()=>{try{await oe()!==`cancelled`&&q(`バックアップを書き出しました`)}catch(e){q(`書き出せませんでした：`+e.message,{tone:`error`})}},u=async(e,t)=>{let n;try{n=I(e)}catch(e){await J({title:`読み込めませんでした`,body:e.message,ok:`OK`});return}if(n.issues.filter(e=>e.level===`error`).length){await J({title:`データに問題があります`,body:G(nc,{issues:n.issues}),ok:`OK`,cancel:`閉じる`});return}n.kind===`backup`?await f(n.dump,n.issues):n.plan&&await p(n.plan,n.issues,t)},f=async(e,t)=>{let n=P(e);if(await J({title:`バックアップから復元しますか？`,body:G(l,{children:[G(`p`,{children:[`いまのデータを、このバックアップ（`,new Date(e.exportedAt).toLocaleString(`ja-JP`),`）の内容に`,G(`b`,{children:`置き換えます`}),`。`]}),G(`p`,{class:`counts`,children:Object.entries(n).filter(([,e])=>e).map(([e,t])=>`${Qs[e]??e} ${t}`).join(`・`)||`（空）`}),G(`p`,{class:`hint`,children:`置き換える前のデータは「端末内の自動バックアップ」に控えを残すので、あとから戻せます。`}),t.length>0&&G(nc,{issues:t})]}),ok:`復元する`,danger:!0}))try{await ve(e),q(`復元しました`)}catch(e){q(`復元できませんでした：`+e.message,{tone:`error`})}},p=async(e,t,n)=>{let r=de(e);if(!r.add&&!r.update&&!r.trash){await J({title:`変更はありません`,body:r.skip?G(rc,{plan:e}):`すでに同じ内容です。`,ok:`OK`});return}await J({title:`取り込みますか？`,body:G(l,{children:[G(`p`,{class:`counts big`,children:[`追加 `,r.add,`件・変更 `,r.update,`件`,r.trash?`・削除 ${r.trash}件`:``]}),r.skip>0&&G(l,{children:[G(`p`,{children:[`見送り `,r.skip,`件（あなたの編集を守るため など）`]}),G(rc,{plan:e})]}),G(ic,{plan:e}),G(`p`,{class:`hint`,children:`取り込む前のデータは控えを残します。取り込んだあとも「元に戻す」で戻せます。`}),t.length>0&&G(nc,{issues:t})]}),ok:`取り込む`})&&(await ge(e,n),`${r.add}${r.update}`)},m=async e=>{let t=e.target.files?.[0];e.target.value=``,t&&await u(await t.text(),t.name)},g=async()=>{try{let e=await ye(Ys.value),t=e.reduce((e,t)=>e+t.plan.adds.length,0),n=e.reduce((e,t)=>e+t.plan.updates.length,0);if(!await J({title:`新しい初期データを取り込みますか？`,body:G(l,{children:[G(`p`,{class:`counts big`,children:[`追加 `,t,`件・変更 `,n,`件`]}),G(`p`,{children:e.map(e=>e.seed.title).join(`・`)}),G(`p`,{class:`hint`,children:`あなたが書いた説明・付箋、自分で変えた重要度・苦手度はそのままです。`})]}),ok:`取り込む`}))return;await F(e),Ys.value=[]}catch(e){q(`読み込めませんでした：`+e.message,{tone:`error`})}},_=Date.now()-Math.max(o,j.meta.createdAt??0)>j.settings.backupReminderDays*Xs;return G(`div`,{class:`view more`,children:[G(`header`,{class:`bigbar`,children:G(`h1`,{class:`big-title`,children:`その他`})}),G(`div`,{class:`scroll`,children:[Ys.value.length>0&&G(ec,{icon:`cloudDown`,title:`新しい初期データがあります`,tone:`info`,children:[G(`p`,{children:Ys.value.map(e=>e.title).join(`・`)}),G(`button`,{class:`btn primary`,onClick:g,children:`内容を確認して取り込む`})]}),G(ec,{icon:`database`,title:`バックアップ`,tone:_?`warn`:void 0,children:[G(`p`,{children:[`最後のバックアップ：`,G(`b`,{children:Zs(o)}),_&&G(`span`,{class:`due`,children:`（そろそろ書き出しておきましょう）`})]}),G(`div`,{class:`btns`,children:[G(`button`,{class:`btn primary`,onClick:c,children:[G(K,{name:`download`}),`書き出す`]}),G(`button`,{class:`btn`,onClick:()=>a.current?.click(),children:[G(K,{name:`upload`}),`ファイルから読み込む`]})]}),G(`p`,{class:`hint`,children:`書き出すと共有メニューが開くので「"ファイル"に保存」→ iCloud Drive などを選びます。読み込みは、バックアップ（復元）とAIの追加・修正データの両方に使えます。`}),G(`input`,{ref:a,type:`file`,accept:`application/json,.json,text/plain`,hidden:!0,onChange:m})]}),G(ec,{icon:`sparkles`,title:`AIの追加・修正データ`,children:[G(`p`,{children:`Claude が作った「追加・修正用データ」を取り込みます。IDで照合して、新しいものは追加、あるものは更新します。`}),G(`div`,{class:`btns`,children:[G(`button`,{class:`btn`,onClick:()=>a.current?.click(),children:[G(K,{name:`fileImport`}),`ファイルを選ぶ`]}),G(`button`,{class:`btn`,onClick:()=>n(`paste`),children:[G(K,{name:`clipboard`}),`貼り付ける`]})]}),G(`div`,{class:`btns`,children:[G(`button`,{class:`btn`,onClick:()=>i(`terms`),children:[G(K,{name:`sparkles`}),`AIに用語を追加してもらう`]}),G(`button`,{class:`btn`,onClick:()=>i(`pins`),children:[G(K,{name:`mapPinPlus`}),`AIに地図のピンを立ててもらう`]})]})]}),G(`div`,{class:`menu`,children:[G(tc,{icon:`trash`,label:`ゴミ箱`,value:s?`${s}件`:`空`,onClick:()=>n(`trash`)}),G(tc,{icon:`history`,label:`端末内の自動バックアップ`,value:`毎日・取り込み前`,onClick:()=>n(`snaps`)})]}),G(ec,{icon:`settings`,title:`表示`,children:[G(`div`,{class:`seg three`,children:[[`auto`,`自動`,`auto`],[`light`,`ライト`,`sun`],[`dark`,`ダーク`,`moon`]].map(([e,t,n])=>G(`button`,{class:j.settings.theme===e?`on`:``,onClick:()=>j.setSettings({theme:e}),children:[G(K,{name:n}),t]},e))}),G(`label`,{class:`switch-row`,children:[G(`span`,{children:`バックアップのお知らせ（日数）`}),G(`select`,{value:j.settings.backupReminderDays,onChange:e=>j.setSettings({backupReminderDays:+e.target.value}),children:[3,7,14,30].map(e=>G(`option`,{value:e,children:[e,`日`]},e))})]})]}),G(cc,{})]}),G(ac,{open:e===`trash`,onClose:()=>n(null)}),G(oc,{open:e===`snaps`,onClose:()=>n(null)}),G(Js,{kind:r,onClose:()=>i(null),onSubmit:e=>{i(null),u(e,`AIの答え`)}}),G(sc,{open:e===`paste`,onClose:()=>n(null),onSubmit:e=>{n(null),u(e,`貼り付けたデータ`)}})]})}function ec({icon:e,title:t,tone:n,children:r}){return G(`section`,{class:`card ${n??``}`,children:[G(`h2`,{children:[G(K,{name:e}),t]}),r]})}function tc({icon:e,label:t,value:n,onClick:r}){return G(`button`,{class:`mrow`,onClick:r,children:[G(`span`,{class:`fi`,children:G(K,{name:e})}),G(`span`,{class:`nm`,children:t}),G(`span`,{class:`ct`,children:n}),G(K,{name:`chevronRight`})]})}function nc({issues:e}){return G(`ul`,{class:`issues`,children:[e.slice(0,12).map((e,t)=>G(`li`,{class:e.level,children:[e.level===`error`?`✕`:`！`,` `,e.msg]},t)),e.length>12&&G(`li`,{children:[`ほか `,e.length-12,`件`]})]})}function rc({plan:e}){return G(`ul`,{class:`issues`,children:e.skipped.slice(0,6).map((e,t)=>G(`li`,{children:[`「`,e.name,`」：`,e.reason]},t))})}function ic({plan:e}){let t=[...e.adds.slice(0,5).map(e=>`＋ ${e.rec.name??e.rec.id}`),...e.updates.slice(0,5).map(e=>`↻ ${e.after.name??e.after.id}`)];return t.length?G(`ul`,{class:`issues ok`,children:[t.map((e,t)=>G(`li`,{children:e},t)),e.adds.length+e.updates.length>t.length&&G(`li`,{children:`…`})]}):null}function ac({open:e,onClose:t}){j.rev.value;let n=e?h():[],r=async(e,t)=>{await J({title:t?`ゴミ箱を空にしますか？`:`完全に削除しますか？`,body:`完全に削除したものは元に戻せません。`,ok:`完全に削除`,danger:!0})&&(O(e),q(`完全に削除しました`))};return G(Y,{open:e,onClose:t,title:`ゴミ箱`,full:!0,children:G(`div`,{class:`form`,children:[!n.length&&G(`p`,{class:`hint center`,children:`ゴミ箱は空です。`}),n.map(e=>G(`div`,{class:`trash-row`,children:[G(`div`,{class:`tx`,children:[G(`b`,{children:e.title||`（名前なし）`}),G(`small`,{children:[new Date(e.deletedAt).toLocaleString(`ja-JP`),e.items.length>1?`・関係するもの ${e.items.length-1}件も一緒`:``]})]}),G(`button`,{class:`btn sm`,onClick:()=>{g(e.group,`「${e.title}」を戻す`),`${e.title}`},children:`戻す`}),G(`button`,{class:`iconbtn sm danger`,"aria-label":`完全に削除`,onClick:()=>void r([e.group],!1),children:G(K,{name:`trash`})})]},e.group)),n.length>0&&G(`button`,{class:`btn danger wide`,onClick:()=>void r(n.map(e=>e.group),!0),children:`ゴミ箱を空にする`})]})})}function oc({open:e,onClose:t}){let[n,r]=d([]);u(()=>{e&&z().then(r)},[e]);let i=async e=>{if(await J({title:`この時点に戻しますか？`,body:`${new Date(e.at).toLocaleString(`ja-JP`)} の状態に戻します。いまの状態も控えとして残します。`,ok:`戻す`,danger:!0}))try{await be(e.id),q(`戻しました`),t()}catch(e){q(`戻せませんでした：`+e.message,{tone:`error`})}};return G(Y,{open:e,onClose:t,title:`端末内の自動バックアップ`,full:!0,children:G(`div`,{class:`form`,children:[G(`p`,{class:`hint`,children:`1日1回と、取り込み・復元・形式の変換の前に、自動で控えを作っています（最新7個）。iPhoneの中だけにあるので、機種変更などに備えて「書き出す」バックアップも取ってください。`}),!n.length&&G(`p`,{class:`hint center`,children:`まだありません。`}),n.map(e=>G(`div`,{class:`trash-row`,children:[G(`div`,{class:`tx`,children:[G(`b`,{children:new Date(e.at).toLocaleString(`ja-JP`)}),G(`small`,{children:[e.reason,e.size?`・${Math.round(e.size/1024)}KB`:``]})]}),G(`button`,{class:`btn sm`,onClick:()=>void i(e),children:`この時点に戻す`})]},e.id))]})})}function sc({open:e,onClose:t,onSubmit:n}){let[r,i]=d(``);return u(()=>{e&&i(``)},[e]),G(Y,{open:e,onClose:t,title:`貼り付けて取り込む`,full:!0,children:G(`div`,{class:`form`,children:[G(`p`,{class:`hint`,children:"Claude の返事をそのまま貼り付けてかまいません（前後の説明文や ```json の囲みは自動で取り除きます）。"}),G(`textarea`,{class:`paste`,rows:10,value:r,placeholder:`ここに貼り付け`,onInput:e=>i(e.target.value)}),G(`button`,{class:`btn primary wide`,disabled:!r.trim(),onClick:()=>n(r),children:`内容を確認する`})]})})}function cc(){let[e,t]=d(``);return u(()=>{navigator.storage?.estimate?.().then(e=>{e.usage!=null&&t(`${(e.usage/1024/1024).toFixed(1)}MB 使用中`)})},[]),G(`section`,{class:`card about`,children:[G(`h2`,{children:[G(K,{name:`info`}),`このアプリについて`]}),G(`p`,{children:[`日本史ノート　版 `,He]}),G(`p`,{class:`hint`,children:[`データはこの端末の中（このアプリ専用の保存場所）にだけ保存されます。`,e]}),G(`p`,{class:`hint`,children:`アイコン：Tabler Icons（MIT）。`})]})}var lc={about:`苦手の原因と、原因ごとの解決策の提案ルール。AI・ユーザーが編集してよい。rank が小さいほど先に提案（1＝いちばん早く解決できそう）。action: copyPrompt（AIへの質問文をコピー）/ redsheet（赤シートで反復）/ compareTable（比較表を作る）/ orderQuiz（並べ替え練習）/ timeline（年表で前後を見る）/ map（地図で確認）/ none（説明だけ）。prompt の {terms} は対象の用語の一覧に置き換わる。`,version:1,causes:[{id:`flow`,label:`流れ（前後関係・因果）が分かっていない`,short:`流れ`},{id:`term`,label:`用語を覚えていないだけ`,short:`用語`},{id:`detail`,label:`付属知識（人物・場所・中身）が曖昧`,short:`付属知識`},{id:`year`,label:`年代・順番が覚えられない`,short:`年代・順番`},{id:`confuse`,label:`似た用語と混同している`,short:`混同`},{id:`source`,label:`史料・図版が読めない`,short:`史料・図版`},{id:`meaning`,label:`そもそも意味が理解できていない`,short:`意味`}],solutions:[{id:`ai-flow`,causes:[`flow`],rank:1,title:`AIに流れを説明してもらう`,detail:`原因 → 出来事 → 結果・影響を、時系列で説明してもらう`,action:`copyPrompt`,prompt:`次の用語について、前後の流れ（原因 → 出来事 → 結果・影響）を、大学受験日本史のレベルで時系列の箇条書きにして説明してください。最後に、流れを1行で要約してください。`},{id:`tl-flow`,causes:[`flow`,`year`],rank:2,title:`年表で前後を並べて見る`,detail:`その年の前後を1年刻みで見て、同じ時期の出来事を確認する`,action:`timeline`},{id:`book-flow`,causes:[`flow`,`meaning`],rank:3,title:`参考書の通史を読む`,detail:`教科書・通史の参考書で、その前後の見開きを通して読む`,action:`none`},{id:`yt-flow`,causes:[`flow`,`meaning`],rank:4,title:`YouTubeの解説を見る`,detail:`「{terms} 解説」で検索して、流れの解説動画を1本見る`,action:`none`},{id:`arrow-flow`,causes:[`flow`],rank:5,title:`年表に矢印で因果を書き込む`,detail:`用語の詳細 →「矢印を引く」で、原因・結果をつなぐ`,action:`none`},{id:`red-term`,causes:[`term`],rank:1,title:`赤シートで反復する`,detail:`この用語を赤シートの対象にして、年表でくり返し確認する`,action:`redsheet`},{id:`write-term`,causes:[`term`],rank:2,title:`書いて覚える`,detail:`漢字で3回書き、何も見ずに書けるか確かめる`,action:`none`},{id:`ai-quiz`,causes:[`term`,`detail`],rank:3,title:`AIに一問一答を作ってもらう`,detail:`その用語の一問一答を作ってもらい、解いてみる`,action:`copyPrompt`,prompt:`次の用語について、大学受験日本史レベルの一問一答を10問作ってください。答えは最後にまとめて書いてください。`},{id:`ai-detail`,causes:[`detail`],rank:1,title:`AIに人物・場所・中身を1枚にまとめてもらう`,detail:`関係する人物・場所・内容・結果を表に整理してもらう`,action:`copyPrompt`,prompt:`次の用語について、関係する人物・場所・内容・結果を「項目｜内容」の表に整理してください。入試で問われやすい点には★を付けてください。`},{id:`sticky-detail`,causes:[`detail`],rank:2,title:`付箋に要点を書く`,detail:`用語の付箋に、人物・場所・中身を1行ずつ書いておく`,action:`none`},{id:`map-detail`,causes:[`detail`],rank:3,title:`地図で場所を確認する`,detail:`その年の地図を開いて、場所と周りの国を確認する`,action:`map`},{id:`goro-year`,causes:[`year`],rank:1,title:`語呂合わせを作る`,detail:`年号の語呂合わせを作ってもらい、気に入ったものを付箋に書く`,action:`copyPrompt`,prompt:`次の出来事の年号について、覚えやすい語呂合わせを3つずつ作ってください。年号と出来事の対応も表にしてください。`},{id:`order-year`,causes:[`year`],rank:2,title:`並べ替え練習`,detail:`関係する用語を、起きた順に並べ替えてみる`,action:`orderQuiz`},{id:`compare-confuse`,causes:[`confuse`],rank:1,title:`比較表を作る`,detail:`混同している用語を並べて、時期・目的・内容・結果を比べる`,action:`compareTable`},{id:`ai-confuse`,causes:[`confuse`],rank:2,title:`AIに違いを説明してもらう`,detail:`違いと見分け方を説明してもらう`,action:`copyPrompt`,prompt:`次の用語の違いを、時期・目的・内容・結果の観点で比較表にしてください。混同しやすいポイントと、見分け方のコツも書いてください。`},{id:`ai-source`,causes:[`source`],rank:1,title:`史料の要点と現代語訳をAIに聞く`,detail:`入試でよく出る史料の、要点・現代語訳・読み取りのポイントを確認する`,action:`copyPrompt`,prompt:`次の用語に関係する史料（入試でよく出るもの）について、原文のキーワード・現代語訳・入試で問われる読み取りのポイントを教えてください。`},{id:`book-source`,causes:[`source`],rank:2,title:`資料集（図説）で確認する`,detail:`資料集で史料・図版と解説をセットで読む`,action:`none`},{id:`ai-meaning`,causes:[`meaning`],rank:1,title:`AIにかみ砕いて説明してもらう`,detail:`やさしい言葉で説明してから、入試レベルの説明に言い直してもらう`,action:`copyPrompt`,prompt:`次の用語の意味を、まず中学生にも分かる言葉で説明し、そのあと大学受験日本史で必要な説明に言い直してください。具体例も1つ挙げてください。`},{id:`text-meaning`,causes:[`meaning`],rank:2,title:`教科書の本文で前後の文脈を読む`,detail:`その用語が出てくる段落を、前後も含めて読む`,action:`none`}],question:{header:`日本史（大学受験：共通テスト〜国公立二次・難関私大、山川『詳説日本史』準拠）の質問です。`,footer:`最後に、覚えるべき要点を3行でまとめてください。`}};function uc(){let e=j.settings.rules;return e&&Array.isArray(e.causes)&&Array.isArray(e.solutions)?e:lc}function dc(e){return e.length?uc().solutions.map(t=>({s:t,hit:t.causes.filter(t=>e.includes(t)).length})).filter(e=>e.hit>0).sort((e,t)=>e.s.rank-t.s.rank||t.hit-e.hit).map(e=>e.s):[]}var fc=(e,t)=>e.replace(/\{terms\}/g,t.map(e=>e.name).join(`・`)||`（用語）`);function pc(e){let t=(j.get(`notes`,e.noteId)?.columns??[]).find(t=>t.id===e.col)?.name??``,n=ae(e.when.from,N.eras).name,r=`${e.when.approx?`約`:``}${L(e.when.from)}${e.when.to!=null&&e.when.to!==e.when.from?`〜${L(e.when.to)}`:``}${e.when.from>0?`年`:``}`;return`・${e.name}（${r}／${n}${t?`・`+t:``}）`}function mc(e){let t=uc(),n=[t.question.header,``];e.terms.length&&n.push(`【対象】`,...e.terms.map(pc),``);let r=e.memo;r&&(r.title.trim()||r.body.trim())&&n.push(`【分からないこと】`,[r.title.trim(),r.body.trim()].filter(Boolean).join(`
`),``),r?.causes.length&&n.push(`【自分で考えた原因】`,...r.causes.map(e=>`・`+(t.causes.find(t=>t.id===e)?.label??e)),``);let i=[];if(e.solution?.prompt)i.push(fc(e.solution.prompt,e.terms));else for(let t of dc(r?.causes??[]))if(t.prompt&&!i.includes(fc(t.prompt,e.terms))&&(i.push(fc(t.prompt,e.terms)),i.length>=2))break;return i.length||i.push(`次の用語について、大学受験日本史で必要なことを分かりやすく説明してください。`),n.push(`【お願い】`,...i,``,t.question.footer),n.join(`
`)}var hc=fc;function gc(){j.rev.value;let e=H.value.weakSeg,t=j.list(`terms`).filter(e=>e.weakness>0).length+j.list(`groups`).filter(e=>e.weakness>0).length,n=j.list(`weakMemos`).filter(e=>e.status!==`done`).length,r=j.list(`priorityMemos`).filter(e=>!e.done).length;return G(`div`,{class:`view weak`,children:[G(`header`,{class:`bigbar row`,children:[G(`h1`,{class:`big-title`,children:`苦手`}),G(`span`,{class:`sp`}),G(fa,{})]}),G(`div`,{class:`segtabs`,role:`tablist`,children:[G(`button`,{role:`tab`,class:e===`priority`?`on`:``,onClick:()=>U({weakSeg:`priority`}),children:[`優先順位`,r?G(`span`,{class:`n`,children:r}):null]}),G(`button`,{role:`tab`,class:e===`list`?`on`:``,onClick:()=>U({weakSeg:`list`}),children:[`苦手一覧`,t?G(`span`,{class:`n`,children:t}):null]}),G(`button`,{role:`tab`,class:e===`memos`?`on`:``,onClick:()=>U({weakSeg:`memos`}),children:[`苦手メモ`,n?G(`span`,{class:`n`,children:n}):null]})]}),e===`priority`&&G(_c,{}),e===`list`&&G(vc,{}),e===`memos`&&G(bc,{})]})}function _c(){let[e,n]=d(``),[r,i]=d(null),[a,o]=d(``),[s,c]=d(!1),u=t(null),f=j.list(`priorityMemos`).sort(Fe),p=f.filter(e=>!e.done),m=f.filter(e=>e.done),h=()=>{e.trim()&&(w(e),n(``),u.current?.focus())},g=e=>{a.trim()&&a!==e.text&&Oe(e.id,{text:a.trim()}),i(null)},_=(e,t)=>G(`div`,{class:`pm-row ${e.done?`done`:``}`,children:[G(`span`,{class:`rank`,children:e.done?``:t.index+1}),G(`button`,{class:`chk no-drag ${e.done?`on`:``}`,"aria-label":e.done?`済みを外す`:`済みにする`,onClick:()=>Oe(e.id,{done:!e.done},e.done?`優先順位メモを戻す`:`優先順位メモを済みに`),children:G(K,{name:`check`})}),r===e.id?G(`input`,{class:`pm-edit`,value:a,autoFocus:!0,onInput:e=>o(e.target.value),onBlur:()=>g(e),onKeyDown:t=>{t.key===`Enter`&&g(e),t.key===`Escape`&&i(null)}}):G(`span`,{class:`tx`,onClick:()=>{i(e.id),o(e.text)},children:e.text}),!e.done&&G(l,{children:[G(`button`,{class:`iconbtn sm no-drag`,"aria-label":`上へ`,disabled:t.index===0,onClick:t.up,children:G(K,{name:`chevronUp`})}),G(`button`,{class:`iconbtn sm no-drag`,"aria-label":`下へ`,disabled:t.index===t.count-1,onClick:t.down,children:G(K,{name:`chevronDown`})})]}),G(`button`,{class:`iconbtn sm no-drag`,"aria-label":`削除`,onClick:()=>{C([{c:`priorityMemos`,id:e.id}],`優先順位メモを削除`)},children:G(K,{name:`x`})})]});return G(`div`,{class:`scroll`,children:[G(`p`,{class:`lead`,children:`やることや優先順位を、ざっくり書いておく場所です。長押しで持ち上げて並べ替えられます。`}),G(`div`,{class:`add-row pad`,children:[G(`input`,{ref:u,value:e,placeholder:`例：江戸の三大改革を比較して整理する`,onInput:e=>n(e.target.value),onKeyDown:e=>{e.key===`Enter`&&h()}}),G(`button`,{class:`btn primary`,onClick:h,children:[G(K,{name:`plus`}),`追加`]})]}),!p.length&&!m.length&&G(`div`,{class:`empty`,children:[G(`div`,{class:`empty-ic`,children:G(K,{name:`listCheck`,size:30})}),G(`p`,{children:`まだありません。上の欄に書いて「追加」を押してください。`})]}),G(Vr,{class:`pm-list`,items:p,getId:e=>e.id,onReorder:e=>ze(`priorityMemos`,[...e,...m.map(e=>e.id)],`優先順位メモを並べ替え`),render:(e,t)=>_(e,t)}),m.length>0&&G(l,{children:[G(`button`,{class:`show-done`,onClick:()=>c(!s),children:[G(K,{name:s?`chevronUp`:`chevronDown`}),`済み `,m.length,`件`]}),s&&G(`div`,{class:`pm-list`,children:m.map(e=>G(`div`,{children:_(e,{index:0,count:0,up:()=>{},down:()=>{}})},e.id))})]})]})}function vc(){let e=j.rev.value,[t,n]=d(0),r=c(()=>j.list(`terms`).filter(e=>e.weakness>0&&(!t||e.weakness===t)).sort((e,t)=>t.weakness-e.weakness||e.when.from-t.when.from),[e,t]),i=j.list(`groups`).filter(e=>e.weakness>0&&(!t||e.weakness===t)).sort((e,t)=>t.weakness-e.weakness),a=e=>j.list(`terms`).filter(t=>t.weakness===e).length,o=(e,t)=>j.get(`notes`,e)?.columns?.find(e=>e.id===t)?.name??``;return G(`div`,{class:`scroll`,children:[G(`div`,{class:`metrics`,children:[3,2,1].map(e=>G(`div`,{class:`metric`,style:{"--mc":`var(--w${e})`},children:[G(`small`,{children:[`苦手 `,e]}),G(`b`,{children:a(e)})]},e))}),G(`div`,{class:`filters`,children:[0,3,2,1].map(e=>G(`button`,{class:t===e?`on`:``,style:{"--wc":`var(--w${e})`},onClick:()=>n(e),children:e?G(l,{children:[G(`i`,{}),e]}):`すべて`},e))}),G(`div`,{class:`wk-list`,children:[!r.length&&!i.length&&G(`div`,{class:`empty`,children:[G(`div`,{class:`empty-ic`,children:G(K,{name:`target`,size:30})}),G(`p`,{children:`まだありません。年表で用語をタップし、苦手度（1〜3）を付けるとここに並びます。`})]}),i.map(e=>G(`div`,{class:`wk-item`,style:{"--wc":`var(--w${e.weakness})`},children:[G(`button`,{class:`row1`,onClick:()=>U({openGroupId:e.id}),children:[G(`span`,{class:`lv`,children:e.weakness}),G(`span`,{class:`nm`,children:e.name}),G(K,{name:`chevronRight`})]}),G(`div`,{class:`meta`,children:[G(K,{name:`stack`,size:13}),` グループ・`,je(e).length,`語`]})]},e.id)),r.map(e=>{let t=ae(e.when.from,N.eras);return G(`div`,{class:`wk-item`,style:{"--wc":`var(--w${e.weakness})`},children:[G(`button`,{class:`row1`,onClick:()=>U({openTermId:e.id}),children:[G(`span`,{class:`lv`,children:e.weakness}),G(`span`,{class:`nm`,children:e.name}),G(K,{name:`chevronRight`})]}),G(`div`,{class:`meta`,children:[t.name.replace(`時代`,``),`・`,L(e.when.from),`・`,o(e.noteId,e.col)]}),G(`div`,{class:`ask`,children:[G(`button`,{onClick:()=>{U({tab:`timeline`}),W(e.when.from,{termId:e.id})},children:[G(K,{name:`table`}),`年表で見る`]}),G(`button`,{onClick:()=>{U({weakSeg:`memos`,openWeakMemoId:Ae({title:e.name,links:[{kind:`term`,id:e.id}]}).id})},children:[G(K,{name:`note`}),`苦手メモ`]})]})]},e.id)})]})]})}var yc={open:`未解決`,doing:`取組中`,done:`解決`};function bc(){let[e,t]=d(`active`),n=j.list(`weakMemos`).sort(Fe),r=n.filter(t=>e===`all`?!0:e===`done`?t.status===`done`:t.status!==`done`),i=uc().causes,a=e=>e.links.map(e=>e.kind===`term`?j.get(`terms`,e.id)?.name:e.kind===`group`?j.get(`groups`,e.id)?.name:e.kind===`note`?j.get(`notes`,e.id)?.name:``).filter(Boolean).join(`・`);return G(`div`,{class:`scroll`,children:[G(`div`,{class:`filters`,children:[[`active`,`done`,`all`].map(n=>G(`button`,{class:e===n?`on`:``,onClick:()=>t(n),children:n===`active`?`未解決・取組中`:n===`done`?`解決`:`すべて`},n)),G(`button`,{class:`add`,onClick:()=>{U({openWeakMemoId:Ae().id})},children:[G(K,{name:`plus`}),`苦手メモ`]})]}),!r.length&&G(`div`,{class:`empty`,children:[G(`div`,{class:`empty-ic`,children:G(K,{name:`note`,size:30})}),G(`p`,{children:`苦手メモは、詳しく書きたいときだけ作ります。用語の詳細や苦手一覧の「苦手メモ」からも作れます。`})]}),G(Vr,{class:`wk-list`,gap:10,items:r,getId:e=>e.id,onReorder:e=>ze(`weakMemos`,[...e,...n.filter(t=>!e.includes(t.id)).map(e=>e.id)],`苦手メモを並べ替え`),render:(e,t)=>{let n=dc(e.causes)[0];return G(`div`,{class:`wk-item memo ${e.status}`,style:{"--wc":e.status===`done`?`#6BAF7A`:e.status===`doing`?`var(--accent)`:`var(--w2)`},onClick:()=>U({openWeakMemoId:e.id}),children:[G(`div`,{class:`row1`,children:[G(`span`,{class:`rank`,children:t.index+1}),G(`span`,{class:`nm`,children:e.title||a(e)||`（題名なし）`}),G(`span`,{class:`st ${e.status}`,children:yc[e.status]})]}),a(e)&&e.title&&G(`div`,{class:`meta`,children:a(e)}),e.body&&G(`div`,{class:`memo-body`,children:G(Hi,{text:e.body.length>80?e.body.slice(0,80)+`…`:e.body,sheet:!1})}),e.causes.length>0&&G(`div`,{class:`causes`,children:e.causes.map(e=>G(`span`,{children:i.find(t=>t.id===e)?.short??e},e))}),n&&G(`div`,{class:`suggest`,children:[G(K,{name:`sparkles`}),G(`span`,{children:n.title})]}),G(`div`,{class:`ord no-drag`,onClick:e=>e.stopPropagation(),children:[G(`button`,{class:`iconbtn sm`,"aria-label":`上へ`,disabled:t.index===0,onClick:t.up,children:G(K,{name:`chevronUp`})}),G(`button`,{class:`iconbtn sm`,"aria-label":`下へ`,disabled:t.index===t.count-1,onClick:t.down,children:G(K,{name:`chevronDown`})})]})]})}})]})}function xc(){let e=mt.value,[n,r]=d(``),[i,a]=d([]),o=t(null);u(()=>{e&&(r(``),a([]),setTimeout(()=>o.current?.focus(),260))},[e]);let s=c(()=>{if(!e)return[];let t=n.trim(),r=new Set(e.exclude??[]),i=/^-?\d{1,5}$/.test(t)?parseInt(t,10):null;return j.list(`terms`).filter(e=>!r.has(e.id)&&!e.refId).filter(e=>!t||(i==null?e.name.includes(t)||(e.yomi??``).includes(t):e.when.from===i)).sort((e,n)=>(t?n.importance-e.importance:0)||e.when.from-n.when.from).slice(0,80)},[n,e,j.rev.value]),l=()=>{mt.value=null};if(!e)return G(Y,{open:!1,onClose:l,children:null});let f=t=>{if(!e.multi){e.onPick([t]),l();return}a(i.includes(t)?i.filter(e=>e!==t):[...i,t])};return G(Y,{open:!0,onClose:l,title:e.title,full:!0,children:G(`div`,{class:`form`,children:[G(`div`,{class:`searchbox`,children:[G(K,{name:`search`}),G(`input`,{ref:o,value:n,placeholder:`用語・読み・年で探す`,onInput:e=>r(e.target.value)})]}),G(`div`,{class:`results`,children:[s.map(t=>G(`button`,{class:`res ${i.includes(t.id)?`picked`:``}`,onClick:()=>f(t.id),children:[G(`span`,{class:`w ${t.weakness?`wk`+t.weakness:``}`}),G(`span`,{class:`nm`,children:t.name}),G(`span`,{class:`sub`,children:L(t.when.from)}),e.multi&&G(`span`,{class:`chk ${i.includes(t.id)?`on`:``}`,children:G(K,{name:`check`})})]},t.id)),!s.length&&G(`p`,{class:`hint center`,children:`見つかりません`})]}),e.multi&&G(`div`,{class:`pick-bar`,children:G(`button`,{class:`btn primary wide`,disabled:!i.length,onClick:()=>{e.onPick(i),l()},children:[i.length,`語を選ぶ`]})})]})})}function Sc(e,t,n={}){mt.value={title:e,onPick:t,...n}}function Cc(e){let t=new Map;for(let n of e.links){if(n.kind===`term`){let e=j.get(`terms`,n.id);e&&!e.deletedAt&&t.set(e.id,e)}if(n.kind===`group`){let e=j.get(`groups`,n.id);if(e)for(let n of je(e))t.set(n.id,n)}}return[...t.values()].sort((e,t)=>e.when.from-t.when.from)}function wc(){j.rev.value;let e=H.value.openWeakMemoId,t=e?j.get(`weakMemos`,e):void 0,n=()=>U({openWeakMemoId:null});return u(()=>{e&&(!t||t.deletedAt)&&n()},[e,t]),G(Y,{open:!!t&&!t.deletedAt,onClose:n,full:!0,class:`memo-sheet`,children:t&&G(Ec,{id:t.id,onClose:n},t.id)})}var Tc={copyPrompt:[`質問文をコピー`,`copy`],redsheet:[`赤シートで練習`,`eyeOff`],compareTable:[`比較表を作る`,`cols3`],orderQuiz:[`並べ替え練習`,`shuffle`],timeline:[`年表で見る`,`table`],map:[`地図で見る`,`map2`]};function Ec({id:e,onClose:t}){let n=j.get(`weakMemos`,e),r=uc(),i=Cc(n),[a,o]=d(n.title),[s,f]=d(n.body),[p,h]=d(!n.body),g=c(()=>dc(n.causes),[n.causes.join(`,`)]),_=()=>{a!==n.title&&se(e,{title:a})},v=()=>{s!==n.body&&se(e,{body:s}),s&&h(!1)};u(()=>()=>{let t=j.get(`weakMemos`,e);t&&!t.deletedAt&&(a!==t.title||s!==t.body)&&se(e,{title:a,body:s})},[a,s]);let y=t=>se(e,{causes:n.causes.includes(t)?n.causes.filter(e=>e!==t):[...n.causes,t]},`原因を変更`),b=t=>{let r=new Set(n.links.map(e=>e.kind+`:`+e.id)),i=t.filter(e=>!r.has(e.kind+`:`+e.id));i.length&&se(e,{links:[...n.links,...i]},`つながりを追加`)},x=e=>(e.kind===`term`?j.get(`terms`,e.id)?.name:e.kind===`group`?j.get(`groups`,e.id)?.name:e.kind===`note`?j.get(`notes`,e.id)?.name:``)??`（なし）`,S=async e=>{let t=await Ws(mc({terms:i,memo:{title:a,body:s,causes:n.causes},solution:e}));q(t?`質問文をコピーしました。Claude アプリに貼り付けてください`:`コピーできませんでした`,{tone:t?`warn`:`error`})},w=async r=>{switch(r.action){case`copyPrompt`:await S(r);break;case`redsheet`:if(!i.length){q(`先に用語をつないでください`,{tone:`warn`});return}for(let e of i)e.hide||m(e.id,{hide:!0},`「${e.name}」を赤シートの対象に`);n.status===`open`&&se(e,{status:`doing`},`取組中にする`),t(),U({tab:`timeline`,redSheet:!0}),W(i[0].when.from,{termId:i[0].id}),q(`赤シートの対象にしました。板をタップしてめくって確認しましょう`);break;case`compareTable`:{let e=Se(i.map(e=>e.id));if(!e){q(`比較表には2語以上をつないでください`,{tone:`warn`});return}t(),U({tab:`notes`,openNoteId:e.id});break}case`orderQuiz`:{let e=i.map(e=>e.id);if(e.length<3&&i[0]){let t=i[0],n=j.list(`terms`).filter(e=>e.noteId===t.noteId&&e.shape===`point`&&e.importance>=6&&Math.abs(e.when.from-t.when.from)<=30).sort((e,n)=>Math.abs(e.when.from-t.when.from)-Math.abs(n.when.from-t.when.from)).slice(0,6).map(e=>e.id);e=[...new Set([...e,...n])]}if(e.length<2){q(`並べ替えには2語以上が必要です`,{tone:`warn`});return}ht.value=e;break}case`timeline`:if(!i[0]){q(`先に用語をつないでください`,{tone:`warn`});return}t(),U({tab:`timeline`,level:1}),W(i[0].when.from,{termId:i[0].id,level:1});break;case`map`:i[0]&&ut(i[0].when.from,`memo`),t(),U({tab:`map`})}};return G(`div`,{class:`tsheet`,children:[G(`input`,{class:`title-input`,value:a,placeholder:`何が苦手？（例：三世一身法と墾田永年私財法の違い）`,onInput:e=>o(e.target.value),onBlur:_}),G(`div`,{class:`seg three status`,children:[`open`,`doing`,`done`].map(t=>G(`button`,{class:n.status===t?`on`:``,onClick:()=>se(e,{status:t},`解決状況を変更`),children:t===`open`?`未解決`:t===`doing`?`取組中`:`解決`},t))}),G(`div`,{class:`f-label`,children:`つながっている用語・グループ`}),G(`div`,{class:`chips-row`,children:[n.links.map(t=>G(`span`,{class:`chip link`,children:[G(`button`,{class:`nm`,onClick:()=>{t.kind===`term`?U({openTermId:t.id}):t.kind===`group`&&U({openGroupId:t.id})},children:[t.kind===`group`&&G(K,{name:`stack`,size:14}),x(t)]}),G(`button`,{class:`x`,"aria-label":`外す`,onClick:()=>se(e,{links:n.links.filter(e=>e!==t)},`つながりを外す`),children:G(K,{name:`x`,size:14})})]},t.kind+t.id)),G(`button`,{class:`chip add`,onClick:()=>Sc(`つなぐ用語を選ぶ`,e=>b(e.map(e=>({kind:`term`,id:e}))),{multi:!0}),children:[G(K,{name:`plus`,size:15}),`用語`]})]}),G(`div`,{class:`f-label`,children:[`なぜ分からない？`,G(`small`,{children:`当てはまるものを選ぶ（いくつでも）`})]}),G(`div`,{class:`cause-list`,children:r.causes.map(e=>G(`button`,{class:`cause ${n.causes.includes(e.id)?`on`:``}`,onClick:()=>y(e.id),children:[G(`span`,{class:`box`,children:G(K,{name:`check`,size:15})}),e.label]},e.id))}),g.length>0&&G(l,{children:[G(`div`,{class:`f-label`,children:`解決策の提案`}),G(`div`,{class:`sol-list`,children:g.map((e,t)=>{let[n,r]=Tc[e.action]??[``,`info`];return G(`div`,{class:`sol ${t===0?`best`:``}`,children:[t===0&&G(`div`,{class:`badge-best`,children:[G(K,{name:`sparkles`,size:14}),`いちばん早く解決できそう`]}),G(`b`,{children:e.title}),G(`p`,{children:hc(e.detail,i)}),n&&G(`button`,{class:`btn sm`,onClick:()=>void w(e),children:[G(K,{name:r}),n]})]},e.id)})})]}),G(`button`,{class:`btn primary wide`,onClick:()=>void S(),children:[G(K,{name:`clipboard`}),`AIに聞く質問文をコピー`]}),G(`p`,{class:`hint`,children:`対象の用語・分からないこと・原因から、Claude アプリに貼る質問文を作ります。`}),G(`div`,{class:`f-label`,children:[`メモ`,G(`small`,{children:`〔 〕で囲んだ語は赤シートで隠れます`})]}),p?G(`textarea`,{class:`desc`,rows:5,value:s,placeholder:`分からない点・調べたこと・解決したことなど`,onInput:e=>f(e.target.value),onBlur:v}):G(`div`,{class:`desc dview`,onClick:()=>h(!0),children:G(Hi,{text:n.body,sheet:H.value.redSheet})}),G(`div`,{class:`meta-line`,children:[`作成 `,new Date(n.createdAt).toLocaleDateString(`ja-JP`),`・更新 `,new Date(n.updatedAt).toLocaleDateString(`ja-JP`)]}),G(`div`,{class:`sheet-actions`,children:G(`button`,{class:`danger`,onClick:async()=>{await J({title:`この苦手メモをゴミ箱に入れますか？`,ok:`ゴミ箱へ`,danger:!0})&&(C([{c:`weakMemos`,id:e}],`苦手メモをゴミ箱へ`),t())},children:[G(K,{name:`trash`}),`ゴミ箱へ`]})})]})}function Dc(){let e=ht.value,[t,n]=d([]),[r,i]=d(!1),a=e=>{let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t.join()===[...e].sort((e,t)=>o(e)-o(t)).join()&&t.length>1?[...t.slice(1),t[0]]:t},o=e=>j.get(`terms`,e)?.when.from??0;u(()=>{e&&(n(a(e)),i(!1))},[e]);let s=()=>{ht.value=null},c=[...t].sort((e,t)=>o(e)-o(t)),l=t.filter((e,t)=>o(e)===o(c[t])).length;return G(Y,{open:!!e,onClose:s,title:`並べ替え練習`,full:!0,children:G(`div`,{class:`form`,children:[G(`p`,{class:`hint`,children:`起きた順（古い順）に並べ替えてください。長押しで持ち上げるか、矢印ボタンで動かせます。`}),G(Vr,{class:`quiz-list`,items:t,getId:e=>e,onReorder:e=>{n(e),i(!1)},render:(e,t)=>{let n=j.get(`terms`,e),i=r&&o(e)===o(c[t.index]);return G(`div`,{class:`quiz-row ${r?i?`ok`:`ng`:``}`,children:[G(`span`,{class:`rank`,children:t.index+1}),G(`span`,{class:`nm`,children:n?.name}),r&&G(`span`,{class:`yr`,children:n?L(n.when.from):``}),G(`button`,{class:`iconbtn sm no-drag`,"aria-label":`上へ`,disabled:t.index===0,onClick:t.up,children:G(K,{name:`chevronUp`})}),G(`button`,{class:`iconbtn sm no-drag`,"aria-label":`下へ`,disabled:t.index===t.count-1,onClick:t.down,children:G(K,{name:`chevronDown`})})]})}}),r&&G(`p`,{class:`quiz-score`,children:l===t.length?`全問正解！`:`${t.length}問中 ${l}問正解`}),G(`div`,{class:`btn-row`,children:[G(`button`,{class:`btn primary`,onClick:()=>i(!0),children:[G(K,{name:`check`}),`答え合わせ`]}),G(`button`,{class:`btn`,onClick:()=>{n(a(t)),i(!1)},children:[G(K,{name:`shuffle`}),`もう一度`]})]})]})})}function Oc(){j.rev.value;let e=H.value.openGroupId,t=e?j.get(`groups`,e):void 0,n=()=>U({openGroupId:null});return u(()=>{e&&(!t||t.deletedAt)&&n()},[e,t]),G(Y,{open:!!t&&!t.deletedAt,onClose:n,class:`group-sheet`,children:t&&G(kc,{id:t.id,onClose:n},t.id)})}function kc({id:e,onClose:t}){let n=j.get(`groups`,e),r=je(n),i=De(n),[a,o]=d(n.name),[s,c]=d(n.memo),[u,f]=d(!1),p=j.settings.redSheet,m=(p.groups??[]).includes(e);return G(`div`,{class:`tsheet`,children:[G(`div`,{class:`sheet-top`,children:[G(`span`,{class:`pill`,children:[G(K,{name:`stack`}),`グループ`]}),i&&G(`span`,{class:`pill`,children:[L(i.from),i.to?`〜`+L(i.to):``]}),G(`span`,{class:`pill`,children:[r.length,`語`]})]}),G(`input`,{class:`title-input`,value:a,onInput:e=>o(e.target.value),onBlur:()=>{a.trim()&&a!==n.name&&ke(e,{name:a.trim()},`グループの名前を変更`)},"aria-label":`グループの名前`}),G(`div`,{class:`f-label`,children:`苦手度`}),G(`div`,{class:`seg weak`,children:[0,1,2,3].map(t=>G(`button`,{class:n.weakness===t?`on`:``,style:{"--wc":t?`var(--w${t})`:`var(--ink-4)`},onClick:()=>{let r=n.weakness===t?0:t;ke(e,{weakness:r},r?`グループの苦手度を ${r} に`:`グループの苦手度を解除`)},children:t?G(l,{children:[G(`i`,{}),t]}):`なし`},t))}),G(`div`,{class:`f-label`,children:[`重要度`,G(`small`,{children:n.importance?Br[n.importance]:`付けない`})]}),G(`div`,{class:`imp10`,children:[Array.from({length:10},(e,t)=>t+1).map(t=>G(`button`,{"aria-label":`重要度${t}`,class:n.importance&&t<=n.importance?`on`:``,style:{height:10+t*2.2+`px`},onClick:()=>ke(e,{importance:n.importance===t?void 0:t},`グループの重要度を変更`)},t)),G(`div`,{class:`imp-txt`,children:G(`b`,{children:n.importance??`−`})})]}),G(`div`,{class:`f-label`,children:[`メモ`,G(`small`,{children:`〔 〕で囲んだ語は赤シートで隠れます`})]}),u?G(`textarea`,{class:`desc`,rows:4,value:s,onInput:e=>c(e.target.value),onBlur:()=>{s!==n.memo&&ke(e,{memo:s},`グループのメモを編集`),f(!1)},autoFocus:!0}):G(`div`,{class:`desc dview`,onClick:()=>f(!0),children:G(Hi,{text:n.memo,sheet:H.value.redSheet,placeholder:`メモを書く…`})}),G(`div`,{class:`f-label`,children:[`中の用語`,G(`small`,{children:`タップで詳細`})]}),G(`div`,{class:`member-list`,children:[r.map(t=>G(`div`,{class:`mrow2`,children:[G(`span`,{class:`w ${t.weakness?`wk`+t.weakness:``}`}),G(`button`,{class:`nm`,onClick:()=>U({openTermId:t.id}),children:[t.name,G(`small`,{children:L(t.when.from)})]}),G(`button`,{class:`iconbtn sm`,"aria-label":`グループから外す`,onClick:()=>Be(e,t.id),children:G(K,{name:`x`})})]},t.id)),G(`button`,{class:`btn sm add`,onClick:()=>Sc(`グループに用語を追加`,t=>Me(e,t),{multi:!0,exclude:r.map(e=>e.id)}),children:[G(K,{name:`plus`}),`用語を追加`]})]}),G(`div`,{class:`action-list`,children:[G(`button`,{onClick:()=>{t(),U({groupFilter:e,tab:`timeline`}),i&&W(i.from)},children:[G(K,{name:`filter`}),`年表でこのグループだけ表示`]}),G(`button`,{onClick:()=>{let t=p.groups??[];j.setSettings({redSheet:{...p,groups:m?t.filter(t=>t!==e):[...t,e]}}),q(m?`赤シートの対象から外しました`:`赤シートの対象にしました（年表の「赤シート」で隠れます）`)},children:[G(K,{name:`eyeOff`}),m?`赤シートの対象から外す`:`赤シートで隠す`]}),G(`button`,{onClick:()=>{let e=Se(r.map(e=>e.id),`比較：${n.name}`);if(!e){q(`比較表には2語以上が必要です`,{tone:`warn`});return}t(),U({tab:`notes`,openNoteId:e.id})},children:[G(K,{name:`columns`}),`比較表を作る`]}),G(`button`,{onClick:()=>{let r=Ae({title:n.name,links:[{kind:`group`,id:e}]});t(),U({tab:`weak`,weakSeg:`memos`,openWeakMemoId:r.id})},children:[G(K,{name:`target`}),`苦手メモを書く`]}),G(`button`,{class:`danger`,onClick:async()=>{await J({title:`グループ「${n.name}」をゴミ箱に入れますか？`,body:`中の用語は消えません。`,ok:`ゴミ箱へ`,danger:!0})&&(C([{c:`groups`,id:e}],`グループ「${n.name}」をゴミ箱へ`),t())},children:[G(K,{name:`trash`}),`ゴミ箱へ`]})]})]})}var Ac=V(()=>Z(()=>import(`./Preview.js`).then(e=>({default:e.NotePreview})),[],import.meta.url)),jc=[[`table`,`表`,`cols3`],[`diagram`,`図`,`sitemap`],[`chart`,`グラフ`,`chartLine`]];function Mc(){let e=Mi.value,[n,r]=d(`table`),[i,a]=d(``),[o,s]=d(null),[c,f]=d(``),[p,m]=d(``),[h,g]=d(null),[_,v]=d(!0),y=t(null),b=t(null);u(()=>{e&&(a(``),s(null),f(``),g(null))},[e]);let x=()=>{Mi.value=!1},S=async()=>{let e=await Ws(xi[n]);q(e?`指示文をコピーしました。Claude アプリで写真を添付して、貼り付けて送ってください`:`コピーできませんでした`,{tone:e?`warn`:`error`,ms:5e3})},C=(e=i)=>{f(``);try{let t=Di(e,n);s(t),m(t.title),r(t.kind)}catch(e){s(null),f(e.message)}},w=async e=>{let t=e.target.files?.[0];if(e.target.value=``,!t)return;let n=await t.text();a(n),C(n)},E=()=>{if(!o)return;let e;if(h){let t=Date.now(),n={id:T(`img`),createdAt:t,updatedAt:t,name:h.name,type:h.type,blob:h};j.tx(`取り込み元の画像を保存`,e=>e.put(`images`,n)),e=n.id}let t=Ce(o.kind,p||o.title,{content:D(o)});e&&j.tx(`画像をつなぐ`,n=>{n.patch(`notes`,t.id,{imageId:e})}),x(),U({tab:`notes`,openNoteId:t.id}),`${t.name}`},D=e=>e.kind===`table`&&_?Oi(e.content):e.content,O=!!o&&o.kind===`table`&&o.content.cells.some(e=>e.some(e=>e.runs?.some(e=>e.b))),k=o?{id:`draft`,createdAt:0,updatedAt:0,kind:o.kind,name:p,tags:[],order:0,content:D(o)}:null;return G(Y,{open:e,onClose:x,title:`画像から取り込む`,full:!0,children:G(`div`,{class:`form import`,children:[G(`div`,{class:`f-label`,children:`① 何を取り込む？`}),G(`div`,{class:`seg three`,children:jc.map(([e,t,i])=>G(`button`,{class:n===e?`on`:``,onClick:()=>r(e),children:[G(K,{name:i}),t]},e))}),G(`button`,{class:`btn primary wide`,onClick:()=>void S(),children:[G(K,{name:`clipboard`}),`指示文をコピー`]}),G(`ol`,{class:`steps`,children:[G(`li`,{children:[`iPhone の `,G(`b`,{children:`Claude アプリ`}),`を開き、新しいチャットで `,G(`b`,{children:`写真を添付`}),`する（教科書・参考書の表や図を撮ったもの）`]}),G(`li`,{children:[`コピーした`,G(`b`,{children:`指示文を貼り付けて送る`})]}),G(`li`,{children:[`返ってきた結果を`,G(`b`,{children:`長押し →「コピー」`}),`して、このアプリに戻る`]})]}),G(`p`,{class:`hint`,children:`コツ：Claude アプリの「プロジェクト」に指示文を登録しておくと、次からは写真と「表」の一言だけで送れます（手順書を参照）。`}),G(`div`,{class:`f-label`,children:`② 結果を貼り付ける`}),G(`textarea`,{class:`paste`,rows:6,value:i,placeholder:`ここに貼り付け（前後の説明文があっても大丈夫です）`,onInput:e=>a(e.target.value)}),G(`div`,{class:`btn-row`,children:[G(`button`,{class:`btn`,onClick:()=>C(),disabled:!i.trim(),children:[G(K,{name:`check`}),`内容を確認`]}),G(`button`,{class:`btn`,onClick:()=>y.current?.click(),children:[G(K,{name:`fileImport`}),`ファイルから`]})]}),G(`input`,{ref:y,type:`file`,accept:`.json,.txt,.md,application/json,text/plain,text/markdown`,hidden:!0,onChange:w}),c&&G(`p`,{class:`err`,children:c}),o&&k&&G(l,{children:[G(`div`,{class:`f-label`,children:`③ 確かめて作る`}),o.warnings.length>0&&G(`ul`,{class:`issues`,children:o.warnings.map((e,t)=>G(`li`,{children:[`！ `,e]},t))}),G(`div`,{class:`import-pv`,children:G(it,{fallback:G(`div`,{class:`loading`,children:`表示の準備中…`}),children:G(Ac,{note:k,sheet:!1,height:260},_?`h`:`n`)})}),G(`label`,{class:`fld`,children:[G(`span`,{children:`名前`}),G(`input`,{value:p,onInput:e=>m(e.target.value)})]}),O&&G(`label`,{class:`switch-row`,children:[G(`span`,{children:`太字の語も赤シートで隠す（太字のまま。赤シートをオンにすると隠れます）`}),G(`input`,{type:`checkbox`,class:`switch`,checked:_,onChange:e=>v(e.target.checked)})]}),G(`label`,{class:`switch-row`,children:[G(`span`,{children:`元の画像も一緒に保存する（見比べ用。データは重くなります）`}),G(`input`,{type:`checkbox`,class:`switch`,checked:!!h,onChange:e=>{e.target.checked?b.current?.click():g(null)}})]}),h&&G(`p`,{class:`hint`,children:[`画像：`,h.name,`（`,Math.round(h.size/1024),`KB）`]}),G(`input`,{ref:b,type:`file`,accept:`image/*`,hidden:!0,onChange:e=>{let t=e.target.files?.[0];t&&g(t)}}),G(`button`,{class:`btn primary wide`,onClick:E,children:[G(K,{name:`plus`}),`編集できる`,o.kind===`table`?`表`:o.kind===`diagram`?`図`:`グラフ`,`として作る`]}),G(`p`,{class:`hint`,children:`取り込んだ内容は、この iPhone の中だけに保存されます（GitHub には上がりません）。`})]})]})})}var Nc=V(()=>Z(()=>import(`./MapView.js`).then(e=>({default:e.MapView})),[],import.meta.url)),Pc=V(()=>Z(()=>import(`./CompareView.js`).then(e=>({default:e.CompareView})),[],import.meta.url)),Fc=[{id:`timeline`,icon:`table`,label:`年表`},{id:`notes`,icon:`notebook`,label:`ノート`},{id:`weak`,icon:`target`,label:`苦手`},{id:`map`,icon:`map2`,label:`地図`},{id:`more`,icon:`dots`,label:`その他`}],Ic=864e5;function Lc(){j.rev.value;let e=H.value.tab,t=j.list(`terms`).filter(e=>e.weakness>0).length,n=j.meta.lastBackupAt??0,r=j.meta.createdAt??Date.now(),i=Date.now()-Math.max(n,r)>j.settings.backupReminderDays*Ic,[a]=d(bt),o=ki.value;return u(()=>{let e=e=>{e.target.closest(`input,textarea,select`)||(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`z`&&(e.preventDefault(),e.shiftKey?Rr():Lr())};return addEventListener(`keydown`,e),()=>removeEventListener(`keydown`,e)},[]),G(`div`,{class:`app`,children:[a&&!H.value.dismissed.iosTab&&G(`div`,{class:`banner warn`,children:[G(K,{name:`homeShare`}),G(`span`,{children:[`Safariで直接開いています。共有ボタン →「ホーム画面に追加」で追加し、`,G(`b`,{children:`ホーム画面のアイコンから`}),`開いてください（ここで入れたデータは、アイコンから開いたアプリとは別扱いになります）。`]}),G(`button`,{class:`iconbtn sm`,"aria-label":`閉じる`,onClick:()=>U({dismissed:{...H.value.dismissed,iosTab:Date.now()}}),children:G(K,{name:`x`})})]}),gt.value&&G(`div`,{class:`banner info`,children:[G(K,{name:`refresh`}),G(`span`,{children:`新しいバージョンがあります。`}),G(`button`,{class:`btn sm primary`,onClick:()=>void yt(),children:`更新する`})]}),G(`main`,{class:`screen-area`,children:o?G(it,{fallback:G(`div`,{class:`loading`,children:`読み込み中…`}),children:G(Pc,{})}):G(l,{children:[e===`timeline`&&G(Ns,{}),e===`notes`&&G(Na,{}),e===`weak`&&G(gc,{}),e===`map`&&G(it,{fallback:G(`div`,{class:`loading`,children:`地図を読み込み中…`}),children:G(Nc,{})}),e===`more`&&G($s,{})]})}),G(`nav`,{class:`tabbar`,children:Fc.map(n=>G(`button`,{class:`tab ${e===n.id&&!o?`on`:``}`,onClick:()=>{o&&(ki.value=null),U({tab:n.id})},"aria-current":e===n.id?`page`:void 0,children:[G(K,{name:n.icon}),n.label,n.id===`weak`&&t>0&&G(`span`,{class:`badge`,children:t}),n.id===`more`&&(i||Ys.value.length>0)&&G(`span`,{class:`dot`})]},n.id))}),G(Vs,{}),G(Oc,{}),G(wc,{}),G(Dc,{}),G(Wa,{}),G(Ka,{}),G(Mc,{}),G(wa,{}),G(_s,{}),G(xc,{}),G(Pr,{}),G(Ir,{})]})}function Rc(){let e=window.visualViewport;if(!e)return;let t=document.documentElement,n=0,r=()=>{n=0;let r=Math.max(0,Math.round(window.innerHeight-e.height));t.style.setProperty(`--vvh`,Math.round(e.height)+`px`),t.classList.toggle(`kb-open`,r>120),(window.scrollY!==0||e.offsetTop>0)&&window.scrollTo(0,0)},i=()=>{n||=requestAnimationFrame(r)};e.addEventListener(`resize`,i),e.addEventListener(`scroll`,i),window.addEventListener(`scroll`,i),r();let a=e=>e instanceof HTMLElement&&(e.matches(`input:not([type=checkbox]):not([type=range]):not([type=file]), textarea, select`)||e.isContentEditable);document.addEventListener(`focusin`,e=>{if(!a(e.target))return;let t=e.target;for(let e of[80,350,700])setTimeout(()=>{r(),document.activeElement===t&&t.scrollIntoView({block:`nearest`})},e)}),document.addEventListener(`focusout`,()=>setTimeout(r,250))}var zc=document.getElementById(`app`),Bc=matchMedia(`(prefers-color-scheme: dark)`);function Vc(){j.rev.value;let e=j.settings.theme,t=e===`dark`||e===`auto`&&Bc.matches,n=document.documentElement;n.classList.toggle(`theme-dark`,t),n.classList.toggle(`theme-light`,!t),document.querySelector(`meta[name="theme-color"]`)?.setAttribute(`content`,t?`#171513`:`#F4F0E6`);try{localStorage.setItem(`nhnote.theme`,e)}catch{}}f(Vc),Bc.addEventListener(`change`,Vc);var Hc=()=>{j.flush(),lt()};document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&Hc()}),addEventListener(`pagehide`,Hc),j.onError=e=>q(e,{tone:`error`,ms:6e3}),Rc();for(let e of[`gesturestart`,`gesturechange`,`gestureend`])document.addEventListener(e,e=>e.preventDefault(),{passive:!1});document.addEventListener(`touchmove`,e=>{e.touches.length>1&&!e.target?.closest?.(`[data-own-pinch]`)&&e.preventDefault()},{passive:!1}),he().then(e=>{n(G(Lc,{}),zc),document.getElementById(`splash`)?.remove();for(let t of e.notices)q(t,{ms:6e3,tone:`warn`});vt(),_e().then(e=>{Ys.value=e.pending;for(let t of e.notices)q(t,{ms:6e3,tone:`warn`})})}).catch(e=>{document.getElementById(`splash`)?.remove(),zc.innerHTML=``;let t=document.createElement(`div`);t.className=`fatal`,t.innerHTML=`<h1>起動できませんでした</h1><p></p><p class="hint">データは消えていません。アプリを閉じて開き直してください。直らない場合は、この画面のスクリーンショットを保存しておいてください。</p>`,t.querySelector(`p`).textContent=e instanceof Error?e.message:String(e),zc.append(t),vt()});export{Wr as A,U as B,pi as C,Ur as D,Yr as E,q as F,V as H,K as I,G as L,zr as M,Y as N,Jr as O,J as P,W as R,mi as S,Gr as T,it as U,H as V,ki as _,Va as a,di as b,sa as c,na as d,ia as f,ji as g,Bi as h,rs as i,Xr as j,Kr as k,la as l,Hi as m,Ns as n,Z as o,$i as p,hs as r,da as s,Sc as t,aa as u,fi as v,qr as w,hi as x,li as y,ut as z};