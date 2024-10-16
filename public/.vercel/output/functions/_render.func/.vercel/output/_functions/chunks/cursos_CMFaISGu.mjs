import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderSlot, a as createAstro } from './astro/server_BNvYKVAo.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$TextoInformativo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TextoInformativo;
  const { title, borderRadius, sizeText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex py-12 justify-center items-center w-full tracking-tight`, "class")}> <section${addAttribute(`relative bg-customBlue text-white pl-4 md:px-32 py-4 ${borderRadius} z-10 -mt-5 w-full shadow-custom shadow-black/40`, "class")}> <h3${addAttribute(`${sizeText} font-bold text-start md:text-start md:mb-2`, "class")}>${title}</h3> <p class="mb-2 mt-2 text-left max-w-full"> ${renderSlot($$result, $$slots["default"])} </p> </section> </div>`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/ActAcademicas/TextoInformativo.astro", void 0);

const cursos = {
  "cuidados-avanzados": {
    title: "Cuidados Avanzados en Pacientes Críticos",
    description: "Adquiere habilidades especializadas para brindar atención integral a pacientes en estado crítico. Este curso de 3 meses, dictado de manera sincrónica los sábados, está diseñado para fortalecer tus competencias en situaciones de alta complejidad clínica.",
    image: "/media/imagen_curso_1.jpg",
    duration: "3 meses",
    alt: "Curso_1",
    hours: "18:00 a 20:00",
    day: "Sábado",
    modality: "Sincrónica",
    price: "$12,000",
    Teachers: [
      {
        name: "Lic. María Pérez",
        description: "Enfermera con 15 años de experiencia en cuidados intensivos, especialista en atención de pacientes críticos y docente universitaria.",
      },
    ],
  },
  "gestion-en-servicios-de-salud": {
    title: "Gestión en Servicios de Salud",
    description: "Aprende a gestionar eficazmente los servicios de salud en diversas instituciones. Un curso asincrónico de 2 meses, donde podrás avanzar a tu propio ritmo, adquiriendo conocimientos clave para liderar en el sector sanitario.",
    image: "/media/imagen_curso_2.jpg",
    duration: "2 meses",
    alt: "Curso_2",
    hours: "A tu ritmo",
    day: "A tu ritmo",
    modality: "Asincrónica",
    price: "$10,000",
    Teachers: [
      {
        name: "Lic. Roberto López",
        description: "Licenciado en Enfermería y Magíster en Administración de Servicios de Salud, cuenta con más de 12 años de experiencia en la gestión de hospitales y clínicas privadas.",
      },
      {
        name: "Lic. Claudia Martínez",
        description: "Especialista en Recursos Humanos y Gestión Hospitalaria, Claudia ha trabajado durante 10 años en la planificación y organización de servicios de salud.",
      },
    ],
  },
  "atencion-primaria-de-la-salud": {
    title: "Atención Primaria de la Salud",
    description: "Este curso intensivo de 1 mes te permitirá profundizar en estrategias de atención primaria, enfocadas en la prevención y promoción de la salud. Se dicta de manera sincrónica los miércoles por la tarde.",
    image: "/media/imagen_curso_3.jpg",
    duration: "1 mes",
    alt: "Curso_3",
    hours: "16:00 a 19:00",
    day: "Miércoles",
    modality: "Sincrónica",
    price: "$8,000",
    Teachers: [
      {
        name: "Lic. Ana García",
        description: "Especialista en Atención Primaria de la Salud, con más de 10 años de experiencia en áreas rurales y urbanas.",
      },
    ],
  },
  "terapia-intravenosa-manejo-del-dolor": { 
    title: "Terapia Intravenosa y Manejo del Dolor", 
    description: "Mejora tus habilidades en el manejo del dolor mediante terapia intravenosa. Un curso de 6 semanas, completamente asincrónico, que te permitirá aprender de manera flexible y a tu propio ritmo.",    
    image: "/media/imagen_curso_4.jpeg", 
    duration: "6 semanas",
    alt: "Curso_4", 
    hours: "A tu ritmo", 
    day: "A tu ritmo",
    modality: "Asincrónica",    
    price: "$9,500", 
    Teachers: [
      { 
        name: "Lic. Carolina Díaz", 
        description: "Con 8 años de experiencia en el área de terapia intravenosa y manejo del dolor y enfoque humanista en el cuidado del paciente.", 
      }, 
    ], 
  },
};

export { $$TextoInformativo as $, cursos as c };
