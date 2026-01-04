import { Inter } from "next/font/google";
import { LinguiClientProvider } from "@/app/components/LinguiClientProvider";
import { allMessages, getI18nInstance } from "@/app/appRouterI18n";
import linguiConfig from "@/lingui.config";
import { msg } from "@lingui/core/macro";
import { initLingui, PageLangParam } from "../initLingui";
import { PropsWithChildren } from "react";
import "@/app/globals.css";
import Header from "@/app/components/header";
import Footer from "../components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return linguiConfig.locales.map((lang) => ({ lang }));
}

export async function generateMetadata(props: PageLangParam) {
  const i18n = getI18nInstance((await props.params).lang);
  const title = msg`Shinobi War - Epic Ninja Battle Game`;
  const description = msg`Join the ultimate ninja warfare. Choose your class, master your weapons, and dominate the battlefield.`;

  return {
    title: i18n._(title),
    description: i18n._(description),
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
  };
}

export default async function RootLayout({
  children,
  params,
}: PropsWithChildren<PageLangParam>) {
  const lang = (await params).lang;
  initLingui(lang);

  return (
    <html lang={lang}>
      <body className={`${inter.variable} antialiased bg-black text-white`}>
        <LinguiClientProvider
          initialLocale={lang}
          initialMessages={allMessages[lang]!}
        >
          <Header />
          {children}
          <Footer />
        </LinguiClientProvider>
      </body>
    </html>
  );
}
