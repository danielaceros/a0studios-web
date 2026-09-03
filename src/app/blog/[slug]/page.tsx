import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getAllPosts, getPostBySlug, getPostMetadata } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return getPostMetadata(post);
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const faqs = post.body.filter((block) => block.type === "faq");

  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground pt-36 sm:pt-40 pb-24">
        <article className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12">
          <header className="border-b border-white/10 pb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/45">{post.heroKicker}</p>
            <h1 className="mt-5 font-display text-[48px] leading-[0.96] uppercase text-foreground sm:text-[68px] lg:text-[82px]">
              {post.title}
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] sm:text-[17px] leading-[1.9] text-foreground/70 font-sans">
              {post.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/45">
              <span>{post.publishedAt}</span>
              <span className="h-1 w-1 self-center rounded-full bg-accent/50" />
              <span>{post.readingTime}</span>
              <span className="h-1 w-1 self-center rounded-full bg-accent/50" />
              <span>{post.keyword}</span>
            </div>
          </header>

          <div className="mt-10 space-y-6 sm:space-y-7">
            {post.body.map((block, index) => {
              if (block.type === "paragraph") {
                return (
                  <p key={index} className="text-[15px] sm:text-[17px] leading-[1.95] text-foreground/78 font-sans">
                    {block.text}
                  </p>
                );
              }

              if (block.type === "heading") {
                const Tag = block.level === 2 ? "h2" : "h3";
                const className =
                  block.level === 2
                    ? "pt-6 font-display text-[32px] leading-[0.98] uppercase text-foreground sm:text-[42px]"
                    : "pt-2 font-mono text-[12px] uppercase tracking-[0.18em] text-accent";
                return <Tag key={index} className={className}>{block.text}</Tag>;
              }

              if (block.type === "list") {
                const ListTag = block.ordered ? "ol" : "ul";
                return (
                  <ListTag key={index} className="space-y-3 pl-5 text-[15px] sm:text-[16px] leading-[1.85] text-foreground/74 font-sans list-disc marker:text-accent/70">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ListTag>
                );
              }

              if (block.type === "faq") {
                return (
                  <div key={index} className="rounded-[24px] border border-white/10 bg-white/[0.02] p-5 sm:p-6">
                    <h3 className="font-mono text-[12px] uppercase tracking-[0.18em] text-accent">{block.question}</h3>
                    <p className="mt-4 text-[14px] sm:text-[15px] leading-[1.85] text-foreground/72 font-sans">{block.answer}</p>
                  </div>
                );
              }

              if (block.type === "image") {
                return (
                  <figure key={index} className="my-2 sm:my-4">
                    <div className="overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.02]">
                      <Image
                        src={block.src}
                        alt={block.alt}
                        width={block.width}
                        height={block.height}
                        priority={block.priority}
                        sizes="(min-width: 1024px) 720px, 100vw"
                        className="h-auto w-full"
                      />
                    </div>
                    {block.caption ? (
                      <figcaption className="mt-3 text-[12px] sm:text-[13px] leading-[1.6] text-white/50 font-mono">
                        {block.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                );
              }

              return null;
            })}
          </div>

          <div className="mt-14 rounded-[28px] border border-accent/20 bg-accent/5 p-6 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Pedir Presupuesto</p>
            <h2 className="mt-4 font-display text-[36px] leading-[0.96] uppercase text-foreground sm:text-[52px] max-w-[12ch]">
              Si quieres grabar contenido premium en Madrid, hablemos
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] sm:text-[16px] leading-[1.85] text-foreground/70 font-sans">
              Podemos plantear desde una sesión ágil de reels hasta una jornada de producción completa con edición y entrega.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#contacto" className="inline-flex min-h-[44px] items-center border border-accent px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:bg-accent hover:text-background">
                Pedir Presupuesto
              </Link>
              <Link href="/blog" className="inline-flex min-h-[44px] items-center border border-white/10 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/60 transition-all duration-300 hover:text-foreground">
                Volver al blog
              </Link>
            </div>
          </div>
        </article>

      </main>
      <Footer />
    </>
  );
}
