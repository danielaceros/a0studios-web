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
  "A0Studios (Acero Studios) es el estudio de grabación de Dani Acero en Madrid: anuncios, VSLs, reels y piezas de lanzamiento pensados para convertir, con la dirección de alguien que hace marketing.";

// Tarifa por piezas (sep-2026). Única fuente de verdad: la leen la sección
// #precios, la respuesta de la FAQ y el OfferCatalog del schema.
// Importes en euros, sin IVA. No se vende por horas.
export const TARIFA_PIEZAS = [
  { piezas: 8, uso: "Para arrancar", grabacion: 400, llave: 650 },
  { piezas: 15, uso: "Un mes de contenido", grabacion: 700, llave: 1100 },
  { piezas: 25, uso: "Lanzamiento completo", grabacion: 1050, llave: 1650 },
] as const;

/** 1100 -> "1.100 €" (separador de miles siempre, también con 4 cifras). */
export function formatEuros(n: number) {
  return `${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} €`;
}

const listaTarifa = (clave: "grabacion" | "llave") =>
  TARIFA_PIEZAS.map((t) => `${t.piezas} piezas por ${formatEuros(t[clave])}`).join(", ");

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
    title: "Cuéntame qué quieres conseguir",
    description:
      "Un lanzamiento, captar clientes con anuncios o crecer en redes. En menos de 1 hora te respondo con las piezas que necesitas y el precio.",
  },
  {
    step: 2,
    title: "Preparamos el guion",
    description:
      "Definimos cada pieza según dónde se va a publicar y qué tiene que conseguir: gancho, mensaje y llamada a la acción. Llegas con todo decidido.",
  },
  {
    step: 3,
    title: "Grabamos en una mañana",
    description:
      "Esa mañana el estudio es solo tuyo y te dirijo yo. Si sobra tiempo, lo aprovechamos para sacarte material extra para redes.",
  },
  {
    step: 4,
    title: "Te llevas las piezas",
    description:
      "Los brutos organizados en 24-48h, o las piezas editadas, subtituladas y listas para publicar en menos de una semana.",
  },
] as const;

export const FAQS = [
  {
    question: "¿Qué es A0Studios y para quién es?",
    answer:
      "A0Studios (se lee Acero Studios) es un estudio de grabación en Madrid centro especializado en contenido que convierte: anuncios para Meta Ads y TikTok Ads, VSLs, piezas de lanzamiento, remarketing y reels para crecer en redes. Está pensado para founders, empresas, agencias de marketing y creadores que venden o captan clientes a través de su contenido y quieren grabar lo que necesitan sin complicarse. Lo dirige Dani Acero, filmmaker con seis años produciendo para marcas como IFEMA, Cinesa y la Cámara de Comercio de Madrid, que además gestiona campañas de publicidad y funnels de venta. Solo se agenda una sesión al día, así que el estudio es exclusivamente tuyo durante la grabación.",
  },
  {
    question: "¿Qué diferencia a A0Studios de otros estudios de grabación de Madrid?",
    answer:
      "La mayoría de estudios compiten en calidad audiovisual: buena luz, buena cámara y un set bonito. En A0Studios también se cuida, pero la diferencia está en quién dirige la sesión. Dani Acero trabaja con anuncios en redes, SEO, posicionamiento en buscadores de IA y funnels de venta, y maneja métricas como el coste por lead o el coste de adquisición de cliente. Por eso no se limita a grabar lo que traes: te ayuda a estructurar cada pieza según su objetivo, propone preguntas que funcionan como reels, cuida el gancho de los primeros segundos de un anuncio y ordena un VSL para que lleve a la llamada o a la compra.",
  },
  {
    question: "¿Qué puedo grabar en A0Studios?",
    answer:
      "Todo el contenido que necesitas para vender o captar: anuncios verticales para Meta Ads y TikTok Ads con varios ganchos para testear, VSLs para tu landing, vídeo horizontal para la web, piezas de lanzamiento y de remarketing, reels y TikToks para crecer en orgánico y formato podcast para sacar clips. Lo habitual es combinar varios en la misma mañana: los anuncios, el contenido orgánico y la pieza de la web, todo en una sola sesión.",
  },
  {
    question: "¿Cuánto cuesta grabar en A0Studios?",
    answer: `El precio va por las piezas que te llevas, no por tiempo de estudio, y hay dos opciones. Solo grabación, en la que te llevas los brutos organizados: ${listaTarifa("grabacion")}. Y llave en mano, con las piezas editadas, subtituladas y listas para publicar: ${listaTarifa("llave")}. Los precios no incluyen IVA. Una pieza es un vídeo de hasta 60 segundos, vertical u horizontal; los VSLs y los vídeos largos se presupuestan aparte.`,
  },
  {
    question: "¿Cuánto dura una sesión?",
    answer:
      "La sesión no tiene un tiempo cerrado. Cuando reservas, el estudio es tuyo durante toda la mañana y la grabación dura lo que necesiten tus piezas: si terminamos antes, terminamos antes. Como el guion de cada pieza se prepara antes de venir, la mayoría de sesiones acaban con margen, y ese tiempo se puede aprovechar para sacar material extra para redes.",
  },
  {
    question: "¿Necesito experiencia delante de la cámara?",
    answer:
      "No. Antes de la sesión preparamos juntos el guion de cada pieza, así que llegas sabiendo qué vas a decir. Durante la grabación Dani te dirige toma a toma, gestiona el teleprompter y te ajusta el ritmo y el mensaje para que cada vídeo funcione en la plataforma donde se va a publicar.",
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
      "Rellena el formulario de contacto de la web o escribe a dani@a0studios.es o al +34 711 25 54 96. Cuéntanos qué quieres conseguir y en menos de 1 hora te respondemos con disponibilidad, las piezas que recomendamos y el precio. Solo se agenda una sesión al día, así que conviene reservar con al menos dos semanas de antelación.",
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

