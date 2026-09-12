import SectionHead from "./SectionHead";

// Ordenado por objetivo, no por tipo de vídeo: el cliente viene a conseguir
// algo (vender, captar, crecer) y el formato se deriva de eso.
const OBJETIVOS = [
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
];

const INCLUYE = [
  { title: "Guion antes de grabar", desc: "Cada pieza llega pensada: gancho, mensaje y llamada a la acción." },
  { title: "Dirección con criterio de marketing", desc: "Te dirijo según dónde se publica y qué tiene que conseguir." },
  { title: "Todo en una sola sesión", desc: "Anuncios, orgánico y la pieza de la web el mismo día." },
  { title: "Listo para publicar en 24-48h", desc: "Si eliges llave en mano: editado, subtitulado y en formato por plataforma." },
];

export default function Formatos() {
  return (
    <section
      id="formatos"
      className="px-4 py-[clamp(4.5rem,8vw,7.5rem)] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1360px]">
        <SectionHead
          label="Qué grabamos"
          title="Qué grabar para"
          accent="convertir"
          lead="En ventas, en clientes, en seguidores o en autoridad. Tú eliges el objetivo y el formato sale de ahí."
        />

        {/* Lista editorial sobre filetes */}
        <div className="mt-14 sm:mt-[clamp(3.5rem,5vw,5rem)]">
          <div className="rule" />
          {OBJETIVOS.map((o, i) => (
            <div key={o.title} className="reveal">
              <div className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-4 py-8 sm:py-10 md:grid-cols-[4rem_minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-x-10">
                <span className="index text-foreground/30 transition-colors duration-300 group-hover:text-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex flex-col gap-3">
                  <p className="meta">{o.objetivo}</p>
                  <h3 className="font-heading text-[clamp(1.4rem,3vw,2.15rem)] leading-[1.08] tracking-[-0.028em] text-foreground">
                    {o.title}
                  </h3>
                </div>

                <div className="col-span-2 flex flex-col gap-5 md:col-span-1 md:col-start-3">
                  <p className="prose-body max-w-[46ch] text-[0.92rem]">{o.desc}</p>
                  <ul className="flex flex-wrap gap-2" aria-label={`Piezas de ${o.title}`}>
                    {o.piezas.map((p) => (
                      <li key={p} className="badge">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rule" />
            </div>
          ))}
        </div>

        {/* Qué incluye — pares dato/apoyo, sin cajas: aire y filete */}
        <div className="reveal mt-14 grid gap-x-10 gap-y-10 sm:mt-[clamp(3.5rem,5vw,5rem)] md:grid-cols-2 xl:grid-cols-4">
          {INCLUYE.map((b) => (
            <div key={b.title} className="flex flex-col gap-3.5">
              <span className="tick" aria-hidden="true" />
              <h4 className="font-heading text-[1.02rem] leading-[1.3] tracking-[-0.018em] text-foreground">
                {b.title}
              </h4>
              <p className="prose-body text-[0.89rem]">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
