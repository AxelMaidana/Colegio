/* empty css                                     */
import { c as createComponent, r as renderTemplate, e as renderComponent, a as createAstro, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BNvYKVAo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Cllgrhz5.mjs';
import { P as PermissionsDropdown, C as CoursesDropdown } from '../../chunks/CoursesDropdown_BD3EQsmE.mjs';
import { c as checkUserRole } from '../../chunks/roleBasedRedirect_CiRNY80n.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, updateDoc, doc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
export { renderers } from '../../renderers.mjs';

function ProfileImageUpload({ initialImageUrl }) {
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const storage = getStorage();
      const auth = getAuth();
      const db = getFirestore();
      if (!auth.currentUser) {
        throw new Error("No user is currently logged in");
      }
      const storageRef = ref(storage, `profile_images/${auth.currentUser.uid}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      await updateDoc(doc(db, "users", auth.currentUser.uid), {
        profileImage: downloadURL
      });
      setImageUrl(downloadURL);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: imageUrl,
        alt: "Foto de perfil",
        className: "w-72 h-72 rounded-full cursor-pointer",
        onClick: handleImageClick
      }
    ),
    isUploading && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full", children: /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white" }) }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "file",
        ref: fileInputRef,
        onChange: handleFileChange,
        accept: "image/*",
        className: "hidden"
      }
    )
  ] });
}

const $$Astro = createAstro();
const $$ProfileAdmin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProfileAdmin;
  const adminProfile = {
    profileImage: "https://i.pinimg.com/enabled_hi/564x/58/6b/55/586b55d9f9d97556849e19d6018a5219.jpg",
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
  const allowedRoles = ["admin"];
  const userData = await checkUserRole(Astro2, ["admin"]);
  if (!userData || !allowedRoles.includes(userData.role)) {
    return Astro2.redirect("/signin");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Perfil de administrador" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto p-4 md:p-8 mb-auto"> <h1 class="text-4xl text-customBlack font-bold uppercase mb-12">${userData.name} ${userData.lastName}</h1> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <div class="md:col-span-1"> ${renderComponent($$result2, "ProfileImageUpload", ProfileImageUpload, { "initialImageUrl": userData.profileImage || adminProfile.profileImage, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/jsx/ProfileImageUpload", "client:component-export": "default" })} </div> <div class="md:col-span-2"> <div class="mb-6"> ${renderComponent($$result2, "PermissionsDropdown", PermissionsDropdown, { "permissions": adminProfile.permissions, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/jsx/PermissionsDropdown", "client:component-export": "PermissionsDropdown" })} </div> <form class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"> <div> <label for="nombres" class="block text-sm font-medium text-gray-700">Nombres</label> <input type="text" id="nombres" name="nombres" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-500 px-4 py-2 cursor-not-allowed"${addAttribute(userData.name, "value")} readonly> </div> <div> <label for="apellidos" class="block text-sm font-medium text-gray-700">Apellidos</label> <input type="text" id="apellidos" name="apellidos" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-500 px-4 py-2 cursor-not-allowed"${addAttribute(userData.lastName, "value")} readonly> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700">Correo Electrónico</label> <input type="email" id="email" name="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-500 px-4 py-2 cursor-not-allowed"${addAttribute(userData.email, "value")} readonly> </div> <div> <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label> <input type="password" id="password" name="password" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-500 px-4 py-2 cursor-not-allowed" value="********" readonly> </div> <div> <label for="direccion" class="block text-sm font-medium text-gray-700">Dirección</label> <input type="text" id="direccion" name="direccion" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-500 px-4 py-2 cursor-not-allowed"${addAttribute(userData.address, "value")} readonly> </div> <div> <label for="dni" class="block text-sm font-medium text-gray-700">DNI</label> <input type="text" id="dni" name="dni" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-500 px-4 py-2 cursor-not-allowed"${addAttribute(userData.dni, "value")} readonly> </div> </form> <div> ${renderComponent($$result2, "CoursesDropdown", CoursesDropdown, { "courses": adminProfile.courses, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/jsx/CoursesDropdown", "client:component-export": "CoursesDropdown" })} </div> </div> </div> </div> ` })}`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/routes/profileAdmin.astro", void 0);

const $$file = "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/routes/profileAdmin.astro";
const $$url = "/routes/profileAdmin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ProfileAdmin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
