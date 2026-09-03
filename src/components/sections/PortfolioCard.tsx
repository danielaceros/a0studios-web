"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

type Props = {
  title: string
  video: string
  videoHD?: string
  cover?: string
  alt?: string
  index?: number
  openInModal?: boolean
  hideOverlayTitle?: boolean
}

type NavigatorConnection = {
  saveData?: boolean
  effectiveType?: string
}

export default function PortfolioCard({
  title,
  video,
  videoHD,
  cover,
  alt,
  index = 0,
  openInModal = false,
  hideOverlayTitle = false,
}: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [canAutoplay] = useState(() => {
    if (typeof navigator === "undefined") return true
    const connection = (navigator as Navigator & { connection?: NavigatorConnection }).connection
    const isDataSaver = !!connection?.saveData
    const isSlowNetwork =
      connection?.effectiveType === "slow-2g" ||
      connection?.effectiveType === "2g" ||
      connection?.effectiveType === "3g"
    return !(isDataSaver || isSlowNetwork)
  })
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isModalReady, setIsModalReady] = useState(false)

  useEffect(() => {
    if (shouldLoadVideo || !cardRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoadVideo(true)
          observer.disconnect()
        }
      },
      { rootMargin: "120px 0px", threshold: 0.12 }
    )

    observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [shouldLoadVideo])

  useEffect(() => {
    if (!isOpen) return
    const prevBodyOverflow = document.body.style.overflow
    const prevHtmlOverflow = document.documentElement.style.overflow
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = prevBodyOverflow
      document.documentElement.style.overflow = prevHtmlOverflow
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) setIsModalReady(false)
  }, [isOpen])

  const content = (
    <>
      {cover && !videoReady && (
        <img
          src={cover}
          alt={alt || title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <video
        src={shouldLoadVideo ? video : undefined}
        autoPlay={canAutoplay}
        muted
        loop
        playsInline
        preload="none"
        onCanPlay={() => setVideoReady(true)}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
      >
        <track kind="captions" />
      </video>
      {/* Overlay: dark on hover (desktop), permanent subtle on mobile */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-all duration-300 sm:from-black/0 sm:via-transparent sm:to-transparent sm:opacity-0 sm:group-hover:from-black/70 sm:group-hover:via-black/30 sm:group-hover:to-transparent sm:group-hover:opacity-100" />
      {/* Mobile permanent subtle overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/25 sm:hidden" />
      {/* Play icon */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true" className="scale-100 transition-transform duration-300 drop-shadow-lg sm:scale-[0.8] sm:group-hover:scale-100">
          <circle cx="22" cy="22" r="21" stroke="white" strokeWidth="1.5" opacity="0.8" />
          <path d="M18 14L30 22L18 30V14Z" fill="white" opacity="0.9" />
        </svg>
      </div>
      {/* Title — always visible */}
      {hideOverlayTitle ? null : (
        <span className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-4 pt-8 font-heading text-[15px] font-semibold uppercase leading-tight tracking-[0.08em] text-white/90 sm:px-5 sm:pb-5 sm:pt-10 sm:text-[18px]">
          {title}
        </span>
      )}
      <span className="absolute bottom-5 left-5 z-10 h-px w-0 bg-amber transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-10" />
    </>
  )

  const baseClass =
    "group relative block aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-background transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"

  if (openInModal) {
    return (
      <>
        <div ref={cardRef}>
          <button
            type="button"
            aria-label={`Ver vídeo de ${title}`}
            className={`${baseClass} w-full cursor-pointer text-left`}
            onClick={() => setIsOpen(true)}
          >
            {content}
          </button>
        </div>

        {isOpen && typeof document !== "undefined"
          ? createPortal(
              <div
                className="fixed inset-0 z-[120] flex items-center justify-center bg-black/82 px-3 py-4 backdrop-blur-sm sm:px-6"
                onClick={() => setIsOpen(false)}
                role="dialog"
                aria-modal="true"
                aria-label={`Video de ${title}`}
              >
                <div
                  className="relative max-h-[88svh] max-w-[94vw] overflow-hidden rounded-2xl border border-white/15 bg-background shadow-[0_28px_70px_-30px_rgba(0,0,0,0.95)]"
                  onClick={(event) => event.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="absolute right-3 top-3 z-10 flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/55 px-4 py-2 text-[11px] uppercase text-white/85 transition hover:bg-black/75"
                    aria-label="Cerrar video"
                  >
                    Cerrar
                  </button>
                  <video
                    src={videoHD || video}
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                    onLoadedData={() => setIsModalReady(true)}
                    className="block max-h-[88svh] max-w-[94vw] bg-black object-contain"
                  >
                    <track kind="captions" />
                  </video>
                  <div
                    className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-black/35 transition-opacity duration-300 ${
                      isModalReady ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <span className="h-8 w-8 animate-spin rounded-full border border-white/60 border-t-transparent" />
                  </div>
                </div>
              </div>,
              document.body
            )
          : null}
      </>
    )
  }

  return (
    <div ref={cardRef}>
      <a
        href={video}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver vídeo de ${title}`}
        className={baseClass}
      >
        {content}
      </a>
    </div>
  )
}
