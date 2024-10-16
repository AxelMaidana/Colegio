import { c as createComponent, r as renderTemplate, b as addAttribute, a as createAstro, e as renderComponent, m as maybeRenderHead, F as Fragment } from './astro/server_BNvYKVAo.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import { a as app } from './server_NbOeSSfT.mjs';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { c as checkUserRole } from './roleBasedRedirect_CiRNY80n.mjs';

const $$Astro$3 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$2 = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Login;
  const auth = getAuth(app);
  const db = getFirestore(app);
  let isAuthenticated = false;
  if (Astro2.cookies.has("__session")) {
    const sessionCookie = Astro2.cookies.get("__session")?.value;
    console.log("Cookie de sesi\xF3n:", sessionCookie);
    const decodedCookie = await auth.verifySessionCookie(sessionCookie || "");
    console.log("Cookie decodificada:", decodedCookie);
    if (decodedCookie) {
      isAuthenticated = true;
      const uid = decodedCookie.uid;
      const userDoc = await db.collection("users").doc(uid).get();
      const userData = userDoc.data();
      if (userData?.role === "admin") {
        console.log("Redirigiendo a dashboardAdmin");
        return Astro2.redirect("/roles/dashboardAdmin");
      } else if (userData?.role === "user") {
        console.log("Redirigiendo a dashboardUser");
        return Astro2.redirect("/roles/dashboardUser");
      } else {
        console.log("Redirigiendo a dashboardGuest");
        return Astro2.redirect("/roles/dashboardGuest");
      }
    }
  }
  return renderTemplate`<!-- Cargar los modales solo si el usuario NO está autenticado -->${!isAuthenticated && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div id="login-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 opacity-0 pointer-events-none transition-opacity duration-300"><div class="bg-white text-customBlack p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg max-w-md w-full transform transition-transform duration-300 scale-95 translate-y-4 relative z-60"><h2 class="text-2xl sm:text-3xl text-center font-bold mt-2 mb-6">INICIAR SESIÓN</h2><form action="/api/auth/signin" method="post" id="signin-form" class="flex flex-col"><div class="mb-4"><label for="email" class="block text-lg font-bold">Email</label><input type="email" id="email" name="email" class="border border-customBlack rounded-2xl w-full p-2" required></div><div class="mb-4"><label for="password" class="block text-lg font-bold">Contraseña</label><input type="password" id="password" name="password" class="border border-customBlack rounded-2xl w-full p-2" required></div><p class="text-red-500 text-sm font-bold" id="error-message" style="display: none;"></p><!-- Mensaje de error --><div class="flex justify-center flex-col items-center mt-10 mb-3"><button id="submit-login-btn" class="bg-customBlue transition duration-300 hover:scale-105 text-white text-sm font-semibold px-6 py-3 rounded-xl">INGRESAR</button><p class="text-customBlue text-sm font-xs pt-6">¿Aun no tienes una cuenta?</p><a href="#" id="register-link-2" class="text-customBlue underline text-xs font-bold tracking-tight">HAZ CLICK AQUI PARA REGISTRARTE</a></div></form></div></div>` })}`}<!-- Script para manejar el inicio de sesión -->`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/modales/Login.astro", void 0);

const $$Astro$1 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { logoSrc, titleLine1, titleLine2, loginButtonText, user, role } = Astro2.props;
  const userData = await checkUserRole(Astro2, ["admin", "user", "guest"]);
  if (!userData) {
    return Astro2.redirect("/signin");
  }
  return renderTemplate`${maybeRenderHead()}<header class="bg-customBlue text-white py-2"> <div class="container flex flex-row justify-between items-center mx-auto px-2 space-x-0"> <!-- Logo y Título --> <div class="flex items-center text-left | md:flex-row md:items-center gap-2 | md:gap-4"> <a href="/"> <img${addAttribute(logoSrc, "src")} alt="Logo CECH" class="h-14 w-auto sm:h-[4.5rem] md:h-20 lg:h-24"> </a> <a href="/" class="md:block"> <!-- Oculta el texto en mobile --> <h1 class="text-left text-xs tracking-wide font-medium leading-tight 
          sm:text-lg sm:leading-5
          md:text-xl md:leading-6 
          lg:text-2xl lg:leading-7"> ${titleLine1} <br> <span class="block text-left | md:text-left"> ${titleLine2} </span> </h1> </a> </div> <!-- Menú de usuario o botones --> <div class="flex items-center"> ${!user ? (
    // Mostrar botones de registro y login si no hay usuario
    renderTemplate`<div class="flex flex-col space-y-2 | sm:space-y-0 sm:flex-row sm:space-x-2"> <button id="login-button" class="bg-customCyan hover:scale-105 transition duration-300 ease-in-out border-[3px] border-customCyan rounded-full text-customBlack font-extrabold text-[9px] | sm:text-xs | md:text-sm | lg:text-sm px-2 py-1 h-7 w-26 | sm:h-8 sm:w-32 | md:h-9 md:w-36 | lg:h-9 lg:w-40"> ${loginButtonText} </button> </div>`
  ) : (
    // Mostrar avatar y menú si el usuario está autenticado
    renderTemplate`<div class="flex items-center relative"> <h1 class="text-md text-white font-bold hidden md:block">   ${!user ? renderTemplate`<span></span>` : role === "guest" ? renderTemplate`<div class="tracking-wider leading-tight"> <span>${userData.name} ${userData.lastName}</span> <span class="block text-xs text-cyan-400">Invitado</span> </div>` : role === "admin" ? renderTemplate`<div class="tracking-wider leading-tight"> <span>${userData.name} ${userData.lastName}</span> <span class="block text-xs text-cyan-400">Administrador</span> </div>` : role === "user" ? renderTemplate`<div class="tracking-wider leading-tight"> <span>${userData.name} ${userData.lastName}</span> <span class="block text-xs text-cyan-400">Usuario</span> </div>` : null} </h1> <img${addAttribute(userData.profileImageUrl, "src")} alt="Avatar" class="w-16 h-16 rounded-full cursor-pointer ml-4" id="avatar" aria-haspopup="true"> <div id="dropdown-menu" class="hidden absolute right-0 mt-52 w-48 bg-white rounded-lg shadow-xl z-50"> <ul class="p-2"> <li class="transform hover:scale-105 transition duration-200"> <a href="/routes/profile" class="flex items-center p-2 text-sm text-gray-900 rounded-lg hover:bg-gray-100 w-full text-left"> <!-- Icono de Perfil --> <svg class="mr-2" data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 0C5.95507 0 4.5 1.45507 4.5 3.25V3.75C4.5 5.54493 5.95507 7 7.75 7H8.25C10.0449 7 11.5 5.54493 11.5 3.75V3.25C11.5 1.45507 10.0449 0 8.25 0H7.75ZM6 3.25C6 2.2835 6.7835 1.5 7.75 1.5H8.25C9.2165 1.5 10 2.2835 10 3.25V3.75C10 4.7165 9.2165 5.5 8.25 5.5H7.75C6.7835 5.5 6 4.7165 6 3.75V3.25ZM2.5 14.5V13.1709C3.31958 11.5377 4.99308 10.5 6.82945 10.5H9.17055C11.0069 10.5 12.6804 11.5377 13.5 13.1709V14.5H2.5ZM6.82945 9C4.35483 9 2.10604 10.4388 1.06903 12.6857L1 12.8353V13V15.25V16H1.75H14.25H15V15.25V13V12.8353L14.931 12.6857C13.894 10.4388 11.6452 9 9.17055 9H6.82945Z" fill="currentColor"></path> </svg>
Perfil
</a> </li> <li class="transform hover:scale-105 transition duration-200"> ${role === "admin" && renderTemplate`<a href="/routes/dashboard" class="flex items-center p-2 text-sm text-gray-900 rounded-lg hover:bg-gray-100 w-full text-left"> <svg class="mr-2" data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447716 0.447715 0 1 0H15C15.5523 0 16 0.447716 16 1V10C16 10.5523 15.5523 11 15 11H12.5V9.5H14.5V1.5H1.5V9.5H3.5V11H1C0.447715 11 0 10.5523 0 10V1ZM8 14C6.84509 14 5.76659 14.5772 5.12596 15.5381L5 15.7271V16H3.5V15.5V15.2729L3.62596 15.084L3.87789 14.7061C4.79671 13.3278 6.34356 12.5 8 12.5C9.65644 12.5 11.2033 13.3278 12.1221 14.7061L12.374 15.084L12.5 15.2729V15.5V16H11V15.7271L10.874 15.5381C10.2334 14.5772 9.15491 14 8 14ZM7.75 6C6.50736 6 5.5 7.00736 5.5 8.25V8.75C5.5 9.99264 6.50736 11 7.75 11H8.25C9.49264 11 10.5 9.99264 10.5 8.75V8.25C10.5 7.00736 9.49264 6 8.25 6H7.75ZM7 8.25C7 7.83579 7.33579 7.5 7.75 7.5H8.25C8.66421 7.5 9 7.83579 9 8.25V8.75C9 9.16421 8.66421 9.5 8.25 9.5H7.75C7.33579 9.5 7 9.16421 7 8.75V8.25Z" fill="currentColor"></path> </svg>
Dashboard
</a>`} </li> <li class="transform hover:scale-105 transition duration-200"> <a href="/api/auth/signout" class="flex items-center p-2 text-sm text-gray-900 rounded-lg hover:bg-gray-100 w-full text-left"> <!-- Icono de Cerrar Sesión --> <svg class="mr-2" data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 13.5H6.75V15H2C1.44772 15 1 14.5523 1 14V2C1 1.44771 1.44772 1 2 1H6.75V2.5L2.5 2.5L2.5 13.5ZM12.4393 7.24999L10.4697 5.28031L9.93934 4.74998L11 3.68932L11.5303 4.21965L14.6036 7.29288C14.9941 7.6834 14.9941 8.31657 14.6036 8.70709L11.5303 11.7803L11 12.3106L9.93934 11.25L10.4697 10.7197L12.4393 8.74999L5.75 8.74999H5V7.24999H5.75L12.4393 7.24999Z" fill="currentColor"></path></svg>
Cerrar Sesión
</a> </li> </ul> </div> </div>`
  )} </div> </div> </header>  ${!user && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Login", $$Login, {})} ` })}`} `;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/layout/Header.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Menú de navegación -->${maybeRenderHead()}<nav class="bg-customGreen text-sm font-bold flex self-end md:justify-center lg:items-center rounded-l-xl lg:rounded-none lg:rounded-b-xl shadow-lg w-8 lg:w-full z-40 relative"> <div class="container mx-auto py-1 flex justify-center items-center"> <!-- Botón del menú para dispositivos móviles --> <button class="block lg:hidden text-white focus:outline-none" id="menu-toggle"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path> </svg> </button> <!-- Menú de navegación para escritorio --> <!-- Menú de navegación para escritorio --> <ul class="hidden lg:flex lg:justify-between lg:w-full text-white space-x-1"> <li class="flex-grow text-center border-r border-black border-opacity-20 last:border-0"> <a href="/institucional" class="
    block transform hover:scale-105 hover:underline transition-transform duration-100  
    text-white text-xs whitespace-nowrap | 2xl:text-sm
    py-1 px-2">
INSTITUCIONAL
</a> </li> <li class="flex-grow text-center border-r border-black border-opacity-20 last:border-0"> <a href="/dictamenes" class="
    block transform hover:scale-105 hover:underline transition-transform duration-100 
    text-white text-xs whitespace-nowrap | 2xl:text-sm
    py-1 px-2">
DICTÁMENES
</a> </li> <li class="flex-grow text-center justify-center border-r border-black border-opacity-20 last:border-0"> <a href="/matriculados" class="
    block transform hover:scale-105 hover:underline transition-transform duration-100 
    text-white text-xs whitespace-nowrap | 2xl:text-sm
    py-1 px-2">
MATRICULADOS ACTIVOS
</a> </li> <li class="flex-grow text-center border-r border-black border-opacity-20 last:border-0"> <a href="/novedades" class="
    block transform hover:scale-105 hover:underline transition-transform duration-100 
    text-white text-xs whitespace-nowrap | 2xl:text-sm
    py-1 px-2">
NOVEDADES
</a> </li> <li class="flex-grow text-center border-r border-black border-opacity-20 last:border-0"> <a href="/nombramientos" class="
    block transform hover:scale-105 hover:underline transition-transform duration-100 
    text-white text-xs whitespace-nowrap | 2xl:text-sm
    py-1 px-2">
NOMBRAMIENTOS
</a> </li> <li class="flex-grow text-center border-r border-black border-opacity-20 last:border-0"> <a href="/tramites" class="
    block transform hover:scale-105 hover:underline transition-transform duration-100 
    text-white text-xs whitespace-nowrap | 2xl:text-sm
    py-1 px-2">
TRÁMITES
</a> </li> <li class="flex-grow text-center border-r border-black border-opacity-20 last:border-0"> <a href="/becas" class="
    block transform hover:scale-105 hover:underline transition-transform duration-100 
    text-white text-xs whitespace-nowrap | 2xl:text-sm
    py-1 px-2">
BECAS
</a> </li> <li class="flex-grow text-center border-r border-black border-opacity-20 last:border-0"> <a href="/cursos" class="
    block transform hover:scale-105 transition-transform duration-100  hover:underline
    text-white text-xs whitespace-nowrap | 2xl:text-sm
    py-1 px-2">
ACT. ACADÉMICAS
</a> </li> <li class="flex-grow text-center"> <a href="/contacto" class="
    block transform hover:scale-105 transition-transform duration-100  hover:underline
    text-white text-xs whitespace-nowrap | 2xl:text-sm
    py-1 px-2">
CONTACTO
</a> </li> </ul> </div> </nav> <!-- Menú desplegable para móviles --> <div class="fixed top-0 right-0 h-screen bg-customGreen w-full max-w-[300px] shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out z-50 rounded-l-2xl" id="mobile-menu"> <button class="absolute top-4 right-4 text-white text-3xl" id="menu-close">&times;</button> <ul class="mt-16 text-white space-y-1"> <li> <a href="/institucional" class="flex items-center m-4 py-4 px-6 hover:bg-green-300 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-buildings"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 21v-15c0 -1 1 -2 2 -2h5c1 0 2 1 2 2v15"></path><path d="M16 8h2c1 0 2 1 2 2v11"></path><path d="M3 21h18"></path><path d="M10 12v0"></path><path d="M10 16v0"></path><path d="M10 8v0"></path><path d="M7 12v0"></path><path d="M7 16v0"></path><path d="M7 8v0"></path><path d="M17 12v0"></path><path d="M17 16v0"></path></svg>
Institucional
</a> </li> <li> <a href="/dictamenes" class="flex items-center m-4 py-4 px-6 hover:bg-green-300 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out"> <!-- Icono de Dictámenes --> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-text"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path><path d="M9 12h6"></path><path d="M9 16h6"></path></svg>
Dictámenes
</a> </li> <li> <a href="/matriculados" class="flex items-center m-4 py-4 px-6 hover:bg-green-300 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out"> <!-- Icono de Matriculados Activos --> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user-share"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h3"></path><path d="M16 22l5 -5"></path><path d="M21 21.5v-4.5h-4.5"></path></svg>
Matriculados Activos
</a> </li> <li> <a href="/novedades" class="flex items-center m-4 py-4 px-6 hover:bg-green-300 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out"> <!-- Icono de Novedades --> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-news"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"></path><path d="M8 8l4 0"></path><path d="M8 12l4 0"></path><path d="M8 16l4 0"></path></svg>
Novedades
</a> </li> <li> <a href="/nombramientos" class="flex items-center m-4 py-4 px-6 hover:bg-green-300 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out"> <!-- Icono de Bombramientos --> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-license"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"></path><path d="M9 7l4 0"></path><path d="M9 11l4 0"></path></svg>
Nombramientos
</a> </li> <li> <a href="/tramites" class="flex items-center m-4 py-4 px-6 hover:bg-green-300 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out"> <!-- Icono de Tramites --> <svg xmlns="http://www.w3.org/2000/svg" class="  mr-3 h-6 w-6 " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-box"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path><path d="M9 12v-1h6v1"></path><path d="M12 11v6"></path><path d="M11 17h2"></path></svg>
Tramites
</a> </li> <li> <a href="/becas" class="flex items-center m-4 py-4 px-6 hover:bg-green-300 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out"> <!-- Icono de Becas --> <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-school"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path></svg>
Becas
</a> </li> <li> <a href="/cursos" class="flex items-center m-4 py-4 px-6 hover:bg-green-300 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out"> <!-- Icono de Novedades --> <svg data-testid="geist-icon" class="h-6 w-6 mr-3" stroke-linejoin="round" viewBox="0 0 16 16" style="color: currentcolor;"><circle cx="13.5" cy="2.5" r="2.5" fill="white"></circle> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0351 4.5H2V6H4.67148C5.89632 6 6.83343 7.09104 6.64857 8.30185L6.43 9.73346C6.3381 10.2159 6.1906 10.6874 6 11.1401L4.33 15.2L5.92164 15.888L7.594 11.9162C7.72668 11.6011 8.27332 11.6011 8.406 11.9162L10.0784 15.888L11.67 15.2L10 11.1401C9.8094 10.6874 9.6619 10.2159 9.57 9.73346L9.2835 8.42904C9.00946 7.18131 9.95947 6 11.2369 6H11.562C10.9272 5.64775 10.3983 5.12781 10.0351 4.5ZM9.5 1.5C9.5 2.32843 8.82843 3 8 3C7.17157 3 6.5 2.32843 6.5 1.5C6.5 0.671573 7.17157 0 8 0C8.82843 0 9.5 0.671573 9.5 1.5Z" fill="currentColor"></path></svg>
Act. Académicas
</a> </li> <li> <a href="/contacto" class="flex items-center m-4 py-4 px-6 hover:bg-green-300 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out"> <!-- Icono de Novedades --> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-user"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z"></path><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z"></path></svg>
Contacto
</a> </li> </ul> </div> `;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/layout/Nav.astro", void 0);

const $$Astro = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const { logoSrc, copyrightText, instagramLink, facebookLink, padding } = Astro2.props;
  return renderTemplate`<!-- Footer -->${maybeRenderHead()}<footer${addAttribute(`bg-customBlack text-white p-2 md:px-12 md:gap-x-2 flex flex-col md:flex-row justify-between items-center ${padding}`, "class")}> <!-- Sección de la izquierda: imagen y texto --> <div class="flex flex-col md:flex-row items-center space-x-4 mb-4 gap-y-2 md:mb-0 | md:space-x-0 md:gap-x-2"> <!-- Imagen --> <img${addAttribute(logoSrc, "src")} alt="Logo CECH" class="h-16 w-auto md:h-20"> <!-- Texto --> <div class="text-xs w-48 text-center md:text-sm md:text-left md:w-auto "> <p>&copy; ${copyrightText}</p> </div> </div> <!-- Sección de la derecha: SVG y h3 --> <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 text-center md:text-left"> <div class="flex space-x-2"> <!-- SVG de Instagram --> <a${addAttribute(instagramLink, "href")} aria-label="Instagram"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-brand-instagram"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path> <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path> <path d="M16.5 7.5l0 .01"></path> </svg> </a> <!-- SVG de Facebook --> <a${addAttribute(facebookLink, "href")} aria-label="Facebook"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-brand-facebook"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path> </svg> </a> </div> <div class="md:border-r border-[1px] w-16 md:w-0 md:h-8 border-gray-300/10"></div> <div> <h3 class="text-sm md:text-md">Redes Sociales</h3> </div> </div> </footer>`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/layout/Footer.astro", void 0);

export { $$Header as $, $$Nav as a, $$ViewTransitions as b, $$Footer as c, $$Login as d };
