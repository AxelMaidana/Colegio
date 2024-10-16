import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as createAstro } from './astro/server_BNvYKVAo.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Pastilla = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pastilla;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-between py-8 pr-8"> <!-- Pastilla de texto a la izquierda --> <div class="relative flex-shrink-0"> <h3 class="md:text-2xl font-bold bg-customGreen text-white md:px-8 md:py-2.5 px-4 py-1 rounded-r-full text-center"> ${title} </h3> </div> </div>`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/ActAcademicas/detalle/Pastilla.astro", void 0);

export { $$Pastilla as $ };
