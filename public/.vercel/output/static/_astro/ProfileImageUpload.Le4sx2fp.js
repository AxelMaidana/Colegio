import{j as e}from"./jsx-runtime.CYYqVSlZ.js";import{r as t}from"./index.DJO9vBfz.js";import{g as b,a as w,r as x,u as U,b as y,c as j,d as I}from"./index.esm2017.DO3flr3L.js";import{g as N}from"./index-68602d24.CujI1o3c.js";function E({initialImageUrl:c}){const[d,u]=t.useState(c),[g,s]=t.useState(!1),o=t.useRef(null),f=()=>{o.current?.click()},m=async p=>{const i=p.target.files?.[0];if(i){s(!0);try{const r=b(),a=N(),h=w();if(!a.currentUser)throw new Error("No user is currently logged in");const l=x(r,`profile_images/${a.currentUser.uid}`);await U(l,i);const n=await y(l);await j(I(h,"users",a.currentUser.uid),{profileImage:n}),u(n)}catch(r){console.error("Error uploading image:",r),alert("Failed to upload image. Please try again.")}finally{s(!1)}}};return e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:d,alt:"Foto de perfil",className:"w-72 h-72 rounded-full cursor-pointer",onClick:f}),g&&e.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full",children:e.jsx("div",{className:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"})}),e.jsx("input",{type:"file",ref:o,onChange:m,accept:"image/*",className:"hidden"})]})}export{E as default};
