import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getAllPosts, getBlogMetadata } from "@/lib/blog";

export const metadata: Metadata = getBlogMetadata();

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground pt-36 sm:pt-40 pb-24">
        <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/45">Blog</p>
            <h1 className="mt-5 font-display text-[54px] leading-[0.94] uppercase text-foreground sm:text-[72px] lg:text-[96px]">
              Blog de creación de contenido en Madrid
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] sm:text-[17px] leading-[1.9] text-foreground/70 font-sans">
              Guías, comparativas y artículos sobre estudios de grabación, reels, podcast, contenido de marca
              y producción audiovisual en Madrid.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-14 max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-5 lg:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-[28px] border border-white/10 bg-white/[0.02] p-6 sm:p-8 transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.03]"
              >
                <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/45">
                  <span>{post.category}</span>
                  <span className="h-1 w-1 rounded-full bg-accent/50" />
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-6 max-w-[14ch] font-display text-[40px] leading-[0.96] uppercase text-foreground sm:text-[52px]">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-5 max-w-[58ch] text-[15px] sm:text-[16px] leading-[1.85] text-foreground/68 font-sans">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground/50">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex min-h-[44px] items-center border border-accent/40 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:border-accent hover:bg-accent hover:text-background"
                  >
                    Leer artículo
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
