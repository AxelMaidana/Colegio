import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_B1WGm84d.mjs';
import { manifest } from './manifest_CVM3LtA4.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/auth/register.astro.mjs');
const _page3 = () => import('./pages/api/auth/rolebasedredirect.astro.mjs');
const _page4 = () => import('./pages/api/auth/signin.astro.mjs');
const _page5 = () => import('./pages/api/auth/signout.astro.mjs');
const _page6 = () => import('./pages/api/updateprofileimage.astro.mjs');
const _page7 = () => import('./pages/cursos/_slug_.astro.mjs');
const _page8 = () => import('./pages/cursos.astro.mjs');
const _page9 = () => import('./pages/middleware.astro.mjs');
const _page10 = () => import('./pages/roles/dashboardadmin.astro.mjs');
const _page11 = () => import('./pages/roles/dashboardguest.astro.mjs');
const _page12 = () => import('./pages/roles/dashboarduser.astro.mjs');
const _page13 = () => import('./pages/routes/about.astro.mjs');
const _page14 = () => import('./pages/routes/dashboard.astro.mjs');
const _page15 = () => import('./pages/routes/profile.astro.mjs');
const _page16 = () => import('./pages/routes/profileadmin.astro.mjs');
const _page17 = () => import('./pages/routes/profileguest.astro.mjs');
const _page18 = () => import('./pages/routes/profileuser.astro.mjs');
const _page19 = () => import('./pages/signin.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/auth/register.ts", _page2],
    ["src/pages/api/auth/roleBasedRedirect.ts", _page3],
    ["src/pages/api/auth/signin.ts", _page4],
    ["src/pages/api/auth/signout.ts", _page5],
    ["src/pages/api/updateProfileImage.ts", _page6],
    ["src/pages/cursos/[slug].astro", _page7],
    ["src/pages/cursos/index.astro", _page8],
    ["src/pages/middleware.ts", _page9],
    ["src/pages/roles/dashboardAdmin.astro", _page10],
    ["src/pages/roles/dashboardGuest.astro", _page11],
    ["src/pages/roles/dashboardUser.astro", _page12],
    ["src/pages/routes/about.astro", _page13],
    ["src/pages/routes/dashboard.astro", _page14],
    ["src/pages/routes/profile.astro", _page15],
    ["src/pages/routes/profileAdmin.astro", _page16],
    ["src/pages/routes/profileGuest.astro", _page17],
    ["src/pages/routes/profileUser.astro", _page18],
    ["src/pages/signin.astro", _page19],
    ["src/pages/index.astro", _page20]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "63361785-1d09-4ff9-be66-ec87f4769fdd",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
