/* empty css                                     */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent, a as createAstro, F as Fragment } from '../../chunks/astro/server_BNvYKVAo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Cllgrhz5.mjs';
import { $ as $$Pastilla } from '../../chunks/Pastilla_WAqMDmQa.mjs';
import 'clsx';
import { d as $$Login } from '../../chunks/Footer_Dyo6q5Sh.mjs';
import { $ as $$Registro } from '../../chunks/Registro_DvAa4b-a.mjs';
/* empty css                                     */
import { c as cursos, $ as $$TextoInformativo } from '../../chunks/cursos_CMFaISGu.mjs';
import { c as checkUserRole } from '../../chunks/roleBasedRedirect_CiRNY80n.mjs';
export { renderers } from '../../renderers.mjs';

const $$NoLogin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Modal NoLogin -->${maybeRenderHead()}<div id="modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 h-screen opacity-0 pointer-events-none transition-opacity duration-300"> <div class="bg-customCyan text-customBlack p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg md:max-w-lg w-full transform transition-transform duration-300 scale-95 translate-y-4"> <h1 class="text-4xl sm:text-6xl md:text-7xl text-center font-extrabold mt-2 mb-6">¡Hola!👋</h1> <h2 class="text-xl sm:text-4xl text-center font-extrabold mb-4">PARECE QUE NO HAS INICIADO SESIÓN</h2> <p class="text-sm sm:text-base text-center font-medium mb-6">Para poder inscribirte a un curso, por favor inicia sesión o crea una cuenta.</p> <div class="flex justify-center flex-col items-center mb-3"> <button id="login-btn" class="bg-customBlue transition duration-300 hover:scale-105 text-white text-xl sm:text-2xl font-extrabold px-6 py-2 rounded-xl">INICIAR SESION</button> <p class="text-customBlue text-sm font-medium pt-2">¿Aun no tienes una cuenta?</p> <a href="#" id="register-link" class="text-customBlue underline text-xs font-bold tracking-tight">HAZ CLICK AQUI PARA REGISTRARTE</a> </div> </div> </div>`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/modales/NoLogin.astro", void 0);

const $$InscripcionExitosa = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Modal de certificación completada -->${maybeRenderHead()}<div id="final-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 opacity-0 pointer-events-none transition-opacity duration-300"> <div class="bg-customCyan text-customBlack p-8 md:p-10 lg:p-12 rounded-3xl shadow-lg max-w-md md:max-w-lg w-full transform transition-transform duration-300 scale-95 translate-y-4"> <h2 class="text-2xl md:text-3xl text-center font-extrabold mb-4">¡TE HAS INSCRIPTO CORRECTAMENTE!</h2> <p class="text-sm md:text-base text-center font-semibold mb-6">Tu inscripción se ha realizado con éxito. Nos pondremos en contacto contigo a la brevedad para brindarte más detalles.</p> <div class="flex justify-center flex-col items-center mb-3"> <button id="close-final-btn" class="bg-customBlue transition duration-300 hover:scale-105 text-white text-3xl font-extrabold px-6 py-2 rounded-xl">CONTINUAR</button> </div> </div> </div>`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/modales/InscripcionExitosa.astro", void 0);

const $$Astro$5 = createAstro();
const $$Banner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Banner;
  const { title, image, price, modality, duration, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-100 mx-4 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-52 rounded-3xl overflow-hidden" data-astro-cid-7sikqf6p> <div class="relative w-auto md:h-[600px] overflow-hidden" data-astro-cid-7sikqf6p> <img${addAttribute(image, "src")}${addAttribute(`Imagen de ${title}`, "alt")} class="w-full h-full object-cover" data-astro-cid-7sikqf6p> <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white" data-astro-cid-7sikqf6p></div> </div> <div class="bg-white p-4 relative" data-astro-cid-7sikqf6p> <div class="relative z-10" data-astro-cid-7sikqf6p> <h1 class="md:text-7xl text-5xl font-bold mb-2" data-astro-cid-7sikqf6p>${title}</h1> <div class="flex flex-wrap gap-8 my-6" data-astro-cid-7sikqf6p> <div data-astro-cid-7sikqf6p> <button id="inscribirme-btn" class="bg-customBlue hover:scale-105 transition duration-300 ease-in-out text-white px-10 py-3 rounded-xl text-xl font-semibold" data-astro-cid-7sikqf6p>
Inscribirme Ahora
</button> </div> <div class="flex flex-wrap gap-3 md:justify-end items-center" data-astro-cid-7sikqf6p> <span class="text-customCyan px-3 py-1 border-solid border-2 border-customCyan rounded-lg text-lg font-semibold" data-astro-cid-7sikqf6p>${price}</span> <span class="text-customCyan px-3 py-1 border-solid border-2 border-customCyan rounded-lg text-lg font-semibold" data-astro-cid-7sikqf6p>${modality}</span> <span class="text-customCyan px-3 py-1 border-solid border-2 border-customCyan rounded-lg text-lg font-semibold" data-astro-cid-7sikqf6p>${duration}</span> </div> </div> <p class="text-lg font-normal text-gray-600" data-astro-cid-7sikqf6p>${description}</p> </div> </div>  ${renderComponent($$result, "ModalNoLogin", $$NoLogin, { "data-astro-cid-7sikqf6p": true })} ${renderComponent($$result, "ModalLogin", $$Login, { "data-astro-cid-7sikqf6p": true })} ${renderComponent($$result, "ModalRegistro", $$Registro, { "data-astro-cid-7sikqf6p": true })} ${renderComponent($$result, "ModalInscripcionExitosa", $$InscripcionExitosa, { "data-astro-cid-7sikqf6p": true })} </div>  `;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/ActAcademicas/detalle/Banner.astro", void 0);

const $$Astro$4 = createAstro();
const $$SectionDocente = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SectionDocente;
  const { image1, title1, alt, description1, image2, title2, description2, TitleSection } = Astro2.props;
  const hasSecondTeacher = image2 && title2 && description2;
  return renderTemplate`<!-- Título del contenedor -->${maybeRenderHead()}<h3 class="text-2xl text-center text-customBlack font-bold pl-4 pb-4 | md:text-3xl | lg:text-start lg:pl-10">${TitleSection}</h3> <!-- Contenedor de docentes --> <div class="container mx-auto py-4 grid grid-cols-1 gap-10 justify-center items-center lg:grid-cols-[1fr_auto_1fr] lg:gap-0 lg:px-16"> <!-- Primera columna --> <div class="flex flex-col lg:flex-row items-center space-x-0 md:space-x-4 space-y-4 lg:space-y-0"> <!-- Imagen redonda --> <img${addAttribute(image1, "src")}${addAttribute(alt, "alt")} class="w-32 h-32 rounded-full object-cover bg-slate-100"> <!-- Título y descripción --> <div class="text-center lg:text-left"> <h2 class="text-xl font-semibold mb-2">${title1}</h2> <p class="text-gray-700 md:max-w-md lg:max-w-md max-w-xs">${description1}</p> </div> </div> <!-- Separador solo si hay un segundo docente --> ${hasSecondTeacher && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="hidden lg:block h-24 border-l border-gray-300/50 lg:mx-24"></div>  <div class="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-4 space-y-4 lg:space-y-0"> <!-- Imagen redonda --> <img${addAttribute(image2, "src")}${addAttribute(alt, "alt")} class="w-32 h-32 rounded-full object-cover bg-slate-100"> <!-- Título y descripción --> <div class="text-center lg:text-left"> <h2 class="text-xl font-semibold mb-2">${title2}</h2> <p class="text-gray-700 md:max-w-md lg:max-w-md max-w-xs">${description2}</p> </div> </div> ` })}`} </div>`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/ActAcademicas/detalle/SectionDocente.astro", void 0);

const $$Astro$3 = createAstro();
const $$InfoExtra = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$InfoExtra;
  const { duration, hours, day, modality } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 class="
font-bold text-2xl text-center text-customBlack | md:text-3xl md:text-center | lg:text-start
pl-4 pt-6
lg:pl-10 xl:pl-10 ">Información Extra</h2> <div class="
    flex flex-col | lg:flex-row
    justify-between items-center
    w-full
    py-8 px-2 | md:px-20 | lg:pl-8 lg:pr-0 | xl:pl-32
    space-y-6 | lg:space-y-0 lg:space-x-6 xl:space-x-8 | 2xl:space-x-10
  "> <!-- Tarjeta de Información --> <div class="
      flex flex-row items-center 
      border-[3px] border-customBlue rounded-2xl 
      space-x-4 w-full | md:w-full | lg:w-1/2 
      "> <!-- Columna de Íconos --> <div class="flex flex-col space-y-4 border-[3px] rounded-2xl px-3 py-3 border-customBlue -m-1"> <!-- svg 1 --> <svg class="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3M3 10h18M5 10v10m14-10v10M5 21h14M12 17v4"></path> </svg> <div class="w-full border-b border-gray-300/50"></div> <!-- svg 2 --> <svg class="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m-3-3H9m13 4a9 9 0 11-9-9 9 9 0 019 9z"></path> </svg> <div class="w-full border-b border-gray-300/50"></div> <!-- svg 3 --> <svg class="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12V8a4 4 0 10-8 0v4M21 21H3"></path> </svg> <div class="w-full border-b border-gray-300/50"></div> <!-- svg 4 --> <svg class="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 2.761-2.239 5-5 5s-5-2.239-5-5 2.239-5 5-5 5 2.239 5 5zM9 17v2m-1 0h2M21 21l-6-6"></path> </svg> </div> <!-- Columna de Texto --> <div class="flex flex-col space-y-4 pl-4 pr-8 py-3 text-start"> <div class="flex flex-row items-center"> <span class="font-bold text-gray-700 w-24">Duración:</span> <span class="ml-2">${duration}</span> </div> <div class="w-full border-b border-gray-300/50 my-2"></div> <div class="flex flex-row items-center"> <span class="font-bold text-gray-700 w-24">Horarios:</span> <span class="ml-2">${hours}</span> </div> <div class="w-full border-b border-gray-300/50 my-2"></div> <div class="flex flex-row items-center"> <span class="font-bold text-gray-700 w-24">Días:</span> <span class="ml-2">${day}</span> </div> <div class="w-full border-b border-gray-300/50 my-2"></div> <div class="flex flex-row items-center"> <span class="font-bold text-gray-700 w-24">Modalidad:</span> <span class="ml-2">${modality}</span> </div> </div> </div> <!-- Sección de duda --> <div class="
      w-full | md:w-full | lg:w-2/5 | xl:w-auto xl
      p-6 py-10 | xl:p-auto
      bg-customBlue 
      rounded-3xl | lg:rounded-r-none shadow-custom
      text-white text-center items-center 
      xl:hover:pr-64 transition-all duration-300 ease-in-out
    "> <h3 class="font-bold text-2xl lg:text-3xl 2xl:text-4xl">¿Tienes alguna duda?</h3> <p class="pl-2 pt-4">Deja tu pregunta en:</p> <p class="
      mt-2 pl-4 py-1 pr-3
      border-2 border-customCyan text-customCyan rounded-3xl inline-block 
      font-medium text-base | md:text-lg | xl:text-xl 
      ">
Duisconguerisus@gmail.com
</p> </div> </div>`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/ActAcademicas/detalle/InfoExtra.astro", void 0);

const $$Astro$2 = createAstro();
const $$CardSide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardSide;
  const { price } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="
    flex flex-col 
    justify-between text-center 
    overflow-hidden 
    py-8 | sm:p-4 | md:p-0 md:py-8
    md:flex-col md:gap-3 | lg:flex-row
    "> <!-- Contenedor de Precio del Certificado --> <div class="
      items-center
      text-white
      w-full md:w-3/5 lg:w-2/5
      py-6
      bg-customBlue rounded-3xl | md:rounded-none md:rounded-r-2xl
      shadow-custom shadow-black/40
      hover:scale-105 transition-all duration-300 ease-in-out mt-0 md:mt-0
      md:mr-auto
      "> <h2 class="font-bold text-lg">Precio del Certificado</h2> <h1 class="pl-2 font-extrabold text-3xl text-customCyan">${price}</h1> </div> <!-- Contenedor de Método de Pago --> <div class="
      items-center
      text-white
      w-full md:w-3/5 lg:w-2/5
      py-6
      bg-customBlue rounded-3xl | md:rounded-none md:rounded-l-2xl
      shadow-custom shadow-black/40
      hover:scale-105 transition-all duration-300 ease-in-out mt-6 md:mt-0
      md:ml-auto
      "> <h2 class="font-bold text-lg">Método de Pago</h2> <h1 class="pl-2 font-extrabold text-3xl text-customCyan">Transferencia Bancaria</h1> </div> </div>`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/ActAcademicas/detalle/CardSide.astro", void 0);

const $$Astro$1 = createAstro();
const $$Boton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Boton;
  const { title, rounded, color, size, sizeText, shadow, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(id, "id")}${addAttribute(`flex items-center justify-center ${size} px-6 py-3 text-white ${color} ${rounded} ${shadow} hover:scale-105 transition-all duration-300 ease-in-out`, "class")}> <div class="flex items-center space-x-2"> <p${addAttribute(`${sizeText} font-semibold text-center`, "class")}>${title}</p> </div> </button>`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/layout/Reusable/Boton.astro", void 0);

const $$PasoUno = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Modal principal -->${maybeRenderHead()}<div id="certificat-stepOne-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 hidden"> <div class="bg-white text-customBlack p-6 md:p-8 rounded-3xl shadow-lg max-w-md md:max-w-xl w-full transform transition-transform duration-300 scale-95 translate-y-4"> <div class="flex flex-col items-center mb-6"> <div class="flex items-center w-full"> <button class="flex-1 h-12 text-sm md:text-base rounded-2xl text-white bg-customBlue flex items-center justify-center font-semibold cursor-default">Formulario</button> <div class="w-20 border-t border-customBlue mx-2"></div> <button class="flex-1 h-12 rounded-2xl text-customBlue border-2 border-customBlue flex items-center justify-center font-semibold cursor-default">Pago</button> </div> </div> <h2 class="text-2xl md:text-3xl text-center font-bold mt-2 mb-6">SOLICITUD DE CERTIFICADO</h2> <form class="space-y-6"> <div class="mb-4"> <label for="first-name-certificate" class="block text-lg font-bold">Nombre</label> <input type="text" id="first-name-certificate" class="border border-customBlack rounded-2xl w-full p-2" required> </div> <div class="mb-4"> <label for="last-name-certificate" class="block text-lg font-bold">Apellido</label> <input type="text" id="last-name-certificate" class="border border-customBlack rounded-2xl w-full p-2" required> </div> <div class="mb-4"> <label for="dni-certificate" class="block text-lg font-bold">DNI</label> <input type="text" id="dni-certificate" class="border border-customBlack rounded-2xl w-full p-2" required> </div> <div class="mb-4"> <label for="birthdate-certificate" class="block text-lg font-bold">Fecha de Nacimiento</label> <input type="date" id="birthdate-certificate" class="border border-customBlack rounded-2xl w-full p-2" required> </div> <div class="flex justify-end pt-4 mt-8"> <button id="stepTwo-btn" class="text-customBlue underline transition duration-300 hover:scale-105 text-sm font-semibold">SIGUIENTE</button> </div> </form> </div> </div>`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/modales/PasoUno.astro", void 0);

const $$PasoDos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Modal de pago de Certificación -->${maybeRenderHead()}<div id="certificat-stepTwo-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 hidden"> <div class="bg-white text-customBlack p-6 md:p-8 rounded-3xl shadow-lg max-w-md md:max-w-xl w-full transform transition-transform duration-300 scale-95 translate-y-4"> <div class="flex flex-col items-center mb-6"> <div class="flex items-center w-full"> <button class="flex-1 h-12 text-sm md:text-base rounded-2xl text-customBlue border-2 border-customBlue flex items-center justify-center font-semibold cursor-default">Formulario</button> <div class="w-20 border-t border-customBlue mx-2"></div> <button class="flex-1 h-12  rounded-2xl text-white border-2 bg-customBlue flex items-center justify-center font-semibold cursor-default">Pago</button> </div> </div> <h2 class="text-2xl md:text-3xl text-center font-bold mt-2 mb-6">SOLICITUD DE CERTIFICADO</h2> <form> <div> <h2 class="block text-lg font-bold">Datos bancarios</h2> <p class="text-sm text-gray-700">Blablablabla</p> </div> <div> <h2 class="block text-lg font-bold">Datos bancarios</h2> <p class="text-sm text-gray-700">Blablablabla</p> </div> <div> <h2 class="block text-lg font-bold">Datos bancarios</h2> <p class="text-sm text-gray-700">Blablablabla</p> </div> <div class="mb-4 mt-4"> <h2 class="block text-lg font-bold">Comprobante</h2> <div class="bg-gray-300 rounded-2xl w-full h-40"></div> </div> <div class="flex justify-center flex-col items-center mt-10 mb-3"> <button id="stepThree-btn" class="bg-customBlue transition duration-300 hover:scale-105 text-white text-sm font-semibold px-6 py-3 rounded-2xl">FINALIZAR CERTIFICACIÓN</button> </div> </form> </div> </div>`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/modales/PasoDos.astro", void 0);

const $$CertificacionExitosa = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!--Certificación completada-->${maybeRenderHead()}<div id="certificat-stepThree-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 hidden"> <div class="bg-customCyan text-customBlack p-6 md:p-8 rounded-3xl shadow-lg max-w-md md:max-w-lg w-full transform transition-transform duration-300 scale-95 translate-y-4" id="modal-content"> <h2 class="text-3xl md:text-4xl text-center font-extrabold mb-4">¡SOLICITUD ENVIADA CON ÉXITO!</h2> <p class="text-sm md:text-base text-center font-semibold mb-6">Tu solicitud de certificado se ha realizado con éxito. Nos pondremos en contacto contigo a la brevedad para brindarte más detalles.</p> <div class="flex justify-center flex-col items-center mb-3"> <button id="close-btn" class="bg-customBlue transition duration-300 hover:scale-105 text-white text-lg md:text-3xl font-extrabold px-6 py-2 rounded-xl">CONTINUAR</button> </div> </div> </div>`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/modales/CertificacionExitosa.astro", void 0);

const $$Certificado = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col md:flex-row py-10 px-6 md:px-10 lg:px-20 xl:px-40 justify-between items-center bg-[url('/media/certificado.png')] bg-cover bg-center bg-no-repeat relative" data-astro-cid-67onksl7> <div class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white pointer-events-none" data-astro-cid-67onksl7></div> <div class="relative z-10" data-astro-cid-67onksl7> <h1 class="text-center md:text-start text-3xl md:text-3xl font-extrabold md:max-w-md text-black/85" data-astro-cid-67onksl7>¿Te gustaría obtener tu Certificado?</h1> <p class="text-center md:text-start text-gray-700 font-semibold mt-2 max-w-md md:max-w-xs lg:max-w-md pt-2" data-astro-cid-67onksl7>
Si estás interesado en recibir tu certificado, haz clic en el botón de abajo y lo gestionaremos para vos.
</p> </div> <div class="relative z-10 mt-8 | md:mt-0 | lg:p-0" data-astro-cid-67onksl7> ${renderComponent($$result, "Boton", $$Boton, { "title": "SOLICITAR CERTIFICADO", "shadow": "shadow-customButton shadow-black/40", "sizeText": "text-xl | md:text-xl | lg:text-2xl", "color": "bg-customBlue text-white", "rounded": "rounded-xl", "size": "w-full | md:w-auto | lg:w-auto", "id": "certificat-btn", "data-astro-cid-67onksl7": true })} </div> <!-- Modales --> ${renderComponent($$result, "PasoUno", $$PasoUno, { "data-astro-cid-67onksl7": true })} ${renderComponent($$result, "PasoDos", $$PasoDos, { "data-astro-cid-67onksl7": true })} ${renderComponent($$result, "CertificacionExitosa", $$CertificacionExitosa, { "data-astro-cid-67onksl7": true })} </div>  `;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/ActAcademicas/detalle/Certificado.astro", void 0);

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const userData = await checkUserRole(Astro2, ["admin", "user", "guest"]);
  if (!userData) {
    return Astro2.redirect("/signin");
  }
  const { slug } = Astro2.params;
  const curso = cursos[slug];
  if (!curso) {
    throw new Error("Curso no encontrado");
  }
  const hasSecondTeacher = curso.Teachers.length > 1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": curso.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Pastilla", $$Pastilla, { "title": "Informaci\xF3n del curso" })} ${renderComponent($$result2, "Banner", $$Banner, { "title": curso.title, "image": curso.image, "price": curso.price, "modality": curso.modality, "duration": curso.duration, "description": curso.description })} ${renderComponent($$result2, "TextoPDF", $$TextoInformativo, { "title": "Descargar el contenido del curso", "sizeText": "text-md md:text-xl", "borderRadius": "rounded-3xl" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<a href="/media/Certificado.pdf" download="Certificado.pdf" class="text-md font-light underline">
Descargar el programa en <strong>PDF</strong> </a> ` })} ${renderComponent($$result2, "SectionDocente", $$SectionDocente, { "TitleSection": "Profesores a cargo de la clase", "image1": "https://i.pinimg.com/564x/25/ee/de/25eedef494e9b4ce02b14990c9b5db2d.jpg", "alt": "", "title1": curso.Teachers[0].name, "description1": curso.Teachers[0].description, ...hasSecondTeacher && {
    image2: "https://i.pinimg.com/564x/25/ee/de/25eedef494e9b4ce02b14990c9b5db2d.jpg",
    title2: curso.Teachers[1].name,
    description2: curso.Teachers[1].description
  } })} ${renderComponent($$result2, "InfoExtra", $$InfoExtra, { "TitleSection": "Informaci\xF3n extra", "duration": curso.duration, "hours": curso.hours, "day": curso.day, "modality": curso.modality })} ${renderComponent($$result2, "CardSide", $$CardSide, { "title": curso.title, "hours": curso.hours, "day": curso.day, "modality": curso.modality, "price": curso.price })} ${renderComponent($$result2, "Certificado", $$Certificado, {})} ` })}`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/cursos/[slug].astro", void 0);

const $$file = "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/cursos/[slug].astro";
const $$url = "/cursos/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
