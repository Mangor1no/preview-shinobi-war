"use client";

import { useEffect, useState } from "react";
import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "@/app/mdx-components";

interface MDXContentProps {
  slug: string;
}

export default function MDXContent({ slug }: MDXContentProps) {
  const [Content, setContent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const components = useMDXComponents();

  useEffect(() => {
    const loadMDX = async () => {
      try {
        const mdxModule = await import(`../../../posts/news/${slug}.mdx`);
        setContent(() => mdxModule.default);
      } catch (err) {
        console.error(`Failed to load MDX file: ${slug}`, err);
        setError(`Failed to load content for ${slug}`);
      }
    };

    loadMDX();
  }, [slug]);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!Content) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <MDXProvider components={components}>
      <div className="text-white max-w-none space-y-10">
        <Content />
      </div>
    </MDXProvider>
  );
}
