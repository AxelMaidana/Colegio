import { c as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot, a as createAstro } from './astro/server_BNvYKVAo.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Nav, b as $$ViewTransitions, c as $$Footer } from './Footer_Dyo6q5Sh.mjs';
/* empty css                          */
import { c as checkUserRole } from './roleBasedRedirect_CiRNY80n.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const userData = await checkUserRole(Astro2, ["admin", "user", "guest"]);
  if (!userData) {
    return Astro2.redirect("/signin");
  }
  const { title } = Astro2.props;
  const headerData = {
    logoSrc: "/media/cechLogo.png",
    titleLine1: "Colegio de Enfermer\xEDa",
    titleLine2: "del Chaco",
    registerButtonText: "REGISTRATE",
    loginButtonText: "INICIAR SESI\xD3N"
  };
  const footerData = {
    logoSrc: "/media/cechLogo.png",
    copyrightText: "2024 Colegio de Enfermer\xEDa del Chaco. Todos los derechos reservados.",
    instagramLink: "https://instagram.com/tu-perfil",
    facebookLink: "https://facebook.com/tu-perfil"
  };
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="./media/cechLogo.png"><link rel="stylesheet" href="/styles/global.css"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="flex flex-col min-h-screen"> ${renderComponent($$result, "Header", $$Header, { "logoSrc": headerData.logoSrc, "titleLine1": headerData.titleLine1, "titleLine2": headerData.titleLine2, "registerButtonText": headerData.registerButtonText, "loginButtonText": headerData.loginButtonText, "user": userData.name, "role": userData.role })} ${renderComponent($$result, "Nav", $$Nav, {})} ${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "logoSrc": footerData.logoSrc, "copyrightText": footerData.copyrightText, "instagramLink": footerData.instagramLink, "facebookLink": footerData.facebookLink })} </body></html>`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/Layouts/Layout.astro", void 0);

export { $$Layout as $ };
