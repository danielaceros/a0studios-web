import Link from "next/link";
import Navbar from "@/components/a0/Nav";
import Footer from "@/components/a0/Footer";

export default function BlogNotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-5 pt-32 pb-20">
        <div className="max-w-xl text-center">
          <p className="meta">Blog</p>
          <h1 className="display mt-5 text-foreground">
            Artículo no encontrado
          </h1>
          <p className="lead mt-6">
            Este post no existe o todavía no está listo. Vuelve al índice del blog y seguimos.
          </p>
          <div className="mt-8">
            <Link href="/blog" className="btn btn-outline">
              Ir al blog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
