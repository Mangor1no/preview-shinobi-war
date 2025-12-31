import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllNews } from "@/utils/get-posts";

export const metadata: Metadata = {
  title: "News | Shinobi War",
  description: "Latest news and updates from Shinobi War",
};

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="relative px-4 py-20">
        <Image
          src="/images/visual/decor.png"
          alt="Decor"
          width={400}
          height={400}
          className="object-cover absolute top-1/5 left-0 opacity-50"
        />
        <Image
          src="/images/visual/decor.png"
          alt="Decor"
          width={400}
          height={400}
          className="object-cover absolute bottom-0 right-0 opacity-50"
        />
        <div className="container mx-auto max-w-6xl z-10 relative">
          <Link
            href="/"
            className="text-base text-blue-500 hover:text-blue-600 mb-8 inline-block"
          >
            ← Back to Home
          </Link>

          <h1 className="text-5xl font-bold mb-12">News</h1>

          {news.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/50 text-lg">No news available</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {news.map((item) => (
                <Link
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  className="group rounded-xl border border-[#DA102250] bg-black/80 p-6 hover:bg-black/90 transition-all hover:border-[#DA1022]"
                >
                  {item.thumbnail && (
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                    {item.title}
                  </h2>
                  {item.description && (
                    <p className="text-white/70 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>
                  )}
                  <div className="flex items-center gap-2 text-xs text-white/50">
                    {item.author && <span>{item.author}</span>} -
                    {item.date && (
                      <span>
                        {new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
