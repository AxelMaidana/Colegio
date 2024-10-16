/* empty css                                     */
import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_BNvYKVAo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Cllgrhz5.mjs';
export { renderers } from '../../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Acerca de Nosotros" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto py-12 px-6"> <h1 class="text-4xl font-bold text-center text-blue-500 mb-8">Acerca de Nosotros</h1> <!-- Introducción sobre la plataforma --> <section class="mb-12"> <h2 class="text-2xl font-semibold mb-4">Nuestra Plataforma</h2> <p class="text-gray-700 leading-relaxed">
Esta plataforma ha sido diseñada específicamente para facilitar la gestión de cursos, inscripciones y administración de usuarios para el <strong>Colegio de Enfermería</strong>. Nuestro objetivo principal es ofrecer una herramienta eficiente y fácil de usar que permita a los profesionales de enfermería acceder a cursos de capacitación y especialización, gestionados de manera clara y transparente por los administradores del colegio.
</p> </section> <!-- Misión, visión, y valores --> <section class="mb-12"> <h2 class="text-2xl font-semibold mb-4">Nuestra Misión</h2> <p class="text-gray-700 leading-relaxed">
Proporcionar a los profesionales de enfermería una plataforma integral para mejorar sus habilidades y acceder a oportunidades de aprendizaje continuo. Creemos que la educación constante es clave para el crecimiento profesional y para brindar una atención de calidad a los pacientes.
</p> </section> <section class="mb-12"> <h2 class="text-2xl font-semibold mb-4">Nuestra Visión</h2> <p class="text-gray-700 leading-relaxed">
Ser una plataforma líder en la formación y capacitación de enfermeros, promoviendo un entorno de aprendizaje dinámico que se adapte a las necesidades del sector de la salud, brindando a los profesionales las herramientas necesarias para enfrentar los desafíos actuales y futuros de la enfermería.
</p> </section> <section class="mb-12"> <h2 class="text-2xl font-semibold mb-4">Nuestros Valores</h2> <ul class="list-disc list-inside text-gray-700 leading-relaxed"> <li><strong>Compromiso:</strong> Nos comprometemos a ofrecer una plataforma confiable y accesible para todos los usuarios.</li> <li><strong>Innovación:</strong> Utilizamos tecnologías modernas para ofrecer la mejor experiencia de usuario posible.</li> <li><strong>Excelencia:</strong> Aspiramos a brindar un servicio de alta calidad que se adapte a las necesidades del sector de la salud.</li> <li><strong>Colaboración:</strong> Fomentamos la participación y el trabajo en equipo entre los administradores, docentes y alumnos.</li> </ul> </section> <!-- Información adicional --> <section> <h2 class="text-2xl font-semibold mb-4">¿Qué Ofrecemos?</h2> <p class="text-gray-700 leading-relaxed">
Nuestro sistema permite a los administradores gestionar cursos de manera eficiente, organizar inscripciones, y tener un control total sobre los usuarios registrados. Los usuarios pueden inscribirse a cursos, subir comprobantes de pago y estar al tanto de todas las novedades del colegio de enfermería.
</p> <p class="text-gray-700 leading-relaxed">
Cada curso cuenta con información detallada, inscripciones rápidas y seguras, así como notificaciones en tiempo real para mantener a todos los miembros del colegio informados y al día.
</p> </section> </div> ` })}`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/routes/about.astro", void 0);

const $$file = "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/routes/about.astro";
const $$url = "/routes/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
