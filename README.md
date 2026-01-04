This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Variables

This project requires several environment variables to be configured. Create a `.env.local` file in the root directory with the following variables:

```bash
# Base URL for the application (used for metadata and Open Graph images)
NEXT_PUBLIC_BASE_URL=https://your-domain.com

# Download links for different platforms
NEXT_PUBLIC_DOWNLOAD_APPSTORE=https://apps.apple.com/app/your-app-id
NEXT_PUBLIC_DOWNLOAD_GOOGLE_PLAY=https://play.google.com/store/apps/details?id=your.app.id
NEXT_PUBLIC_DOWNLOAD_PC=https://your-domain.com/download/pc
NEXT_PUBLIC_DOWNLOAD_APK=https://your-domain.com/download/app.apk

# QR code value/link for download
NEXT_PUBLIC_DOWNLOAD_QR=https://your-domain.com/download
```

### Notes

- All environment variables prefixed with `NEXT_PUBLIC_` are exposed to the browser
- For local development, you can use `http://localhost:3000` as the `NEXT_PUBLIC_BASE_URL`
- Make sure to add `.env.local` to your `.gitignore` file to avoid committing sensitive information
- For production, set these variables in your hosting platform's environment variable settings (e.g., Vercel, Netlify)

## Creating News Posts

To create a new news post with a thumbnail image, follow these steps:

### 1. Add Thumbnail Image

Place your thumbnail image in the `public/` directory. The image should be named descriptively (e.g., `my-news-post.png`).

**Example:**

```
public/my-news-post.png
```

### 2. Create MDX File

Create a new `.mdx` file in the `posts/news/` directory. The filename should follow the pattern: `{slug}-{unique-id}.mdx`

**Example:**

```
posts/news/my-news-post-123456789.mdx
```

### 3. Add Metadata

At the top of your MDX file, export a `metadata` object with the following structure:

```mdx
export const metadata = {
  title: "Your News Post Title",
  description:
    "A brief description of your news post that will be used for SEO and previews.",
  thumbnail: "/my-news-post.png",
  date: "2025-01-15",
  author: "Author Name",
};

;
```

**Required fields:**

- `title`: The title of your news post
- `description`: A brief description (used for SEO and previews)
- `thumbnail`: Path to the thumbnail image (must start with `/` and reference a file in `public/`)
- `date`: Publication date in `YYYY-MM-DD` format
- `author`: Author name

### 4. Write Content

After the metadata, add your content. Wrap each section in `<div>` tags:

```mdx
<div>

![Image alt text](/my-news-post.png)

</div>

<div>

## Section Title

Your content here. You can use **bold**, _italic_, lists, and other Markdown features.

</div>

<div>

## Another Section

More content...

</div>
```

### 5. Complete Example

Here's a complete example of a news post:

```mdx
export const metadata = {
  title: "Shinobi War – New Feature Update",
  description:
    "Introducing exciting new features to enhance your ninja experience.",
  thumbnail: "/feature-update.png",
  date: "2025-01-15",
  author: "Shinobi War Team",
};

<div>

![Feature Update Banner](/feature-update.png)

</div>

<div>

## Introduction

Welcome to our latest update! We're excited to introduce new features...

</div>

<div>

## New Features

- Feature 1
- Feature 2
- Feature 3

</div>
```

### Notes

- **Thumbnail images** must be placed in the `public/` directory
- **Thumbnail paths** in metadata should start with `/` (e.g., `/my-image.png`)
- **File naming**: Use `{slug}-{unique-id}.mdx` format for the filename
- **Date format**: Use `YYYY-MM-DD` format (e.g., `2025-01-15`)
- **Content sections**: Wrap each section in `<div>` tags for proper styling
- Posts are automatically sorted by date (newest first) on the news page
- The latest post's thumbnail will be displayed in the news section

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
