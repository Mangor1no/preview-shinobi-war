"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkProps } from "next/link";
import React from "react";

// This component is a wrapper around the Link component that adds the locale to the href
// It is used to ensure that the link is always correct for the current locale
// Can be used in both client and server components:
// - In client components: locale is auto-detected from pathname (optional prop)
// - In server components: pass locale as a required prop
function LinkWithLocale({
  href,
  locale: providedLocale,
  children,
  ...props
}: LinkProps & {
  className?: string;
  locale?: string;
  children?: React.ReactNode;
}) {
  const pathname = usePathname();
  // If locale is provided (e.g., from server component), use it; otherwise detect from pathname
  const locale =
    providedLocale || (pathname ? pathname.split("/")[1] : null) || "en";

  // Don't add locale if href already starts with a locale or is an external URL
  if (
    typeof href === "string" &&
    (href.startsWith("http") ||
      href.startsWith("#") ||
      (href.startsWith("/") && /^\/(en|ja|kr|th|km|cn)\//.test(href)))
  ) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  const newHref = `/${locale}${href}`;
  return (
    <Link href={newHref} {...props}>
      {children}
    </Link>
  );
}

export default LinkWithLocale;
