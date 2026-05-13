"use client";

import { useState } from "react";
import Link from "next/link";
import type { NewsItem } from "@/lib/news-data";

type Filter = "alle" | "artikel" | "infobriefe";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ArticleCard({ item }: { item: Extract<NewsItem, { type: "article" }> }) {
  return (
    <article className="bg-surface-container-lowest border border-surface-container-highest rounded-xl overflow-hidden shadow-ambient shadow-ambient-hover transition-all flex flex-col">
      <div className="p-md flex flex-col flex-1">
        <div className="flex items-center gap-sm mb-sm flex-wrap">
          <time className="text-[11px] text-secondary font-label-bold uppercase tracking-wider">
            {formatDate(item.date)}
          </time>
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-label-bold uppercase tracking-wider bg-primary/10 text-primary px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="font-extrabold text-on-background text-lg leading-snug mb-sm">
          {item.title}
        </h2>
        <p className="text-secondary text-sm font-body-md leading-relaxed flex-1">
          {item.excerpt}
        </p>
        <div className="mt-md flex items-center gap-md flex-wrap">
          <Link
            href={`/aktuelles/${item.slug}`}
            className="inline-flex items-center gap-xs font-label-bold text-xs uppercase text-primary hover:underline tracking-wider"
          >
            Weiterlesen
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
          {item.attachmentUrl && (
            <a
              href={item.attachmentUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-xs font-label-bold text-xs uppercase text-secondary hover:text-primary transition-colors tracking-wider"
            >
              <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
              {item.attachmentLabel ?? "Anhang"}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function NewsletterCard({ item }: { item: Extract<NewsItem, { type: "newsletter" }> }) {
  return (
    <article className="bg-surface-container-lowest border border-surface-container-highest rounded-xl overflow-hidden shadow-ambient shadow-ambient-hover transition-all flex flex-col">
      <div className="bg-primary/5 border-b border-surface-container-highest px-md py-sm flex items-center gap-sm">
        <span className="material-symbols-outlined text-primary text-xl">picture_as_pdf</span>
        <span className="text-[10px] font-label-bold uppercase tracking-wider text-primary">Infobrief / Newsletter</span>
      </div>
      <div className="p-md flex flex-col flex-1">
        <time className="text-[11px] text-secondary font-label-bold uppercase tracking-wider mb-sm block">
          {formatDate(item.date)}
        </time>
        <h2 className="font-extrabold text-on-background text-lg leading-snug mb-sm">
          {item.title}
        </h2>
        <p className="text-secondary text-sm font-body-md leading-relaxed mb-md">
          {item.excerpt}
        </p>
        <div className="flex flex-wrap gap-xs mb-md">
          {item.topics.map((topic) => (
            <span
              key={topic}
              className="text-[10px] font-label-bold bg-surface-container-high text-secondary px-2 py-0.5 rounded-full"
            >
              {topic}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <a
            href={item.pdfUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-xs bg-primary text-on-primary font-label-bold text-xs uppercase px-4 py-2 rounded hover:opacity-90 transition-opacity tracking-wider"
          >
            <span className="material-symbols-outlined text-sm">download</span>
            Infobrief öffnen
          </a>
        </div>
      </div>
    </article>
  );
}

export default function AktuellesClient({ items }: { items: NewsItem[] }) {
  const [filter, setFilter] = useState<Filter>("alle");

  const filtered = items.filter((item) => {
    if (filter === "artikel") return item.type === "article";
    if (filter === "infobriefe") return item.type === "newsletter";
    return true;
  });

  const tabs: { key: Filter; label: string; count: number }[] = [
    { key: "alle", label: "Alle", count: items.length },
    { key: "artikel", label: "Artikel", count: items.filter((i) => i.type === "article").length },
    { key: "infobriefe", label: "Infobriefe", count: items.filter((i) => i.type === "newsletter").length },
  ];

  return (
    <>
      <div className="flex items-center gap-sm flex-wrap mb-lg">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`flex items-center gap-xs font-label-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-colors ${
              filter === tab.key
                ? "bg-primary text-on-primary border-primary"
                : "bg-surface-container-lowest text-secondary border-surface-container-highest hover:border-primary hover:text-primary"
            }`}
          >
            {tab.label}
            <span
              className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-full ${
                filter === tab.key ? "bg-white/20 text-on-primary" : "bg-surface-container-high text-secondary"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {filtered.map((item) =>
          item.type === "article" ? (
            <ArticleCard key={item.slug} item={item} />
          ) : (
            <NewsletterCard key={item.slug} item={item} />
          )
        )}
      </div>
    </>
  );
}
