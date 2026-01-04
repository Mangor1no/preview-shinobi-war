"use client";

import { blackpast } from "@/utils/fonts";
import { useState } from "react";
import Image from "next/image";
import type { NewsMetadata } from "@/utils/get-posts";
import LinkWithLocale from "@/app/components/link-with-locale";
import { Trans } from "@lingui/react/macro";

interface NewsSectionProps {
  news: NewsMetadata[];
}

export default function NewsSection({ news }: NewsSectionProps) {
  const [activeTab, setActiveTab] = useState("news");
  const latestNews = news.length > 0 ? news[0] : null;
  const thumbnailImage =
    latestNews?.thumbnail || "/images/news/news-placeholder.png";
  const thumbnailAlt = latestNews?.title || "Latest news";

  return (
    <section className="relative min-h-screen">
      <Image
        src="/images/news/tower.png"
        alt="tower"
        width={500}
        height={500}
        className="absolute w-fit right-0 bottom-0 object-cover h-full pointer-events-none"
      />
      <div className="absolute bottom-0 bg-linear-to-b from-transparent via-black/90 to-black h-2/3 w-full pointer-events-none"></div>
      <div className="relative my-20 px-4 py-20 container mx-auto h-full space-y-10">
        <div
          className={`text-5xl ${blackpast.className} flex items-center flex-wrap gap-2`}
        >
          <button
            type="button"
            className={activeTab === "news" ? "text-blue-500" : "text-blue-900"}
            onClick={() => setActiveTab("news")}
          >
            <h2>
              <Trans>news</Trans>
            </h2>
          </button>
          <span className="text-blue-600/40">•</span>
          <button
            type="button"
            className={
              activeTab === "guides" ? "text-blue-500" : "text-blue-900"
            }
            onClick={() => setActiveTab("guides")}
          >
            <h2>
              <Trans>guides</Trans>
            </h2>
          </button>
          <span className="text-blue-600/40">•</span>
          <button
            type="button"
            className={
              activeTab === "highlights" ? "text-blue-500" : "text-blue-900"
            }
            onClick={() => setActiveTab("highlights")}
          >
            <h2>
              <Trans>highlights</Trans>
            </h2>
          </button>
        </div>
        <div className="rounded-xl border-3 border-[#DA102250] p-6 bg-black/80 max-w-2xl">
          <Image
            src={thumbnailImage}
            alt={thumbnailAlt}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <ul className="mt-8 divide-y divide-white/20 custom-list">
            {news.length > 0 ? (
              news.map((item) => (
                <li key={item.slug} className="py-3 font-bold">
                  <LinkWithLocale href={`/news/${item.slug}`}>
                    {item.title}
                  </LinkWithLocale>
                </li>
              ))
            ) : (
              <li className="py-3 font-bold text-white/50">
                <Trans>No news available</Trans>
              </li>
            )}
          </ul>
        </div>
        <LinkWithLocale
          href="/news"
          className="inline-block bg-red-700 hover:bg-red-800 transition-all text-white font-medium px-4 py-1 rounded-md"
        >
          <Trans>Read More</Trans>
        </LinkWithLocale>
      </div>
    </section>
  );
}
