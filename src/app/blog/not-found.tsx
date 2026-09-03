import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function BlogNotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-5 pt-32 pb-20">
        <div className="max-w-xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/45">Blog</p>
          <h1 className="mt-5 font-display text-[48px] leading-[0.96] uppercase text-foreground sm:text-[64px]">
            Artículo no encontrado
          </h1>
          <p className="mt-4 text-[15px] leading-[1.85] text-foreground/70 font-sans">
            Este post no existe o todavía no está listo. Vuelve al índice del blog y seguimos.
          </p>
          <div className="mt-8">
            <Link href="/blog" className="inline-flex min-h-[44px] items-center border border-accent/40 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:border-accent hover:bg-accent hover:text-background">
              Ir al blog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
