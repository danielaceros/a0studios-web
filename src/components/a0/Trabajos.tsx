import SectionHead from "./SectionHead";
import WorkRow, { type WorkItem } from "./WorkRow";
import { projects } from "@/data/projects";

/** Créditos y sinopsis por proyecto — texto real de cada ficha */
const META: Record<string, { credits: string; desc: string }> = {
  fifa: {
    credits: "Evento corporativo / Dirección · Cámara · Edición",
    desc: "Cobertura del evento de FIFA: ambiente, momentos clave e interacción del público en una pieza dinámica para comunicación digital, entregada en horizontal y vertical.",
  },
  "brahim-diaz": {
    credits: "Evento de marca / Dirección · Edición",
    desc: "Producción para el evento de Brahím Díaz, jugador del Real Madrid, con un enfoque visual cinematográfico y dinámico.",
  },
  "camara-de-comercio": {
    credits: "Vídeo institucional / Cobertura completa",
    desc: "Jornada institucional con empresas, ponentes y representantes del sector, documentada con un enfoque profesional, claro y elegante.",
  },
  ifema: {
    credits: "Vídeo corporativo / Dirección · Postproducción",
    desc: "Pieza que refleja la magnitud de los eventos de IFEMA Madrid y la experiencia del público, para web, redes y presentaciones comerciales.",
  },
  cinesa: {
    credits: "Aftermovie / Grabación · Edición",
    desc: "Aftermovie de un preestreno de Cinesa: ambiente, actividades y recuerdo de marca en un montaje orgánico pensado para redes.",
  },
  "federacion-esgrima": {
    credits: "Evento deportivo / Cobertura · Edición",
    desc: "Intensidad de la competición y estética de la esgrima en una pieza que transmite energía, pasión y profesionalidad.",
  },
};

const ITEMS: WorkItem[] = projects.map((p) => ({
  slug: p.slug,
  title: p.title,
  credits: META[p.slug]?.credits ?? "Producción audiovisual",
  desc: META[p.slug]?.desc ?? "",
  video: p.video,
  videoHD: p.videoHD,
  cover: p.cover,
  alt: p.alt,
}));

export default function Trabajos() {
  return (
    <section id="trabajos" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <SectionHead
          label="Trabajos"
          title="Marcas que ya"
          accent="grabaron"
          lead="Producciones reales rodadas y editadas por mí. Pincha en cualquiera para verla completa."
        />

        <div className="mt-12 sm:mt-16">
          <div className="rule" />
          {ITEMS.map((item, i) => (
            <WorkRow key={item.slug} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
