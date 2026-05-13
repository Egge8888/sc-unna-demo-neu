import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { newsItems, getArticleBySlug } from "@/lib/news-data";

export function generateStaticParams() {
  return newsItems
    .filter((item) => item.type === "article")
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return { title: article.title };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const dateFormatted = new Date(article.date).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Navbar current="aktuelles" />

      <main className="max-w-7xl mx-auto px-margin py-xl">
        <div className="max-w-3xl">
          <Link
            href="/aktuelles"
            className="inline-flex items-center gap-xs text-secondary hover:text-primary font-label-bold text-xs uppercase tracking-wider transition-colors mb-lg"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Zurück zu Aktuelles
          </Link>

          <div className="flex items-center gap-sm flex-wrap mb-sm">
            <time className="text-[11px] text-secondary font-label-bold uppercase tracking-wider">
              {dateFormatted}
            </time>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-label-bold uppercase tracking-wider bg-primary/10 text-primary px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display-xl text-display-xl text-on-background mb-lg leading-tight">
            {article.title}
          </h1>

          <div className="space-y-md">
            {article.content.map((paragraph, i) => (
              <p key={i} className="font-body-lg text-on-surface leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {article.attachmentUrl && (
            <div className="mt-lg p-md bg-surface-container-low border border-surface-container-highest rounded-xl flex items-center gap-md">
              <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0">
                picture_as_pdf
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-label-bold text-xs uppercase tracking-wider text-secondary mb-1">
                  Anhang
                </p>
                <p className="font-body-md text-on-surface text-sm truncate">
                  {article.attachmentLabel}
                </p>
              </div>
              <a
                href={article.attachmentUrl}
                target="_blank"
                rel="noopener"
                className="flex-shrink-0 inline-flex items-center gap-xs bg-primary text-on-primary font-label-bold text-xs uppercase px-4 py-2 rounded hover:opacity-90 transition-opacity tracking-wider"
              >
                <span className="material-symbols-outlined text-sm">download</span>
                Öffnen
              </a>
            </div>
          )}

          <div className="mt-xl pt-lg border-t border-surface-container-high">
            <Link
              href="/aktuelles"
              className="inline-flex items-center gap-xs text-secondary hover:text-primary font-label-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Alle Beiträge
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
