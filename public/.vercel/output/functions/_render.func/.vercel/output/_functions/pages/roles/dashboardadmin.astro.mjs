/* empty css                                     */
import { c as createComponent, r as renderTemplate, e as renderComponent, a as createAstro } from '../../chunks/astro/server_BNvYKVAo.mjs';
import 'kleur/colors';
import { $ as $$Pastilla } from '../../chunks/Pastilla_WAqMDmQa.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Cllgrhz5.mjs';
import { c as checkUserRole } from '../../chunks/roleBasedRedirect_CiRNY80n.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$DashboardAdmin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DashboardAdmin;
  const userData = await checkUserRole(Astro2, ["admin"]);
  const allowedRoles = ["admin"];
  if (!userData || !allowedRoles.includes(userData.role)) {
    return Astro2.redirect("/signin");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gestor de usuarios" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Pastilla", $$Pastilla, { "title": "Gestor de usuarios" })} ` })}`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/roles/dashboardAdmin.astro", void 0);

const $$file = "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/roles/dashboardAdmin.astro";
const $$url = "/roles/dashboardAdmin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DashboardAdmin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
