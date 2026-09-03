import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/a0/Nav";
import Footer from "@/components/a0/Footer";
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
          <header className="border-b border-line pb-10">
            <div className="rule" />
            <div className="flex items-center gap-3 pt-4">
              <span className="tick" aria-hidden="true" />
              <p className="meta">{post.heroKicker}</p>
            </div>
            <h1 className="display mt-9 text-foreground sm:mt-11">
              {post.title}
            </h1>
            <p className="lead mt-7 max-w-[54ch]">
              {post.description}
            </p>
            <div className="meta mt-8 flex flex-wrap items-center gap-3">
              <span>{post.publishedAt}</span>
              <span className="h-px w-3 bg-foreground/35" />
              <span>{post.readingTime}</span>
              <span className="h-px w-3 bg-foreground/35" />
              <span>{post.keyword}</span>
            </div>
          </header>

          <div className="mt-10 space-y-6 sm:space-y-7">
            {post.body.map((block, index) => {
              if (block.type === "paragraph") {
                return (
                  <p key={index} className="text-[1rem] leading-[1.9] text-foreground/78 sm:text-[1.05rem]">
                    {block.text}
                  </p>
                );
              }

              if (block.type === "heading") {
                const Tag = block.level === 2 ? "h2" : "h3";
                const className =
                  block.level === 2
                    ? "pt-8 font-heading text-[clamp(1.6rem,3vw,2.3rem)] leading-[1.08] tracking-[-0.032em] text-foreground"
                    : "pt-4 meta";
                return <Tag key={index} className={className}>{block.text}</Tag>;
              }

              if (block.type === "list") {
                const ListTag = block.ordered ? "ol" : "ul";
                return (
                  <ListTag key={index} className="list-disc space-y-3 pl-5 text-[0.98rem] leading-[1.85] text-foreground/74 marker:text-foreground/40">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ListTag>
                );
              }

              if (block.type === "faq") {
                return (
                  <div key={index} className="panel p-5 sm:p-6">
                    <h3 className="font-heading text-[1.05rem] leading-[1.3] tracking-[-0.02em] text-foreground">{block.question}</h3>
                    <p className="prose-body mt-4">{block.answer}</p>
                  </div>
                );
              }

              if (block.type === "image") {
                return (
                  <figure key={index} className="my-2 sm:my-4">
                    <div className="overflow-hidden rounded-[12px] border border-line bg-card">
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
                      <figcaption className="meta mt-3 normal-case tracking-[0.01em] text-[12.5px]">
                        {block.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                );
              }

              return null;
            })}
          </div>

          <div className="panel-raised mt-16 p-7 sm:p-10">
            <p className="meta">Pedir presupuesto</p>
            <h2 className="display mt-6 max-w-[16ch] text-foreground">
              Si quieres grabar contenido premium en Madrid, hablemos
            </h2>
            <p className="lead mt-6 max-w-[52ch]">
              Podemos plantear desde una sesión ágil de reels hasta una jornada de producción completa con edición y entrega.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#contacto" className="btn btn-solid">
                Pedir Presupuesto
              </Link>
              <Link href="/blog" className="btn btn-outline">
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
