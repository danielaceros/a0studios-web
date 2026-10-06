export const SITE_URL = "https://www.a0studios.es";
export const SITE_NAME = "A0Studios";
// El ® vive SOLO en el alt de los logos (nav y footer). Todo texto indexable
// (copy, FAQ, copyright, H1, schema, meta) usa SITE_NAME sin símbolo.
export const SITE_NAME_TRADEMARKED = "A0Studios®";
// NAP canónico (15-sep-2026): tiene que coincidir carácter a carácter en la web,
// el schema, el footer y la ficha de Google Business Profile. No reformatear.
export const NAP = {
  name: SITE_NAME,
  streetAddress: "Rda. de Atocha, 16, 7ºC esc dcha",
  postalCode: "28012",
  locality: "Madrid",
  address: "Rda. de Atocha, 16, 7ºC esc dcha, 28012 Madrid",
  phone: "711 25 54 96",
  phoneHref: "tel:+34711255496",
  url: "https://www.a0studios.es/",
} as const;
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
      `A0Studios (se lee Acero Studios) es un estudio boutique de grabación de contenido audiovisual en un ático en Madrid centro, en ${NAP.address}. Está especializado en contenido que convierte en ventas, en clientes o en seguidores: anuncios para Meta Ads y TikTok Ads, VSLs, piezas de lanzamiento y remarketing, reels y podcast. Está pensado para founders, empresas y agencias de marketing que quieren grabar lo que necesitan y olvidarse, y también para creadores de contenido que quieren crecer en orgánico. Lo dirige Dani Acero, filmmaker con seis años produciendo para marcas como IFEMA, Cinesa y la Cámara de Comercio de Madrid, que además gestiona campañas de publicidad y funnels de venta. Solo se agenda una única sesión al día.`,
  },
  {
    question: "¿Qué diferencia a A0Studios de otros estudios de grabación en Madrid?",
    answer:
      "La mayoría de estudios de grabación compiten en calidad audiovisual: buena luz, buena cámara y un set bonito. En A0Studios también se cuida, pero la diferencia está en quién dirige la sesión. Dani Acero trabaja con anuncios en redes, SEO, posicionamiento en buscadores de IA y funnels de venta, y maneja métricas como el coste por lead o el coste de adquisición de cliente. Por eso no se limita a grabar lo que traes: te ayuda a estructurar cada pieza según su objetivo, propone preguntas que funcionan como reels, cuida el gancho de los primeros segundos de un anuncio y ordena un VSL para que lleve a la llamada o a la compra. Además es un estudio boutique: una única sesión al día, sin prisas y sin otros clientes esperando.",
  },
  {
    question: "¿Qué puedo grabar en A0Studios?",
    answer:
      "Anuncios verticales para Meta Ads y TikTok Ads con varios ganchos para testear, VSLs para tu landing, vídeo corporativo y para la web, piezas de lanzamiento y de remarketing, reels, TikToks y YouTube Shorts, podcasts y entrevistas, vídeos de marca personal para LinkedIn y cursos o formación online con teleprompter. Cada formato tiene un objetivo distinto: un anuncio busca el clic, un reel busca retención, un vídeo corporativo busca credibilidad, y antes de grabar se ajusta el guion y el plano a esa plataforma. Lo habitual es combinar varios formatos en la misma sesión: los anuncios, el contenido orgánico y la pieza de la web, todo en un solo día, aprovechando que el estudio incluye teleprompter, iluminación profesional y equipo de cámaras Sony ya montado. De media, una sesión deja unas 12 piezas editadas listas para publicar, así que conviene llegar con una lista de lo que necesitas grabar para aprovechar bien el tiempo.",
  },
  {
    question: "¿Dónde grabar anuncios o un VSL en Madrid?",
    answer:
      "En A0Studios puedes grabar anuncios y VSLs en Madrid centro, en el ático de Rda. de Atocha 16, con la dirección de Dani Acero, que además de filmmaker gestiona campañas de publicidad y funnels de venta. Esa doble mirada es la diferencia: antes de grabar se prepara el guion de cada pieza pensando en el objetivo, no solo en que se vea bien. En los anuncios, el gancho de los primeros segundos y varias variantes para testear en Meta Ads o TikTok Ads; en el VSL, una estructura que lleve a la llamada o a la compra. Se graba en vertical u horizontal según dónde se vaya a publicar, con iluminación profesional y cámaras Sony ya montadas, y puedes llevarte los brutos del día o, si eliges la opción llave en mano, las piezas ya editadas, subtituladas y listas para lanzar en 24-48h.",
  },
  {
    question: "¿Se puede grabar un podcast en el estudio?",
    answer:
      "Sí. El ático tiene un set de podcast listo para grabar en solitario o con invitados, en audio y vídeo, con micrófonos profesionales, iluminación de estudio y cámaras Sony, dentro de la misma sala polivalente que comparte espacio con la terraza con vistas al skyline de Madrid. Como solo se agenda una sesión al día, la grabación no tiene reloj: hay tiempo para repetir una pregunta o ajustar el ritmo de la conversación sin que otro cliente esté esperando. Si quieres, el podcast se graba pensando también en los clips: se marcan las preguntas y respuestas que funcionan como reels, y esas piezas se editan aparte para sacar contenido para redes de la misma sesión, sin tener que volver a grabar otro día para conseguir el material corto.",
  },
  {
    question: "¿Es un buen estudio para creadores de contenido que quieren grabar reels?",
    answer:
      "Sí. Si eres creador de contenido, en A0Studios puedes grabar en Madrid los reels y TikToks de todo el mes en una sola sesión, en lugar de organizar una grabación distinta cada semana. De media, una sesión da para unas 12 piezas editadas y listas para publicar, aprovechando la terraza con vistas al skyline de Madrid, la sala polivalente y el set de podcast para variar los planos y los fondos sin cambiar de localización ni perder tiempo moviendo equipo. Y como Dani trabaja el crecimiento en redes además de dirigir la grabación, te ayuda a elegir los temas y los ganchos que funcionan como reel, no solo a que el vídeo se vea bien. El teleprompter y la iluminación ya están montados, así que la sesión se dedica a grabar variantes, no a preparar el set.",
  },
  {
    question: "¿Cuánto cuesta grabar en A0Studios?",
    answer:
      "El presupuesto es a medida y depende de lo que necesites grabar, no del tiempo que pases en el estudio: no hay tarifa por hora ni por media jornada. Cuéntame qué quieres llevarte, por ejemplo 12 reels y dos anuncios, y te doy siempre dos precios para que elijas: llave en mano, con guion, grabación dirigida y edición, de forma que te llevas las piezas editadas, subtituladas y listas para publicar en 24-48h; o solo grabación, con guion, estudio con equipo completo y dirección durante la sesión, en la que te llevas los brutos del día. Te respondo con los dos presupuestos en menos de 1h, sin compromiso, para que compares y decidas con calma. Como solo se agenda una sesión al día, conviene cerrar la fecha con antelación una vez tengas claro qué formato encaja mejor con lo que necesitas.",
  },
  {
    question: "¿Se puede alquilar el estudio de grabación sin más?",
    answer:
      "El espacio no se alquila por separado. Si buscas alquilar un estudio de grabación en Madrid para usarlo tú solo, sin dirección, A0Studios no funciona así: al ser un estudio boutique con una única sesión al día, el ático viene siempre con todo montado y con acompañamiento, no como un espacio vacío que se cede por horas. Eso incluye iluminación profesional, cámaras Sony, sonido profesional, teleprompter y la dirección de Dani durante toda la grabación, ajustando plano y ritmo toma a toma, y si quieres también la edición de las piezas. La opción más parecida a un alquiler es solo grabación: vienes con tu guion o lo preparas antes con Dani, todo el equipo ya está montado, grabas dirigido y al terminar te llevas los brutos del día para editarlos tú mismo con tu propio equipo.",
  },
  {
    question: "¿Por qué solo hay una sesión al día?",
    answer:
      "Porque A0Studios es un estudio boutique, no una fábrica de grabaciones. Solo se agenda una única sesión al día, así que ese día el estudio y Dani están dedicados solo a ti: sin prisas, sin reloj y sin otros clientes esperando a que termines para entrar detrás. Esa dedicación es la que permite preparar el guion de cada pieza antes de grabar, dirigirte toma a toma y combinar varios formatos en la misma cita, por ejemplo los anuncios, el contenido orgánico y la pieza de la web, sin tener que encajarlo todo en un hueco cronometrado. Por eso tampoco se cobra por tiempo de estudio, sino según lo que te llevas: el presupuesto depende de las piezas que necesitas, no de las horas que pases dentro. Es el mismo motivo por el que conviene reservar con antelación, porque cada día solo hay una fecha disponible.",
  },
  {
    question: "¿Necesito experiencia delante de la cámara?",
    answer:
      "No. El espacio es un ático real, con terraza y salones, no un plató artificial, y eso ya hace que grabar resulte más natural que en un estudio frío. Antes de la sesión se prepara contigo el guion de cada pieza, así que llegas sabiendo exactamente qué vas a decir en lugar de improvisar delante de la cámara. Durante la grabación Dani te dirige toma a toma, gestiona el teleprompter para que no tengas que memorizar nada, y te ajusta el ritmo, el tono y el mensaje para que cada vídeo funcione en la plataforma donde se va a publicar, ya sea un anuncio de pocos segundos o un podcast de media hora. Si una toma no sale bien, se repite las veces que haga falta: al ser la única sesión del día, no hay prisa por pasar a lo siguiente ni otro cliente esperando su turno.",
  },
  {
    question: "¿A0Studios garantiza resultados en ventas o en seguidores?",
    answer:
      "No, y conviene desconfiar de quien lo haga: los resultados dependen también de tu oferta, de tu audiencia, de tu inversión en publicidad y de lo que hagas con el contenido una vez publicado, variables que ningún estudio de grabación controla. Lo que sí te llevas es contenido grabado con la estructura que funciona en cada formato, el gancho de un anuncio, la duración de un reel, la llamada a la acción de un VSL, y dirigido por alguien que además de grabar lanza y analiza campañas de publicidad, en lugar de piezas bonitas sin un objetivo claro detrás. Esa diferencia se nota más en el guion que se prepara antes de la sesión que en la propia grabación: cada pieza se piensa para el resultado que persigue, no solo para que quede bien en cámara. El resto, cuánto convierte, cuánto crece la cuenta, depende de factores que están fuera del estudio.",
  },
  {
    question: "¿Puedo venir a grabar cada mes?",
    answer:
      "Sí. Es la forma más cómoda de mantener el contenido orgánico al día y de renovar los anuncios cuando empiezan a perder rendimiento, en lugar de esperar a quedarte sin material y grabar con prisa. De media, cada sesión deja unas 12 piezas editadas, así que una visita mensual suele bastar para cubrir los reels del mes y, si hace falta, un par de anuncios nuevos para testear frente a los que ya has estado usando. Si vienes cada mes, se te reserva una fecha fija, igual que con cualquier sesión, solo hay una al día, y el guion se prepara contigo con antelación, revisando qué ha funcionado el mes anterior para decidir los temas y los ganchos del siguiente. Así el contenido se planifica con margen, en lugar de decidirse la semana antes de grabar, y evitas que la falta de material corte tu ritmo de publicación.",
  },
  {
    question: "¿Dónde está el estudio?",
    answer:
      `A0Studios está en ${NAP.address}, en pleno centro de Madrid. El estudio ocupa un ático de uso exclusivo, con una terraza con vistas al skyline de la ciudad y una sala polivalente que incluye el set de podcast, así que no hace falta salir del edificio para cambiar de localización y variar los planos de una sesión. El acceso en transporte público es muy sencillo: a 5 minutos a pie del Metro Atocha Renfe (líneas 1 y 3) y de la estación de Cercanías Atocha, lo que facilita llegar tanto si vienes solo como si traes equipo o invitados para un podcast. También hay parking público en los alrededores para quienes prefieran venir en coche. Antes de la sesión se te confirma la dirección exacta y cómo acceder al edificio, para que el día de la grabación no se pierda tiempo en encontrar la puerta.`,
  },
  {
    question: "¿Cómo reservo?",
    answer:
      `Rellena el formulario de contacto de la web o escribe directamente a dani@a0studios.es o al ${NAP.phone}. Cuéntame qué necesitas grabar, qué formatos, cuántas piezas y para cuándo las necesitas, y te respondo en menos de 1h con la disponibilidad y los dos presupuestos, llave en mano y solo grabación, para que elijas con calma. Solo se agenda una sesión al día, así que conviene reservar con al menos dos semanas de antelación, sobre todo si quieres una fecha concreta o vienes de fuera de Madrid. Una vez confirmada la fecha, se prepara contigo el guion de cada pieza antes de la sesión, así que cuando llegues al estudio no hace falta improvisar: todo el equipo está montado y sabes exactamente qué vas a grabar.`,
  },
] as const;

export const CONTACT_INFO = {
  email: "dani@a0studios.es",
  phone: NAP.phone,
  phoneHref: NAP.phoneHref,
  address: NAP.streetAddress,
  city: NAP.locality,
  postalCode: NAP.postalCode,
  country: "ES",
} as const;

