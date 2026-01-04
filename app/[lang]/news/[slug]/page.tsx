import type { Metadata } from "next";
import LinkWithLocale from "@/app/components/link-with-locale";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { getNewsBySlug } from "@/utils/get-posts";
import MDXContent from "./mdx-content";
import Image from "next/image";
import { Trans } from "@lingui/react/macro";
import { initLingui } from "@/app/initLingui";

interface MDXPageProps {
  params: Promise<{ slug: string; lang: string }>;
}

/**
 * Generate metadata for the blog post
 */
export async function generateMetadata({
  params,
}: MDXPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const metadata = await getNewsBySlug(slug);

    if (!metadata) {
      return {
        title: "Blog Post Not Found",
        description: "The requested blog post could not be found.",
      };
    }

    // Fetch product data to get thumbnail for OpenGraph image
    const ogImage = metadata?.thumbnail;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
    const canonicalUrl = `${baseUrl}/news/${slug}`;

    return {
      title: `${metadata?.title} | Shinobi War News`,
      description: metadata?.description || "A post from Shinobi War",
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: `${metadata?.title} | Shinobi War News` || "News Post",
        description: metadata?.description || "A post from Shinobi War",
        images: ogImage ? [ogImage] : [],
        type: "article",
        publishedTime: metadata?.date,
        authors: metadata?.author ? [metadata.author] : [],
        url: canonicalUrl,
      },
      twitter: {
        card: "summary_large_image",
        title: `${metadata?.title} | Shinobi War News` || "News Post",
        description: metadata?.description || "A post from Shinobi War",
        images: ogImage ? [ogImage] : [],
      },
    };
  } catch (error) {
    console.error(`Failed to load metadata for ${slug}:`, error);
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }
}

export default async function Page({ params }: MDXPageProps) {
  const { slug, lang } = await params;
  initLingui(lang);

  const metadata = await getNewsBySlug(slug);

  if (!metadata) {
    notFound();
  }

  return (
    <article className="px-4 py-20 space-y-12 text-white relative">
      <Image
        src="/images/visual/decor.png"
        alt="Decor"
        // fill
        width={400}
        height={400}
        className="object-cover absolute top-1/5 left-0"
      />
      <Image
        src="/images/visual/decor.png"
        alt="Decor"
        width={400}
        height={400}
        className="object-cover absolute bottom-0 right-0"
      />
      <div className="container mx-auto max-w-4xl z-10 relative">
        <LinkWithLocale
          href="/news"
          locale={lang || "en"}
          className="text-base text-blue-500 hover:text-blue-600"
        >
          ← <Trans>Back to News</Trans>
        </LinkWithLocale>
        {/* Blog post header with metadata */}
        <header className="space-y-4 mt-4">
          <h1 className="text-4xl font-medium">{metadata.title}</h1>
          {metadata.description && <p>{metadata.description}</p>}

          <div className="flex flex-wrap items-center gap-1 text-base mb-10">
            {metadata.author && (
              <span>
                <Trans>Written by</Trans> {metadata.author}
              </span>
            )}
            {metadata.author && metadata.date && <span>-</span>}
            {metadata.date && (
              <span>
                {new Date(metadata.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            )}
          </div>
        </header>

        {/* MDX Content */}
        <MDXContent slug={slug} />
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "posts", "news");
  const files = fs
    .readdirSync(contentDir)
    .filter((file: string) => file.endsWith(".mdx"))
    .map((file: string) => ({
      slug: file.replace(".mdx", ""),
    }));

  return files;
}

export const dynamicParams = false;
