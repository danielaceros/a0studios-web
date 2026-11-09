const es = {
  label: "Qué grabamos",
  title: "Qué grabar para",
  accent: "convertir",
  lead: "En ventas, en clientes, en seguidores o en autoridad. Tú eliges el objetivo y el formato sale de ahí.",
  objetivos: [
    {
      objetivo: "Convertir en ventas",
      title: "Anuncios",
      desc: "Anuncios verticales para Meta Ads y TikTok Ads, con varios ganchos por pieza para testear y quedarte con el que mejor funciona.",
      piezas: ["Anuncios verticales", "Variantes de gancho", "Remarketing"],
    },
    {
      objetivo: "Convertir en clientes",
      title: "VSLs y lanzamientos",
      desc: "El vídeo de venta de tu landing, la pieza horizontal para la web y todo lo que necesita un lanzamiento para llevar a la llamada o a la compra.",
      piezas: ["VSL", "Vídeo para web", "Piezas de lanzamiento"],
    },
    {
      objetivo: "Convertir en seguidores",
      title: "Reels, TikToks y Shorts",
      desc: "Contenido orgánico vertical para crecer en redes: varias piezas en la misma sesión y series para tener el mes cubierto.",
      piezas: ["Reels y TikToks", "YouTube Shorts", "Series mensuales"],
    },
    {
      objetivo: "Convertir en autoridad",
      title: "Podcast y marca personal",
      desc: "Podcast y entrevistas en audio y vídeo, en solitario o con invitados, vídeos para LinkedIn y cursos online grabados con teleprompter.",
      piezas: ["Podcast y entrevistas", "Vídeo para LinkedIn", "Cursos online"],
    },
  ],
  incluye: [
    { title: "Guion antes de grabar", desc: "Cada pieza llega pensada: gancho, mensaje y llamada a la acción." },
    { title: "Dirección con criterio de marketing", desc: "Te dirijo según dónde se publica y qué tiene que conseguir." },
    { title: "Todo en una sola sesión", desc: "Anuncios, orgánico y la pieza de la web el mismo día." },
    { title: "Listo para publicar en 24-48h", desc: "Si eliges llave en mano: editado, subtitulado y en formato por plataforma." },
  ],
  piezasAria: (title: string) => `Piezas de ${title}`,
}

const en: typeof es = {
  label: "What we shoot",
  title: "What to shoot to",
  accent: "convert",
  lead: "Sales, clients, followers or authority. You pick the goal and the format follows from it.",
  objetivos: [
    {
      objetivo: "Turn views into sales",
      title: "Ads",
      desc: "Vertical ads for Meta Ads and TikTok Ads, with several hooks per piece so you can test and keep the one that performs best.",
      piezas: ["Vertical ads", "Hook variations", "Retargeting"],
    },
    {
      objetivo: "Turn views into clients",
      title: "VSLs and launches",
      desc: "The sales video for your landing page, the widescreen piece for your website and everything a launch needs to drive people to the call or the checkout.",
      piezas: ["VSL", "Website video", "Launch assets"],
    },
    {
      objetivo: "Turn views into followers",
      title: "Reels, TikToks and Shorts",
      desc: "Vertical organic content to grow on social: several pieces from the same session and series to keep your month covered.",
      piezas: ["Reels and TikToks", "YouTube Shorts", "Monthly series"],
    },
    {
      objetivo: "Turn views into authority",
      title: "Podcast and personal brand",
      desc: "Podcasts and interviews in audio and video, solo or with guests, LinkedIn videos and online courses recorded with a teleprompter.",
      piezas: ["Podcast and interviews", "LinkedIn video", "Online courses"],
    },
  ],
  incluye: [
    { title: "Script before we shoot", desc: "Every piece arrives planned: hook, message and call to action." },
    { title: "Direction with a marketing mindset", desc: "I direct you based on where it's published and what it needs to achieve." },
    { title: "Everything in one session", desc: "Ads, organic and the website piece, all on the same day." },
    { title: "Ready to post in 24-48h", desc: "If you go turnkey: edited, subtitled and formatted for each platform." },
  ],
  piezasAria: (title: string) => `${title} deliverables`,
}

export const formatosContent = { es, en }
