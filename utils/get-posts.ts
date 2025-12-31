import fs from "fs";
import path from "path";

export interface NewsMetadata {
  title: string;
  description: string;
  thumbnail?: string;
  date?: string;
  author?: string;
  slug: string;
}

export interface NewsWithProduct extends NewsMetadata {
  productThumbnail?: string;
}

/**
 * Extract metadata from MDX file content
 */
function extractMetadata(content: string): NewsMetadata | null {
  try {
    // Match the metadata export: export const metadata = { ... };
    const metadataMatch = content.match(
      /export\s+const\s+metadata\s*=\s*({[\s\S]*?});/
    );

    if (!metadataMatch) {
      return null;
    }

    // Evaluate the metadata object safely
    // Using Function constructor to parse the metadata object from the file
    const metadata = new Function(`return ${metadataMatch[1]}`)() as Omit<
      NewsMetadata,
      "slug"
    >;

    return metadata as NewsMetadata;
  } catch (error) {
    console.error("Failed to extract metadata:", error);
    return null;
  }
}

/**
 * Get all news metadata from MDX files
 */
export async function getAllNews(): Promise<NewsMetadata[]> {
  const contentDir = path.join(process.cwd(), "posts", "news");

  try {
    const files = fs.readdirSync(contentDir);
    const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

    const posts = mdxFiles
      .map((file) => {
        try {
          const filePath = path.join(contentDir, file);
          const content = fs.readFileSync(filePath, "utf-8");
          const metadata = extractMetadata(content);

          if (!metadata) {
            console.warn(`No metadata found in ${file}`);
            return null;
          }

          return {
            ...metadata,
            slug: file.replace(".mdx", ""),
          } as NewsMetadata;
        } catch (error) {
          console.error(`Failed to load metadata for ${file}:`, error);
          return null;
        }
      })
      .filter((post): post is NewsMetadata => post !== null);

    return posts.sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error("Failed to read content directory:", error);
    return [];
  }
}

/**
 * Get a specific news by slug
 */
export async function getNewsBySlug(
  slug: string
): Promise<NewsMetadata | null> {
  try {
    const filePath = path.join(process.cwd(), "posts", "news", `${slug}.mdx`);
    const content = fs.readFileSync(filePath, "utf-8");
    const metadata = extractMetadata(content);

    if (!metadata) {
      console.warn(`No metadata found in ${slug}.mdx`);
      return null;
    }

    return {
      ...metadata,
      slug,
    } as NewsMetadata;
  } catch (error) {
    console.error(`Failed to load news ${slug}:`, error);
    return null;
  }
}
