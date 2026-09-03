import PortfolioCard from "./PortfolioCard"
import { projects } from "@/data/projects"
import ScrollReveal from "@/components/ui/ScrollReveal"

type Props = {
  openVideosInModal?: boolean
  projectSlugs?: string[]
  desktopSlideshow?: boolean
}

export default function Portfolio({
  openVideosInModal = false,
  projectSlugs,
  desktopSlideshow = false,
}: Props) {
  const selectedProjects = projectSlugs?.length
    ? projectSlugs
        .map((slug) => projects.find((project) => project.slug === slug))
        .filter((project): project is (typeof projects)[number] => Boolean(project))
    : projects

  return (
    <section
      id="portfolio"
      className="pb-24 pt-16 sm:py-32 lg:py-40"
    >
      <div className="px-5 pb-8 sm:px-8 sm:pb-10 md:px-10 lg:px-12 lg:pb-12">
        <ScrollReveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">( Portfolio )</p>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h2 className="mt-4 font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground">
            Trabajos Recientes.
          </h2>
        </ScrollReveal>
      </div>
      <div>
        {desktopSlideshow ? (
          <>
            {/* Mobile: horizontal scroll */}
            <div className="lg:hidden">
              <div className="portfolio-slideshow-wrap overflow-hidden">
                <div className="portfolio-mobile-track">
                  {[...selectedProjects, ...selectedProjects].map((project, i) => (
                    <div key={`${project.slug}-m-${i}`} className="portfolio-mobile-item shrink-0">
                      <PortfolioCard
                        title={project.title}
                        video={project.video}
                        videoHD={project.videoHD}
                        cover={project.cover}
                        alt={project.alt}
                        index={i}
                        openInModal={openVideosInModal}
                        hideOverlayTitle
                      />
                      <p className="mt-2 px-1 text-left font-mono text-[10px] uppercase tracking-[0.1em] text-foreground/70">
                        {project.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop: slideshow */}
            <div className="hidden lg:block">
              <div className="portfolio-slideshow-wrap overflow-hidden">
                <div className="portfolio-desktop-track">
                  {[...selectedProjects, ...selectedProjects].map((project, i) => (
                    <div key={`${project.slug}-${i}`} className="w-[260px] shrink-0 xl:w-[295px]">
                      <PortfolioCard
                        title={project.title}
                        video={project.video}
                        videoHD={project.videoHD}
                        cover={project.cover}
                        alt={project.alt}
                        index={i}
                        openInModal={openVideosInModal}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <style>{`
              .portfolio-slideshow-wrap {
                position: relative;
                isolation: isolate;
              }

              .portfolio-slideshow-wrap::before,
              .portfolio-slideshow-wrap::after {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                width: 44px;
                pointer-events: none;
                z-index: 2;
              }

              .portfolio-slideshow-wrap::before {
                left: 0;
                background: linear-gradient(to right, #080808, rgba(8, 8, 8, 0));
              }

              .portfolio-slideshow-wrap::after {
                right: 0;
                background: linear-gradient(to left, #080808, rgba(8, 8, 8, 0));
              }

              .portfolio-mobile-track {
                display: flex;
                width: max-content;
                gap: 0.5rem;
                animation: portfolio-mobile-slide 40s linear infinite;
                will-change: transform;
              }

              .portfolio-mobile-item {
                width: min(44vw, 190px);
              }

              .portfolio-desktop-track {
                display: flex;
                width: max-content;
                gap: 0.85rem;
                animation: portfolio-desktop-slide 55s linear infinite;
                will-change: transform;
              }

              @keyframes portfolio-mobile-slide {
                0% {
                  transform: translate3d(0, 0, 0);
                }
                100% {
                  transform: translate3d(-50%, 0, 0);
                }
              }

              @keyframes portfolio-desktop-slide {
                0% {
                  transform: translate3d(0, 0, 0);
                }
                100% {
                  transform: translate3d(-50%, 0, 0);
                }
              }

              @media (prefers-reduced-motion: reduce) {
                .portfolio-mobile-track,
                .portfolio-desktop-track {
                  animation: none;
                  transform: translate3d(0, 0, 0);
                }
              }

              @media (min-width: 1024px) {
                .portfolio-slideshow-wrap::before,
                .portfolio-slideshow-wrap::after {
                  width: 72px;
                }
              }
            `}</style>
          </>
        ) : (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
            {selectedProjects.map((project, i) => (
              <PortfolioCard
                key={project.slug}
                title={project.title}
                video={project.video}
                videoHD={project.videoHD}
                cover={project.cover}
                alt={project.alt}
                index={i}
                openInModal={openVideosInModal}
              />
            ))}
          </div>
        )}

        <ScrollReveal delay={0.2}>
          <div className="mt-12 text-center sm:mt-16">
            <a
              href="#contacto"
              className="inline-block bg-accent px-10 py-4 font-mono text-[12px] uppercase tracking-[0.15em] text-background transition-all duration-300 hover:bg-accent-light sm:text-[11px]"
            >
              Crea el tuyo →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
