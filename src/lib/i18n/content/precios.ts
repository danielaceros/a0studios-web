const es = {
  label: "Presupuesto",
  title: "Un presupuesto a tu",
  accent: "medida",
  lead: "Dime qué necesitas grabar, por ejemplo 12 reels y dos anuncios, y te doy siempre dos precios: llave en mano o solo grabación. Tú eliges.",
  opciones: [
    {
      name: "Llave en mano",
      tag: "Te llevas los vídeos",
      desc: "Grabamos contigo y nos encargamos de la edición: te llevas las piezas terminadas, listas para publicar en redes o para lanzar como anuncio.",
      incluye: [
        "Todo lo de Solo grabación",
        "Edición con estructura de anuncio, VSL o reel",
        "Subtítulos y formato para cada plataforma",
        "Listo para publicar en 24-48h",
      ],
      destacado: true,
    },
    {
      name: "Solo grabación",
      tag: "Te llevas los brutos",
      desc: "Vienes al estudio, grabamos todas las piezas con el equipo montado y la sesión dirigida, y sales con los brutos listos para que los edite tu equipo.",
      incluye: [
        "Guion de cada pieza antes de venir",
        "Estudio con iluminación y cámaras",
        "Sonido profesional y teleprompter",
        "Dirección durante toda la grabación",
        "Brutos del día, listos para editar",
      ],
      destacado: false,
    },
  ],
  perShoot: "Presupuesto según lo que grabes",
  cta: "Pedir presupuesto",
  boutiqueMeta: "Estudio boutique · Una única sesión al día",
  boutiqueText:
    "Solo agendo una sesión al día. Ese día el estudio y yo estamos dedicados solo a ti, sin prisas y sin reloj. Por eso no cobro por tiempo de estudio: el presupuesto depende de lo que te llevas.",
  monthlyMeta: "¿Vienes cada mes?",
  monthlyText:
    "Te reservo una fecha fija y preparamos contigo el guion del mes, para tener el orgánico al día y renovar los anuncios antes de que se quemen.",
  monthlyCta: "Quiero una fecha fija",
  footer: "Anuncios · VSLs · Reels · Podcast · Cursos — una única sesión al día, reserva con antelación.",
}

const en: typeof es = {
  label: "Quote",
  title: "A quote",
  accent: "tailored to you",
  lead: "Tell me what you need to record, say 12 Reels and two ads, and I'll always give you two prices: turnkey or recording only. You choose.",
  opciones: [
    {
      name: "Turnkey",
      tag: "You take the finished videos",
      desc: "We record with you and handle the editing: you leave with finished pieces, ready to post on social or launch as ads.",
      incluye: [
        "Everything in Recording only",
        "Editing structured as an ad, VSL or Reel",
        "Subtitles and the right format for each platform",
        "Ready to publish in 24-48h",
      ],
      destacado: true,
    },
    {
      name: "Recording only",
      tag: "You take the raw footage",
      desc: "You come to the studio, we record every piece with the gear already set up and a directed session, and you leave with raw footage ready for your team to edit.",
      incluye: [
        "A script for each piece before you arrive",
        "Studio with lighting and cameras",
        "Professional sound and teleprompter",
        "Direction throughout the whole shoot",
        "The day's raw footage, ready to edit",
      ],
      destacado: false,
    },
  ],
  perShoot: "Quoted on what you record",
  cta: "Request a quote",
  boutiqueMeta: "Boutique studio · One session a day",
  boutiqueText:
    "I only book one session a day. On that day the studio and I are dedicated entirely to you, with no rush and no clock. That's why I don't charge for studio time: the quote depends on what you take home.",
  monthlyMeta: "Coming every month?",
  monthlyText:
    "I'll reserve a fixed date for you and we'll prepare the month's script together, so your organic content stays up to date and your ads get refreshed before they burn out.",
  monthlyCta: "I want a fixed date",
  footer: "Ads · VSLs · Reels · Podcast · Courses — one session a day, book in advance.",
}

export const preciosContent = { es, en }
