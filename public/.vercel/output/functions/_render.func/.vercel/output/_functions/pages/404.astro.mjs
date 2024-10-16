/* empty css                                  */
import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BNvYKVAo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Cllgrhz5.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutNormal", $$Layout, { "title": "404 - Pagina no encontrada" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col flex-grow items-center justify-center p-6 bg-white text-gray-900"> <div class="text-center"> <!-- Icono de archivo --> <div class="mb-4"> <!-- Puedes reemplazar esto con una imagen similar a la que compartiste --> <svg xmlns="http://www.w3.org/2000/svg" class="h-32 w-32 mx-auto text-customBlue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-ambulance"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path> <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path> <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path> <path d="M6 10h4m-2 -2v4"></path></svg> </div> <!-- Texto de error 404 --> <h1 class="text-6xl font-bold text-gray-800">404</h1> <p class="text-lg text-gray-600 mt-2">
La página que buscas no existe.
</p> <!-- Enlace para volver al sitio --> <a href="/" class="mt-6 inline-block text-customBlue hover:underline">
⬅ Volver al inicio
</a> </div> </div> ` })}`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/404.astro", void 0);

const $$file = "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
