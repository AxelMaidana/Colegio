import{g as ne,i as oe,s as re}from"./index-68602d24.CujI1o3c.js";import"./index.esm2017.DO3flr3L.js";import{a as ie}from"./client.CxEmRUlx.js";function se(){const e=document.getElementById("avatar"),t=document.getElementById("dropdown-menu"),n=t.querySelectorAll("a");if(!e||!t||!n)return;function o(){const i=t.classList.toggle("hidden");localStorage.setItem("menuOpen",i?"false":"true")}function r(){t.classList.add("hidden"),localStorage.setItem("menuOpen","false")}e.addEventListener("click",i=>{i.stopPropagation(),o()}),document.addEventListener("click",i=>{const c=i.target;!e.contains(c)&&!t.contains(c)&&r()}),n.forEach(i=>{i.addEventListener("click",()=>{r()})}),localStorage.getItem("menuOpen")==="true"&&t.classList.remove("hidden")}document.addEventListener("astro:page-load",se);function U(){const e=document.getElementById("menu-toggle"),t=document.getElementById("mobile-menu"),n=document.getElementById("menu-close");t&&t.classList.add("translate-x-full"),e&&t&&n&&(e.removeEventListener("click",B),n.removeEventListener("click",N),e.addEventListener("click",B),n.addEventListener("click",N))}function B(){document.getElementById("mobile-menu").classList.toggle("translate-x-full")}function N(){document.getElementById("mobile-menu").classList.add("translate-x-full")}document.addEventListener("DOMContentLoaded",U);document.addEventListener("astro:page-load",U);const y="data-astro-transition-persist";function ae(e){for(const t of document.scripts)for(const n of e.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!t.src&&t.textContent===n.textContent||t.src&&t.type===n.type&&t.src===n.src)){n.dataset.astroExec="";break}}function ce(e){const t=document.documentElement,n=[...t.attributes].filter(({name:o})=>(t.removeAttribute(o),o.startsWith("data-astro-")));[...e.documentElement.attributes,...n].forEach(({name:o,value:r})=>t.setAttribute(o,r))}function le(e){for(const t of Array.from(document.head.children)){const n=fe(t,e);n?n.remove():t.remove()}document.head.append(...e.head.children)}function ue(e,t){t.replaceWith(e);for(const n of t.querySelectorAll(`[${y}]`)){const o=n.getAttribute(y),r=e.querySelector(`[${y}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&me(n)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const de=()=>{const e=document.activeElement;if(e?.closest(`[${y}]`)){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const t=e.selectionStart,n=e.selectionEnd;return()=>k({activeElement:e,start:t,end:n})}return()=>k({activeElement:e})}else return()=>k({activeElement:null})},k=({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(typeof t=="number"&&(e.selectionStart=t),typeof n=="number"&&(e.selectionEnd=n)))},fe=(e,t)=>{const n=e.getAttribute(y),o=n&&t.head.querySelector(`[${y}="${n}"]`);if(o)return o;if(e.matches("link[rel=stylesheet]")){const r=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},me=e=>{const t=e.dataset.astroTransitionPersistProps;return t==null||t==="false"},he=e=>{ae(e),ce(e),le(e);const t=de();ue(e.body,document.body),t()},ge="astro:before-preparation",pe="astro:after-preparation",we="astro:before-swap",ye="astro:after-swap",ve=e=>document.dispatchEvent(new Event(e));class V extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(t,n,o,r,i,c,a,l,d,u){super(t,n),this.from=o,this.to=r,this.direction=i,this.navigationType=c,this.sourceElement=a,this.info=l,this.newDocument=d,this.signal=u,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class be extends V{formData;loader;constructor(t,n,o,r,i,c,a,l,d,u){super(ge,{cancelable:!0},t,n,o,r,i,c,a,l),this.formData=d,this.loader=u.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class Ee extends V{direction;viewTransition;swap;constructor(t,n){super(we,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument,t.signal),this.direction=t.direction,this.viewTransition=n,this.swap=()=>he(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function Te(e,t,n,o,r,i,c,a,l){const d=new be(e,t,n,o,r,i,window.document,c,a,l);return document.dispatchEvent(d)&&(await d.loader(),d.defaultPrevented||(ve(pe),d.navigationType!=="traverse"&&P({scrollX,scrollY}))),d}function Ae(e,t){const n=new Ee(e,t);return document.dispatchEvent(n),n.swap(),n}const Le=history.pushState.bind(history),E=history.replaceState.bind(history),P=e=>{history.state&&(history.scrollRestoration="manual",E({...history.state,...e},""))},x=!!document.startViewTransition,M=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),W=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let f,p,A;const j=e=>document.dispatchEvent(new Event(e)),K=()=>j("astro:page-load"),Se=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},C="data-astro-transition-persist",H="data-astro-transition",R="data-astro-transition-fallback";let F,v=0;history.state?(v=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):M()&&(E({index:v,scrollX,scrollY},""),history.scrollRestoration="manual");async function ke(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function z(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function Ie(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const i=new Promise(c=>{o.onload=o.onerror=c});e=e.then(()=>i)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const G=(e,t,n,o,r)=>{const i=W(t,e),c=document.title;document.title=o;let a=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const l=history.state;E({...n.state,index:l.index,scrollX:l.scrollX,scrollY:l.scrollY},"",e.href)}else Le({...n.state,index:++v,scrollX:0,scrollY:0},"",e.href);if(document.title=c,A=e,i||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const l=history.state;location.href=e.href,history.state||(E(l,""),i&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function Re(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${C}="${n.getAttribute(C)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(i=>o.addEventListener(i,r)),document.head.append(o)}))}return t}async function X(e,t,n,o,r){async function i(l){function d(h){const m=h.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const u=document.getAnimations();document.documentElement.setAttribute(R,l);const g=document.getAnimations().filter(h=>!u.includes(h)&&!d(h));return Promise.allSettled(g.map(h=>h.finished))}if(r==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await i("old")}catch{}const c=document.title,a=Ae(e,n.viewTransition);G(a.to,a.from,t,c,o),j(ye),r==="animate"&&(!n.transitionSkipped&&!a.signal.aborted?i("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function De(){return f?.controller.abort(),f={controller:new AbortController}}async function J(e,t,n,o,r){const i=De();if(!M()||location.origin!==n.origin){i===f&&(f=void 0),location.href=n.href;return}const c=r?"traverse":o.history==="replace"?"replace":"push";if(c!=="traverse"&&P({scrollX,scrollY}),W(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){G(n,t,o,document.title,r),i===f&&(f=void 0);return}const a=await Te(t,n,e,c,o.sourceElement,o.info,i.controller.signal,o.formData,l);if(a.defaultPrevented||a.signal.aborted){i===f&&(f=void 0),a.signal.aborted||(location.href=n.href);return}async function l(s){const g=s.to.href,h={signal:s.signal};if(s.formData){h.method="POST";const w=s.sourceElement instanceof HTMLFormElement?s.sourceElement:s.sourceElement instanceof HTMLElement&&"form"in s.sourceElement?s.sourceElement.form:s.sourceElement?.closest("form");h.body=w?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(s.formData):s.formData}const m=await ke(g,h);if(m===null){s.preventDefault();return}if(m.redirected){const w=new URL(m.redirected);if(w.origin!==s.to.origin){s.preventDefault();return}s.to=w}if(F??=new DOMParser,s.newDocument=F.parseFromString(m.html,m.mediaType),s.newDocument.querySelectorAll("noscript").forEach(w=>w.remove()),!s.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!s.formData){s.preventDefault();return}const S=Re(s.newDocument);S.length&&!s.signal.aborted&&await Promise.all(S)}async function d(){if(p&&p.viewTransition){try{p.viewTransition.skipTransition()}catch{}try{await p.viewTransition.updateCallbackDone}catch{}}return p={transitionSkipped:!1}}const u=await d();if(a.signal.aborted){i===f&&(f=void 0);return}if(document.documentElement.setAttribute(H,a.direction),x)u.viewTransition=document.startViewTransition(async()=>await X(a,o,u,r));else{const s=(async()=>{await Promise.resolve(),await X(a,o,u,r,z())})();u.viewTransition={updateCallbackDone:s,ready:s,finished:new Promise(g=>u.viewTransitionFinished=g),skipTransition:()=>{u.transitionSkipped=!0,document.documentElement.removeAttribute(R)}}}u.viewTransition.updateCallbackDone.finally(async()=>{await Ie(),K(),Se()}),u.viewTransition.finished.finally(()=>{u.viewTransition=void 0,u===p&&(p=void 0),i===f&&(f=void 0),document.documentElement.removeAttribute(H),document.documentElement.removeAttribute(R)});try{await u.viewTransition.updateCallbackDone}catch(s){const g=s;console.log("[astro]",g.name,g.message,g.stack)}}async function Y(e,t){await J("forward",A,new URL(e,location.href),t??{})}function Pe(e){if(!M()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>v?"forward":"back";v=n,J(o,A,new URL(location.href),{},t)}const $=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&P({scrollX,scrollY})};{if(x||z()!=="none")if(A=new URL(location.href),addEventListener("popstate",Pe),addEventListener("load",K),"onscrollend"in window)addEventListener("scrollend",$);else{let e,t,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,$();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.scripts)e.dataset.astroExec=""}const Q=new Set,T=new WeakSet;let D,Z,_=!1;function xe(e){_||(_=!0,D??=e?.prefetchAll,Z??=e?.defaultStrategy??"hover",Me(),Oe(),Be(),Ce())}function Me(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{b(t.target,"tap")&&L(t.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function Oe(){let e;document.body.addEventListener("focusin",o=>{b(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),O(()=>{for(const o of document.getElementsByTagName("a"))T.has(o)||b(o,"hover")&&(T.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{L(r)},80)}function n(){e&&(clearTimeout(e),e=0)}}function Be(){let e;O(()=>{for(const t of document.getElementsByTagName("a"))T.has(t)||b(t,"viewport")&&(T.add(t),e??=Ne(),e.observe(t))})}function Ne(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,i=e.get(r);o.isIntersecting?(i&&clearTimeout(i),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),L(r.href)},300))):i&&(clearTimeout(i),e.delete(r))}})}function Ce(){O(()=>{for(const e of document.getElementsByTagName("a"))b(e,"load")&&L(e.href)})}function L(e,t){e=e.replace(/#.*/,"");const n=t?.ignoreSlowConnection??!1;if(He(e,n))if(Q.add(e),document.createElement("link").relList?.supports?.("prefetch")&&t?.with!=="fetch"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",e),document.head.append(o)}else fetch(e,{priority:"low"})}function He(e,t){if(!navigator.onLine||!t&&ee())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!Q.has(e)}catch{}return!1}function b(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||D)&&ee()?!0:n==null&&D||n===""?t===Z:n===t}function ee(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function O(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function Fe(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function q(e){return e.dataset.astroReload!==void 0}(x||Fe()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;q(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),Y(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||q(t))return;const n=t,o=e.submitter,r=new FormData(n,o),i=typeof n.action=="string"?n.action:n.getAttribute("action"),c=typeof n.method=="string"?n.method:n.getAttribute("method");let a=o?.getAttribute("formaction")??i??location.pathname;const l=o?.getAttribute("formmethod")??c??"get";if(l==="dialog"||location.origin!==new URL(a,location.href).origin)return;const d={sourceElement:o??n};if(l==="get"){const u=new URLSearchParams(r),s=new URL(a);s.search=u.toString(),a=s.toString()}else d.formData=r;e.preventDefault(),Y(a,d)}),xe({prefetchAll:!0}));document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("login-button"),t=document.getElementById("login-modal");function n(){t&&(t.classList.remove("opacity-0","pointer-events-none"),t.classList.add("opacity-100","pointer-events-auto"))}e&&e.addEventListener("click",n),window.onclick=function(o){o.target===t&&(t.classList.add("opacity-0","pointer-events-none"),t.classList.remove("opacity-100","pointer-events-auto"))}});const te=ne(ie);te.setPersistence(oe);const I=document.getElementById("signin-form");I&&I.addEventListener("submit",async e=>{e.preventDefault();const t=new FormData(I),n=t.get("email")?.toString(),o=t.get("password")?.toString();if(!(!n||!o))try{const i=await(await re(te,n,o)).user.getIdToken(),c=await fetch("/api/auth/signin",{method:"GET",headers:{Authorization:`Bearer ${i}`}});if(c.ok){const a=c.headers.get("Location")||"/";window.location.href=a}else{const a=await c.json(),l=document.getElementById("error-message");l&&(l.innerText=a.error||"Error al iniciar sesión. Verifica tus credenciales.",l.style.display="block")}}catch(r){console.error("Error durante el inicio de sesión:",r);const i=document.getElementById("error-message");i&&(i.innerText="Error al iniciar sesión. Verifica tus credenciales.",i.style.display="block")}});
