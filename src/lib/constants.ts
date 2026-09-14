export const SITE_URL = "https://www.a0studios.es";
export const SITE_NAME = "A0Studios";
// Marca registrada (9-sep-2026). Solo para los puntos de contacto de marca
// (logo/nav, footer/copyright, H1 del hero, schema de Organization/LocalBusiness)
// — NO para el resto (títulos de página, blog, meta, copy corrido), donde
// repetir el símbolo en cada mención quedaría raro/spam. Usar SITE_NAME a secas
// en todo lo demás.
export const SITE_NAME_TRADEMARKED = "A0Studios®";
// "A0" se lee "A cero": la marca se pronuncia Acero Studios (apellido del
// fundador). Se usa como alternateName en el schema y en el texto que
// responde a búsquedas por voz o en buscadores de IA.
export const SITE_NAME_SPOKEN = "Acero Studios";
export const SITE_DESCRIPTION =
  "A0Studios (Acero Studios) es un estudio boutique de grabación de contenido en Madrid centro, dirigido por Dani Acero: anuncios, VSLs, reels y podcast pensados para convertir. Una única sesión al día y presupuesto a medida.";

export const NAV_LINKS = [
  { label: "Espacio", href: "/#tour-virtual" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Opciones", href: "/#tarifas" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
] as const;

export const BENEFICIOS = [
  {
    title: "Contenido para Semanas en un Solo Día",
    description:
      "Vienes una mañana. Sales con contenido para meses.",
    icon: "clock",
  },
  {
    title: "Look Real, Calidad de Producción",
    description:
      "Sin el aspecto artificial de un plató. Espacio real, contenido auténtico.",
    icon: "location",
  },
  {
    title: "Dirección Creativa y Equipo Técnico",
    description:
      "Tú vienes con el mensaje. Yo me encargo del resto.",
    icon: "strategy",
  },
  {
    title: "Edición y Entrega Lista para Publicar",
    description:
      "En 24-48h tienes el contenido listo para publicar.",
    icon: "location",
  },
] as const;

export const PROCESO = [
  {
    step: 1,
    title: "Cuéntame qué necesitas grabar",
    description:
      "Anuncios, un VSL, los reels del mes o un podcast. En menos de 1h te respondo con disponibilidad y dos presupuestos: llave en mano o solo grabación.",
  },
  {
    step: 2,
    title: "Preparamos el guion",
    description:
      "Definimos cada pieza según dónde se va a publicar y qué tiene que conseguir: gancho, mensaje y llamada a la acción. Llegas con todo decidido.",
  },
  {
    step: 3,
    title: "Grabamos, sin reloj",
    description:
      "Solo hay una sesión al día, así que el estudio y yo estamos dedicados a ti. Llegas, todo está montado y te dirijo toma a toma.",
  },
  {
    step: 4,
    title: "Te llevas tu contenido",
    description:
      "Con solo grabación, sales con los brutos del día. Con llave en mano, en 24-48h tienes las piezas editadas, subtituladas y listas para publicar.",
  },
] as const;

export const FAQS = [
  {
    question: "¿Qué es A0Studios y para quién es?",
    answer:
      "A0Studios (se lee Acero Studios) es un estudio boutique de grabación de contenido audiovisual en un ático en Madrid centro, en Ronda de Atocha 16. Está especializado en contenido que convierte en ventas, en clientes o en seguidores: anuncios para Meta Ads y TikTok Ads, VSLs, piezas de lanzamiento y remarketing, reels y podcast. Está pensado para founders, empresas y agencias de marketing que quieren grabar lo que necesitan y olvidarse, y también para creadores de contenido que quieren crecer en orgánico. Lo dirige Dani Acero, filmmaker con seis años produciendo para marcas como IFEMA, Cinesa y la Cámara de Comercio de Madrid, que además gestiona campañas de publicidad y funnels de venta. Solo se agenda una única sesión al día.",
  },
  {
    question: "¿Qué diferencia a A0Studios de otros estudios de grabación en Madrid?",
    answer:
      "La mayoría de estudios de grabación compiten en calidad audiovisual: buena luz, buena cámara y un set bonito. En A0Studios también se cuida, pero la diferencia está en quién dirige la sesión. Dani Acero trabaja con anuncios en redes, SEO, posicionamiento en buscadores de IA y funnels de venta, y maneja métricas como el coste por lead o el coste de adquisición de cliente. Por eso no se limita a grabar lo que traes: te ayuda a estructurar cada pieza según su objetivo, propone preguntas que funcionan como reels, cuida el gancho de los primeros segundos de un anuncio y ordena un VSL para que lleve a la llamada o a la compra. Además es un estudio boutique: una única sesión al día, sin prisas y sin otros clientes esperando.",
  },
  {
    question: "¿Qué puedo grabar en A0Studios?",
    answer:
      "Anuncios verticales para Meta Ads y TikTok Ads con varios ganchos para testear, VSLs para tu landing, vídeo corporativo y para la web, piezas de lanzamiento y de remarketing, reels, TikToks y YouTube Shorts, podcasts y entrevistas, vídeos de marca personal para LinkedIn y cursos o formación online con teleprompter. Lo habitual es combinar varios formatos en la misma sesión: los anuncios, el contenido orgánico y la pieza de la web, todo en un solo día.",
  },
  {
    question: "¿Dónde grabar anuncios o un VSL en Madrid?",
    answer:
      "En A0Studios puedes grabar anuncios y VSLs en Madrid centro con la dirección de alguien que gestiona campañas. Antes de grabar se prepara el guion de cada pieza: en los anuncios, el gancho de los primeros segundos y varias variantes para testear en Meta Ads o TikTok Ads; en el VSL, una estructura que lleve a la llamada o a la compra. Se graba en vertical u horizontal según dónde se vaya a publicar, y puedes llevarte los brutos o las piezas ya editadas y listas para lanzar.",
  },
  {
    question: "¿Se puede grabar un podcast en el estudio?",
    answer:
      "Sí. El ático tiene un set de podcast listo para grabar en solitario o con invitados, en audio y vídeo, con micrófonos profesionales, iluminación de estudio y cámaras Sony. Si quieres, el podcast se graba pensando también en los clips: se marcan las preguntas y respuestas que funcionan como reels para sacar contenido para redes de la misma sesión.",
  },
  {
    question: "¿Es un buen estudio para creadores de contenido que quieren grabar reels?",
    answer:
      "Sí. Si eres creador de contenido, en A0Studios puedes grabar en Madrid los reels y TikToks de todo el mes en una sola sesión. De media, una sesión da para unas 12 piezas distintas, aprovechando la terraza con vistas, la sala polivalente y el set de podcast para variar los planos sin cambiar de localización. Y como Dani trabaja el crecimiento en redes, te ayuda a elegir los temas y los ganchos, no solo a que el vídeo se vea bien.",
  },
  {
    question: "¿Cuánto cuesta grabar en A0Studios?",
    answer:
      "El presupuesto es a medida y depende de lo que necesites grabar, no del tiempo que pases en el estudio. Nos cuentas qué quieres llevarte (por ejemplo, 12 reels y dos anuncios) y te damos siempre dos precios para que elijas: llave en mano, con las piezas editadas, subtituladas y listas para publicar en 24-48h, o solo grabación, en la que te llevas los brutos del día. Te respondemos con los dos presupuestos en menos de 1h, sin compromiso.",
  },
  {
    question: "¿Se puede alquilar el estudio de grabación sin más?",
    answer:
      "El espacio no se alquila por separado. Si buscas alquilar un estudio de grabación en Madrid, en A0Studios el estudio viene siempre con todo: iluminación, cámaras, sonido profesional, teleprompter y la dirección de Dani durante la grabación, y si quieres también la edición. La opción más parecida a un alquiler es solo grabación: vienes, todo está montado, grabas dirigido y te llevas los brutos.",
  },
  {
    question: "¿Por qué solo hay una sesión al día?",
    answer:
      "Porque A0Studios es un estudio boutique. Solo se agenda una única sesión al día, así que ese día el estudio y Dani están dedicados solo a ti: sin prisas, sin reloj y sin otros clientes esperando a que termines. Por eso tampoco se cobra por tiempo de estudio, sino según lo que te llevas.",
  },
  {
    question: "¿Necesito experiencia delante de la cámara?",
    answer:
      "No. El espacio es un ático real, no un plató artificial, y eso hace que grabar resulte más natural. Antes de la sesión preparamos juntos el guion de cada pieza, así que llegas sabiendo qué vas a decir. Durante la grabación Dani te dirige toma a toma, gestiona el teleprompter y te ajusta el ritmo y el mensaje para que cada vídeo funcione en la plataforma donde se va a publicar.",
  },
  {
    question: "¿Garantizáis resultados en ventas o en seguidores?",
    answer:
      "No, y conviene desconfiar de quien lo haga: los resultados dependen también de tu oferta, de tu audiencia y de tu inversión en publicidad. Lo que sí te llevas es contenido grabado con la estructura que funciona en cada formato y dirigido por alguien que lanza y analiza campañas, en lugar de piezas bonitas sin un objetivo claro.",
  },
  {
    question: "¿Puedo venir a grabar cada mes?",
    answer:
      "Sí. Es la forma más cómoda de mantener el contenido orgánico al día y de renovar los anuncios cuando empiezan a perder rendimiento. Si vienes cada mes, se te reserva una fecha fija y el guion del mes se prepara contigo con antelación.",
  },
  {
    question: "¿Dónde está el estudio?",
    answer:
      "A0Studios está ubicado en Ronda de Atocha 16, planta 7, Madrid centro. El acceso en transporte público es muy sencillo: a 5 minutos a pie del Metro Atocha Renfe (líneas 1 y 3) y de la estación de Cercanías Atocha. También hay parking público en los alrededores para quienes vengan en coche.",
  },
  {
    question: "¿Cómo reservo?",
    answer:
      "Rellena el formulario de contacto de la web o escribe a dani@a0studios.es o al +34 711 25 54 96. Cuéntanos qué necesitas grabar y te respondemos en menos de 1h con disponibilidad y los dos presupuestos. Solo se agenda una sesión al día, así que conviene reservar con al menos dos semanas de antelación.",
  },
] as const;

export const CONTACT_INFO = {
  email: "dani@a0studios.es",
  phone: "+34 711 25 54 96",
  address: "Calle Ronda de Atocha, 16",
  city: "Madrid",
  postalCode: "28012",
  country: "ES",
} as const;

