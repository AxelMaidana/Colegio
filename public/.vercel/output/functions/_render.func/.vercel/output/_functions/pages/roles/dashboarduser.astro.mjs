/* empty css                                     */
import { c as createComponent, r as renderTemplate, e as renderComponent, a as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_BNvYKVAo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Cllgrhz5.mjs';
import { c as checkUserRole } from '../../chunks/roleBasedRedirect_CiRNY80n.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$DashboardUser = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DashboardUser;
  const userData = await checkUserRole(Astro2, ["user"]);
  const allowedRoles = ["user"];
  if (!userData || !allowedRoles.includes(userData.role)) {
    return Astro2.redirect("/signin");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "User" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center m-6 text-center"> <section> <h1 class="text-blue-500 font-bold text-3xl m-6">Panel del ${userData.role}</h1> <p class="text-center">Hola <span class="font-bold uppercase">${userData.name}</span>, ¡bienvenido a la plataforma de Invitados!</p> <p class="text-center">Eres un <span class="font-bold uppercase">${userData.role}</span> y puedes acceder a las siguientes opciones:</p> <div class="p-4 rounded-lg shadow-md"> <ul class="font-semibold list-disc pl-8"> <li>Configuración de perfil de user</li> </ul> </div> </section> </div> ` })}`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/roles/dashboardUser.astro", void 0);

const $$file = "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/roles/dashboardUser.astro";
const $$url = "/roles/dashboardUser";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DashboardUser,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
