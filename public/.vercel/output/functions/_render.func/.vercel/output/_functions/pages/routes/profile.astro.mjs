/* empty css                                     */
import { c as createComponent, r as renderTemplate, e as renderComponent, a as createAstro, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BNvYKVAo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Cllgrhz5.mjs';
import { P as PermissionsDropdown, C as CoursesDropdown } from '../../chunks/CoursesDropdown_BD3EQsmE.mjs';
import { $ as $$Pastilla } from '../../chunks/Pastilla_WAqMDmQa.mjs';
import { c as checkUserRole } from '../../chunks/roleBasedRedirect_CiRNY80n.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Profile = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Profile;
  const profileDefaults = {
    permissions: [
      { id: "editProfiles", label: "Puede editar perfiles", checked: false },
      { id: "editCourses", label: "Puede editar cursos", checked: false },
      { id: "beNominator", label: "Puede ser nominador", checked: false },
      { id: "seeOwnCourses", label: "Puede ver sus propios cursos", checked: false },
      { id: "seeAllCourses", label: "Puede ver todos los cursos", checked: false }
    ],
    courses: [
      { id: 1, name: "Curso de algo", action: "Inscripci\xF3n" },
      { id: 2, name: "Curso de algo", action: "Descargar certificado" },
      { id: 3, name: "Curso de algo", action: "Descargar certificado" }
    ]
  };
  const userData = await checkUserRole(Astro2, ["admin", "user", "guest"]);
  if (!userData) {
    return Astro2.redirect("/signin");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Perfil" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Pastilla", $$Pastilla, { "title": "Mi Perfil" })} ${maybeRenderHead()}<div class="max-w-6xl mx-auto p-4 md:p-8 mb-auto rounded-3xl shadow-md"> <h1 class="text-4xl text-customBlack font-bold uppercase mb-12 md:ml-8 md:text-start">${userData.name} ${userData.lastName}</h1> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <div class="flex flex-col items-center md:col-span-1"> ${userData.profileImageUrl && renderTemplate`<img${addAttribute(userData.profileImageUrl, "src")} alt="Imagen de perfil" class="w-32 h-32 md:w-72 md:h-72 rounded-full object-cover">`} <!-- Botones redondos con iconos --> <div class="flex justify-center space-x-4 my-2"> <button class="flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full shadow hover:bg-gray-200 transition duration-300"> <img class="w-4 h-4" src="https://img.icons8.com/material/24/upload--v1.png" alt="upload--v1"> </button> <button class="flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full shadow hover:bg-gray-200 transition duration-300"> <img class="w-4 h-4" src="https://img.icons8.com/material/24/visible--v1.png" alt="visible--v1"> </button> </div> </div> <div class="md:col-span-2"> <!-- Sección condicional de permisos para admins --> ${userData.role === "admin" && renderTemplate`<div class="mb-6"> ${renderComponent($$result2, "PermissionsDropdown", PermissionsDropdown, { "permissions": profileDefaults.permissions, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/jsx/PermissionsDropdown", "client:component-export": "PermissionsDropdown" })} </div>`} <form class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"> <div> <label for="nombres" class="block text-sm font-semibold text-gray-700">Nombres</label> <input type="text" id="nombres" name="nombres" placeholder="Nombres" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-500 px-4 py-2 cursor-not-allowed"${addAttribute(userData.name, "value")} readonly> </div> <div> <label for="apellidos" class="block text-sm font-semibold text-gray-700">Apellidos</label> <input type="text" id="apellidos" name="apellidos" placeholder="Apellidos" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-500 px-4 py-2 cursor-not-allowed"${addAttribute(userData.lastName, "value")} readonly> </div> <div> <label for="email" class="block text-sm font-semibold text-gray-700">Correo Electrónico</label> <input type="email" id="email" name="email" placeholder="Correo Electrónico" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-500 px-4 py-2 cursor-not-allowed"${addAttribute(userData.email, "value")} readonly> </div> <div> <div class="flex justify-between"> <label for="password" class="block text-sm font-semibold text-gray-700">Contraseña</label> <button class="text-sm font-light underline">Editar</button> </div> <input type="password" id="password" name="password" placeholder="Contraseña" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-500 px-4 py-2 cursor-not-allowed" value="********" readonly> </div> <div> <label for="direccion" class="block text-sm font-semibold text-gray-700">Dirección</label> <input type="text" id="direccion" name="direccion" placeholder="Dirección" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-500 px-4 py-2 cursor-not-allowed"${addAttribute(userData.address, "value")} readonly> </div> <div> <label for="dni" class="block text-sm font-semibold text-gray-700">DNI</label> <input type="text" id="dni" name="dni" placeholder="DNI" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-500 px-4 py-2 cursor-not-allowed"${addAttribute(userData.dni, "value")} readonly> </div> </form> </div> </div> <!-- Sección de cursos, visible para todos los roles --> ${renderComponent($$result2, "CoursesDropdown", CoursesDropdown, { "courses": profileDefaults.courses, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/jsx/CoursesDropdown", "client:component-export": "CoursesDropdown" })} </div> ` })}`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/routes/profile.astro", void 0);

const $$file = "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/routes/profile.astro";
const $$url = "/routes/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Profile,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
