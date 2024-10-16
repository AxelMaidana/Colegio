/* empty css                                  */
import { c as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot, a as createAstro, m as maybeRenderHead } from '../chunks/astro/server_BNvYKVAo.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Nav, b as $$ViewTransitions, c as $$Footer } from '../chunks/Footer_Dyo6q5Sh.mjs';
/* empty css                                  */
import { c as checkUserRole } from '../chunks/roleBasedRedirect_CiRNY80n.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$LayoutIndex = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutIndex;
  const userData = await checkUserRole(Astro2, ["admin", "user", "guest"]);
  if (!userData) {
    return Astro2.redirect("/signin");
  }
  const { title } = Astro2.props;
  const footerData = {
    logoSrc: "/media/cechLogo.png",
    copyrightText: "2024 Colegio de Enfermer\xEDa del Chaco. Todos los derechos reservados.",
    instagramLink: "https://instagram.com/tu-perfil",
    facebookLink: "https://facebook.com/tu-perfil"
  };
  const headerData = {
    logoSrc: "/media/cechLogo.png",
    titleLine1: "Colegio de Enfermer\xEDa",
    titleLine2: "del Chaco",
    registerButtonText: "REGISTRATE",
    loginButtonText: "INICIAR SESI\xD3N"
  };
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="./media/cechLogo.png"><link rel="stylesheet" href="/styles/global.css"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="flex flex-col flex-grow"> ${renderComponent($$result, "Header", $$Header, { "logoSrc": headerData.logoSrc, "titleLine1": headerData.titleLine1, "titleLine2": headerData.titleLine2, "registerButtonText": headerData.registerButtonText, "loginButtonText": headerData.loginButtonText, "user": userData.name, "role": userData.role })} ${renderComponent($$result, "Nav", $$Nav, {})} ${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "logoSrc": footerData.logoSrc, "copyrightText": footerData.copyrightText, "instagramLink": footerData.instagramLink, "facebookLink": footerData.facebookLink, "padding": "md:pt-8 md:-mt-6 pt-10 -mt-6" })} </body></html>`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/Layouts/LayoutIndex.astro", void 0);

const Card = ({ title, imageUrl, date, isFocused }) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `h-full flex flex-col mb-3 bg-customBlue rounded-2xl overflow-visible shadow-lg transform transition duration-300 
      ${isFocused ? "scale-105 lg:scale-100" : "scale-95 lg:scale-100"} 
      ${isFocused ? "opacity-100" : "opacity-50 lg:opacity-100"}  // Aplica opacidad en pantallas menores a 1024px
      min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[260px] xl:min-h-[280px] min-w-[200px] sm:min-w-[250px] md:min-w-[300px] relative`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-1/2 transform -translate-x-1/2 bg-customBlue text-white font-base text-sm tracking-wider px-3 py-1 rounded-full shadow-md z-10", children: date }),
        /* @__PURE__ */ jsx("div", { className: "h-32 sm:h-28 md:h-32 lg:h-36 xl:h-40 overflow-hidden border-4 border-customBlue rounded-t-2xl", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "w-full h-full object-top object-cover",
            src: imageUrl,
            alt: title
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-24 p-2 lg:p-2 xl:p-2 flex justify-center items-center", children: /* @__PURE__ */ jsx("h3", { className: "font-bold text-white text-md mb-1 line-clamp-3 text-center", children: title }) })
      ]
    }
  );
};

const cardData = [
  { title: "Evento 1: Conferencia de Enfermería", imageUrl: "/media/image1.png", date: "01/02/24" },
  { title: "Evento 2: Taller de Primeros Auxilios", imageUrl: "/media/image3.png", date: "01/02/24" },
  { title: "Evento 3: Seminario de Ética en Enfermería", imageUrl: "/media/image1.png", date: "01/02/24" },
  { title: "Evento 4: Curso de Actualización en Cuidados Intensivos", imageUrl: "/media/image3.png", date: "01/02/24" },
  { title: "Evento 5: Jornada de Salud Mental", imageUrl: "/media/image1.png", date: "01/02/24" },
  { title: "Evento 6: Taller de Primeros Auxilios", imageUrl: "/media/image3.png", date: "01/02/24" },
  { title: "Evento 7: Seminario de Ética en Enfermería", imageUrl: "/media/image1.png", date: "01/02/24" },
  { title: "Evento 8: Curso de Actualización en Cuidados Intensivos", imageUrl: "/media/image3.png", date: "01/02/24" },
  { title: "Evento 9: Jornada de Salud Mental", imageUrl: "/media/image1.png", date: "01/02/24" }
];
const InfiniteCarrousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return /* @__PURE__ */ jsx(
    Swiper,
    {
      modules: [Pagination, Navigation, Autoplay],
      loop: true,
      centeredSlides: true,
      pagination: { clickable: true },
      navigation: true,
      autoplay: { delay: 2e3, disableOnInteraction: false },
      onSlideChange: (swiper) => setActiveIndex(swiper.realIndex),
      breakpoints: {
        320: {
          slidesPerView: 1.3,
          spaceBetween: 10
        },
        375: {
          slidesPerView: 1.4,
          spaceBetween: 15
        },
        425: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 30
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1440: {
          slidesPerView: 3.5,
          spaceBetween: 30
        },
        1600: {
          slidesPerView: 4.5,
          spaceBetween: 50
        },
        1920: {
          slidesPerView: 5.2,
          spaceBetween: 80
        }
      },
      className: "mySwiper overflow-visible",
      children: cardData.map((card, index) => /* @__PURE__ */ jsx(SwiperSlide, { className: "py-8 h-auto", children: /* @__PURE__ */ jsx(
        Card,
        {
          title: card.title,
          date: card.date,
          imageUrl: card.imageUrl,
          isFocused: index === activeIndex
        }
      ) }, index))
    }
  );
};

const $$PrincipalSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Sección de noticia destacada -->${maybeRenderHead()}<section class="relative w-full h-[30rem] -mt-8 z-10"> <img src="/media/banner.png" alt="Imagen principal" class="absolute top-0 left-0 w-full h-full object-cover z-0"> <div class="relative z-10 flex flex-col items-center justify-center h-full text-center md:text-center text-white p-4 md:p-6 bg-black bg-opacity-50"> <h2 class="text-2xl md:text-4xl font-bold -mt-6 md:-mt-8">Colegio de Enfermería del Chaco</h2> <p class="mt-4 md:mt-6 text-base md:text-lg max-w-full md:max-w-4xl px-4 md:px-0">
Espacio dedicado a la formación, capacitación y
desarrollo profesional de la comunidad de enfermería. Nos comprometemos a brindar
educación de calidad y ser el puente entre la teoría y la práctica.
</p> </div> </section> <!-- Sección de últimas noticias --> <section class="mt-8"> <div class="relative mx-0 w-max z-10"> <h3 class="text-2xl font-bold mb-6 bg-customGreen text-white md:px-8 px-6 py-2.5 rounded-r-full text-center">
Últimas Noticias
</h3> </div> <div class="overflow-hidden"> ${renderComponent($$result, "InfiniteCarrousel", InfiniteCarrousel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/jsx/InfiniteCarrousel.tsx", "client:component-export": "default" })} </div> </section> <!-- Seccion de Ubicacion con mapa interactivo --> ${renderComponent($$result, "LocationMap", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/jsx/LocationMap.tsx", "client:component-export": "default" })} <section class="relative bg-customBlue text-white py-12 sm:py-16 md:py-20 rounded-3xl z-10 -mt-6"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">  <div class="flex flex-col justify-center"> <h2 class="text-4xl text-center  sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold mb-4">
¡Contáctanos!
</h2> <p class="mb-6 lg:mb-0 mt-4 text-sm sm:text-base text-center">
¿Tienes alguna consulta o necesitas más información
            sobre nuestros cursos y servicios? Completa el formulario y nos pondremos en
            contacto contigo a la brevedad.
</p> </div>  <div class="bg-white p-6 sm:p-8 rounded-2xl shadow-md text-gray-700 z-20 w-full"> <h3 class="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-semibold mb-6 text-center text-gray-800">
Lorem ipsum dolor sit
</h3> <div class="flex flex-col lg:flex-row gap-6 2xl:gap-16">  <form class="space-y-4 w-full lg:w-1/2"> <input type="text" placeholder="Nombre y Apellido" class="w-full p-2 rounded-3xl border-gray-200 text-sm bg-gray-100"> <input type="text" placeholder="DNI" class="w-full p-2 rounded-3xl border-gray-200 text-sm bg-gray-100"> <input type="email" placeholder="Mail" class="w-full p-2 rounded-3xl border-gray-200 text-sm bg-gray-100"> <input type="tel" placeholder="Teléfono" class="w-full p-2 rounded-3xl border-gray-200 text-sm bg-gray-100"> </form>  <div class="w-full lg:w-1/2 aspect-[16/9] bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden"> <img src="/media/subir imagen.jpeg"${addAttribute(640, "width")}${addAttribute(360, "height")} class="w-full h-full object-cover"> </div> </div>  <div class="flex justify-center lg:justify-center mt-6"> <button type="submit" class="w-full sm:w-72 bg-customGreen text-white py-3 px-6 rounded-3xl transition-transform hover:scale-105">
Enviar
</button> </div> </div> </div> </div> </section>`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/Home/PrincipalSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutIndex", $$LayoutIndex, { "title": "Colegio de Enfermer\xEDa del Chaco" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PrincipalSection", $$PrincipalSection, {})} ` })}`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/index.astro", void 0);

const $$file = "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
