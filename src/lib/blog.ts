import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  category: string;
  tags: string[];
  keyword: string;
  intent: "informacional" | "comercial" | "mixta";
  excerpt: string;
  seoTitle: string;
  metaDescription: string;
  heroKicker: string;
  body: Array<
    | { type: "paragraph"; text: string }
    | { type: "heading"; level: 2 | 3; text: string }
    | { type: "list"; ordered?: boolean; items: string[] }
    | { type: "faq"; question: string; answer: string }
    | { type: "image"; src: string; alt: string; width: number; height: number; caption?: string; priority?: boolean }
  >;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "estudio-grabacion-madrid-precios",
    title: "Estudio de grabación en Madrid: precios, opciones y qué debes mirar antes de reservar",
    description:
      "Qué cuesta realmente grabar contenido en un estudio de Madrid, qué opciones existen y cómo elegir un espacio que no mate la naturalidad del contenido.",
    publishedAt: "2026-03-17",
    updatedAt: "2026-05-27",
    readingTime: "6 min",
    category: "SEO",
    tags: ["estudio grabación madrid", "precios", "reels", "contenido"],
    keyword: "estudios de grabacion madrid precios",
    intent: "comercial",
    excerpt:
      "Una guía clara para entender precios, modalidades y diferencias entre un plató tradicional y un ático-estudio pensado para contenido orgánico en Madrid.",
    seoTitle: "Estudio de grabación en Madrid: precios, opciones y qué mirar antes de reservar",
    metaDescription:
      "Descubre cuánto cuesta un estudio de grabación en Madrid, qué opciones existen y cómo elegir un espacio para grabar reels, podcast o contenido de marca con resultado profesional.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Buscar un estudio de grabación en Madrid no va solo de encontrar cuatro paredes, focos y una tarifa por hora. Va de elegir un espacio que encaje con el tipo de contenido que quieres producir, con tu nivel de exigencia y con la sensación que quieres transmitir cuando alguien vea la pieza terminada.",
      },
      {
        type: "paragraph",
        text: "Si haces contenido para marca personal, empresa, reels, podcast, entrevistas o piezas comerciales, el espacio condiciona muchísimo el resultado. Y también el precio. Por eso conviene entender bien qué estás pagando y qué diferencias hay entre un plató convencional y un estudio pensado para que el contenido parezca real, no artificial.",
      },
      { type: "image", src: "/blog/estudio-grabacion-madrid-precios/hero.webp", alt: "Micrófono y auriculares en estudio de grabación profesional en Madrid", width: 1920, height: 1252, priority: true },
      { type: "heading", level: 2, text: "Cuánto cuesta un estudio de grabación en Madrid" },
      {
        type: "paragraph",
        text: "En Madrid puedes encontrar opciones muy distintas según el tipo de espacio, el equipo incluido y el enfoque del servicio. Hay estudios que solo ofrecen la sala. Otros añaden iluminación, cámaras o técnico. Y luego están los espacios híbridos, donde además del entorno físico tienes apoyo creativo o producción audiovisual completa.",
      },
      {
        type: "list",
        items: [
          "Solo Grabación: vienes al ático y grabas con equipo técnico profesional. Sales con los brutos del día.",
          "Grabación + Edición: filmmaker con dirección creativa, edición profesional y entrega en 24-48h.",
          "Producción Completa: grabación, edición, estrategia de contenido y distribución multiplataforma.",
        ],
      },
      {
        type: "paragraph",
        text: "En A0 Studios trabajo con tres modalidades sencillas: Solo Grabación, Grabación + Edición y Producción Completa. Te respondo hoy, sin compromiso.",
      },
      { type: "heading", level: 2, text: "Qué encarece o abarata una sesión" },
      { type: "image", src: "/blog/estudio-grabacion-madrid-precios/mid.webp", alt: "Micrófono profesional sobre soporte en estudio de grabación", width: 1920, height: 1280 },
      {
        type: "list",
        items: [
          "Duración de la sesión.",
          "Si necesitas solo grabación o también edición y estrategia.",
          "Número de formatos o piezas finales.",
          "Si hay edición, subtítulos o adaptaciones para redes.",
          "Complejidad del set, sonido o multicámara.",
        ],
      },
      { type: "heading", level: 2, text: "Por qué no todos los estudios sirven para grabar contenido orgánico" },
      {
        type: "paragraph",
        text: "Muchos estudios funcionan bien para fotografía de producto, e-commerce o piezas muy controladas. Pero cuando quieres grabar contenido que parezca cercano, premium y natural, un plató clásico puede jugar en tu contra. El resultado se nota más artificial, más frío y muchas veces más impostado.",
      },
      {
        type: "paragraph",
        text: "Ahí es donde un ático-estudio cambia la película. En lugar de ciclorama blanco, tienes salón, terraza, skyline, profundidad real y luz natural. El contenido mantiene calidad profesional, pero no huele a estudio. Para reels, entrevistas, contenido de marca o piezas de autoridad, eso marca bastante diferencia.",
      },
      { type: "heading", level: 2, text: "Qué deberías mirar antes de reservar" },
      {
        type: "list",
        items: [
          "Si el espacio encaja con la estética que quieres proyectar.",
          "Si puedes grabar varios formatos en una sola sesión.",
          "Si hay luz natural real o todo depende de focos cerrados.",
          "Si el acceso es fácil para cliente, equipo o invitados.",
          "Si el estudio ofrece solo grabación o también edición y producción completa.",
        ],
      },
      { type: "heading", level: 2, text: "Cuándo tiene sentido grabar en un ático-estudio en Madrid" },
      {
        type: "paragraph",
        text: "Tiene especialmente sentido cuando quieres contenido que se vea profesional sin parecer encorsetado: marca personal premium, reels de venta, piezas para lanzamiento, podcast, entrevistas, contenido para ads o jornadas intensivas de grabación donde necesitas sacar mucho material en pocas horas.",
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Puedo grabar sin edición?",
        answer: "Sí. Con Solo Grabación vienes al ático, grabas con mi equipo técnico y sales con los brutos del día.",
      },
      {
        type: "faq",
        question: "¿Sirve también para grabar reels o contenido para redes?",
        answer: "Sí. De hecho, es uno de los usos más potentes del espacio, porque mezcla entorno orgánico con resultado profesional.",
      },
      {
        type: "faq",
        question: "¿Está pensado solo para grandes producciones?",
        answer: "No. También encaja muy bien para marcas personales, sesiones ágiles y grabaciones de contenido en bloques.",
      },
    ],
  },
  {
    slug: "grabar-podcast-madrid-estudio",
    title: "Grabar podcast en Madrid: cómo elegir un estudio que eleve tu marca y no parezca un set frío",
    description:
      "Qué mirar si quieres grabar un podcast en Madrid con imagen premium, sonido sólido y un espacio que ayude a vender mejor tu marca.",
    publishedAt: "2026-03-22",
    updatedAt: "2026-05-27",
    readingTime: "7 min",
    category: "SEO",
    tags: ["podcast madrid", "estudio podcast madrid", "marca personal", "contenido premium"],
    keyword: "grabar podcast madrid estudio",
    intent: "comercial",
    excerpt:
      "Una guía para marcas y perfiles personales que quieren grabar podcast en Madrid con mejor imagen, mejor contexto y mejor percepción de marca.",
    seoTitle: "Grabar podcast en Madrid: cómo elegir un estudio con imagen premium",
    metaDescription:
      "Descubre cómo elegir un estudio para grabar podcast en Madrid con estética cuidada, sonido profesional y un resultado que refuerce tu marca.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Grabar podcast en Madrid se ha vuelto fácil. Grabarlo bien, no tanto. Hay muchos espacios donde colocar dos micros y dar a grabar, pero no tantos donde el resultado ayude de verdad a que tu marca se vea más seria, más cuidada y más creíble.",
      },
      {
        type: "paragraph",
        text: "Si el podcast forma parte de tu estrategia comercial, no deberías elegir estudio solo por precio o disponibilidad. El entorno visual, la acústica, la luz, la comodidad del invitado y la posibilidad de sacar clips para redes afectan directamente a cómo se percibe el contenido y a cuánto partido le vas a sacar después.",
      },
      { type: "image", src: "/blog/grabar-podcast-madrid-estudio/hero.webp", alt: "Setup de podcast con micrófono profesional y auriculares en estudio", width: 1920, height: 1280, priority: true },
      { type: "heading", level: 2, text: "Qué debería tener un estudio para grabar podcast en Madrid" },
      {
        type: "list",
        items: [
          "Buen sonido sin tener que pelearte luego con una postproducción infinita.",
          "Un entorno visual que sume marca, no un fondo genérico sin alma.",
          "Luz natural o una iluminación que no deje el resultado plano.",
          "Espacio suficiente para invitado, equipo y formatos extra como reels o piezas horizontales.",
          "Flexibilidad para grabar varias piezas en una sola sesión.",
        ],
      },
      { type: "heading", level: 2, text: "Por qué importa tanto el contexto visual" },
      { type: "image", src: "/blog/grabar-podcast-madrid-estudio/mid.webp", alt: "Micrófono y auriculares para grabación de podcast en estudio profesional", width: 1920, height: 1280 },
      {
        type: "paragraph",
        text: "Un podcast no se consume ya solo como audio. Se corta en clips, se distribuye en redes, se convierte en contenido de autoridad y muchas veces es la primera impresión que alguien tiene de tu marca. Si grabas en un set que parece improvisado o demasiado frío, esa percepción baja aunque el mensaje sea bueno.",
      },
      {
        type: "paragraph",
        text: "Por eso en A0 Studios encaja bien un formato de ático-estudio: se siente real, respira mejor en cámara y da una imagen más editorial. Profesional, sí, pero sin ese olor a plató genérico que mata naturalidad.",
      },
      { type: "heading", level: 2, text: "Cuándo compensa reservar un estudio en vez de grabar en oficina o casa" },
      {
        type: "list",
        items: [
          "Cuando quieres usar el podcast como activo comercial y no solo como experimento.",
          "Cuando vas a grabar varios episodios o clips en bloque.",
          "Cuando invitas clientes, socios o perfiles potentes y quieres cuidar la experiencia.",
          "Cuando necesitas que el contenido se vea premium desde el primer frame.",
        ],
      },
      { type: "heading", level: 2, text: "Cómo aprovechar una sesión de podcast para sacar más contenido" },
      {
        type: "paragraph",
        text: "Una buena sesión no debería acabar en un episodio largo y ya. Lo inteligente es salir con clips verticales, cortes temáticos, mini piezas de autoridad, fotos fijas y algún recurso horizontal para web o anuncios. Si eliges bien el espacio, una sola mañana puede darte contenido para semanas.",
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿A0 Studios sirve solo para podcast o también para reels y entrevistas?",
        answer: "Sirve para ambos. La idea es que una misma sesión pueda darte podcast, clips, entrevistas y contenido de marca sin cambiar de lógica ni de espacio.",
      },
      {
        type: "faq",
        question: "¿Qué opciones de servicio hay?",
        answer: "Tres: Solo Grabación, Grabación + Edición y Producción Completa. Cuéntanos tu proyecto y te respondemos hoy sin compromiso.",
      },
      {
        type: "faq",
        question: "¿Tiene sentido para marca personal?",
        answer: "Muchísimo. Si trabajas tu autoridad o vendes servicios, un podcast bien grabado te coloca en otro nivel de percepción.",
      },
    ],
  },
  {
    slug: "como-preparar-sesion-grabacion-contenido-madrid",
    title: "Cómo preparar tu sesión de grabación de contenido en Madrid",
    description:
      "Guía práctica para llegar a tu sesión de grabación de contenido en Madrid con el plan claro, aprovechar cada hora y salir con el material que necesitas.",
    publishedAt: "2026-05-27",
    readingTime: "4 min",
    category: "Guía",
    tags: ["grabación contenido madrid", "sesión de grabación", "producción vídeo", "reels", "contenido de marca", "estudio madrid"],
    keyword: "como preparar sesion grabacion contenido madrid",
    intent: "informacional",
    excerpt:
      "Una guía práctica para llegar preparado a tu sesión de grabación de contenido en Madrid y sacar el máximo partido desde el primer minuto.",
    seoTitle: "Cómo preparar tu sesión de grabación de contenido | A0 Studios Madrid",
    metaDescription: "Cómo preparar una sesión de grabación de contenido en Madrid: formatos, guión, equipo, errores comunes y todo lo que necesitas para no perder tiempo en el estudio.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Llegar a una sesión de grabación sin plan es la forma más cara de perder horas en el estudio. No porque el espacio falle, sino porque el tiempo corre desde que enciendes las cámaras. Si no tienes claro qué vas a grabar, en qué orden y con qué estructura, acabas improvisando, repitiendo tomas innecesarias y saliendo con menos material del que necesitabas. En el peor caso, con material que no puedes usar directamente.",
      },
      {
        type: "paragraph",
        text: "He visto pasar por A0 Studios perfiles muy distintos: founders de startups, marcas de empresa, creators con millones de seguidores y equipos de marketing de compañías grandes. Los que sacan más partido a cada sesión no son necesariamente los que más presupuesto tienen, sino los que llegan con las ideas claras: saben qué quieren grabar, en qué formato y con qué criterio van a priorizar si el tiempo aprieta.",
      },
      { type: "image", src: "/blog/como-preparar-sesion-grabacion-contenido-madrid/hero.webp", alt: "Estudio de grabación con equipo premium para contenido profesional", width: 1920, height: 1280, priority: true },
      { type: "heading", level: 2, text: "Qué es una sesión de grabación de contenido y por qué importa prepararse" },
      {
        type: "paragraph",
        text: "Una sesión de grabación de contenido no es un rodaje tradicional. No hay actores, no hay guión de 40 páginas ni un equipo de producción de 15 personas. Es un bloque de horas en el que tú o tu equipo grabáis el material que luego se convierte en piezas reales: reels, clips para LinkedIn, episodios de podcast, una VSL para tu web o formación en vídeo. El objetivo al terminar es salir del estudio con todo lo que necesitas para semanas de publicación.",
      },
      {
        type: "paragraph",
        text: "Prepararse bien no significa rigidez ni controlarlo todo al milímetro. Significa saber cuántas piezas quieres sacar, en qué orden vas a grabarlas, qué ropa llevas, si necesitas teleprompter y cómo vas a gestionar la energía si vas a estar frente a cámara durante 3 o 4 horas seguidas. Todas esas decisiones se toman antes, no durante la sesión. Cuando estás en el estudio, tu único trabajo es grabar bien.",
      },
      { type: "heading", level: 2, text: "Cómo preparar tu sesión paso a paso" },
      { type: "heading", level: 3, text: "Define los formatos y las piezas que necesitas" },
      {
        type: "paragraph",
        text: "Lo primero es tener claro qué vas a grabar. ¿Solo reels verticales? ¿Reels y un episodio de podcast? ¿Piezas para ads en horizontal? Haz una lista real, no aspiracional. Si tienes 3 horas disponibles, puedes grabar de forma realista entre 10 y 15 clips cortos o 2-3 piezas largas, no las dos cosas a pleno rendimiento. Prioriza por impacto: las piezas más importantes, al principio, cuando la energía es mayor.",
      },
      { type: "heading", level: 3, text: "Prepara el guión o los puntos clave" },
      {
        type: "paragraph",
        text: "No hace falta que lo tengas todo memorizado ni que llegues con un guión cerrado. Pero sí que llegues con los puntos principales de cada pieza escritos. Un esquema con 3-5 bullets por clip basta para mantener el hilo sin parecer robot. Si vas a usar teleprompter, trae el texto listo antes de la sesión. Escribirlo en el estudio te cuesta el doble de tiempo y te rompe el ritmo.",
      },
      { type: "heading", level: 3, text: "Coordina el equipo y el espacio de antemano" },
      {
        type: "paragraph",
        text: "Si llevas invitado, coméntale de antemano cómo va a ir la sesión: duración, qué ropa es mejor para cámara (evitar rayas finas, estampados pequeños o colores muy saturados), si hay que traer algo preparado. Si vas solo, comparte el listado de piezas con el equipo del estudio antes para que puedan preparar el set según tu estética. En A0 Studios hacemos una llamada breve de planificación previa a cada sesión para llegar con el plan cerrado y no perder tiempo en ajustes básicos.",
      },
      { type: "image", src: "/blog/como-preparar-sesion-grabacion-contenido-madrid/mid.webp", alt: "Trípode de cámara para producción de vídeo en estudio profesional", width: 1920, height: 1280 },
      { type: "heading", level: 2, text: "Errores comunes que cuestan tiempo y dinero" },
      {
        type: "list",
        items: [
          "Llegar sin lista de piezas ni orden de grabación definido.",
          "Intentar grabar demasiados formatos distintos en una sola sesión sin tiempo suficiente.",
          "Escribir o revisar el guión en el estudio en lugar de traerlo listo.",
          "No informar al invitado de qué ropa llevar o cómo va a funcionar la dinámica.",
          "Poner las piezas más complejas al final de la sesión, cuando la energía ya bajó.",
          "Salir sin revisar si tienes todo el material que necesitabas antes de desmontar el set.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuántas piezas puedo grabar en una sesión de 3 horas?",
        answer: "Con buena preparación, entre 10 y 15 clips cortos o 2-3 piezas de formato largo. Si mezclas formatos, cuenta más tiempo para el cambio de set y los ajustes técnicos entre piezas.",
      },
      {
        type: "faq",
        question: "¿Necesito guión o puedo improvisar?",
        answer: "Puedes improvisar si tienes mucha práctica frente a cámara. Para el resto, mejor llegar con puntos clave escritos por pieza. No tiene que ser un guión cerrado, solo un hilo que te dé seguridad y mantenga el ritmo.",
      },
      {
        type: "faq",
        question: "¿A0 Studios tiene teleprompter?",
        answer: "Sí. Si quieres usarlo, mándanos el texto antes de la sesión para tenerlo configurado desde el primer minuto.",
      },
      {
        type: "faq",
        question: "¿Puedo hablar con vosotros antes para organizar el plan?",
        answer: "Por supuesto. Hacemos una llamada de planificación previa con todos los clientes para llegar al estudio con el plan cerrado y no perder tiempo en ajustes que se podían resolver antes.",
      },
      {
        type: "paragraph",
        text: "Una sesión bien preparada es la diferencia entre salir con 15 clips que puedes publicar mañana y salir con dudas sobre si el material sirve. Si quieres hablar sobre cómo organizar la tuya o qué formatos tienen más sentido para tu proyecto, escríbenos en /#contacto. Te respondemos el mismo día.",
      },
    ],
  },
  {
    slug: "que-es-un-rooftop-studio-contenido-marca",
    title: "Qué es un rooftop studio y por qué mejora el contenido de marca",
    description:
      "Qué define a un rooftop studio, cómo cambia la imagen del contenido de marca y cuándo tiene sentido grabar desde un espacio en altura en Madrid.",
    publishedAt: "2026-05-28",
    readingTime: "5 min",
    category: "Guía",
    tags: ["rooftop studio", "contenido de marca", "estudio grabación Madrid", "grabación Madrid", "producción de contenido"],
    keyword: "rooftop studio contenido marca",
    intent: "informacional",
    excerpt:
      "Un rooftop studio combina luz natural, entorno urbano y equipo profesional. Así cambia el contenido que grabas desde el ático de Madrid.",
    seoTitle: "Qué es un rooftop studio de contenido | A0 Studios Madrid",
    metaDescription:
      "Un rooftop studio transforma el contenido de marca: luz natural, vistas urbanas y equipo profesional desde el ático de Madrid.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Grabar en un rooftop studio cambia lo que ves cuando revisas las tomas. No es un argumento de venta ni una cuestión de marca: es algo concreto. Cuando el entorno tiene profundidad real, luz natural y vistas de la ciudad, el contenido gana un contexto visual que no se puede fabricar con focos y ciclorama. Eso se nota en pantalla desde el primer frame.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios trabajamos desde el séptimo piso de Ronda de Atocha 16, en el centro de Madrid. Grabamos podcasts, entrevistas, reels, VSLs y content days para founders, marcas y equipos de marketing. El ático no es un plus estético: es parte del motivo por el que el material que sale de aquí se ve distinto al de un estudio convencional.",
      },
      { type: "image", src: "/blog/que-es-un-rooftop-studio-contenido-marca/hero.webp", alt: "Terraza con vistas al skyline urbano desde un edificio de Madrid", width: 1920, height: 1280, priority: true },
      { type: "heading", level: 2, text: "Qué define a un rooftop studio" },
      {
        type: "paragraph",
        text: "Un rooftop studio es un espacio de grabación situado en planta alta de un edificio urbano, con acceso a luz natural y vistas exteriores. No es un plató con paredes negras y foam acústico. Es lo contrario: entorno real, luz del día trabajada con difusores y estores, y una ciudad visible al fondo que da contexto sin necesidad de decorados ni artificios.",
      },
      {
        type: "paragraph",
        text: "La diferencia respecto a un estudio convencional no es solo visual. La altura reduce el ruido de calle por encima de lo que se puede conseguir con tratamiento acústico en planta baja. Eso cambia el punto de partida técnico de cada grabación: menos ruido ambiente, menos tiempo de limpieza de audio en postproducción. La acústica mejora, la imagen tiene más profundidad natural y el espacio comunica algo por sí solo antes de que empiece a hablar nadie.",
      },
      { type: "heading", level: 2, text: "Cómo mejora el contenido de marca" },
      { type: "heading", level: 3, text: "El entorno como elemento narrativo" },
      {
        type: "paragraph",
        text: "Cuando grabas con el skyline de Madrid visible detrás, el espacio trabaja para ti sin que tengas que mencionarlo. Para marcas personales, founders y empresas que quieren posicionarse como referentes, ese contexto visual suma credibilidad sin decir una palabra. No es lo mismo transmitir desde una sala de reuniones genérica con pared blanca que desde un ático en el centro de Madrid. El espacio dice dónde estás y, por extensión, en qué nivel operas. Para contenido de autoridad en LinkedIn o YouTube, esa diferencia es relevante.",
      },
      { type: "heading", level: 3, text: "Luz natural que reduce el tiempo de postproducción" },
      {
        type: "paragraph",
        text: "La luz artificial mal gestionada crea problemas difíciles de corregir después: sombras duras en la cara, piel sobreexpuesta, colores que no representan bien la realidad. La luz natural, bien controlada con difusores y estores, da una imagen limpia desde el primer fotograma. En sesiones en A0 Studios, el tiempo de corrección de color en postproducción se reduce porque la base ya es sólida. Para equipos que sacan contenido de forma recurrente, eso se traduce en ciclos de entrega más rápidos y menos vueltas sobre el material bruto.",
      },
      { type: "heading", level: 3, text: "El efecto de exclusividad en la percepción" },
      {
        type: "paragraph",
        text: "Un estudio en altura en pleno centro de una ciudad proyecta una percepción de exclusividad que un sótano o una oficina habilitada no transmiten. Ese detalle importa cuando el contenido va a representar a tu empresa frente a clientes potenciales, inversores o comunidad. La percepción de calidad del espacio se transfiere al contenido. Funciona igual que elegir dónde haces una reunión importante: el entorno forma parte del mensaje.",
      },
      { type: "image", src: "/blog/que-es-un-rooftop-studio-contenido-marca/mid.webp", alt: "Cámara en estabilizador durante sesión de grabación de contenido profesional", width: 1880, height: 1253 },
      { type: "heading", level: 2, text: "Cuándo tiene sentido grabar en un rooftop studio" },
      {
        type: "list",
        items: [
          "Cuando quieres que el espacio forme parte del mensaje de marca y no sea un fondo neutro.",
          "Cuando grabas contenido recurrente y necesitas una base visual coherente y reconocible.",
          "Cuando el contenido va a LinkedIn, YouTube o formatos largos donde el contexto visual es visible.",
          "Cuando invitas clientes o socios y el espacio también dice algo de tu empresa.",
          "Cuando el posicionamiento de la marca es premium y el entorno tiene que respaldarlo.",
          "Cuando grabas una jornada completa y necesitas luz que aguante toda la mañana sin fatiga visual.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿La luz natural es un problema si cambia durante la sesión?",
        answer: "No si el estudio está preparado. En A0 Studios trabajamos con difusores, estores y luces de apoyo que permiten mantener una imagen consistente aunque cambie la hora o haya nubes. La luz natural es un recurso, no un inconveniente.",
      },
      {
        type: "faq",
        question: "¿Un rooftop studio tiene más ruido que un estudio en planta baja?",
        answer: "Al contrario. Estar en un séptimo piso elimina gran parte del ruido de calle: tráfico, obras, voces. El nivel de ruido ambiente es notablemente menor que en planta baja, y además se trabaja con tratamientos acústicos interiores para grabaciones de voz que exigen máxima limpieza de audio.",
      },
      {
        type: "faq",
        question: "¿Para qué formatos funciona mejor un rooftop studio?",
        answer: "Podcasts con vídeo, entrevistas de marca, VSLs, reels corporativos y content days. En general, para cualquier formato en el que el contexto visual forme parte del mensaje. Si el fondo no importa, cualquier sala sirve. Si importa, el rooftop suma.",
      },
      {
        type: "faq",
        question: "¿Puedo visitar el espacio antes de reservar?",
        answer: "Sí. Podemos hacer una visita previa para que veas el estudio, la luz a esa hora y el setup posible según tu tipo de contenido. Escríbenos desde /#contacto y lo coordinamos.",
      },
      {
        type: "paragraph",
        text: "Si quieres ver el espacio en persona o empezar a planificar una sesión, escríbenos desde /#contacto. En A0 Studios trabajamos con marcas que saben que el entorno visual del contenido no es un detalle menor: es parte del mensaje.",
      },
    ],
  },
  {
    slug: "grabacion-reels-madrid-que-necesitas",
    title: "Grabación de reels en Madrid: qué necesitas para hacerlo bien",
    description:
      "Qué equipo, espacio e iluminación necesitas para grabar reels en Madrid con resultado profesional, sin improvisar y sin perder tiempo de sesión.",
    publishedAt: "2026-05-29",
    readingTime: "5 min",
    category: "Guía",
    tags: ["grabación reels madrid", "reels empresa", "vídeo vertical", "contenido redes", "producción reels", "estudio madrid"],
    keyword: "grabacion reels madrid",
    intent: "informacional",
    excerpt:
      "Qué equipo, espacio y plan necesitas para grabar reels en Madrid con resultado profesional, sin improvisar y sin perder tiempo en el estudio.",
    seoTitle: "Grabación de reels en Madrid: qué necesitas | A0 Studios Madrid",
    metaDescription:
      "Grabación de reels en Madrid: qué equipo, espacio e iluminación necesitas para conseguir vídeo vertical profesional sin perder tiempo en el estudio.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Grabar reels en Madrid es fácil. Conseguir que queden bien ya es otra historia. El formato vertical lleva años siendo el de mayor alcance orgánico en redes, y eso ha hecho que todo el mundo quiera producirlos. El problema es que la mayoría se ve de forma inmediata si tienen o no calidad visual y de audio. No hay lugar donde esconderse en 30 o 60 segundos.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios lo vemos en cada sesión: hay perfiles que llegan con el iPhone y un guión claro y sacan piezas que funcionan perfectamente bien. Y otros que traen equipo caro y salen con material que no sirve porque el espacio estaba mal planteado, la luz no acompañaba o el audio tiene demasiado ruido ambiente. El equipo importa, sí, pero no es lo primero. Lo primero es el contexto en el que grabas.",
      },
      {
        type: "image",
        src: "/blog/grabacion-reels-madrid-que-necesitas/hero.webp",
        alt: "Cámara de cine profesional en set de producción para grabación de contenido",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué necesitas realmente para grabar reels en un estudio" },
      {
        type: "paragraph",
        text: "Un reel bien producido no requiere una cámara de cine ni un equipo de diez personas. Requiere tres cosas en orden: buen espacio, buena luz y audio limpio. Si tienes esas tres, puedes grabar con una Sony ZV-E10, con una mirrorless de gama media o con un móvil bien configurado y el resultado va a quedar bien. Si no tienes las tres, da igual cuánto cueste la cámara.",
      },
      {
        type: "paragraph",
        text: "El espacio condiciona todo lo demás. Un fondo con profundidad, texturas reales o entorno urbano da contexto visual sin que tengas que añadir recursos de edición. Un fondo plano o con desorden visible es un problema que no se puede corregir en postproducción sin que se note. Por eso en A0 Studios el ático tiene distintas opciones de fondo según el tipo de reel: fondo neutro, zona con luz natural, vista de Madrid o setup interior más editorial. No tienes que adaptar tu contenido al espacio: el espacio se adapta a lo que necesitas.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "La cámara y el encuadre vertical" },
      {
        type: "paragraph",
        text: "Para vídeo vertical en estudio, casi cualquier cámara mirrorless reciente o un smartphone con buena estabilización funciona. Lo que sí marca diferencia es el objetivo: una focal fija entre 24mm y 50mm equivalente da una imagen más limpia y con menos distorsión que los objetivos zoom kit. Si grabas con móvil, activa el grid para centrar bien el encuadre y graba en el modo de mayor calidad disponible, nunca con zoom digital. Lo que hay que evitar es grabar en resolución inferior a 1080p o usar el modo automático sin revisar la exposición de fondo antes de empezar.",
      },
      { type: "heading", level: 3, text: "La iluminación: lo que más impacta en el resultado final" },
      {
        type: "paragraph",
        text: "La luz es el elemento que más diferencia hay entre un reel amateur y uno profesional, y el más fácil de subestimar. Una fuente de luz principal bien posicionada, ligeramente elevada y a unos 45 grados del sujeto da un resultado limpio y con volumen en la cara. Si añades un relleno suave o usas la luz natural de una ventana como fill, el resultado mejora sin añadir complejidad al setup. Lo que hay que evitar: luz cenital directa (aplana el rostro), ventana brillante directamente detrás del sujeto sin compensar la exposición y tubos fluorescentes fríos sin ningún control de dirección.",
      },
      { type: "heading", level: 3, text: "El audio: el elemento más ignorado y más crítico" },
      {
        type: "paragraph",
        text: "La mayoría de los reels mal valorados fallan por el audio, no por la imagen. Un micrófono de solapa, un inalámbrico tipo Rode Wireless GO II o un micrófono de cañón bien situado dan un resultado radicalmente mejor que el micrófono integrado de cualquier cámara o móvil. Si no tienes micro externo disponible, graba al menos en un espacio con poco eco: alfombras, sofás y paredes con textura absorben mucho mejor que una sala vacía con paredes lisas. El eco no se elimina bien en postproducción; es mucho más eficiente no generarlo.",
      },
      {
        type: "image",
        src: "/blog/grabacion-reels-madrid-que-necesitas/mid.webp",
        alt: "Sesión de grabación de vídeo en estudio con setup de iluminación profesional",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes al grabar reels en estudio" },
      {
        type: "list",
        items: [
          "Grabar en horizontal y cortar verticalmente después: pierdes resolución y el encuadre queda mal en casi todos los casos.",
          "No controlar la luz de fondo: si hay una ventana brillante detrás, la cámara expone para el fondo y el sujeto queda oscuro.",
          "Audio del propio dispositivo en espacios con eco: se nota desde el primer segundo y corta la retención del vídeo.",
          "No hacer una toma de prueba antes de grabar toda la secuencia: 2 minutos de revisión ahorran muchas repeticiones.",
          "Cambiar de set o de iluminación entre clips de la misma sesión sin documentar: la coherencia visual entre piezas de una misma serie importa.",
          "Llevar ropa con patrones finos o estampados pequeños: generan efecto moiré en cámara y quedan mal en pantalla.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Con qué cámara es mejor grabar reels en estudio?",
        answer: "Con la que tengas, siempre que grabe en al menos 1080p y puedas añadir audio externo. Una Sony ZV-E10, una Fujifilm X-S10 o un iPhone 15 son más que suficientes si el espacio, la luz y el audio están bien resueltos. La cámara rara vez es el cuello de botella.",
      },
      {
        type: "faq",
        question: "¿Cuántos reels puedo grabar en una sesión de 3 horas?",
        answer: "Con buena preparación previa, entre 12 y 18 clips cortos de 30-60 segundos. Si los reels son más guionizados o requieren cambio de set, el número baja. La clave es llegar con los puntos clave de cada pieza ya preparados, no escribirlos en el estudio.",
      },
      {
        type: "faq",
        question: "¿Necesito guión cerrado para grabar reels?",
        answer: "No. Basta con 3-5 puntos clave por pieza. Los reels más naturales suelen ser los que tienen estructura pero no están leídos palabra por palabra. Si prefieres teleprompter, en A0 Studios lo tenemos disponible: mándanos el texto antes de la sesión y lo tenemos configurado desde el primer minuto.",
      },
      {
        type: "faq",
        question: "¿A0 Studios tiene equipo de grabación incluido o tengo que traer el mío?",
        answer: "Tenemos cámaras, micrófonos, iluminación y teleprompter disponibles. Si tienes tu propio equipo y quieres usarlo, también funciona. Lo importante es que llegues con el contenido planificado: el equipo técnico se adapta a lo que necesitas.",
      },
      {
        type: "paragraph",
        text: "Si quieres organizar una sesión para grabar reels, clips para LinkedIn o cualquier formato vertical con resultado profesional, escríbenos desde /#contacto. Te respondemos el mismo día y podemos hacer una visita previa si quieres ver el espacio antes de reservar.",
      },
    ],
  },
  {
    slug: "podcast-con-video-contexto-visual-audio",
    title: "Podcast con vídeo: por qué el contexto visual importa tanto como el audio",
    description:
      "Por qué grabar un podcast con vídeo cambia cómo se percibe tu marca, qué importa del contexto visual y cómo grabarlo bien desde el principio.",
    publishedAt: "2026-06-01",
    readingTime: "4 min",
    category: "Guía",
    tags: ["podcast con vídeo", "producción de contenido", "grabación podcast", "contenido visual", "estudio madrid", "marca personal"],
    keyword: "podcast con video contexto visual",
    intent: "informacional",
    excerpt:
      "Grabar audio limpio es el mínimo. Lo que ves mientras escuchas cambia cómo percibes el mensaje. Así transforma el vídeo un podcast.",
    seoTitle: "Podcast con vídeo: el contexto visual importa | A0 Studios Madrid",
    metaDescription:
      "Podcast con vídeo: por qué el contexto visual define cómo se percibe tu marca y cómo grabarlo bien desde el principio en un estudio profesional.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Durante años, el podcast fue formato de audio. Pero el consumo ha cambiado: la mayoría de los oyentes ven los episodios en YouTube, LinkedIn o Instagram con los ojos abiertos. Si grabas solo audio en 2026 y publicas una imagen estática sobre el sonido, estás dejando sobre la mesa gran parte del impacto posible.",
      },
      {
        type: "paragraph",
        text: "El contexto visual no es un extra ni un capricho estético. Es parte del mensaje. Lo que ve tu audiencia mientras te escucha determina cómo percibe tu credibilidad, tu energía y la seriedad de lo que estás contando. Aquí te explico por qué el vídeo transforma un podcast y cómo grabarlo bien desde el principio.",
      },
      {
        type: "image",
        src: "/blog/podcast-con-video-contexto-visual-audio/hero.webp",
        alt: "Micrófono de condensador en estudio de grabación profesional",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué el vídeo transforma un podcast" },
      {
        type: "paragraph",
        text: "El audio define lo que se dice. El vídeo define quién lo dice y desde dónde. Un mismo mensaje grabado en una habitación con luz de techo sin control y otro grabado en un estudio con tratamiento visible, fondos bien resueltos y luz natural produce percepciones radicalmente distintas. No es estética vacía: es señal de autoridad.",
      },
      {
        type: "paragraph",
        text: "Los podcasts con vídeo en YouTube retienen mejor a la audiencia, se comparten con más facilidad en redes y permiten generar clips directamente desde la grabación. Una sesión de dos horas puede producir entre 15 y 20 cortes de 30-90 segundos listos para Instagram Reels, LinkedIn o YouTube Shorts sin grabar nada por separado.",
      },
      {
        type: "paragraph",
        text: "Grabar con cámara también obliga a ser más consciente del lenguaje corporal, el ritmo y la presencia en pantalla. Muchos podcasters que pasan del audio al vídeo notan que mejoran también la calidad del audio, porque la preparación se vuelve más exigente desde que hay algo visible que juzgar.",
      },
      { type: "heading", level: 2, text: "Cómo grabarlo bien" },
      { type: "heading", level: 3, text: "El espacio habla antes que tú" },
      {
        type: "paragraph",
        text: "El primer plano que ve tu audiencia es el fondo. Un estudio con tratamiento acústico visible, luz diseñada y elementos de contexto no solo suena bien: comunica que te lo has tomado en serio antes de decir nada. En A0 Studios grabamos en un ático en Madrid centro con luz natural controlada y distintas opciones de fondo según el tipo de contenido que necesites.",
      },
      { type: "heading", level: 3, text: "Cámara y encuadre" },
      {
        type: "paragraph",
        text: "No necesitas el equipo más caro, pero sí un encuadre correcto: regla de tercios básica, cámara a la altura de los ojos, espacio de cabeza justo y separación del fondo. Si grabas con invitado, dos cámaras permiten montar una conversación real sin planos estáticos ni cortes forzados. En A0 Studios usamos Sony A7 con objetivos que dan la separación de fondo que el formato pide.",
      },
      { type: "heading", level: 3, text: "Audio y vídeo sincronizados desde el inicio" },
      {
        type: "paragraph",
        text: "El error más frecuente es tener buena cámara y mal micrófono. El audio tiene que resolverse con la misma atención que la imagen: un micrófono de condensador o dinámico delante de cada hablante, bien posicionado y con ganancia controlada. Si uno va mal, todo va mal, y no hay corrección en postproducción que lo salve del todo. En una sesión bien montada, resolver el audio no añade complejidad: simplemente se hace antes de empezar.",
      },
      {
        type: "image",
        src: "/blog/podcast-con-video-contexto-visual-audio/mid.webp",
        alt: "Micrófono sobre soporte en estudio de grabación profesional",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes al añadir vídeo a un podcast" },
      {
        type: "list",
        items: [
          "Encuadre demasiado abierto: la cara queda pequeña y el espacio vacío distrae.",
          "Luz de techo sin difusores: crea sombras duras bajo los ojos que dan sensación de cansancio.",
          "Audio grabado con el micrófono de la cámara: suena a llamada de teléfono, no a podcast profesional.",
          "Fondo desordenado o genérico: rompe la percepción de profesionalidad antes de que empieces a hablar.",
          "Grabación sin multicámara: el resultado de edición es estático y acaba cansando al espectador.",
          "No dejar 5 minutos de calentamiento: los primeros minutos suelen ser descartables y no deberían salir en el episodio.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Necesito una cámara específica para grabar un podcast con vídeo?",
        answer: "No es lo más importante. Una Sony A7, una Fujifilm X-T o incluso un móvil reciente bien configurado da resultados más que suficientes. Lo que más impacta en la imagen final es la luz y el espacio, no el cuerpo de la cámara.",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo tarda en montarse una sesión de podcast con vídeo?",
        answer: "Si el espacio está preparado de antemano, montar un podcast para dos personas lleva unos 20-30 minutos. La grabación puede durar entre 45 minutos y 2 horas según el formato y el número de clips que quieras sacar.",
      },
      {
        type: "faq",
        question: "¿Se pueden sacar clips para redes directamente de la sesión de podcast?",
        answer: "Sí. Es una de las ventajas más concretas de grabar con vídeo. De una hora de grabación bien planificada puedes sacar entre 10 y 20 cortes de 30-90 segundos listos para LinkedIn, Instagram o YouTube Shorts sin grabarlos por separado.",
      },
      {
        type: "faq",
        question: "¿Hace falta guión para un podcast grabado con vídeo?",
        answer: "Depende del formato. Para entrevistas, un guión de preguntas bien preparado es suficiente. Para formatos de solo voz o exposición directa, un esquema o teleprompter ayuda a mantener el ritmo y reducir el tiempo de edición. En A0 Studios tenemos teleprompter disponible.",
      },
      {
        type: "paragraph",
        text: "Si estás pensando en añadir vídeo a tu podcast o quieres grabar el próximo episodio con un resultado profesional desde el primer frame, en A0 Studios podemos organizarlo. Escríbenos desde /#contacto y te cuento cómo funciona una sesión.",
      },
    ],
  },
  {
    slug: "como-grabar-contenido-semanas-en-una-manana",
    title: "Cómo grabar contenido para semanas en una sola mañana",
    description:
      "Cómo organizar una sesión de batch recording para producir contenido para semanas en unas pocas horas, sin improvisar y con un plan que funciona.",
    publishedAt: "2026-06-02",
    readingTime: "4 min",
    category: "Guía",
    tags: ["batch recording", "content day", "grabación contenido", "productividad", "estudio madrid", "contenido recurrente"],
    keyword: "grabar contenido semanas una manana",
    intent: "informacional",
    excerpt:
      "Una sola mañana en el estudio puede dar contenido para semanas. Así funciona el batch recording y cómo planificarlo para que salga bien.",
    seoTitle: "Grabar contenido para semanas en una mañana | A0 Studios Madrid",
    metaDescription:
      "Grabar contenido para semanas en una sola mañana es posible con buena planificación. Así funciona el batch recording y cómo hacerlo bien en estudio.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Si produces contenido para tu marca o empresa, publicar de forma constante es el reto que nunca desaparece. Pero hay un error de base que complica todo: grabar pieza por pieza, sesión por sesión, sin aprovechar que preparar el espacio, el equipo y la energía mental tiene un coste fijo que no escala linealmente. Entras al estudio por un reel y acabas agotado después de 90 minutos con una sola pieza. Eso no es producción eficiente.",
      },
      {
        type: "paragraph",
        text: "El batch recording —grabar todo el contenido de semanas en un solo bloque— cambia la ecuación. No requiere más presupuesto ni un equipo mayor. Requiere un cambio de mentalidad y un plan claro antes de llegar al estudio. En A0 Studios lo vemos funcionar en casi todas las sesiones: quien llega con lista de piezas sale con material para semanas. Quien improvisa, graba uno o dos clips y pierde el día.",
      },
      { type: "image", src: "/blog/como-grabar-contenido-semanas-en-una-manana/hero.webp", alt: "Estudio de grabación con equipo profesional preparado para sesión de contenido en bloque", width: 1920, height: 1280, priority: true },
      { type: "heading", level: 2, text: "Qué es el batch recording y por qué funciona" },
      {
        type: "paragraph",
        text: "El batch recording es el proceso de grabar todo el contenido de un período —una semana, dos semanas, un mes— en una sola sesión de estudio. El principio es el mismo que cocinar en grandes cantidades: el coste de preparación es prácticamente el mismo para 2 platos que para 10, pero la eficiencia se dispara. Aplicado al contenido, una mañana bien planificada puede producir 15-20 clips, 2 episodios de podcast o una VSL completa más los cortes para redes.",
      },
      {
        type: "paragraph",
        text: "La constancia es el activo de contenido más difícil de mantener y también el que más resultados acumula con el tiempo. El batch recording lo hace sostenible: no tienes que entrar al estudio cada semana con toda la energía y preparación que eso requiere. Grabas en bloque, sales con material para semanas y el ritmo de publicación no depende de tu estado de ánimo del martes por la tarde.",
      },
      {
        type: "paragraph",
        text: "Este formato no es exclusivo de grandes marcas con equipos de producción. En A0 Studios lo usan founders que graban solos, marcas personales que quieren mantener presencia en LinkedIn sin consumir su semana y equipos de marketing con un único día de estudio al mes. El punto de partida siempre es el mismo: lista de piezas, orden de grabación y setup listo antes de empezar.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Planifica las piezas antes de entrar al estudio" },
      {
        type: "paragraph",
        text: "El error que más tiempo cuesta en una sesión de batch recording es empezar a decidir qué grabar cuando ya estás en el estudio. La planificación es trabajo previo, no de estudio. Antes de llegar, ten una lista con las piezas que necesitas: tema, formato —reel, clip largo, episodio de podcast—, duración aproximada y puntos clave de cada una. No hace falta un guión cerrado para cada pieza, pero sí saber exactamente qué vas a decir y en qué orden vas a grabar. Si usas teleprompter, manda el texto con antelación.",
      },
      { type: "heading", level: 3, text: "Agrupa por formato, no por tema" },
      {
        type: "paragraph",
        text: "Cuando planificas el orden de grabación, el criterio más eficiente no es el temático sino el técnico: primero todos los reels verticales, luego los clips horizontales, luego el podcast. Cambiar de formato implica ajustar el encuadre, reposicionar el micrófono y revisar la iluminación. Si agrupas por formato reduces a la mitad las interrupciones técnicas. Dentro de cada bloque, las piezas más complejas o que más energía requieren van al inicio de la sesión, cuando la concentración es mayor.",
      },
      { type: "heading", level: 3, text: "El flujo en A0 Studios: de lista a clips entregados" },
      {
        type: "paragraph",
        text: "En una sesión de batch recording en A0 Studios el flujo habitual es: 15 minutos de setup y repaso de la lista con el equipo, bloque de grabación por formato con tomas organizadas, revisión rápida del material bruto al cerrar la sesión para confirmar que está todo. Con Grabación + Edición, recibes los clips editados en 24-48 horas. Con Producción Completa, incluimos también la estrategia de distribución: qué publicar, cuándo y en qué canal para sacar el máximo de cada pieza.",
      },
      { type: "image", src: "/blog/como-grabar-contenido-semanas-en-una-manana/mid.webp", alt: "Monitor de producción en sesión de grabación de contenido profesional en estudio", width: 1920, height: 1280 },
      { type: "heading", level: 2, text: "Errores que frenan el batch recording" },
      {
        type: "list",
        items: [
          "Llegar sin lista de piezas cerrada: improvisar en el estudio cuesta tiempo y produce contenido más débil.",
          "Mezclar demasiados formatos sin priorizar: los cambios de set continuos dispersan la energía y alargan los tiempos muertos.",
          "Poner las piezas más difíciles al final: pasadas 2 horas la concentración baja; lo más exigente va siempre al inicio.",
          "No revisar el material bruto antes de desmontar el set: descubrir un problema cuando el setup ya está recogido obliga a volver al estudio.",
          "Planificar sin margen: si listas 18 piezas para 3 horas y una se complica, el resto sufre. Deja siempre un 20% de holgura.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuántas piezas puedo grabar en una sesión de 3 horas?",
        answer: "Con buena planificación previa, entre 12 y 18 clips cortos de 30-60 segundos, o 2-3 piezas de formato largo. Si mezclas formatos distintos, añade tiempo de transición entre bloques. La clave está en llegar con la lista cerrada: decidir qué grabar en el estudio consume tiempo que deberías dedicar a grabar.",
      },
      {
        type: "faq",
        question: "¿Tengo que llevar el guión escrito para cada pieza?",
        answer: "No hace falta guión cerrado. Con 3-5 puntos clave por pieza es suficiente para mantener el hilo sin perder naturalidad. Si prefieres teleprompter, mándanos el texto antes de la sesión y lo tenemos configurado desde el primer minuto.",
      },
      {
        type: "faq",
        question: "¿Puedo grabar contenido para semanas si nunca lo he hecho en bloque?",
        answer: "Sí, y es más fácil de lo que parece si llegas preparado. El mayor salto lo dan quienes ya han grabado alguna sesión sin plan y entienden lo que cuesta improvisar. En A0 Studios hacemos una llamada de preparación previa con todos los clientes para llegar con el plan cerrado y sin sorpresas.",
      },
      {
        type: "faq",
        question: "¿Qué diferencia hay entre Solo Grabación y Grabación + Edición para una sesión de batch?",
        answer: "Con Solo Grabación sales con los brutos organizados por pieza. Con Grabación + Edición recibes los clips editados listos para publicar en 24-48 horas. Si el volumen de piezas es alto, la edición integrada ahorra tiempo todavía más.",
      },
      {
        type: "paragraph",
        text: "Grabar contenido para semanas en una mañana no es un truco de productividad. Es la diferencia entre publicar de forma constante y publicar cuando hay tiempo. Si quieres organizarlo bien desde el principio, escríbenos desde /#contacto. Te cuento cómo funcionaría una sesión de batch recording según tu tipo de contenido y lo que quieres conseguir.",
      },
    ],
  },
  {
    slug: "estudio-grabacion-vs-grabar-en-oficina",
    title: "Estudio de grabación vs grabar en oficina: diferencias reales",
    description:
      "Qué diferencias hay entre grabar en un estudio profesional y hacerlo en una oficina: imagen, audio, eficiencia y cuándo tiene sentido cada opción.",
    publishedAt: "2026-06-03",
    readingTime: "5 min",
    category: "Guía",
    tags: ["estudio de grabación", "grabar en oficina", "calidad de audio", "producción de vídeo", "contenido profesional", "Madrid"],
    keyword: "estudio de grabacion vs grabar en oficina",
    intent: "informacional",
    excerpt:
      "Entre grabar en oficina y hacerlo en un estudio hay diferencias reales en imagen, audio y eficiencia. Guía para saber qué tiene sentido según tu tipo de contenido.",
    seoTitle: "Grabar en estudio vs oficina: diferencias reales | A0 Studios Madrid",
    metaDescription:
      "Estudio de grabación vs grabar en oficina: diferencias reales en imagen, audio y eficiencia. Guía práctica para saber cuándo compensa cada opción.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Hay una pregunta que llega con frecuencia antes de reservar la primera sesión: ¿vale la pena grabar en un estudio o puedo conseguir un buen resultado en la oficina? La respuesta no es universal. Depende del tipo de contenido que produces, del nivel de calidad que necesitas y del tiempo que puedes dedicar a resolver el espacio antes de ponerte delante de la cámara.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios hemos grabado con founders que llegaron después de meses intentándolo en su despacho y con otros que vinieron directamente desde el primer clip. El patrón que se repite en los primeros es siempre el mismo: el espacio les limitaba, aunque no sabían bien cómo explicarlo. Te cuento cuáles son esas diferencias y cuándo importan de verdad.",
      },
      { type: "image", src: "/blog/estudio-grabacion-vs-grabar-en-oficina/hero.webp", alt: "Estudio de grabación profesional con equipo de audio y vídeo configurado", width: 1920, height: 1280, priority: true },
      { type: "heading", level: 2, text: "Qué diferencia real hay entre grabar en oficina y en un estudio" },
      {
        type: "paragraph",
        text: "La diferencia más obvia es el control del entorno. En un estudio, el espacio está pensado para grabar: la acústica, la iluminación, el fondo y el equipo técnico están diseñados para que el resultado sea bueno con menos esfuerzo. En una oficina, estás peleando contra el entorno desde el primer segundo: ruido de aire acondicionado, luz de techo fría sin control de dirección, fondo con cables o monitores visibles, eco en paredes de cristal o pladur.",
      },
      {
        type: "paragraph",
        text: "Pero hay una diferencia menos evidente que acaba siendo igual de importante: el tiempo que tardas en conseguir un resultado aceptable. En la oficina, entre el 30 y el 40 por ciento del tiempo de grabación se va en ajustes, repeticiones por ruido de fondo y revisión de material que no sirve. En un estudio con todo preparado de antemano, ese tiempo desaparece casi por completo. No es solo una cuestión de calidad técnica, sino de eficiencia real.",
      },
      { type: "heading", level: 2, text: "Cómo afecta cada espacio al resultado" },
      { type: "heading", level: 3, text: "Imagen y entorno visual" },
      {
        type: "paragraph",
        text: "La imagen que proyectas depende en gran medida del contexto visual que hay detrás. Una oficina con fondo genérico, pizarras de sala de reuniones o paneles con logos corporativos da una percepción muy diferente a un estudio con fondo trabajado, luz natural controlada y profundidad real detrás del sujeto. No es que la oficina sea imposible de usar, pero requiere trabajo activo para mejorar el fondo: telas, paneles de color, reorganización del mobiliario. Ese trabajo es difícil de mantener constante si la sesión dura varias horas o si el espacio lo comparten más personas. En el estudio el fondo ya está resuelto antes de que llegues.",
      },
      { type: "heading", level: 3, text: "Audio: el problema que la oficina no puede resolver sola" },
      {
        type: "paragraph",
        text: "El audio es donde la oficina pierde más terreno. Los espacios de trabajo tienen ruido de fondo constante: climatización, conversaciones de otros despachos, teclados, impresoras, tráfico de calle. Y la acústica suele ser mala: paredes lisas, suelos duros y techos altos generan eco y reverberación que suenan fatal en grabación de voz. Puedes mejorar algo con un micrófono de calidad bien posicionado y cerrando puertas. Pero el techo de calidad que puedes alcanzar en una oficina sin tratamiento acústico específico es sustancialmente inferior al de un estudio preparado. En producción de podcast, entrevistas o contenido de autoridad para LinkedIn o YouTube, esa diferencia se nota desde el primer segundo.",
      },
      { type: "heading", level: 3, text: "Eficiencia y aprovechamiento del tiempo" },
      {
        type: "paragraph",
        text: "Grabar en tu oficina parece más cómodo porque no requiere desplazamiento. Pero hay un coste oculto en la preparación: reorganizar el espacio, conseguir que no haya interrupciones durante la grabación, resolver la iluminación, coordinar con el equipo que nadie entre y luego volver a dejarlo todo como estaba tiene un tiempo real que no aparece en ninguna factura. Si produces contenido de forma recurrente, ese tiempo suma. Una sesión de 3 horas en un estudio bien montado puede producir más material y de mayor calidad que un día entero de grabación fragmentada en oficina.",
      },
      { type: "image", src: "/blog/estudio-grabacion-vs-grabar-en-oficina/mid.webp", alt: "Setup de grabación con micrófono y equipo de audio en espacio de trabajo", width: 1920, height: 1280 },
      { type: "heading", level: 2, text: "Cuándo tiene sentido cada opción" },
      {
        type: "list",
        items: [
          "Oficina: cuando el contenido es interno, la audiencia ya te sigue y la producción es secundaria respecto al mensaje.",
          "Oficina: cuando grabas de forma puntual y el presupuesto no da para más en este momento.",
          "Estudio: cuando el contenido va a ser la primera impresión de alguien con tu marca.",
          "Estudio: cuando grabas podcast, entrevistas o formatos donde el audio limpio no es negociable.",
          "Estudio: cuando haces batch recording y necesitas grabar varias piezas en bloque con coherencia visual entre ellas.",
          "Estudio: cuando invitas clientes, socios o colaboradores y el espacio forma parte del mensaje que quieres transmitir.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Se puede grabar contenido profesional en una oficina?",
        answer: "Sí, con condiciones. Si el audio es limpio, el fondo está resuelto y la iluminación es correcta, puedes conseguir un resultado aceptable. Pero el esfuerzo para llegar a ese punto suele ser mayor que reservar un estudio preparado para ello, especialmente si grabas de forma recurrente.",
      },
      {
        type: "faq",
        question: "¿Por qué el audio grabado en oficina suena peor?",
        answer: "El problema principal es el ruido de fondo y el eco. La climatización, las voces de otros despachos, el tráfico y la reverberación en paredes lisas se captan en el micrófono y degradan la percepción del audio. Un buen micrófono mejora, pero no elimina el problema si la acústica del espacio no está tratada.",
      },
      {
        type: "faq",
        question: "¿Vale la pena el desplazamiento al estudio si grabo poco contenido?",
        answer: "Depende del formato. Si grabas una sola pieza al mes de baja exigencia técnica, quizás no. Pero si haces batch recording —varios clips, un episodio de podcast más cortes para redes— el resultado mejora tanto que el desplazamiento queda absorbido por la diferencia de calidad y el tiempo ahorrado en preparación.",
      },
      {
        type: "faq",
        question: "¿Puedo visitar A0 Studios antes de reservar para ver si el espacio encaja?",
        answer: "Sí. Podemos hacer una visita previa para que veas el estudio, la luz a esa hora y las opciones de set según tu tipo de contenido. Escríbenos desde /#contacto y lo coordinamos.",
      },
      {
        type: "paragraph",
        text: "Si estás en el punto en que la oficina ya no da más de sí pero no tienes claro si el salto a estudio tiene sentido para tu caso, escríbenos desde /#contacto. En A0 Studios lo miramos juntos y te contamos, sin compromiso, qué opciones encajan mejor con el tipo de contenido que quieres producir.",
      },
    ],
  },
  {
    slug: "contenido-autoridad-linkedin-formatos-madrid",
    title: "Contenido de autoridad para LinkedIn: qué formatos funcionan en Madrid",
    description:
      "Qué formatos de vídeo construyen autoridad real en LinkedIn, cómo producirlos bien y por qué el contexto de grabación cambia el resultado.",
    publishedAt: "2026-06-04",
    readingTime: "5 min",
    category: "Guía",
    tags: ["linkedin contenido", "contenido de autoridad", "vídeo linkedin", "content day", "marca personal", "estudio madrid"],
    keyword: "contenido autoridad linkedin formatos madrid",
    intent: "informacional",
    excerpt:
      "Si publicas en LinkedIn para posicionar tu marca, el formato y el contexto de grabación cambian el resultado. Guía sobre qué funciona y por qué.",
    seoTitle: "Contenido de autoridad para LinkedIn: formatos | A0 Studios Madrid",
    metaDescription:
      "Contenido de autoridad para LinkedIn: qué formatos de vídeo funcionan en Madrid, cómo producirlos bien y cómo grabarlo con un contexto que refuerza tu marca.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "LinkedIn ha pasado de ser un currículum online a convertirse en la plataforma donde se construyen marcas personales serias en el mundo B2B. El problema es que publicar no es suficiente. Publicar con regularidad y con contenido que haga que alguien confíe más en ti después de verlo, eso es lo que marca la diferencia entre presencia y autoridad.",
      },
      {
        type: "paragraph",
        text: "El vídeo en LinkedIn sigue siendo la categoría menos saturada en comparación con texto o carruseles. Quien lo hace bien tiene más impacto por pieza publicada. La pregunta relevante no es si hacer vídeo, sino qué formatos funcionan de verdad y cómo producirlos con un contexto visual que refuerce lo que estás diciendo.",
      },
      {
        type: "image",
        src: "/blog/contenido-autoridad-linkedin-formatos-madrid/hero.webp",
        alt: "Creadora de contenido grabando vídeo para redes sociales con iluminación profesional",
        width: 1880,
        height: 1253,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es el contenido de autoridad en LinkedIn y por qué importa" },
      {
        type: "paragraph",
        text: "Contenido de autoridad no es lo mismo que contenido de visibilidad. Un post viral puede traer alcance sin construir nada concreto en la percepción de quien lo ve. El contenido de autoridad deja una impresión: cuando alguien termina de ver tu vídeo, sabe más sobre el tema, entiende tu punto de vista y tiene un criterio más claro sobre si quiere trabajar contigo. Ese es el objetivo real.",
      },
      {
        type: "paragraph",
        text: "En LinkedIn, el contenido de autoridad suele tomar tres formas: el take —un punto de vista concreto sobre algo del sector—, el explicativo —cómo hacer algo, por qué funciona de cierta manera— y el análisis de caso real con datos y contexto. Los tres formatos funcionan mejor en vídeo que en texto, porque el vídeo añade la capa de quién eres, cómo piensas y cómo comunicas.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "El vídeo nativo en feed: el take y el explicativo" },
      {
        type: "paragraph",
        text: "El formato más eficiente para construir autoridad en LinkedIn es el vídeo nativo: clips de 60 a 90 segundos subidos directamente a la plataforma sin enlace externo. El algoritmo favorece el contenido nativo, y el vídeo publicado de esta forma tiene más retención inicial que el redirigido a YouTube. La pieza que mejor funciona es el take corto —un punto de vista en 3-4 frases bien construidas— o el explicativo rápido: un problema concreto del sector, una causa que la mayoría no identifica y un ángulo de solución. Todo en menos de 90 segundos. Para que funcione, el encuadre tiene que ser limpio, el audio tiene que ser claro y el fondo tiene que sumar, no contradecir lo que estás contando.",
      },
      { type: "heading", level: 3, text: "El clip de podcast o entrevista: autoridad con contexto" },
      {
        type: "paragraph",
        text: "Si ya grabas podcast o entrevistas, LinkedIn es el canal donde los cortes de 60-90 segundos tienen más impacto en términos de autoridad percibida. Un clip bien extraído de una conversación real —con un insight concreto, editado sin florituras y subtitulado— funciona porque transmite algo que el vídeo hablando a cámara no transmite igual: que hay una conversación real detrás, que el tema interesa a más de una persona y que el nivel de la discusión es suficientemente serio como para grabar. Eso se proyecta en cómo percibe tu marca alguien que llega sin conocerte.",
      },
      { type: "heading", level: 3, text: "El content day: un mes de LinkedIn en una sola jornada" },
      {
        type: "paragraph",
        text: "La forma más eficiente de mantener constancia en LinkedIn sin consumir tu semana es el content day: una jornada en estudio donde grabas todo el contenido del mes en bloque. 4-6 horas de sesión pueden producir 15-20 clips de 60-90 segundos con coherencia visual entre ellos, subtitulados y organizados por tema. La ventaja no es solo la cantidad: es que todos los clips tienen el mismo fondo, la misma luz y el mismo registro de imagen, lo que construye una imagen de marca coherente a lo largo del tiempo. En A0 Studios hacemos content days para fundadores, equipos de marketing y marcas personales que quieren mantener presencia en LinkedIn sin improvisar cada semana.",
      },
      {
        type: "image",
        src: "/blog/contenido-autoridad-linkedin-formatos-madrid/mid.webp",
        alt: "Micrófono de condensador en estudio de grabación profesional",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes que frenan el contenido de autoridad" },
      {
        type: "list",
        items: [
          "Audio grabado con el micrófono del portátil o del móvil: el sonido malo destruye la percepción de autoridad antes de que el mensaje llegue.",
          "Fondo genérico o desordenado: contradice el mensaje de marca que intentas transmitir desde el primer frame.",
          "Publicar sin ángulo concreto: temas demasiado amplios que no dejan ninguna impresión clara.",
          "Clips sin sustancia real: los vídeos de 15 segundos que presentan sin decir nada relevante no construyen autoridad.",
          "Imagen inconsistente entre vídeos: grabar cada semana en un sitio diferente con luz y encuadre cambiantes no construye reconocimiento de marca.",
          "No subtitular: más del 70 por ciento del vídeo en LinkedIn se consume en silencio. Sin subtítulos, el mensaje no llega.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuántos clips de LinkedIn puedo grabar en una sesión de medio día?",
        answer: "Con buena preparación previa, entre 12 y 18 clips de 60-90 segundos. El flujo habitual en un content day en A0 Studios es: listado de piezas cerrado antes de llegar, grabación en bloque por formato y revisión del material antes de desmontar el set.",
      },
      {
        type: "faq",
        question: "¿Hace falta equipo profesional para que el vídeo de LinkedIn quede bien?",
        answer: "No necesitas el equipo más caro, pero sí resolver tres cosas: audio limpio, fondo coherente con tu marca e iluminación que no aplane ni oscurezca. Con eso resuelto, una mirrorless de gama media o un móvil reciente es más que suficiente.",
      },
      {
        type: "faq",
        question: "¿Qué duración funciona mejor para vídeo de autoridad en LinkedIn?",
        answer: "Entre 45 y 90 segundos para takes y piezas explicativas cortas. Para clips de podcast o entrevista, hasta 2-3 minutos si el contenido lo justifica. Lo que no funciona es alargar sin añadir valor: la retención cae desde el segundo 20 si el vídeo no sustenta el tiempo.",
      },
      {
        type: "faq",
        question: "¿En A0 Studios podéis hacer el content day para LinkedIn de principio a fin?",
        answer: "Sí. Con Producción Completa incluimos grabación, edición, subtitulado y estrategia de publicación: qué clip publicar cada día, en qué orden y con qué copy de acompañamiento para maximizar el impacto de cada pieza.",
      },
      {
        type: "paragraph",
        text: "Si quieres empezar a construir autoridad en LinkedIn con un flujo de producción que no consuma toda tu semana, escríbenos desde /#contacto. En A0 Studios podemos organizar un content day adaptado a tu tipo de contenido y al posicionamiento que quieres construir.",
      },
    ],
  },
  {
    slug: "vsl-linkedin-estructura-duracion-como-grabarlo",
    title: "VSL para LinkedIn: estructura, duración y cómo grabarlo bien",
    description:
      "Qué es una VSL, cómo estructurarla para que convierta en LinkedIn, cuánto debe durar y cómo grabarla en un estudio para que el resultado trabaje por ti.",
    publishedAt: "2026-06-05",
    readingTime: "5 min",
    category: "Guía",
    tags: ["vsl linkedin", "video sales letter", "contenido de marca", "grabación vídeo", "marca personal", "estudio madrid"],
    keyword: "vsl para linkedin",
    intent: "informacional",
    excerpt:
      "Una VSL bien hecha puede ser el activo de LinkedIn que más convierte. Así se estructura, cuánto debe durar y cómo grabarla en estudio para que funcione.",
    seoTitle: "VSL para LinkedIn: estructura, duración y cómo grabarlo | A0 Studios Madrid",
    metaDescription:
      "VSL para LinkedIn: qué es, cómo estructurarla, cuánto debe durar y cómo grabarla en un estudio para que convierta desde el primer frame.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Una VSL —video sales letter— es el formato más directo que existe en LinkedIn para convertir a alguien que te ve por primera vez en alguien que quiere saber más. No es un anuncio ni un vídeo de marca genérico. Es una pieza estructurada cuyo único objetivo es llevar al espectador de no saber quién eres a querer contactar contigo. Cuando está bien grabada, hace ese trabajo de forma silenciosa, 24 horas al día.",
      },
      {
        type: "paragraph",
        text: "El problema es que la mayoría de las VSL que circulan por LinkedIn fallan por lo mismo: demasiada introducción, demasiada fricción antes del punto clave y un CTA que llega tan tarde que la mitad del vídeo ya perdió a quien lo estaba viendo. Aquí te explico cómo estructurarla, cuánto debe durar y cómo grabarla en un estudio para que el resultado trabaje por ti.",
      },
      {
        type: "image",
        src: "/blog/vsl-linkedin-estructura-duracion-como-grabarlo/hero.webp",
        alt: "Cámara de cine profesional en set de grabación documental",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es una VSL y por qué funciona en LinkedIn" },
      {
        type: "paragraph",
        text: "Una VSL es un monólogo estructurado en vídeo que sigue la lógica de un texto de ventas: gancho, problema, agitación, solución y llamada a la acción. A diferencia de un anuncio de producto o un clip de contenido de valor, la VSL está diseñada para personas que ya están en proceso de decisión. No busca entretener ni informar en general: busca que alguien específico tome una acción concreta al terminar de verla.",
      },
      {
        type: "paragraph",
        text: "En LinkedIn funciona especialmente bien porque la intención de compra en esa plataforma ya existe. Quien te sigue o llega a tu perfil está en un contexto de trabajo, no en modo ocio. Una VSL bien posicionada —como contenido destacado en el perfil, dentro de una campaña de leads o como primer mensaje en outreach— captura esa intención antes de que la persona pase a otra cosa. La clave es que tiene que empezar a trabajar desde el primer segundo.",
      },
      { type: "heading", level: 2, text: "Cómo estructurar una VSL que convierte" },
      { type: "heading", level: 3, text: "El gancho: los primeros 5 segundos" },
      {
        type: "paragraph",
        text: "Los primeros 5 segundos deciden si el vídeo se ve o se pasa. El gancho tiene que romper el patrón de scroll con una afirmación concreta, una pregunta que no se puede ignorar o un dato que genera curiosidad inmediata. Nada de presentaciones: empezar con 'Hola, soy X y hoy te voy a contar' es una invitación a pasar de largo. El gancho empieza en el problema del espectador, no en quién eres tú.",
      },
      { type: "heading", level: 3, text: "El desarrollo: problema, agitación y solución" },
      {
        type: "paragraph",
        text: "Una vez que tienes la atención, el desarrollo tiene que hacer dos cosas: demostrar que entiendes bien el problema y ofrecer un ángulo de solución creíble. El error más frecuente es llegar demasiado rápido a la solución sin dedicar tiempo a describir el problema con precisión. Si el espectador no se reconoce en el problema que describes, la solución no le interesa. Dedica un tercio del tiempo al problema, otro tercio a agitarlo —qué cuesta no resolverlo, qué pasa si no se actúa— y el tercio final a la solución.",
      },
      { type: "heading", level: 3, text: "El CTA: corto, claro y sin fricción" },
      {
        type: "paragraph",
        text: "El CTA de una VSL tiene que ser una sola acción, una sola vez y sin ambigüedad. No ofrezcas tres opciones ni expliques en detalle qué va a pasar después. 'Escríbeme y lo vemos' convierte mejor que 'rellena el formulario, recibirás un email y en 48 horas alguien del equipo se pone en contacto'. La fricción en el CTA destruye el impulso que has generado en el desarrollo. Cuanto más corto y directo, mejor funciona.",
      },
      {
        type: "image",
        src: "/blog/vsl-linkedin-estructura-duracion-como-grabarlo/mid.webp",
        alt: "Persona grabando vídeo con cámara profesional en sesión de contenido",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes en una VSL de LinkedIn" },
      {
        type: "list",
        items: [
          "Empezar con presentación en lugar de gancho: los primeros segundos tienen que hablar del espectador, no de ti.",
          "VSL demasiado larga: entre 90 segundos y 3 minutos es el rango óptimo para LinkedIn. Por encima, la retención cae sin recuperarse.",
          "Audio de baja calidad: si el vídeo suena mal, la credibilidad cae antes de que el mensaje llegue.",
          "Fondo que contradice el mensaje: si vendes resultados premium, el contexto visual tiene que respaldarlo desde el primer frame.",
          "CTA vago o con demasiadas opciones: una sola acción, en los últimos 15-20 segundos, sin alternativas que paralicen.",
          "No subtitular: más del 70% del vídeo en LinkedIn se consume en silencio. Sin subtítulos, el mensaje no llega.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto debe durar una VSL para LinkedIn?",
        answer: "Entre 90 segundos y 3 minutos. Por debajo de 90 segundos es difícil desarrollar el problema y la solución con suficiente credibilidad. Por encima de 3 minutos, la retención en LinkedIn cae de forma brusca salvo que la pieza sea muy específica para una audiencia ya caliente.",
      },
      {
        type: "faq",
        question: "¿Hace falta guión cerrado para grabar una VSL?",
        answer: "Sí, en este caso sí. A diferencia de un reel o un clip de contenido de valor donde la naturalidad puede compensar la falta de guión, la VSL tiene una estructura con lógica interna que hay que respetar. Un esquema con las frases clave escritas —especialmente el gancho y el CTA— evita que improvises justo donde más importa el orden de las palabras.",
      },
      {
        type: "faq",
        question: "¿Qué equipo necesito para grabar una VSL en estudio?",
        answer: "Una cámara que grabe en 1080p o 4K, audio externo —micrófono de condensador o solapa— y una iluminación que no genere sombras duras. En A0 Studios tenemos todo el equipo disponible, incluido teleprompter si prefieres leer el guión en lugar de memorizar.",
      },
      {
        type: "faq",
        question: "¿Puedo usar la misma VSL para ads y para el perfil de LinkedIn?",
        answer: "Puedes partir del mismo material, pero hay diferencias de contexto importantes. Para perfil, el espectador ya tiene un mínimo de intención hacia ti. Para ads, llega en frío y el gancho tiene que ser aún más rápido. Grabar dos versiones en la misma sesión —misma estructura, gancho adaptado— es la forma más eficiente de cubrir ambos usos.",
      },
      {
        type: "paragraph",
        text: "Si quieres grabar tu VSL para LinkedIn con un setup que respalde el mensaje desde el primer frame, en A0 Studios podemos organizarlo. Escríbenos desde /#contacto y cuéntanos el objetivo de la pieza: te respondemos el mismo día.",
      },
    ],
  },
  {
    slug: "como-hacer-un-day-in-studio-marcas-personales",
    title: "Cómo hacer un day in studio: guía para marcas personales",
    description:
      "Qué es un day in studio, cómo organizarlo y qué grabar en una jornada de contenido en Madrid. Guía práctica para marcas personales.",
    publishedAt: "2026-06-08",
    readingTime: "5 min",
    category: "Guía",
    tags: ["day in studio", "marcas personales", "contenido Madrid", "grabación de contenido", "content day", "producción audiovisual"],
    keyword: "day in studio marcas personales",
    intent: "informacional",
    excerpt:
      "Un day in studio es la forma más eficiente de producir contenido de marca en una sola jornada. Esta guía explica qué grabar, cómo organizarlo y cómo sacarle el máximo partido en el estudio.",
    seoTitle: "Day in Studio para marcas personales | A0 Studios Madrid",
    metaDescription:
      "Qué es un day in studio y cómo organizarlo para grabar el contenido de tu marca personal en Madrid en una sola jornada. Guía práctica.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "La mayor queja que escucho de founders y creadores de contenido no es que no tengan ideas. Es que no tienen tiempo. Un podcast por aquí, un reel por allá, una presentación para el martes. Y al final del mes, el perfil de LinkedIn lleva tres semanas sin actividad.",
      },
      {
        type: "paragraph",
        text: "El day in studio existe para resolver exactamente eso. En lugar de producir contenido por goteo —un vídeo hoy, otro en quince días—, concentras toda la producción en una sola jornada. Llegas por la mañana, grabas, y sales con material para semanas o meses. Si tienes una marca personal y todavía no lo has probado, esta guía te explica cómo funciona.",
      },
      {
        type: "image",
        src: "/blog/como-hacer-un-day-in-studio-marcas-personales/hero.webp",
        alt: "Creadora de contenido grabando vídeo para su marca personal en estudio",
        width: 1920,
        height: 1080,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué es un day in studio y por qué funciona para marcas personales",
      },
      {
        type: "paragraph",
        text: "Un day in studio es una jornada completa de grabación planificada. No es grabar sin orden: es entrar con un plan claro de qué piezas necesitas y salir con todo rodado, listo para editar.",
      },
      {
        type: "paragraph",
        text: "Para marcas personales tiene sentido especial. Tu contenido no es el de una empresa con equipo de marketing. Eres tú quien aparece, quien habla, quien necesita prepararse mentalmente para cámara. Hacerlo en una sola sesión larga —en lugar de en pequeñas grabaciones dispersas— te permite mantener el estado mental y el flow. La cuarta toma de la mañana sale mejor que la primera de la tarde porque ya llevas horas delante del objetivo y el nerviosismo desaparece.",
      },
      {
        type: "paragraph",
        text: "En términos logísticos también tiene sentido. El setup de cámara, el micrófono, la iluminación: montas una vez y grabas durante horas. Si cada grabación fuera por separado, estarías montando y desmontando equipo de forma constante.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo organizar tu day in studio",
      },
      {
        type: "heading",
        level: 3,
        text: "Define qué piezas vas a grabar antes de llegar",
      },
      {
        type: "paragraph",
        text: "El error más común es llegar al estudio sin guiones ni lista de temas definidos. En ese momento, el tiempo que pagas empieza a correr y tú aún estás decidiendo qué grabar.",
      },
      {
        type: "paragraph",
        text: "Lo mínimo antes de una jornada: una lista con todos los vídeos que necesitas, en qué formato —horizontal, vertical, corto, largo— y si tienen guión o son más libres. Cuanta más precisión llegues, más grabas. En A0 Studios solemos recomendar preparar entre 10 y 20 piezas cortas, aunque en la práctica se ajusta según el ritmo y los objetivos del día.",
      },
      {
        type: "heading",
        level: 3,
        text: "Organiza el orden por vestuario o cambio de look",
      },
      {
        type: "paragraph",
        text: "Si tienes pensado cambiar de ropa o de look durante la jornada, agrupa todas las grabaciones del mismo atuendo antes de cambiar. Suena obvio, pero es fácil perderse entre formatos y darte cuenta al final de que una pieza del primer bloque se grabó con la misma ropa que otra del tercero, rompiendo la continuidad visual.",
      },
      {
        type: "paragraph",
        text: "Una hoja de rodaje sencilla —por look o por tema— resuelve este problema sin necesidad de producción compleja. Puede ser una nota en el móvil. Lo que importa es el orden.",
      },
      {
        type: "heading",
        level: 3,
        text: "Alterna entre formatos para mantener la energía",
      },
      {
        type: "paragraph",
        text: "Una jornada de grabación sostenida puede cansar. No es lo mismo hablar a cámara durante cuatro horas seguidas que alternar entre entrevistas, monólogos y piezas técnicas. Si tienes variedad de formatos planificados, distribúyelos de forma que no acumules el mismo tipo de esfuerzo cognitivo en bloque.",
      },
      {
        type: "paragraph",
        text: "Por ejemplo: empieza con las piezas más preparadas y guionizadas cuando la concentración está al máximo. Deja las piezas más conversacionales o libres para el tramo de la tarde, cuando el cuerpo ya está caliente y la naturalidad fluye mejor. Un teleprompter bien colocado puede ayudar en los momentos en que la memoria falla.",
      },
      {
        type: "image",
        src: "/blog/como-hacer-un-day-in-studio-marcas-personales/mid.webp",
        alt: "Setup de grabación profesional con iluminación en estudio de contenido",
        width: 1920,
        height: 1280,
      },
      {
        type: "heading",
        level: 2,
        text: "Errores que arruinan una jornada de contenido",
      },
      {
        type: "list",
        items: [
          "Llegar sin guiones ni lista de temas definidos",
          "No organizar el orden de grabación según los cambios de look",
          "Dejar los formatos verticales para el final cuando ya estás agotado",
          "No revisar ninguna toma en cámara antes de terminar la jornada",
          "Intentar editar durante la misma jornada de grabación",
          "Subestimar el tiempo por pieza: un reel de 60 segundos puede llevar 20 minutos si requiere varias tomas",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Cuántas piezas se pueden grabar en un day in studio?",
        answer: "En una jornada de 4-5 horas con material bien preparado, es habitual sacar entre 15 y 25 piezas cortas. Si incluyes formatos más largos —episodios completos de podcast, VSLs— el número baja. En A0 Studios recomendamos no superar los 20-22 clips en un solo día para mantener la calidad de la última toma tan alta como la primera.",
      },
      {
        type: "faq",
        question: "¿Necesito guiones escritos o sirve con un esquema?",
        answer: "Para piezas de 30-60 segundos, un esquema con los puntos clave suele dar más naturalidad que leer un guión cerrado. Para formatos más largos o con estructura específica —VSL, episodio formativo—, conviene un guión más desarrollado. El teleprompter en A0 Studios está disponible para quien prefiere leer sin perder el contacto visual con la cámara.",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo necesito reservar para un day in studio completo?",
        answer: "Depende del volumen. Para 15-20 piezas cortas bien preparadas, entre 3 y 5 horas es suficiente. Si tienes formatos largos o necesitas cambios de look, calcula entre 5 y 7 horas. Lo mejor es hablar antes de la reserva para dimensionarlo bien.",
      },
      {
        type: "faq",
        question: "¿Puedo hacer un day in studio si es la primera vez que grabo en estudio?",
        answer: "Sí, de hecho es un buen punto de entrada. En la primera hora suele haber una curva de adaptación —el espacio, la cámara, los monitores—, pero en la segunda ya estás rodado. El formato de jornada completa te da margen para esa adaptación sin que se coma toda la sesión.",
      },
      {
        type: "paragraph",
        text: "Si tienes marca personal y quieres planificar tu primer day in studio en Madrid, escríbenos desde /#contacto. Te ayudamos a definir qué grabar, en qué formatos y cómo organizar la jornada para que salgas con el contenido de las próximas semanas.",
      },
    ],
  },
  {
    slug: "reels-verticales-empresa-ceos",
    title: "Reels verticales para empresa: qué graban los CEOs que funcionan",
    description:
      "Qué formatos de reel vertical funcionan para empresas y CEOs, cómo grabarlos bien y los errores que destruyen la percepción de autoridad antes de empezar.",
    publishedAt: "2026-06-09",
    readingTime: "4 min",
    category: "Guía",
    tags: ["reels verticales", "empresa", "CEO", "LinkedIn", "vídeo vertical", "contenido de marca"],
    keyword: "reels verticales empresa ceos",
    intent: "informacional",
    excerpt:
      "Los CEOs con mejor presencia digital no improvisan: saben qué formato grabar y por qué. Guía sobre los reels verticales que funcionan de verdad para empresas.",
    seoTitle: "Reels verticales para empresa: qué graban los CEOs | A0 Studios",
    metaDescription:
      "Reels verticales para empresa y CEOs: qué formatos funcionan, cómo grabarlos bien y los errores que destruyen la autoridad antes de empezar a hablar.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Los CEOs que mejor funcionan en vídeo vertical no son necesariamente los más cómodos frente a la cámara. Son los que han decidido qué quieren contar y en qué formato antes de encender el primer foco. El resto —la calidad técnica, el encuadre, el audio— es secundario si el contenido no tiene un objetivo claro.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios grabamos reels para empresas de todos los tamaños: founders de startups, directivos de empresa consolidada y marcas que quieren que alguien del equipo lleve la voz del negocio en redes. El patrón que se repite en los que consiguen presencia real es siempre el mismo: saben qué formato encaja con lo que tienen para contar y no intentan hacerlo todo en un solo clip.",
      },
      {
        type: "image",
        src: "/blog/reels-verticales-empresa-ceos/hero.webp",
        alt: "Professional journalist with notepad sharing information on camera in studio on white background",
        width: 1880,
        height: 1255,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué tipo de reel funciona para una empresa o un CEO" },
      {
        type: "paragraph",
        text: "El reel vertical de empresa o de perfil directivo no compite por viralidad ni busca seguidores genéricos. Su objetivo es más concreto: construir reconocimiento entre personas que ya podrían ser clientes, socios o candidatos. En ese contexto, el formato más eficaz no es el más espectacular, sino el más reconocible: alguien que sabe de lo que habla, lo explica con claridad y aparece de forma consistente.",
      },
      {
        type: "paragraph",
        text: "Los formatos que funcionan para empresa en vídeo vertical son menos de los que parecen. El take —una posición sobre algo del sector—, el explicativo —cómo funciona algo, por qué cierta decisión tiene sentido—, el detrás de la empresa —qué hace el equipo, cómo se trabaja un proyecto real— y el resultado sin datos confidenciales —un hito del negocio contado con contexto. Cuatro formatos. Los CEOs con mejor presencia digital rotan entre ellos sin buscar más variedad que esa.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "El take de liderazgo: corto, concreto, tuyo" },
      {
        type: "paragraph",
        text: "El take es el formato más directo: una posición sobre algo del sector, en menos de 60 segundos. No hace falta una revelación ni un dato inédito. Hace falta que quien lo vea entienda con claridad qué piensas tú sobre algo específico. Si al terminar el clip el espectador puede repetir tu posición en una frase, el take funcionó. Lo que no funciona es el take genérico: frases que cualquier profesional del sector podría firmar sin que nadie sepa quién eres tú. Cuanto más propio es el punto de vista, más retención tiene la pieza.",
      },
      { type: "heading", level: 3, text: "El vídeo de proceso: mostrar sin revelar todo" },
      {
        type: "paragraph",
        text: "El contenido de proceso —qué hace el equipo, cómo se construye algo dentro de la empresa, qué ocurre en el estudio o en la reunión de estrategia— funciona porque da contexto real a lo que vendes. No hace falta revelar información sensible. Basta con mostrar un fragmento de trabajo auténtico al que el espectador no tiene acceso de otro modo. Ese tipo de clip construye confianza sin necesidad de argumentario de ventas.",
      },
      { type: "heading", level: 3, text: "El reel de resultado: contarlo sin las cifras exactas" },
      {
        type: "paragraph",
        text: "El resultado también se puede contar en vídeo sin revelar datos confidenciales. Un proyecto terminado bien descrito —qué problema tenía el cliente, qué se hizo, qué cambió— funciona como prueba social sin citar empresas ni compartir contratos. El formato más eficaz para esto en vídeo vertical es el monólogo directo a cámara con tres bloques: contexto del reto, qué se hizo diferente y qué resultado se observó. Entre 45 y 75 segundos. Sin intro corporativa.",
      },
      {
        type: "image",
        src: "/blog/reels-verticales-empresa-ceos/mid.webp",
        alt: "Podcast recording with Microphone ready.",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes en reels de empresa o CEO" },
      {
        type: "list",
        items: [
          "Hablar del producto o servicio desde el primer segundo: el espectador aún no tiene motivo para escuchar.",
          "Intro corporativa de 10 segundos antes del contenido: en ese tiempo ya perdiste a la mayoría.",
          "Audio grabado con el micrófono del teléfono en espacios con eco: la percepción de autoridad cae antes de que empieces a hablar.",
          "Publicar sin subtítulos: más del 70% del consumo de vídeo vertical en LinkedIn e Instagram ocurre sin sonido.",
          "Cambiar de estética en cada clip: la coherencia visual entre piezas construye reconocimiento; la variedad constante lo destruye.",
          "Grabar sin posición clara: los vídeos que intentan contentar a todos acaban sin decirle nada útil a nadie.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Tiene sentido que el CEO de una empresa grabe reels aunque no tenga muchos seguidores?",
        answer: "Sí, especialmente en B2B. El reel de un directivo no compite por alcance masivo: construye confianza entre un número reducido de personas relevantes. Un CEO con 800 seguidores bien elegidos que ve tus vídeos de forma constante vale más en términos comerciales que 10.000 seguidores aleatorios.",
      },
      {
        type: "faq",
        question: "¿Cuántos reels puede grabar una empresa en media jornada de estudio?",
        answer: "Con buena preparación, entre 10 y 15 clips de 30-60 segundos. Si incluyes cambios de portavoz —por ejemplo, CEO más alguien del equipo— calcula entre 12 y 15 piezas. La clave es llegar con la lista de temas cerrada antes de entrar al estudio.",
      },
      {
        type: "faq",
        question: "¿Hace falta que el CEO lleve guión o puede improvisar?",
        answer: "Para los formatos tipo take o explicativo, un esquema de 3-5 puntos clave por pieza da más naturalidad que memorizar. Si prefiere teleprompter, en A0 Studios lo tenemos disponible: basta con mandar el texto antes de la sesión para tenerlo configurado desde el primer minuto.",
      },
      {
        type: "faq",
        question: "¿Qué diferencia hay entre un reel grabado en oficina y uno grabado en estudio?",
        answer: "El espacio comunica antes de que empiece el vídeo. Un estudio con luz natural, fondo trabajado y audio limpio transmite un nivel de preparación que la sala de reuniones de la empresa no puede replicar sin trabajo previo. Para una empresa que quiere posicionarse como referente, ese detalle importa.",
      },
      {
        type: "paragraph",
        text: "Si quieres organizar una sesión de reels para tu empresa o empezar a grabar como CEO con un formato que funcione, escríbenos desde /#contacto. En A0 Studios lo planificamos contigo antes de la sesión para que entres sabiendo qué grabar y salgas con material para semanas.",
      },
    ],
  },
  {
    slug: "grabacion-multicamara-podcast-que-aporta",
    title: "Grabación multicámara para podcast: qué aporta y cuándo tiene sentido",
    description:
      "Qué cambia cuando grabas un podcast con 2 o 3 cámaras, cómo funciona el flujo de edición y en qué casos justifica la inversión frente al setup de cámara única.",
    publishedAt: "2026-06-10",
    readingTime: "5 min",
    category: "Guía",
    tags: ["podcast", "multicámara", "grabación", "producción audiovisual", "Madrid"],
    keyword: "grabacion multicamara podcast",
    intent: "informacional",
    excerpt:
      "Con multicámara, un episodio de podcast genera entre 8 y 20 clips listos para redes. Qué aporta este formato y cuándo tiene sentido contratarlo en Madrid.",
    seoTitle: "Grabación multicámara podcast | A0 Studios Madrid",
    metaDescription:
      "La grabación multicámara transforma tu podcast en contenido para YouTube, LinkedIn y redes. Qué aporta, cómo funciona y cuándo tiene sentido en Madrid.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Grabar un podcast con una sola cámara funciona. Pero grabar con dos o tres cambia completamente lo que puedes hacer con el material en postproducción. La diferencia no está solo en la estética, está en la utilidad del contenido una vez grabado.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios hemos grabado podcasts y entrevistas con setup multicámara para marcas, founders y equipos de marketing. Lo que sigue es lo que aprendes cuando comparas los resultados de uno y otro formato.",
      },
      {
        type: "image",
        src: "/blog/grabacion-multicamara-podcast-que-aporta/hero.webp",
        alt: "Grabación de podcast en estudio con dos personas frente a micrófono y cámaras",
        width: 1920,
        height: 1267,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué aporta la multicámara en un podcast",
      },
      {
        type: "paragraph",
        text: "El objetivo de cualquier podcast con vídeo no es solo escuchar bien, es generar clips. Un episodio de 45 minutos grabado con multicámara puede dar entre 8 y 20 momentos cortables listos para LinkedIn, Instagram o YouTube Shorts. Si grabas con una sola cámara fija, ese mismo episodio da la mitad porque los cortes son menos limpios y hay menos opciones de montaje.",
      },
      {
        type: "paragraph",
        text: "La segunda ventaja es la calidad del diálogo visual. Cuando hay dos personas y cambias de cámara en los momentos de reacción, la conversación se siente más viva. Con plano fijo, el tiempo de retención en los primeros 15 segundos cae de manera notable, especialmente en vídeos de más de 10 minutos.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo hacerlo bien",
      },
      {
        type: "heading",
        level: 3,
        text: "Ángulos y cámaras mínimas para que funcione",
      },
      {
        type: "paragraph",
        text: "Un setup funcional para podcast con 2 personas necesita como mínimo 3 posiciones: plano general con ambos presentadores, plano medio del host y plano medio del invitado. Si añades una cuarta cámara de detalle —manos, micro, pantalla— el material de b-roll se multiplica sin esfuerzo extra en grabación. En A0 Studios trabajamos habitualmente con 2 Sony A7 y 1 cámara fija para el plano general. No hace falta más para que el montaje tenga variedad real.",
      },
      {
        type: "heading",
        level: 3,
        text: "Audio: la base que no puede fallar",
      },
      {
        type: "paragraph",
        text: "Con multicámara el audio es aún más crítico porque el editor necesita un track de referencia limpio para sincronizar. Lo habitual es grabar cada micro por separado —uno por persona— y tener además una mezcla de referencia en el audio del plano general. Si hay una sola pista para todo el episodio, la edición multicámara pierde la mitad de su potencial. En A0 Studios usamos DaVinci Resolve para sincronización por waveform: automático, sin drifteo, listo para cortar.",
      },
      {
        type: "heading",
        level: 3,
        text: "Edición multicámara: flujo real",
      },
      {
        type: "paragraph",
        text: "La sincronización es lo más técnico. El resto es criterio editorial: cuándo cambiar de cámara, cuántos segundos aguantas en reacción, cómo ritmar los cortes para que no se note que los estás haciendo. Un episodio de 40 minutos bien montado en multicámara lleva entre 3 y 6 horas de edición dependiendo de la densidad de cortes y si incluye subtítulos, motion graphics o clips adicionales para redes.",
      },
      {
        type: "image",
        src: "/blog/grabacion-multicamara-podcast-que-aporta/mid.webp",
        alt: "Cámara de cine Sony apuntando a un invitado durante la grabación de un episodio en estudio",
        width: 1920,
        height: 1080,
      },
      {
        type: "heading",
        level: 2,
        text: "Cuándo tiene sentido contratar multicámara",
      },
      {
        type: "list",
        items: [
          "Cuando el podcast tiene invitados habituales y necesitas mantener el interés visual semana a semana.",
          "Cuando el objetivo es distribuir clips en LinkedIn o Instagram a partir de cada episodio.",
          "Cuando el formato incluye dos o más personas con roles distintos: host más invitado, dos founders, panel.",
          "Cuando el programa ya tiene audiencia en YouTube y no solo escucha.",
          "Cuando quieres que el material tenga vida más allá del episodio completo: el clip de 60 segundos que convierte.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Cuánto tarda más una sesión multicámara respecto a grabar con una sola cámara?",
        answer: "El setup físico suma entre 20 y 40 minutos dependiendo de cuántas cámaras y si hay que ajustar iluminación por posición. La grabación en sí dura exactamente lo mismo. Lo que cambia es la postproducción, que es más larga. En A0 Studios el setup está listo antes de que llegues, así que no resta tiempo de tu sesión.",
      },
      {
        type: "faq",
        question: "¿Hace falta teleprompter para el host si hay varias cámaras?",
        answer: "No. Con multicámara el host tiene más libertad porque el editor puede recortar miradas fuera de cámara o momentos de duda sin que se note. Si llevas un esquema de 3-5 puntos clave en vez de guión completo, el resultado es más natural. El teleprompter lo usamos solo cuando hay un texto exacto que leer.",
      },
      {
        type: "faq",
        question: "¿Se puede grabar un solo episodio y sacar contenido para un mes?",
        answer: "Sí. Con un episodio de 45 minutos y un setup de 3 cámaras, podemos entregar el episodio completo para YouTube, entre 8 y 12 clips editados para LinkedIn o Instagram y un reel corto de presentación del programa. Todo en la misma sesión.",
      },
      {
        type: "faq",
        question: "¿Funciona el formato multicámara si el invitado nunca ha grabado?",
        answer: "Mejor de lo que parece. Cuando hay varias cámaras, el invitado tiende a hablar a la persona que tiene enfrente, no a la cámara, y eso da naturalidad. La incomodidad con el plano fijo único desaparece porque no hay que mantener el encuadre: el editor lo resuelve en postproducción.",
      },
      {
        type: "paragraph",
        text: "Si quieres montar un podcast con vídeo en Madrid o convertir un episodio en contenido para redes, escríbenos desde /#contacto. En A0 Studios diseñamos el setup según el formato y el volumen de material que necesitas.",
      },
    ],
  },
  {
    slug: "como-usar-teleprompter-sin-parecer-robot",
    title: "Cómo usar el teleprompter sin parecer robot",
    description:
      "Técnica, ritmo y ajustes para leer en teleprompter con naturalidad. Lo que cambia entre un presentador que convence y uno que claramente está leyendo.",
    publishedAt: "2026-06-11",
    readingTime: "4 min",
    category: "Guía",
    tags: ["teleprompter", "grabación de contenido", "vídeo corporativo", "técnica de cámara", "Madrid"],
    keyword: "como usar teleprompter sin parecer robot",
    intent: "informacional",
    excerpt: "Usar el teleprompter es una habilidad que se entrena. Estas son las claves para leer sin que se note.",
    seoTitle: "Cómo usar el teleprompter sin parecer robot | A0 Studios Madrid",
    metaDescription:
      "Cómo usar el teleprompter sin parecer robot: técnica, ritmo y ajustes para grabar con naturalidad en estudio. Guía práctica de A0 Studios Madrid.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "El teleprompter da miedo la primera vez. Ves el texto en pantalla, empiezas a leer, y en los primeros 30 segundos ya sabes que lo que estás haciendo no parece una persona hablando. Parece alguien leyendo. Que es exactamente lo que estás haciendo.",
      },
      {
        type: "paragraph",
        text: "El problema casi nunca es el teleprompter. Es el texto que metes en él, la velocidad a la que lo configuras y la falta de práctica con la técnica de voz. Esto se puede entrenar. Cuando lo haces bien, el resultado es una pieza grabada con precisión de mensaje pero con la naturalidad de una conversación.",
      },
      {
        type: "image",
        src: "/blog/como-usar-teleprompter-sin-parecer-robot/hero.webp",
        alt: "Cámara de cine Sony FS7 en set de grabación profesional para producción de contenido de marca",
        width: 1920,
        height: 1080,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Por qué el teleprompter existe y cuándo tiene sentido usarlo",
      },
      {
        type: "paragraph",
        text: "El teleprompter es una herramienta de precisión. Se inventó para la televisión porque los presentadores necesitaban hablar a cámara con fluidez sin perder ni una coma del guión. En producción de contenido de marca, tiene sentido en contextos concretos: VSLs, declaraciones corporativas, presentaciones de producto donde el texto legal o técnico no puede improvisar.",
      },
      {
        type: "paragraph",
        text: "No tiene sentido para una entrevista, un podcast con invitado o un reel donde quieres parecer espontáneo. Usarlo en el contexto equivocado es el primer error. Si el formato pide naturalidad, un esquema de 4-5 puntos clave es mejor herramienta que un guión completo.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo se usa bien el teleprompter",
      },
      {
        type: "heading",
        level: 3,
        text: "La velocidad del scroll",
      },
      {
        type: "paragraph",
        text: "La velocidad del teleprompter se ajusta al ritmo del orador, no al contrario. Si el texto avanza demasiado rápido, el presentador lo persigue y se nota. Si va demasiado lento, hace pausas forzadas. El punto justo es ligeramente más lento que la velocidad natural de habla, con margen para respirar entre frases. En una sesión en A0 Studios ajustamos la velocidad antes de rodar, no sobre la marcha. Eso ahorra tiempo y grabaciones inútiles.",
      },
      {
        type: "heading",
        level: 3,
        text: "La distancia con la cámara y el ángulo",
      },
      {
        type: "paragraph",
        text: "El teleprompter se coloca encima del objetivo de la cámara, con un cristal semitransparente que refleja el texto. Si la pantalla está muy separada del eje del objetivo, los ojos del presentador se desvían visiblemente. Cuando la distancia es correcta, el espectador ve a alguien mirando a cámara. La diferencia entre los dos casos es enorme en postproducción: el primero no tiene arreglo, el segundo no necesita nada.",
      },
      {
        type: "heading",
        level: 3,
        text: "El texto y el ritmo de las frases",
      },
      {
        type: "paragraph",
        text: "El texto para teleprompter no es igual que un texto para leer en papel. Las frases deben ser más cortas. Sin subordinadas de tres niveles. Sin tecnicismos que no pronuncies de forma natural. Una buena prueba: si lees el guión en voz alta y trastabillas en un punto, reescribe esa frase. El teleprompter reproduce exactamente lo que has escrito, incluidos los tropiezos. Antes de grabar, lee el guión entero en voz alta al menos dos veces.",
      },
      {
        type: "image",
        src: "/blog/como-usar-teleprompter-sin-parecer-robot/mid.webp",
        alt: "Equipo de iluminación y cámara configurado en estudio para grabación de vídeo corporativo",
        width: 1920,
        height: 1080,
      },
      {
        type: "heading",
        level: 2,
        text: "Errores más comunes con el teleprompter",
      },
      {
        type: "list",
        items: [
          "Escribir el guión como si fuera un artículo y no un discurso hablado.",
          "Configurar la velocidad del scroll sin haberla probado antes de rodar.",
          "Colocar la pantalla del prompter demasiado lejos del eje de la cámara.",
          "No hacer una lectura en voz alta previa al rodaje.",
          "Memorizar el texto en vez de leerlo: el objetivo del teleprompter es que no lo memorices.",
          "Usar el teleprompter en formatos donde la naturalidad importa más que la precisión del mensaje.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo tarda alguien en adaptarse al teleprompter?",
        answer: "Depende del punto de partida. Una persona con experiencia en presentaciones o locución lo controla en 20-30 minutos de práctica. Alguien sin hábito de cámara puede necesitar 2-3 sesiones para que el resultado sea convincente. En A0 Studios, si es tu primera vez con el prompter, lo dejamos rodando sin presión durante los primeros 10 minutos para que cojas el ritmo antes de grabar la pieza definitiva.",
      },
      {
        type: "faq",
        question: "¿Es mejor el teleprompter o un guión memorizado?",
        answer: "Para piezas de más de 90 segundos, el teleprompter gana. Memorizar un guión largo consume energía que luego no está disponible para la expresión y el tono. Con el prompter bien ajustado, el presentador puede concentrarse en cómo dice las cosas, no en qué viene después. Para piezas cortas de 30-45 segundos, memorizar puede dar más naturalidad si el presentador tiene soltura.",
      },
      {
        type: "faq",
        question: "¿Qué aplicación de teleprompter usáis en A0 Studios?",
        answer: "Usamos principalmente PromptSmart Pro y Teleprompter Premium, que permiten ajustar velocidad de scroll, tamaño de texto y márgenes de lectura. Para sesiones en iPad conectado al cristal del prompter, fuente grande, fondo negro y texto blanco. El fondo gris o verde dificulta la lectura bajo luz de estudio.",
      },
      {
        type: "faq",
        question: "¿El teleprompter funciona bien con personas que llevan gafas?",
        answer: "Sí, aunque hay que ajustar la posición del reflector para evitar destellos. Las monturas metálicas son las que más reflejan. Un ajuste de ángulo de 2-3 grados en el cristal suele resolver el problema. En A0 Studios lo testeamos antes de empezar si la sesión lo requiere.",
      },
      {
        type: "paragraph",
        text: "Si tienes un mensaje que necesita precisión y quieres grabarlo con naturalidad, escríbenos desde /#contacto. En A0 Studios tenemos el equipo y el proceso para que el teleprompter deje de darte miedo y empiece a trabajar para ti.",
      },
    ],
  },
  {
    slug: "iluminacion-grabacion-contenido-basicos",
    title: "Iluminación para grabación de contenido: básicos que marcan la diferencia",
    description:
      "Tipos de luz, setup básico de tres puntos y errores que arruinan el vídeo antes de empezar a hablar. Los fundamentos de iluminación que usamos en A0 Studios.",
    publishedAt: "2026-06-12",
    readingTime: "4 min",
    category: "Guía",
    tags: ["iluminación", "grabación de contenido", "vídeo profesional", "estudio madrid", "setup grabación", "luz natural"],
    keyword: "iluminacion grabacion contenido",
    intent: "informacional",
    excerpt:
      "La iluminación decide si el vídeo parece profesional o no. Estos son los básicos que usamos en A0 Studios y que puedes aplicar desde el primer día.",
    seoTitle: "Iluminación para grabación de contenido | A0 Studios Madrid",
    metaDescription:
      "Iluminación para grabación de contenido: tipos de luz, setup básico y errores que arruinan el vídeo antes de que empieces a hablar. Guía de A0 Studios Madrid.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "La iluminación es el elemento que más personas subestiman antes de entrar al estudio. Llegan con buena cámara, buen micrófono, el guión listo, y resulta que la primera toma sale plana, con sombras raras en la cara o con un fondo quemado que destruye todo el efecto que querían conseguir. El equipo no falla. Falla la luz.",
      },
      {
        type: "paragraph",
        text: "Esto no es accidental. La iluminación para grabación de contenido tiene una lógica concreta que conviene entender antes de encender el primer panel. No hace falta montar un plató de televisión ni un setup de siete focos. Hace falta entender tres o cuatro principios que, una vez que los tienes claros, cambian el resultado desde la primera toma.",
      },
      {
        type: "image",
        src: "/blog/iluminacion-grabacion-contenido-basicos/hero.webp",
        alt: "Setup de estudio fotográfico con iluminación profesional para grabación de contenido",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es la iluminación para grabación de contenido y por qué importa tanto" },
      {
        type: "paragraph",
        text: "La iluminación no es solo añadir luz para que se vea algo. Es decidir de dónde viene esa luz, con qué intensidad, qué temperatura de color tiene y cómo interactúa con el sujeto y el fondo. Una misma cara iluminada desde arriba, desde un lado o con luz difusa desde el frente da tres resultados radicalmente distintos. Uno aplana, otro añade volumen, el tercero da una imagen limpia y profesional. Lo que ves en pantalla depende de esas decisiones, no solo de cuántos vatios tiene el panel.",
      },
      {
        type: "paragraph",
        text: "En grabación de contenido para marca personal o empresa, la iluminación también comunica. Un setup de luz fría y dura genera una percepción muy diferente a uno con luz cálida y suave. No es estética vacía: es la señal que el espectador recibe antes de escuchar una sola palabra. Si el setup parece improvisado, la percepción del mensaje baja. Si la luz está resuelta, el contenido arranca desde un punto de partida más sólido.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "La luz principal: el punto de partida de cualquier setup" },
      {
        type: "paragraph",
        text: "La luz principal, o key light, es la fuente que ilumina al sujeto con mayor intensidad y define las sombras del setup. Lo habitual es colocarla ligeramente por encima de la línea de ojos, a unos 45 grados del sujeto y a una distancia de entre 1 y 1,5 metros. Esa posición da volumen facial sin generar sombras agresivas. Si colocas la key light directamente de frente, el resultado es plano. Si la pones demasiado lateral, las sombras son excesivas y el resultado queda más dramático que profesional. Para contenido de marca o autoridad, la posición a 45 grados es casi siempre el punto de partida correcto. En A0 Studios usamos paneles LED con difusor: temperatura regulable de 3200 K a 5600 K, suaves desde el primer encendido.",
      },
      { type: "heading", level: 3, text: "El relleno: el segundo elemento que no puedes saltarte" },
      {
        type: "paragraph",
        text: "El relleno, o fill light, es la fuente que aclara las sombras que genera la luz principal. Sin relleno, el lado de la cara en sombra queda demasiado oscuro para grabación de contenido y el resultado se ve más cine negro que producción de autoridad. El fill no tiene que ser igual de potente que la key: lo habitual es colocarlo al otro lado del sujeto con una intensidad de entre un tercio y la mitad de la key. En espacios con luz natural, una pared o superficie blanca al lado opuesto puede hacer de relleno sin necesidad de un segundo foco. En el estudio, un reflector plegable es la solución más simple y funcional.",
      },
      { type: "heading", level: 3, text: "La luz de fondo: separar el sujeto del entorno" },
      {
        type: "paragraph",
        text: "La luz de fondo no ilumina al sujeto: ilumina lo que hay detrás. Su función es crear separación entre sujeto y fondo para dar profundidad a la imagen. Sin ella, si fondo y sujeto tienen la misma luminosidad, todo queda en el mismo plano y la imagen pierde dimensión. Una luz de fondo bien colocada puede iluminar una pared, resaltar un elemento decorativo o simplemente añadir un gradiente suave que rompe la planitud. No necesitas un setup complejo: un panel pequeño apuntado al fondo desde uno de los lados es suficiente para cambiar claramente la percepción de profundidad.",
      },
      {
        type: "image",
        src: "/blog/iluminacion-grabacion-contenido-basicos/mid.webp",
        alt: "Setup de grabación en estudio de vídeo con iluminación LED y cámara profesional",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes en iluminación para grabación de contenido" },
      {
        type: "list",
        items: [
          "Usar la luz de techo como fuente principal: la luz cenital crea sombras bajo los ojos y da sensación de cansancio o dureza.",
          "Colocar una ventana brillante directamente detrás del sujeto sin compensar: la cámara expone para el fondo y el sujeto queda oscuro.",
          "No controlar la temperatura de color entre fuentes: mezclar luz cálida de foco con luz fría de ventana genera tonos inconsistentes en piel.",
          "Añadir luz sin difusor: la luz dura proyecta sombras marcadas que son difíciles de corregir en postproducción.",
          "No hacer una toma de prueba antes de grabar: 2 minutos de revisión evitan descubrir el problema cuando el setup ya está desmontado.",
          "Olvidar iluminar el fondo: sin separación entre sujeto y fondo, la imagen pierde toda la profundidad.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Hace falta equipo de iluminación profesional para que el vídeo quede bien?",
        answer: "No necesariamente. Dos paneles LED de gama media más un reflector de tela resuelven el 80% de los setups de contenido habituales. Lo que importa no es el precio del equipo, sino saber dónde colocar cada fuente. Un panel bien posicionado da mejor resultado que tres mal colocados.",
      },
      {
        type: "faq",
        question: "¿La luz natural es suficiente para grabar contenido en estudio?",
        answer: "Sí, si el espacio está preparado para controlarla. La luz natural es la fuente más suave y natural que existe, pero cambia con las nubes, la hora y la orientación de las ventanas. En A0 Studios trabajamos con difusores y estores que permiten mantener una imagen consistente aunque cambie la luz exterior. Sin control, la luz natural puede convertirse en un problema.",
      },
      {
        type: "faq",
        question: "¿Qué temperatura de color es mejor para grabar contenido de marca?",
        answer: "Entre 5000 K y 5500 K, que es la temperatura que más se aproxima a la luz de día natural. Esa gama da una piel con tono neutro y un blanco limpio sin la frialdad del blanco puro ni la calidez excesiva de los 3200 K. En A0 Studios ajustamos la temperatura de color según el entorno de cada sesión para mantener coherencia entre los planos.",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo lleva montar un setup de iluminación básico?",
        answer: "Un setup de tres puntos de luz —key, fill y fondo— bien organizado se monta en 20-30 minutos en un espacio nuevo. En A0 Studios el setup está listo antes de que llegues. Si traes tu propio equipo, recomendamos un ensayo previo en el mismo espacio para no perder tiempo de sesión en ajustes básicos.",
      },
      {
        type: "paragraph",
        text: "Si quieres grabar tu próxima sesión de contenido con una iluminación resuelta desde el primer minuto, en A0 Studios lo tenemos preparado. Escríbenos desde /#contacto y te contamos cómo funciona una sesión.",
      },
    ],
  },
  {
    slug: "microfonos-podcast-entrevistas-tipos",
    title: "Micrófonos para podcast y entrevistas: qué tipos existen y cuándo usar cada uno",
    description:
      "Guía práctica sobre los tipos de micrófonos para podcast y entrevistas: condensador, dinámico y lavalier. Cuándo usar cada uno y qué errores evitar.",
    publishedAt: "2026-06-15",
    readingTime: "5 min",
    category: "Guía",
    tags: ["micrófonos", "podcast", "entrevistas", "grabación", "audio", "estudio"],
    keyword: "microfonos para podcast y entrevistas",
    intent: "informacional",
    excerpt:
      "Elegir el micrófono correcto marca la diferencia entre un audio tolerable y uno que retiene al oyente. Esto es lo que usamos en A0 Studios y por qué.",
    seoTitle: "Micrófonos para Podcast y Entrevistas | A0 Studios Madrid",
    metaDescription:
      "Micrófonos para podcast y entrevistas: tipos, diferencias y cuándo usar cada uno. Guía práctica desde el estudio A0 Studios Madrid.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Cuando alguien escucha tu podcast o tu entrevista, el micrófono que usas determina si sigue escuchando o cierra la pestaña. No es exageración. El vídeo puede ser mejorable, pero el audio malo es directamente fatiga. La elección del micrófono depende de tres factores: el formato que grabas, el entorno donde lo haces y el nivel de control que quieres tener sobre el sonido.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios usamos distintos tipos de micrófonos según lo que graba cada cliente. No hay un micrófono que sea el mejor para todo. Hay uno que encaja con lo que tú haces. Esto es lo que necesitas saber para elegir bien.",
      },
      {
        type: "image",
        src: "/blog/microfonos-podcast-entrevistas-tipos/hero.webp",
        alt: "Micrófono de condensador en estudio de grabación profesional",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué el tipo de micrófono cambia el resultado final" },
      {
        type: "paragraph",
        text: "La diferencia entre un micrófono de condensador y uno dinámico no es solo técnica. Afecta directamente al tono de la voz, a cómo se recoge el ambiente de la sala y a cuánto espacio necesitas controlar para que el audio suene bien. Elegir el tipo equivocado no siempre se puede corregir en postproducción.",
      },
      {
        type: "paragraph",
        text: "Antes de entrar en los tipos, un concepto básico: el patrón polar. Es la forma en que el micrófono recoge el sonido. La mayoría de micrófonos de podcast y entrevistas usan patrón cardioide, que capta principalmente lo que tiene delante y rechaza los sonidos laterales y traseros. Algunos tienen patrón bidireccional —para dos personas cara a cara— u omnidireccional —para reuniones o ambientes muy controlados—. El patrón importa tanto como el tipo.",
      },
      {
        type: "paragraph",
        text: "Con eso claro, los tres tipos que más vas a encontrar en setups de podcast y entrevistas son: condensador, dinámico y lavalier.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien: los tres tipos principales" },
      { type: "heading", level: 3, text: "Micrófonos de condensador" },
      {
        type: "paragraph",
        text: "El condensador es el estándar en estudio para podcast y entrevistas en interiores. Capta frecuencias altas con mucho detalle, lo que hace que la voz suene natural, abierta y clara. El problema: también capta el ambiente de la sala. En un estudio tratado acústicamente, eso es una ventaja. En una oficina sin tratamiento, el aire acondicionado, el tráfico y el eco de las paredes van a aparecer en la grabación. El Rode NT1, el Audio-Technica AT2020 o el Neumann U87 son referencias habituales en setups profesionales. Si grabas en un entorno controlado, el condensador es la mejor opción.",
      },
      { type: "heading", level: 3, text: "Micrófonos dinámicos" },
      {
        type: "paragraph",
        text: "El micrófono dinámico fue diseñado para el directo, pero en los últimos años se ha convertido en una opción muy sólida para podcast y entrevistas en entornos con algo de ruido ambiente. Rechaza más el sonido lateral y de fondo que el condensador, lo que lo hace más permisivo con la sala. La voz suena más cálida y menos brillante, lo que a mucha gente le parece más natural en formato conversacional. El Shure SM7B y el Electro-Voice RE20 son los dos más usados en podcast profesional. Requieren más ganancia que un condensador, así que necesitas una interfaz con previo potente o un amplificador adicional como el Cloudlifter. Si grabas en una sala sin mucho control acústico, el dinámico te va a dar menos problemas.",
      },
      { type: "heading", level: 3, text: "Micrófonos de solapa o lavalier" },
      {
        type: "paragraph",
        text: "El lavalier es el micrófono que va enganchado a la ropa, cerca del pecho. Se usa principalmente en entrevistas en movimiento, presentaciones o cuando el sujeto no puede estar frente a un micrófono de pie. La ventaja es que es completamente discreto y mantiene una distancia constante con la boca. La desventaja: capta el movimiento de la ropa y es más sensible al viento en exteriores. Los modelos inalámbricos como el Røde Wireless GO o el DJI Mic son los más usados hoy en día para contenido de empresa y entrevistas en carretera. En A0 Studios los usamos cuando grabamos entrevistas que combinan planos frontales con planos de movimiento.",
      },
      {
        type: "image",
        src: "/blog/microfonos-podcast-entrevistas-tipos/mid.webp",
        alt: "Micrófono de condensador negro sobre mesa de grabación profesional",
        width: 1920,
        height: 1281,
      },
      { type: "heading", level: 2, text: "Errores comunes al elegir micrófono" },
      {
        type: "list",
        items: [
          "Usar un condensador en una sala sin tratar: el resultado tendrá reverberación y ruido de fondo que no se elimina completamente en edición.",
          "Comprar el micrófono más caro sin revisar el entorno: el equipo no compensa la sala. Primero controla el espacio, luego el micrófono.",
          "Mezclar dos micrófonos de tipos distintos sin igualar niveles: suenan diferente y la edición se vuelve costosa.",
          "Poner el lavalier debajo de ropa con tejido ruidoso: cada movimiento aparece en el audio como un golpe sordo.",
          "No hacer prueba de audio antes de grabar: dos minutos de revisión con auriculares evitan descubrir el fallo al editar.",
          "Colocar el condensador demasiado lejos de la boca: la voz pierde presencia y el ratio señal/ruido empeora.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Qué micrófono es mejor para podcast con dos personas?",
        answer: "Depende del espacio. Si grabáis en un estudio tratado acústicamente, dos micrófonos de condensador en patrón cardioide dan el resultado más limpio. Si hay ruido de fondo, un dinámico para cada persona es más seguro. También puedes usar un solo micrófono bidireccional entre los dos, aunque el balance de voces es más difícil de controlar.",
      },
      {
        type: "faq",
        question: "¿Hace falta interfaz de audio con un micrófono dinámico?",
        answer: "Sí, siempre. Los micrófonos dinámicos de bobina tienen salida XLR y necesitan conectarse a una interfaz con un previo potente. Algunos como el SM7B requieren además un amplificador adicional como el Cloudlifter o el Fethead para alcanzar el nivel de ganancia adecuado sin introducir ruido.",
      },
      {
        type: "faq",
        question: "¿Los micrófonos USB valen para podcast profesional?",
        answer: "Para contenido básico, sí. Para producción de calidad media-alta, no. Los micrófonos USB tienen la interfaz integrada, lo que simplifica el setup, pero limita el control sobre ganancia, ecualización y procesado de señal. Si vas a grabar de forma regular y quieres evolucionar el setup, lo correcto es XLR desde el principio.",
      },
      {
        type: "faq",
        question: "¿Cuál es la distancia correcta entre la boca y el micrófono?",
        answer: "Entre 15 y 25 centímetros para la mayoría de micrófonos de condensador en patrón cardioide. Para micrófonos dinámicos como el SM7B, se trabaja más cerca, entre 5 y 15 centímetros, para aprovechar el efecto de proximidad que añade calidez a la voz. Con el lavalier, la posición ideal es a la altura del segundo o tercer botón de la camisa, evitando el cuello.",
      },
      {
        type: "paragraph",
        text: "Si tienes dudas sobre qué micrófono usar en tu próxima sesión de podcast o entrevista en Madrid, en A0 Studios lo resolvemos antes de que llegues. Escríbenos desde /#contacto y te contamos qué setup montamos según lo que necesitas grabar.",
      },
    ],
  },
  {
    slug: "grabacion-cursos-online-madrid",
    title: "Grabación de cursos online en Madrid: espacio, equipo y flujo de trabajo",
    description:
      "Qué espacio, qué equipo y cómo organizar el día para grabar cursos online con calidad profesional en Madrid sin perder tiempo ni tomas.",
    publishedAt: "2026-06-16",
    readingTime: "5 min",
    category: "Guía",
    tags: ["grabación cursos online", "formación en vídeo", "producción elearning", "estudio grabación madrid", "contenido formativo"],
    keyword: "grabacion cursos online madrid",
    intent: "informacional",
    excerpt:
      "Espacio, equipo y flujo de trabajo para grabar cursos online con calidad profesional en Madrid. Lo que funciona en A0 Studios para formadores y empresas.",
    seoTitle: "Grabación de cursos online Madrid | A0 Studios Madrid",
    metaDescription:
      "Grabación de cursos online en Madrid: qué espacio, equipo y organización necesitas para producir formación en vídeo de calidad profesional.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Grabar un curso online de calidad no es solo enchufar una cámara y hablar. El espacio condiciona la concentración del formador y la percepción del alumno. El equipo determina si el audio cansa o si la imagen invita a seguir viendo. Y el flujo de trabajo decide si grabas el curso en una mañana o en tres semanas.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios hemos grabado formación en vídeo para empresas y profesionales independientes que querían algo más que pantalla verde improvisada o iluminación de anillo en casa. Lo que te cuento aquí es lo que funciona en la práctica: qué espacio usar, qué equipo mínimo necesitas y cómo estructurar el día para salir con el material listo para editar.",
      },
      {
        type: "image",
        src: "/blog/grabacion-cursos-online-madrid/hero.webp",
        alt: "Estudio de grabación profesional preparado para grabar cursos online en Madrid",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué necesita un espacio para grabar cursos online" },
      {
        type: "paragraph",
        text: "La formación en vídeo exige más control del entorno que un podcast o una entrevista. El alumno va a ver el mismo plano durante minutos o incluso horas. Cualquier distracción visual —pared sucia, fondo caótico, luz cambiante con el sol— rompe la concentración y baja la percepción de calidad aunque el contenido sea bueno.",
      },
      {
        type: "paragraph",
        text: "Lo que funciona bien: un fondo limpio y consistente, iluminación controlada que no depende de la hora del día, y una sala con buen comportamiento acústico para que la voz no rebote. En A0 Studios el ático tiene control total sobre la luz, fondo configurable y tratamiento que evita el eco típico de oficinas o salas diáfanas.",
      },
      {
        type: "paragraph",
        text: "El espacio también influye en el rendimiento del formador. Grabar en casa con el móvil mirando al portátil y ruido de fondo es diferente a llegar a un espacio preparado, hacer una prueba rápida y ponerse a grabar. La concentración se nota en el material final.",
      },
      { type: "heading", level: 2, text: "Equipo esencial para cursos en vídeo" },
      { type: "heading", level: 3, text: "Cámara y lente" },
      {
        type: "paragraph",
        text: "No hace falta una cinema camera para cursos online. Una Sony A7 III o una Sony FX30 con una lente fija de 35mm o 50mm da un resultado que cualquier plataforma —Kajabi, Hotmart, Teachable, YouTube— recibe bien. Lo importante es estabilidad de imagen y color consistente entre sesiones. Con cámara fija y luz artificial controlada, eso se resuelve una vez y se olvida.",
      },
      { type: "heading", level: 3, text: "Audio" },
      {
        type: "paragraph",
        text: "El audio es donde se gana o se pierde un curso. Si el alumno tiene que subir el volumen para entenderte o escucha eco de fondo, abandona. Para cursos con un solo formador, un micrófono de condensador tipo Rode NT1-A o un dinámico tipo Shure SM7B conectado a una interfaz Focusrite Scarlett da una voz limpia y con autoridad. El lavalier inalámbrico (Rode Wireless GO II, DJI Mic) es una opción si el formador necesita moverse, pero un micrófono fijo bien colocado siempre gana en calidad.",
      },
      { type: "heading", level: 3, text: "Iluminación" },
      {
        type: "paragraph",
        text: "Luz frontal suave como key light y un fill para evitar sombras duras en el rostro. Un softbox tipo Aputure Amaran o un aro LED grande son suficientes para la mayoría de cursos. Si quieres separar al sujeto del fondo, añades un kicker. En A0 Studios montamos el setup antes de que llegues: llegas, te pruebas, grabas.",
      },
      {
        type: "image",
        src: "/blog/grabacion-cursos-online-madrid/mid.webp",
        alt: "Setup de cámara profesional para grabación de vídeo formativo",
        width: 1920,
        height: 1080,
      },
      { type: "heading", level: 2, text: "Cómo organizar el flujo de trabajo" },
      {
        type: "list",
        items: [
          "Divide el contenido por módulos antes de venir. Un módulo, un bloque de grabación. No grabes el curso como si fuera una conferencia continua.",
          "Prepara un guion o bullet points por tema. Un teleprompter o notas en pantalla reducen las tomas repetidas a la mitad.",
          "Reserva los primeros 20-30 minutos para calentamiento: prueba de luz, audio y un fragmento de prueba. No es tiempo perdido.",
          "Graba de menor a mayor dificultad técnica: los módulos conceptuales primero, las demos prácticas cuando ya tienes ritmo.",
          "Descansa 10 minutos cada 90 minutos. La voz y la concentración lo agradecen. El material grabado tras pausa es más limpio.",
          "Entrega los brutos organizados por módulo y toma: facilita la edición y permite corregir un bloque sin regrabar todo el curso.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuántos módulos se pueden grabar en una jornada en A0 Studios?",
        answer: "En una jornada de 6 horas, es realista grabar entre 8 y 12 módulos de 5-8 minutos si el formador llega con el guion preparado. Si los módulos incluyen demos o cambios de setup entre bloques, el ritmo baja. La clave es llegar con el contenido organizado y no improvisar el orden en sala.",
      },
      {
        type: "faq",
        question: "¿Hace falta editar el vídeo antes de subirlo a la plataforma?",
        answer: "Sí, aunque sea un corte básico. Los alumnos toleran mal los silencios largos, las tomas fallidas o los arranques vacilantes. Un montaje limpio —cortar errores, ajustar audio, añadir títulos de módulo— mejora la percepción del curso aunque el contenido sea el mismo. Con el servicio de Grabación + Edición en A0 Studios, entregamos el vídeo editado y listo para subir.",
      },
      {
        type: "faq",
        question: "¿Es necesario grabar con croma o fondo verde?",
        answer: "No. El croma funciona bien en producción grande con equipo dedicado, pero en sesiones de un día genera complicaciones: espacio extra, iluminación específica y edición posterior más laboriosa. Un fondo real con carácter —ladrillo visto, librería, madera— transmite más personalidad y cuesta menos en producción. En A0 Studios el fondo del ático aporta ese contexto sin efectos.",
      },
      {
        type: "faq",
        question: "¿Puedo grabar módulos de cursos distintos en el mismo día?",
        answer: "Sí, pero hay que planificarlo. Si los dos cursos tienen identidad visual diferente —distinto outfit, fondo o configuración de luz— conviene terminar uno, cambiar el setup y continuar con el otro. Si la identidad es la misma, no hay problema en mezclarlos siempre que el guion esté claro y el formador sepa en qué módulo está en cada momento.",
      },
      {
        type: "paragraph",
        text: "Si estás pensando en grabar un curso online en Madrid y no sabes por dónde empezar, en A0 Studios te ayudamos a estructurar la jornada antes de que llegues. Escríbenos desde /#contacto y te decimos qué necesitas según el tipo de formación que quieres producir.",
      },
    ],
  },
  {
    slug: "contenido-youtube-shorts-sesion-estudio",
    title: "Contenido para YouTube Shorts desde una sesión de estudio",
    description:
      "Cómo grabar YouTube Shorts en una sesión de estudio en Madrid: qué planificar, cómo capturarlo en vertical y cómo estructurar los clips para que funcionen.",
    publishedAt: "2026-06-17",
    readingTime: "5 min",
    category: "Guía",
    tags: ["YouTube Shorts", "estudio de grabación", "contenido de marca", "vídeo vertical", "content day", "Madrid"],
    keyword: "contenido youtube shorts sesion estudio",
    intent: "informacional",
    excerpt:
      "YouTube Shorts tiene mejor alcance orgánico del que muchas marcas aprovechan. Así se planifica y graba en una sesión de estudio en Madrid sin alargar el día.",
    seoTitle: "YouTube Shorts desde estudio: cómo planificarlo | A0 Studios Madrid",
    metaDescription:
      "Contenido para YouTube Shorts desde una sesión de estudio: cómo planificarlo, capturarlo en vertical y estructurar los clips para que funcionen en Madrid.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "YouTube Shorts ha pasado de ser un experimento a convertirse en uno de los formatos con mayor alcance orgánico de la plataforma. Si ya produces contenido en estudio —podcast, reels, entrevistas—, añadir clips verticales para Shorts no implica alargar la sesión ni multiplicar el presupuesto. Implica planificarlo antes de llegar.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios llevamos tiempo grabando content days donde una parte del material se destina directamente a YouTube Shorts. No como añadido de última hora, sino como formato previsto desde el principio. Lo que te cuento aquí es cómo funciona en la práctica: qué capturar, cómo organizarlo y qué errores evitar para que los clips no queden enterrados en el disco duro después de la sesión.",
      },
      {
        type: "image",
        src: "/blog/contenido-youtube-shorts-sesion-estudio/hero.webp",
        alt: "Icono de YouTube Shorts sobre fondo oscuro para contenido de marca",
        width: 1920,
        height: 1440,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué YouTube Shorts merece un hueco en tu sesión de estudio" },
      {
        type: "paragraph",
        text: "YouTube Shorts tiene algo que Instagram Reels y TikTok no tienen en el mismo grado: alimenta directamente el canal de YouTube largo. Un Short que funciona puede derivar visitas al episodio completo, a la página de tu empresa o al vídeo de ventas anclado en el canal. El algoritmo favorece la consistencia en formatos mixtos: quienes combinan Shorts con vídeo largo tienen más probabilidad de que el canal crezca como sistema, no solo como un formato aislado.",
      },
      {
        type: "paragraph",
        text: "El segundo elemento que hace interesante Shorts para marcas y empresas es la búsqueda dentro de YouTube. YouTube es el segundo motor de búsqueda del mundo. Un Short bien titulado sobre un tema concreto —cómo preparar una sesión de grabación, qué micrófono usar para podcast— aparece en resultados de búsqueda cuando alguien busca ese término desde YouTube o Google. Eso es tráfico orgánico que los clips de Instagram no generan con la misma eficiencia.",
      },
      { type: "heading", level: 2, text: "Cómo grabar Shorts en una sesión de estudio" },
      { type: "heading", level: 3, text: "Planifica los clips antes de entrar al estudio" },
      {
        type: "paragraph",
        text: "El error más frecuente es llegar con la idea de aprovechar lo que sobra para Shorts. Eso rara vez funciona. Los clips que funcionan en Shorts tienen una estructura propia: gancho en los primeros 3 segundos, mensaje central claro y cierre con dirección concreta. Si eso no está pensado antes de llegar, lo que sale es material residual que no sirve para ningún formato. Prepara una lista de 5 a 10 ideas de Shorts —distintas del contenido largo que también vas a grabar— y llega con los puntos clave escritos por pieza.",
      },
      { type: "heading", level: 3, text: "Captura en vertical desde el primer momento" },
      {
        type: "paragraph",
        text: "Grabar en horizontal y recortar en vertical para Shorts es el atajo que peor funciona. Pierdes un 40% de la imagen y el encuadre queda forzado. Si planeas publicar en Shorts, graba en 9:16 desde el principio, bien con la cámara principal en posición vertical o con una segunda cámara dedicada. En A0 Studios, cuando los content days incluyen Shorts, montamos un ángulo vertical específico que no interfiere con el setup horizontal del resto de la sesión. Un trípode con un smartphone reciente —iPhone 15, Samsung S24— bien configurado es suficiente para la mayoría de casos.",
      },
      { type: "heading", level: 3, text: "Estructura el clip en 60 segundos o menos" },
      {
        type: "paragraph",
        text: "YouTube Shorts admite hasta 3 minutos, pero los clips de entre 30 y 60 segundos tienen mejor retención. Eso significa que cada pieza tiene que tener una sola idea central. El formato que mejor funciona en Shorts desde un estudio: habla directa a cámara con un punto de vista concreto, una técnica que has probado o una pregunta del sector respondida sin rodeos. Si necesitas más de 60 segundos para explicarlo, probablemente es contenido de vídeo largo, no de Short.",
      },
      {
        type: "image",
        src: "/blog/contenido-youtube-shorts-sesion-estudio/mid.webp",
        alt: "Creador de contenido grabando vídeo vertical con smartphone en estudio profesional",
        width: 1880,
        height: 1253,
      },
      { type: "heading", level: 2, text: "Errores comunes al grabar YouTube Shorts en estudio" },
      {
        type: "list",
        items: [
          "Grabar en horizontal y recortar verticalmente después: se pierde encuadre y resolución en el 80% de los casos.",
          "No preparar el gancho de los primeros 3 segundos: si el inicio no engancha, YouTube no distribuye el clip.",
          "Meter demasiados temas en un solo Short: Shorts funciona con una sola idea, no con resúmenes de contenido largo.",
          "Usar el audio del teléfono para el ángulo vertical: sincroniza siempre con el track limpio del setup principal.",
          "Publicar sin descripción ni hashtags: YouTube Shorts necesita metadatos para aparecer en búsquedas.",
          "Dejar los Shorts para el final de la sesión cuando la energía ya bajó: los primeros clips del día son siempre los más naturales.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuántos YouTube Shorts puedo grabar en una sesión de 3 horas?",
        answer: "Con preparación previa, entre 8 y 15 clips de 30-60 segundos. Si los Shorts son grabaciones independientes y no clips extraídos de contenido largo, calcula entre 10 y 20 minutos por pieza incluyendo tomas y revisión rápida.",
      },
      {
        type: "faq",
        question: "¿Necesito editar mucho los Shorts antes de publicarlos?",
        answer: "No si el clip está bien grabado. Los Shorts que funcionan tienen edición mínima: corte limpio, subtítulos y poco más. Si hay que construir el clip con música, transiciones y efectos, el tiempo de edición sube y el resultado no siempre mejora. Graba bien y edita poco.",
      },
      {
        type: "faq",
        question: "¿Es mejor grabar Shorts por separado o extraerlos del contenido largo?",
        answer: "Lo más eficiente es tener ambas cosas en la misma sesión, pero planificadas por separado. Extraer clips de un episodio de podcast funciona bien para momentos con insight concreto. Los Shorts grabados directamente tienen más control sobre el gancho y la estructura. En A0 Studios combinamos las dos opciones según el tipo de content day.",
      },
      {
        type: "faq",
        question: "¿YouTube Shorts tiene sentido para B2B o empresas?",
        answer: "Sí, y más de lo que parece. No para alcance masivo, sino para aparecer en búsquedas concretas dentro de YouTube: términos de sector, preguntas técnicas, comparativas. Un Short de 45 segundos bien titulado sobre un problema que resuelve tu empresa aparece en resultados cuando alguien busca ese problema. Eso vale más que mil reproducciones de audiencia genérica.",
      },
      {
        type: "paragraph",
        text: "Si quieres incluir YouTube Shorts en tu próximo content day en Madrid, en A0 Studios lo planificamos contigo antes de llegar. Escríbenos desde /#contacto y te decimos qué tiene sentido según el tipo de contenido que produces.",
      },
    ],
  },
  {
    slug: "que-grabar-jornada-intensiva-contenido",
    title: "Qué grabar en una jornada intensiva de contenido",
    description:
      "Cómo estructurar qué grabar en una jornada intensiva de contenido: qué formatos priorizar, en qué orden y cómo salir del estudio con semanas de material listo.",
    publishedAt: "2026-06-18",
    readingTime: "4 min",
    category: "Guía",
    tags: ["content day", "grabación", "estudio de grabación", "producción de contenido", "Madrid", "marca personal"],
    keyword: "jornada intensiva de contenido",
    intent: "informacional",
    excerpt:
      "Un día entero de estudio puede generar contenido para semanas. La clave está en saber qué grabar y en qué orden.",
    seoTitle: "Jornada intensiva de contenido: qué grabar | A0 Studios Madrid",
    metaDescription:
      "Jornada intensiva de contenido en estudio: qué formatos grabar, en qué orden y cómo sacar el máximo partido a un día entero de producción en Madrid.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Una jornada intensiva de contenido no es grabar mucho de cualquier cosa. Es grabar lo que necesitas, en el orden correcto, para que al final del día tengas semanas de publicaciones listas. La diferencia entre salir con 40 clips útiles o con 4 que se usan está casi siempre en la planificación previa, no en el tiempo que pasas delante de la cámara.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios llevamos tiempo haciendo jornadas de este tipo con founders, equipos de marketing y marcas personales. Lo que hemos aprendido es simple: el orden importa tanto como el volumen. Si llegas sin un esquema de qué vas a grabar y en qué secuencia, pierdes las mejores horas del día en decisiones que debían estar tomadas antes de entrar en sala.",
      },
      {
        type: "image",
        src: "/blog/que-grabar-jornada-intensiva-contenido/hero.webp",
        alt: "Setup de grabación en estudio para jornada intensiva de contenido",
        width: 1920,
        height: 1440,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué una jornada intensiva cambia la escala" },
      {
        type: "paragraph",
        text: "Grabar en sesiones sueltas de una hora tiene sentido para empezar. Pero a partir de cierto ritmo de publicación, esa dinámica es ineficiente. Cada vez que montas la cámara, calibras el sonido, preparas el set y entras en modo grabación, estás gastando energía que no produce contenido.",
      },
      {
        type: "paragraph",
        text: "Una jornada de 6-8 horas en estudio elimina ese coste fijo. Lo pagas una vez y grabas 3-4 semanas de material. El ratio esfuerzo/output cambia completamente. En A0 Studios, la mayoría de los clientes que vienen una vez al mes sacan entre 15 y 30 piezas terminadas por sesión: vídeos largos para YouTube, clips cortos para LinkedIn o Instagram, pilares de podcast y en algunos casos testimonios o piezas de producto.",
      },
      {
        type: "paragraph",
        text: "El problema es que mucha gente llega al estudio con buena energía pero sin un plan concreto de qué grabar. El resultado es material desordenado, formatos mezclados y tomas que no sirven para nada porque el contexto estaba mal planteado.",
      },
      { type: "heading", level: 2, text: "Cómo estructurar qué grabar" },
      { type: "heading", level: 3, text: "Empieza por el contenido largo" },
      {
        type: "paragraph",
        text: "Lo primero que debes grabar son los vídeos que requieren más concentración: episodios de podcast, tutoriales, vídeos de autoridad para YouTube. La mente está fresca, la voz no está cansada y los errores son menos frecuentes. Si tienes 3 episodios de podcast previstos, grába los 3 antes de pasar a cualquier otro formato. Cambiar entre formatos muy distintos en intervalos cortos fragmenta el estado mental y baja la calidad del resultado.",
      },
      { type: "heading", level: 3, text: "Después, los clips cortos" },
      {
        type: "paragraph",
        text: "Una vez tienes el contenido largo grabado, los clips cortos son mucho más fáciles. Muchos salen directamente de cortar el material ya grabado, pero otros hay que plantearlos aparte: hooks directos a cámara, respuestas a preguntas frecuentes, tips de 60 segundos. Para LinkedIn o Instagram Reels, suelen bastar 2-3 minutos de grabación por clip. Con 10-12 clips tienes un mes de publicaciones.",
      },
      { type: "heading", level: 3, text: "Cierra con testimonios o entrevistas" },
      {
        type: "paragraph",
        text: "Los testimonios, entrevistas o piezas donde solo hablas de un producto o servicio concreto van bien al final. No requieren el mismo nivel de energía narrativa que un tutorial, y si el invitado llega a media mañana, el timing encaja perfectamente. En A0 Studios usamos multicámara para este tipo de grabaciones: Sony A7 como cámara principal y una segunda cámara en plano más cerrado para los cortes de edición.",
      },
      {
        type: "image",
        src: "/blog/que-grabar-jornada-intensiva-contenido/mid.webp",
        alt: "Cámara de vídeo profesional para content day en estudio",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes al planificar la jornada" },
      {
        type: "list",
        items: [
          "Llegar sin guiones: la improvisación no escala. Aunque el formato sea conversacional, necesitas al menos un esquema de puntos por pieza.",
          "Grabar clips cortos primero: si empiezas por los Reels, cuando llegues al podcast ya habrás gastado energía vocal y mental en tonos más cortos y rápidos.",
          "No prever el tiempo de cambio de set: entre formato y formato hay 10-15 minutos de ajuste. En una jornada de 6 horas, eso es una hora entera si cambias de setup 4 veces.",
          "Meter demasiados temas distintos en el mismo día: una jornada con 8 temas produce contenido disperso. Mejor 3 temas bien desarrollados con variaciones de formato.",
          "No marcar los mejores takes al terminar: si entregas el material sin referencias, el editor tarda el doble y el output final baja.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuántos vídeos se pueden grabar en una jornada de 6 horas?",
        answer: "Depende del formato y la complejidad. Una jornada bien planificada en A0 Studios suele producir entre 2 y 4 vídeos largos de 10-20 minutos más 8-15 clips cortos. Si el foco son solo clips cortos de 60-90 segundos, el número puede superar los 20.",
      },
      {
        type: "faq",
        question: "¿Es mejor grabar todo en un día o repartirlo en varias sesiones?",
        answer: "Depende del ritmo de publicación. Si publicas a diario o muy seguido, una jornada mensual es más eficiente. Si publicas 2-3 veces por semana, puede tener más sentido venir cada 2 semanas con menos material por sesión.",
      },
      {
        type: "faq",
        question: "¿Hace falta llevar el guión escrito o vale con notas?",
        answer: "Para vídeos de más de 5 minutos, siempre es mejor guión o al menos bullets detallados. En A0 Studios usamos teleprompter para quienes prefieren leer sin que se note, pero incluso con notas en mano el resultado mejora frente a improvisar desde cero.",
      },
      {
        type: "faq",
        question: "¿Qué equipo usa A0 Studios en una jornada intensiva multicámara?",
        answer: "La configuración estándar incluye Sony A7 en plano principal, segunda cámara para plano cerrado, micrófonos de solapa o de estudio según el formato, kit de luz LED con difusores y el fondo de ático de Madrid. El audio va a un interface Focusrite y se graba en pistas separadas para mayor flexibilidad en edición.",
      },
      {
        type: "paragraph",
        text: "Si estás pensando en organizar tu primera jornada intensiva de contenido o quieres mejorar cómo estructuras las que ya haces, en A0 Studios planificamos la sesión contigo antes del día de grabación. El tiempo en estudio es más productivo cuando lo que vas a grabar ya está decidido. Escríbenos desde /#contacto.",
      },
    ],
  },
  {
    slug: "como-preparar-invitado-grabar-podcast",
    title: "Cómo preparar a un invitado para grabar un podcast",
    description:
      "Guía práctica para preparar a tus invitados antes de la sesión de podcast en estudio: qué enviarles, cómo hacer el briefing y qué errores evitar para que la grabación fluya.",
    publishedAt: "2026-06-19",
    readingTime: "5 min",
    category: "Guía",
    tags: ["podcast", "grabación", "invitados", "estudio", "Madrid", "producción"],
    keyword: "como preparar invitado grabar podcast",
    intent: "informacional",
    excerpt:
      "Preparar bien a un invitado antes de la grabación marca la diferencia entre una conversación forzada y una entrevista que engancha desde el minuto uno.",
    seoTitle: "Cómo preparar a un invitado para podcast | A0 Studios Madrid",
    metaDescription:
      "Cómo preparar a un invitado para grabar un podcast: briefing de temas, llamada previa y errores a evitar para que la sesión fluya desde el minuto uno.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Traer a un invitado al estudio es una de las mejores formas de enriquecer un podcast. Pero si esa persona llega sin haber leído nada, sin saber qué esperar y con los nervios a flor de piel, los primeros 20 minutos de grabación se van en que empiece a sonar natural. Eso es tiempo y energía que se puede ahorrar con muy poco trabajo previo.",
      },
      {
        type: "paragraph",
        text: "He grabado suficientes episodios en A0 Studios como para saber que la diferencia entre una entrevista que fluye y una que se nota forzada rara vez está en el equipo. Está en la preparación del invitado. No hace falta un briefing largo ni una llamada de una hora. Hace falta darle la información correcta en el momento correcto para que llegue al estudio con claridad.",
      },
      {
        type: "image",
        src: "/blog/como-preparar-invitado-grabar-podcast/hero.webp",
        alt: "Estudio de podcast con micrófono profesional y auriculares listos para grabar una entrevista",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué la preparación del invitado cambia el resultado" },
      {
        type: "paragraph",
        text: "Cuando alguien llega al estudio por primera vez, está procesando muchas cosas a la vez: el espacio, los micrófonos, las cámaras, las luces. Su cerebro está en modo exploración, no en modo conversación. Si además no sabe bien de qué vais a hablar ni cuánto tiempo dura la grabación, el arranque es lento y la confianza tarda en llegar.",
      },
      {
        type: "paragraph",
        text: "El problema es que ese tiempo de calentamiento se graba. Y si estás en formato solo audio, lo puedes cortar fácil. Pero si grabas en vídeo y quieres aprovechar clips del principio del episodio, necesitas que la energía esté ahí desde el minuto uno. Por eso la preparación no es un extra: es parte del proceso de producción.",
      },
      {
        type: "paragraph",
        text: "Además, un invitado bien preparado habla con más concisión. Sabe lo que viene. No necesita titubear mientras intenta recordar de qué fuente sacó ese dato. Y eso se traduce en frases más limpias, menos cortes y mejor material para clips de redes.",
      },
      { type: "heading", level: 2, text: "Cómo prepararlo antes del día de grabación" },
      { type: "heading", level: 3, text: "Envíale los temas y el formato por adelantado" },
      {
        type: "paragraph",
        text: "No hace falta mandarle las preguntas exactas. De hecho, si las memoriza todas, la conversación pierde espontaneidad. Lo que sí funciona es enviarle un bloque de 3 a 5 ejes temáticos con una frase cada uno: qué cambió en tu forma de trabajar desde que empezaste, qué le dirías a quien empieza hoy, cuál fue el error más caro que cometiste. Eso da estructura sin cortar la conversación.",
      },
      { type: "heading", level: 3, text: "Dile qué llevar y cómo vestir" },
      {
        type: "paragraph",
        text: "Que llegue descansado, con ropa sin estampados muy llamativos (generan ruido visual en cámara) y sin colonia intensa si habrá micrófonos de solapa. Si grabáis también en remoto o estáis pensando en episodios híbridos, añade instrucciones básicas de audio: auriculares cableados, habitación sin eco, micrófono USB si lo tiene.",
      },
      { type: "heading", level: 3, text: "Haz una llamada de 15 minutos antes de grabar" },
      {
        type: "paragraph",
        text: "No para repasar todo el guión. Para dos cosas: primero, que el invitado te oiga y te asocie con la experiencia que ya le explicaste por escrito. Segundo, para confirmar que tiene claro el objetivo del episodio. Qué quieres que se lleve quien escuche esto es la mejor pregunta de esa llamada. La respuesta te da el eje de la entrevista.",
      },
      {
        type: "image",
        src: "/blog/como-preparar-invitado-grabar-podcast/mid.webp",
        alt: "Micrófono de estudio y auriculares preparados para una sesión de grabación de podcast con invitado",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes al llevar invitados al estudio" },
      {
        type: "list",
        items: [
          "Asumir que el invitado ya sabe cómo funciona un estudio de grabación.",
          "Mandar toda la lista de preguntas y que la entrevista parezca un examen.",
          "No explicar la duración: el invitado bloquea solo una hora y la sesión necesita dos.",
          "Olvidar mencionar que habrá cámaras, no solo micrófonos.",
          "Empezar la grabación sin un momento de conversación informal para romper el hielo.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Hay que mandar un guión completo al invitado antes de grabar?",
        answer: "No. Un guión completo hace que la conversación suene ensayada. Lo ideal es enviar los bloques temáticos y dos o tres preguntas de arranque. El resto surge en el estudio.",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo antes se envía el briefing al invitado?",
        answer: "Con 48 a 72 horas de antelación es suficiente. Si se lo mandas con demasiada antelación puede que lo haya olvidado. Si es el mismo día, llega sin haberlo procesado.",
      },
      {
        type: "faq",
        question: "¿Merece la pena hacer una sesión de prueba en estudio con el invitado?",
        answer: "Solo si es alguien muy poco habitual ante cámaras y el episodio tiene mucho peso. Para la mayoría, el tiempo en estudio se aprovecha mejor grabando directamente con 10 minutos de calentamiento informal al inicio.",
      },
      {
        type: "faq",
        question: "¿Se puede grabar con más de un invitado a la vez?",
        answer: "Sí. En A0 Studios hemos grabado episodios de debate con tres participantes. La clave es que cada uno tenga micro propio y que todos conozcan las reglas básicas: hablar uno a uno, no interrumpir y mantener la posición respecto al micrófono.",
      },
      {
        type: "paragraph",
        text: "Preparar bien a un invitado no requiere mucho tiempo, pero sí requiere hacerlo con intención. Si estás planificando un episodio con alguien externo y quieres que el resultado sea aprovechable para clips, newsletters y contenido de redes, en A0 Studios podemos ayudarte a estructurar la sesión antes del día de grabación. Escríbenos desde /#contacto.",
      },
    ],
  },
  {
    slug: "edicion-video-rapida-vs-edicion-que-convierte",
    title: "La diferencia entre edición de vídeo rápida y edición que convierte",
    description:
      "No toda la edición vale igual. La diferencia entre montar clips y editar para que el espectador haga algo es técnica, pero sobre todo es de criterio.",
    publishedAt: "2026-06-23",
    readingTime: "4 min",
    category: "Guía",
    tags: ["edición de vídeo", "producción de contenido", "marketing de contenidos", "estudio Madrid", "conversión"],
    keyword: "edicion de video rapida vs edicion que convierte",
    intent: "informacional",
    excerpt:
      "No toda la edición vale igual. La diferencia entre montar clips y editar para que el espectador haga algo es técnica, pero sobre todo es de criterio.",
    seoTitle: "Edición de vídeo que convierte: qué cambia | A0 Studios Madrid",
    metaDescription:
      "Edición rápida y edición que convierte no son lo mismo. Qué diferencia el montaje eficiente del que genera resultados reales para tu marca.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Cuando alguien dice edítame esto rápido entiende recortes limpios, silencios cortados, música de fondo y entrega en el día. Eso es edición. Funciona. Pero hay otro tipo de edición que no solo elimina lo que sobra, sino que organiza, dirige la atención y lleva al espectador a hacer algo concreto al terminar de ver.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios trabajamos los dos. El primero para quien necesita velocidad y volumen. El segundo para quien quiere que cada pieza sea un activo real. La diferencia no está en el programa que usas ni en el editor que contratas. Está en el criterio con el que se toman las decisiones de montaje.",
      },
      {
        type: "image",
        src: "/blog/edicion-video-rapida-vs-edicion-que-convierte/hero.webp",
        alt: "Timeline de edición de vídeo en Premiere Pro en pantalla profesional",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué distingue una edición de la otra" },
      {
        type: "paragraph",
        text: "La edición rápida parte de los brutos, elimina errores técnicos, iguala audio y vídeo, añade gráficos básicos y entrega. Es útil y necesaria para contenido de volumen: clips de redes, cortes de eventos, fragmentos de directos. No hay nada malo en hacerlo así cuando el objetivo es presencia y frecuencia.",
      },
      {
        type: "paragraph",
        text: "La edición que convierte empieza antes del montaje. Empieza en la pregunta: ¿qué quiero que haga el espectador cuando termine de ver esto? Y desde esa pregunta organiza cada segundo. No elimina silencios porque sí. Los elimina cuando distraen. Los deja cuando generan tensión o peso en el argumento.",
      },
      {
        type: "paragraph",
        text: "El resultado visual puede parecer idéntico. Mismas transiciones, mismo color, misma duración. Pero el espectador lo percibe diferente aunque no sea consciente de por qué.",
      },
      { type: "heading", level: 2, text: "Cómo se construye una edición que convierte" },
      { type: "heading", level: 3, text: "Estructura narrativa antes de abrir el timeline" },
      {
        type: "paragraph",
        text: "El montaje empieza en el guión o en la sala, no en DaVinci Resolve o Premiere. Antes de tocar un clip hay que decidir qué va primero, dónde está el gancho y cuándo llega la resolución. Un editor sin ese mapa edita bien técnicamente pero sin dirección. En A0 Studios el proceso siempre pasa por revisar la estructura del material antes de montar.",
      },
      { type: "heading", level: 3, text: "Ritmo controlado, no automático" },
      {
        type: "paragraph",
        text: "La velocidad de corte no es un estilo, es una herramienta. Los cortes rápidos generan energía. Los cortes lentos generan credibilidad y peso. Si cortas todo al mismo ritmo, el espectador se desconecta. Una edición que convierte usa el ritmo como palanca: acelera en la demostración, frena en el argumento central. Eso no ocurre con ningún preset ni plantilla de CapCut aplicada sin criterio.",
      },
      { type: "heading", level: 3, text: "El CTA integrado, no pegado al final" },
      {
        type: "paragraph",
        text: "La mayoría de vídeos ponen el CTA como crédito de cierre: sígueme, escríbeme, link en bio. Eso es CTA pegado. En una edición que convierte el CTA surge del contenido: la última frase crea la necesidad y el espectador ya está listo para dar el paso antes de que se lo pidas. No es una petición, es una consecuencia natural de lo que acaba de ver.",
      },
      {
        type: "image",
        src: "/blog/edicion-video-rapida-vs-edicion-que-convierte/mid.webp",
        alt: "Pantalla de edición de vídeo en iMac con teclado y ratón Apple en mesa de trabajo",
        width: 1920,
        height: 1288,
      },
      { type: "heading", level: 2, text: "Cuándo usar cada tipo de edición" },
      {
        type: "list",
        items: [
          "Clips de redes de bajo riesgo, stories o fragmentos de directos: edición rápida, suficiente.",
          "Contenido de autoridad en LinkedIn, reflexiones o guías largas: edición que convierte.",
          "VSL, vídeos de ventas o presentaciones de producto: siempre edición con criterio de conversión.",
          "Entrevistas que luego se convierten en clips: empieza con criterio de conversión desde el montaje principal.",
          "Testimonios o casos de éxito de clientes: no hay margen para edición descuidada, cada segundo de duda es una fuga.",
          "Contenido de branding puro sin CTA directo: balance entre dejar marca y no forzar una acción.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto tarda más una edición que convierte respecto a una rápida?",
        answer: "Depende del material, pero en proyectos de 3-5 minutos el tiempo puede ser el doble. No porque haya más clics, sino porque hay más decisiones. El editor necesita revisar los brutos con criterio estratégico, no mecánicamente.",
      },
      {
        type: "faq",
        question: "¿Con CapCut o Premiere se puede hacer edición que convierte?",
        answer: "Sí. El programa no importa. Lo que importa es el proceso previo: estructura, objetivo, ritmo. CapCut bien utilizado con criterio supera a Premiere usado de forma mecánica.",
      },
      {
        type: "faq",
        question: "¿Qué información necesito dar al editor para que la edición convierta?",
        answer: "El objetivo del vídeo, a quién va dirigido y qué acción quieres que tome el espectador al terminar. Con eso hay suficiente para orientar el montaje. Sin eso, el editor monta lo que ve, no lo que necesitas.",
      },
      {
        type: "faq",
        question: "¿Puedo empezar con edición rápida y escalar después?",
        answer: "Sí, y tiene sentido si estás validando formatos. Cuando sepas qué tipo de contenido funciona para tu audiencia, ya inviertes en el criterio editorial. Muchos de nuestros clientes en A0 Studios hacen exactamente ese recorrido.",
      },
      {
        type: "paragraph",
        text: "Si tienes brutos de sesiones anteriores y no estás seguro de si la edición está funcionando, lo primero es revisar el criterio editorial. En A0 Studios trabajamos tanto la grabación como la postproducción. Cuéntanos qué tienes y qué quieres conseguir desde /#contacto.",
      },
    ],
  },
  {
    slug: "cuando-contratar-produccion-completa-vs-solo-grabacion",
    title: "Cuándo contratar producción completa vs solo grabación",
    description:
      "No siempre necesitas producción completa. Pero a veces ahorrarte la edición es el peor ahorro posible. Guía para elegir el servicio correcto según tu proyecto.",
    publishedAt: "2026-06-24",
    readingTime: "4 min",
    category: "Guía",
    tags: ["producción de contenido", "grabación madrid", "edición de vídeo", "estudio madrid", "podcast", "vídeo profesional"],
    keyword: "cuando contratar produccion completa vs solo grabacion",
    intent: "informacional",
    excerpt:
      "No siempre necesitas producción completa. Pero a veces, ahorrarte la edición es el peor ahorro posible. Esto es lo que tienes que saber antes de decidir.",
    seoTitle: "Producción completa vs solo grabación | A0 Studios Madrid",
    metaDescription:
      "Cuándo contratar producción completa vs solo grabación: guía para elegir el servicio correcto según tu proyecto, equipo y presupuesto en A0 Studios Madrid.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Cuando alguien llama a A0 Studios, lo primero que pregunta es el precio. Lo segundo, qué incluye. Y ahí empieza siempre la misma conversación: depende de lo que quieres hacer con lo que grabamos. Los tres servicios —Solo Grabación, Grabación + Edición y Producción Completa— no son versiones del mismo servicio. Son enfoques distintos para necesidades distintas. Elegir mal no solo cuesta dinero: cuesta tiempo.",
      },
      {
        type: "paragraph",
        text: "He visto proyectos que pagaron Producción Completa cuando con Solo Grabación les habría sobrado. Y otros que eligieron Solo Grabación y el material acabó en un disco duro sin publicar porque no tenían quién lo editara. La decisión correcta no depende del presupuesto, sino de dónde está tu cuello de botella real.",
      },
      {
        type: "image",
        src: "/blog/cuando-contratar-produccion-completa-vs-solo-grabacion/hero.webp",
        alt: "Estudio de vídeo profesional con cámara y equipo de producción configurado",
        width: 1920,
        height: 1282,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué diferencia real hay entre los tres servicios" },
      {
        type: "paragraph",
        text: "Solo Grabación te da el material bruto. Sales del estudio con los archivos y haces con ellos lo que quieras. Es el punto de partida para equipos que ya tienen edición interna o para creators que prefieren controlar cada corte.",
      },
      {
        type: "paragraph",
        text: "Grabación + Edición te da el vídeo terminado. Grabamos y montamos: cortes, música, títulos, subtítulos si los necesitas. Es el servicio más habitual en A0 Studios porque cubre el 80% de los casos: podcast, entrevistas, reels para empresa, clips de LinkedIn.",
      },
      {
        type: "paragraph",
        text: "Producción Completa va un paso más. Incluye preproducción —guión, escaleta, dinámica de cámara— más grabación y postproducción completa. Es para proyectos donde el cliente no quiere pensar en nada excepto aparecer delante de cámara y que el resultado quede bien desde el primer frame.",
      },
      { type: "heading", level: 2, text: "Cómo elegir según tu situación" },
      { type: "heading", level: 3, text: "Si ya tienes editor" },
      {
        type: "paragraph",
        text: "Si tu empresa tiene un equipo de vídeo o un editor freelance de confianza, Solo Grabación tiene sentido. El estudio te da calidad de imagen y audio que tu editor aprovecha al máximo. No tiene sentido pagar por edición que ya tienes cubierta por otro lado.",
      },
      { type: "heading", level: 3, text: "Si el tiempo es el recurso escaso" },
      {
        type: "paragraph",
        text: "Para un founder o CEO que graba una vez al mes, la edición es una fricción que mata la constancia. Grabación + Edición elimina esa fricción: grabas, te vas y recibes el material listo en 24-48 horas. No hay que hacer seguimiento ni coordinar a nadie: el ciclo completo queda cerrado con una sola sesión.",
      },
      { type: "heading", level: 3, text: "Si arrancas desde cero" },
      {
        type: "paragraph",
        text: "Si no tienes guión, no sabes cuántas cámaras necesitas ni tienes claro el formato, Producción Completa es lo correcto. No porque sea el servicio más caro, sino porque la preproducción cambia el resultado. Un guión bien trabajado puede doblar el número de clips útiles que sacas de una mañana de grabación. Sin él, grabas más tiempo del necesario y editas más de lo que tendrías que editar.",
      },
      {
        type: "image",
        src: "/blog/cuando-contratar-produccion-completa-vs-solo-grabacion/mid.webp",
        alt: "Operador de cámara sosteniendo equipo de vídeo profesional en sesión de grabación",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Cuándo tiene sentido cada opción" },
      {
        type: "list",
        items: [
          "Solo Grabación: si tienes edición interna o el material va a un flujo de postproducción ya establecido.",
          "Solo Grabación no tiene sentido si vas a tardar semanas en editar porque no tienes tiempo: acabarás sin publicar nada.",
          "Grabación + Edición es la opción por defecto para la mayoría de proyectos: podcast, entrevistas, vídeos de LinkedIn, reels.",
          "Producción Completa encaja en lanzamientos de producto, series con identidad visual específica o cuando el cliente no ha grabado contenido profesional antes.",
          "Contratar Producción Completa para un reel semanal es sobredimensionar; contratar Solo Grabación para una VSL sin guión previo es quedarse corto.",
          "El cuello de botella real suele ser el tiempo, no el dinero. Elige el servicio que elimina ese cuello de botella.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Puedo empezar con Solo Grabación y pasar a Producción Completa más adelante?",
        answer: "Sí, y es un camino habitual. Muchos clientes empiezan grabando y editando por su cuenta para entender qué necesitan, y cuando escalan el volumen de contenido pasan a Grabación + Edición o Producción Completa.",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo tarda la entrega en cada servicio?",
        answer: "Con Solo Grabación los archivos están disponibles el mismo día. Con Grabación + Edición entregamos en 48-72 horas. Con Producción Completa los plazos dependen de la preproducción: habitualmente entre 5 y 10 días hábiles desde la sesión.",
      },
      {
        type: "faq",
        question: "¿La Producción Completa incluye guión o solo edición avanzada?",
        answer: "Incluye preproducción completa: guión o escaleta, planificación de cámara y dinámica de entrevista o presentación. No es solo edición con más capas: es un trabajo previo que define cómo se va a grabar y maximiza el material útil de la sesión.",
      },
      {
        type: "faq",
        question: "¿Qué servicio recomendáis para un podcast con vídeo semanal?",
        answer: "Grabación + Edición. Para un podcast semanal donde necesitas cortes para LinkedIn, Instagram y YouTube, el ciclo de entrega tiene que ser rápido y sin fricciones. Producción Completa tiene más sentido para proyectos de lanzamiento o series con identidad visual muy definida.",
      },
      {
        type: "paragraph",
        text: "La elección entre servicios no es solo una cuestión de presupuesto. Es una cuestión de cuál es tu cuello de botella y cuánto vale tu tiempo. Si tienes dudas sobre qué tiene sentido para tu proyecto, escríbenos desde /#contacto y lo vemos juntos.",
      },
    ],
  },
  {
    slug: "contenido-recurrente-marca-constancia",
    title: "Contenido recurrente para marca: por qué la constancia es el activo real",
    description:
      "Publicar de forma constante construye más confianza que cualquier campaña puntual. Cómo estructurar contenido recurrente para tu marca desde un estudio en Madrid.",
    publishedAt: "2026-06-25",
    readingTime: "5 min",
    category: "Guía",
    tags: ["contenido recurrente", "marca", "constancia", "estrategia de contenido", "Madrid", "producción"],
    keyword: "contenido recurrente para marca",
    intent: "informacional",
    excerpt:
      "Publicar de forma constante construye más confianza que cualquier campaña puntual. Te contamos cómo estructurar contenido recurrente para tu marca desde una sesión de estudio.",
    seoTitle: "Contenido recurrente para marca | A0 Studios Madrid",
    metaDescription:
      "Contenido recurrente para marca: por qué la constancia genera más autoridad que cualquier campaña puntual y cómo estructurarlo desde un estudio en Madrid.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Hay marcas que lanzan una campaña de contenido, generan mucho ruido durante dos semanas y luego desaparecen. Y hay marcas que llevan meses publicando sin grandes golpes de efecto pero que cada vez que aparecen en el feed, el algoritmo las impulsa y el público las reconoce. La diferencia no está en el presupuesto ni en la calidad de cada pieza individual. Está en la constancia.",
      },
      {
        type: "paragraph",
        text: "La constancia en el contenido no es un principio motivacional. Es una mecánica. El algoritmo premia la regularidad, los seguidores se acostumbran a esperar tus piezas, y el banco de contenido acumulado genera tráfico orgánico mes tras mes. Este artículo explica cómo estructurar el contenido recurrente de una marca para que sea sostenible, no una carrera contra el tiempo.",
      },
      {
        type: "image",
        src: "/blog/contenido-recurrente-marca-constancia/hero.webp",
        alt: "Profesional grabando contenido en estudio con equipo de iluminación y cámara",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es el contenido recurrente y por qué importa tanto" },
      {
        type: "paragraph",
        text: "El contenido recurrente no es publicar mucho. Es publicar de forma predecible. Una newsletter cada martes, un podcast cada jueves, tres reels a la semana. La regularidad crea un contrato implícito con tu audiencia: saben cuándo esperarte. Y eso vale más que un vídeo viral que no tiene continuación.",
      },
      {
        type: "paragraph",
        text: "El algoritmo de LinkedIn, Instagram o YouTube no trabaja por impactos puntuales. Trabaja por señales de actividad sostenida. Una cuenta que publica semanalmente durante seis meses recibe un tratamiento completamente distinto al de una que publicó 20 veces en enero y luego nada. La consistencia envía señales de confianza que acaban traduciéndose en alcance orgánico.",
      },
      {
        type: "paragraph",
        text: "Pero el efecto más potente no es a corto plazo. Es el acumulado. El post que publicas hoy empieza a posicionarse en Google dentro de 3 meses. El episodio de podcast que grabas esta semana puede seguir atrayendo escuchas en dos años. La constancia convierte el contenido en un activo, no en un gasto de energía.",
      },
      { type: "heading", level: 2, text: "Cómo estructurar el contenido recurrente" },
      { type: "heading", level: 3, text: "Define un formato ancla" },
      {
        type: "paragraph",
        text: "El error más frecuente es intentar estar en todos los sitios al mismo tiempo sin un formato central. El formato ancla es la pieza que grabas sistemáticamente: un podcast semanal, una entrevista de LinkedIn cada dos semanas, una serie de reels de producto. Ese formato elimina la parálisis de la hoja en blanco porque la decisión ya está tomada. No hay que replantearse qué grabar: solo hay que ejecutar.",
      },
      { type: "heading", level: 3, text: "Agrupa la producción en sesiones" },
      {
        type: "paragraph",
        text: "La constancia no obliga a grabar cada semana. En A0 Studios vemos habitualmente cómo una sesión de 3-4 horas genera entre 4 y 8 semanas de contenido publicable. El proceso es simple: se planifican los temas antes de llegar al estudio, se graba en bloques y se sale con el material bruto para editar y distribuir en los días siguientes. Una vez al mes en estudio puede ser suficiente para mantener una presencia semanal sólida.",
      },
      { type: "heading", level: 3, text: "Adapta el mismo material a distintos canales" },
      {
        type: "paragraph",
        text: "De una sesión de podcast sale mucho más que el episodio. Sale el vídeo completo para YouTube, 3-4 clips cortos para LinkedIn, 2 reels verticales para Instagram, un fragmento para newsletter y potencialmente un artículo de blog basado en el tema tratado. Sin reinventar nada, el mismo material llega a 5 canales distintos. Esto multiplica el impacto de cada sesión de grabación sin multiplicar el tiempo de producción.",
      },
      {
        type: "image",
        src: "/blog/contenido-recurrente-marca-constancia/mid.webp",
        alt: "Calendario editorial con planificación de contenido mensual",
        width: 1920,
        height: 1281,
      },
      { type: "heading", level: 2, text: "Señales de que tu estrategia de contenido no es sostenible" },
      {
        type: "list",
        items: [
          "Publicas en rachas de 2-3 semanas seguidas y luego desapareces 1 mes completo.",
          "Cada pieza requiere una reunión interna de aprobación antes de salir al aire.",
          "Grabas, editas y publicas el mismo día: no hay colchón de contenido preparado.",
          "No tienes banco de material: si esta semana no grabas, esta semana no publicas.",
          "El equipo debate desde cero el tema de cada pieza, sin un calendario editorial previo.",
          "La calidad varía enormemente entre piezas porque no hay proceso ni plantilla definida.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Con qué frecuencia debería publicar una marca?",
        answer: "Depende del canal y de los recursos disponibles, pero como regla general: al menos una vez por semana en LinkedIn si haces contenido de autoridad, y 3 veces por semana en Instagram si el foco está en reels. Lo más importante no es la frecuencia máxima que puedas sostener un mes; es la mínima que puedas mantener durante un año.",
      },
      {
        type: "faq",
        question: "¿Cuánto contenido se puede producir en una sesión de estudio?",
        answer: "Con una planificación previa adecuada, una sesión de 3-4 horas en A0 Studios genera habitualmente entre 4 y 8 semanas de contenido distribuible. El volumen depende del tipo de formato: un podcast con clips tiene mayor rendimiento por hora grabada que una VSL de producto que requiere más precisión.",
      },
      {
        type: "faq",
        question: "¿El contenido recurrente funciona si soy una empresa pequeña?",
        answer: "Especialmente para empresas pequeñas. Las marcas grandes tienen presupuesto para campañas puntuales de alto impacto. Las pequeñas compiten con constancia y especificidad: publicar sistemáticamente sobre un nicho concreto genera más autoridad que intentar aparecer en todos los frentes con piezas dispersas.",
      },
      {
        type: "faq",
        question: "¿Cómo se mide si el contenido recurrente está funcionando?",
        answer: "Las métricas que importan no son los likes de cada pieza sino las tendencias a 90 días: crecimiento de seguidores, tráfico orgánico acumulado, solicitudes de contacto entrantes y posicionamiento en buscadores. El contenido recurrente tarda entre 3 y 6 meses en mostrar resultados claros. Medir a las 2 semanas solo produce frustración.",
      },
      {
        type: "paragraph",
        text: "Construir un sistema de contenido recurrente es una de las mejores inversiones que puede hacer una marca. No requiere grandes presupuestos, pero sí requiere planificación, un espacio donde producir sin fricción y un proceso que permita sostenerlo en el tiempo. Si quieres ver cómo encaja en tu situación concreta, escríbenos desde /#contacto.",
      },
    ],
  },
  {
    slug: "grabacion-testimonios-casos-exito-empresa",
    title: "Grabación de testimonios y casos de éxito para empresa: cómo hacerlo bien",
    description:
      "Cómo grabar testimonios de clientes y casos de éxito que generen confianza. Guía práctica sobre preparación, técnica y preguntas desde el estudio A0 Studios en Madrid.",
    publishedAt: "2026-06-26",
    readingTime: "5 min",
    category: "Guía",
    tags: ["testimonios empresa", "casos de éxito", "grabación vídeo", "contenido B2B", "Madrid"],
    keyword: "grabacion de testimonios para empresa",
    intent: "informacional",
    excerpt:
      "Grabar un testimonio de cliente mal resulta contraproducente. Guía para hacerlo bien: espacio, preguntas, técnica y errores que evitar.",
    seoTitle: "Grabación de testimonios para empresa | A0 Studios Madrid",
    metaDescription:
      "Cómo grabar testimonios de clientes y casos de éxito que generen confianza. Guía práctica desde el estudio A0 Studios en Madrid centro.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Un testimonio de cliente mal grabado puede hacer más daño que no tener ninguno. Si el vídeo se ve oscuro, el audio suena a llamada de WhatsApp y la persona parece que está leyendo un guión, el mensaje que transmites es el contrario al que buscabas. La cámara amplifica la incomodidad igual que amplifica la autenticidad.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios hemos grabado testimonios y piezas de casos de éxito para equipos de marketing, agencias y empresas que necesitan ese tipo de contenido para cerrar ventas, justificar inversiones o reforzar la credibilidad en licitaciones. Lo que marca la diferencia no es el presupuesto: es el proceso.",
      },
      {
        type: "image",
        src: "/blog/grabacion-testimonios-casos-exito-empresa/hero.webp",
        alt: "Grabación de vídeo corporativo en estudio profesional",
        width: 1920,
        height: 1282,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Por qué el testimonio en vídeo es el contenido más difícil de fabricar",
      },
      {
        type: "paragraph",
        text: "Cualquier marca puede escribir que sus clientes están satisfechos. El vídeo no se puede fingir igual. Cuando un cliente real habla frente a cámara con naturalidad, sin parecer que está recitando, el impacto en quien lo ve es cualitativamente distinto a una reseña de texto o un logo en un apartado de clientes.",
      },
      {
        type: "paragraph",
        text: "Eso explica por qué los equipos de ventas B2B que trabajan con nosotros priorizan este formato para decks de presentación, propuestas y follow-ups. Un vídeo de 90 segundos con un cliente real explicando qué problema resolvió y por qué eligió al proveedor puede sustituir varias páginas de documentación.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo se graba un testimonio que genera confianza",
      },
      {
        type: "heading",
        level: 3,
        text: "La preparación con la persona antes de grabar",
      },
      {
        type: "paragraph",
        text: "No se trata de darle un guión. Se trata de tener una conversación de 10-15 minutos antes de encender la cámara para que llegue sabiendo qué se le va a preguntar y por qué. Nadie habla bien cuando está sorprendido. En A0 Studios preparamos al entrevistado con una lista de 4-5 preguntas abiertas que compartimos con antelación, no para que ensaye respuestas, sino para que llegue pensado. La diferencia en el lenguaje corporal es inmediata.",
      },
      {
        type: "heading",
        level: 3,
        text: "El espacio, la cámara y el sonido",
      },
      {
        type: "paragraph",
        text: "Un testimonio grabado en una sala de reuniones con luz de techo y el aire acondicionado de fondo no va a funcionar aunque lo que diga la persona sea brillante. La calidad técnica condiciona la credibilidad. En el ático de A0 Studios trabajamos con cámaras Sony A7 en plano americano o medio, iluminación Aputure suave que no hace que el entrevistado entorne los ojos, y micrófono de solapa Rode para aislar el audio del ambiente de Madrid centro. El resultado tiene el aspecto de un documental corto, no de una grabación de videoconferencia.",
      },
      {
        type: "heading",
        level: 3,
        text: "Las preguntas que funcionan",
      },
      {
        type: "paragraph",
        text: "Las peores preguntas para un testimonio son las que se responden con sí o no. '¿Estás satisfecho con el servicio?' produce exactamente el tipo de respuesta plana que no convence a nadie. Las preguntas que funcionan son abiertas: '¿Cómo era la situación antes de empezar?', '¿Qué fue lo que más te sorprendió?', '¿A quién le recomendarías esto?'. El patrón es siempre situación — cambio — recomendación. Esas tres respuestas, bien grabadas, montan solas.",
      },
      {
        type: "image",
        src: "/blog/grabacion-testimonios-casos-exito-empresa/mid.webp",
        alt: "Setup de cámara para entrevista de vídeo profesional",
        width: 1920,
        height: 1280,
      },
      {
        type: "heading",
        level: 2,
        text: "Errores comunes que arruinan un testimonio en vídeo",
      },
      {
        type: "list",
        items: [
          "Dar el guión completo al entrevistado: el resultado siempre suena a texto leído.",
          "Grabar en la oficina del cliente sin controlar el espacio: fondos caóticos, luz cenital, ruido de ambiente.",
          "Plano fijo a demasiada distancia: pierde conexión emocional. El plano medio funciona mejor.",
          "No dejar silencios: el nerviosismo del entrevistador llena con preguntas los momentos donde el cliente iba a decir algo valioso.",
          "Editar con demasiados elementos corporativos: logos en pantalla, música intrusiva, texto sobre texto. El testimonio vive de la cara y la voz.",
          "No grabar planos de recurso: siempre hacen falta para que el editor monte sin jump cuts visibles.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Cuánto dura una grabación de testimonios?",
        answer: "Una sesión de 3 horas permite grabar cómodamente entre 3 y 5 testimonios. El tiempo por persona es de 20-30 minutos de grabación real, más preparación y transición entre entrevistados. Si el plan incluye edición, la entrega puede estar lista en 24-48 horas con subtítulos y corte vertical para redes.",
      },
      {
        type: "faq",
        question: "¿Necesita el entrevistado alguna preparación especial?",
        answer: "Solo recibir las preguntas con antelación y venir descansado. Recomendamos evitar ropa con rayas finas por el efecto moiré en cámara, y preferir colores sólidos con buen contraste. El resto lo gestionamos nosotros: el entorno, la iluminación, el audio y el flujo de la entrevista.",
      },
      {
        type: "faq",
        question: "¿Qué formatos de entrega se obtienen de una sesión de testimonios?",
        answer: "De una sola sesión se pueden obtener el vídeo largo de 90-120 segundos para web o deck, clips cortos de 15-30 segundos para LinkedIn o Instagram, versión sin subtítulos para incrustar y versión subtitulada para redes sociales. Todo depende de lo que vayas a usar y de si contratas la edición o solo la grabación.",
      },
      {
        type: "faq",
        question: "¿Se pueden grabar testimonios con datos confidenciales?",
        answer: "Sí. El proceso de preparación incluye acordar qué información es pública y qué no antes de grabar. No hay problema en producir un testimonio potente que hable de resultados sin revelar datos específicos que la empresa prefiera no publicar. Los mejores testimonios que hemos visto no incluyen cifras exactas: incluyen contexto real y emoción honesta.",
      },
      {
        type: "paragraph",
        text: "Si necesitas grabar testimonios de clientes o piezas de caso de éxito para tu empresa, escríbenos desde /#contacto. Te contamos qué formato tiene más sentido según dónde vas a usarlo y cuánto tiempo necesitas reservar.",
      },
    ],
  },
  {
    slug: "como-optimizar-sesion-podcast-clips-redes",
    title: "Cómo optimizar una sesión de podcast para sacar clips de redes sociales",
    description:
      "Estructura, timing y técnicas de grabación para convertir una sesión de podcast de 60 minutos en 15 o 20 clips listos para publicar en LinkedIn, Instagram y YouTube.",
    publishedAt: "2026-06-30",
    readingTime: "5 min",
    category: "Guía",
    tags: ["podcast", "clips redes sociales", "contenido", "grabación", "edición", "Madrid"],
    keyword: "como optimizar sesion podcast clips redes",
    intent: "informacional",
    excerpt:
      "Grabar un podcast y luego cortar clips para redes no es magia. Con la estructura correcta desde el principio, una sesión de 2 horas puede darte 20 clips listos para publicar.",
    seoTitle: "Podcast para clips de redes sociales | A0 Studios Madrid",
    metaDescription:
      "Cómo optimizar una sesión de podcast para extraer clips de redes sociales. Estructura, timing y edición para multiplicar tu contenido desde el estudio.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Grabar un podcast y luego cortar clips para redes no es lo mismo que grabar un podcast. Son dos cosas que necesitan pensarse juntas desde el principio, si no quieres pasar 3 horas editando para sacar un clip de 30 segundos que al final no encaja en ningún formato.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios hemos visto cómo los clientes que planifican la sesión con los clips en mente salen con 15 o 20 piezas listas para publicar directamente. Y los que no lo planifican, salen con una grabación de 90 minutos que luego no saben cómo cortar. La diferencia es de estructura, no de suerte.",
      },
      {
        type: "image",
        src: "/blog/como-optimizar-sesion-podcast-clips-redes/hero.webp",
        alt: "Micrófono de condensador en estudio de grabación de podcast",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué la sesión de podcast es la mejor fuente de clips" },
      {
        type: "paragraph",
        text: "Un podcast con vídeo de 60 minutos puede dar para 3 semanas de contenido en redes si sabes qué buscar. Las frases de impacto, los cambios de opinión, los momentos donde el invitado dice algo inesperado: esos 30 segundos son los que detienen el scroll.",
      },
      {
        type: "paragraph",
        text: "El problema es que si grabas sin pensar en eso, las mejores frases quedan enterradas en medio de rodeos o silencios. Y al editor le toca buscar pepitas en un campo muy grande.",
      },
      {
        type: "paragraph",
        text: "Si en cambio estructuras la conversación para que esos momentos aparezcan en puntos predecibles de la grabación, el proceso de cortar clips se acorta de horas a minutos.",
      },
      { type: "heading", level: 2, text: "Cómo estructurar la sesión para sacar clips" },
      { type: "heading", level: 3, text: "Abre con una frase de posicionamiento" },
      {
        type: "paragraph",
        text: "Lo primero que dice el invitado —o tú— debería ser una declaración clara y potente. No 'hola qué tal', sino 'llevo 10 años en marketing de contenidos y la mayoría de lo que se enseña está mal'. Esa frase, con la edición correcta, es un clip. Si no abres así, tendrás que buscarlo en otro sitio.",
      },
      { type: "heading", level: 3, text: "Diseña bloques de 8-10 minutos con cierre propio" },
      {
        type: "paragraph",
        text: "Estructura la conversación en bloques temáticos, no en un único hilo continuo. Cada bloque debería tener su propia mini-conclusión. Así puedes cortar un bloque entero como pieza o extraer su frase final. Con 6 bloques en una sesión de 60 minutos ya tienes 6 clips potenciales de 2-3 minutos, más los momentos fuertes de cada uno.",
      },
      { type: "heading", level: 3, text: "Prepara preguntas diseñadas para respuestas cortas" },
      {
        type: "paragraph",
        text: "Hay preguntas que generan respuestas de 5 minutos y preguntas que generan respuestas de 45 segundos. 'Cuéntame tu historia' es una de 5 minutos. 'Cuál sería tu consejo número uno para alguien que empieza' es una de 45 segundos, perfecta para un clip de LinkedIn. Prepara 4 o 5 de esas preguntas de respuesta corta y distribúyelas a lo largo de la sesión.",
      },
      {
        type: "image",
        src: "/blog/como-optimizar-sesion-podcast-clips-redes/mid.webp",
        alt: "Persona editando clips de redes sociales en smartphone y ordenador",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores que hacen perder tiempo en la edición" },
      {
        type: "list",
        items: [
          "Grabar sin saber para qué plataforma van los clips: vertical y horizontal no es lo mismo y condiciona el encuadre desde el principio.",
          "No marcar los momentos clave durante la grabación. Un pin en el timeline vale 20 minutos de revisión posterior.",
          "Dejar todos los tics de conversación: los 'o sea', 'bueno', 'este' que cortan el ritmo del clip.",
          "Olvidar que el clip tiene que funcionar sin contexto previo. Si no se entiende solo, no funciona en redes.",
          "Grabar sin pistas separadas de audio. Sin canales independientes no puedes limpiar bien el sonido después.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuántos clips puedo sacar de una sesión de podcast de 60 minutos?",
        answer:
          "Depende de la estructura, pero con planificación correcta entre 10 y 20 clips de formatos variados: cortes de 30 segundos para Instagram y TikTok, de 2-3 minutos para LinkedIn y YouTube Shorts, y alguno de 5 minutos para el canal principal de YouTube.",
      },
      {
        type: "faq",
        question: "¿Hace falta grabar en vertical para los clips de redes?",
        answer:
          "No necesariamente. En A0 Studios grabamos en horizontal con cámaras bien encuadradas y reencuadramos en edición para vertical. Si el encuadre original deja espacio arriba y abajo, el reencuadre queda bien sin perder información importante.",
      },
      {
        type: "faq",
        question: "¿En qué momento del podcast suelen estar los mejores clips?",
        answer:
          "En los primeros 10 minutos y en los últimos 15. El principio porque el invitado suele ir al grano antes de relajarse. El final porque es cuando salen las conclusiones más directas y las frases de impacto más densas.",
      },
      {
        type: "faq",
        question: "¿Qué herramientas se usan para cortar clips de podcast?",
        answer:
          "Para la edición del clip en sí, DaVinci Resolve o Premiere. Para subtítulos automáticos, CapCut o Opus Clip. Para organizar y previsualizar antes de publicar, Frame.io o una carpeta bien estructurada por plataforma y formato.",
      },
      {
        type: "paragraph",
        text: "Si tienes pensado grabar un podcast y quieres salir con clips listos para varias semanas, cuéntanos el proyecto desde /#contacto. Te damos una sesión planificada desde el principio para que el montaje sea mínimo y el material máximo.",
      },
    ],
  },
  {
    slug: "audio-profesional-video-microfono-segun-formato",
    title: "Audio profesional para vídeo: qué micrófono usar según el formato",
    description:
      "Guía práctica para elegir el micrófono correcto según el tipo de vídeo que grabas: podcast, reels, entrevistas, cursos o piezas de marca.",
    publishedAt: "2026-07-01",
    readingTime: "5 min",
    category: "Guía",
    tags: ["audio", "micrófonos", "grabación vídeo", "podcast", "producción", "madrid"],
    keyword: "audio profesional para video que microfono usar",
    intent: "informacional",
    excerpt:
      "El micrófono no es un accesorio secundario en vídeo. Es la primera decisión de producción. Guía para elegir bien según el formato que grabas.",
    seoTitle: "Qué micrófono usar para vídeo según el formato | A0 Studios Madrid",
    metaDescription:
      "Audio profesional para vídeo: cómo elegir entre dinámico, condensador, lavalier o shotgun según si grabas podcast, reels, cursos o entrevistas.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "El error más habitual en producción de vídeo para contenido de marca no está en la cámara. Está en el audio. Puedes grabar con una Sony A7 IV, iluminación Aputure y un set bien montado y el resultado seguirá pareciendo aficionado si el micrófono no encaja con el formato. La razón es directa: el oído humano tolera peor la mala calidad de sonido que la imperfección visual. El espectador aguanta un plano algo subexpuesto o un encuadre no perfecto. Pero desconecta rápido si el audio tiene ruido de fondo, eco o saturación.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios lo vemos constantemente en las primeras consultas. Founders y equipos de marketing que llegan con setups de cámara bien resueltos pero sin una estrategia clara de audio. El problema no es que no tengan micrófonos — muchas veces tienen varios. El problema es que no saben cuál usar para cada formato. Lo que funciona en un podcast de mesa larga no funciona en un reel vertical grabado de pie. Lo que encaja en una entrevista en movimiento no tiene sentido en una narración a cámara sentado. Elegir bien el micrófono no es un detalle técnico — es una decisión de producción que afecta directamente a la calidad percibida del contenido.",
      },
      {
        type: "image",
        src: "/blog/audio-profesional-video-microfono-segun-formato/hero.webp",
        alt: "Micrófono condensador en estudio de grabación profesional",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué el audio importa más de lo que parece en vídeo" },
      {
        type: "paragraph",
        text: "Existe un principio bien documentado en producción audiovisual: la percepción de calidad de un vídeo depende más del audio que de la imagen. Si el sonido es malo, el vídeo parece malo aunque la cámara sea cara. Si el audio es limpio y sólido, el vídeo parece profesional aunque la cámara sea modesta. No es opinión — es cómo procesa el cerebro la información audiovisual.",
      },
      {
        type: "paragraph",
        text: "En la práctica, hay tres problemas recurrentes que arruinan el audio de vídeo: ruido de fondo que delata el espacio donde se grabó, distorsión por nivel de entrada demasiado alto, y reverb o eco que rompe la sensación de control y profesionalidad. Los tres tienen solución técnica, pero la primera línea de defensa siempre es elegir el micrófono adecuado al formato y al espacio de grabación.",
      },
      { type: "heading", level: 2, text: "Tipos de micrófono y cuándo usar cada uno" },
      { type: "heading", level: 3, text: "Dinámico — podcast e intervistas largas" },
      {
        type: "paragraph",
        text: "El micrófono dinámico — Shure SM7B, Rode PodMic — es el estándar para podcast y entrevistas largas en interior. Rechaza bien el ruido ambiental, no necesita un tratamiento acústico perfecto y aguanta bien las variaciones de nivel de voz entre personas distintas. En A0 Studios lo usamos para sesiones con 2 o más personas a mesa, formatos de más de 20 minutos y espacios que no son completamente silenciosos. Su punto débil: necesita buena preamp. Sin un previo decente, el dinámico no da su mejor versión y el ruido de fondo relativo sube.",
      },
      { type: "heading", level: 3, text: "Condensador — narraciones y presentaciones a cámara" },
      {
        type: "paragraph",
        text: "El micrófono condensador — Rode NT1, AKG C214 — capta con más detalle y amplitud que el dinámico. Ideal para narraciones en off, cursos online grabados a cámara fija o piezas donde quieres presencia y cuerpo de voz sin coloración agresiva. El problema es que necesita tratamiento acústico: en un espacio con paredes duras y sin absorción, el condensador amplifica el problema en lugar de la voz. En A0 Studios el ático tiene absorción suficiente para que el condensador suene bien sin preparación adicional del espacio.",
      },
      { type: "heading", level: 3, text: "Lavalier inalámbrico — movimiento y entrevistas con varios oradores" },
      {
        type: "paragraph",
        text: "El lavalier inalámbrico — Rode Wireless GO II, DJI Mic — es la solución cuando el presentador se mueve, hay varias personas hablando en distintos puntos del espacio, o se graba fuera del estudio. Pierde algo de calidad tonal respecto a un dinámico de mesa — el tamaño de la cápsula limita — pero gana en flexibilidad total. Para reels con movimiento, entrevistas en exterior o piezas donde la cámara varía de posición, el lavalier es la respuesta correcta. Con dos unidades, puedes grabar simultáneamente entrevistador y entrevistado con pistas separadas.",
      },
      { type: "heading", level: 3, text: "Shotgun — reels, vídeo de marca y contenido ágil" },
      {
        type: "paragraph",
        text: "El micrófono de cañón — Rode VideoMic NTG, Sennheiser MKE 600 — es direccional: capta lo que tiene delante y rechaza los laterales y el fondo. Montado en la cámara o en boom, es el micrófono de producción de vídeo por excelencia para reels de marca, entrevistas sin cables a la vista y contenido donde la agilidad importa más que el máximo detalle. Con una Sony A7 y un encuadre bien ajustado, grabando en un espacio controlado, el resultado es más que suficiente para contenido profesional en redes.",
      },
      {
        type: "image",
        src: "/blog/audio-profesional-video-microfono-segun-formato/mid.webp",
        alt: "Micrófono sobre mesa en estudio de grabación para podcast y vídeo",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes al elegir micrófono para vídeo" },
      {
        type: "list",
        items: [
          "Usar el micrófono interno de la cámara — capta reverb, ventilación y ruido del set en igual medida que la voz.",
          "Aplicar un condensador en un espacio sin absorción — amplifica el eco y el ambiente en lugar de aislar la voz.",
          "No monitorizar el nivel de entrada — grabar saturado o demasiado bajo produce problemas que la postproducción no corrige del todo.",
          "Ignorar el patrón polar del micrófono según el formato — un cardioide mal orientado suma pérdida de graves y presencia.",
          "Mezclar tipos de micrófono sin compensar niveles — si grabas con lavalier y dinámico a la vez, la mezcla final queda desigual si no ajustas la ganancia por separado.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Puedo grabar un podcast con un micrófono de solapa?",
        answer:
          "Sí, pero con matices. El lavalier te da flexibilidad, pero el dinámico te da mejor presencia y rechazo de ambiente para formato largo. Si grabas sentado a mesa con condiciones controladas, el dinámico siempre gana al lavalier en calidad de voz percibida.",
      },
      {
        type: "faq",
        question: "¿Qué micrófono uso para grabar reels verticales en estudio?",
        answer:
          "En A0 Studios usamos habitualmente un shotgun en boom para mantener el encuadre limpio sin cables visibles. Si el presentador habla directo a cámara sin moverse, el shotgun bien posicionado da un resultado limpio y no requiere postproducción de audio intensiva.",
      },
      {
        type: "faq",
        question: "¿El audio del iPhone vale para contenido profesional?",
        answer:
          "Para clips muy cortos en redes puede funcionar, especialmente con un lavalier de calidad conectado. Para podcast, cursos o piezas de marca, no — el ruido de fondo y la compresión del códec limitan mucho la sensación de profesionalidad que busca el formato.",
      },
      {
        type: "faq",
        question: "¿Cuánto mejora el audio al grabar en un estudio frente a en casa?",
        answer:
          "Mucho, y no solo por el equipo — por el espacio. Un ático con absorción correcta elimina el eco que arruina el audio doméstico. En A0 Studios, con un dinámico o condensador bien ganado, el audio sale listo para mezcla sin tratamiento pesado en postproducción.",
      },
      {
        type: "paragraph",
        text: "Si tienes un proyecto de vídeo y no tienes claro qué solución de audio encaja con tu formato, cuéntanos lo que necesitas desde /#contacto. Te decimos qué micrófono usaríamos, cómo lo grabaríamos y qué esperar del resultado final.",
      },
    ],
  },
  {
    slug: "content-day-como-sacarle-el-maximo-partido",
    title: "Qué es un content day y cómo sacarle el máximo partido",
    description:
      "Qué es un content day, cómo planificarlo bien y qué errores evitar para grabar semanas de contenido en una sola sesión.",
    publishedAt: "2026-07-02",
    readingTime: "5 min",
    category: "Guía",
    tags: ["content day", "producción de contenido", "planificación", "grabación madrid", "marca personal"],
    keyword: "content day",
    intent: "informacional",
    excerpt:
      "Concentrar la producción de contenido en una sola jornada cambia la constancia y la calidad. Guía para montar un content day que funcione de verdad.",
    seoTitle: "Qué es un content day y cómo aprovecharlo | A0 Studios Madrid",
    metaDescription:
      "Qué es un content day, cómo planificarlo y qué errores evitar para grabar semanas de contenido en una sola sesión en Madrid.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Un content day es una jornada en la que grabas todo el contenido que vas a publicar durante varias semanas en una sola sesión. En vez de grabar un reel el lunes, otro el jueves y un vídeo largo cuando encuentras hueco, concentras la producción en una mañana o un día completo y sales con el material cerrado para un mes o más.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios lo montamos constantemente con founders, marcas personales y equipos de marketing que quieren mantener presencia constante en redes sin depender de grabar cada semana. La lógica es simple: cuesta más arrancar una grabación que grabar diez piezas seguidas una vez que el set, la luz y el estado mental están listos.",
      },
      {
        type: "image",
        src: "/blog/content-day-como-sacarle-el-maximo-partido/hero.webp",
        alt: "Persona grabando con cámara de vídeo en sesión de contenido",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es un content day y por qué cambia la forma de producir contenido" },
      {
        type: "paragraph",
        text: "Un content day no es simplemente grabar mucho de golpe. Es planificar con antelación qué piezas necesitas, en qué orden las grabas y qué recursos usas para cada una, de forma que la sesión avance sin pausas largas entre pieza y pieza. La diferencia entre un content day que funciona y uno que se alarga sin sentido está casi siempre en la preparación previa, no en el día de grabación en sí.",
      },
      {
        type: "paragraph",
        text: "El beneficio principal es la constancia. Si dependes de grabar cada vez que publicas, la frecuencia de tu contenido depende de tu agenda semanal, y eso casi siempre significa publicar menos de lo que planeaste. Con un content day mensual o quincenal, el banco de contenido queda cerrado y solo falta programar publicación y algo de edición puntual.",
      },
      {
        type: "paragraph",
        text: "Hay un efecto añadido que no siempre se tiene en cuenta: la calidad sube. Cuando grabas una pieza aislada, sueles hacerlo con prisa, entre otras tareas. Cuando dedicas una jornada entera a producción, llegas con el guion pensado, la ropa elegida y la cabeza puesta en grabar, no en apagar fuegos de otra parte del negocio.",
      },
      { type: "heading", level: 2, text: "Cómo montar un content day que funcione" },
      { type: "heading", level: 3, text: "Definir los formatos antes de llegar al estudio" },
      {
        type: "paragraph",
        text: "Antes de la sesión conviene tener claro cuántas piezas vas a grabar y de qué tipo: reels cortos, vídeo largo, clips para LinkedIn, contenido de autoridad a cámara. En A0 Studios pedimos esta lista antes de la fecha, porque cambia el vestuario, el encuadre y hasta el orden de grabación. Grabar sin esta lista suele acabar en piezas repetidas y huecos sin cubrir.",
      },
      { type: "heading", level: 3, text: "Guionizar sin sobre-escribir" },
      {
        type: "paragraph",
        text: "Un guion cerrado palabra por palabra suena artificial en cámara. Lo que funciona mejor es un esquema con la idea principal, dos o tres puntos que quieres tocar y el cierre. Con teleprompter puedes apoyarte en algo más estructurado, pero incluso ahí conviene dejar margen para que la frase suene hablada y no leída.",
      },
      { type: "heading", level: 3, text: "Organizar el orden de grabación por vestuario y energía" },
      {
        type: "paragraph",
        text: "Agrupa las piezas que comparten vestuario o encuadre para no cambiar de set cada cinco minutos. Y ordena por energía: empieza por los formatos que requieren más presencia o intensidad, cuando llegas fresco, y deja para el final los formatos más tranquilos, como narración en off o piezas explicativas, cuando ya llevas unas horas de sesión.",
      },
      {
        type: "image",
        src: "/blog/content-day-como-sacarle-el-maximo-partido/mid.webp",
        alt: "Equipo de cámara y producción preparado para sesión de grabación",
        width: 1920,
        height: 1080,
      },
      { type: "heading", level: 2, text: "Errores comunes en un content day" },
      {
        type: "list",
        items: [
          "Llegar sin lista cerrada de piezas — se traduce en tiempo perdido decidiendo qué grabar en el momento.",
          "Grabar todo con el mismo plano y la misma luz — el contenido acaba pareciendo repetitivo aunque el mensaje cambie.",
          "No dejar margen para repetir tomas — una sesión sin colchón de tiempo obliga a quedarte con la primera toma aunque no sea la mejor.",
          "Meter demasiados formatos distintos en una sola jornada — más de 15-20 piezas en un día suele bajar la calidad de las últimas.",
          "No planificar la edición después — salir con horas de material sin flujo de edición definido retrasa la publicación semanas.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto contenido se puede grabar en un content day?",
        answer:
          "Depende del formato, pero en una sesión de 3-4 horas es realista salir con 10-15 piezas cortas, o una combinación de piezas cortas y 2-3 vídeos largos.",
      },
      {
        type: "faq",
        question: "¿Necesito guion cerrado para un content day?",
        answer:
          "No hace falta palabra por palabra. Basta un esquema con la idea principal y los puntos que quieres tocar por pieza. Un guion demasiado cerrado suele sonar leído en cámara.",
      },
      {
        type: "faq",
        question: "¿Cada cuánto debería hacer un content day?",
        answer:
          "La cadencia más habitual entre nuestros clientes es mensual o quincenal, según cuánto contenido publiquen a la semana. Un content day mensual bien planificado cubre entre 4 y 8 semanas de publicación.",
      },
      {
        type: "faq",
        question: "¿Puedo grabar varios formatos distintos el mismo día?",
        answer:
          "Sí, es precisamente la idea. Reels, vídeo largo, clips para LinkedIn y contenido de autoridad pueden convivir en la misma jornada si agrupas por vestuario y dejas los formatos más exigentes para el inicio de la sesión.",
      },
      {
        type: "paragraph",
        text: "Si quieres montar un content day y no sabes por dónde empezar a planificarlo, cuéntanos qué formatos necesitas desde /#contacto. Te ayudamos a diseñar la sesión para que salgas con semanas de contenido cerradas en una sola mañana.",
      },
    ],
  },
  {
    slug: "video-corporativo-web-grabacion-estudio",
    title: "Vídeo corporativo para la web: qué grabar y cómo planificar la sesión",
    description:
      "Qué grabar para la web de tu empresa, cómo planificar la sesión por bloques y qué necesita cada página para reforzar confianza y conversión.",
    publishedAt: "2026-07-03",
    readingTime: "4 min",
    category: "Guía",
    tags: ["vídeo corporativo", "vídeo para web", "producción audiovisual", "contenido empresa", "Madrid"],
    keyword: "video corporativo para la web",
    intent: "informacional",
    excerpt:
      "Grabar vídeo para la web de tu empresa no es lo mismo que grabar para redes. Guía para planificar la sesión por bloques y qué necesita cada página.",
    seoTitle: "Vídeo corporativo para la web | A0 Studios Madrid",
    metaDescription:
      "Vídeo corporativo para la web: qué grabar, cómo planificar la sesión por bloques y qué necesita cada página para convertir mejor.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Cuando una empresa decide grabar vídeo para su web, la primera pregunta casi nunca es técnica. Es de contenido: qué se graba, en qué orden y para qué sirve cada pieza dentro de la página. Sin esa claridad previa, la sesión se alarga, el resultado queda descolgado de la web real y al final se usan dos minutos de material de tres horas de grabación.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios grabamos vídeo corporativo para webs de empresas, agencias y equipos de marketing que necesitan algo más sólido que un móvil en la oficina, pero sin caer en el vídeo institucional de plató que nadie termina de ver entero. La clave está en tratar la sesión como un guion de página, no como una grabación suelta.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-web-grabacion-estudio/hero.webp",
        alt: "Cámara profesional grabando una entrevista corporativa en oficina con luz natural",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es el vídeo corporativo para web y por qué no es lo mismo que un vídeo para redes" },
      {
        type: "paragraph",
        text: "El vídeo corporativo para web tiene un trabajo distinto al de un reel o un vídeo para redes sociales. No compite por atención en un feed que se desliza en segundo y medio: convive con texto, con navegación y con una decisión de compra o contacto que el visitante ya está considerando tomar. Eso cambia el ritmo, la duración y hasta el tono.",
      },
      {
        type: "paragraph",
        text: "En redes el objetivo suele ser parar el scroll. En una web, el objetivo es reforzar confianza y resolver dudas que el texto no cubre del todo: cómo es el equipo, cómo funciona el servicio, qué se siente al trabajar con la empresa. Por eso un vídeo de home no necesita el mismo gancho de los tres primeros segundos que un reel, pero sí necesita ser corto, claro y fácil de encajar en la maqueta de la página.",
      },
      {
        type: "paragraph",
        text: "Grabar bien este tipo de vídeo también es una cuestión de credibilidad. Cuando un vídeo institucional se nota grabado con prisa, transmite justo lo contrario de lo que busca: en vez de reforzar confianza, la debilita. Por eso conviene tratarlo como cualquier otra pieza de producción, con planificación previa, aunque la sesión en sí sea corta y el resultado final dure menos de un minuto.",
      },
      {
        type: "paragraph",
        text: "Esto también afecta al formato técnico. Un vídeo para web suele ir en horizontal, pensado para reproducirse sin sonido por defecto, con subtítulos incrustados o disponibles, y preparado para verse bajo demanda, no en autoplay agresivo con audio.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Definir qué páginas necesitan vídeo antes de grabar" },
      {
        type: "paragraph",
        text: "Antes de reservar sesión, conviene mapear la web y decidir qué páginas necesitan vídeo de verdad: home, servicios, equipo, casos de éxito. No todas lo necesitan. Meter vídeo en una página que no lo pide solo añade peso de carga sin aportar conversión. En A0 Studios pedimos este mapeo antes de la fecha de grabación, porque cambia directamente el guion y el número de piezas que hay que grabar.",
      },
      { type: "heading", level: 3, text: "Grabar por bloques, no por página" },
      {
        type: "paragraph",
        text: "En vez de grabar el vídeo de la home y luego el de servicios como piezas cerradas y separadas, es más eficiente grabar por bloques de contenido: presentación del equipo, explicación del servicio, testimonios breves, imágenes de apoyo del espacio o del proceso de trabajo. Después, en edición, esos bloques se recombinan según la página. Así una misma sesión rinde para varias piezas de la web sin repetir grabación ni volver a citar al equipo.",
      },
      { type: "heading", level: 3, text: "Pensar en duración desde el guion, no en edición" },
      {
        type: "paragraph",
        text: "Un vídeo de home no debería pasar de 45-60 segundos. Uno de página de servicio puede estirarse hasta 90 segundos si de verdad resuelve dudas concretas. Si el guion se escribe pensando en esa duración desde el principio, la edición es mucho más simple. Si se graba sin límite y se recorta después, el resultado casi siempre se nota forzado y con cortes raros.",
      },
      {
        type: "image",
        src: "/blog/video-corporativo-web-grabacion-estudio/mid.webp",
        alt: "Persona grabándose a cámara con trípode para vídeo de contenido",
        width: 1920,
        height: 1080,
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "list",
        items: [
          "Grabar el vídeo antes de tener claro dónde va a vivir en la web — cambia duración, formato y tono, y suele obligar a regrabar.",
          "Usar el mismo vídeo institucional en todas las páginas — reduce el impacto porque no responde a la duda concreta de cada sección.",
          "Grabar en vertical pensando en adaptarlo después a la web — el recorte casi siempre deja una composición pobre; graba en el formato final desde el principio.",
          "No incluir subtítulos incrustados — la mayoría de las visitas reproducen el vídeo sin sonido al inicio.",
          "Olvidar el peso del archivo — un vídeo mal comprimido en la home puede lastrar la velocidad de carga y perjudicar el SEO de toda la página.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto dura un buen vídeo de home?",
        answer: "Entre 30 y 60 segundos. Suficiente para transmitir tono y equipo sin retrasar la decisión de seguir navegando.",
      },
      {
        type: "faq",
        question: "¿Necesito grabar un vídeo distinto para cada página de la web?",
        answer:
          "No necesariamente. Con una sesión bien planificada por bloques, puedes recombinar el mismo material en distintas piezas cortas para home, servicios y equipo.",
      },
      {
        type: "faq",
        question: "¿El vídeo corporativo necesita el mismo tono que el contenido de redes?",
        answer:
          "No. Puede ser algo más calmado y explicativo, porque el visitante ya está en la web decidiendo, no haciendo scroll para entretenerse.",
      },
      {
        type: "faq",
        question: "¿Hace falta un guion cerrado para grabar vídeo corporativo?",
        answer:
          "Conviene tener un guion claro por bloque, aunque no haga falta memorizarlo palabra por palabra frente a cámara. Con teleprompter es más fácil mantenerlo natural.",
      },
      {
        type: "paragraph",
        text: "Si vas a rediseñar tu web o simplemente te falta vídeo real en las páginas clave, cuéntanos qué páginas quieres cubrir desde /#contacto. Planificamos la sesión por bloques para que una sola grabación rinda para toda la web, no solo para la home.",
      },
    ],
  },
  {
    slug: "grabacion-spots-publicitarios-estudio",
    title: "Grabación de spots publicitarios en estudio: qué necesitas saber",
    description:
      "Cómo planificar la grabación de un spot publicitario en estudio: guion cerrado, tomas sueltas y variantes de campaña sin tener que regrabar nada.",
    publishedAt: "2026-07-06",
    readingTime: "4 min",
    category: "Guía",
    tags: ["spots publicitarios", "vídeo publicitario", "producción audiovisual", "estudio de grabación", "Madrid"],
    keyword: "grabacion de spots publicitarios",
    intent: "informacional",
    excerpt:
      "Un spot publicitario en estudio no se improvisa. Guía para planificar guion, tomas y variantes de campaña antes de pisar el plató.",
    seoTitle: "Grabación de Spots Publicitarios | A0 Studios Madrid",
    metaDescription:
      "Grabación de spots publicitarios en estudio: cómo planificar guion, tomas y variantes de campaña sin tener que regrabar nada.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Cuando una marca decide grabar un spot publicitario, la primera duda casi nunca es de presupuesto. Es de formato: ¿esto se graba en estudio, en localización o mezclando ambos? Un estudio de grabación como A0 Studios resuelve buena parte de esa pregunta antes de que se convierta en un problema el día del rodaje: control total de luz, de sonido y de fondo, sin depender del clima ni del ruido de una calle de Madrid.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios grabamos spots para marcas, agencias y empresas que necesitan algo con acabado publicitario real, no un vídeo de producto grabado con el móvil de la oficina. La diferencia no está solo en la cámara. Está en cómo se planifica la sesión antes de encender nada.",
      },
      {
        type: "image",
        src: "/blog/grabacion-spots-publicitarios-estudio/hero.webp",
        alt: "Cámara de cine profesional preparada en plató para grabar un spot publicitario",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es un spot publicitario en estudio y por qué es distinto a un vídeo de contenido" },
      {
        type: "paragraph",
        text: "Un spot publicitario en estudio se distingue de un vídeo de contenido normal en tres cosas: guion cerrado, control total del entorno y un objetivo de conversión claro desde el primer segundo. No se graba para generar conversación en comentarios. Se graba para vender, para posicionar marca o para acompañar una campaña de medios con fecha de salida fija.",
      },
      {
        type: "paragraph",
        text: "Eso cambia la forma de trabajar. Un spot no admite tanta improvisación como un reel de marca personal. Cada plano suele estar decidido antes de entrar al estudio, porque el margen de edición se calcula en segundos, no en minutos, y cada segundo de más en el corte final cuesta dinero en la compra de medios.",
      },
      {
        type: "paragraph",
        text: "También cambia el nivel de exigencia técnica. Un spot que va a emitirse en televisión, en pantallas digitales o en campañas de pago necesita una calidad de imagen y sonido que no perdona atajos: iluminación consistente, audio limpio sin ruido de fondo y una composición pensada para verse bien tanto en horizontal como recortada a vertical si la campaña lo pide.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Cerrar el guion y el storyboard antes de reservar estudio" },
      {
        type: "paragraph",
        text: "Antes de fijar fecha, conviene tener el guion cerrado plano a plano, no solo la idea general. En A0 Studios pedimos el storyboard o al menos un guion técnico antes de la sesión, porque de ahí sale todo lo demás: cuántas horas de estudio hacen falta, qué atrezo hay que traer y si se necesita más de una cámara para cubrir ángulos distintos sin repetir tomas.",
      },
      { type: "heading", level: 3, text: "Planificar el rodaje por tomas, no por escenas" },
      {
        type: "paragraph",
        text: "Un spot de 20-30 segundos puede necesitar 15-20 tomas distintas para tener margen de montaje: planos generales, primeros planos de producto, detalles de manos o de packaging, reacciones de talento. Rodar pensando en tomas sueltas, y no en escenas completas de principio a fin, da mucha más flexibilidad en edición y evita tener que volver a citar al equipo o al talento por un plano que falta.",
      },
      { type: "heading", level: 3, text: "Dejar tiempo para variantes de campaña" },
      {
        type: "paragraph",
        text: "La mayoría de campañas necesitan más de una versión: un corte de 30 segundos para TV o YouTube, uno de 15 para redes y uno de 6 para bumper ads. Si esto se decide antes de grabar, se puede planificar la sesión para cubrir todos los cortes con el mismo material. Si se decide después, casi siempre hay que volver a grabar planos que faltan.",
      },
      {
        type: "image",
        src: "/blog/grabacion-spots-publicitarios-estudio/mid.webp",
        alt: "Set de estudio con cámara e iluminación montada para rodaje publicitario",
        width: 1920,
        height: 1080,
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "list",
        items: [
          "Llegar al estudio sin guion cerrado y decidir los planos sobre la marcha — encarece la sesión y deja huecos en el montaje.",
          "No prever las variantes de duración de la campaña antes de rodar — obliga a regrabar planos que no se cubrieron.",
          "Subestimar el tiempo de audio — un spot con música y locución necesita mezcla y masterización, no solo corte de vídeo.",
          "Grabar en localización cuando el control de luz y sonido del estudio habría dado un resultado más limpio y repetible.",
          "No pedir al estudio una prueba de cámara y luz antes del día de rodaje si el producto tiene acabados difíciles (brillos, cristal, metal).",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto dura una sesión de grabación de un spot publicitario?",
        answer:
          "Depende del número de tomas, pero un spot de 20-30 segundos con varios planos suele necesitar entre 3 y 5 horas de estudio, sin contar la edición posterior.",
      },
      {
        type: "faq",
        question: "¿Se puede grabar un spot para varias plataformas en la misma sesión?",
        answer:
          "Sí, si se planifica antes. Grabando por tomas sueltas con margen de encuadre, se pueden montar después versiones para TV, redes y vertical desde el mismo material.",
      },
      {
        type: "faq",
        question: "¿Hace falta actor o puede grabarlo el propio equipo de la empresa?",
        answer:
          "Ambas opciones funcionan. Lo importante es que quien esté frente a cámara tenga el guion claro y, si no tiene experiencia, un teleprompter para no perder naturalidad.",
      },
      {
        type: "faq",
        question: "¿Qué diferencia hay entre un spot y un vídeo de contenido para redes?",
        answer:
          "El spot se diseña para un objetivo de conversión concreto dentro de una campaña con fecha de salida, mientras que el contenido de redes suele responder a una estrategia más continua y menos cerrada en el tiempo.",
      },
      {
        type: "paragraph",
        text: "Si tienes una campaña en marcha y necesitas grabar el spot en un espacio con control total de luz y sonido, cuéntanos el guion y las variantes que necesitas desde /#contacto. Planificamos la sesión para que el material cubra todos los cortes de la campaña sin tener que volver a grabar.",
      },
    ],
  },
  {
    slug: "fondos-decorados-grabacion-contenido",
    title: "Fondos y decorados para grabar contenido: cómo elegir el que necesita tu marca",
    description:
      "Qué fondo usar para grabar contenido de marca: cuándo un decorado neutro funciona mejor que un entorno real, y cómo evitar que el fondo compita con el mensaje.",
    publishedAt: "2026-07-07",
    readingTime: "4 min",
    category: "Guía",
    tags: ["fondos de grabación", "decorados", "estudio de grabación", "contenido de marca", "Madrid"],
    keyword: "fondos y decorados para grabar contenido",
    intent: "informacional",
    excerpt:
      "El fondo es lo que el espectador tiene delante todo el vídeo. Guía para elegir entre un decorado neutro y un entorno real según lo que quiere transmitir tu marca.",
    seoTitle: "Fondos y Decorados para Grabar Contenido | A0 Studios Madrid",
    metaDescription:
      "Fondos y decorados para grabar contenido: cuándo usar un fondo neutro, cuándo un entorno real, y cómo evitar que el decorado compita con tu mensaje.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Cuando alguien piensa en preparar una grabación, casi siempre piensa primero en la cámara, el micrófono o la luz. El fondo se suele decidir el mismo día, casi de pasada. Es un error, porque el decorado es lo que el espectador tiene delante durante todo el vídeo, no un detalle que se resuelve solo.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios grabamos cada semana marcas personales, empresas y equipos de marketing que llegan con guion cerrado, buena luz prevista y cero decisión tomada sobre qué va a aparecer detrás. Y el fondo cambia más de lo que parece: puede reforzar el mensaje o competir con él.",
      },
      {
        type: "image",
        src: "/blog/fondos-decorados-grabacion-contenido/hero.webp",
        alt: "Set de estudio de grabación con fondo y decorado preparado antes de una sesión",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es un fondo o decorado y por qué no es un detalle menor" },
      {
        type: "paragraph",
        text: "Un fondo de grabación es cualquier cosa que quede visible detrás de la persona o el producto que estás grabando. Puede ser un ciclorama liso, una pared de ladrillo, una estantería con libros o, como en nuestro ático, un salón real con terraza y skyline de Madrid al fondo.",
      },
      {
        type: "paragraph",
        text: "La diferencia entre un fondo que funciona y uno que no rara vez es de presupuesto. Es de coherencia. Un fondo demasiado cargado roba atención al mensaje. Uno demasiado plano hace que el vídeo parezca un anuncio genérico, sin identidad. El objetivo siempre es el mismo: que el fondo apoye lo que se dice, sin pelear por protagonismo.",
      },
      {
        type: "paragraph",
        text: "También influye en cómo se percibe la marca antes de que se diga una sola palabra. Un fondo de oficina con luces fluorescentes comunica algo distinto a un fondo de estudio cuidado, y ese algo distinto llega en los primeros dos segundos de vídeo, antes de que el espectador procese el contenido.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Fondo neutro vs entorno real" },
      {
        type: "paragraph",
        text: "Un fondo neutro, tipo ciclorama gris o papel continuo, funciona bien cuando el contenido tiene que verse igual en todas las piezas de una campaña: anuncios, packshots de producto o contenido corporativo muy formal. Da control total sobre la luz y permite recortar o cambiar el fondo en edición sin dejar rastro.",
      },
      {
        type: "paragraph",
        text: "Un entorno real, como un salón, una terraza o una oficina con vida, funciona mejor cuando el objetivo es cercanía: marca personal, entrevistas, contenido de autoridad o piezas donde quieres que el espectador sienta que está en un sitio de verdad, no en un plató. En A0 Studios usamos el ático precisamente por eso: mantiene la parte técnica de un estudio, pero el fondo no huele a fondo.",
      },
      { type: "heading", level: 3, text: "Elegir el fondo según el mensaje de la marca" },
      {
        type: "paragraph",
        text: "Antes de decidir el decorado conviene tener claro qué se quiere transmitir. Una marca que vende cercanía y trato humano no debería grabar sobre un ciclorama blanco frío. Una marca que vende precisión técnica o un producto muy serio puede necesitar justo lo contrario: un fondo simple que no distraiga.",
      },
      {
        type: "paragraph",
        text: "Lo mismo pasa con el color. Un fondo con los colores de marca ayuda al reconocimiento visual en redes, pero si se satura demasiado, compite con la persona que habla. La regla que seguimos en A0 Studios es simple: el fondo puede sugerir la marca, nunca debe gritarla.",
      },
      { type: "heading", level: 3, text: "Cuidar la profundidad y los elementos que entran en cuadro" },
      {
        type: "paragraph",
        text: "Un fondo plano, sin ningún elemento a distintas distancias de la cámara, aplana la imagen y la hace ver más barata aunque la cámara sea buena. Añadir uno o dos elementos a distinta profundidad, una planta, una estantería, una lámpara, da sensación de espacio real y hace que la imagen respire.",
      },
      {
        type: "image",
        src: "/blog/fondos-decorados-grabacion-contenido/mid.webp",
        alt: "Salón decorado con estanterías y plantas usado como fondo real de grabación",
        width: 1920,
        height: 1125,
      },
      {
        type: "paragraph",
        text: "También hay que revisar qué entra en cuadro que no debería: cables sueltos, un extintor, una papelera, un cartel mal alineado. Son detalles pequeños que en persona no se notan, pero que en vídeo, sobre todo en primeros planos, se convierten en lo único que ve el espectador.",
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "list",
        items: [
          "Elegir el fondo el mismo día de la grabación, sin haberlo visto antes en cámara con la luz real.",
          "Usar un fondo con demasiados elementos que compiten visualmente con la persona que habla.",
          "Grabar con un fondo corporativo genérico cuando el mensaje pide cercanía, o al revés.",
          "No revisar el encuadre completo antes de grabar y dejar objetos sueltos o mal colocados dentro de plano.",
          "Cambiar de fondo entre piezas de una misma campaña sin necesidad, lo que rompe la coherencia visual de la marca.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Necesito llevar mi propio decorado a la sesión?",
        answer:
          "No. El ático ya funciona como fondo real con salón, terraza y skyline de Madrid. Si tu marca necesita algo más específico, lo hablamos antes de la sesión.",
      },
      {
        type: "faq",
        question: "¿El ático sirve como fondo neutro para packshots de producto?",
        answer:
          "Podemos montar una zona con fondo liso dentro del espacio para packshots o piezas muy formales, aunque el punto fuerte del ático es el entorno real para contenido de marca y entrevistas.",
      },
      {
        type: "faq",
        question: "¿Puedo cambiar de fondo varias veces en la misma sesión?",
        answer:
          "Sí, moviéndonos entre distintas zonas del ático: salón, terraza o rincones con luz distinta. Conviene decidirlo antes para organizar bien el tiempo de sesión.",
      },
      {
        type: "faq",
        question: "¿Qué pasa si los colores de mi marca son muy fuertes y chocan con el fondo?",
        answer:
          "Se ajusta con vestuario, atrezo puntual o encuadre, sin tener que repintar ni forzar el espacio. Normalmente basta con introducir el color de forma controlada, no en todo el fondo.",
      },
      {
        type: "paragraph",
        text: "Si tienes dudas sobre qué fondo pedir para tu próxima sesión, cuéntanos qué quieres transmitir desde /#contacto. Te decimos qué zona del ático encaja mejor antes de que reserves fecha.",
      },
    ],
  },
  {
    slug: "camara-grabar-contenido-marca",
    title: "Cámara para grabar contenido de marca: qué mirar más allá de la resolución",
    description:
      "Qué cámara usar para grabar contenido de marca: por qué la resolución no es lo primero que hay que mirar y qué factores marcan más diferencia en el resultado final.",
    publishedAt: "2026-07-08",
    readingTime: "4 min",
    category: "Guía",
    tags: ["cámara de grabación", "contenido de marca", "estudio de grabación", "Madrid", "producción de vídeo"],
    keyword: "camara para grabar contenido de marca",
    intent: "informacional",
    excerpt:
      "La cámara no es lo que más cambia el resultado de un vídeo de marca. Qué mirar de verdad antes de comprar o alquilar equipo.",
    seoTitle: "Cámara para Grabar Contenido de Marca | A0 Studios Madrid",
    metaDescription:
      "Cámara para grabar contenido de marca: qué mirar en autofoco, formato de entrega y lentes antes de elegir o alquilar equipo para tu marca en Madrid.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Cuando alguien nos escribe para grabar contenido de marca, casi siempre la primera pregunta es qué cámara vamos a usar. Tiene sentido: es lo que se ve, lo que se toca, lo que aparece en las specs del anuncio. Pero después de más de dos años grabando en el ático, la cámara casi nunca es lo que decide si un vídeo se ve profesional o no.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios grabamos con equipo de nivel profesional, sí, pero el salto de calidad real viene de otros sitios: cómo enfoca la cámara en movimiento, qué lente lleva montada, cómo suena el vídeo y para qué formato de entrega lo estás preparando. Esta guía va de eso: qué mirar de verdad antes de comprar o alquilar una cámara para grabar contenido de marca.",
      },
      {
        type: "image",
        src: "/blog/camara-grabar-contenido-marca/hero.webp",
        alt: "Cámara de vídeo profesional preparada sobre trípode en set de grabación",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es lo que realmente cambia el resultado de un vídeo" },
      {
        type: "paragraph",
        text: "La mayoría de contenido de marca se ve en un móvil, a menudo en 1080p aunque se haya grabado en 4K. Eso significa que perseguir más resolución tiene un retorno muy bajo a partir de cierto punto. El espectador no nota la diferencia entre 4K y 6K en su pantalla de 6 pulgadas, pero sí nota si la imagen está desenfocada dos segundos o si el audio suena a lata.",
      },
      {
        type: "paragraph",
        text: "Lo que sí se nota, y mucho, es el autofoco cuando hay movimiento, la estabilización cuando no usas trípode, la exposición cuando cambia la luz a mitad de toma y el audio en todo momento. Esos cuatro factores pesan más en la percepción de calidad que cualquier cifra de resolución en la caja de la cámara.",
      },
      {
        type: "paragraph",
        text: "Por eso en A0 Studios priorizamos equipo que resuelve bien esos cuatro puntos antes que equipo que solo suma megapíxeles. Una cámara media bien configurada, con buen audio y buena luz, da mejor resultado que una cámara de gama alta mal usada.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Autofoco y estabilización, no resolución" },
      {
        type: "paragraph",
        text: "Si vas a grabar hablando a cámara, moviéndote por un espacio o siguiendo a alguien, el autofoco por seguimiento de ojo o de sujeto marca más diferencia que cualquier otra especificación. Cámaras como la Sony A7 IV o la A7S III resuelven esto muy bien y por eso son de las más usadas en producción de contenido de marca, no porque graben en 4K, sino porque no pierden el foco cuando la persona se mueve.",
      },
      { type: "heading", level: 3, text: "Formato de entrega: para qué vas a usar el vídeo" },
      {
        type: "paragraph",
        text: "Antes de fijarte en la cámara, define dónde va a vivir el vídeo. Si es para reels o shorts, necesitas vertical y un encuadre pensado para eso desde el minuto uno, no un recorte del horizontal a última hora. Si es para web o YouTube, el horizontal manda. Grabar en el formato equivocado y recortar después pierde resolución efectiva y suele estropear el encuadre pensado para cámara.",
      },
      { type: "heading", level: 3, text: "Lentes y profundidad de campo" },
      {
        type: "paragraph",
        text: "Una lente correcta hace más por la imagen que cambiar de cuerpo de cámara. Para plano de persona hablando, un 35mm o 50mm equivalente con buena apertura separa al sujeto del fondo y da esa sensación de producción cuidada. Una cámara cara con el objetivo de kit se ve peor que una cámara modesta con una lente luminosa bien elegida.",
      },
      {
        type: "image",
        src: "/blog/camara-grabar-contenido-marca/mid.webp",
        alt: "Primer plano del objetivo de una cámara profesional durante una grabación",
        width: 1920,
        height: 1080,
      },
      { type: "heading", level: 2, text: "Errores comunes al elegir cámara" },
      {
        type: "list",
        items: [
          "Priorizar resolución (4K, 6K, 8K) por encima de autofoco y estabilización.",
          "Comprar el cuerpo de cámara sin presupuestar una lente decente para acompañarlo.",
          "No probar el audio real de la cámara antes de una grabación importante.",
          "Grabar en un códec o formato que complica la edición y alarga los tiempos de entrega.",
          "Cambiar de cámara entre piezas de una misma campaña sin necesidad, lo que rompe la consistencia visual.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Necesito una cámara de gama alta para grabar contenido de marca?",
        answer:
          "No necesariamente. Un equipo de gama media con buen autofoco, buena lente y buen audio suele dar mejor resultado que una cámara cara mal configurada o mal acompañada.",
      },
      {
        type: "faq",
        question: "¿Qué cámara usáis en A0 Studios?",
        answer:
          "Trabajamos con cuerpos Sony A7, elegidos por su autofoco fiable y su rendimiento en vídeo, combinados con lentes luminosas según el tipo de plano que necesita cada sesión.",
      },
      {
        type: "faq",
        question: "¿Es mejor grabar en 4K aunque el vídeo vaya a subirse en 1080p?",
        answer:
          "Ayuda si necesitas margen para recortar o estabilizar en edición, pero no es imprescindible. Si tienes que elegir entre 4K con mal autofoco o 1080p con buen autofoco, el 1080p gana en resultado percibido.",
      },
      {
        type: "faq",
        question: "¿Puedo traer mi propia cámara a la sesión en A0 Studios?",
        answer:
          "Sí. Podemos grabar con tu equipo, con el nuestro, o combinar ambos según lo que necesite cada pieza. Lo hablamos antes de la sesión para preparar el set en consecuencia.",
      },
      {
        type: "paragraph",
        text: "Si tienes dudas sobre qué equipo necesita tu próxima sesión, cuéntanos qué contenido quieres grabar desde /#contacto. Te decimos si conviene traer tu cámara, usar la nuestra o combinar ambas.",
      },
    ],
  },
  {
    slug: "cobertura-audiovisual-eventos-corporativos",
    title: "Cobertura audiovisual de eventos corporativos: qué necesitas para grabarlo bien",
    description:
      "Qué hace falta para cubrir un evento corporativo en vídeo sin perder calidad: cuántas cámaras, cómo resolver el audio en directo y qué entregables sacar al final.",
    publishedAt: "2026-07-09",
    readingTime: "5 min",
    category: "Guía",
    tags: ["cobertura de eventos", "producción audiovisual", "eventos corporativos", "Madrid", "vídeo corporativo"],
    keyword: "cobertura audiovisual eventos corporativos",
    intent: "informacional",
    excerpt:
      "Grabar un evento corporativo no es lo mismo que grabar en estudio. Qué cambia, qué falla más a menudo y cómo llegar con un plan que no dependa de la improvisación.",
    seoTitle: "Cobertura Audiovisual de Eventos Corporativos | A0 Studios Madrid",
    metaDescription:
      "Cobertura audiovisual de eventos corporativos: cuántas cámaras necesitas, cómo resolver el audio en directo y qué entregables pedir al terminar el evento.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Un evento corporativo se graba una vez. No hay repetición de toma, no hay segunda oportunidad si falla el audio del ponente o si la cámara pierde el foco justo cuando sube al escenario el director general. Eso cambia por completo la forma de plantear la producción frente a una grabación en estudio, donde siempre puedes parar y volver a intentarlo.",
      },
      {
        type: "paragraph",
        text: "Hemos cubierto eventos para organizaciones como IFEMA, la Cámara de Comercio de Madrid o Cinesa, y el patrón se repite: el evento sale bien cuando el plan de cobertura está cerrado antes de que empiece, no cuando se improvisa sobre la marcha. Esta guía va de qué necesitas decidir antes, durante y después de grabar un evento corporativo.",
      },
      {
        type: "image",
        src: "/blog/cobertura-audiovisual-eventos-corporativos/hero.webp",
        alt: "Trípode con cámara de vídeo preparado para cobertura de evento en directo",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es distinto en un evento frente a una grabación en estudio" },
      {
        type: "paragraph",
        text: "En estudio controlas la luz, el sonido, el tiempo y el ritmo. En un evento controlas muy poco de eso. El ponente puede alargarse, el técnico de sonido de la sala puede tener su propio mezclador, y el espacio suele estar pensado para el público presente, no para la cámara. La cobertura audiovisual tiene que adaptarse al evento, no al revés.",
      },
      {
        type: "paragraph",
        text: "Eso obliga a resolver de antemano tres cosas: cuántas cámaras hacen falta para no perder ningún momento clave, cómo vas a captar el audio sin depender solo del sonido de sala, y qué vas a entregar al final, porque el bruto del evento casi nunca es lo que el cliente necesita compartir después.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Cuántas cámaras necesitas según el formato" },
      {
        type: "paragraph",
        text: "Una ponencia con un único orador fijo se puede cubrir con dos cámaras: un plano general del escenario y un plano medio que puedas mover para reaccionar. Un panel con varios invitados o un evento con photocall, networking y ponencias necesita una tercera cámara suelta por sala para no depender de que todo pase en el escenario. Más de tres cámaras rara vez aporta si no hay un equipo de realización en directo cortando entre ellas.",
      },
      { type: "heading", level: 3, text: "Audio en directo: el punto que más falla" },
      {
        type: "paragraph",
        text: "El error más habitual es fiarlo todo al sonido ambiente de la sala. Si el evento tiene megafonía propia, lo correcto es pedir una salida de línea del mezclador del recinto además de tu propio micrófono de corbata o de mano en el ponente. Esa salida de línea es la que salva la grabación cuando el técnico de sala sube o baja el volumen sin avisar.",
      },
      { type: "heading", level: 3, text: "Qué entregable pedir al terminar el evento" },
      {
        type: "paragraph",
        text: "El bruto de tres cámaras durante dos horas no sirve para publicar. Lo que de verdad se usa después es un vídeo resumen de 60-90 segundos para redes, un vídeo más largo de la ponencia principal para la web, y un lote de clips cortos de los momentos con más gancho: una frase potente, una reacción del público, un momento visual fuerte. Eso hay que pedirlo como entregable desde el briefing inicial, no improvisarlo en edición.",
      },
      {
        type: "image",
        src: "/blog/cobertura-audiovisual-eventos-corporativos/mid.webp",
        alt: "Público asistente sentado en sala durante un evento corporativo",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes al cubrir un evento" },
      {
        type: "list",
        items: [
          "Depender solo del micrófono de la sala sin pedir salida de línea del mezclador.",
          "Cubrir con una sola cámara un evento con varios momentos simultáneos (photocall, networking, escenario).",
          "No definir el entregable final antes del evento, lo que alarga y encarece la edición después.",
          "Colocar la cámara sin comprobar antes el recorrido de luz durante el horario real del evento.",
          "No tener un plan B si el ponente principal se retrasa o cambia el orden del programa.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuántas cámaras necesito para cubrir un evento corporativo?",
        answer:
          "Depende del formato. Una ponencia única se cubre bien con dos cámaras. Un evento con varios espacios o momentos simultáneos necesita al menos tres.",
      },
      {
        type: "faq",
        question: "¿Podéis conectaros al sonido de la sala del evento?",
        answer:
          "Sí. Siempre que sea posible pedimos una salida de línea del mezclador del recinto además de micrófono propio en el ponente, para no depender del volumen que gestione el técnico de sala.",
      },
      {
        type: "faq",
        question: "¿Entregáis el vídeo completo o también clips para redes?",
        answer:
          "Ambos. Entregamos el vídeo principal de la ponencia y un lote de clips cortos pensados para publicar en redes, además del resumen del evento si se pide en el briefing.",
      },
      {
        type: "faq",
        question: "¿Trabajáis eventos fuera del ático de A0 Studios?",
        answer:
          "Sí. La cobertura de eventos corporativos se hace en el espacio del cliente o del recinto donde tenga lugar el evento, no en nuestro estudio.",
      },
      {
        type: "paragraph",
        text: "Si tienes un evento corporativo próximo y quieres cerrar el plan de cobertura con tiempo, cuéntanos el formato desde /#contacto. Te decimos cuántas cámaras y qué entregables tienen sentido para tu caso.",
      },
    ],
  },
  {
    slug: "grabacion-contenido-ugc-marcas",
    title: "Contenido UGC para marcas: qué es y cómo grabarlo bien en estudio",
    description:
      "Qué es el contenido UGC, por qué las marcas lo piden cada vez más y cómo se graba en estudio sin perder el tono auténtico que lo hace funcionar.",
    publishedAt: "2026-07-10",
    readingTime: "5 min",
    category: "Guía",
    tags: ["UGC", "contenido de marca", "estudio de grabación", "Madrid", "redes sociales", "vídeo"],
    keyword: "grabacion de contenido ugc para marcas",
    intent: "informacional",
    excerpt:
      "El contenido UGC ya no es solo cosa de creators grabando desde casa: las marcas lo piden en estudio, con dirección y calidad, pero sin perder el tono casero que funciona.",
    seoTitle: "Contenido UGC para marcas: cómo grabarlo | A0 Studios Madrid",
    metaDescription:
      "Qué es el contenido UGC, por qué funciona en redes y cómo grabarlo en estudio con calidad profesional sin perder el tono auténtico que lo hace convertir.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "El contenido UGC —user generated content— se ha convertido en el formato que mejor funciona en redes para marcas de todos los tamaños. No es el vídeo pulido de agencia: es el vídeo que parece grabado por una persona real, hablando a cámara sin sonar a guion de anuncio.",
      },
      {
        type: "paragraph",
        text: "El problema es que grabar 'como si fuera casero' en casa, con luz de ventana y el móvil apoyado en una torre de libros, casi nunca sale bien a la primera. En A0 Studios grabamos UGC en estudio: mantenemos ese tono cercano pero controlamos luz, audio y encuadre para que el resultado se pueda usar de verdad.",
      },
      {
        type: "image",
        src: "/blog/grabacion-contenido-ugc-marcas/hero.webp",
        alt: "Persona grabando contenido vertical con cámara para redes sociales",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es el contenido UGC y por qué las marcas lo piden" },
      {
        type: "paragraph",
        text: "UGC es cualquier vídeo que suena a persona real hablando de un producto o servicio, no a departamento de marketing. Testimonios, unboxings, reviews cortas, 'un día usando X'. El formato nació en redes con creators grabando desde casa, pero las marcas descubrieron que ese estilo convierte mejor en anuncios que el vídeo corporativo tradicional.",
      },
      {
        type: "paragraph",
        text: "La razón es sencilla: en el feed, un vídeo que parece publicidad se salta. Uno que parece una persona hablando, no. Por eso agencias y equipos de marketing piden ahora UGC grabado con calidad de estudio pero sin perder esa sensación de espontaneidad que hace que alguien se pare a verlo entero.",
      },
      { type: "heading", level: 2, text: "Cómo se graba UGC bien en estudio" },
      { type: "heading", level: 3, text: "Guion flexible, no guion cerrado" },
      {
        type: "paragraph",
        text: "Preparamos puntos clave, no frases cerradas. La persona que graba —el founder, un empleado o un creator contratado— sabe qué tiene que decir pero lo dice con sus propias palabras. Grabamos varias tomas cortas de cada idea y en edición nos quedamos con la que suena más natural.",
      },
      { type: "heading", level: 3, text: "Cámara y encuadre que parecen de móvil" },
      {
        type: "paragraph",
        text: "Usamos cámaras reales (Sony A7 o similar) pero encuadramos como si fuera un móvil: plano medio, vertical, cámara a la altura de los ojos. La calidad de imagen es de estudio, la composición imita lo que verías en una story grabada a pulso.",
      },
      { type: "heading", level: 3, text: "Audio limpio sin sonar a spot" },
      {
        type: "paragraph",
        text: "El micrófono de corbata o el shotgun cerca de cámara quitan el ruido de fondo sin sonar sobreproducido. Un audio sucio delata que el vídeo no está cuidado; un audio de anuncio de televisión delata que no es UGC real. El punto medio es lo que funciona.",
      },
      {
        type: "image",
        src: "/blog/grabacion-contenido-ugc-marcas/mid.webp",
        alt: "Equipo de iluminación con ring lights junto a ventana en estudio de grabación",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes al grabar UGC" },
      {
        type: "list",
        items: [
          "Guion demasiado cerrado que suena a anuncio leído.",
          "Grabar en horizontal cuando el destino es TikTok, Reels o Stories.",
          "Iluminación plana que quita la sensación de vídeo casero real.",
          "No grabar variantes del hook para poder testear cuál engancha más.",
          "Olvidar un CTA claro al final del vídeo.",
          "Entregar un solo corte largo en vez de varios clips cortos listos para publicar.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto dura una sesión de grabación UGC?",
        answer:
          "Entre 2 y 3 horas para grabar 8-10 piezas distintas con varias tomas de cada una. Depende de cuántos guiones o ángulos quieras cubrir.",
      },
      {
        type: "faq",
        question: "¿Necesito llevar guion cerrado antes de venir?",
        answer:
          "No, mejor un guion de puntos. Si vienes con frases cerradas de memoria el vídeo suena leído, que es justo lo que el UGC tiene que evitar.",
      },
      {
        type: "faq",
        question: "¿Quién puede grabar el UGC, yo o un creator?",
        answer:
          "Ambos funcionan. El founder da autenticidad, un creator contratado da más soltura frente a cámara. Depende de tu marca y de cuánto vas a repetir el formato.",
      },
      {
        type: "faq",
        question: "¿En qué formato entrego los vídeos?",
        answer:
          "Vertical 9:16 listo para TikTok, Reels y Stories, y si hace falta también un corte horizontal para YouTube o web.",
      },
      {
        type: "paragraph",
        text: "Si tu marca necesita contenido UGC con esa mezcla de auténtico y bien grabado, en A0 Studios montamos la sesión completa: guion de apoyo, grabación y clips listos para publicar. Escríbenos desde /#contacto y lo hablamos.",
      },
    ],
  },
  {
    slug: "video-employer-branding-atraer-talento",
    title: "Vídeos de employer branding: cómo grabar contenido que atraiga talento",
    description:
      "Qué es un vídeo de employer branding, por qué las empresas lo usan para atraer talento y cómo grabarlo en estudio sin que parezca un anuncio de RRHH.",
    publishedAt: "2026-07-13",
    readingTime: "5 min",
    category: "Guía",
    tags: ["employer branding", "contenido de marca", "estudio de grabación", "Madrid", "recursos humanos", "vídeo corporativo"],
    keyword: "video de employer branding para atraer talento",
    intent: "informacional",
    excerpt:
      "Cada vez más empresas graban vídeo para mostrar cómo es trabajar en su equipo. Cómo hacerlo bien para que atraiga candidatos de verdad, no solo likes.",
    seoTitle: "Vídeos de employer branding: cómo grabarlos | A0 Studios Madrid",
    metaDescription:
      "Vídeo de employer branding para atraer talento: qué grabar, cómo prepararlo y por qué el estudio marca la diferencia frente a grabar en la oficina.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Cada vez hablo con más equipos de RRHH y founders que quieren grabar vídeo para mostrar cómo es trabajar en su empresa. No es un anuncio de empleo tradicional: es contenido que enseña al equipo real, el espacio real y el día a día real, para que quien lo vea decida si quiere formar parte de eso.",
      },
      {
        type: "paragraph",
        text: "Ese tipo de vídeo se llama employer branding y funciona porque un candidato hoy investiga la empresa igual que investiga un producto antes de comprarlo. Mira LinkedIn, mira Glassdoor, mira el Instagram del equipo. Si lo único que encuentra es una oferta de empleo con bullet points, pierde interés antes de empezar.",
      },
      {
        type: "image",
        src: "/blog/video-employer-branding-atraer-talento/hero.webp",
        alt: "Persona del equipo grabando un testimonio para vídeo de employer branding",
        width: 1920,
        height: 1281,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es un vídeo de employer branding y por qué importa" },
      {
        type: "paragraph",
        text: "Un vídeo de employer branding no vende un puesto, vende cómo es trabajar ahí. Puede ser una persona del equipo contando qué hace en su día a día, un tour por la oficina, o el propio founder explicando por qué monta las cosas como las monta. La diferencia con un vídeo corporativo clásico es el tono: cercano, sin guion de comunicación institucional.",
      },
      {
        type: "paragraph",
        text: "Importa porque el proceso de selección ya no empieza en la entrevista. Empieza cuando alguien busca el nombre de la empresa antes de mandar el CV. Si encuentra contenido real —caras, voces, espacio de trabajo— llega a la entrevista con más interés y menos dudas. Si no encuentra nada, decide con la única información que tiene: el salario y el título del puesto.",
      },
      { type: "heading", level: 2, text: "Cómo grabar contenido de employer branding que funcione" },
      { type: "heading", level: 3, text: "Historias reales de equipo, no anuncios de RRHH" },
      {
        type: "paragraph",
        text: "El vídeo que mejor funciona no lo protagoniza el departamento de RRHH leyendo valores corporativos. Lo protagoniza alguien del equipo contando, con sus palabras, por qué se quedó, qué le sorprendió al entrar o qué haría distinto. Grabamos varias tomas cortas de cada pregunta y nos quedamos con la que suena a conversación, no a discurso preparado.",
      },
      { type: "heading", level: 3, text: "Formato y duración pensados para dónde se va a publicar" },
      {
        type: "paragraph",
        text: "Un vídeo de tres minutos para la página de empleo no sirve igual en LinkedIn, donde compite con contenido corto. De cada sesión sacamos un corte largo para la web de carreras y varios clips verticales de 30-60 segundos para LinkedIn e Instagram, cada uno centrado en una sola idea: cultura, proyectos, equipo o beneficios.",
      },
      { type: "heading", level: 3, text: "Voces distintas, no solo el CEO" },
      {
        type: "paragraph",
        text: "El founder o el CEO puede abrir el vídeo, pero si todas las voces son de dirección, el mensaje suena a comunicación corporativa. Meter a alguien que lleva seis meses en el puesto, a un manager de equipo y a alguien de un departamento distinto da variedad real y hace que un candidato se vea reflejado en al menos una de esas personas.",
      },
      {
        type: "image",
        src: "/blog/video-employer-branding-atraer-talento/mid.webp",
        alt: "Cámara y monitor grabando una entrevista de equipo en estudio",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "list",
        items: [
          "Guion cerrado que suena leído en vez de contado.",
          "Grabar solo al CEO o a dirección, sin voces del resto del equipo.",
          "Un único vídeo largo sin clips cortos para redes.",
          "Grabar en la oficina sin cuidar sonido ni luz, lo que resta credibilidad.",
          "No mostrar el espacio de trabajo real, solo caras en plano fijo.",
          "Publicarlo una vez y no repetir el formato cada cierto tiempo.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto dura grabar un vídeo de employer branding?",
        answer:
          "Entre 2 y 3 horas para grabar 3-4 testimonios y cubrir varios ángulos de cada pregunta. Si además quieres imágenes del equipo trabajando, calcula media hora más.",
      },
      {
        type: "faq",
        question: "¿Hace falta guion cerrado para cada persona?",
        answer:
          "No, mejor un guion de preguntas. Cada persona responde con sus palabras y en edición nos quedamos con la toma que suena más natural.",
      },
      {
        type: "faq",
        question: "¿En qué formatos se entrega?",
        answer:
          "Un corte principal para web o página de empleo y varios clips verticales cortos listos para LinkedIn e Instagram.",
      },
      {
        type: "faq",
        question: "¿Podemos grabarlo en nuestra oficina en vez de en el estudio?",
        answer:
          "Podemos, pero el resultado depende mucho de la luz y el sonido del espacio. En estudio controlamos ambas cosas desde el minuto uno, así que el vídeo sale con nivel profesional sin depender de las condiciones de tu oficina.",
      },
      {
        type: "paragraph",
        text: "Si tu empresa quiere grabar contenido de employer branding para atraer talento, en A0 Studios montamos la sesión completa: preguntas de apoyo, grabación de varias personas del equipo y clips listos para publicar. Escríbenos desde /#contacto y lo hablamos.",
      },
    ],
  },
  {
    slug: "grabacion-webinars-masterclasses",
    title: "Grabación de webinars y masterclasses: cómo hacerlo con nivel profesional",
    description:
      "Cómo grabar un webinar o una masterclass con cámara, pantalla y audio a nivel profesional, para que el contenido se pueda reutilizar después del directo.",
    publishedAt: "2026-07-15",
    readingTime: "5 min",
    category: "Guía",
    tags: ["webinar", "masterclass", "grabación", "contenido de marca", "estudio de grabación", "Madrid"],
    keyword: "grabacion de webinars y masterclasses",
    intent: "informacional",
    excerpt:
      "Un webinar grabado con webcam y sonido de portátil se nota. Cómo montar cámara, pantalla compartida y audio para que la masterclass funcione en directo y después.",
    seoTitle: "Grabación de webinars y masterclasses | A0 Studios Madrid",
    metaDescription:
      "Grabación de webinars y masterclasses con nivel profesional: cámara, pantalla compartida y audio limpio, listos para el directo y para reutilizar después.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Cada vez más founders, coaches y equipos de marketing me preguntan lo mismo antes de lanzar un webinar o una masterclass: cómo hacer que se vea y se escuche bien sin que parezca una videollamada improvisada. Tiene sentido. Ese vídeo no se usa una sola vez: se emite en directo, pero después se convierte en contenido evergreen, en clips para redes o en material de un curso.",
      },
      {
        type: "paragraph",
        text: "El problema es que la mayoría graba con lo que tiene a mano: webcam del portátil, micrófono integrado, luz de la ventana que cambia a mitad de sesión. Funciona para una reunión interna. No funciona cuando ese vídeo tiene que vender un curso, una mentoría o la reputación de quien lo presenta.",
      },
      {
        type: "image",
        src: "/blog/grabacion-webinars-masterclasses/hero.webp",
        alt: "Presentador grabando un webinar con cámara y monitores en estudio",
        width: 1920,
        height: 1440,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es grabar un webinar o masterclass y por qué importa" },
      {
        type: "paragraph",
        text: "Grabar un webinar con nivel profesional significa separar tres cosas que en una videollamada normal van todas mezcladas: la imagen de quien presenta, la pantalla compartida con las diapositivas o la demo, y el audio. Cuando cada elemento se capta por separado y con equipo dedicado, en edición se puede combinar, recortar y reutilizar sin depender de cómo salió el directo.",
      },
      {
        type: "paragraph",
        text: "Importa porque una masterclass suele ser la pieza de contenido con más intención de compra de todo el funnel. La persona que llega hasta el final de un webinar de 45 minutos está evaluando si confía en quien habla. Si el audio se corta, la luz parpadea o la cámara está torcida, esa duda técnica se traslada a la duda sobre el producto.",
      },
      {
        type: "paragraph",
        text: "Y además, ese mismo vídeo casi nunca se usa una vez. Se recorta en clips para LinkedIn, se convierte en módulo de curso, se manda por email a quien no pudo asistir en directo. Grabarlo bien de origen ahorra horas de edición después.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Guion por bloques, no lectura literal" },
      {
        type: "paragraph",
        text: "Un webinar leído palabra por palabra suena a webinar leído. Lo que funciona es un guion por bloques: qué se cuenta en cada tramo, qué diapositiva acompaña cada idea y qué pregunta o transición marca el cambio de bloque. Dentro de cada bloque, la persona habla con sus palabras. Se nota la diferencia entre alguien que lee y alguien que explica.",
      },
      { type: "heading", level: 3, text: "Pantalla, cámara y presentador en el mismo encuadre" },
      {
        type: "paragraph",
        text: "La fórmula que mejor funciona combina la cámara del presentador con la pantalla compartida en la misma grabación, capturadas por separado. Así en edición se puede alternar entre plano de cámara para los momentos de conexión y pantalla completa para la parte de contenido denso, sin perder nunca la sensación de que hay una persona real al otro lado.",
      },
      { type: "heading", level: 3, text: "Audio limpio antes que imagen bonita" },
      {
        type: "paragraph",
        text: "Si alguien abandona un webinar, casi nunca es porque la imagen no sea perfecta. Es porque no se entiende bien lo que se dice. Un micrófono de solapa o de mesa cerca de la boca, sin eco de sala ni ruido de fondo, hace más por la percepción de calidad que cualquier iluminación. En estudio controlamos ambas cosas desde el minuto uno.",
      },
      {
        type: "image",
        src: "/blog/grabacion-webinars-masterclasses/mid.webp",
        alt: "Cámara y equipo de grabación enfocando una pantalla de presentación",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "list",
        items: [
          "Grabar con la webcam del portátil como única fuente de imagen.",
          "Audio del micrófono integrado, con eco de la sala de fondo.",
          "Diapositivas con mucho texto que nadie puede leer en un vídeo grabado.",
          "No grabar la pantalla y la cámara por separado, lo que limita la edición después.",
          "Luz de ventana que cambia de intensidad a mitad de sesión.",
          "No dejar pausas ni reinicios de bloque, lo que complica cortar clips después.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Se puede grabar un webinar en estudio si luego se emite en directo?",
        answer:
          "Sí. Grabamos con la misma configuración que usarías en directo (cámara, pantalla y audio) y esa grabación sirve tanto para el directo como para reutilizarla después sin grabar de nuevo.",
      },
      {
        type: "faq",
        question: "¿Cuánto dura grabar una masterclass completa?",
        answer:
          "Para una masterclass de 45-60 minutos, calcula entre 2 y 3 horas en estudio contando pruebas de sonido, encuadre y algún corte por bloque si hace falta repetir una parte.",
      },
      {
        type: "faq",
        question: "¿Hace falta compartir pantalla en el momento de grabar?",
        answer:
          "Es lo más práctico: se captura pantalla y cámara a la vez y en edición se decide cuándo mostrar cada una. Si prefieres, también se puede grabar solo la parte de cámara y montar las diapositivas después.",
      },
      {
        type: "faq",
        question: "¿Se pueden sacar clips para redes de la misma grabación?",
        answer:
          "Sí, es habitual. De una masterclass de 45 minutos suelen salir varios clips cortos para LinkedIn o Instagram centrados en las ideas más fuertes de cada bloque.",
      },
      {
        type: "paragraph",
        text: "Si tienes un webinar o una masterclass en el calendario y quieres que se vea y se escuche a nivel profesional, en A0 Studios montamos cámara, pantalla y audio para que salga bien a la primera. Escríbenos desde /#contacto y lo preparamos.",
      },
    ],
  },
  {
    slug: "grabacion-videos-producto-estudio",
    title: "Vídeo de producto en estudio: cómo grabarlo para que venda",
    description:
      "Cómo grabar un vídeo de producto en estudio: fondo, iluminación y planos para que el producto se vea bien y el vídeo sirva para vender, no solo para enseñar.",
    publishedAt: "2026-07-16",
    readingTime: "5 min",
    category: "Guía",
    tags: ["vídeo de producto", "grabación", "estudio de grabación", "contenido de marca", "Madrid", "ecommerce"],
    keyword: "grabacion de videos de producto en estudio",
    intent: "informacional",
    excerpt:
      "Un vídeo de producto grabado con el móvil en la mesa de la oficina se nota. Cómo montar fondo, luz y planos en estudio para que el producto se vea bien y venda.",
    seoTitle: "Vídeo de producto en estudio | A0 Studios Madrid",
    metaDescription:
      "Cómo grabar un vídeo de producto en estudio: cámara, luz y fondo para que el producto se vea bien y el vídeo sirva para vender de verdad.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Cada vez llegan más marcas a A0 Studios con el mismo encargo: necesitan un vídeo de su producto para la ficha de ecommerce, para un anuncio o para la web, y lo que tienen grabado hasta ahora es con el móvil, encima de la mesa de la oficina, con la luz que entra por la ventana esa tarde. Se nota. Y cuando el producto es lo que tiene que convencer a alguien de comprar, ese detalle pesa.",
      },
      {
        type: "paragraph",
        text: "Grabar producto no es lo mismo que grabar a una persona hablando a cámara. Cambia el encuadre, cambia la luz, cambia hasta el ritmo del vídeo. Un producto mal iluminado parece más barato de lo que es, tenga el precio que tenga. Uno bien grabado se explica solo, sin necesidad de que nadie hable por encima.",
      },
      {
        type: "image",
        src: "/blog/grabacion-videos-producto-estudio/hero.webp",
        alt: "Producto colocado sobre fondo neutro listo para grabación en estudio",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es grabar un vídeo de producto en estudio y por qué importa" },
      {
        type: "paragraph",
        text: "Grabar un vídeo de producto en estudio significa controlar tres variables que en una oficina o en casa son imposibles de controlar a la vez: el fondo, la luz y el ángulo de cámara. En estudio el fondo es neutro o decorado a propósito, la luz es constante durante toda la sesión y la cámara se puede mover en raíl o en mano sin tropezar con el mobiliario.",
      },
      {
        type: "paragraph",
        text: "Importa porque el vídeo de producto suele ser la última pieza que alguien ve antes de decidir si compra. En una ficha de ecommerce, en un anuncio de Meta o en la web, ese clip de diez o veinte segundos tiene que responder una pregunta muy concreta: ¿esto es lo que parece en la foto? Si el producto se ve mal iluminado, con reflejos raros o con un fondo desordenado, la respuesta que da el cerebro es duda, y la duda no compra.",
      },
      {
        type: "paragraph",
        text: "Y a diferencia de un vídeo de marca genérico, este tipo de pieza se reutiliza mucho: sirve para la web, para el anuncio, para la ficha del marketplace y para redes, todo desde la misma sesión si se graba pensando en los distintos formatos desde el principio.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Fondo y encuadre según dónde va a vivir el vídeo" },
      {
        type: "paragraph",
        text: "Si el vídeo va a una ficha de ecommerce, el fondo blanco o neutro sigue siendo lo más seguro: pone el foco entero en el producto y es coherente con el resto de fotos de la ficha. Si va a un anuncio o a redes, un fondo con contexto (una mesa, una textura, un ambiente) suele funcionar mejor porque ayuda a imaginar el producto en uso. Decidir esto antes de grabar evita repetir la sesión.",
      },
      { type: "heading", level: 3, text: "Luz continua, sin sombras duras ni reflejos" },
      {
        type: "paragraph",
        text: "Para producto trabajamos con luz continua, no con flash: así se ve en tiempo real cómo cae la sombra y se puede ajustar antes de grabar, no después en edición. Con dos paneles y algún difusor se elimina el reflejo duro en superficies brillantes (cristal, plástico, metal), que es el error más común cuando alguien graba con lo que tiene a mano.",
      },
      { type: "heading", level: 3, text: "Varios planos, no uno solo fijo" },
      {
        type: "paragraph",
        text: "Un plano general del producto entero, uno de detalle (textura, botón, cierre, etiqueta) y uno en movimiento o en uso cubren la mayoría de los casos. Con una cámara tipo Sony A7 y un objetivo macro se consigue el detalle sin perder nitidez. Ese detalle es justo lo que un vídeo grabado con móvil desde lejos no puede dar.",
      },
      {
        type: "image",
        src: "/blog/grabacion-videos-producto-estudio/mid.webp",
        alt: "Set de estudio con cámara e iluminación preparados para grabar producto",
        width: 1920,
        height: 1080,
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "list",
        items: [
          "Grabar con la luz de ventana, que cambia de intensidad a mitad de sesión.",
          "Fondo desordenado o con objetos que distraen del producto.",
          "Un único plano fijo, sin detalle ni contexto de uso.",
          "Reflejos sin controlar en superficies de cristal, metal o plástico.",
          "No pensar antes en qué formatos va a vivir el vídeo (cuadrado, vertical, horizontal).",
          "Grabar el producto solo, sin ninguna referencia de escala o de uso.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto dura una sesión de grabación de producto en estudio?",
        answer:
          "Para un producto con varios planos (general, detalle y uso) calcula entre 1 y 2 horas en estudio. Si son varios productos de la misma gama, se puede aprovechar el mismo montaje de luz y encuadre para acelerar el resto.",
      },
      {
        type: "faq",
        question: "¿Se pueden grabar varios productos en la misma sesión?",
        answer:
          "Sí, es lo más habitual y lo más eficiente. Mantener el mismo fondo y la misma luz para toda la gama ahorra tiempo de montaje y da coherencia visual a toda la ficha o catálogo.",
      },
      {
        type: "faq",
        question: "¿Hace falta fondo blanco tipo packshot siempre?",
        answer:
          "No siempre. El fondo blanco funciona mejor para ecommerce y marketplace. Para anuncios o redes, un fondo con contexto suele generar más conexión con quien lo ve. Depende de dónde va a vivir el vídeo.",
      },
      {
        type: "faq",
        question: "¿Sirve el mismo vídeo para ecommerce y para anuncios pagados?",
        answer:
          "Con planificación sí. Si se graba pensando en varios formatos desde el principio (horizontal, cuadrado, vertical) se puede montar una versión para ficha de producto y otra para anuncio sin repetir la sesión.",
      },
      {
        type: "paragraph",
        text: "Si tienes un producto que necesita verse bien de verdad, en A0 Studios montamos fondo, luz y cámara para que el vídeo cumpla su función: que quien lo vea entienda exactamente qué está comprando. Escríbenos desde /#contacto y lo preparamos.",
      },
    ],
  },
  {
    slug: "tratamiento-acustico-estudio-grabacion",
    title: "Tratamiento acústico en un estudio de grabación: por qué se nota en el resultado",
    description:
      "Qué es el tratamiento acústico de una sala, en qué se diferencia de insonorizar y por qué ese trabajo invisible es lo que hace que un podcast o un vídeo suenen profesionales.",
    publishedAt: "2026-07-17",
    readingTime: "5 min",
    category: "Guía",
    tags: ["tratamiento acústico", "estudio de grabación", "insonorización", "podcast", "Madrid"],
    keyword: "tratamiento acustico estudio de grabacion",
    intent: "informacional",
    excerpt:
      "El fondo y la luz se ven a primera vista. El tratamiento acústico no se ve, pero se escucha en cada grabación. Qué hace que una sala suene bien y cómo se consigue.",
    seoTitle: "Tratamiento acústico en un estudio de grabación | A0 Studios Madrid",
    metaDescription:
      "Tratamiento acústico de un estudio: qué hace falta para que un podcast o un vídeo no suenen a habitación vacía y en qué se diferencia de insonorizar.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Cuando alguien visita A0 Studios por primera vez, lo primero que mira es la luz y el fondo. Es lógico, es lo que se ve en la miniatura y en las fotos que se enseñan antes de reservar. El tratamiento acústico de la sala pasa desapercibido justo porque funciona bien: no se ve, se nota en el silencio de fondo cuando reproduces la grabación en casa con auriculares y no en la sala donde se grabó.",
      },
      {
        type: "paragraph",
        text: "La diferencia entre grabar en una sala tratada acústicamente y grabar en un salón, una oficina o una habitación cualquiera no está en el micrófono que uses. Está en cómo rebota el sonido antes de llegar a esa cápsula. Un micrófono bueno en una habitación con eco suena peor que uno más modesto en una sala bien tratada, y ese es un error que veo repetirse mucho en gente que invierte en equipo antes de revisar dónde va a grabar con él.",
      },
      {
        type: "image",
        src: "/blog/tratamiento-acustico-estudio-grabacion/hero.webp",
        alt: "Sala de grabación con paneles acústicos en las paredes, mesa de mezclas y varios micrófonos con brazo",
        width: 1880,
        height: 1253,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es el tratamiento acústico y por qué importa" },
      {
        type: "paragraph",
        text: "Tratamiento acústico e insonorización no son lo mismo, aunque se confunden todo el rato. Insonorizar es evitar que el ruido de la calle entre en la sala o que el ruido de dentro salga. Tratar acústicamente una sala es controlar cómo se comporta el sonido una vez ya está dentro: cuánto rebota en las paredes, cuánto tarda en apagarse, si hay frecuencias que se acumulan en las esquinas.",
      },
      {
        type: "paragraph",
        text: "Importa porque el oído humano perdona muchas cosas de una grabación, pero el eco de sala no es una de ellas. Una voz grabada en una habitación vacía, con suelo duro y paredes paralelas, suena distante y metálica, aunque el micrófono sea excelente. En un podcast o una entrevista, ese detalle hace que quien escucha se desconecte antes de que termine el primer minuto, algo que no pasa tan rápido con una imagen de calidad media.",
      },
      {
        type: "paragraph",
        text: "El problema típico es el flutter echo: dos superficies duras y paralelas (dos paredes lisas enfrentadas, o techo y suelo) hacen que el sonido rebote de una a otra varias veces antes de apagarse. Se nota sobre todo en aplausos o en consonantes fuertes, y en una grabación de voz se traduce en un timbre metálico que ninguna edición de audio arregla del todo. Se puede reducir el ruido de fondo con software, pero el eco de la sala ya está grabado dentro de la voz, mezclado con ella, y ahí un plugin ya no separa una cosa de la otra.",
      },
      {
        type: "paragraph",
        text: "Esto pesa más de lo que parece en formatos donde el audio se escucha sin imagen que lo acompañe, como un podcast que también se sube a plataformas de audio. En vídeo, una imagen algo pobre se perdona porque el ojo sigue completando la escena. En audio puro, un eco de sala incomoda desde el segundo uno y no hay forma de mirar hacia otro lado.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Paneles absorbentes en los puntos que importan" },
      {
        type: "paragraph",
        text: "No hace falta cubrir toda la sala de espuma. Lo que más cambia el sonido son los primeros puntos de reflexión: la pared justo detrás de quien habla, los laterales a la altura del micrófono y las esquinas, donde se acumulan las frecuencias graves. Cubrir esos puntos con paneles absorbentes reduce el eco sin dejar la sala completamente muerta, que tampoco es el objetivo.",
      },
      { type: "heading", level: 3, text: "Aislamiento del ruido exterior" },
      {
        type: "paragraph",
        text: "Además del eco interior, está el ruido que entra de fuera: tráfico, obras, el aire acondicionado, el ruido de la calle. En A0 Studios grabamos en un ático de Ronda de Atocha, así que cerramos bien puertas y ventanas antes de empezar y evitamos usar el aire acondicionado durante la toma si hace ruido de fondo. Es un ajuste simple, pero se olvida más de lo que parece cuando alguien graba fuera de un estudio pensado para esto.",
      },
      {
        type: "paragraph",
        text: "El ruido exterior no siempre es evidente mientras se graba, sobre todo si es constante: un frigorífico, el zumbido de un router o el tráfico de fondo se vuelven invisibles para el oído después de un rato, porque el cerebro deja de prestarles atención. El micrófono no hace ese filtro. Graba exactamente lo que hay, así que conviene revisar el silencio de la sala antes de empezar, no confiar en que \"no se oye nada raro\".",
      },
      { type: "heading", level: 3, text: "Colocación del micrófono y distancia a la fuente" },
      {
        type: "paragraph",
        text: "Un micrófono cardioide colocado cerca de la boca (10-15 cm) capta mucha más señal directa que sala, así que el eco residual pesa menos en la mezcla final. Colocado lejos, en cambio, el micrófono capta más habitación que voz, por muy bien tratada que esté la sala. Por eso en A0 Studios ajustamos la distancia antes de grabar, no la posición de la persona respecto a la cámara.",
      },
      {
        type: "paragraph",
        text: "El patrón polar también importa: un cardioide rechaza mejor el sonido que llega de los lados y de atrás, mientras que un omnidireccional capta la sala entera por igual. Para voz hablada en estudio, cardioide casi siempre gana. Y un detalle que se olvida: si hay dos micrófonos abiertos en la misma sala captando la misma fuente, aparece cancelación de fase y el sonido pierde cuerpo, así que en grabaciones a dos voces conviene mantener cada micro cerca de su persona y apagar el que no se esté usando.",
      },
      {
        type: "image",
        src: "/blog/tratamiento-acustico-estudio-grabacion/mid.webp",
        alt: "Micrófono de podcast tipo Shure SM7B en primer plano sobre fondo neutro",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "list",
        items: [
          "Confundir insonorizar (que no entre ruido de fuera) con tratar acústicamente (controlar el eco de dentro).",
          "Cubrir toda la sala de espuma pensando que cuanta más absorción, mejor: una sala totalmente muerta también suena rara.",
          "Grabar cerca de ventanas, puertas o rejillas de aire acondicionado sin comprobar antes el ruido de fondo.",
          "Colocar el micrófono lejos de la boca, lo que hace que se capte más sala que voz.",
          "No hacer una prueba de sonido antes de grabar: un aplauso o una palmada delatan enseguida el eco de una sala.",
          "Ignorar el ruido constante de ventiladores de ordenador, neveras o el propio zumbido de los focos.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Necesito una sala completamente insonorizada para grabar un podcast?",
        answer:
          "No necesariamente. Lo que más se nota en un podcast es el eco de la sala, no el aislamiento total del ruido exterior. Con controlar los reflejos y reducir el ruido de fondo constante (tráfico, aire acondicionado) suele ser suficiente.",
      },
      {
        type: "faq",
        question: "¿En qué se diferencia insonorizar de tratar una sala acústicamente?",
        answer:
          "Insonorizar evita que el ruido entre o salga de la sala (aislamiento). Tratar acústicamente controla cómo rebota el sonido dentro de la sala (paneles, absorción). Son trabajos distintos y muchas veces solo hace falta el segundo.",
      },
      {
        type: "faq",
        question: "¿Se nota la diferencia si grabo en casa con medios caseros?",
        answer:
          "Sí, aunque con límites. Una habitación con alfombra, cortinas gruesas y algún mueble con tela ya suena mejor que una vacía con suelo duro. Pero paneles acústicos reales y una distancia de micrófono correcta siguen dando un salto que lo casero no iguala del todo.",
      },
      {
        type: "faq",
        question: "¿El tratamiento acústico afecta también a la imagen del vídeo?",
        answer:
          "No de forma directa, pero una sala pensada para grabar bien el sonido suele tener también mejor control de luz y menos elementos que distraigan visualmente. Se acaban cuidando las dos cosas a la vez.",
      },
      {
        type: "paragraph",
        text: "Si grabas podcast, entrevistas o vídeo con audio en directo, el sonido de la sala pesa tanto como la imagen, aunque se note menos a simple vista. En A0 Studios la sala ya está tratada para esto, así que no tienes que pensarlo tú. Escríbenos desde /#contacto y lo hablamos.",
      },
    ],
  },
  {
    slug: "que-ropa-ponerte-grabar-video",
    title: "Qué ropa ponerte para grabar vídeo: colores, patrones y errores que se ven en cámara",
    description:
      "Qué colores funcionan bien en cámara, qué patrones evitar y por qué la ropa condiciona el resultado de una grabación tanto como la luz o el fondo.",
    publishedAt: "2026-07-20",
    readingTime: "5 min",
    category: "Guía",
    tags: ["vestuario para grabar", "ropa en cámara", "estudio de grabación", "producción de contenido", "Madrid"],
    keyword: "que ropa ponerte para grabar video",
    intent: "informacional",
    excerpt:
      "La ropa es lo primero que se ve en cualquier grabación, antes incluso de escuchar la primera frase. Qué colores, patrones y prendas funcionan bien en cámara y cuáles conviene evitar.",
    seoTitle: "Qué ropa ponerte para grabar vídeo | A0 Studios Madrid",
    metaDescription:
      "Qué ropa ponerte para grabar vídeo: colores que funcionan en cámara, patrones a evitar y errores de vestuario que se notan en cualquier grabación.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Cada semana veo llegar a alguien que ha cuidado el guion, ha reservado hora en el estudio y ha probado la luz, y se presenta con una camisa de rayas finas o una camiseta blanca que en cámara pierde todo el contraste. La ropa no es un detalle menor: es lo primero que se ve en un vídeo, antes incluso de escuchar la primera frase.",
      },
      {
        type: "paragraph",
        text: "No hace falta un estilista ni ropa nueva para grabar bien. Hace falta entender un puñado de reglas simples sobre cómo se comporta una prenda delante de una cámara, que no siempre coinciden con lo que se ve bien al espejo o en una foto.",
      },
      {
        type: "image",
        src: "/blog/que-ropa-ponerte-grabar-video/hero.webp",
        alt: "Persona grabando vídeo en estudio con cámara profesional y ropa de color sólido",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué la ropa importa tanto como la luz o el fondo" },
      {
        type: "paragraph",
        text: "Una cámara no ve exactamente lo que ve el ojo. Comprime rangos de color, satura ciertos tonos y reacciona distinto según el sensor y la compresión final que aplique la plataforma donde se sube el vídeo. Una prenda que en persona se ve elegante puede verse plana, quemada o con un patrón que vibra en pantalla sin que la persona lo note hasta que revisa la grabación.",
      },
      {
        type: "paragraph",
        text: "Además, la ropa condiciona el trabajo de iluminación y de edición. Un color mal elegido obliga a corregir en postproducción, y algunos errores, como el moiré de una camisa de cuadros finos, no se arreglan del todo por mucho tiempo que se le dedique a DaVinci Resolve.",
      },
      {
        type: "paragraph",
        text: "Hay un motivo más práctico todavía: si se graba con croma o delante de un fondo de un color muy concreto, la ropa puede fundirse con ese fondo y generar un recorte raro alrededor del cuerpo. En un estudio con fondo natural, como salón o terraza, el riesgo es menor, pero sigue existiendo si la prenda coincide demasiado con la tonalidad dominante de la escena.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Colores que funcionan bien en cámara" },
      {
        type: "paragraph",
        text: "Los colores sólidos de saturación media suelen ser la apuesta más segura: azul marino, verde oliva, granate, gris piedra. Dan contraste con la piel y con la mayoría de fondos sin robar protagonismo a la cara. El blanco puro tiende a quemarse con luces potentes y pierde detalle de textura. El negro puro, en un fondo también oscuro, aplana la silueta y complica el trabajo de luz. El rojo saturado puede sangrar en el sensor y generar un halo raro alrededor de los bordes de la prenda.",
      },
      { type: "heading", level: 3, text: "Patrones y texturas a evitar" },
      {
        type: "paragraph",
        text: "Las rayas finas y los cuadros pequeños generan moiré: un patrón ondulante que aparece cuando la trama de la tela interfiere con la resolución del sensor. No es un problema del micrófono ni de la cámara en sí, es matemática de píxeles, y se nota más en vídeo comprimido para redes que en una foto. Las telas brillantes o con lentejuelas reflejan la luz de forma irregular y crean puntos que distraen. Los estampados grandes compiten con la cara por la atención de quien mira el vídeo, que es justo lo contrario de lo que se busca.",
      },
      { type: "heading", level: 3, text: "Accesorios, brillos y logos" },
      {
        type: "paragraph",
        text: "Los logos y textos grandes en la ropa fechan el vídeo y desvían la mirada del mensaje. Los pendientes largos o collares que se mueven captan luz y, si se usa micrófono de solapa, pueden rozarlo y meter ruido en cada movimiento. Las gafas con cristal sin tratamiento antirreflejante generan un brillo que tapa los ojos bajo ciertos ángulos de luz, algo fácil de evitar simplemente avisando antes de la sesión.",
      },
      {
        type: "image",
        src: "/blog/que-ropa-ponerte-grabar-video/mid.webp",
        alt: "Ropa de colores neutros y sólidos colgada en un perchero antes de una grabación",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "list",
        items: [
          "Elegir la ropa la misma mañana de la grabación sin probarla antes con la luz real.",
          "Llevar una prenda del mismo color que el fondo del set.",
          "Usar camisas de rayas finas o cuadros pequeños que generan moiré en vídeo.",
          "Combinar varias prendas brillantes o con mucho estampado a la vez.",
          "Olvidar el sonido: joyas que rozan el micrófono de solapa en cada gesto.",
          "No llevar una muda de repuesto en sesiones largas donde puede haber sudor o manchas visibles en cámara.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Puedo llevar blanco o negro puro?",
        answer:
          "Se puede, pero exige más cuidado con la luz. El blanco puro tiende a quemarse y perder textura, y el negro puro sobre fondo oscuro aplana la silueta. Un gris claro o un negro combinado con un fondo más iluminado suelen funcionar mejor.",
      },
      {
        type: "faq",
        question: "¿Qué pasa si mi ropa tiene rayas finas?",
        answer:
          "Puede aparecer moiré, un patrón ondulante que interfiere con el sensor de la cámara. Si no hay alternativa, ayuda alejarse un poco más de cámara o cambiar a un plano donde la prenda ocupe menos espacio en el encuadre.",
      },
      {
        type: "faq",
        question: "¿Influye el color de la ropa si grabo con croma?",
        answer:
          "Sí, bastante. Cualquier prenda del mismo tono que el croma puede volverse parcialmente transparente al hacer el keying. Conviene evitar verdes o azules saturados si el fondo va a sustituirse en edición.",
      },
      {
        type: "faq",
        question: "¿Qué colores evitan mejor en el estudio de A0 Studios?",
        answer:
          "Con luz natural y fondo de salón o terraza, lo que peor funciona es el blanco muy brillante y los estampados muy cargados. Los colores sólidos de saturación media son los que mejor se integran sin perder presencia.",
      },
      {
        type: "paragraph",
        text: "La ropa no arregla una grabación floja, pero una mala elección sí puede estropear una buena. Si tienes dudas sobre qué ponerte antes de tu sesión, pregúntame directamente desde /#contacto y te digo qué funciona mejor para tu caso.",
      },
    ],
  },
  {
    slug: "guion-video-contenido-sin-sonar-a-anuncio",
    title: "Cómo escribir un guion para grabar contenido sin que suene a anuncio",
    description:
      "Por qué la mayoría de guiones suenan a folleto en vez de a conversación, y cómo estructurar uno que se escuche natural delante de la cámara.",
    publishedAt: "2026-07-21",
    readingTime: "4 min",
    category: "Guía",
    tags: ["guion de vídeo", "guion para contenido", "grabación de contenido", "estudio de grabación", "Madrid"],
    keyword: "guion para grabar contenido",
    intent: "informacional",
    excerpt:
      "La mayoría de guiones suenan a anuncio porque están escritos como un folleto, no como algo que alguien diría en voz alta. Cómo escribir uno que suene a conversación real.",
    seoTitle: "Guion para grabar contenido sin sonar a anuncio | A0 Studios Madrid",
    metaDescription:
      "Guion para grabar contenido sin sonar a anuncio: cómo estructurar el hook, escribir para el oído y dejar hueco a la voz real de quien graba.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Cada semana recibo guiones que alguien ha escrito la noche antes de grabar. Empiezan con \"Hola, soy fulano y hoy os quiero hablar de...\" y a partir de ahí todo suena a presentación corporativa. El problema no es el contenido, es la estructura: está escrito como un folleto, no como algo que una persona diría en voz alta.",
      },
      {
        type: "paragraph",
        text: "Un guion no tiene que sonar a guion. Tiene que sonar a alguien que sabe lo que va a decir y lo dice bien, no a alguien leyendo un texto. Esa diferencia se nota en los primeros tres segundos y decide si alguien se queda viendo o pasa al siguiente vídeo sin pensarlo.",
      },
      {
        type: "image",
        src: "/blog/guion-video-contenido-sin-sonar-a-anuncio/hero.webp",
        alt: "Cuaderno, portátil y café sobre una mesa mientras se escribe un guion de vídeo",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué la mayoría de guiones suenan a anuncio" },
      {
        type: "paragraph",
        text: "La mayoría de guiones que suenan a anuncio cometen el mismo error: empiezan presentando en lugar de enganchando. \"Hola, soy Dani y en el vídeo de hoy...\" es la forma más rápida de perder a alguien que está viendo contenido en el móvil sin sonido y decidiendo en menos de un segundo si sigue mirando.",
      },
      {
        type: "paragraph",
        text: "El segundo error es escribir frases que funcionan en papel pero no en boca. Frases largas, subordinadas, adjetivos de más. Cuando alguien intenta decir eso en voz alta, suena impostado, porque nadie habla así de forma natural en una conversación real. Se nota el esfuerzo por sonar bien en vez de sonar cierto.",
      },
      {
        type: "paragraph",
        text: "El tercer error es dejar cero margen para la persona que graba. Un guion demasiado cerrado convierte a quien lo lee en un actor leyendo líneas ajenas. Y si esa persona no es actor, se le nota: la mirada busca el texto, el tono se vuelve plano, y el resultado se parece más a una locución que a una conversación.",
      },
      {
        type: "paragraph",
        text: "Todo esto tiene consecuencia directa en el rendimiento del vídeo. Un guion que suena a anuncio genera menos retención en los primeros segundos, y eso penaliza el alcance en cualquier plataforma. No es solo una cuestión de estilo: es una cuestión de si el contenido llega a la gente o se queda a medio ver.",
      },
      { type: "heading", level: 2, text: "Cómo escribir un guion que suene natural" },
      { type: "heading", level: 3, text: "Empieza por el hook, no por la presentación" },
      {
        type: "paragraph",
        text: "El hook va en la primera frase, no en la tercera. Si necesitas decir \"hola\" antes de decir algo interesante, ese \"hola\" sobra. Empieza por la idea, la pregunta o la afirmación que hace que alguien quiera saber qué viene después. La presentación, si hace falta, va después del hook, nunca antes.",
      },
      { type: "heading", level: 3, text: "Escribe para el oído, no para el ojo" },
      {
        type: "paragraph",
        text: "Un guion se escucha, no se lee. Escribe frases cortas, con el orden en que las dirías hablando con un amigo, no el orden que usarías en un email. Si al leerlo en voz alta tropiezas o necesitas repetir una frase para que suene bien, reescríbela más corta. Si suena raro al oído, sonará raro en cámara.",
      },
      { type: "heading", level: 3, text: "Deja hueco para la voz real de quien graba" },
      {
        type: "paragraph",
        text: "Un guion no es un texto cerrado palabra por palabra, es una guía de ideas en el orden correcto. Marca los puntos que tienen que aparecer sí o sí, pero deja que la persona que graba diga cada idea con sus propias palabras. Eso es lo que hace que suene a conversación y no a lectura de un teleprompter.",
      },
      {
        type: "image",
        src: "/blog/guion-video-contenido-sin-sonar-a-anuncio/mid.webp",
        alt: "Persona hablando delante de una cámara en un estudio de grabación",
        width: 1920,
        height: 1080,
      },
      { type: "heading", level: 2, text: "Errores comunes al escribir un guion de contenido" },
      {
        type: "list",
        items: [
          "Escribir el guion completo palabra por palabra y esperar que suene natural al leerlo. Casi nadie lee bien un texto ajeno sin que se note el esfuerzo.",
          "Meter la marca o el nombre de la empresa en la primera frase, antes de haber dado ningún motivo para seguir viendo el vídeo.",
          "Usar el mismo guion para todos los formatos, sin adaptar la duración ni el tono a si es un reel, un vídeo largo o un short.",
          "No dejar ningún hueco para la reacción o el ejemplo espontáneo de quien graba, que suele acabar siendo lo mejor del vídeo.",
          "Escribir el cierre como una despedida genérica en vez de como una razón concreta para actuar ahora mismo.",
          "No probar el guion en voz alta antes de grabar, así que el primer intento de decirlo bien ya es delante de la cámara, con el tiempo corriendo.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto debería durar un guion para un reel?",
        answer:
          "Depende del formato, pero como referencia: para un reel de 30-60 segundos necesitas entre 90 y 150 palabras. Más que eso y el ritmo se resiente, y menos y el mensaje se queda corto.",
      },
      {
        type: "faq",
        question: "¿Hay que memorizar el guion palabra por palabra?",
        answer:
          "No. Memorizar palabra por palabra suele sonar más rígido que trabajar con una estructura de ideas y decirlas con tus propias palabras cada vez que grabas, aunque cambien ligeramente entre tomas.",
      },
      {
        type: "faq",
        question: "¿Puedo usar teleprompter con este tipo de guion?",
        answer:
          "Sí, y en el estudio lo usamos bastante. La clave es que el guion en el teleprompter esté escrito ya en frases cortas y naturales, no como un texto pensado para leer en silencio.",
      },
      {
        type: "faq",
        question: "¿Quién debería escribir el guion, yo o quien graba?",
        answer:
          "Idealmente lo escribe quien va a decirlo, o alguien que conoce bien su forma de hablar. Un guion escrito por un tercero sin ese conocimiento tiende a sonar ajeno incluso cuando el contenido es bueno.",
      },
      {
        type: "paragraph",
        text: "Un buen guion no se nota. Lo que se nota es cuando falta o cuando está mal escrito. Si quieres que te ayude a preparar el guion antes de tu próxima sesión de grabación, escríbeme desde /#contacto y lo vemos juntos antes del día de la grabación.",
      },
    ],
  },
  {
    slug: "video-horizontal-vs-vertical-que-formato-usar",
    title: "Vídeo horizontal vs vertical: cuándo usar cada formato",
    description:
      "Horizontal o vertical no es una decisión estética. Depende de dónde va a verse el vídeo y qué tiene que transmitir. Cómo elegir bien antes de grabar.",
    publishedAt: "2026-07-22",
    readingTime: "5 min",
    category: "Guía",
    tags: ["formato de vídeo", "vídeo vertical", "contenido para redes", "producción audiovisual", "Madrid"],
    keyword: "video horizontal vs vertical",
    intent: "informacional",
    excerpt:
      "Horizontal o vertical no es gusto personal, es una decisión que depende de dónde se va a ver el vídeo. Cómo elegir el formato antes de grabar, no después en edición.",
    seoTitle: "Vídeo horizontal vs vertical: qué formato usar | A0 Studios Madrid",
    metaDescription:
      "Vídeo horizontal vs vertical: cómo elegir el formato según la plataforma y el objetivo, y cómo grabar una sesión pensando en ambos sin perder calidad.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Casi cada semana alguien me pregunta si debería grabar en horizontal o en vertical. La pregunta está mal planteada desde el principio, porque no hay una respuesta única. Depende de dónde va a verse el vídeo, no de qué formato prefieras tú o de cuál te parezca más \"profesional\".",
      },
      {
        type: "paragraph",
        text: "Elegir mal el formato antes de grabar es uno de los errores que más material desperdicia. No es un detalle técnico de última hora, es una decisión que condiciona el encuadre, la composición y hasta cómo te mueves delante de la cámara. Y se toma antes de grabar, no en edición.",
      },
      {
        type: "image",
        src: "/blog/video-horizontal-vs-vertical-que-formato-usar/hero.webp",
        alt: "Línea de tiempo de edición de vídeo en pantalla de ordenador",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué el formato no es un detalle técnico" },
      {
        type: "paragraph",
        text: "El formato define el encuadre desde el primer segundo de grabación. En vertical, el plano es más cerrado: cara, hombros, poco margen a los lados. En horizontal, hay espacio para mostrar contexto, otra persona en plano o el entorno completo del estudio. Si decides el formato después de grabar, ya es tarde para corregir eso.",
      },
      {
        type: "paragraph",
        text: "También cambia el ritmo del mensaje. El vertical se consume en el móvil, con el pulgar a un swipe de distancia y la atención dividida. Ahí el mensaje tiene que entrar rápido. El horizontal se ve en una pantalla más grande, con más intención de quedarse, así que admite más contexto y un ritmo algo más pausado.",
      },
      {
        type: "paragraph",
        text: "Y hay una tercera razón, menos evidente: cada plataforma trata mejor el contenido nativo a su formato. Un vídeo horizontal recortado a la fuerza para Reels se nota, y un vertical estirado para YouTube también. El algoritmo no penaliza por capricho, penaliza porque el resultado se ve peor y la gente lo abandona antes.",
      },
      { type: "heading", level: 2, text: "Cómo elegir el formato correcto" },
      { type: "heading", level: 3, text: "Vertical: para el móvil, feed y stories" },
      {
        type: "paragraph",
        text: "Vertical (9:16) es el formato para Reels, TikTok, Stories y Shorts. Plano cerrado, foco en la persona, mensaje directo desde el primer segundo. Deja margen arriba y abajo del encuadre: ahí van los subtítulos y los elementos de interfaz de cada plataforma, y si el plano está demasiado ajustado se tapan la cara o el texto.",
      },
      { type: "heading", level: 3, text: "Horizontal: para pantalla grande y contexto" },
      {
        type: "paragraph",
        text: "Horizontal (16:9) sigue siendo el formato para YouTube largo, web, vídeo corporativo y entrevistas donde el entorno importa. Aquí puedes mostrar dos personas en plano, el espacio del estudio o material de apoyo sin que se sienta apretado. Es el formato que mejor comunica contexto y producción cuidada.",
      },
      { type: "heading", level: 3, text: "Cómo grabar pensando en los dos formatos a la vez" },
      {
        type: "paragraph",
        text: "En el estudio grabamos casi siempre en horizontal con margen de sobra alrededor del sujeto, pensando ya en el recorte vertical posterior. Eso significa encuadrar más abierto de lo que parece necesario y evitar que algo importante quede pegado a los bordes. Con ese margen, en edición se puede sacar un corte vertical limpio sin perder la composición.",
      },
      {
        type: "image",
        src: "/blog/video-horizontal-vs-vertical-que-formato-usar/mid.webp",
        alt: "Teléfono móvil sobre una superficie mostrando pantalla en formato vertical",
        width: 1920,
        height: 1257,
      },
      { type: "heading", level: 2, text: "Errores comunes al elegir formato" },
      {
        type: "list",
        items: [
          "Grabar siempre en horizontal \"porque es lo normal\" y perder gran parte del plano al recortar a vertical después.",
          "Encuadrar demasiado ajustado en vertical, sin margen para subtítulos ni para los elementos de interfaz de la plataforma.",
          "Subir el mismo corte, sin adaptar el encuadre, a plataformas que usan formatos distintos.",
          "Decidir el formato en edición en vez de antes de grabar, cuando ya no se puede corregir el encuadre original.",
          "Usar vertical para contenido que necesita mostrar contexto amplio, como un plano general de un evento o una entrevista a varias personas.",
          "No avisar al equipo o invitado de qué formato se va a usar, así que nadie se coloca ni se mueve pensando en el encuadre final.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Puedo grabar una sola vez y sacar horizontal y vertical del mismo material?",
        answer:
          "Sí, si se graba con margen suficiente alrededor del sujeto pensando en ambos recortes. Es lo que hacemos en la mayoría de sesiones del estudio.",
      },
      {
        type: "faq",
        question: "¿Qué formato funciona mejor para reels o TikTok?",
        answer: "Vertical, 9:16. Es el formato nativo de esas plataformas y el que mejor aprovecha la pantalla completa del móvil.",
      },
      {
        type: "faq",
        question: "¿Y para un vídeo corporativo o de web?",
        answer: "Horizontal, 16:9. Da espacio para mostrar contexto, varias personas en plano y una composición más cuidada.",
      },
      {
        type: "faq",
        question: "¿Se puede grabar en multicámara para tener ambos formatos con mejor calidad?",
        answer:
          "Sí. Con dos cámaras, una encuadrada en horizontal y otra ya pensada en vertical, se evita depender solo del recorte y el resultado es más limpio en los dos formatos.",
      },
      {
        type: "paragraph",
        text: "El formato se decide antes de encender la cámara, no en la mesa de edición. Si tienes dudas sobre qué formato necesita tu próxima pieza, escríbeme desde /#contacto y lo planeamos juntos antes de la sesión.",
      },
    ],
  },
  {
    slug: "video-pitch-inversores-como-grabarlo",
    title: "Vídeo pitch para inversores: cómo grabarlo para que se vea profesional",
    description:
      "Cómo grabar un vídeo pitch para inversores que transmita seriedad, sin sonar ensayado ni caer en los errores que hacen dudar de la seriedad del proyecto.",
    publishedAt: "2026-07-24",
    readingTime: "4 min",
    category: "Guía",
    tags: ["video pitch inversores", "founders", "producción audiovisual", "vídeo corporativo", "Madrid"],
    keyword: "video pitch para inversores",
    intent: "informacional",
    excerpt:
      "Un vídeo pitch mal grabado puede hundir una buena idea antes de la primera llamada. Cómo prepararlo, qué evitar y cómo estructurarlo para que transmita seriedad.",
    seoTitle: "Vídeo Pitch para Inversores: Cómo Grabarlo | A0 Studios Madrid",
    metaDescription:
      "Vídeo pitch para inversores: cómo grabarlo para transmitir seriedad y claridad sin sonar ensayado. Guía práctica desde nuestro estudio en Madrid.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Un pitch a inversores se juega mucho antes de entrar en la sala. Si mandas un vídeo de presentación, ese vídeo es lo primero que ve el fondo o el business angel antes de decidir si te da quince minutos de su tiempo. Y ahí no vale grabarlo con el móvil apoyado en una pila de libros, con eco de habitación vacía y la luz del techo dejándote media cara en sombra.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios grabamos bastantes vídeos de este tipo: founders que necesitan una pieza para un demo day, una ronda seed o simplemente para tener algo que mandar por email sin depender de agendar una llamada. La producción no arregla una idea floja, pero sí puede hundir una buena si se ve amateur, y eso es lo que más nos piden evitar.",
      },
      {
        type: "image",
        src: "/blog/video-pitch-inversores-como-grabarlo/hero.webp",
        alt: "Persona presentando un pitch frente a una pantalla ante una sala",
        width: 1920,
        height: 1372,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué el vídeo pitch pesa más de lo que crees" },
      {
        type: "paragraph",
        text: "Un inversor ve decenas de propuestas a la semana. Antes de leer el deck entero, muchos primero ven el vídeo, porque tarda dos minutos y da una idea rápida de si merece la pena seguir. Si el audio suena mal o la imagen está mal iluminada, la sensación que transmite es de poco cuidado, aunque el negocio detrás sea sólido y los números aguanten cualquier pregunta.",
      },
      {
        type: "paragraph",
        text: "El vídeo también hace un trabajo que el deck no puede hacer solo: te pone cara, tono y ritmo. Un inversor confía en personas, no solo en números. Cómo hablas, cómo te mueves y si transmites seguridad pesa en la decisión tanto como el tamaño del mercado o el modelo de ingresos.",
      },
      {
        type: "paragraph",
        text: "Y hay un tercer motivo, más práctico: el vídeo circula solo. Un socio del fondo se lo reenvía a otro sin necesidad de agendar nada, y ese reenvío suele decidir si tu propuesta llega al comité o se queda en la bandeja de entrada.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      {
        type: "paragraph",
        text: "No hace falta un equipo de rodaje completo para que un vídeo pitch funcione. Hace falta cuidar tres cosas: el guion, la entrega delante de cámara y el entorno donde grabas.",
      },
      { type: "heading", level: 3, text: "Guion corto y sin relleno" },
      {
        type: "paragraph",
        text: "El pitch grabado no es el pitch completo de quince minutos. Va de 90 segundos a 3 minutos como máximo. Empieza por el problema, no por quién eres: nadie necesita tu biografía en el segundo cero. Un guion de tres o cuatro bloques, problema, solución, tracción, ronda, funciona mejor que uno que intenta meterlo todo, incluidas las excepciones y los matices que sí tienen sitio en la llamada de seguimiento.",
      },
      { type: "heading", level: 3, text: "Habla a cámara, no leas" },
      {
        type: "paragraph",
        text: "Usamos teleprompter para fijar la estructura, no la palabra exacta. Leer texto palabra por palabra se nota, y se nota mal: el ritmo se vuelve plano y la mirada se queda fija en el mismo punto. Lo que funciona es tener claros los puntos y decirlos con tus palabras, con pausas naturales. Grabamos varias tomas y nos quedamos con la que suena más tuya, no con la más perfecta.",
      },
      { type: "heading", level: 3, text: "Cuida el fondo y el sonido más que la careta" },
      {
        type: "paragraph",
        text: "Un fondo neutro, con algo de profundidad pero sin distraer, funciona mejor que un logo gigante detrás. Y el audio limpio importa más que cualquier gráfico animado: si el sonido se entiende mal, el inversor apaga el vídeo a los diez segundos. Micro de solapa o de mano, sin eco de sala vacía, es la base, y merece más atención que cualquier transición o efecto de edición.",
      },
      {
        type: "image",
        src: "/blog/video-pitch-inversores-como-grabarlo/mid.webp",
        alt: "Cámara de vídeo profesional sobre trípode grabando en estudio",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "paragraph",
        text: "Los mismos fallos se repiten en la mayoría de vídeos pitch grabados por cuenta propia:",
      },
      {
        type: "list",
        items: [
          "Grabar con la ventana de fondo, que deja tu cara en sombra.",
          "Leer el pitch deck entero en voz alta encima del vídeo.",
          "Quedarse con la primera toma aunque no sea la mejor, por no repetir.",
          "Meter música de fondo que compite con la voz.",
          "Alargarse más de tres minutos porque hay que explicarlo todo.",
          "No cerrar con una llamada a la acción clara: qué ronda, cuánto y cómo contactar.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto debe durar un vídeo pitch para inversores?",
        answer:
          "Entre 90 segundos y 3 minutos. Si necesitas más tiempo para explicar el negocio, ese contenido va en el deck o en una llamada, no en el vídeo de primer contacto.",
      },
      {
        type: "faq",
        question: "¿Tengo que memorizar el guion palabra por palabra?",
        answer:
          "No, y de hecho es mejor que no lo hagas. Con teleprompter trabajamos la estructura y las ideas clave, pero la entrega suena más natural si dejas margen para decirlo con tus palabras en cada toma.",
      },
      {
        type: "faq",
        question: "¿Puedo grabarlo yo mismo con el móvil?",
        answer:
          "Puedes, pero se nota la diferencia en cuanto alguien te compara con otro founder que grabó en condiciones. Producir un vídeo pitch bien suele costar mucho menos que el riesgo de que un fondo lo descarte antes de la llamada.",
      },
      {
        type: "faq",
        question: "¿Qué pasa si somos varios cofundadores y todos queremos salir?",
        answer:
          "Funciona, pero hay que repartir bien quién dice qué para no repetir información ni alargar el vídeo. Normalmente uno lleva el hilo principal y el resto entra en momentos puntuales: tracción, producto, visión.",
      },
      {
        type: "paragraph",
        text: "Si estás preparando una ronda y necesitas un vídeo pitch que esté a la altura de lo que has construido, en A0 Studios lo grabamos en una sesión de mañana o tarde, con el guion trabajado antes de pisar el estudio y sin alargar el proceso más de la cuenta. Escríbenos desde /#contacto y lo planeamos.",
      },
    ],
  },
  {
    slug: "video-onboarding-empleados-nuevos",
    title: "Cómo grabar un vídeo de onboarding para nuevos empleados",
    description:
      "Cómo grabar un vídeo de onboarding que ordene la bienvenida a nuevos empleados, ahorre horas de RRHH repetidas y transmita cultura desde el primer día.",
    publishedAt: "2026-07-28",
    readingTime: "4 min",
    category: "Guía",
    tags: ["onboarding", "vídeo corporativo", "recursos humanos", "empleados nuevos", "Madrid"],
    keyword: "video de onboarding para empleados nuevos",
    intent: "informacional",
    excerpt:
      "Un vídeo de onboarding bien hecho ahorra horas de RRHH repetidas y hace que la bienvenida no dependa de quién esté libre esa semana. Cómo estructurarlo y grabarlo.",
    seoTitle: "Vídeo de Onboarding para Empleados | A0 Studios Madrid",
    metaDescription:
      "Vídeo de onboarding para empleados nuevos: qué contar, quién debe salir y cómo grabarlo bien en un estudio de Madrid.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "El primer día de un empleado nuevo suele ser una mezcla de bienvenida amable e información suelta: el manual en PDF que nadie termina de leer, la charla de veinte minutos que se repite con cada persona que se incorpora, y el recorrido por la oficina donde a la media hora ya no te acuerdas de la mitad de los nombres. Un vídeo de onboarding no sustituye a las personas, pero ordena la parte que sí se puede grabar una vez y reutilizar con cada incorporación.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios nos piden cada vez más este tipo de piezas: empresas que quieren dar una bienvenida consistente sin que dependa de que la persona de RRHH tenga la agenda libre esa semana. Un buen vídeo de onboarding ahorra horas de explicación repetida y hace que la primera impresión no dependa de quién esté disponible ese día en la oficina.",
      },
      {
        type: "image",
        src: "/blog/video-onboarding-empleados-nuevos/hero.webp",
        alt: "Persona sonriente en una oficina moderna el primer día de trabajo",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es un vídeo de onboarding y por qué importa" },
      {
        type: "paragraph",
        text: "Un vídeo de onboarding es una pieza pensada para alguien que ya ha firmado el contrato, no para atraer talento nuevo. Ahí está la diferencia con un vídeo de employer branding: ese busca que alguien de fuera quiera unirse, este busca que alguien que ya se ha unido entienda rápido cómo funciona la empresa, quién es quién y qué se espera de su primera semana.",
      },
      {
        type: "paragraph",
        text: "La ventaja frente a una charla en directo es que se graba una vez y sirve para todas las incorporaciones que vengan después, sin que el mensaje varíe según quién lo cuente ese día. Y frente a un manual escrito, un vídeo transmite tono, cultura y caras reales de una forma que un PDF no consigue por muy bien maquetado que esté.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Qué contar y qué dejar para el manual" },
      {
        type: "paragraph",
        text: "El vídeo debe llevar lo que un documento no transmite bien: quiénes son los responsables de cada equipo, cómo se habla dentro de la empresa, qué se valora de verdad en el día a día. Lo puramente operativo, cómo pedir vacaciones, qué herramienta usar para fichar, dónde está el botiquín, funciona mejor en un documento que se pueda consultar y buscar, no en un vídeo que hay que rebobinar.",
      },
      { type: "heading", level: 3, text: "Quién sale en cámara" },
      {
        type: "paragraph",
        text: "Un único directivo hablando ocho minutos seguidos se hace largo y se olvida rápido. Funciona mejor repartir: una intervención corta del fundador o CEO, algo breve de cada responsable de equipo presentando qué hace su área, y alguien de RRHH cerrando con lo práctico. Tres o cuatro caras distintas, cada una con quince o treinta segundos, se recuerda mejor que una sola persona con un monólogo largo.",
      },
      { type: "heading", level: 3, text: "Formato y duración" },
      {
        type: "paragraph",
        text: "Lo que mejor funciona es un vídeo modular, dividido en capítulos cortos, dos o tres minutos por bloque, en vez de una pieza única de veinte minutos que nadie termina de ver entera. Así, si cambia el responsable de un equipo, regrabas solo ese bloque sin tocar el resto del vídeo.",
      },
      {
        type: "image",
        src: "/blog/video-onboarding-empleados-nuevos/mid.webp",
        alt: "Cámara de vídeo grabando una entrevista en estudio",
        width: 1920,
        height: 1080,
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "paragraph",
        text: "Los mismos fallos aparecen una y otra vez en los vídeos de onboarding grabados sin plan previo:",
      },
      {
        type: "list",
        items: [
          "Grabar un único vídeo de veinte minutos que nadie termina de ver.",
          "Dejar que hable solo un directivo, sin ejemplos ni caras de los equipos reales.",
          "No actualizarlo cuando cambia el equipo o la oficina, así que queda desfasado en meses.",
          "Grabarlo con el móvil en una sala de reuniones con eco y mala luz.",
          "Mezclar contenido de onboarding con contenido de employer branding pensado para fuera.",
          "Meter todo el contenido operativo dentro del vídeo en lugar de dejarlo en un documento consultable.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto debe durar un vídeo de onboarding?",
        answer:
          "Entre dos y cinco minutos en total, mejor dividido en capítulos cortos de veinte o treinta segundos por bloque que en una pieza única y larga.",
      },
      {
        type: "faq",
        question: "¿Quién debe salir en el vídeo?",
        answer:
          "Una mezcla: una intervención breve del fundador o CEO, algo corto de cada responsable de equipo y alguien de RRHH cerrando con la parte práctica.",
      },
      {
        type: "faq",
        question: "¿Hay que regrabarlo entero cada vez que cambia el equipo?",
        answer:
          "No, si se graba en bloques modulares desde el principio. Solo regrabas el capítulo de la persona o el equipo que ha cambiado, sin tocar el resto.",
      },
      {
        type: "faq",
        question: "¿Es lo mismo que un vídeo de employer branding?",
        answer:
          "No. El de employer branding busca atraer talento que todavía no trabaja contigo. El de onboarding es para alguien que ya ha firmado y necesita integrarse rápido.",
      },
      {
        type: "paragraph",
        text: "Si estás pensando en dar de alta un proceso de onboarding en vídeo para tu empresa, en A0 Studios lo planteamos en bloques modulares desde el primer día de grabación, para que actualizarlo más adelante no suponga rehacer nada. Escríbenos desde /#contacto y lo vemos.",
      },
    ],
  },
  {
    slug: "video-explicativo-producto-como-grabarlo",
    title: "Vídeo explicativo de producto: cómo grabarlo sin que parezca un anuncio",
    description:
      "Cómo estructurar y grabar un vídeo explicativo de producto que resuelva dudas reales en lugar de vender a gritos, con guion, ritmo y planos que funcionan.",
    publishedAt: "2026-07-29",
    readingTime: "4 min",
    category: "Guía",
    tags: ["vídeo explicativo", "producto", "SaaS", "estudio de grabación", "Madrid"],
    keyword: "video explicativo de producto",
    intent: "informacional",
    excerpt:
      "Un vídeo explicativo de producto bien grabado convence enseñando, no vendiendo. Cómo estructurarlo, qué mostrar en pantalla y qué evitar para que no suene a anuncio.",
    seoTitle: "Vídeo explicativo de producto: cómo grabarlo | A0 Studios Madrid",
    metaDescription:
      "Cómo grabar un vídeo explicativo de producto en Madrid que enganche y no suene a anuncio: guion, ritmo, planos y errores que evitar.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Un vídeo explicativo de producto tiene un trabajo muy concreto: que alguien que no conoce tu producto entienda en dos minutos qué hace, para quién es y por qué debería importarle. No es un anuncio, aunque muchas empresas lo graban como si lo fuera, con música épica y frases vacías que no explican nada en concreto. Cuanto más se parece a un anuncio, menos confía en él quien lo está viendo por primera vez.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios nos lo piden sobre todo founders de SaaS y equipos de producto: necesitan una pieza que puedan poner en la home, en una demo comercial o en un email de onboarding, y que haga el trabajo de explicar sin que un comercial tenga que estar presente. Cuando funciona bien, ese vídeo responde preguntas antes de que las hagan y filtra a quien no encaja con el producto.",
      },
      {
        type: "image",
        src: "/blog/video-explicativo-producto-como-grabarlo/hero.webp",
        alt: "Persona grabando un vídeo explicativo de producto frente a una cámara en un espacio con estantería de fondo",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es un vídeo explicativo de producto y por qué importa" },
      {
        type: "paragraph",
        text: "Un explicativo de producto combina dos cosas que casi nunca conviven bien en un mismo vídeo: una persona explicando y una pantalla mostrando cómo funciona de verdad. La parte de cara sirve para generar confianza y marcar el ritmo; la parte de pantalla sirve para que quien mira vea el producto real, no una animación bonita que promete más de lo que hay.",
      },
      {
        type: "paragraph",
        text: "La diferencia con un vídeo puramente publicitario es el objetivo: el anuncio busca generar interés y emoción en pocos segundos, el explicativo busca resolver dudas concretas de alguien que ya está considerando comprar o probar el producto. Si el espectador termina el vídeo sin saber exactamente qué hace el producto, ha fallado, por muy bonito que sea. Y esa métrica de éxito es distinta a la de un anuncio: no importa cuánta gente lo comparte, importa cuánta gente entiende el producto después de verlo y cuánta deja de tener dudas antes de escribir a soporte o pedir una demo comercial.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "El guion: problema, solución, demo" },
      {
        type: "paragraph",
        text: "La estructura que mejor funciona empieza nombrando un problema concreto que la audiencia reconozca en los primeros diez segundos, no una frase genérica de las que sirven para cualquier producto. Después se presenta el producto como respuesta directa a ese problema, y el resto del tiempo se dedica a enseñarlo funcionando, no a describirlo con adjetivos. Menos \"revolucionario\" y \"innovador\", más \"así se hace esto en tres pasos\".",
      },
      { type: "heading", level: 3, text: "Pantalla y cara: cuándo usar cada una" },
      {
        type: "paragraph",
        text: "La cara funciona mejor al principio, para presentar el problema y generar cercanía, y al final, para el cierre y la llamada a la acción. La pantalla debe llevar el peso de la parte central, donde se demuestra el producto: un flujo real, con datos reales o de ejemplo verosímiles, sin rellenar formularios en directo ni buscar un botón que no se encuentra a la primera. Eso se graba aparte y con calma, no en una sola toma continua. Grabar la pantalla en varias tomas cortas, una por cada paso del flujo, permite montar después la que quede más limpia de cada una sin tener que repetir la demo entera si falla un solo paso.",
      },
      { type: "heading", level: 3, text: "Ritmo y duración" },
      {
        type: "paragraph",
        text: "Entre 60 y 120 segundos suele ser el punto justo para un explicativo de producto pensado para la home o para una campaña; una demo más completa para un email de ventas puede llegar a los tres o cuatro minutos, pero rara vez tiene sentido superar eso sin cortar en capítulos. El ritmo se sostiene cortando cada cuatro o seis segundos entre plano de cara, pantalla y algún recurso de apoyo, para que la vista nunca se quede fija demasiado tiempo en el mismo encuadre.",
      },
      {
        type: "image",
        src: "/blog/video-explicativo-producto-como-grabarlo/mid.webp",
        alt: "Pantalla de ordenador en negro preparada para grabar una demo de producto",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "paragraph",
        text: "Los mismos fallos se repiten en la mayoría de explicativos que no funcionan:",
      },
      {
        type: "list",
        items: [
          "Empezar con la historia de la empresa en vez de con el problema que resuelve.",
          "Grabar la pantalla en una sola toma continua, sin poder cortar los errores o dudas al navegar.",
          "Usar música de anuncio que compite con la voz en vez de acompañarla.",
          "Explicar funciones que casi nadie usa en vez de las tres que de verdad importan.",
          "No incluir ninguna llamada a la acción clara al final, dejando el vídeo sin destino.",
          "Grabar la voz con el micrófono del portátil mientras se enseña la pantalla en pantalla completa.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto debe durar un vídeo explicativo de producto?",
        answer:
          "Entre 60 y 120 segundos para la home o una campaña. Una demo más completa para ventas puede llegar a tres o cuatro minutos si se divide en bloques claros.",
      },
      {
        type: "faq",
        question: "¿Hace falta salir en cámara o basta con grabar la pantalla?",
        answer:
          "Basta con la pantalla si el producto se explica solo, pero una cara al principio y al final ayuda a generar confianza y deja claro quién habla.",
      },
      {
        type: "faq",
        question: "¿Se puede grabar la pantalla y la cara el mismo día?",
        answer:
          "Sí, pero por separado: primero la parte de cara en el estudio con buena luz y audio, y luego la captura de pantalla con calma, sin la presión de estar hablando a la vez.",
      },
      {
        type: "faq",
        question: "¿Qué diferencia hay con un vídeo publicitario del producto?",
        answer:
          "El publicitario busca generar interés en pocos segundos con emoción. El explicativo busca resolver dudas concretas de alguien que ya está considerando el producto, enseñando cómo funciona de verdad.",
      },
      {
        type: "paragraph",
        text: "Si tienes un producto que explicar y quieres que el vídeo resuelva dudas en vez de sonar a anuncio, en A0 Studios grabamos la parte de cara y montamos la de pantalla en el mismo flujo de edición. Escríbenos desde /#contacto y lo planteamos.",
      },
    ],
  },
  {
    slug: "video-anuncios-pago-vs-contenido-organico",
    title: "Vídeo para anuncios de pago: qué cambia frente al contenido orgánico",
    description:
      "Cómo grabar vídeo para anuncios de pago en Meta y TikTok, qué diferencias reales hay frente al contenido orgánico y qué errores lo hunden antes de arrancar.",
    publishedAt: "2026-07-30",
    readingTime: "5 min",
    category: "Guía",
    tags: ["vídeo publicitario", "anuncios de pago", "Meta Ads", "TikTok Ads", "estudio de grabación", "Madrid"],
    keyword: "video para anuncios de pago",
    intent: "informacional",
    excerpt:
      "Un anuncio grabado como si fuera contenido orgánico rinde mejor que uno con pinta de spot. Qué cambia realmente entre grabar para pauta y grabar para feed.",
    seoTitle: "Vídeo para anuncios de pago: qué cambia | A0 Studios Madrid",
    metaDescription:
      "Cómo grabar vídeo para anuncios de pago (Meta y TikTok) que no parezca un anuncio genérico y qué cambia frente al contenido orgánico.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Cuando un equipo de marketing nos pide grabar vídeo para pauta, casi siempre llega con la misma duda: ¿esto se graba distinto a un reel normal? La respuesta corta es que sí, pero no en la forma en que la mayoría espera. No hace falta más producción ni un plató más grande. Hace falta pensar distinto desde el guion, porque el objetivo no es el mismo y el algoritmo tampoco premia lo mismo.",
      },
      {
        type: "paragraph",
        text: "El contenido orgánico compite por retención dentro de un feed que la persona ya está consumiendo por gusto. El anuncio compite por sobrevivir los primeros dos segundos antes de que alguien haga scroll sobre algo que sabe, aunque sea a nivel inconsciente, que es un anuncio. Esa diferencia de contexto cambia el guion, el ritmo y hasta la forma de grabar, aunque el equipo técnico sea idéntico.",
      },
      {
        type: "image",
        src: "/blog/video-anuncios-pago-vs-contenido-organico/hero.webp",
        alt: "Persona grabando vídeo vertical para redes sociales con smartphone en estudio",
        width: 1920,
        height: 1013,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué un anuncio no se graba como un vídeo orgánico" },
      {
        type: "paragraph",
        text: "Un vídeo orgánico se puede permitir un arranque suave, porque quien lo ve ya sigue la cuenta o llegó por una búsqueda. Un anuncio no tiene ese margen: aparece entre contenido que nadie pidió ver, compitiendo con perfiles que la persona sí eligió seguir. Si los primeros dos segundos no dan una razón para quedarse, el resto del vídeo no importa, por bien grabado que esté.",
      },
      {
        type: "paragraph",
        text: "Eso no significa que el anuncio tenga que parecer un anuncio. De hecho, el patrón que mejor funciona en Meta y TikTok es el contrario: cuanto más se parece a algo que la persona grabaría o vería de forma natural en su feed, menos genera rechazo. Un plano fijo, testimonio o demo grabados con estética de contenido orgánico suele rendir mejor que un spot con música de producción y voz en off corporativa.",
      },
      {
        type: "paragraph",
        text: "Esto es justo lo que en A0 Studios llamamos vídeo con estética nativa: se graba en el mismo ático, con la misma cámara y la misma luz que un reel cualquiera, pero el guion está pensado para pauta desde el primer segundo, no adaptado después con un corte de audio.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "El hook: los dos primeros segundos" },
      {
        type: "paragraph",
        text: "El hook no es una frase de bienvenida ni el logo de la marca. Es una imagen, una pregunta o una afirmación que interrumpe el scroll de alguien que no te conoce. Funciona mejor cuando nombra directamente el problema o la duda que ya tiene la audiencia objetivo, no cuando presenta la empresa. Grabamos siempre varias versiones del hook en la misma sesión, porque es la parte que más se testea y la que decide si el resto del vídeo se llega a ver.",
      },
      { type: "heading", level: 3, text: "Formatos que hacen falta según la plataforma" },
      {
        type: "paragraph",
        text: "Meta y TikTok no piden el mismo formato exacto, aunque ambos priorizan vertical 9:16. TikTok tolera peor la estética corporativa y premia el ritmo rápido con cortes cada dos o tres segundos. Meta acepta mejor un ritmo algo más pausado, sobre todo en formatos de testimonio o demo de producto. En una misma sesión grabamos variantes de plano y ritmo para poder montar versiones distintas por plataforma sin repetir la grabación.",
      },
      { type: "heading", level: 3, text: "Cuántas variantes grabar por sesión" },
      {
        type: "paragraph",
        text: "Para una campaña con presupuesto real conviene salir de la sesión con entre cuatro y seis variantes de anuncio: distintos hooks, algún testimonio, alguna demo y alguna pieza más directa de oferta. No hace falta grabar seis guiones distintos desde cero, basta con variar el arranque y el CTA sobre el mismo cuerpo central. Eso da margen para testear sin depender de una sola pieza que puede fatigarse en días si el presupuesto diario es alto.",
      },
      {
        type: "image",
        src: "/blog/video-anuncios-pago-vs-contenido-organico/mid.webp",
        alt: "Persona grabando vídeo vertical con cámara para anuncios en redes sociales",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "paragraph",
        text: "Los mismos fallos aparecen una y otra vez en anuncios que no rinden, aunque estén bien grabados técnicamente:",
      },
      {
        type: "list",
        items: [
          "Empezar con el logo o el nombre de la empresa en vez de con el problema o el hook.",
          "Usar el mismo vídeo orgánico tal cual, sin adaptar el arranque a un contexto de scroll frío.",
          "Grabar una sola variante y esperar que aguante semanas de pauta sin fatigarse.",
          "Meter música de librería genérica que suena a anuncio de televisión.",
          "Dejar el CTA solo en texto superpuesto sin decirlo también en voz.",
          "Grabar horizontal cuando la campaña se va a servir casi entera en feed vertical.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Un anuncio necesita más producción que un vídeo orgánico?",
        answer:
          "No necesariamente. Lo que cambia es el guion y el número de variantes, no la calidad técnica. Muchas veces un anuncio con estética nativa rinde mejor que uno con producción muy cuidada pero con pinta de spot.",
      },
      {
        type: "faq",
        question: "¿Cuántas variantes de anuncio hay que grabar por campaña?",
        answer:
          "Entre cuatro y seis suele ser suficiente para empezar a testear: distintos hooks y algún cambio de formato (testimonio, demo, directo) sobre el mismo cuerpo central del mensaje.",
      },
      {
        type: "faq",
        question: "¿Sirve el mismo vídeo para Meta y para TikTok?",
        answer:
          "El cuerpo del vídeo puede compartirse, pero el ritmo de corte y el tono suelen rendir mejor si se ajustan por plataforma: TikTok tolera peor la estética corporativa que Meta.",
      },
      {
        type: "faq",
        question: "¿Por qué un anuncio con estética casera funciona mejor que uno muy producido?",
        answer:
          "Porque genera menos rechazo al aparecer en un feed de contenido que la persona no pidió ver. Cuanto más se parece a algo que vería de forma natural, menos activa el filtro mental de \"esto es publicidad\".",
      },
      {
        type: "paragraph",
        text: "Si tienes una campaña en marcha y necesitas variantes de vídeo que aguanten la pauta sin fatigarse en una semana, en A0 Studios grabamos varias versiones en la misma sesión pensadas desde el guion para Meta y TikTok. Escríbenos desde /#contacto y lo planteamos.",
      },
    ],
  },
  {
    slug: "roi-contenido-video-marca",
    title: "Cómo calcular el ROI de grabar contenido en vídeo para tu marca",
    description:
      "Cómo medir si el contenido en vídeo está compensando la inversión: qué contar como coste, qué contar como retorno y en qué plazo empieza a verse.",
    publishedAt: "2026-07-31",
    readingTime: "5 min",
    category: "Guía",
    tags: ["contenido en vídeo", "ROI", "marca personal", "estrategia de contenido", "Madrid"],
    keyword: "roi de grabar contenido en video",
    intent: "informacional",
    excerpt:
      "Grabar contenido es una inversión, no un gasto de marketing suelto. Así se calcula si de verdad está compensando y qué mirar antes de decidir cuánto meter cada mes.",
    seoTitle: "Cómo calcular el ROI del vídeo | A0 Studios Madrid",
    metaDescription:
      "Cómo calcular el ROI de grabar contenido en vídeo: qué contar como coste real, qué contar como retorno y en qué plazo se empieza a notar.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Casi todos los founders y equipos de marketing que llegan a A0 Studios hacen la misma pregunta en algún momento, aunque no siempre en voz alta: ¿esto está compensando? Han grabado unas cuantas sesiones, tienen contenido publicado, y aun así no saben si el dinero y el tiempo invertidos están generando algo o si simplemente están alimentando un feed que se ve bien pero no mueve nada.",
      },
      {
        type: "paragraph",
        text: "La razón por la que cuesta responder no es falta de datos. Es que la mayoría mide el vídeo con métricas de vanidad (vistas, likes, alcance) cuando el ROI real se mide en otro sitio: leads, reuniones agendadas, ventas cerradas o tiempo que ya no hay que pagarle a una agencia. Si no se define eso desde el principio, cualquier cálculo de ROI es una sensación disfrazada de número.",
      },
      {
        type: "image",
        src: "/blog/roi-contenido-video-marca/hero.webp",
        alt: "Panel de analítica de marketing abierto en un portátil sobre una mesa",
        width: 1920,
        height: 1368,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué significa el ROI cuando hablamos de contenido en vídeo" },
      {
        type: "paragraph",
        text: "El ROI de contenido no es distinto en la fórmula al ROI de cualquier otra inversión: lo que has ganado menos lo que has gastado, dividido entre lo que has gastado. Lo que cambia es que en vídeo la parte de \"lo que has ganado\" tarda más en aparecer y es más fácil confundirla con ruido. Un reel puede tener buen alcance y cero impacto real en el negocio. Otro puede pasar casi desapercibido y traer un cliente que paga durante un año.",
      },
      {
        type: "paragraph",
        text: "Por eso el primer paso no es grabar más, es decidir qué vas a considerar retorno antes de encender la cámara. Si vendes servicios, probablemente sea leads cualificados o reuniones agendadas. Si vendes producto, ventas directas atribuibles. Si es marca personal sin venta directa todavía, puede ser autoridad medible: menciones, invitaciones a hablar, oportunidades que llegan solas. Sin esa definición previa, no hay cálculo posible, solo intuición.",
      },
      { type: "heading", level: 2, text: "Cómo se calcula bien" },
      { type: "heading", level: 3, text: "Suma el coste real, no solo el precio de la sesión" },
      {
        type: "paragraph",
        text: "El coste de una sesión de grabación no es solo lo que pagas por el estudio o el equipo. Incluye tu tiempo de preparación, el tiempo de quien sale delante de cámara, la edición si no va incluida y el tiempo de publicar y responder cuando el contenido empieza a moverse. Muchas veces el ROI parece malo simplemente porque solo se ha contado la factura de la sesión, no el coste total de sacar la pieza a la calle.",
      },
      { type: "heading", level: 3, text: "Define qué cuenta como retorno antes de grabar" },
      {
        type: "paragraph",
        text: "Etiqueta el origen de cada lead o cliente que llega mencionando un vídeo, un reel o el podcast. No hace falta un sistema complejo: una pregunta en el formulario de contacto o en la primera llamada (\"¿cómo nos conociste?\") ya te da la trazabilidad mínima. Sin esa etiqueta, el contenido que sí está generando negocio se pierde entre el resto y parece que nada funciona.",
      },
      { type: "heading", level: 3, text: "Dale un plazo razonable, no midas a la semana" },
      {
        type: "paragraph",
        text: "El vídeo compone. Un contenido publicado hace tres meses puede seguir trayendo tráfico y leads hoy, y eso no aparece si solo miras la semana en la que se publicó. Un plazo razonable para juzgar si una estrategia de contenido está funcionando es de tres a seis meses de publicación constante, no de una sesión suelta comparada contra el gasto de ese mismo mes.",
      },
      {
        type: "image",
        src: "/blog/roi-contenido-video-marca/mid.webp",
        alt: "Editor de vídeo revisando una línea de tiempo en la pantalla",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes al medir el ROI del vídeo" },
      {
        type: "list",
        items: [
          "Mirar vistas y likes en lugar de leads, reuniones o ventas atribuibles.",
          "Comparar el coste de producción contra el de la pauta pagada sin contar el tiempo propio invertido.",
          "No preguntar nunca de dónde vino el cliente, así que ningún vídeo se lleva el mérito.",
          "Juzgar el resultado a los siete días de publicar en vez de a los tres o seis meses.",
          "Dejar de repetir el formato que sí funcionó porque nadie hizo seguimiento de cuál era.",
          "Tratar cada pieza como un evento aislado en lugar de como parte de un sistema que se acumula.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto tiempo hay que esperar para ver ROI en contenido de vídeo?",
        answer:
          "Con publicación constante, entre tres y seis meses suele ser suficiente para empezar a ver una tendencia clara. Antes de eso hay señales, pero es pronto para sacar conclusiones firmes.",
      },
      {
        type: "faq",
        question: "¿Qué hago si no tengo forma de saber de dónde viene un cliente?",
        answer:
          "Añade una pregunta simple en el formulario de contacto o en la primera llamada: cómo te conoció. Es la trazabilidad mínima y cuesta cero implementarla.",
      },
      {
        type: "faq",
        question: "¿El ROI del vídeo se calcula igual si no vendo directamente por redes?",
        answer:
          "La fórmula es la misma, pero el retorno cambia de forma: en vez de ventas directas, cuentas autoridad medible, menciones, invitaciones o leads que llegan ya conociéndote.",
      },
      {
        type: "faq",
        question: "¿Vale la pena grabar si de momento no puedo medir bien el retorno?",
        answer:
          "Sí, pero con la condición de montar la trazabilidad cuanto antes. Grabar sin medir no es un problema del vídeo, es un problema de sistema de seguimiento que conviene resolver pronto.",
      },
      {
        type: "paragraph",
        text: "Si estás decidiendo cuánto invertir en contenido este trimestre y quieres montar algo que sí puedas medir desde el primer mes, en A0 Studios te ayudamos a definir qué grabar y cómo hacer seguimiento del resultado. Escríbenos desde /#contacto y lo hablamos.",
      },
    ],
  },
  {
    slug: "que-es-el-b-roll-video-marca",
    title: "Qué es el b-roll y por qué tu vídeo de marca lo necesita",
    description:
      "Qué es el b-roll, por qué separa un vídeo plano de uno que engancha y cómo planificarlo antes de una sesión de grabación de contenido de marca.",
    publishedAt: "2026-08-03",
    readingTime: "5 min",
    category: "Guía",
    tags: ["b-roll", "producción de vídeo", "contenido de marca", "estudio de grabación", "Madrid"],
    keyword: "que es el b-roll",
    intent: "informacional",
    excerpt:
      "El b-roll es lo que separa un vídeo plano de uno que engancha. Qué es, cuándo grabarlo y cómo lo integramos en cada sesión de A0 Studios.",
    seoTitle: "Qué es el B-roll y por qué lo necesitas | A0 Studios Madrid",
    metaDescription:
      "El b-roll es el material de apoyo que hace que tu vídeo de marca se vea profesional. Qué es, cuándo grabarlo y cómo lo usamos en A0 Studios.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Casi todos los founders y marcas que graban con nosotros por primera vez piden lo mismo: un vídeo donde alguien hable a cámara. Y ahí se quedan, porque nadie les ha explicado que un vídeo entero de plano fijo a una persona hablando cansa a los treinta segundos, por muy bueno que sea el contenido. Lo que sostiene la atención no es solo la voz, es lo que se ve mientras esa voz habla.",
      },
      {
        type: "paragraph",
        text: "Eso es el b-roll: el material de apoyo que se intercala con el plano principal para dar contexto, ritmo y respiro visual. Manos escribiendo, un detalle del espacio, un producto de cerca, una reacción de alguien en la sala. No es relleno, es lo que hace que el vídeo se vea producido y no grabado con el móvil apoyado en una pila de libros.",
      },
      {
        type: "image",
        src: "/blog/que-es-el-b-roll-video-marca/hero.webp",
        alt: "Persona sujetando una cámara réflex negra para grabar contenido",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es el b-roll y por qué importa" },
      {
        type: "paragraph",
        text: "El término viene del cine y la televisión, donde el \"a-roll\" es el material principal (la entrevista, la escena central) y el \"b-roll\" es todo lo que se graba alrededor para poder editar sin depender solo de ese plano fijo. En contenido de marca funciona igual: el a-roll es la persona hablando a cámara, y el b-roll es lo que el editor usa para cortar, ocultar un jump cut, ilustrar lo que se está diciendo o simplemente cambiar el ritmo visual cada pocos segundos.",
      },
      {
        type: "paragraph",
        text: "Sin b-roll, cualquier corte de edición se nota, porque saltas de un plano de la cara a otro plano de la misma cara en un ángulo casi idéntico. Con b-roll, ese corte queda oculto detrás de una imagen que refuerza lo que se está contando: si hablas de tu equipo, cortas a gente trabajando; si hablas de un producto, cortas a un detalle del producto. El espectador no nota la edición, solo sigue la historia.",
      },
      {
        type: "paragraph",
        text: "También es lo que permite sacar más piezas de una sola sesión. Un vídeo largo con buen b-roll da clips cortos para redes sin que se note que vienen del mismo bloque de grabación, porque cada clip puede apoyarse en un plano distinto en vez de repetir siempre la misma cara en el mismo ángulo.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Planifica el b-roll antes de la sesión" },
      {
        type: "paragraph",
        text: "El error más común es dejarlo para el final, cuando ya no queda tiempo. Antes de grabar, repasa el guion o los puntos que vas a tocar y anota qué imagen de apoyo pega con cada uno: si mencionas el equipo, necesitas planos del equipo trabajando; si mencionas un proceso, necesitas planos de ese proceso ocurriendo. Diez minutos de planificación ahorran media hora de improvisar delante de la cámara buscando qué grabar.",
      },
      { type: "heading", level: 3, text: "Varía planos, distancias y ritmo" },
      {
        type: "paragraph",
        text: "Un b-roll aburre igual que un plano fijo si todos los planos son iguales. Alterna distancias (general, medio, detalle), alterna movimiento (estático, paneo suave, un pequeño zoom) y alterna sujeto (personas, objetos, el espacio). En una sesión de una hora, con 15-20 planos de b-roll variados suele haber material de sobra para montar un vídeo de tres o cuatro minutos sin repetir imagen.",
      },
      { type: "heading", level: 3, text: "Graba de más, no de menos" },
      {
        type: "paragraph",
        text: "El b-roll es barato de grabar y caro de echar en falta en edición. Cada plano dura pocos segundos en el montaje final, así que graba cada toma entre cinco y diez segundos, más de lo que crees que vas a necesitar. En DaVinci Resolve o CapCut siempre es más fácil recortar un clip largo que estirar uno que se quedó corto.",
      },
      {
        type: "image",
        src: "/blog/que-es-el-b-roll-video-marca/mid.webp",
        alt: "Línea de tiempo de edición de vídeo en pantalla",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes con el b-roll" },
      {
        type: "list",
        items: [
          "Grabarlo al final de la sesión con prisa, cuando ya no hay luz ni energía para hacerlo bien.",
          "Repetir siempre el mismo tipo de plano (manos en teclado) en cada vídeo hasta que se vuelve una muletilla.",
          "Grabar tomas demasiado cortas que luego no dan tiempo a usar en el montaje.",
          "No relacionar el b-roll con lo que se está diciendo, así que el espectador nota el desajuste.",
          "Usar banco de imágenes genérico en vez de b-roll propio, lo que resta autenticidad a contenido de marca.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto b-roll necesito para un vídeo de tres minutos?",
        answer:
          "Como referencia, entre 15 y 20 planos variados de cinco a diez segundos cada uno suelen ser suficientes para cubrir un vídeo de tres a cuatro minutos sin repetir imagen.",
      },
      {
        type: "faq",
        question: "¿El b-roll se graba con la misma cámara que el plano principal?",
        answer:
          "No hace falta. Muchas marcas graban el plano principal con una cámara fija tipo Sony A7 y el b-roll con una segunda cámara o incluso el móvil, siempre que la calidad de imagen sea consistente.",
      },
      {
        type: "faq",
        question: "¿Puedo usar banco de imágenes en vez de grabar mi propio b-roll?",
        answer:
          "Puedes, pero pierde autenticidad. El b-roll propio (tu equipo, tu espacio, tu producto) refuerza la marca; el banco de imágenes genérico se nota y resta credibilidad.",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo de sesión hay que dedicar solo a grabar b-roll?",
        answer:
          "Para una sesión de una hora centrada en un vídeo principal, reservar entre 15 y 20 minutos solo para b-roll suele ser suficiente si vienes con la lista de planos ya pensada.",
      },
      {
        type: "paragraph",
        text: "Si vas a grabar contenido de marca y quieres que el resultado se note producido, no improvisado, en A0 Studios planificamos el b-roll como parte de la sesión, no como un añadido de última hora. Escríbenos desde /#contacto y lo montamos juntos.",
      },
    ],
  },
  {
    slug: "aftermovie-evento-corporativo-como-se-produce",
    title: "Qué es un aftermovie y cómo se produce para un evento corporativo",
    description:
      "Qué diferencia un aftermovie de la cobertura de un evento, cómo se planifica la grabación y qué hace que un aftermovie funcione en redes.",
    publishedAt: "2026-08-04",
    readingTime: "4 min",
    category: "Guía",
    tags: ["aftermovie", "vídeo eventos", "producción audiovisual", "eventos corporativos", "Madrid"],
    keyword: "aftermovie evento corporativo",
    intent: "informacional",
    excerpt:
      "El aftermovie es la pieza que resume tu evento en menos de dos minutos de energía. Te contamos cómo se planifica la grabación y el montaje para que funcione.",
    seoTitle: "Aftermovie de evento: cómo se produce | A0 Studios Madrid",
    metaDescription:
      "Qué es un aftermovie, en qué se diferencia de la cobertura de un evento y cómo se planifica la grabación, la música y el montaje para que funcione en redes.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Un evento corporativo dura unas horas. La sensación de que fue algo importante tiene que durar mucho más, y ahí es donde entra el aftermovie.",
      },
      {
        type: "paragraph",
        text: "Un aftermovie es un vídeo corto, editado a ritmo de música, que resume lo mejor del evento en menos de dos minutos. No es la cobertura completa ni el resumen de la ponencia principal: es la pieza que enseñas a quien no estuvo para que sienta que se lo perdió, y que enseñas al año siguiente para vender la próxima edición.",
      },
      {
        type: "image",
        src: "/blog/aftermovie-evento-corporativo-como-se-produce/hero.webp",
        alt: "Público asistiendo a un evento corporativo en un auditorio",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es un aftermovie y en qué se diferencia de la cobertura del evento" },
      {
        type: "paragraph",
        text: "En A0 Studios grabamos coberturas de eventos corporativos completas: ponencias enteras, entrevistas, streaming en directo. El aftermovie es otra cosa. No busca informar, busca transmitir energía. Coge los mejores segundos del día — la sala llenándose, el aplauso al ponente, la gente hablando entre pausas, el momento en que se apagan las luces para empezar — y los monta en una pieza corta pensada para redes.",
      },
      {
        type: "paragraph",
        text: "La diferencia se nota en el objetivo. La cobertura sirve para documentar y para quien no pudo asistir a una charla concreta. El aftermovie sirve para vender la marca del evento: a patrocinadores, a la próxima edición, a quien decide el presupuesto del año que viene. En eventos con formato tipo congreso o feria, como los que se organizan en recintos como IFEMA, el aftermovie suele ser la pieza que más se comparte después, por encima de cualquier ponencia suelta.",
      },
      { type: "heading", level: 2, text: "Cómo se produce un aftermovie que funcione" },
      { type: "heading", level: 3, text: "Grabación multicámara del día" },
      {
        type: "paragraph",
        text: "Un aftermovie se construye con planos variados, no con la grabación fija de una cámara al fondo de la sala. Solemos combinar una cámara fija en escenario, una cámara en mano para movernos entre el público y planos de detalle: manos aplaudiendo, tarjetas cambiando de mano, cafés en la pausa. Sin ese material variado, el montaje se queda corto de opciones y todos los aftermovies acaban pareciendo el mismo vídeo. Por eso preparamos antes una lista de planos con el organizador: qué momentos no se pueden perder y en qué orden probable van a pasar durante el día.",
      },
      { type: "heading", level: 3, text: "Selección de música y ritmo del montaje" },
      {
        type: "paragraph",
        text: "La música manda en un aftermovie. El corte de cada plano va al compás de la canción, no al revés. Elegimos el tema antes de montar, no después, porque el ritmo condiciona qué planos se usan y cuánto dura cada uno. Trabajamos con librerías de licencia clara para evitar que el vídeo acabe silenciado o retirado en redes por derechos de autor. Un tema demasiado lento hace que un evento con energía parezca aburrido en pantalla; uno demasiado rápido no deja respirar los planos de escenario.",
      },
      { type: "heading", level: 3, text: "Tiempos de entrega" },
      {
        type: "paragraph",
        text: "El aftermovie pierde fuerza cuanto más tarda en salir. Lo ideal es entregarlo entre tres y cinco días después del evento, mientras todavía hay conversación activa en redes sobre lo que pasó. En eventos grandes, a veces se pide además un adelanto de treinta segundos en las primeras veinticuatro horas, y el aftermovie definitivo unos días después con material ya seleccionado en DaVinci Resolve.",
      },
      {
        type: "image",
        src: "/blog/aftermovie-evento-corporativo-como-se-produce/mid.webp",
        alt: "Línea de tiempo de edición de vídeo en pantalla",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes al encargar un aftermovie" },
      {
        type: "list",
        items: [
          "No definir antes qué momentos son imprescindibles (apertura, ponente estrella, cierre) y dejar que el equipo improvise sobre la marcha.",
          "Pedir un aftermovie de más de tres minutos: pierde el objetivo de pieza corta y nadie lo termina de ver.",
          "Usar música sin licencia clara, lo que puede acabar en el vídeo silenciado o retirado en redes.",
          "No avisar al equipo de grabación de los momentos de networking o pausas, que suelen dar los planos más humanos del vídeo.",
          "Encargar el montaje semanas después del evento, cuando ya no hay conversación activa alrededor.",
          "Centrar todo el material en el escenario y no dejar margen para grabar reacciones del público.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto debe durar un aftermovie de un evento corporativo?",
        answer:
          "Entre 60 y 120 segundos es el rango que mejor funciona. Suficiente para transmitir energía sin perder la atención de quien lo ve en redes.",
      },
      {
        type: "faq",
        question: "¿Cuánto se tarda en producir un aftermovie?",
        answer:
          "Entre tres y cinco días tras el evento, si el material está bien organizado. Para entregas más rápidas se puede montar un adelanto de 24-48 horas con menos planos.",
      },
      {
        type: "faq",
        question: "¿Hace falta grabar con dron?",
        answer:
          "No es imprescindible, pero ayuda en eventos grandes o con espacios exteriores. Para eventos en sala, cámaras en mano y planos de detalle suelen aportar más que un plano aéreo.",
      },
      {
        type: "faq",
        question: "¿Un aftermovie tiene sentido para un evento interno, no solo para congresos grandes?",
        answer:
          "Sí. Sirve igual para un evento de empresa, un lanzamiento interno o una convención de equipo: el objetivo es el mismo, dejar constancia de que aquello importó.",
      },
      {
        type: "paragraph",
        text: "Si organizas un evento y quieres que quede algo más que fotos sueltas, en A0 Studios planificamos el aftermovie como parte de la cobertura, no como un extra de última hora. Escríbenos desde /#contacto y lo preparamos juntos.",
      },
    ],
  },
  {
    slug: "podcast-invitados-remoto-estudio-videollamada",
    title: "Podcast con invitados en remoto: cómo grabarlo bien combinando estudio y videollamada",
    description:
      "Cómo grabar un episodio con un invitado conectado por videollamada sin que se note la diferencia frente al estudio: herramientas, encuadre y montaje.",
    publishedAt: "2026-08-06",
    readingTime: "4 min",
    category: "Guía",
    tags: ["podcast", "estudio de grabación", "Madrid", "producción audiovisual", "entrevistas"],
    keyword: "podcast con invitados en remoto",
    intent: "informacional",
    excerpt:
      "Grabar un podcast con un invitado conectado por videollamada no tiene que sonar peor que uno grabado en persona. Así lo montamos en A0 Studios para que no se note la diferencia.",
    seoTitle: "Podcast con invitado remoto: cómo grabarlo bien | A0 Studios Madrid",
    metaDescription:
      "Podcast con invitados en remoto: cómo grabar audio y vídeo para que no se note la diferencia con el estudio. Herramientas, encuadre y montaje.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Cada vez es más habitual que un invitado de podcast no pueda venir físicamente al estudio: vive en otra ciudad, tiene la agenda apretada o simplemente prefiere conectarse desde su despacho. Eso no significa que el episodio tenga que sonar peor. Significa que hay que montarlo distinto.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios grabamos episodios con invitado presencial casi cada semana, pero cada vez llegan más peticiones para combinar a alguien en el estudio con alguien conectado por videollamada. Funciona bien si se prepara con el flujo correcto de audio y vídeo. Si se improvisa, se nota enseguida: eco, cortes, un invitado que suena a llamada de teléfono al lado de otro con calidad de estudio.",
      },
      {
        type: "image",
        src: "/blog/podcast-invitados-remoto-estudio-videollamada/hero.webp",
        alt: "Cámara, micrófono y pantalla de edición en una configuración de grabación de podcast",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué un invitado remoto cambia cómo se graba el episodio" },
      {
        type: "paragraph",
        text: "En el estudio, el micrófono capta la voz a pocos centímetros, sin pérdida ni compresión. En una videollamada, el audio del invitado viaja por internet, se comprime para no cortarse y llega procesado por el propio sistema de la plataforma. Si grabas directamente lo que sale de Zoom o Meet, esa diferencia de calidad se escucha durante todo el episodio, y el oyente la nota aunque no sepa explicar por qué.",
      },
      {
        type: "paragraph",
        text: "Con el vídeo pasa algo parecido pero en lo visual: el invitado aparece dentro de una pantalla, dentro del plano del estudio. Si esa pantalla está mal colocada, mal iluminada o descuadrada, el resultado parece una videollamada grabada con el móvil, no un episodio de podcast cuidado. La solución no es complicada, pero hay que decidirla antes de darle a grabar, no en el montaje.",
      },
      { type: "heading", level: 2, text: "Cómo grabar un podcast con invitado remoto sin que se note" },
      { type: "heading", level: 3, text: "Graba el audio remoto en local, no por la llamada" },
      {
        type: "paragraph",
        text: "Las plataformas pensadas para esto, como Riverside o Zencastr, graban el audio y el vídeo de cada participante en local, en su propio dispositivo, y solo usan la llamada para que os veáis y os escuchéis mientras habláis. Al terminar la grabación, cada pista se sube en calidad completa y se sincroniza automáticamente con el resto. El resultado es una pista de calidad de estudio, aunque el invitado grabara desde su portátil en casa con un micrófono sencillo.",
      },
      { type: "heading", level: 3, text: "Cuida el encuadre de la pantalla con el invitado" },
      {
        type: "paragraph",
        text: "Coloca la pantalla con la imagen del invitado justo al lado del objetivo de la cámara, a la altura de los ojos de quien presenta. Así, cuando mira a la pantalla para hablarle, la mirada queda casi alineada con la cámara y no se nota que está mirando a un lado. Baja el brillo de la pantalla para que no queme la imagen ni proyecte un reflejo azulado sobre la cara de quien presenta, y si el plano lo permite, dedica una segunda cámara solo a mostrar la pantalla completa como recurso extra de montaje.",
      },
      { type: "heading", level: 3, text: "Sincroniza y equilibra niveles en el montaje" },
      {
        type: "paragraph",
        text: "Una vez grabadas las pistas por separado, hay que alinearlas en la línea de tiempo antes de nada, porque casi nunca arrancan en el mismo punto exacto. Después toca igualar niveles: la pista del estudio suele salir más rica y con más cuerpo que la del invitado remoto, grabada con auriculares o un micrófono de gama más sencilla. Un poco de compresión, ecualización y reducción de ruido en DaVinci Resolve o en el editor que uses ayuda a que las dos voces convivan en el mismo episodio sin que una suene a estudio y otra a llamada de trabajo.",
      },
      {
        type: "image",
        src: "/blog/podcast-invitados-remoto-estudio-videollamada/mid.webp",
        alt: "Micrófono y auriculares junto a pantalla de edición de audio en estudio de podcast",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes al grabar con invitados en remoto" },
      {
        type: "list",
        items: [
          "Grabar solo lo que sale de la llamada en vez de pedir la pista local del invitado.",
          "No hacer una prueba de sonido y conexión diez minutos antes de empezar a grabar.",
          "Dejar el volumen del invitado remoto mucho más bajo o más alto que el del estudio.",
          "No avisar al invitado de que use auriculares: sin ellos, su micrófono capta el eco de sus propios altavoces.",
          "Colocar la pantalla del invitado como algo secundario en el plano, en vez de integrarla en la composición.",
          "No tener un plan B si se corta la conexión a mitad de la grabación.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Necesito equipo especial para grabar un invitado remoto?",
        answer:
          "No mucho más de lo habitual: una plataforma que grabe pistas locales por separado, como Riverside o Zencastr, buena conexión a internet y que el invitado use auriculares con un micrófono decente.",
      },
      {
        type: "faq",
        question: "¿El invitado remoto puede aparecer en vídeo o solo en audio?",
        answer:
          "Puede aparecer en vídeo sin problema. En A0 Studios lo integramos en pantalla dentro del plano del estudio, como una entrevista con dos ubicaciones a la vez.",
      },
      {
        type: "faq",
        question: "¿Qué pasa si el invitado tiene mala conexión a internet?",
        answer:
          "Por eso conviene grabar en local en su lado y usar la llamada solo para veros y coordinaros, no como fuente final de audio o vídeo. Aunque la llamada se corte, la grabación local sigue intacta.",
      },
      {
        type: "faq",
        question: "¿Se nota mucho la diferencia frente a grabar con los dos en el estudio?",
        answer:
          "Con el flujo correcto, apenas se nota en el resultado final. Se nota mucho más cuando se graba directamente desde la llamada, sin pistas separadas por participante.",
      },
      {
        type: "paragraph",
        text: "Si tienes un episodio con un invitado que no puede venir a Madrid, en A0 Studios montamos la grabación híbrida para que suene como si estuviera en la sala. Escríbenos desde /#contacto y lo preparamos juntos.",
      },
    ],
  },
  {
    slug: "streaming-directo-estudio-que-necesitas",
    title: "Streaming en directo desde el estudio: qué necesitas para hacerlo bien",
    description:
      "Qué hace falta en cámaras, audio y conexión para hacer streaming en directo desde un estudio sin sustos: guía práctica para lanzamientos, eventos y directos en redes.",
    publishedAt: "2026-08-07",
    readingTime: "4 min",
    category: "Guía",
    tags: ["streaming", "estudio de grabación", "Madrid", "producción audiovisual", "directo"],
    keyword: "streaming en directo desde estudio",
    intent: "informacional",
    excerpt:
      "Un directo no da margen para repetir la toma. Así preparamos en A0 Studios las cámaras, el audio y la conexión antes de salir en streaming.",
    seoTitle: "Streaming en Directo desde Estudio | A0 Studios Madrid",
    metaDescription:
      "Streaming en directo desde estudio: qué necesitas en cámaras, conexión y audio para que la retransmisión salga bien sin sustos.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Cada vez llegan más peticiones para algo distinto a grabar contenido para editar después: hacer un directo. Un lanzamiento de producto, una charla abierta al público, un evento de empresa retransmitido para quien no puede venir a la sala. La lógica cambia por completo en cuanto entra la palabra directo: no hay margen para repetir una toma.",
      },
      {
        type: "paragraph",
        text: "En streaming en directo no hay postproducción de por medio. Lo que sale por streaming es lo que ve la audiencia, en el momento, con sus errores incluidos si los hay. Eso obliga a preparar antes lo que en una grabación normal se puede arreglar después: encuadre, niveles de audio, transiciones entre cámaras, gráficos en pantalla. En A0 Studios montamos directos con cierta frecuencia y la clave siempre es la misma: preparar el flujo completo antes de salir en directo, no improvisar sobre la marcha.",
      },
      {
        type: "image",
        src: "/blog/streaming-directo-estudio-que-necesitas/hero.webp",
        alt: "Cámara grabando en directo con encuadre de varias personas en un plató de streaming",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué cambia entre grabar contenido y hacer streaming en directo" },
      {
        type: "paragraph",
        text: "Grabar da margen de error. Si algo falla, cortas, repites o lo arreglas en el montaje. En un directo esa red de seguridad desaparece: el audio que suena mal suena mal para todo el mundo que está viendo en ese momento, y el corte de cámara torpe queda ahí, visible, sin posibilidad de deshacerlo.",
      },
      {
        type: "paragraph",
        text: "Por eso el streaming en directo pide más ensayo previo que una grabación normal, aunque dure menos. Antes de salir en directo conviene tener claro el guion de cámaras, probar el audio con los niveles reales de la sala, y comprobar que la conexión aguanta el bitrate que vas a necesitar. Nada de esto se improvisa bien en caliente.",
      },
      {
        type: "paragraph",
        text: "Los casos más habituales que nos llegan son lanzamientos de producto con público esperando verlo en el momento, sesiones abiertas de preguntas y respuestas, y eventos de empresa donde parte de la audiencia no puede estar físicamente en la sala pero quiere seguirlo en directo desde donde esté.",
      },
      { type: "heading", level: 2, text: "Cómo montar un directo que aguante bien" },
      { type: "heading", level: 3, text: "Conexión a internet con respaldo" },
      {
        type: "paragraph",
        text: "La conexión es lo primero que falla si no se prepara bien, y es lo único que no puedes arreglar en directo si se cae. Usa cable ethernet siempre que puedas, nunca wifi como única vía, y ten un router 4G o 5G como respaldo listo para conmutar si la línea principal se corta. Configura el bitrate de salida por debajo del máximo que soporta tu conexión de subida, no al límite: un directo a 6 Mbps sobre una línea de 8 Mbps aguanta mejor que uno a 8 Mbps justos.",
      },
      { type: "heading", level: 3, text: "Multicámara con mezclador en directo" },
      {
        type: "paragraph",
        text: "Con una sola cámara el directo se queda plano enseguida. Un mezclador como un Blackmagic ATEM Mini, o un switcher por software como OBS Studio, te deja cortar entre varias cámaras en tiempo real, meter gráficos en pantalla y mandar la señal final a la plataforma sin depender de editar nada después. La clave es decidir antes qué plano usas para cada momento: uno general para el arranque, un plano cerrado para las partes con más contenido, y una cámara secundaria para pantalla compartida o invitados.",
      },
      { type: "heading", level: 3, text: "Audio limpio para directo, sin margen de arreglo" },
      {
        type: "paragraph",
        text: "En una grabación normal, un audio algo bajo o con ruido de fondo se puede subir, limpiar o ecualizar en el montaje. En directo, lo que suena en el momento es lo que llega a la audiencia. Usa un mezclador de audio dedicado, no el micrófono integrado de la cámara, y haz una prueba de sonido con los niveles reales de la sala antes de empezar, no cinco minutos después de salir en directo.",
      },
      {
        type: "image",
        src: "/blog/streaming-directo-estudio-que-necesitas/mid.webp",
        alt: "Monitor con vista multicámara y mezclador para dirigir un streaming en directo",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Cuándo tiene sentido hacer streaming en directo" },
      {
        type: "list",
        items: [
          "Lanzamiento de producto con público que quiere verlo suceder en el momento, no al día siguiente.",
          "Evento de empresa donde parte de la audiencia no puede asistir físicamente pero sí seguirlo en directo.",
          "Sesión de preguntas y respuestas donde el directo genera participación real de quien está viendo.",
          "Entrevista o mesa redonda pensada para generar conversación en redes mientras ocurre.",
          "Cuando lo que aporta el contenido es justamente que esté pasando ahora, no una versión editada después.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Qué necesito mínimo para hacer streaming en directo desde un estudio?",
        answer:
          "Una cámara con salida limpia (o una webcam decente para empezar), un mezclador de audio, conexión a internet estable con cable, y un software o hardware de switching como OBS o un ATEM Mini para mandar la señal a la plataforma.",
      },
      {
        type: "faq",
        question: "¿Puedo hacer streaming a varias plataformas a la vez?",
        answer:
          "Sí. Herramientas como Restream o StreamYard permiten mandar la misma señal a YouTube, LinkedIn e Instagram al mismo tiempo desde una sola configuración, sin montar el directo por separado en cada plataforma.",
      },
      {
        type: "faq",
        question: "¿Qué pasa si se corta la conexión durante el directo?",
        answer:
          "Por eso conviene tener un router 4G o 5G de respaldo configurado y probado antes de empezar. Si la línea principal se cae, conmutas y sigues en directo con una interrupción mínima en vez de perder la retransmisión entera.",
      },
      {
        type: "faq",
        question: "¿Se puede editar y reutilizar el contenido del directo después?",
        answer:
          "Sí, si grabas en local además de emitir. La señal completa se puede recortar en clips para redes o dejar como vídeo íntegro, igual que cualquier otra grabación, aunque en el momento haya salido en directo sin margen de edición.",
      },
      {
        type: "paragraph",
        text: "Si tienes un evento o un lanzamiento que necesita salir en directo y no solo grabado, en A0 Studios montamos el streaming con las cámaras, el audio y la conexión preparados para que aguante. Escríbenos desde /#contacto y lo planificamos juntos.",
      },
    ],
  },
  {
    slug: "subtitulos-video-por-que-importan-como-se-hacen",
    title: "Subtítulos en vídeo: por qué son casi obligatorios y cómo se hacen bien",
    description:
      "La mayoría de tu audiencia ve vídeo sin sonido. Qué aportan los subtítulos, cómo se generan sin perder tiempo y qué errores tirar por tierra un vídeo bien grabado.",
    publishedAt: "2026-08-10",
    readingTime: "5 min",
    category: "Guía",
    tags: ["subtítulos", "accesibilidad", "edición de vídeo", "redes sociales", "Madrid"],
    keyword: "subtitulos en video",
    intent: "informacional",
    excerpt:
      "En redes la mayoría ve el vídeo con el sonido apagado. Sin subtítulos, ese vídeo no comunica nada. Así los preparamos en A0 Studios para que no se note el trabajo detrás.",
    seoTitle: "Subtítulos en Vídeo: por qué importan | A0 Studios Madrid",
    metaDescription:
      "Subtítulos en vídeo: por qué la mayoría de tu audiencia los necesita, cómo se generan bien y qué errores evitar para que no rompan el ritmo del vídeo.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Prueba esto: abre Instagram o LinkedIn ahora mismo y mira cuántos vídeos reproduces con el sonido puesto. Casi ninguno. La mayoría de tu audiencia consume vídeo en el metro, en la oficina o en la sala de espera, con el móvil en silencio. Si tu vídeo no lleva subtítulos, para esa persona no existe.",
      },
      {
        type: "paragraph",
        text: "No es un detalle de accesibilidad opcional, aunque también lo sea. Es la diferencia entre que alguien entienda tu mensaje en los primeros tres segundos o pase el dedo y siga scrolleando. En A0 Studios metemos subtítulos en prácticamente todo lo que editamos, y no es capricho: es la parte del proceso que más impacto tiene en cuánto aguanta la gente viendo el vídeo.",
      },
      {
        type: "image",
        src: "/blog/subtitulos-video-por-que-importan-como-se-hacen/hero.webp",
        alt: "Línea de tiempo de edición de vídeo con pista de subtítulos en pantalla",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué los subtítulos ya no son opcionales" },
      {
        type: "paragraph",
        text: "El dato que maneja cualquier editor de redes es simple: buena parte del vídeo en móvil se reproduce sin audio, sobre todo en el scroll inicial, antes de que alguien decida pararse y subir el volumen. Si el mensaje solo va en el audio, lo pierdes justo en el momento en que tienes que enganchar.",
      },
      {
        type: "paragraph",
        text: "Además, los subtítulos hacen algo que el audio solo no hace: refuerzan el mensaje. Alguien que sí tiene el sonido puesto lee y escucha a la vez, y eso ayuda a retener la idea principal, sobre todo en vídeos con datos, cifras o conceptos que no se captan a la primera.",
      },
      {
        type: "paragraph",
        text: "Y está la parte de accesibilidad real: personas con dificultad auditiva, gente viendo tu contenido en un idioma que no es el suyo, o simplemente alguien que no quiere activar el sonido en un espacio público. Todos esos casos dependen de que el subtítulo esté ahí y esté bien hecho.",
      },
      { type: "heading", level: 2, text: "Cómo se hacen bien" },
      { type: "heading", level: 3, text: "Generarlos a partir del audio, no a mano" },
      {
        type: "paragraph",
        text: "Escribir subtítulos a mano, minuto a minuto, no tiene sentido con las herramientas actuales. En DaVinci Resolve o CapCut se generan automáticamente a partir del audio del vídeo, con un margen de error bajo si la grabación tiene buen sonido. El trabajo real está después: revisar, cortar frases donde toca y corregir lo que la transcripción automática entiende mal.",
      },
      { type: "heading", level: 3, text: "Sincronizarlos con el ritmo del corte, no con la frase completa" },
      {
        type: "paragraph",
        text: "Un error habitual es dejar frases largas en pantalla durante seis o siete segundos. El ojo no lee así en redes. Cortamos cada bloque de subtítulo a dos o tres líneas cortas, sincronizadas con las pausas naturales del habla, para que se lean casi sin esfuerzo mientras el vídeo sigue avanzando.",
      },
      { type: "heading", level: 3, text: "Cuidar tipografía, tamaño y contraste" },
      {
        type: "paragraph",
        text: "El subtítulo tiene que leerse en una pantalla de móvil de cinco pulgadas, con luz de sol o en el metro con poca luz. Tipografía gruesa, buen contraste con el fondo y tamaño generoso. Nada de letra fina sobre fondo claro que desaparece en cuanto hay una imagen con mucha luz detrás.",
      },
      {
        type: "image",
        src: "/blog/subtitulos-video-por-que-importan-como-se-hacen/mid.webp",
        alt: "Persona viendo un vídeo vertical en el móvil con el sonido apagado",
        width: 1920,
        height: 1080,
      },
      { type: "heading", level: 2, text: "Errores comunes al subtitular" },
      {
        type: "list",
        items: [
          "Dejar el subtítulo generado automáticamente sin revisar: nombres propios, cifras y tecnicismos casi siempre salen mal.",
          "Frases demasiado largas en pantalla que obligan a releer y rompen el ritmo del vídeo.",
          "Tipografía o color que se pierde sobre fondos claros o con mucho brillo.",
          "Subtítulos quemados en el vídeo sin dejar margen para adaptarlos a otro idioma si el contenido se reutiliza.",
          "No revisar la sincronización final tras exportar, sobre todo si el vídeo se recorta o se acelera después.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Los subtítulos automáticos son suficientes?",
        answer:
          "Como punto de partida sí, pero siempre hay que revisarlos a mano. La transcripción automática falla con nombres propios, cifras y palabras técnicas, y esos errores se notan mucho en pantalla.",
      },
      {
        type: "faq",
        question: "¿Debo quemar los subtítulos en el vídeo o dejarlos como archivo aparte?",
        answer:
          "Depende del uso. Para redes sociales conviene quemarlos directamente en el vídeo, porque la mayoría de plataformas no muestra bien los subtítulos externos. Para YouTube o contenido que se vaya a traducir, mejor mantener un archivo de subtítulos separado.",
      },
      {
        type: "faq",
        question: "¿Los subtítulos ayudan también al SEO del vídeo?",
        answer:
          "Sí, sobre todo en YouTube. La transcripción le da a la plataforma más contexto sobre el contenido del vídeo, lo que puede mejorar cómo se indexa y en qué búsquedas aparece.",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo añade subtitular a la edición?",
        answer:
          "Con las herramientas actuales, poco. Generar y revisar los subtítulos de un vídeo de tres o cuatro minutos suele llevar entre 15 y 30 minutos, dependiendo de lo limpio que esté el audio original.",
      },
      {
        type: "paragraph",
        text: "Si grabas contenido en A0 Studios, la edición incluye subtítulos revisados a mano, no solo el volcado automático. Si quieres que tu próximo vídeo se entienda también con el sonido apagado, escríbenos desde /#contacto.",
      },
    ],
  },
  {
    slug: "locucion-voz-en-off-grabacion-estudio",
    title: "Locución y voz en off: cuándo grabarla en estudio y cómo prepararla",
    description:
      "No todos los vídeos necesitan una cara delante de la cámara. Cuándo tiene sentido usar voz en off en lugar de presentador, y cómo preparar guion, voz y condiciones de grabación para que suene profesional.",
    publishedAt: "2026-08-11",
    readingTime: "4 min",
    category: "Guía",
    tags: ["locución", "voz en off", "estudio de grabación", "audio", "Madrid", "contenido"],
    keyword: "locucion y voz en off",
    intent: "informacional",
    excerpt:
      "La voz en off puede salvar un vídeo corporativo o hundirlo. Cuándo tiene sentido grabarla en estudio y cómo preparar guion, voz y ritmo antes de sentarte delante del micro.",
    seoTitle: "Locución y voz en off en estudio | A0 Studios Madrid",
    metaDescription:
      "Voz en off: cuándo usarla en lugar de un presentador, cómo preparar el guion antes de grabar y qué hace que una locución suene profesional en vez de leída.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Hay vídeos que no necesitan una cara. Un explicativo de producto, un vídeo institucional, un tutorial o una pieza para anuncios muchas veces funcionan mejor con una voz en off bien grabada que con alguien hablando a cámara. El problema es que la mayoría de la gente que graba su propia locución en el móvil o con un micrófono de diadema suena exactamente a eso: alguien leyendo un texto en su casa.",
      },
      {
        type: "paragraph",
        text: "La diferencia entre una locución que suena profesional y una que no está casi siempre en tres sitios: el guion, la voz que la lee y las condiciones en las que se graba. Ninguno de los tres depende de tener un estudio carísimo, pero sí de hacerlo con cabeza.",
      },
      {
        type: "paragraph",
        text: "Lo curioso es que los tres fallos más habituales pasan casi siempre desapercibidos para quien graba, porque el oído se acostumbra rápido al eco de su propia habitación. Se nota luego, cuando el vídeo está montado y suena distinto a cualquier otra pieza profesional que hayas visto ese mismo día en redes.",
      },
      {
        type: "image",
        src: "/blog/locucion-voz-en-off-grabacion-estudio/hero.webp",
        alt: "Micrófono de condensador en estudio de grabación preparado para locución",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es la voz en off y cuándo la necesitas" },
      {
        type: "paragraph",
        text: "Voz en off es cualquier narración que acompaña a un vídeo sin que quien habla aparezca en pantalla. Se usa para explicar un proceso, dar contexto a imágenes de producto, narrar un caso de uso o simplemente sostener un vídeo que se apoya en b-roll y gráficos en lugar de en un presentador.",
      },
      {
        type: "paragraph",
        text: "Tiene sentido cuando el mensaje es más importante que la persona que lo dice: vídeos explicativos, anuncios, contenido institucional o piezas donde el protagonista real es el producto, el espacio o el dato. También cuando quien debería salir a cámara no se siente cómodo delante de un objetivo, pero sí puede narrar un guion con calma.",
      },
      {
        type: "paragraph",
        text: "No siempre es la mejor opción. Si el vídeo depende de generar confianza personal, como un vídeo de venta o un mensaje de fundador, una cara suele funcionar mejor que una voz sin rostro. La voz en off gana cuando el contenido es informativo y pierde cuando el contenido necesita conexión humana directa.",
      },
      {
        type: "paragraph",
        text: "Hay un punto intermedio que funciona muy bien y que en A0 Studios usamos a menudo: grabar un explicativo apoyado en b-roll y gráficos, pero con la voz de alguien reconocible de la marca, no de un locutor genérico. Se mantiene la coherencia de marca sin necesitar horas de rodaje a cámara para cada actualización del vídeo.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Escribir el guion para el oído, no para la vista" },
      {
        type: "paragraph",
        text: "Un guion que se lee bien en un documento no siempre suena bien en voz alta. Frases largas con varias subordinadas obligan a respirar en mitad de una idea y se nota. Escribimos frases cortas, con puntuación pensada para marcar dónde respirar, y leemos el texto en voz alta antes de grabar para detectar qué trabalengua se nos ha colado sin querer.",
      },
      {
        type: "paragraph",
        text: "También conviene marcar en el propio guion dónde va cada corte de vídeo o cada gráfico, aunque sea con una nota entre corchetes. Ayuda a leer con el ritmo correcto en cada bloque y evita que en montaje la voz avance más rápido o más lento que la imagen que la acompaña.",
      },
      { type: "heading", level: 3, text: "Elegir el ritmo y el tono según el uso final" },
      {
        type: "paragraph",
        text: "No es lo mismo narrar un tutorial, donde el ritmo tiene que ser pausado para que se entienda cada paso, que narrar un anuncio de quince segundos, donde cada palabra cuenta y el tono tiene que empujar hacia la acción. Definir esto antes de grabar evita repetir tomas por un problema que era de dirección, no de técnica.",
      },
      {
        type: "paragraph",
        text: "Grabamos dos o tres tomas de referencia al principio de la sesión, cambiando ligeramente el ritmo, y las escuchamos antes de seguir con el resto del guion. Cuesta cinco minutos y evita descubrir en la edición que el tono elegido no encajaba con el vídeo.",
      },
      { type: "heading", level: 3, text: "Grabar en un espacio con el sonido controlado" },
      {
        type: "paragraph",
        text: "Una locución grabada en una habitación sin tratamiento acústico se nota en el eco y en el ruido de fondo, aunque el micrófono sea bueno. En estudio grabamos con tratamiento acústico, sin reverberación ni ruido ambiente, y eso es lo que separa una voz en off que suena a producto terminado de una que suena a nota de voz.",
      },
      {
        type: "paragraph",
        text: "El micrófono también importa, pero menos de lo que la gente cree. Un condensador decente en una sala tratada suena mejor que un micrófono de gama alta grabado en un salón con eco. Si tienes que elegir dónde invertir primero, invierte en el espacio antes que en el equipo.",
      },
      {
        type: "image",
        src: "/blog/locucion-voz-en-off-grabacion-estudio/mid.webp",
        alt: "Micrófono y auriculares preparados para grabar una locución",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes al grabar voz en off" },
      {
        type: "list",
        items: [
          "Grabar sin haber leído el guion en voz alta antes, lo que hace aflorar trabalenguas y frases mal construidas en plena toma.",
          "Usar el micrófono del móvil o de unos auriculares en lugar de un micrófono de condensador en condiciones controladas.",
          "Leer con un tono monótono porque no se ha definido antes qué ritmo y qué energía pide el vídeo.",
          "No dejar silencios ni pausas naturales, lo que hace muy difícil editar y sincronizar la voz con las imágenes después.",
          "Grabar todo el guion de un tirón sin repetir frases sueltas, así que un solo error obliga a repetir el bloque entero.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Necesito una voz profesional o puedo grabarla yo mismo?",
        answer:
          "Depende del uso. Para contenido interno o explicativos sencillos, tu propia voz bien dirigida y bien grabada suele bastar. Para anuncios o piezas de marca con mucha exposición, una voz profesional marca una diferencia notable en cómo se percibe el vídeo.",
      },
      {
        type: "faq",
        question: "¿Cuánto dura grabar una locución en estudio?",
        answer:
          "Para un guion de uno o dos minutos, entre 30 y 45 minutos suele ser suficiente, contando repeticiones de frases que no salen a la primera. Guiones más largos o con varios idiomas llevan más tiempo.",
      },
      {
        type: "faq",
        question: "¿Se puede combinar voz en off con presentador en el mismo vídeo?",
        answer:
          "Sí, es habitual. Un presentador abre o cierra el vídeo a cámara y la voz en off narra las partes de proceso, datos o b-roll. Ayuda a mantener conexión humana sin depender de una sola persona todo el tiempo.",
      },
      {
        type: "faq",
        question: "¿Qué formato de entrega necesito para usar la locución en edición?",
        answer:
          "Un archivo de audio sin comprimir, separado por bloques o frases si el guion es largo, para poder ajustar el ritmo en montaje sin tener que regrabar toda la pieza por un solo cambio.",
      },
      {
        type: "paragraph",
        text: "Si tu próximo vídeo necesita una voz en off que suene a estudio y no a nota de voz, en A0 Studios grabamos con tratamiento acústico y dirección de guion incluida. Escríbenos desde /#contacto.",
      },
    ],
  },
  {
    slug: "talking-head-video-marca-cuando-funciona",
    title: "Talking head en vídeo de marca: qué es y cuándo funciona",
    description:
      "El talking head es el formato más directo que existe: una persona hablando a cámara sin apenas apoyo visual. Cuándo funciona, cuándo no, y cómo grabarlo para que aguante la atención.",
    publishedAt: "2026-08-12",
    readingTime: "4 min",
    category: "Guía",
    tags: ["talking head", "vídeo de marca", "estudio de grabación", "contenido", "Madrid", "presentador"],
    keyword: "talking head video de marca",
    intent: "informacional",
    excerpt:
      "El talking head no tiene montaje que lo salve: si la persona no sostiene la atención, el vídeo no funciona. Cuándo usarlo y cómo grabarlo para que no se note el esfuerzo.",
    seoTitle: "Talking Head en Vídeo de Marca | A0 Studios Madrid",
    metaDescription:
      "Talking head en vídeo: qué es, cuándo funciona mejor que un reel editado y cómo grabarlo en estudio para que sostenga la atención sin montaje de apoyo.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Hay formatos de vídeo que dependen de cortes rápidos, b-roll y música para sostener la atención. El talking head es justo lo contrario: una persona habla directamente a cámara durante buena parte de la pieza, con muy poco apoyo visual, y el vídeo funciona o no según si esa persona aguanta la atención por sí sola.",
      },
      {
        type: "paragraph",
        text: "Es también el formato más difícil de disimular. Un reel con quince cortes puede tapar un guion flojo con ritmo de montaje. Un talking head no tiene dónde esconderse: si no funciona, se nota en los primeros cinco segundos.",
      },
      {
        type: "image",
        src: "/blog/talking-head-video-marca-cuando-funciona/hero.webp",
        alt: "Persona hablando directamente a cámara en formato talking head dentro de un estudio de grabación",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es el talking head y por qué se usa" },
      {
        type: "paragraph",
        text: "Talking head es cualquier vídeo donde el protagonista habla mirando al objetivo, con la cámara fija o con muy poco movimiento, y el peso de la pieza recae en el discurso y en la persona, no en el montaje. Se opone a formatos como el reel con muchos cortes o el explicativo apoyado en b-roll y gráficos.",
      },
      {
        type: "paragraph",
        text: "Se diferencia de la voz en off en que aquí hay una cara delante del espectador todo el tiempo. Eso genera confianza y cercanía cuando la persona conecta bien con la cámara, pero también expone cualquier duda, tic o titubeo que en otro formato quedaría tapado por un corte.",
      },
      {
        type: "paragraph",
        text: "Funciona especialmente bien en contenido de fundador, vídeos de LinkedIn, mensajes directos a cliente y piezas donde lo que vende no es el producto sino la persona que lo explica. Es el formato que más rápido construye autoridad, y también el que más rápido la destruye si sale forzado.",
      },
      {
        type: "paragraph",
        text: "En redes suele generar más interacción real que un reel muy editado, precisamente porque parece menos publicidad y más conversación directa entre dos personas. Eso lo hace muy útil para posicionar a alguien como referente en su sector, no solo para promocionar un servicio puntual.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Encuadre y mirada a cámara" },
      {
        type: "paragraph",
        text: "El encuadre habitual es plano medio corto, ojos a la altura del tercio superior del cuadro y objetivo a la altura de los ojos, no por debajo. Mirar directamente al objetivo, y no a un punto cercano en el monitor, es lo que hace que el espectador sienta que le están hablando a él y no a una pantalla.",
      },
      {
        type: "paragraph",
        text: "El fondo también importa, aunque se hable menos de él. Un fondo con algo de profundidad y desenfoque funciona mejor que una pared lisa sin ningún elemento, porque evita que la figura se aplane visualmente y le da al plano una sensación de espacio real, no de estudio de fotos.",
      },
      { type: "heading", level: 3, text: "Ritmo del discurso y pausas" },
      {
        type: "paragraph",
        text: "El error más común es hablar como si se leyera un texto: ritmo constante, sin pausas, sin variación de energía. Grabamos con frases cortas y pausas reales entre idea e idea, porque una pausa bien puesta se edita fácil y un discurso plano no se arregla en montaje.",
      },
      { type: "heading", level: 3, text: "Duración según la plataforma" },
      {
        type: "paragraph",
        text: "Un talking head para LinkedIn aguanta entre 60 y 90 segundos si va directo al grano desde el primer plano. Para YouTube, con contexto y desarrollo, puede sostenerse varios minutos siempre que haya cambios de ritmo cada 20-30 segundos. Grabar sin pensar en esto lleva a piezas que se alargan sin necesidad.",
      },
      {
        type: "image",
        src: "/blog/talking-head-video-marca-cuando-funciona/mid.webp",
        alt: "Cámara de vídeo profesional enfocada durante una grabación de talking head en estudio",
        width: 1920,
        height: 1080,
      },
      { type: "heading", level: 2, text: "Cuándo tiene sentido (y cuándo no)" },
      {
        type: "list",
        items: [
          "Funciona cuando el mensaje depende de quién lo dice: fundador, experto, portavoz de marca con autoridad real.",
          "Funciona para vídeos cortos y directos donde el gancho tiene que salir en los tres primeros segundos.",
          "No funciona si la persona no está entrenada para hablar a cámara y el resultado se nota rígido o leído.",
          "No funciona para explicar procesos largos o datos complejos, donde el apoyo visual de b-roll o gráficos ayuda más.",
          "Tiene mejor resultado combinado con algún corte de apoyo cada 20-30 segundos que sostenido puro más de dos minutos.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Necesito teleprompter para grabar un talking head?",
        answer:
          "No es obligatorio, pero ayuda mucho si el guion es largo o si te pones nervioso improvisando. Para piezas cortas y con el mensaje bien interiorizado, hablar sin teleprompter suele salir más natural.",
      },
      {
        type: "faq",
        question: "¿Cuántas tomas necesito grabar de media?",
        answer:
          "Para una pieza corta de 60-90 segundos, entre 3 y 5 tomas completas suele ser suficiente si el guion está bien ensayado antes de grabar. Menos ensayo significa más tomas y una sesión más larga.",
      },
      {
        type: "faq",
        question: "¿Es mejor grabar de pie o sentado?",
        answer:
          "Depende del tono. De pie transmite más energía y funciona bien para mensajes cortos y directos. Sentado transmite más calma y funciona mejor para explicaciones más largas o tono cercano de conversación.",
      },
      {
        type: "faq",
        question: "¿Puedo combinar talking head con locución en off en el mismo vídeo?",
        answer:
          "Sí, es habitual. El talking head abre o cierra la pieza a cámara y la voz en off narra las partes de proceso o datos, apoyada en b-roll. Mantiene la conexión humana sin que toda la pieza dependa de sostener la mirada a cámara todo el tiempo.",
      },
      {
        type: "paragraph",
        text: "Si tu próxima pieza depende de que alguien sostenga la cámara con presencia real, en A0 Studios grabamos con dirección de encuadre y de ritmo incluida, no solo con la cámara encendida. Escríbenos desde /#contacto.",
      },
    ],
  },
  {
    slug: "croma-key-cuando-grabar-fondo-verde",
    title: "Croma key: cuándo grabar con fondo verde y cuándo no",
    description:
      "El croma key permite meter a alguien en cualquier escenario sin salir del estudio, pero mal ejecutado se nota en dos segundos. Cuándo compensa usarlo, cuándo un fondo real da mejor resultado y cómo iluminarlo para que el recorte salga limpio.",
    publishedAt: "2026-08-13",
    readingTime: "4 min",
    category: "Guía",
    tags: ["croma key", "fondo verde", "producción de vídeo", "estudio de grabación", "Madrid", "posproducción"],
    keyword: "croma key en video",
    intent: "informacional",
    excerpt:
      "El croma key no perdona: bien iluminado es invisible, mal iluminado deja un halo verde alrededor del pelo. Cuándo tiene sentido usarlo y cómo grabarlo para que el recorte salga limpio.",
    seoTitle: "Croma Key en Vídeo: Cuándo Usarlo | A0 Studios Madrid",
    metaDescription:
      "Croma key en vídeo: cuándo grabar con fondo verde compensa, cuándo no, y cómo iluminarlo bien en estudio para un recorte limpio.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "El croma key —grabar delante de un fondo verde o azul para sustituirlo en posproducción— es una de las herramientas más usadas y más mal entendidas en producción de vídeo. Bien hecho, permite meter a alguien en cualquier escenario sin moverse del estudio. Mal hecho, deja un contorno verde alrededor del pelo que delata el truco en dos segundos.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios lo montamos para clientes que necesitan fondos de marca, gráficos animados detrás del presentador o piezas donde el escenario cambia varias veces dentro del mismo vídeo. No es la solución para todo: hay sesiones donde un fondo real da mejor resultado que cualquier croma bien ejecutado. La clave está en saber cuándo conviene cada opción.",
      },
      {
        type: "image",
        src: "/blog/croma-key-cuando-grabar-fondo-verde/hero.webp",
        alt: "Cámara de vídeo grabando a una persona delante de un fondo verde de croma key en estudio",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es el croma key y por qué se usa" },
      {
        type: "paragraph",
        text: "El croma key es una técnica de posproducción que sustituye un color uniforme del fondo —verde casi siempre, porque contamina menos el tono de piel— por otra imagen o vídeo. La cámara graba a la persona delante de esa tela y en edición se recorta ese color y se coloca detrás lo que haga falta: un escenario virtual, gráficos de marca, otra localización.",
      },
      {
        type: "paragraph",
        text: "Se usa sobre todo cuando el mensaje necesita apoyo visual que no existe físicamente en la sala: datos en pantalla, gráficos animados, un fondo de marca distinto en cada vídeo, o piezas donde el mismo presentador aparece en varios escenarios sin cambiar de ubicación real. También sirve para separar al sujeto del fondo y ganar flexibilidad en montaje, aunque el resultado final sea sencillo.",
      },
      {
        type: "paragraph",
        text: "No sustituye a un buen fondo real. Si lo único que necesitas es una pared limpia o una estantería con buena luz, grabar directamente ahí da un resultado más natural y ahorra horas de edición. El croma tiene sentido cuando el fondo final necesita ser algo que no existe en la sala.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Iluminación del fondo verde" },
      {
        type: "paragraph",
        text: "El fallo más habitual es iluminar la tela igual que a la persona. El fondo necesita luz propia, uniforme, sin sombras ni pliegues marcados, separada de la iluminación del sujeto. Si el verde queda irregular, el recorte falla y aparecen esos bordes con halo que se notan en cualquier pantalla.",
      },
      { type: "heading", level: 3, text: "Distancia entre sujeto y fondo" },
      {
        type: "paragraph",
        text: "Separar a la persona de la tela al menos metro y medio evita que el verde rebote sobre el pelo o la ropa clara, algo muy habitual cuando el sujeto está pegado al fondo. Esa distancia también desenfoca ligeramente el verde, lo que facilita el recorte limpio en edición.",
      },
      { type: "heading", level: 3, text: "Vestuario y colores a evitar" },
      {
        type: "paragraph",
        text: "Verde, evidentemente, queda descartado, pero también conviene evitar tejidos brillantes o semitransparentes que reflejen el color del fondo. El pelo suelto o muy rizado es lo más difícil de recortar limpio: si hay margen, un peinado más controlado ahorra bastantes horas de retoque en posproducción.",
      },
      {
        type: "image",
        src: "/blog/croma-key-cuando-grabar-fondo-verde/mid.webp",
        alt: "Pantalla de edición de vídeo con línea de tiempo y clips durante el proceso de posproducción",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Cuándo tiene sentido (y cuándo no)" },
      {
        type: "list",
        items: [
          "Tiene sentido cuando necesitas gráficos animados o datos detrás del presentador en tiempo real.",
          "Tiene sentido cuando la misma pieza se repite con distintos fondos de marca sin cambiar de estudio.",
          "Tiene sentido para vídeo educativo o explicativo con apoyo visual constante.",
          "No tiene sentido si el fondo real del estudio ya transmite lo que necesitas: se pierde tiempo y naturalidad.",
          "No tiene sentido para entrevistas o testimonios, donde la cercanía del espacio real aporta más que cualquier fondo virtual.",
          "No compensa si no hay tiempo de posproducción para un recorte limpio: un croma mal editado se nota más que no usarlo.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Es mejor el verde o el azul para croma key?",
        answer:
          "El verde es el estándar en vídeo porque se aleja más del tono de piel humano y las cámaras digitales son más sensibles a ese canal. El azul se sigue usando en cine cuando el vestuario incluye verde, pero para contenido de marca el verde es la opción por defecto.",
      },
      {
        type: "faq",
        question: "¿Necesito un estudio con croma permanente o vale con una tela?",
        answer:
          "Una tela o panel bien tensado y bien iluminado es suficiente para la mayoría de piezas. Un ciclorama fijo ayuda cuando hay movimiento de cámara, pero para planos fijos con presentador no es imprescindible.",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo añade el croma a la edición?",
        answer:
          "Depende de lo limpio que salga el recorte en grabación y de la complejidad del fondo final. Con buena iluminación, un recorte simple se resuelve rápido; con pelo suelto o bordes complicados, el ajuste fino se lleva bastante más tiempo.",
      },
      {
        type: "faq",
        question: "¿Puedo usar croma key con luz natural?",
        answer:
          "Es posible, pero complica el control porque la luz cambia durante el día y altera el balance de color del verde. Para un resultado consistente conviene iluminar el fondo con luz artificial controlada, aunque el resto de la escena tenga luz natural.",
      },
      {
        type: "paragraph",
        text: "Si tu próximo vídeo necesita un fondo que no existe en ningún estudio real, en A0 Studios montamos croma con iluminación y recorte limpio incluidos en la sesión. Escríbenos desde /#contacto.",
      },
    ],
  },
  {
    slug: "duracion-ideal-video-segun-plataforma",
    title: "Cuánto debe durar tu vídeo: guía de duración por plataforma",
    description:
      "La duración que funciona en Instagram no funciona en LinkedIn, ni la de LinkedIn en YouTube. Rangos reales por plataforma, por qué la retención importa más que el minutaje y cómo planificar una sola sesión para sacar varias duraciones.",
    publishedAt: "2026-08-14",
    readingTime: "4 min",
    category: "Guía",
    tags: ["duración de vídeo", "contenido", "reels", "LinkedIn", "YouTube", "Madrid"],
    keyword: "duracion ideal de un video segun la plataforma",
    intent: "informacional",
    excerpt:
      "No hay una duración única que funcione en todas partes: un Reel y un vídeo de LinkedIn piden tiempos distintos. Rangos reales por plataforma y por objetivo.",
    seoTitle: "Duración ideal de un vídeo por plataforma | A0 Studios Madrid",
    metaDescription:
      "La duración ideal de un vídeo cambia según la plataforma: Reels, LinkedIn, YouTube o tu web. Rangos reales y por qué la retención importa más que el minutaje.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Cada vez que alguien me pregunta cuánto debe durar un vídeo, la respuesta es siempre la misma: depende de dónde va a vivir. Un vídeo pensado para Instagram no funciona igual en YouTube, y un vídeo de LinkedIn con la duración de un Reel se queda corto para explicar nada con profundidad.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios grabamos piezas para founders, marcas y equipos de marketing que después reparten ese contenido en varias plataformas a la vez. El error más habitual no es la calidad de imagen ni el guion: es tratar todas las plataformas igual cuando cada una premia un ritmo distinto.",
      },
      {
        type: "image",
        src: "/blog/duracion-ideal-video-segun-plataforma/hero.webp",
        alt: "Línea de tiempo de edición de vídeo en pantalla durante el montaje de una pieza para redes",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué la duración cambia tanto según la plataforma" },
      {
        type: "paragraph",
        text: "Cada plataforma optimiza para que te quedes en ella, no en la tuya. Instagram y TikTok premian el porcentaje de gente que ve el vídeo completo, así que un clip corto con retención alta pesa más que uno largo que la mitad abandona a los diez segundos. YouTube, en cambio, mide tiempo total de visionado, y ahí una pieza de ocho minutos bien vista suma más que tres clips de un minuto.",
      },
      {
        type: "paragraph",
        text: "También cambia la intención de quien está al otro lado. En Reels y TikTok la gente descubre sin buscar nada en concreto. En LinkedIn busca autoridad y contexto profesional. En YouTube busca una respuesta o un tutorial. Y en tu propia web, el visitante ya está decidiendo si confía en ti, así que el vídeo tiene que transmitir eso rápido, no entretener.",
      },
      {
        type: "paragraph",
        text: "La duración no es el objetivo. Es una consecuencia de cuánto necesitas para cumplir ese objetivo sin perder al que está mirando por el camino.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Reels, Shorts y TikTok" },
      {
        type: "paragraph",
        text: "En vertical corto la ventana real está entre 15 y 45 segundos. El gancho tiene que aparecer en los primeros 2-3 segundos o la mayoría no llega al segundo 10. Si el mensaje necesita más de 45 segundos para tener sentido, casi siempre es mejor partirlo en dos piezas que estirar una sola hasta el minuto.",
      },
      { type: "heading", level: 3, text: "LinkedIn y contenido B2B" },
      {
        type: "paragraph",
        text: "En LinkedIn el rango que mejor funciona está entre 60 y 90 segundos para vídeo nativo sin apoyo externo, y puede llegar a 3 minutos si el contenido tiene un valor claro: un framework, un dato concreto, un caso explicado paso a paso. El formato vertical o cuadrado ocupa más espacio en el feed que el horizontal, y eso ayuda a retener.",
      },
      { type: "heading", level: 3, text: "YouTube y vídeo para tu propia web" },
      {
        type: "paragraph",
        text: "En YouTube, piezas de 6 a 12 minutos con estructura clara —intro corta, desarrollo, cierre— suelen rendir mejor que clips sueltos, porque el algoritmo premia el tiempo de visionado acumulado. Para vídeo en tu propia web, en cambio, la lógica es la contraria: 20-40 segundos, sin sonido activado por defecto y el mensaje principal en los primeros 5 segundos, porque nadie llega a tu landing buscando entretenimiento.",
      },
      {
        type: "image",
        src: "/blog/duracion-ideal-video-segun-plataforma/mid.webp",
        alt: "Persona grabando vídeo vertical con el móvil para redes sociales",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "list",
        items: [
          "Grabar un único vídeo largo y cortarlo igual para todas las plataformas sin repensar el gancho de cada una.",
          "Alargar un Reel a 90 segundos porque \"hay más que contar\" cuando la atención ya se perdió en el segundo 5.",
          "Subir a LinkedIn un vídeo pensado para TikTok, con música y ritmo que no encajan en un feed profesional.",
          "Medir el éxito solo en duración y no en retención: un vídeo corto con 80% de gente que lo ve entero vale más que uno largo que casi nadie termina.",
          "No dejar tiempo en sesión para grabar tomas de apoyo que permitan sacar varias duraciones del mismo contenido.",
          "Poner el dato o la conclusión al final del vídeo cuando la plataforma premia que aparezca en los primeros segundos.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto debe durar un Reel para Instagram?",
        answer:
          "Entre 15 y 45 segundos suele dar mejor resultado. Si el mensaje necesita más tiempo para tener sentido, casi siempre conviene partirlo en dos piezas en lugar de estirar una sola.",
      },
      {
        type: "faq",
        question: "¿Los vídeos largos de YouTube funcionan peor que los cortos?",
        answer:
          "No necesariamente. YouTube mide tiempo de visionado acumulado, así que una pieza de 8-10 minutos bien estructurada y con buena retención puede rendir mejor que varios clips cortos sueltos.",
      },
      {
        type: "faq",
        question: "¿Qué duración funciona mejor en LinkedIn?",
        answer:
          "Entre 60 y 90 segundos para vídeo nativo sin apoyo externo, y hasta 3 minutos cuando el contenido aporta un valor claro y concreto, como un framework o un caso explicado paso a paso.",
      },
      {
        type: "faq",
        question: "¿Tengo que grabar una versión distinta del vídeo para cada plataforma?",
        answer:
          "No hace falta grabar varias veces, pero sí planificarlo en sesión: grabando tomas de apoyo y variaciones del gancho puedes sacar de una sola grabación un corte para Reels, otro para LinkedIn y otro más largo para YouTube.",
      },
      {
        type: "paragraph",
        text: "Si necesitas sacar de una sola sesión piezas para varias plataformas sin perder naturalidad en ninguna, en A0 Studios lo planificamos así desde el guion. Escríbenos desde /#contacto.",
      },
    ],
  },
  {
    slug: "brief-antes-de-grabar-contenido",
    title: "El brief antes de grabar: qué preguntar para no perder tiempo en sesión",
    description:
      "Qué información necesitamos antes de una sesión de grabación para no perder tiempo de estudio decidiendo en directo, y qué preguntas concretas evitan que la sesión se alargue sin necesidad.",
    publishedAt: "2026-08-17",
    readingTime: "4 min",
    category: "Guía",
    tags: ["preparación de grabación", "brief creativo", "producción de contenido", "planificación", "estudio Madrid"],
    keyword: "brief antes de grabar contenido",
    intent: "informacional",
    excerpt:
      "Un brief bien hecho no es papeleo: es la diferencia entre grabar en dos horas lo que necesitas o alargarte a cuatro con material que no encaja. Qué preguntamos antes de cualquier sesión.",
    seoTitle: "Brief antes de grabar contenido | A0 Studios Madrid",
    metaDescription:
      "Qué preguntar antes de grabar contenido para no perder tiempo en sesión: objetivo, número de piezas, tono y quién sale delante de cámara.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Cada sesión que se retrasa en sala por falta de información cuesta dinero. En A0 Studios vemos el mismo patrón casi cada semana: el cliente llega con una idea general de lo que quiere grabar, pero sin las respuestas concretas que necesitamos para montar el planning — cuántas piezas salen de la sesión, en qué formato, con qué tono. Eso se resuelve antes de encender las cámaras, no dentro de la sala.",
      },
      {
        type: "paragraph",
        text: "Un brief bien hecho no es un formulario burocrático ni una capa extra de trabajo. Es la diferencia entre grabar en dos horas lo que necesitas o alargarte a cuatro y volver a casa con material que no encaja con lo que en realidad querías publicar. Aquí te cuento qué preguntamos nosotros antes de cualquier sesión y por qué esas preguntas concretas ahorran tanto tiempo.",
      },
      {
        type: "image",
        src: "/blog/brief-antes-de-grabar-contenido/hero.webp",
        alt: "Cuaderno abierto con anotaciones de planificación sobre una mesa de madera",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es un brief y por qué importa" },
      {
        type: "paragraph",
        text: "Un brief de grabación es la información mínima que necesitamos antes de empezar: para qué sirve el contenido, quién lo va a ver, cuántas piezas finales salen de la sesión y qué tono tiene que transmitir. Sin eso improvisamos en el momento, y improvisar en sala es lo más caro de toda la producción, porque el tiempo de estudio no se recupera.",
      },
      {
        type: "paragraph",
        text: "La mayoría de marcas y founders que llegan a A0 Studios sin experiencia previa en grabación no tienen este documento preparado, y no pasa nada — para eso hacemos una llamada de unos 15 minutos antes de la sesión. Pero cuanto más resuelto llega el cliente, menos tiempo se pierde ajustando en directo decisiones que se podían haber tomado con calma una semana antes.",
      },
      {
        type: "paragraph",
        text: "No hace falta un documento de varias páginas. Cinco o seis preguntas bien respondidas bastan para que el equipo llegue con el planning cerrado: qué se graba primero, qué luz necesita cada bloque, cuántos cambios de vestuario o de fondo hay que prever durante la mañana.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Define el objetivo antes que el formato" },
      {
        type: "paragraph",
        text: "Antes de decidir si es un reel, un vídeo largo o un episodio de podcast, hay que tener claro para qué sirve el contenido: captar leads, dar autoridad, vender un producto concreto o simplemente mantener presencia. El formato sale de ahí, no al revés. Muchas sesiones se alargan porque el cliente cambia de formato a mitad de grabación al darse cuenta de que lo que pedía no encajaba con lo que en realidad necesitaba.",
      },
      { type: "heading", level: 3, text: "Cierra el número de piezas antes de entrar en sala" },
      {
        type: "paragraph",
        text: "No es lo mismo grabar para sacar un vídeo único que grabar para sacar quince clips de redes sociales. El número de piezas cambia el tiempo de grabación, el número de tomas por bloque y cómo se organiza el guion o la escaleta. Si no lo sabemos de antemano, grabamos de más —perdiendo tiempo de estudio— o de menos, y hay que volver a citar otra sesión para completar lo que faltó.",
      },
      { type: "heading", level: 3, text: "Ten claro quién habla y con qué tono" },
      {
        type: "paragraph",
        text: "Si es un founder solo hablando a cámara, dos personas en formato conversación o un invitado externo entrevistado, la sala se monta de forma distinta. El tono también importa: no es lo mismo un vídeo corporativo institucional que un reel directo y desenfadado. Esa decisión afecta a la iluminación, al encuadre y hasta a las preguntas que preparamos antes de grabar una entrevista.",
      },
      {
        type: "image",
        src: "/blog/brief-antes-de-grabar-contenido/mid.webp",
        alt: "Cámara sobre trípode preparada durante un rodaje de entrevista",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "list",
        items: [
          "Llegar sin guion ni escaleta y decidir el orden de las piezas ya dentro de la sala.",
          "No avisar de cambios de vestuario o de fondo hasta el mismo día de la grabación.",
          "Pedir \"algo de contenido\" sin definir cuántas piezas hacen falta al final.",
          "No compartir referencias visuales previas — cada persona entiende \"profesional\" de forma distinta.",
          "Meter contenido de última hora sin ampliar el tiempo de sesión ya reservado.",
          "Confundir el brief con el guion: uno define el objetivo, el otro el contenido exacto de cada pieza.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto tiempo antes de la sesión hay que enviar el brief?",
        answer:
          "Con 48-72 horas de antelación es suficiente. Así podemos preparar el planning de sala, la iluminación según el formato y avisar si algo no encaja con el tiempo que tienes reservado.",
      },
      {
        type: "faq",
        question: "¿Y si todavía no tengo claro el brief?",
        answer:
          "No pasa nada. Hacemos una llamada corta antes de la grabación para resolver las preguntas clave: objetivo, número de piezas, tono y quién sale delante de cámara.",
      },
      {
        type: "faq",
        question: "¿El brief cambia el precio de la sesión?",
        answer:
          "No directamente. El precio depende del servicio contratado —Solo Grabación, Grabación + Edición o Producción Completa—, pero un brief claro suele traducirse en sesiones más cortas y eficientes porque se pierde menos tiempo decidiendo en sala.",
      },
      {
        type: "faq",
        question: "¿Se puede improvisar parte del contenido aunque haya brief?",
        answer:
          "Sí, y de hecho conviene dejar margen para eso. El brief fija lo esencial —objetivo, número de piezas, tono— pero dentro de eso siempre hay espacio para ajustar en sala según cómo fluya la grabación.",
      },
      {
        type: "paragraph",
        text: "Un brief bien hecho no elimina la espontaneidad de grabar, la protege. Si tienes claro para qué necesitas el contenido y cuántas piezas quieres sacar de la sesión, dejamos que el tiempo en estudio se dedique a lo que de verdad importa: que salga bien delante de cámara. Si quieres que preparemos el brief juntos antes de tu próxima sesión, escríbenos desde /#contacto.",
      },
    ],
  },
  {
    slug: "musica-video-marca-sin-copyright",
    title: "Música para vídeo de marca: cómo elegirla sin líos de copyright",
    description:
      "Qué diferencia hay entre música libre, de librería y con derechos, y cómo elegir la pista correcta para un vídeo de marca sin arriesgarte a un aviso de copyright.",
    publishedAt: "2026-08-18",
    readingTime: "5 min",
    category: "Guía",
    tags: ["música para vídeo", "copyright", "postproducción", "contenido de marca", "estudio Madrid"],
    keyword: "musica para video de marca sin copyright",
    intent: "informacional",
    excerpt:
      "Comprar la canción no te da derecho a usarla. Qué es una licencia de sincronización, qué bibliotecas usamos en A0 Studios y los errores que meten a más marcas en un aviso de copyright.",
    seoTitle: "Música para vídeo de marca sin copyright | A0 Studios Madrid",
    metaDescription:
      "Cómo elegir música para vídeo de marca sin riesgo de copyright: qué es una licencia de sincronización, qué bibliotecas usar y los errores más comunes.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Nos ha pasado con varios clientes: graban un vídeo estupendo, lo suben a redes con una canción que les gusta y a los pocos días el audio aparece mudo, el alcance cae o reciben un aviso de copyright. La imagen es suya. La música casi nunca lo es, y ese detalle se paga después, no antes.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios elegimos música en casi cada sesión de edición, así que sabemos dónde se suele fallar. No hace falta entender de leyes de propiedad intelectual para hacerlo bien. Hace falta saber qué tipo de licencia necesitas según dónde vas a publicar el vídeo y quién eres cuando lo publicas.",
      },
      {
        type: "image",
        src: "/blog/musica-video-marca-sin-copyright/hero.webp",
        alt: "Auriculares y teclado sobre mesa de escritorio en sesión de edición de audio",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué la música no es un detalle menor" },
      {
        type: "paragraph",
        text: "Comprar una canción en Spotify o Apple Music te da derecho a escucharla. No te da derecho a usarla en un vídeo que publicas, y mucho menos si ese vídeo promociona un producto o servicio. Eso se llama licencia de sincronización, y es un permiso distinto al de escucha personal — casi siempre hay que pagarlo aparte, y casi nunca está incluido en lo que ya pagaste.",
      },
      {
        type: "paragraph",
        text: "Las plataformas detectan la coincidencia de audio de forma automática. Cuando eso pasa, lo normal es que silencien el vídeo, reduzcan su alcance o —si el titular de los derechos lo reclama de forma directa— retiren la pieza entera. En una cuenta de empresa, un aviso de copyright también puede afectar a la monetización o a la reputación de la cuenta si se repite.",
      },
      {
        type: "paragraph",
        text: "El problema no es solo legal. Un vídeo mudo a mitad de campaña, justo cuando más tráfico está recibiendo, es tiempo y dinero de producción tirado. Evitarlo cuesta mucho menos que arreglarlo después.",
      },
      { type: "heading", level: 2, text: "Cómo elegir música sin arriesgarte" },
      { type: "heading", level: 3, text: "Bibliotecas con licencia para uso comercial" },
      {
        type: "paragraph",
        text: "La forma más simple es una biblioteca de música con licencia, tipo Epidemic Sound, Artlist o Musicbed. Pagas una suscripción mensual o anual y, mientras esté activa, puedes usar cualquier pista del catálogo en tus vídeos sin negociar nada pista por pista. Es lo que usamos en la mayoría de sesiones de edición en A0 Studios: rapidez y cobertura legal en el mismo paso.",
      },
      { type: "heading", level: 3, text: "Qué cubre realmente una licencia" },
      {
        type: "paragraph",
        text: "No todas las licencias son iguales. Algunas cubren redes sociales pero no anuncios de pago. Otras exigen mantener la suscripción activa mientras el vídeo siga publicado —si cancelas, pierdes el derecho de uso, aunque el vídeo lleve meses arriba—. Lee siempre qué canales cubre, si incluye monetización y si hace falta mantener algo activo después de publicar.",
      },
      { type: "heading", level: 3, text: "Cuándo conviene música original" },
      {
        type: "paragraph",
        text: "Para una marca con presencia constante en vídeo, tener una identidad sonora propia —una pieza original o un jingle corto que se repite en cada publicación— ayuda a que el contenido se reconozca sin ver el logo. Tiene sentido cuando ya publicas con regularidad y quieres que la marca suene igual de reconocible que se ve.",
      },
      {
        type: "image",
        src: "/blog/musica-video-marca-sin-copyright/mid.webp",
        alt: "Auriculares sobre monitor de ordenador durante una sesión de edición de vídeo",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores que veo repetirse" },
      {
        type: "list",
        items: [
          "Descargar música de un canal de YouTube \"libre de copyright\" sin comprobar la licencia real que ofrece.",
          "Dar por hecho que \"sin copyright\" significa \"libre para uso comercial\" — no siempre es lo mismo.",
          "Usar una pista descargada durante la prueba gratuita de una biblioteca y seguir publicando tras cancelar la suscripción.",
          "No revisar si la licencia cubre anuncios de pago además de contenido orgánico.",
          "Subir el volumen de la música por encima de la voz sin aplicar ducking en la mezcla.",
          "Asumir que lo que vale para YouTube vale igual para Instagram o TikTok — cada plataforma gestiona la detección a su manera.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Puedo usar una canción que he comprado en una tienda digital?",
        answer:
          "No para un vídeo de marca. Comprar el archivo te da derecho de escucha personal, no de sincronización con vídeo ni de publicación. Necesitas una licencia distinta, casi siempre gestionada por otra vía.",
      },
      {
        type: "faq",
        question: "¿Qué pasa si publico con música sin licencia y no me detectan nada?",
        answer:
          "Puede pasar semanas sin aviso y saltar de golpe cuando el sistema de la plataforma actualiza su base de coincidencias. No detectarlo al momento no significa que estés cubierto, solo que todavía no ha pasado.",
      },
      {
        type: "faq",
        question: "¿Cuánto cuesta una biblioteca de música con licencia?",
        answer:
          "Depende del proveedor y del plan, pero la mayoría se mueve en una suscripción mensual moderada con acceso ilimitado al catálogo mientras esté activa. Suele salir más barato que un solo aviso de copyright resuelto a mano.",
      },
      {
        type: "faq",
        question: "¿A0 Studios elige la música de mis vídeos?",
        answer:
          "Sí, en Grabación + Edición y Producción Completa proponemos música con licencia acorde al tono del vídeo como parte de la edición. Si ya tienes identidad sonora propia, la respetamos y la mantenemos consistente entre piezas.",
      },
      {
        type: "paragraph",
        text: "La música que acompaña un vídeo de marca merece la misma atención que la imagen, el guion o la luz. No es un detalle de última hora que se resuelve buscando \"música sin copyright\" cinco minutos antes de publicar. Si quieres que nos encarguemos de esa parte en tu próxima sesión, escríbenos desde /#contacto.",
      },
    ],
  },
  {
    slug: "hook-video-primeros-segundos",
    title: "El hook en vídeo: cómo grabar los primeros 3 segundos para no perder al espectador",
    description:
      "Por qué el arranque de un vídeo decide si alguien se queda o se va, y cómo planificar y grabar un hook que funcione antes de encender la cámara.",
    publishedAt: "2026-08-19",
    readingTime: "4 min",
    category: "Guía",
    tags: ["hook en vídeo", "retención", "contenido para redes", "grabación de contenido", "estudio Madrid"],
    keyword: "hook en video primeros segundos",
    intent: "informacional",
    excerpt:
      "El espectador decide si se queda o se va antes de que termines la primera frase. Cómo planificamos y grabamos el hook en A0 Studios para que ese primer segundo no se pierda.",
    seoTitle: "El hook en vídeo: primeros 3 segundos | A0 Studios Madrid",
    metaDescription:
      "Cómo grabar el hook de un vídeo: los primeros segundos que deciden si el espectador se queda, y cómo planificarlos antes de grabar en A0 Studios Madrid.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "En A0 Studios grabamos varios vídeos por semana para marcas y creators, y hay un patrón que se repite en los que funcionan y no está en los que no: los primeros que enganchan lo hacen desde el primer segundo, no desde el minuto uno. El espectador no espera a que el vídeo \"arranque de verdad\". Decide quedarse o saltar casi de inmediato.",
      },
      {
        type: "paragraph",
        text: "Eso cambia cómo hay que grabar. No sirve tener el mejor contenido a partir del segundo diez si nadie llega hasta ahí. El hook —la frase, la imagen o la acción que engancha al principio— se planifica antes de encender la cámara, no se improvisa delante de ella.",
      },
      {
        type: "image",
        src: "/blog/hook-video-primeros-segundos/hero.webp",
        alt: "Cámara de cine sobre trípode lista para grabar en set de rodaje",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es un hook y por qué importa" },
      {
        type: "paragraph",
        text: "Un hook es el arranque del vídeo diseñado para que la persona que lo está viendo decida quedarse. No es una presentación ni una intro de marca: es una promesa, una pregunta, una imagen inesperada o una acción a media marcha que corta con lo que el espectador esperaba encontrar al deslizar.",
      },
      {
        type: "paragraph",
        text: "Las plataformas miden cuánto tiempo se queda la gente viendo antes de saltar al siguiente vídeo, y ese dato pesa en si el algoritmo sigue enseñando tu contenido o lo entierra. Un buen guion, una buena luz y una buena edición no sirven de mucho si nadie pasa del primer segundo para verlos.",
      },
      {
        type: "paragraph",
        text: "Esto no es solo cosa de redes verticales. En YouTube, en un webinar grabado o en la portada de un vídeo corporativo en la web pasa lo mismo: el arranque decide si el resto del contenido tiene oportunidad de demostrar lo que vale.",
      },
      {
        type: "paragraph",
        text: "Tampoco es un problema que se resuelva solo en edición. Un hook fuerte necesita que en sala ya se haya grabado el plano, la frase y el gesto correctos. Si en el momento de grabar no hay una toma con esa fuerza, en montaje no hay manera de inventarla a partir de material genérico.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Empieza por la acción, no por la presentación" },
      {
        type: "paragraph",
        text: "\"Hola, soy Fulano y hoy os voy a hablar de...\" es la forma más rápida de perder a alguien. Empieza en medio de la acción, con la frase más fuerte del vídeo, o con la pregunta que resuelve el contenido. La presentación, si hace falta, va después de haber ganado la atención, no antes.",
      },
      { type: "heading", level: 3, text: "Haz una promesa concreta, no genérica" },
      {
        type: "paragraph",
        text: "\"Te voy a contar algo interesante\" no promete nada. \"Así es como grabamos 15 clips en una sola mañana\" sí. Cuanto más concreto sea lo que vas a entregar, más motivo tiene el espectador para quedarse a comprobarlo. El hook funciona porque genera una expectativa clara, no porque suene misterioso.",
      },
      { type: "heading", level: 3, text: "Corta el aire visual y sonoro desde el primer fotograma" },
      {
        type: "paragraph",
        text: "Nada de logo animado de tres segundos, nada de silencio de cámara buscando encuadre, nada de \"a ver, vamos a empezar\". En edición, el primer corte limpia cualquier segundo muerto antes del contenido real. Si al revisar el montaje dudas si algo aporta en los primeros dos segundos, corta.",
      },
      {
        type: "paragraph",
        text: "Un texto en pantalla que refuerza la primera frase también ayuda, sobre todo si alguien va a ver el vídeo sin sonido, como pasa en gran parte del scroll en redes. No hace falta subtitular todo el vídeo desde el primer segundo, pero sí que la idea central del hook se entienda igual con el audio apagado.",
      },
      {
        type: "image",
        src: "/blog/hook-video-primeros-segundos/mid.webp",
        alt: "Persona grabando vídeo vertical con el móvil en la mano",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "list",
        items: [
          "Abrir con intro animada o logo de marca antes de mostrar contenido.",
          "Presentarte a ti o a la empresa antes de dar algo de valor.",
          "Grabar el hook con el mismo plano y la misma energía que el resto del vídeo.",
          "Dejar el audio plano los primeros segundos, sin remate visual ni texto en pantalla.",
          "No grabar varias tomas del arranque para elegir la más fuerte en montaje.",
          "Usar una pregunta genérica que no promete nada concreto al espectador.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿El hook tiene que ser hablado o puede ser solo visual?",
        answer:
          "Puede ser cualquiera de los dos, o los dos a la vez. Lo que importa es que corte con lo que la persona esperaba ver al deslizar, ya sea con una frase, un movimiento de cámara o un cambio de plano inesperado.",
      },
      {
        type: "faq",
        question: "¿Cuánto debe durar exactamente el hook?",
        answer:
          "En formato vertical, entre 1 y 3 segundos. En vídeo más largo hay algo más de margen, pero la idea es la misma: cuanto antes remates la promesa, menos gente pierdes por el camino.",
      },
      {
        type: "faq",
        question: "¿Hay que grabar el hook aparte del resto del vídeo?",
        answer:
          "En A0 Studios solemos grabar varias tomas del arranque por separado, sueltas de contexto, para tener margen de elegir la mejor en la sala de edición sin repetir toda la sesión.",
      },
      {
        type: "faq",
        question: "¿A0 Studios ayuda a escribir el hook antes de grabar?",
        answer:
          "Sí. En Grabación + Edición y Producción Completa lo trabajamos como parte del guion previo a la sesión, para no perder tiempo de sala improvisando el arranque delante de la cámara.",
      },
      {
        type: "paragraph",
        text: "El hook no es un truco de redes sociales, es la parte del vídeo que decide si el resto se ve. Si vas a grabar contenido y quieres que el arranque esté trabajado antes de pisar el estudio, escríbenos desde /#contacto.",
      },
    ],
  },
  {
    slug: "color-grading-video-marca-que-es",
    title: "Color grading en vídeo de marca: qué es y por qué cambia el resultado final",
    description:
      "Qué es el color grading, en qué se diferencia de la corrección de color y por qué puede ser la diferencia entre un vídeo que parece amateur y uno que parece de marca.",
    publishedAt: "2026-08-20",
    readingTime: "5 min",
    category: "Guía",
    tags: ["color grading", "postproducción", "edición de vídeo", "vídeo de marca", "estudio Madrid"],
    keyword: "color grading en video",
    intent: "informacional",
    excerpt:
      "El color grading es lo que hace que un vídeo bien grabado se sienta terminado. Qué es, cuándo se aplica y qué diferencia real marca en el resultado final.",
    seoTitle: "Color grading en vídeo: qué es y por qué importa | A0 Studios Madrid",
    metaDescription:
      "Qué es el color grading en vídeo, en qué se diferencia de la corrección de color y por qué cambia el resultado final de un vídeo de marca grabado en estudio.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Hay vídeos bien grabados, bien iluminados y bien encuadrados que aun así se sienten a medio hacer. Casi siempre falta el mismo paso: el color grading. Es la parte del proceso que menos se nota cuando está bien hecha y la que más se echa en falta cuando no se ha hecho.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios lo aplicamos en Grabación + Edición y Producción Completa, y es de las cosas que más preguntan los clientes que vienen de grabar por su cuenta: por qué su vídeo, con buena cámara y buena luz, no se ve como el de una marca que sale en redes con aspecto cuidado. Casi siempre la respuesta está aquí.",
      },
      {
        type: "image",
        src: "/blog/color-grading-video-marca-que-es/hero.webp",
        alt: "Monitor mostrando un programa de edición y color de vídeo con línea de tiempo",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es el color grading" },
      {
        type: "paragraph",
        text: "El color grading es el ajuste creativo del color de un vídeo en postproducción: contraste, temperatura, saturación, tonos de piel, look general de la imagen. No es maquillar un error de grabación, es decidir cómo se ve la pieza terminada y aplicar ese criterio de forma consistente en todos los planos.",
      },
      {
        type: "paragraph",
        text: "Se suele confundir con la corrección de color, que es un paso distinto y previo: igualar la exposición y el blanco entre planos grabados con distinta luz o distinta cámara, para que el material de partida sea uniforme. La corrección arregla, el grading decide el aspecto final.",
      },
      {
        type: "paragraph",
        text: "En DaVinci Resolve, que es lo que usamos en A0 Studios para esta parte, ambos pasos van seguidos: primero se nivela el material bruto, después se aplica el look. Sin ese primer paso, el grading amplifica cualquier diferencia entre planos en lugar de disimularla.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Empieza por un look de referencia, no por probar filtros" },
      {
        type: "paragraph",
        text: "El error más habitual es abrir la herramienta de color y empezar a mover sliders hasta que algo \"se vea bien\". Funciona mejor al revés: definir antes de grabar qué look busca la marca —más cálido, más neutro, más contrastado— y grabar ya pensando en ese resultado, no intentar arreglarlo todo después.",
      },
      { type: "heading", level: 3, text: "Cuida los tonos de piel antes que cualquier otra cosa" },
      {
        type: "paragraph",
        text: "En vídeo de marca casi siempre hay una persona hablando a cámara. Si el grading deja la piel con un tono raro para conseguir un ambiente más cinematográfico, se ha perdido de vista lo importante. La piel se corrige primero y el resto del look se construye alrededor, no al contrario.",
      },
      { type: "heading", level: 3, text: "Aplica el mismo look a toda la pieza, no plano a plano" },
      {
        type: "paragraph",
        text: "Un vídeo con planos que cambian de tono entre sí se nota, aunque el espectador no sepa explicar por qué. El grading se piensa como un look único que se aplica de forma consistente a toda la sesión, ajustando después cada plano lo mínimo necesario para que encajen entre ellos.",
      },
      {
        type: "image",
        src: "/blog/color-grading-video-marca-que-es/mid.webp",
        alt: "Set de grabación con cámara y equipo de iluminación en estudio fotográfico",
        width: 1920,
        height: 1080,
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "list",
        items: [
          "Aplicar un LUT genérico descargado de internet sin ajustar a la escena real.",
          "Saturar demasiado buscando que el vídeo \"destaque\" en redes.",
          "No corregir el color entre planos antes de aplicar el look creativo.",
          "Ignorar cómo se ve el grading en pantalla de móvil, donde se consume la mayoría del contenido.",
          "Cambiar de look entre vídeos de la misma marca, perdiendo consistencia visual.",
          "Grabar sin pensar en el grading y esperar que la edición arregle una imagen plana.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Todos los vídeos necesitan color grading?",
        answer:
          "No todos al mismo nivel. Un vídeo rápido para historias puede quedarse en una corrección básica. Pero un vídeo de marca, un vídeo corporativo o cualquier pieza que representa la imagen de una empresa se beneficia siempre de un grading cuidado.",
      },
      {
        type: "faq",
        question: "¿Se puede hacer buen color grading con un móvil?",
        answer:
          "Se puede corregir color con material de móvil, pero el margen es menor: menos rango dinámico y compresión más agresiva. Con cámara profesional grabando en un formato plano hay mucho más margen para el grading final.",
      },
      {
        type: "faq",
        question: "¿A0 Studios incluye color grading en la edición?",
        answer:
          "Sí. En Grabación + Edición y Producción Completa el grading forma parte del proceso de postproducción, no es un extra aparte. Se aplica un look consistente pensado para el tipo de contenido y la marca.",
      },
      {
        type: "faq",
        question: "¿Cuánto tarda el grading en el proceso de edición?",
        answer:
          "Depende del número de planos y de si es la primera vez que se define el look de la marca. Una vez definido, aplicarlo a nuevas piezas es rápido porque el criterio ya está establecido.",
      },
      {
        type: "paragraph",
        text: "El color grading no es un capricho estético, es lo que separa un vídeo bien grabado de un vídeo terminado. Si quieres que tu contenido tenga un look consistente y cuidado desde la primera sesión, escríbenos desde /#contacto.",
      },
    ],
  },
  {
    slug: "como-dar-feedback-editor-video-sin-perder-tiempo",
    title: "Cómo dar feedback a un editor de vídeo sin perder tiempo en revisiones",
    description:
      "Cómo estructurar el feedback a un editor de vídeo para que las revisiones sean rápidas y claras, en lugar de convertirse en rondas de cambios que no terminan nunca.",
    publishedAt: "2026-08-25",
    readingTime: "4 min",
    category: "Guía",
    tags: ["edición de vídeo", "postproducción", "feedback", "flujo de trabajo", "estudio Madrid"],
    keyword: "feedback a un editor de video",
    intent: "informacional",
    excerpt:
      "Un feedback claro cierra un vídeo en una ronda. Uno ambiguo lo alarga semanas. Cómo estructurar las revisiones de edición para que no se conviertan en un proceso sin fin.",
    seoTitle: "Feedback a un editor de vídeo | A0 Studios Madrid",
    metaDescription:
      "Cómo dar feedback a un editor de vídeo para que las revisiones sean rápidas y claras, sin rondas de cambios que no terminan nunca.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "La edición de un vídeo casi nunca falla en la grabación. Falla en las revisiones: feedback vago, rondas de cambios que se acumulan sin resolver nada y un vídeo que tarda semanas en salir cuando técnicamente estaba listo desde la primera entrega.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios gestionamos la edición de la mayoría de los proyectos que grabamos en Grabación + Edición y Producción Completa, y el cuello de botella casi nunca es el editor: es cómo se comunica lo que hay que cambiar. Un feedback mal dado multiplica las rondas de revisión sin mejorar el resultado final, y un feedback bien estructurado puede cerrar un proyecto en una sola vuelta.",
      },
      {
        type: "image",
        src: "/blog/como-dar-feedback-editor-video-sin-perder-tiempo/hero.webp",
        alt: "Línea de tiempo de edición de vídeo en la pantalla de un ordenador",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué las revisiones se alargan tanto" },
      {
        type: "paragraph",
        text: "Esto se nota sobre todo en clientes que graban contenido de forma recurrente: si cada vídeo tarda tres o cuatro rondas en cerrarse, el calendario de publicación se rompe cada vez, aunque el equipo de grabación y edición haga bien su trabajo.",
      },
      {
        type: "paragraph",
        text: "El problema no suele ser el número de cambios, sino la ambigüedad. Comentarios como \"no me convence el ritmo\" o \"que se sienta más profesional\" no le dicen al editor qué tiene que tocar exactamente. La siguiente entrega acierta a medias, aparecen comentarios nuevos sobre partes ya corregidas, y el proceso se alarga sin que el vídeo mejore al ritmo esperado.",
      },
      {
        type: "paragraph",
        text: "Cada ronda de revisión sin instrucciones claras añade días, no horas. Si el proyecto tiene fecha de publicación, ese margen se come el calendario de contenido completo, no solo el vídeo en cuestión: un retraso de una semana en un vídeo suele arrastrar los tres o cuatro que venían detrás en el plan de publicación.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Da el feedback con timestamps, no en general" },
      {
        type: "paragraph",
        text: "Un comentario sin minuto asociado obliga al editor a revisar el vídeo entero buscando a qué te refieres. \"El corte del minuto 1:24 se siente brusco\" se soluciona en cinco minutos. \"El ritmo del principio no me gusta\" puede significar diez cosas distintas y ninguna de ellas queda clara sin más contexto ni ejemplo.",
      },
      { type: "heading", level: 3, text: "Separa lo que es gusto de lo que es error" },
      {
        type: "paragraph",
        text: "No es lo mismo un fallo objetivo —un salto de audio, un logo mal colocado, una transición que no cuadra— que una preferencia de estilo. Márcalos por separado. Los errores se corrigen siempre; las preferencias se negocian, y está bien decir que no cuando rompen el ritmo o la coherencia del vídeo terminado, aunque el cliente insista en probarlo.",
      },
      { type: "heading", level: 3, text: "Cierra las rondas de revisión con un número" },
      {
        type: "paragraph",
        text: "Define de antemano cuántas rondas de cambios incluye el proyecto —en A0 Studios solemos trabajar con dos— y comunícalo así a todo el equipo que va a dar feedback antes de que empiece la revisión. Sin ese límite claro, es fácil que el proceso se convierta en una revisión abierta que no termina nunca y que desgasta tanto al editor como al cliente.",
      },
      {
        type: "image",
        src: "/blog/como-dar-feedback-editor-video-sin-perder-tiempo/mid.webp",
        alt: "Editor de vídeo trabajando en un portátil con software de postproducción",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes" },
      {
        type: "list",
        items: [
          "Mandar el feedback de varias personas sin unificarlo antes: el editor recibe instrucciones contradictorias y no sabe cuál priorizar.",
          "Pedir cambios por mensajes sueltos en vez de una lista cerrada de puntos numerados.",
          "No indicar el minuto exacto del vídeo y esperar que el editor lo localice por su cuenta.",
          "Cambiar de opinión sobre algo que ya se había aprobado en una ronda anterior.",
          "Dar feedback sin haber visto el vídeo entero, solo el primer minuto.",
          "No fijar un límite de rondas de revisión desde el principio del proyecto.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuántas rondas de revisión son razonables en un vídeo de marca?",
        answer:
          "Dos suele ser suficiente si el feedback llega claro y unificado desde el principio. Más de tres rondas casi siempre indica que el problema no es la edición en sí, sino que el brief inicial no estaba lo bastante definido antes de empezar a grabar.",
      },
      {
        type: "faq",
        question: "¿Quién debería dar el feedback si hay varias personas implicadas?",
        answer:
          "Idealmente una sola persona que unifique los comentarios del equipo antes de mandarlos al editor. Si el editor recibe feedback directo de cinco personas distintas, es casi seguro que va a encontrar contradicciones entre ellas y perderá tiempo decidiendo cuál seguir.",
      },
      {
        type: "faq",
        question: "¿Cómo se comparte el feedback con timestamps en la práctica?",
        answer:
          "Con herramientas como Frame.io o incluso comentarios con marca de tiempo en un enlace de Google Drive. Lo importante no es la herramienta concreta, es que cada comentario apunte a un minuto exacto del vídeo, no a una sensación general sobre el conjunto.",
      },
      {
        type: "faq",
        question: "¿A0 Studios incluye rondas de revisión en la edición?",
        answer:
          "Sí. En Grabación + Edición y Producción Completa el precio ya incluye rondas de ajustes acordadas de antemano, y ayudamos a estructurar el feedback del cliente para que esas rondas se resuelvan rápido y sin fricción.",
      },
      {
        type: "paragraph",
        text: "Un buen feedback no acelera solo la edición, acelera todo el calendario de contenido que depende de ese vídeo. Si quieres que tus piezas salgan de revisión a la primera sin rondas eternas, escríbenos desde /#contacto.",
      },
    ],
  },
  {
    slug: "que-es-un-sizzle-reel-cuando-grabarlo",
    title: "Qué es un sizzle reel y cuándo tiene sentido grabarlo",
    description:
      "Qué es un sizzle reel, en qué se diferencia de un aftermovie y cuándo tiene sentido grabarlo para vender la energía de un evento, un lanzamiento o una marca en menos de dos minutos.",
    publishedAt: "2026-08-26",
    readingTime: "4 min",
    category: "Guía",
    tags: ["sizzle reel", "vídeo corporativo", "eventos", "producción audiovisual", "Madrid"],
    keyword: "que es un sizzle reel",
    intent: "informacional",
    excerpt:
      "Un sizzle reel condensa lo mejor de un evento o una marca en menos de dos minutos. Cuándo tiene sentido grabarlo y en qué se diferencia de un aftermovie.",
    seoTitle: "Qué es un sizzle reel y cuándo grabarlo | A0 Studios Madrid",
    metaDescription:
      "Qué es un sizzle reel, en qué se diferencia de un aftermovie y cuándo grabarlo para tu marca o evento en Madrid.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Un sizzle reel es un vídeo corto que condensa lo mejor de un evento, un producto o una marca en menos de dos minutos. No cuenta una historia lineal: engancha con ritmo, imagen y sonido para dejar una sensación concreta en quien lo ve, no una explicación completa de lo que pasó.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios lo grabamos sobre todo para agencias y equipos de marketing que necesitan mostrar la energía de un evento (una feria, una conferencia, un lanzamiento) sin esperar semanas a un vídeo largo. Es el formato que se pide cuando hay que enseñar algo al día siguiente, no al mes siguiente, y suele acabar en la home de una web, en un email a inversores o en la apertura de una propuesta comercial.",
      },
      {
        type: "image",
        src: "/blog/que-es-un-sizzle-reel-cuando-grabarlo/hero.webp",
        alt: "Línea de tiempo de edición de vídeo en la pantalla de un ordenador",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es un sizzle reel y para qué sirve" },
      {
        type: "paragraph",
        text: "Un sizzle reel no es un aftermovie ni un resumen editorial. El aftermovie explica qué pasó en un evento con cierta narrativa y suele durar tres o cuatro minutos, con testimonios y contexto. El sizzle reel vende una sensación en 30 a 90 segundos, con cortes rápidos, música con pegada y planos que priorizan el impacto visual sobre la explicación.",
      },
      {
        type: "paragraph",
        text: "Se usa para pitches comerciales, para la home de una web, para redes el mismo día del evento o para abrir una presentación interna. La clave es que no necesita contexto previo: alguien que no estuvo ahí tiene que entender de qué va en los primeros diez segundos, sin depender de un locutor que se lo explique.",
      },
      {
        type: "paragraph",
        text: "Muchas marcas graban varios eventos al año y terminan con horas de metraje que nadie vuelve a abrir. Un sizzle reel resuelve eso: convierte ese material en una pieza de 60-90 segundos que se puede reutilizar en redes, en una propuesta comercial o en la memoria anual, sin tener que producir un vídeo nuevo desde cero cada vez.",
      },
      { type: "heading", level: 2, text: "Cómo grabar un sizzle reel que funcione" },
      { type: "heading", level: 3, text: "Define primero para qué canal es" },
      {
        type: "paragraph",
        text: "Un sizzle reel para redes dura entre 30 y 45 segundos y va en vertical. Uno pensado para abrir una presentación de ventas puede llegar a 90 segundos y va en horizontal. Decidir esto antes de grabar cambia los planos que necesitas: si vas a cortar rápido para redes, necesitas más variedad de ángulos por minuto de grabación real.",
      },
      { type: "heading", level: 3, text: "Piensa en el montaje antes de grabar" },
      {
        type: "paragraph",
        text: "En una sesión de sizzle reel grabamos pensando en la línea de tiempo final, no al revés. Eso significa pedir también planos de recurso (b-roll): manos, detalles, reacciones del público, transiciones entre espacios. En montaje trabajamos con DaVinci Resolve precisamente porque permite cortar al ritmo de la música con precisión de fotograma. Sin ese material de apoyo grabado de antemano, el editor no tiene con qué cortar rápido sin que se note el pegamento.",
      },
      { type: "heading", level: 3, text: "Prioriza momentos con energía, no explicaciones" },
      {
        type: "paragraph",
        text: "Un ponente terminando una frase con fuerza vale más que dos minutos de contexto previo. En estudio o en evento, buscamos los momentos donde pasa algo (una reacción, un aplauso, un gesto) porque son los que sostienen el ritmo de corte que pide este formato. Si solo hay planos estáticos de gente hablando, el reel se siente plano por mucho que se corte rápido.",
      },
      {
        type: "image",
        src: "/blog/que-es-un-sizzle-reel-cuando-grabarlo/mid.webp",
        alt: "Público asistiendo a un evento corporativo en directo",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes al grabar un sizzle reel" },
      {
        type: "list",
        items: [
          "Grabar solo el contenido principal, sin planos de recurso para cortar entre ellos.",
          "Elegir la música después de grabar, en vez de definir el ritmo de corte desde el guion o desde el brief inicial.",
          "Alargarlo hasta los tres o cuatro minutos: deja de ser un sizzle reel y pasa a ser un resumen que nadie termina de ver entero.",
          "No adaptar el formato (vertical, horizontal, cuadrado) al canal donde se va a publicar primero.",
          "Cerrar con un mensaje de marca tan largo que rompe el ritmo construido durante todo el vídeo.",
          "Grabar con una sola cámara fija y esperar que el montaje disimule la falta de ángulos.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto dura un sizzle reel?",
        answer:
          "Entre 30 y 90 segundos. Si necesitas más tiempo para explicar algo con contexto, probablemente lo que buscas es un aftermovie o un vídeo corporativo, no un sizzle reel.",
      },
      {
        type: "faq",
        question: "¿Un sizzle reel sirve para algo que no sea un evento?",
        answer:
          "Sí. Funciona igual de bien para presentar un producto, abrir una propuesta comercial o resumir un año de contenido de marca en un solo vídeo de highlights, sin depender de que haya un evento de por medio.",
      },
      {
        type: "faq",
        question: "¿Necesito grabar todo el evento para hacer un buen sizzle reel?",
        answer:
          "No todo, pero sí lo suficiente para tener variedad: al menos dos ángulos de cámara durante los momentos clave, más planos de recurso del entorno, del público asistente y de los detalles del espacio.",
      },
      {
        type: "faq",
        question: "¿Cuánto tarda en entregarse un sizzle reel tras el evento?",
        answer:
          "En A0 Studios con Producción Completa se puede entregar en 24-48 horas si el objetivo es publicarlo mientras el evento todavía tiene eco en redes. Para plazos más ajustados, lo hablamos antes de grabar para organizar el flujo de edición en consecuencia.",
      },
      {
        type: "paragraph",
        text: "Si tienes un evento, un lanzamiento o una sesión de contenido y necesitas que se vea así de bien en menos de dos minutos, hablamos. Escríbenos desde /#contacto y te decimos si un sizzle reel es el formato que encaja con lo que necesitas.",
      },
    ],
  },
  {
    slug: "dirigir-talento-sin-experiencia-camara",
    title: "Cómo dirigir a alguien sin experiencia delante de la cámara",
    description:
      "Cómo dirigir a un fundador, un empleado o un invitado que nunca ha grabado nada, para sacar una grabación natural sin que se note que es la primera vez.",
    publishedAt: "2026-08-27",
    readingTime: "5 min",
    category: "Guía",
    tags: ["dirección de talento", "grabación de contenido", "producción de vídeo", "estudio Madrid", "presencia en cámara"],
    keyword: "dirigir a alguien sin experiencia en camara",
    intent: "informacional",
    excerpt:
      "La mayoría de las personas que grabamos en A0 Studios no son actores ni presentadores. Cómo dirigirlas para que salgan naturales sin memorizar nada.",
    seoTitle: "Cómo dirigir a alguien sin experiencia en cámara | A0 Studios Madrid",
    metaDescription:
      "Cómo dirigir a alguien sin experiencia delante de la cámara para lograr una grabación natural, sin memorizar guiones ni parecer forzado.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "La mayoría de las personas que se sientan delante de nuestras cámaras en A0 Studios no son actores ni presentadores. Son founders, responsables de marketing, empleados que van a salir en un vídeo de empresa o invitados de un podcast que nunca han grabado nada. Su primer instinto casi siempre es el mismo: ponerse rígidos, hablar más despacio de lo normal y buscar la palabra exacta en vez de la idea.",
      },
      {
        type: "paragraph",
        text: "Dirigir a alguien sin experiencia no consiste en darle un guion para que lo memorice. Consiste en quitarle presión hasta que vuelva a hablar como habla en una conversación normal. Esto es lo que hacemos en sesión para conseguirlo.",
      },
      {
        type: "image",
        src: "/blog/dirigir-talento-sin-experiencia-camara/hero.webp",
        alt: "Persona con una cámara dirigiendo a alguien durante una grabación",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué nadie suena natural a la primera" },
      {
        type: "paragraph",
        text: "Cuando alguien ve una cámara apuntándole, dos cosas pasan a la vez: empieza a pensar en cómo se ve (postura, manos, cara) y en qué va a decir. Hacer las dos cosas bien al mismo tiempo es difícil incluso para gente con experiencia. El resultado típico es un tono más formal de lo normal, frases más largas de lo que diría en una charla real y pausas raras buscando la palabra perfecta.",
      },
      {
        type: "paragraph",
        text: "Esto no es un problema de la persona, es un problema de dirección. Si le damos un guion cerrado para que lo recite, empeoramos el problema: ahora además tiene que recordar texto. La solución no es exigir más disciplina, es cambiar cómo planteamos la sesión antes de que se siente delante del objetivo.",
      },
      { type: "heading", level: 2, text: "Cómo dirigir para conseguir naturalidad" },
      { type: "heading", level: 3, text: "Da ideas, no frases" },
      {
        type: "paragraph",
        text: "En vez de un guion palabra por palabra, damos una lista de 3-4 ideas que tiene que tocar, en el orden que le resulte más natural decirlas. Si la persona reformula con sus propias palabras, mejor: eso es exactamente lo que hace que suene como ella y no como un anuncio leído. El guion cerrado solo funciona si la persona ya está entrenada para sonar natural leyendo, y eso es raro fuera de locutores profesionales.",
      },
      { type: "heading", level: 3, text: "Graba una toma de calentamiento que no vas a usar" },
      {
        type: "paragraph",
        text: "La primera toma casi nunca es la buena, y decírselo a la persona antes de empezar cambia todo. Si sabe que esa primera grabación no cuenta, se relaja porque no siente que tiene que salir perfecta. Solemos grabar dos o tres minutos de charla suelta al principio, sin cámara puesta en serio, solo para que se acostumbre al espacio y a nuestra voz antes de que empiece a importar el resultado.",
      },
      { type: "heading", level: 3, text: "Haz preguntas, no pidas discursos" },
      {
        type: "paragraph",
        text: "Es más fácil responder a una pregunta que soltar un monólogo desde cero. Si necesitamos que alguien explique un tema en cámara, se lo planteamos como si estuviéramos charlando fuera de cámara: \"¿por qué decidisteis hacer esto así?\" en vez de \"cuéntame por qué decidimos hacer esto así\". La respuesta sale más suelta porque no está construyendo un discurso, está contestando algo que le acaban de preguntar.",
      },
      {
        type: "image",
        src: "/blog/dirigir-talento-sin-experiencia-camara/mid.webp",
        alt: "Persona hablando con confianza frente a una cámara en un plató",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes al dirigir a alguien sin experiencia" },
      {
        type: "list",
        items: [
          "Darle un guion cerrado y pedirle que lo memorice palabra por palabra.",
          "Cortar la grabación cada vez que se traba, en vez de dejarle terminar la idea y repetir después.",
          "Corregir en voz alta delante de todo el equipo, en lugar de dar el ajuste en privado entre tomas.",
          "No avisar antes de grabar de cuánto va a durar la sesión: la incertidumbre pone más nerviosa a la persona.",
          "Pedir energía o entusiasmo sin dar contexto de para qué canal es y quién lo va a ver.",
          "Encadenar demasiadas tomas seguidas sin pausa: el cansancio se nota más que los nervios iniciales.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto tiempo hay que dedicar a alguien sin experiencia antes de grabar en serio?",
        answer:
          "Con 10-15 minutos de charla y una toma de calentamiento suele ser suficiente para que la mayoría de personas se relajen. Si la sesión es larga o hay varios bloques de contenido, conviene repetir ese calentamiento breve al empezar cada bloque nuevo.",
      },
      {
        type: "faq",
        question: "¿Es mejor usar teleprompter con alguien sin experiencia?",
        answer:
          "Depende del texto. Para datos concretos (cifras, nombres, una definición exacta) ayuda. Para explicar algo con sus propias palabras, el teleprompter suele sonar peor porque la persona lee en vez de pensar en voz alta.",
      },
      {
        type: "faq",
        question: "¿Qué hago si la persona se pone más nerviosa cuantas más tomas grabamos?",
        answer:
          "Para y cambia de tema unos minutos. Seguir insistiendo sobre el mismo punto suele empeorarlo. Volver más tarde a esa parte, cuando ya lleva un rato hablando sueltos de otras cosas, casi siempre da mejor resultado que siete tomas seguidas del mismo párrafo.",
      },
      {
        type: "faq",
        question: "¿Se nota en el vídeo final que alguien no tiene experiencia en cámara?",
        answer:
          "Solo si se le dirige mal. Con las ideas claras, tiempo de calentamiento y sin forzar un guion cerrado, la diferencia entre alguien con experiencia y alguien sin ella se reduce muchísimo en el resultado final.",
      },
      {
        type: "paragraph",
        text: "Si tienes que grabar a alguien que nunca ha estado delante de una cámara y quieres que salga natural, en A0 Studios dirigimos la sesión pensando en eso desde el minuto uno. Escríbenos desde /#contacto y lo preparamos juntos antes del día de grabación.",
      },
    ],
  },
  {
    slug: "grabar-exteriores-vs-estudio-cuando-compensa",
    title: "Grabar en exteriores vs estudio: cuándo compensa salir del plató",
    description:
      "Qué se gana y qué se arriesga al grabar contenido de marca fuera del estudio, y cómo decidir entre plató y localización exterior antes de reservar sesión.",
    publishedAt: "2026-08-31",
    readingTime: "5 min",
    category: "Guía",
    tags: ["grabación exteriores", "estudio de grabación", "producción de vídeo", "Madrid", "contenido de marca"],
    keyword: "grabar en exteriores vs estudio",
    intent: "informacional",
    excerpt:
      "Salir a grabar fuera del estudio parece más auténtico, pero trae variables que no controlas: luz, ruido, permisos. Cuándo compensa y cuándo no.",
    seoTitle: "Grabar en exteriores vs estudio | A0 Studios Madrid",
    metaDescription:
      "Grabar en exteriores vs estudio: cuándo la localización aporta más que el plató y cuándo juega en contra por luz, sonido o logística.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Cada pocos meses nos preguntan si podemos grabar fuera del estudio: en una oficina, en la calle, en una terraza con vistas a Madrid. La respuesta corta es sí, pero no siempre es la mejor opción para el vídeo que se quiere conseguir.",
      },
      {
        type: "paragraph",
        text: "En A0 Studios grabamos la mayoría de las sesiones en plató porque ahí controlamos luz, sonido y tiempo. Salir fuera añade valor visual, pero también variables que no dependen de nosotros. Antes de decidir, conviene entender qué se gana y qué se arriesga con cada opción.",
      },
      {
        type: "image",
        src: "/blog/grabar-exteriores-vs-estudio-cuando-compensa/hero.webp",
        alt: "Azotea urbana con vistas al perfil de una ciudad, como localización para grabar contenido en exteriores",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué esta decisión importa antes de grabar" },
      {
        type: "paragraph",
        text: "Elegir plató o exterior no es una cuestión estética, es una cuestión de riesgo. Un rodaje en estudio es repetible: si algo sale mal, se repite el plano sin depender de nada externo. Un rodaje en exterior depende de la luz del día, del ruido de la calle, de si llueve o de si alguien aparca delante del encuadre.",
      },
      {
        type: "paragraph",
        text: "Eso no significa que el exterior sea peor. Una terraza con el skyline de Madrid, una oficina real con el equipo trabajando de fondo o una calle con contexto añaden autenticidad que un fondo de estudio no da. El problema aparece cuando se elige la localización solo por estética, sin planificar la parte técnica.",
      },
      { type: "heading", level: 2, text: "Cómo decidir entre exteriores y estudio" },
      { type: "heading", level: 3, text: "Luz y condiciones climáticas" },
      {
        type: "paragraph",
        text: "La luz natural cambia cada 20-30 minutos. Grabar al mediodía deja sombras duras; grabar a las 18:00 en invierno puede dejar sin luz a media sesión. En plató controlamos la luz con paneles LED y no dependemos de la meteorología. Si la sesión es en exteriores, conviene reservar una hora extra de margen y tener un plan B bajo techo por si llueve.",
      },
      { type: "heading", level: 3, text: "Sonido y control del entorno" },
      {
        type: "paragraph",
        text: "El ruido de fondo es el problema número uno de grabar fuera del estudio: tráfico, obras, aire acondicionado, gente hablando. Un micrófono de corbata inalámbrico ayuda, pero no arregla un local con eco ni una terraza con viento. En plató tratamos la sala acústicamente y grabamos limpio a la primera toma.",
      },
      { type: "heading", level: 3, text: "Logística, tiempo y permisos" },
      {
        type: "paragraph",
        text: "Grabar en un espacio público o en la oficina de un cliente añade tiempo que no está en el guion: montar y desmontar equipo, esperar a que se libere una sala, o pedir permiso si el equipo de grabación supera dos o tres personas con cámara. En una jornada de estudio se entra, se graba y se sale sin depender de terceros.",
      },
      {
        type: "image",
        src: "/blog/grabar-exteriores-vs-estudio-cuando-compensa/mid.webp",
        alt: "Persona grabando con cámara en una calle concurrida de la ciudad",
        width: 1920,
        height: 1299,
      },
      { type: "heading", level: 2, text: "Cuándo sí compensa salir del plató" },
      {
        type: "list",
        items: [
          "El espacio de la marca es parte del mensaje: mostrar la oficina real de una empresa en un vídeo de employer branding aporta más que un fondo neutro.",
          "El vídeo necesita contexto urbano reconocible: una entrevista con Madrid de fondo comunica algo que el plató no puede simular.",
          "El presupuesto permite un día completo de rodaje con margen para imprevistos de luz y sonido.",
          "El contenido es puntual (un evento, una inauguración, una feria) y no se puede repetir en otro sitio.",
          "Hay equipo de sonido de refuerzo, como una grabadora externa o micros de corbata, y alguien dedicado solo a vigilar el audio.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Se puede grabar en exteriores con la misma calidad que en estudio?",
        answer:
          "Con el equipo adecuado sí, pero exige más tiempo de preparación y un plan B si falla la luz o el sonido. En estudio esa variable desaparece porque las condiciones se controlan de antemano.",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo extra hay que calcular para un rodaje en exterior?",
        answer:
          "Al menos una hora más que en plató, entre montaje, desplazamientos y margen por climatología o ruido imprevisto.",
      },
      {
        type: "faq",
        question: "¿Qué pasa si llueve el día del rodaje en exterior?",
        answer:
          "Si no hay plan B bajo techo, se reprograma. Por eso en A0 Studios solemos combinar: parte de la sesión en plató y solo los planos que necesitan contexto real fuera.",
      },
      {
        type: "faq",
        question: "¿A0 Studios graba fuera del estudio de Ronda de Atocha?",
        answer:
          "Sí, cuando el proyecto lo pide: oficinas de cliente, eventos, exteriores en Madrid. Aun así recomendamos evaluarlo caso por caso antes de descartar el plató.",
      },
      {
        type: "paragraph",
        text: "Si no sabes si tu próximo vídeo pide plató o calle, cuéntanos qué quieres grabar y te decimos qué opción tiene menos riesgo. Escríbenos desde /#contacto.",
      },
    ],
  },
  {
    slug: "perder-miedo-camara-primera-grabacion",
    title: "Cómo perder el miedo a la cámara: consejos para tu primera grabación",
    description:
      "Por qué se traba la voz delante de una cámara, qué se puede preparar antes de grabar y cómo pierden el miedo founders y equipos que graban por primera vez en A0 Studios.",
    publishedAt: "2026-09-01",
    readingTime: "5 min",
    category: "Guía",
    tags: ["miedo a la camara", "grabación de vídeo", "marca personal", "Madrid", "presencia en cámara"],
    keyword: "perder el miedo a la camara",
    intent: "informacional",
    excerpt:
      "Casi nadie llega a su primera grabación relajado. Qué pasa realmente delante de una cámara y qué hacemos en A0 Studios para que la sesión no se note forzada.",
    seoTitle: "Cómo perder el miedo a la cámara | A0 Studios Madrid",
    metaDescription:
      "Perder el miedo a la cámara: por qué se traba la voz al grabar y cómo prepararte antes de tu primera sesión para que salga natural.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "Casi todos los founders y equipos que vienen a grabar por primera vez a A0 Studios dicen lo mismo antes de empezar: \"a ver cómo salgo, no se me da bien esto\". Es la reacción más normal que hay. Hablar delante de una cámara no es lo mismo que hablar delante de una persona, aunque el cerebro tarde un rato en entenderlo.",
      },
      {
        type: "paragraph",
        text: "El miedo a la cámara no se quita leyendo consejos la noche antes. Se reduce con preparación concreta y con unos primeros minutos de sesión bien gestionados. Esto es lo que hacemos en A0 Studios con quien graba por primera vez, y lo que puedes preparar tú antes de sentarte delante del objetivo.",
      },
      {
        type: "image",
        src: "/blog/perder-miedo-camara-primera-grabacion/hero.webp",
        alt: "Persona hablando con seguridad frente a cámara durante una grabación",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué se nos traba la voz delante de una cámara" },
      {
        type: "paragraph",
        text: "Cuando hablas con una persona, recibes señales todo el rato: asiente, sonríe, frunce el ceño si no entiende algo. Delante de una cámara esas señales desaparecen. El cerebro interpreta ese silencio como una amenaza social y activa la misma respuesta que ante cualquier situación de exposición: se acelera el pulso, se seca la boca, la voz sube de tono.",
      },
      {
        type: "paragraph",
        text: "A eso se suma la autoconsciencia: mientras hablas, una parte de tu atención está evaluando cómo te ves en lugar de centrarse en lo que estás diciendo. Es la razón por la que alguien que se explica de maravilla en una reunión se queda en blanco en cuanto ve la luz roja de grabación encendida.",
      },
      { type: "heading", level: 2, text: "Cómo perder el miedo a la cámara paso a paso" },
      { type: "heading", level: 3, text: "Prepara el contenido, no el guion palabra por palabra" },
      {
        type: "paragraph",
        text: "Memorizar un guion cierra la puerta a hablar con naturalidad: en cuanto se te olvida una palabra, se nota el corte. Funciona mejor preparar 3-4 ideas clave por bloque y dejar que la frase salga distinta cada vez. En A0 Studios trabajamos con guion técnico en teleprompter solo para la estructura, no para memorizar de forma literal.",
      },
      { type: "heading", level: 3, text: "Graba antes de grabar" },
      {
        type: "paragraph",
        text: "El primer take casi nunca es el bueno, y eso está bien. Antes de la toma que se queda, grabamos una o dos de calentamiento sin presión, solo para que el cuerpo se acostumbre a la cámara encendida. Ese primer minuto de nervios hay que gastarlo antes de la toma que importa, no durante ella.",
      },
      { type: "heading", level: 3, text: "Habla con una persona, no con un objetivo" },
      {
        type: "paragraph",
        text: "En sesión, ponemos a alguien del equipo justo al lado del objetivo para que mires a una persona real mientras hablas, no a un círculo de cristal. Cambia por completo el tono: la voz baja, el ritmo se vuelve conversacional y desaparece ese acento artificial de \"estoy leyendo algo\".",
      },
      {
        type: "image",
        src: "/blog/perder-miedo-camara-primera-grabacion/mid.webp",
        alt: "Persona ajustando una cámara de vídeo antes de una grabación",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes que empeoran el miedo a la cámara" },
      {
        type: "list",
        items: [
          "Intentar grabar la toma perfecta a la primera en vez de aceptar que las dos primeras son de calentamiento.",
          "Memorizar el guion palabra por palabra en lugar de tener claras las ideas y dejar salir la frase de forma natural.",
          "Grabar cansado o con hambre justo antes de una reunión importante, sin margen para respirar antes de empezar.",
          "Mirar el monitor de vuelta en lugar de mirar al objetivo o a la persona que hace de referencia.",
          "No parar cuando algo sale mal: seguir forzando la toma tensa la voz y se nota en el resultado final.",
          "Ir solo a grabar sin nadie que dé indicaciones ni feedback en el momento entre toma y toma.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Es normal tener miedo a la cámara aunque sea buen comunicador en persona?",
        answer:
          "Sí, es de lo más común que vemos en sesión. Hablar en público y hablar a una cámara activan mecanismos distintos porque desaparece el feedback en tiempo real de la otra persona.",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo se tarda en perder el miedo a la cámara?",
        answer:
          "La mayoría de personas nota un cambio claro entre la primera y la tercera toma de la misma sesión. Con varias sesiones grabadas, la soltura se vuelve prácticamente automática.",
      },
      {
        type: "faq",
        question: "¿Sirve practicar delante del móvil antes de la sesión?",
        answer:
          "Ayuda a perder la sorpresa inicial de verte hablando, pero no sustituye la sesión real: en A0 Studios cuidamos la luz, el encuadre y la dirección para que ese primer nerviosismo no dependa solo de ti.",
      },
      {
        type: "faq",
        question: "¿Qué pasa si me quedo en blanco durante la grabación?",
        answer:
          "Se para, se respira y se repite el bloque. Es parte normal de cualquier sesión y no cuesta tiempo real: cortar y retomar lleva segundos, forzar una toma tensa cuesta mucho más en edición.",
      },
      {
        type: "paragraph",
        text: "Si tu primera grabación te da respeto, es la señal de que vas en serio con tu contenido, no de que no vales para esto. Cuéntanos qué quieres grabar desde /#contacto y preparamos la sesión para que el miedo se quede fuera de plano.",
      },
    ],
  },
  {
    slug: "repurposing-video-contenido-ya-grabado",
    title: "Repurposing de vídeo: cómo sacar más contenido del que ya has grabado",
    description:
      "Cómo convertir una sola sesión de grabación en semanas de contenido para redes sin volver a encender las cámaras. Cómo planteamos el repurposing en A0 Studios.",
    publishedAt: "2026-09-02",
    readingTime: "5 min",
    category: "Guía",
    tags: ["repurposing de contenido", "estrategia de contenido", "edición de vídeo", "redes sociales", "Madrid"],
    keyword: "repurposing de video",
    intent: "informacional",
    excerpt:
      "Una sola sesión bien planteada puede dar clips, citas y fragmentos de audio para semanas. Así pensamos el repurposing de vídeo en A0 Studios.",
    seoTitle: "Repurposing de vídeo: saca más contenido | A0 Studios Madrid",
    metaDescription:
      "Repurposing de vídeo: convierte una sola sesión en semanas de contenido para redes sin volver a grabar. Así lo hacemos en A0 Studios.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "En A0 Studios grabamos muchas sesiones donde el cliente llega pensando en una sola pieza: un vídeo para LinkedIn, un episodio de podcast, un vídeo de producto. Y se va con eso. Pero de una sesión bien planteada se puede sacar bastante más: clips para redes, citas para carrusel, un fragmento de audio para podcast, hasta ideas para el siguiente guion. A eso lo llamamos repurposing de vídeo.",
      },
      {
        type: "paragraph",
        text: "No es cortar el mismo vídeo en trozos y subirlo tal cual. Es pensar antes de grabar en los distintos formatos que puede dar esa sesión, para no depender de volver a grabar cada semana. Así lo planteamos en sesión y así puedes aplicarlo aunque grabes por tu cuenta.",
      },
      {
        type: "image",
        src: "/blog/repurposing-video-contenido-ya-grabado/hero.webp",
        alt: "Línea de tiempo de edición de vídeo en pantalla con varios clips",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es el repurposing de vídeo y por qué importa" },
      {
        type: "paragraph",
        text: "Repurposing es reutilizar el material de una grabación para producir varias piezas distintas, no solo recortar la misma una y otra vez. Un vídeo de entrevista de 30 minutos puede dar un reel de 30 segundos, tres clips de un minuto para LinkedIn, un fragmento de audio para podcast y dos o tres citas para publicar como imagen.",
      },
      {
        type: "paragraph",
        text: "Importa porque grabar cuesta tiempo: montar equipo, preparar sala, coordinar agendas. Si cada pieza de contenido necesita una sesión nueva, el ritmo de publicación depende de cuántas veces puedas volver a grabar. Con repurposing, una sola sesión bien aprovechada alimenta semanas de contenido en vez de un solo día.",
      },
      {
        type: "paragraph",
        text: "Además cada plataforma tiene su propio lenguaje: lo que funciona en LinkedIn no funciona igual en Instagram, y un podcast completo no se consume como un clip de 40 segundos. Repurposing bien hecho no es recortar y listo. Es adaptar el mismo contenido a cómo consume cada audiencia.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Piensa en formatos antes de grabar, no después" },
      {
        type: "paragraph",
        text: "El repurposing empieza en el guion, no en la sala de edición. Si sabes que quieres sacar clips para LinkedIn, pide a quien habla que remate cada idea con una frase cerrada, sin dejarla a medias enlazando con la siguiente. Eso facilita cortar sin que el clip empiece o acabe a mitad de frase.",
      },
      { type: "heading", level: 3, text: "Un bloque de 30-40 minutos puede dar diez piezas" },
      {
        type: "paragraph",
        text: "De una entrevista o podcast de 30-40 minutos suelen salir 3-4 clips verticales para reels, 2-3 clips horizontales para LinkedIn, un fragmento de audio para plataformas de podcast y varias citas textuales para carrusel o imagen. No hace falta que el vídeo original sea perfecto de principio a fin: basta con identificar bien 5-6 momentos fuertes.",
      },
      { type: "heading", level: 3, text: "Adapta el formato, no repitas el mismo corte" },
      {
        type: "paragraph",
        text: "Subir el mismo clip vertical en todas las plataformas es el error más habitual. LinkedIn no penaliza vídeos algo más largos y con contexto escrito; Instagram premia lo directo desde el primer segundo. Reescribe el texto de acompañamiento y ajusta encuadre, subtítulos y duración según dónde publiques cada pieza.",
      },
      {
        type: "image",
        src: "/blog/repurposing-video-contenido-ya-grabado/mid.webp",
        alt: "Equipo alrededor de una cámara preparando una grabación",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes al reutilizar contenido" },
      {
        type: "list",
        items: [
          "Grabar sin pensar en los cortes: si el vídeo no tiene momentos claros, cortar cuesta el doble en edición.",
          "Publicar el mismo clip en todas las redes sin adaptar el texto ni el formato.",
          "Esperar a acabar la sesión para decidir qué se puede recortar, en lugar de anotarlo en el momento.",
          "No etiquetar ni organizar los brutos: sin carpetas claras, encontrar el momento bueno lleva más tiempo que grabarlo de nuevo.",
          "Sacar tantas piezas de una sesión que se pierde calidad: mejor seis piezas buenas que veinte mediocres.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuántas piezas se pueden sacar de una sola sesión de grabación?",
        answer:
          "Depende del formato original, pero de una entrevista o podcast de 30-40 minutos suelen salir entre 6 y 10 piezas distintas: clips cortos, un fragmento de audio y varias citas para imagen.",
      },
      {
        type: "faq",
        question: "¿El repurposing sirve para cualquier tipo de contenido?",
        answer:
          "Funciona mejor con contenido conversacional: entrevistas, podcast, charlas, talking head. Un vídeo de producto muy dirigido da menos margen, porque cada plano cumple una función concreta.",
      },
      {
        type: "faq",
        question: "¿Hay que editar cada clip por separado?",
        answer:
          "Sí, aunque partan del mismo bruto. Cada plataforma pide su propio formato, subtítulos y duración, así que el corte base cambia aunque el momento grabado sea el mismo.",
      },
      {
        type: "faq",
        question: "¿En A0 Studios incluís el repurposing dentro de la edición?",
        answer:
          "Con Producción Completa sí: planteamos desde la sesión qué piezas queremos sacar y entregamos el paquete completo de formatos, no solo el vídeo principal.",
      },
      {
        type: "paragraph",
        text: "Si ya grabas contenido pero sientes que cada pieza cuesta una sesión nueva, seguramente el problema no es el tiempo en cámara, sino cómo se está planteando la sesión. Cuéntanos qué grabas normalmente desde /#contacto y vemos cuántas piezas más puede dar.",
      },
    ],
  },
  {
    slug: "documental-de-marca-que-es-cuando-grabarlo",
    title: "Documental de marca: qué es y cuándo tiene sentido grabarlo",
    description:
      "Un documental de marca no es un vídeo corporativo ni un aftermovie: es una pieza narrativa sobre la historia y las personas de un proyecto. Cómo lo planteamos en A0 Studios.",
    publishedAt: "2026-09-03",
    readingTime: "4 min",
    category: "Guía",
    tags: ["documental de marca", "branded content", "producción audiovisual", "storytelling", "Madrid"],
    keyword: "documental de marca",
    intent: "informacional",
    excerpt:
      "Un documental de marca no es un vídeo corporativo ni un aftermovie: es una pieza narrativa sobre la historia y las personas detrás de un proyecto. Cuándo tiene sentido grabarlo y cómo lo hacemos en A0 Studios.",
    seoTitle: "Documental de marca: qué es y cuándo grabarlo | A0 Studios Madrid",
    metaDescription:
      "Documental de marca: qué es, en qué se diferencia de un aftermovie y cuándo tiene sentido grabarlo en A0 Studios.",
    heroKicker: "Blog / A0 Studios",
    body: [
      {
        type: "paragraph",
        text: "En A0 Studios nos llega bastante gente pidiendo un 'documental de marca' cuando en realidad quiere un aftermovie, un vídeo corporativo o un sizzle reel. No es un problema de vocabulario: son piezas distintas, con objetivos distintos y con un proceso de grabación que no se parece en nada. Un documental de marca es la más exigente de las tres, y también la que mejor envejece.",
      },
      {
        type: "paragraph",
        text: "Un vídeo corporativo vende lo que haces. Un aftermovie resume un evento. Un documental de marca cuenta por qué existes: la decisión que llevó a montar el proyecto, las personas detrás, lo que se hizo mal antes de hacerlo bien. Eso solo tiene sentido cuando hay una historia real que sostener, no un logo que vestir.",
      },
      {
        type: "image",
        src: "/blog/documental-de-marca-que-es-cuando-grabarlo/hero.webp",
        alt: "Equipo de grabación preparando cámaras en plató para una pieza documental",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es un documental de marca y por qué importa" },
      {
        type: "paragraph",
        text: "Un documental de marca es una pieza narrativa, con arco y con conflicto, construida a partir de entrevistas y material real, no de un guion publicitario. No vende un producto en los primeros cinco segundos. Deja que la historia haga el trabajo de convencer, y eso es precisamente lo que lo diferencia de casi todo lo demás que se graba con fines comerciales.",
      },
      {
        type: "paragraph",
        text: "Importa porque genera un tipo de confianza que un anuncio no puede fabricar. Un espectador nota enseguida cuándo una marca está vendiendo y cuándo está contando algo de verdad. El documental funciona porque baja la guardia: se ve como contenido, no como publicidad, aunque detrás haya una intención comercial clara.",
      },
      {
        type: "paragraph",
        text: "No todas las marcas tienen material para esto. Hace falta una historia con tensión real: un problema que se resolvió mal antes de resolverse bien, una decisión arriesgada, un cambio de rumbo. Si la historia es 'fundamos la empresa y todo fue creciendo sin sobresaltos', probablemente el formato correcto sea otro, no un documental.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Encuentra el conflicto antes de encender la cámara" },
      {
        type: "paragraph",
        text: "Antes de grabar nada, hacemos una entrevista previa sin cámara para encontrar el hilo real: qué estuvo a punto de no salir bien, qué decisión costó tomar, qué se haría diferente. Sin ese conflicto no hay historia, solo una sucesión de datos bonitos que nadie termina de ver hasta el final.",
      },
      { type: "heading", level: 3, text: "Graba como entrevista, no como spot" },
      {
        type: "paragraph",
        text: "El documental se construye en la sala de edición a partir de entrevistas largas, no de frases cortadas para encajar en un guion cerrado. Grabamos conversaciones de 30-45 minutos por persona, con preguntas abiertas, y dejamos que el ritmo del montaje salga de las respuestas, no al revés.",
      },
      { type: "heading", level: 3, text: "Deja que la edición respire" },
      {
        type: "paragraph",
        text: "Un documental de marca no necesita el ritmo frenético de un reel. Los silencios, las pausas y los planos de recurso (b-roll del día a día, del equipo, del espacio) construyen tanto como las palabras. Cortar demasiado rápido mata la sensación de autenticidad que es, precisamente, lo que hace funcionar el formato.",
      },
      {
        type: "image",
        src: "/blog/documental-de-marca-que-es-cuando-grabarlo/mid.webp",
        alt: "Cámara de cine grabando una entrevista para una pieza documental",
        width: 1920,
        height: 1080,
      },
      { type: "heading", level: 2, text: "Cuándo tiene sentido grabar uno" },
      {
        type: "list",
        items: [
          "Cuando hay una historia de fundación o de cambio de rumbo con tensión real detrás.",
          "Para presentaciones a inversores donde el equipo importa tanto como las métricas.",
          "Cuando quieres contenido de marca que dure años, no una campaña de temporada.",
          "Para procesos de contratación donde necesitas transmitir cultura, no solo beneficios.",
          "Cuando el aftermovie de un evento se queda corto porque la historia empezó mucho antes.",
          "No tiene sentido si solo buscas un vídeo de ventas: para eso hay formatos más rápidos y más baratos.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿En qué se diferencia un documental de marca de un vídeo corporativo?",
        answer:
          "El vídeo corporativo presenta la empresa y sus servicios de forma directa. El documental de marca cuenta una historia con conflicto y arco narrativo, y deja que el espectador saque sus propias conclusiones sobre la marca.",
      },
      {
        type: "faq",
        question: "¿Cuánto dura un documental de marca?",
        answer:
          "Depende del canal de distribución, pero suele moverse entre 4 y 12 minutos. Menos y no da tiempo a construir el arco; más y pierdes a la mayoría de la audiencia fuera de un evento presencial.",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo hace falta para grabarlo?",
        answer:
          "Entre la entrevista previa, la sesión de grabación y el b-roll de apoyo, suele necesitar más de un día de sesión. La edición es la parte que más tiempo se lleva: construir el arco narrativo requiere varias pasadas de montaje.",
      },
      {
        type: "faq",
        question: "¿A0 Studios produce documentales de marca completos?",
        answer:
          "Sí, dentro de Producción Completa: entrevista previa, grabación con equipo dedicado, b-roll y montaje narrativo. No es un servicio exprés, así que lo planteamos siempre con una llamada previa para valorar si la historia sostiene el formato.",
      },
      {
        type: "paragraph",
        text: "Si crees que tu marca tiene una historia real detrás y no solo un producto que enseñar, hablemos antes de reservar sesión. Cuéntanos el contexto desde /#contacto y te decimos con franqueza si el formato encaja o si te conviene algo más sencillo.",
      },
    ],
  },
];

export function getAllPosts() {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogMetadata(): Metadata {
  return {
    title: "Blog",
    description:
      "Artículos sobre estudios de grabación, contenido para marcas, reels, podcast y producción audiovisual en Madrid.",
    alternates: { canonical: "/blog" },
    openGraph: {
      title: "Blog",
      description:
        "Ideas, guías y artículos sobre espacios para grabar contenido, producción audiovisual y contenido orgánico en Madrid.",
      url: `${SITE_URL}/blog`,
      siteName: SITE_NAME,
      type: "website",
      locale: "es_ES",
    },
  };
}

export function getPostMetadata(post: BlogPost): Metadata {
  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: SITE_NAME,
      type: "article",
      locale: "es_ES",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
    },
  };
}
