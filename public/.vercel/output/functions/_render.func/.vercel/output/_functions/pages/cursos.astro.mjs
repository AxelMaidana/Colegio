/* empty css                                  */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as createAstro, e as renderComponent } from '../chunks/astro/server_BNvYKVAo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Cllgrhz5.mjs';
import 'clsx';
import { c as cursos, $ as $$TextoInformativo } from '../chunks/cursos_CMFaISGu.mjs';
import { c as checkUserRole } from '../chunks/roleBasedRedirect_CiRNY80n.mjs';
export { renderers } from '../renderers.mjs';

const $$Busqueda = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-between pt-8 pr-8"> <!-- Pastilla de texto a la izquierda --> <div class="relative flex-shrink-0"> <h3 class="md:text-2xl font-bold bg-customGreen text-white md:px-8 md:py-2.5 px-3 py-1 rounded-r-full text-center">
Cursos disponibles
</h3> </div> <!-- Barra de búsqueda a la derecha --> <div class="relative flex items-center ml-4 border-2 border-customGreen rounded-3xl"> <input type="text" placeholder="Buscar cursos" class="md:h-10 h-7 md:w-72 w-36 md:px-5 px-3 md:pr-10 text-sm bg-gray-100 rounded-3xl focus:outline-none"> <div class="absolute inset-y-0 right-0 flex items-center md:pr-3 pr-3"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"> <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path> </svg> </div> </div> </div>`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/ActAcademicas/Busqueda.astro", void 0);

const $$Astro$1 = createAstro();
const $$CardCurso = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardCurso;
  const { image, price, title, description, day, modality, hours, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-100 rounded-3xl shadow-custom shadow-black/40 overflow-hidden transition-all duration-500 hover:bg-customBlue group flex flex-col h-full"> <!-- Imagen con gradiente aplicado --> <div class="relative w-full h-40 flex-shrink-0"> <img${addAttribute(image, "src")}${addAttribute(alt, "alt")} class="w-full h-full object-cover"> <!-- Gradiente que cambia en hover --> <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white group-hover:from-transparent group-hover:to-blue-500 transition-all duration-1000 ease-in-out"></div> </div> <!-- Contenedor de información --> <div class="bg-white p-6 relative group-hover:bg-blue-500 transition-colors duration-0 ease-in-out flex flex-col flex-grow"> <div class="relative z-10 flex flex-col h-full"> <h2 class="text-3xl mb-1 font-bold text-customBlue group-hover:text-white transition-colors duration-200 ease-in-out line-clamp-2">${title}</h2> <p class="text-gray-700 mb-3 group-hover:text-white transition-colors duration-300 ease-in-out overflow-hidden text-ellipsis line-clamp-2">${description}</p> <div class="mt-auto"> <div class="flex flex-wrap gap-2 mb-6"> <span class="inline-block bg-gray-100 text-gray-800 px-3 py-1 border-solid border-2 border-customBlue rounded-full text-xs font-bold group-hover:bg-blue-500 group-hover:text-white group-hover:border-white transition-all duration-300 ease-in-out whitespace-nowrap">
Horario: <span class="font-medium">${hours}</span> </span> <span class="inline-block bg-gray-100 text-gray-800 px-3 py-1 border-solid border-2 border-customBlue rounded-full text-xs font-bold group-hover:bg-blue-500 group-hover:text-white group-hover:border-white transition-all duration-300 ease-in-out whitespace-nowrap">
Modalidad: <span class="font-medium">${modality}</span> </span> <span class="inline-block bg-gray-100 text-gray-800 px-3 py-1 border-solid border-2 border-customBlue rounded-full text-xs font-bold group-hover:bg-blue-500 group-hover:text-white group-hover:border-white transition-all duration-300 ease-in-out whitespace-nowrap">
Día: <span class="font-medium">${day}</span> </span> </div> <div class="flex justify-between items-center"> <span class="text-sm font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">${price}</span> <a href="/cursos/detalleCurso" class="underline text-sm font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">VER MÁS</a> </div> </div> </div> </div> </div>`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/ActAcademicas/CardCurso.astro", void 0);

const $$Grilla = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto mb-auto"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8"> ${Object.entries(cursos).map(([slug, curso]) => renderTemplate`<div class="flex justify-center"> <a${addAttribute(`/cursos/${slug}`, "href")}> ${renderComponent($$result, "CardCurso", $$CardCurso, { "title": curso.title, "description": curso.description, "image": curso.image, "duration": curso.duration, "alt": curso.alt, "hours": curso.hours, "day": curso.day, "modality": curso.modality, "price": curso.price })} </a> </div>`)} </div> </div>`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/ActAcademicas/Grilla.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const userData = await checkUserRole(Astro2, ["admin", "user", "guest"]);
  if (!userData) {
    return Astro2.redirect("/signin");
  }
  return renderTemplate`${renderComponent($$result, "LayoutNormal", $$Layout, { "title": "Act. Acad\xE9micas" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Busqueda", $$Busqueda, {})} ${renderComponent($$result2, "TextoInformativo", $$TextoInformativo, { "title": "Acceso gratuito a los cursos", "sizeText": "text-2xl md:text-3xl" }, { "default": ($$result3) => renderTemplate`
La inscripción y el acceso a los cursos son ${maybeRenderHead()}<strong>completamente gratuitos</strong>. Sin embargo, si deseas obtener un <strong>certificado</strong> al finalizar, este <strong>tiene un costo adicional.</strong> ` })} ${renderComponent($$result2, "Grilla", $$Grilla, {})} ` })}`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/cursos/index.astro", void 0);

const $$file = "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/cursos/index.astro";
const $$url = "/cursos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
