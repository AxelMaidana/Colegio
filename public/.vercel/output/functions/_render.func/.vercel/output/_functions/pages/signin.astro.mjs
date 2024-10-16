/* empty css                                  */
import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BNvYKVAo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Cllgrhz5.mjs';
export { renderers } from '../renderers.mjs';

const $$Signin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Iniciar Sesi\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col flex-grow items-center justify-center p-6 bg-white text-gray-900"> <div class="text-center"> <!-- Icono de inicio de sesión --> <div class="mb-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-customBlue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 12a5 5 0 1 0 -5 -5a5 5 0 0 0 5 5z"></path> <path d="M12 14a7 7 0 0 0 -5.5 2.5"></path> <path d="M12 14a7 7 0 0 1 5.5 2.5"></path> </svg> </div> <!-- Título y descripción --> <h1 class="text-3xl font-bold text-black/85">Acceso no autorizado</h1> <p class="text-gray-700 font-semibold mt-2">
Inicia sesión para continuar con tu cuenta.
</p> <!-- Botón --> <div class="mt-6"> <a class="inline-block px-6 py-3 text-white bg-customBlue rounded-xl transform transition-transform hover:scale-105 text-md font-bold" href="/">
Volver a Inicio
</a> </div> </div> </div> ` })}`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/signin.astro", void 0);

const $$file = "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/signin.astro";
const $$url = "/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Signin,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
