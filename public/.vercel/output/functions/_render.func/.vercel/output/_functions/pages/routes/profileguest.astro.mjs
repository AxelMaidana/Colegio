/* empty css                                     */
import { c as createComponent, r as renderTemplate, e as renderComponent, a as createAstro, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BNvYKVAo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Cllgrhz5.mjs';
import { c as checkUserRole } from '../../chunks/roleBasedRedirect_CiRNY80n.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$ProfileGuest = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProfileGuest;
  const adminProfile = {
    joinedAt: "12 de Octubre de 2023",
    profileImage: "https://avatars.githubusercontent.com/u/96579172?v=4",
    // URL de la imagen de perfil
    stats: {
      usersManaged: 120,
      coursesCreated: 25,
      lastLogin: "10 de Octubre de 2024"
    }
  };
  const userData = await checkUserRole(Astro2, ["guest"]);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Perfil de estudiante invitado" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center m-6 my-20"> <div class="w-full max-w-4xl"> <!-- Sección superior del perfil (foto y detalles) --> <div class="flex items-center"> <img${addAttribute(adminProfile.profileImage, "src")} alt="Foto de perfil" class="w-44 h-44 rounded-full border-2 border-gray-300"> <div class="ml-6"> <h1 class="text-4xl font-bold">${userData.name}</h1> <p class="text-gray-500">${userData.email}</p> <p class="text-blue-500 font-semibold">${userData.role}</p> <p class="text-sm text-gray-400">Miembro desde ${adminProfile.joinedAt}</p> </div> </div> <!-- Barra de navegación de acciones --> <div class="flex mt-8 space-x-4 border-b border-gray-300 pb-2"> <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded">
Gestionar Usuarios
</button> <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded">
Crear Curso
</button> <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded">
Configuración
</button> </div> <!-- Sección de estadísticas --> <div class="mt-10 grid grid-cols-3 gap-4 text-center"> <div class="p-4 bg-white shadow-md rounded-lg"> <p class="text-2xl font-bold">${adminProfile.stats.usersManaged}</p> <p class="text-gray-600">Usuarios Gestionados</p> </div> <div class="p-4 bg-white shadow-md rounded-lg"> <p class="text-2xl font-bold">${adminProfile.stats.coursesCreated}</p> <p class="text-gray-600">Cursos Creados</p> </div> <div class="p-4 bg-white shadow-md rounded-lg"> <p class="text-2xl font-bold">${adminProfile.stats.lastLogin}</p> <p class="text-gray-600">Último Inicio de Sesión</p> </div> </div> <!-- Sección de actividad reciente (opcional) --> <div class="mt-6"> <h2 class="text-xl font-bold mb-4">Actividad Reciente</h2> <ul> <li class="border-b border-gray-300 py-2"> <span class="font-semibold">10 de Octubre de 2024:</span> Aprobó la inscripción de María López en el curso "Enfermería Básica".
</li> <li class="border-b border-gray-300 py-2"> <span class="font-semibold">8 de Octubre de 2024:</span> Creó el curso "Cuidado Intensivo".
</li> <li class="border-b border-gray-300 py-2"> <span class="font-semibold">7 de Octubre de 2024:</span> Editó la descripción del curso "Cuidados Neonatales".
</li> </ul> </div> </div> </div> ` })}`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/routes/profileGuest.astro", void 0);

const $$file = "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/routes/profileGuest.astro";
const $$url = "/routes/profileGuest";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ProfileGuest,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
