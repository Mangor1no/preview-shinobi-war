import type { MDXComponents } from "mdx/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Custom MDX components for enhanced rendering
 */
const createComponents = (): MDXComponents => {
  return {
    // Enhanced image component with Next.js optimization
    img: ({ src, alt, ...props }) => {
      return (
        <Image
          src={src}
          alt={alt}
          width={800}
          height={400}
          className="rounded-lg border border-black/60 w-full"
          {...props}
        />
      );
    },

    // Enhanced heading components with proper styling
    h1: ({ children, ...props }) => (
      <h1 className="text-6xl font-bold mb-4" {...props}>
        {children}
      </h1>
    ),

    h2: ({ children, ...props }) => (
      <h2 className="text-3xl font-medium mb-4" {...props}>
        {children}
      </h2>
    ),

    h3: ({ children, ...props }) => (
      <h3
        className="text-2xl font-medium mb-4"
        {...props}
        style={{
          fontSize: 24,
        }}
      >
        {children}
      </h3>
    ),

    // Enhanced paragraph with proper spacing
    p: ({ children, ...props }) => (
      <p className="text-base mb-4" {...props}>
        {children}
      </p>
    ),

    // Enhanced list components
    ul: ({ children, ...props }) => (
      <ul className="list-disc list-inside py-4 space-y-2" {...props}>
        {children}
      </ul>
    ),

    ol: ({ children, ...props }) => (
      <ol className="list-decimal list-inside py-4 space-y-2" {...props}>
        {children}
      </ol>
    ),

    li: ({ children, ...props }) => (
      <li className="text-base" {...props}>
        {children}
      </li>
    ),

    // Enhanced blockquote
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-blue-500 pl-4 italic text-base mb-4"
        {...props}
      >
        {children}
      </blockquote>
    ),

    // Enhanced code blocks
    code: ({ children, ...props }) => (
      <code
        className="bg-black/60 px-2 py-1 rounded text-sm font-mono"
        {...props}
      >
        {children}
      </code>
    ),

    pre: ({ children, ...props }) => (
      <pre
        className="bg-black/60 text-base p-4 rounded-lg overflow-x-auto my-6"
        {...props}
      >
        {children}
      </pre>
    ),

    // Enhanced link component
    a: ({ href, children, ...props }) => {
      return (
        <Link
          href={href || "#"}
          className="text-blue-500 hover:text-blue-600 underline"
          {...props}
        >
          {children}
        </Link>
      );
    },

    // Enhanced horizontal rule
    hr: ({ ...props }) => <hr className="border-black/60" {...props} />,

    // Enhanced strong/bold text
    strong: ({ children, ...props }) => (
      <strong className="font-semibold text-base" {...props}>
        {children}
      </strong>
    ),

    // Enhanced emphasis/italic text
    em: ({ children, ...props }) => (
      <em className="italic text-base" {...props}>
        {children}
      </em>
    ),
  };
};

export function useMDXComponents(): MDXComponents {
  return createComponents();
}
