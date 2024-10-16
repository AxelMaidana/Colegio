import{r as a}from"./index.DJO9vBfz.js";/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),c=(...e)=>e.filter((r,t,o)=>!!r&&o.indexOf(r)===t).join(" ");/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=a.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:s="",children:n,iconNode:u,...i},d)=>a.createElement("svg",{ref:d,...w,width:r,height:r,stroke:e,strokeWidth:o?Number(t)*24/Number(r):t,className:c("lucide",s),...i},[...u.map(([m,p])=>a.createElement(m,p)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=(e,r)=>{const t=a.forwardRef(({className:o,...s},n)=>a.createElement(C,{ref:n,iconNode:r,className:c(`lucide-${h(e)}`,o),...s}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=l("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=l("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);export{g as C,v as a};
