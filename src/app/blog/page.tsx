import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/a0/Nav";
import Footer from "@/components/a0/Footer";
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
            <div className="rule" />
            <div className="flex items-center gap-3 pt-4">
              <span className="tick" aria-hidden="true" />
              <p className="meta">Blog</p>
            </div>
            <h1 className="display mt-9 max-w-[18ch] text-foreground sm:mt-11">
              Blog de creación de contenido en Madrid
            </h1>
            <p className="lead mt-7 max-w-[52ch]">
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
                className="panel panel-hover p-6 sm:p-8"
              >
                <div className="meta flex flex-wrap items-center gap-3">
                  <span>{post.category}</span>
                  <span className="h-px w-3 bg-foreground/35" />
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-6 max-w-[20ch] font-heading text-[clamp(1.5rem,2.6vw,2.1rem)] leading-[1.1] tracking-[-0.03em] text-foreground">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="prose-body mt-5 max-w-[58ch]">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="btn btn-outline btn-sm"
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
